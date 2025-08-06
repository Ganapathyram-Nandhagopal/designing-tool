"use client"

import type React from "react"

import { useState, useMemo } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Search, Palette, Type, BracketsIcon as Spacing, CornerUpRight } from "lucide-react"

interface Variable {
  id: string
  name: string
  description: string
  type: string
  valuesByMode: Record<string, any>
  resolvedValuesByMode: Record<string, any>
  scopes: string[]
}

interface VariableCollection {
  id: string
  name: string
  modes: Record<string, string>
  variables: Variable[]
}

interface DesignTokenBrowserProps {
  tailwindTokens: VariableCollection
  themeTokens: VariableCollection
}

export function DesignTokenBrowser({ tailwindTokens, themeTokens }: DesignTokenBrowserProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")

  // Organize tokens by category
  const organizedTokens = useMemo(() => {
    const organize = (collection: VariableCollection) => {
      const categories: Record<string, Variable[]> = {
        colors: [],
        spacing: [],
        typography: [],
        radius: [],
        shadows: [],
        other: [],
      }

      collection.variables.forEach((variable) => {
        const name = variable.name.toLowerCase()
        if (name.includes("color") || name.includes("pw-")) {
          categories.colors.push(variable)
        } else if (name.includes("spacing") || name.includes("width") || name.includes("height")) {
          categories.spacing.push(variable)
        } else if (name.includes("font") || name.includes("text") || name.includes("leading")) {
          categories.typography.push(variable)
        } else if (name.includes("radius") || name.includes("rounded")) {
          categories.radius.push(variable)
        } else if (name.includes("shadow") || name.includes("blur")) {
          categories.shadows.push(variable)
        } else {
          categories.other.push(variable)
        }
      })

      return categories
    }

    return {
      tailwind: organize(tailwindTokens),
      theme: organize(themeTokens),
    }
  }, [tailwindTokens, themeTokens])

  // Filter tokens based on search
  const filteredTokens = useMemo(() => {
    const filterCategory = (tokens: Variable[]) => {
      return tokens.filter(
        (token) =>
          token.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          token.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    const filterCollection = (categories: Record<string, Variable[]>) => {
      const filtered: Record<string, Variable[]> = {}
      Object.entries(categories).forEach(([category, tokens]) => {
        if (selectedCategory === "all" || selectedCategory === category) {
          filtered[category] = filterCategory(tokens)
        }
      })
      return filtered
    }

    return {
      tailwind: filterCollection(organizedTokens.tailwind),
      theme: filterCollection(organizedTokens.theme),
    }
  }, [organizedTokens, searchTerm, selectedCategory])

  const renderTokenValue = (variable: Variable) => {
    const value = variable.resolvedValuesByMode["1:0"] || variable.resolvedValuesByMode["2:0"]
    const rawValue = variable.valuesByMode["1:0"] || variable.valuesByMode["2:0"]

    if (variable.type === "COLOR" && value?.resolvedValue) {
      const color = value.resolvedValue
      const rgba = `rgba(${Math.round(color.r * 255)}, ${Math.round(color.g * 255)}, ${Math.round(color.b * 255)}, ${color.a})`
      const hex = `#${Math.round(color.r * 255)
        .toString(16)
        .padStart(2, "0")}${Math.round(color.g * 255)
        .toString(16)
        .padStart(2, "0")}${Math.round(color.b * 255)
        .toString(16)
        .padStart(2, "0")}`

      return (
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded border border-border" style={{ backgroundColor: rgba }} />
          <div className="text-sm">
            <div className="font-mono">{hex}</div>
            <div className="text-muted-foreground text-xs">{rgba}</div>
            {value.alias && (
              <div className="text-muted-foreground text-xs">Alias: {value.aliasName || value.alias}</div>
            )}
          </div>
        </div>
      )
    }

    if (variable.type === "FLOAT") {
      let numValue = value?.resolvedValue

      // Handle cases where the value is an object (like variable alias)
      if (typeof rawValue === "object" && rawValue !== null) {
        if (rawValue.type === "VARIABLE_ALIAS") {
          numValue = value?.resolvedValue
        } else {
          numValue = null
        }
      } else {
        numValue = numValue || rawValue
      }

      if (typeof numValue === "number") {
        return (
          <div className="space-y-1">
            <div className="font-mono text-sm">{numValue}px</div>
            {value?.alias && (
              <div className="text-muted-foreground text-xs">Alias: {value.aliasName || value.alias}</div>
            )}
          </div>
        )
      }
    }

    if (variable.type === "STRING") {
      let stringValue = value?.resolvedValue

      // Handle cases where the value is an object
      if (typeof rawValue === "object" && rawValue !== null) {
        stringValue = value?.resolvedValue
      } else {
        stringValue = stringValue || rawValue
      }

      if (typeof stringValue === "string") {
        return (
          <div className="space-y-1">
            <div className="font-mono text-sm">"{stringValue}"</div>
            {value?.alias && (
              <div className="text-muted-foreground text-xs">Alias: {value.aliasName || value.alias}</div>
            )}
          </div>
        )
      }
    }

    // Fallback for any other types or complex values
    let displayValue = "No value"

    if (value?.resolvedValue !== undefined) {
      if (typeof value.resolvedValue === "object") {
        displayValue = JSON.stringify(value.resolvedValue, null, 2)
      } else {
        displayValue = String(value.resolvedValue)
      }
    } else if (rawValue !== undefined) {
      if (typeof rawValue === "object") {
        if (rawValue.type === "VARIABLE_ALIAS") {
          displayValue = `Alias: ${rawValue.id}`
        } else {
          displayValue = JSON.stringify(rawValue, null, 2)
        }
      } else {
        displayValue = String(rawValue)
      }
    }

    return (
      <div className="space-y-1">
        <div className="text-muted-foreground text-sm font-mono whitespace-pre-wrap">{displayValue}</div>
        {value?.alias && <div className="text-muted-foreground text-xs">Alias: {value.aliasName || value.alias}</div>}
      </div>
    )
  }

  const renderTokenCard = (variable: Variable) => (
    <Card key={variable.id} className="h-full">
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-medium leading-tight">{variable.name}</CardTitle>
        {variable.description && <CardDescription className="text-xs">{variable.description}</CardDescription>}
      </CardHeader>
      <CardContent className="pt-0">{renderTokenValue(variable)}</CardContent>
    </Card>
  )

  const renderCategory = (categoryName: string, tokens: Variable[], icon: React.ReactNode) => {
    if (tokens.length === 0) return null

    return (
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          {icon}
          <h3 className="text-lg font-semibold capitalize">
            {categoryName} ({tokens.length})
          </h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {tokens.map(renderTokenCard)}
        </div>
      </div>
    )
  }

  const categoryIcons = {
    colors: <Palette className="w-5 h-5" />,
    spacing: <Spacing className="w-5 h-5" />,
    typography: <Type className="w-5 h-5" />,
    radius: <CornerUpRight className="w-5 h-5" />,
    shadows: <div className="w-5 h-5 bg-current rounded opacity-20" />,
    other: <div className="w-5 h-5 bg-current rounded" />,
  }

  return (
    <div className="container mx-auto p-6 space-y-6">
      <div className="space-y-4">
        <div>
          <h1 className="text-3xl font-bold">Design Token Browser</h1>
          <p className="text-muted-foreground">Explore your design system tokens from Figma</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            <Input
              placeholder="Search tokens..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-3 py-2 border border-input bg-background rounded-md text-sm"
          >
            <option value="all">All Categories</option>
            <option value="colors">Colors</option>
            <option value="spacing">Spacing</option>
            <option value="typography">Typography</option>
            <option value="radius">Radius</option>
            <option value="shadows">Shadows</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <Tabs defaultValue="tailwind" className="space-y-6">
        <TabsList>
          <TabsTrigger value="tailwind">TailwindCSS Tokens ({tailwindTokens.variables.length})</TabsTrigger>
          <TabsTrigger value="theme">Theme Tokens ({themeTokens.variables.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="tailwind" className="space-y-8">
          {Object.entries(filteredTokens.tailwind).map(([category, tokens]) =>
            renderCategory(category, tokens, categoryIcons[category as keyof typeof categoryIcons]),
          )}
        </TabsContent>

        <TabsContent value="theme" className="space-y-8">
          {Object.entries(filteredTokens.theme).map(([category, tokens]) =>
            renderCategory(category, tokens, categoryIcons[category as keyof typeof categoryIcons]),
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
