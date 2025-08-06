"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Eye, Palette } from "lucide-react"
import { useState } from "react"

// Color palette data aligned with Tailwind CSS and pw-colors
const colorPalettes = {
  brand: {
    name: "Brand UI (pw-green)",
    description: "Primary brand colors used for key actions, links, and brand elements",
    semantic: "Primary, Success, Positive",
    colors: {
      50: "#F5FEE4", // pw-green-50
      100: "#ECFCCB", // pw-green-100
      200: "#DDFAA5", // pw-green-200
      300: "#C8F769", // pw-green-300
      400: "#B2F42C", // pw-green-400
      500: "#9CE800", // pw-green-500
      600: "#8DC63F", // pw-green-600
      700: "#76AC08", // pw-green-700
      800: "#5B8506", // pw-green-800
      900: "#3D5904", // pw-green-900
    },
  },
  neutral: {
    name: "Neutral UI (pw-slate)",
    description: "Neutral colors for text, backgrounds, borders, and subtle UI elements",
    semantic: "Text, Background, Border, Disabled",
    colors: {
      50: "#FFFFFF", // pw-slate-50
      100: "#F2F2F3", // pw-slate-100
      200: "#E4E6E7", // pw-slate-200
      300: "#CACDCE", // pw-slate-300
      400: "#AAAEB0", // pw-slate-400
      500: "#7A8185", // pw-slate-500
      600: "#484F52", // pw-slate-600
      700: "#2F3437", // pw-slate-700
      800: "#252A2D", // pw-slate-800
      900: "#171A1C", // pw-slate-900
    },
  },
  orange: {
    name: "Orange (pw-orange)",
    description: "Warning and attention colors for alerts and important notifications",
    semantic: "Warning, Attention, Highlight",
    colors: {
      50: "#FFF5E6", // pw-orange-50
      100: "#FFE3BF", // pw-orange-100
      200: "#FFCD94", // pw-orange-200
      300: "#FFB366", // pw-orange-300
      400: "#FF9940", // pw-orange-400
      500: "#FF7A00", // pw-orange-500
      600: "#CC6200", // pw-orange-600
      700: "#994900", // pw-orange-700
      800: "#813D00", // pw-orange-800
      900: "#633000", // pw-orange-900
    },
  },
  purple: {
    name: "Purple (pw-purple)",
    description: "Secondary accent colors for creative and premium features",
    semantic: "Secondary, Premium, Creative",
    colors: {
      50: "#F3E8FD", // pw-purple-50
      100: "#E6D1FB", // pw-purple-100
      200: "#CDA3F8", // pw-purple-200
      300: "#B576F4", // pw-purple-300
      400: "#9C48F1", // pw-purple-400
      500: "#831AED", // pw-purple-500
      600: "#6915BE", // pw-purple-600
      700: "#4F108E", // pw-purple-700
      800: "#430B7A", // pw-purple-800
      900: "#340A5F", // pw-purple-900
    },
  },
  teal: {
    name: "Teal (pw-teal)",
    description: "Information and data visualization colors",
    semantic: "Info, Data, Cool Accent",
    colors: {
      50: "#E9F8FB", // pw-teal-50
      100: "#D3F2F8", // pw-teal-100
      200: "#A6E6F1", // pw-teal-200
      300: "#7AD9EA", // pw-teal-300
      400: "#4DCDE3", // pw-teal-400
      500: "#22BFDB", // pw-teal-500
      600: "#1CA4BA", // pw-teal-600
      700: "#158599", // pw-teal-700
      800: "#0F6578", // pw-teal-800
      900: "#0A4B5A", // pw-teal-900
    },
  },
  yellow: {
    name: "Yellow (pw-yellow)",
    description: "Caution and highlight colors for important information",
    semantic: "Caution, Highlight, Warm Accent",
    colors: {
      50: "#FFF9E6", // pw-yellow-50
      100: "#FFEEC2", // pw-yellow-100
      200: "#FFE192", // pw-yellow-200
      300: "#FFD161", // pw-yellow-300
      400: "#FFC133", // pw-yellow-400
      500: "#FEBA0C", // pw-yellow-500
      600: "#DB9C08", // pw-yellow-600
      700: "#B57F05", // pw-yellow-700
      800: "#8C6103", // pw-yellow-800
      900: "#684902", // pw-yellow-900
    },
  },
  red: {
    name: "Red (pw-red)",
    description: "Error and destructive action colors",
    semantic: "Error, Danger, Destructive",
    colors: {
      50: "#FFF1EE", // pw-red-50
      100: "#FFDAD4", // pw-red-100
      200: "#FFB7AA", // pw-red-200
      300: "#FF8B76", // pw-red-300
      400: "#F86147", // pw-red-400
      500: "#CC371B", // pw-red-500
      600: "#B02F17", // pw-red-600
      700: "#8E2613", // pw-red-700
      800: "#6B1D0F", // pw-red-800
      900: "#50160B", // pw-red-900
    },
  },
}

// Generate CSS custom properties for pw-colors
const generateCSSProperties = () => {
  const properties: Record<string, string> = {}

  Object.entries(colorPalettes).forEach(([key, palette]) => {
    const colorName = palette.name.toLowerCase().includes("brand")
      ? "green"
      : palette.name.toLowerCase().includes("neutral")
        ? "slate"
        : palette.name.toLowerCase().split(" ")[0].toLowerCase()

    Object.entries(palette.colors).forEach(([shade, color]) => {
      properties[`--pw-${colorName}-${shade}`] = color
    })
  })

  return properties
}

function ColorSwatch({
  color,
  shade,
  name,
  pwToken,
  colorName,
  onCopy,
}: {
  color: string
  shade: string
  name: string
  pwToken: string
  colorName: string
  onCopy: (color: string) => void
}) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(color)
    onCopy(color)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // Calculate contrast ratio for text color
  const getTextColor = (hex: string) => {
    const r = Number.parseInt(hex.slice(1, 3), 16)
    const g = Number.parseInt(hex.slice(3, 5), 16)
    const b = Number.parseInt(hex.slice(5, 7), 16)
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255
    return luminance > 0.5 ? "#000000" : "#ffffff"
  }

  const textColor = getTextColor(color)

  return (
    <div className="group relative">
      <div
        className="w-full h-16 rounded-lg border border-border cursor-pointer transition-all hover:scale-105 hover:shadow-md flex items-center justify-center"
        style={{ backgroundColor: color }}
        onClick={handleCopy}
      >
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          {copied ? (
            <Check className="w-4 h-4" style={{ color: textColor }} />
          ) : (
            <Copy className="w-4 h-4" style={{ color: textColor }} />
          )}
        </div>
      </div>
      <div className="mt-2 text-center">
        <div className="text-xs font-medium">{shade}</div>
        <div className="text-xs text-muted-foreground font-mono">{color}</div>
        <div className="text-xs text-muted-foreground">{pwToken}</div>
      </div>
    </div>
  )
}

export default function ColorsPage() {
  const [copiedColor, setCopiedColor] = useState<string>("")

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile header with hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
        <SidebarTrigger />
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-green-600 rounded flex items-center justify-center">
            <span className="text-white font-bold text-xs">P</span>
          </div>
          <div className="font-bold text-sm">
            <span className="text-green-600">pawa</span>
            <span className="text-gray-900">bloX</span>
          </div>
        </div>
        <div></div>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-background" style={generateCSSProperties()}>
        <div className="container mx-auto p-6 space-y-8 max-w-6xl">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Palette className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Foundations</span>
            </div>
            <h1 className="text-4xl font-bold">Colors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Defines the brand's core color palette, used to create consistency, hierarchy, and accessible experiences
              across all products. Aligned with Tailwind CSS and using pw-color tokens.
            </p>
          </div>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for using pw-colors in your applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    Accessibility
                  </h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Ensure 4.5:1 contrast ratio for normal text</li>
                    <li>• Use 3:1 contrast ratio for large text (18px+)</li>
                    <li>• Don't rely on color alone to convey information</li>
                    <li>• Test with color blindness simulators</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">pw-Color Tokens</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use pw-color tokens for consistency with Figma</li>
                    <li>• Tokens automatically sync with design updates</li>
                    <li>• Follow Tailwind CSS naming conventions</li>
                    <li>• Use semantic color names in components</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Palettes */}
          <div className="space-y-8">
            {Object.entries(colorPalettes).map(([key, palette]) => (
              <Card key={key}>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {palette.name}
                        {key === "brand" && <Badge variant="secondary">Primary</Badge>}
                      </CardTitle>
                      <CardDescription className="mt-1">{palette.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{palette.semantic}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-5 md:grid-cols-10 gap-4">
                    {Object.entries(palette.colors).map(([shade, color]) => {
                      const colorName = palette.name.toLowerCase().includes("brand")
                        ? "green"
                        : palette.name.toLowerCase().includes("neutral")
                          ? "slate"
                          : palette.name.toLowerCase().split(" ")[0].toLowerCase()
                      const pwToken = `pw-${colorName}-${shade}`

                      return (
                        <ColorSwatch
                          key={shade}
                          color={color}
                          shade={shade}
                          name={`${palette.name} ${shade}`}
                          pwToken={pwToken}
                          colorName={colorName}
                          onCopy={setCopiedColor}
                        />
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Token Usage Examples */}
          <Card>
            <CardHeader>
              <CardTitle>pw-Color Token Usage</CardTitle>
              <CardDescription>How to use pw-color tokens in your code</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">CSS Custom Properties</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>--pw-green-500: {colorPalettes.brand.colors[500]};</div>
                    <div>--pw-slate-900: {colorPalettes.neutral.colors[900]};</div>
                    <div>--pw-red-500: {colorPalettes.red.colors[500]};</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Tailwind CSS Classes</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>bg-pw-green-500 text-white</div>
                    <div>bg-pw-slate-50 text-pw-slate-900</div>
                    <div>border-pw-red-500 text-pw-red-600</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">Design Token Reference</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>var(--pw-green-500) /* Primary brand color */</div>
                    <div>var(--pw-slate-600) /* Secondary text */</div>
                    <div>var(--pw-orange-500) /* Warning state */</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Color Combinations */}
          <Card>
            <CardHeader>
              <CardTitle>Recommended pw-Color Combinations</CardTitle>
              <CardDescription>Tested color combinations using pw-color tokens</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div className="p-4 rounded-lg" style={{ backgroundColor: colorPalettes.brand.colors[500] }}>
                  <div className="text-white font-semibold">Primary Button</div>
                  <div className="text-white/80 text-sm">pw-green-500 + white</div>
                </div>
                <div className="p-4 rounded-lg border" style={{ backgroundColor: colorPalettes.neutral.colors[50] }}>
                  <div style={{ color: colorPalettes.neutral.colors[900] }} className="font-semibold">
                    Light Background
                  </div>
                  <div style={{ color: colorPalettes.neutral.colors[600] }} className="text-sm">
                    pw-slate-50 + pw-slate-900
                  </div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: colorPalettes.red.colors[500] }}>
                  <div className="text-white font-semibold">Error State</div>
                  <div className="text-white/80 text-sm">pw-red-500 + white</div>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: colorPalettes.orange.colors[100], color: colorPalettes.orange.colors[800] }}
                >
                  <div className="font-semibold">Warning Alert</div>
                  <div className="text-sm opacity-80">pw-orange-100 + pw-orange-800</div>
                </div>
                <div className="p-4 rounded-lg" style={{ backgroundColor: colorPalettes.teal.colors[500] }}>
                  <div className="text-white font-semibold">Info Badge</div>
                  <div className="text-white/80 text-sm">pw-teal-500 + white</div>
                </div>
                <div
                  className="p-4 rounded-lg"
                  style={{ backgroundColor: colorPalettes.purple.colors[100], color: colorPalettes.purple.colors[800] }}
                >
                  <div className="font-semibold">Premium Feature</div>
                  <div className="text-sm opacity-80">pw-purple-100 + pw-purple-800</div>
                </div>
              </div>
            </CardContent>
          </Card>

          {copiedColor && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              Copied {copiedColor} to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
