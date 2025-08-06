"use client"

import type React from "react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Square, Copy, Check, ArrowRight, Heart, Star, Edit, Send, Loader2, Ban } from "lucide-react"
import { useState } from "react"

// PawaButton Component matching the exact design system
const PawaButton = ({
  variant = "primary",
  size = "default",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  children,
  className = "",
  ...props
}: {
  variant?: "primary" | "secondary" | "tertiary" | "text"
  size?: "sm" | "default" | "lg" | "icon"
  disabled?: boolean
  loading?: boolean
  icon?: any
  iconPosition?: "left" | "right"
  children?: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none"

  const variants = {
    primary: {
      default:
        "bg-lime-400 text-black hover:bg-lime-500 active:bg-lime-600 focus-visible:ring-lime-400 border border-lime-400",
      disabled: "bg-lime-200 text-black/50 border border-lime-200",
    },
    secondary: {
      default:
        "bg-gray-800 text-white hover:bg-gray-700 active:bg-gray-900 focus-visible:ring-gray-800 border border-gray-800",
      disabled: "bg-gray-300 text-gray-500 border border-gray-300",
    },
    tertiary: {
      default:
        "bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 active:bg-gray-100 focus-visible:ring-gray-400",
      disabled: "bg-transparent text-gray-400 border border-gray-200",
    },
    text: {
      default:
        "bg-transparent text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400 border-none",
      disabled: "bg-transparent text-gray-400",
    },
  }

  const sizes = {
    sm: "h-8 px-3 text-sm",
    default: "h-10 px-4 text-sm",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10 p-0",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    default: "w-4 h-4",
    lg: "w-5 h-5",
    icon: "w-5 h-5",
  }

  const variantClasses = disabled ? variants[variant].disabled : variants[variant].default

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${sizes[size]} ${className}`}
      disabled={disabled || loading}
      {...props}
    >
      {loading && <Loader2 className={`${iconSizes[size]} animate-spin`} />}
      {!loading && Icon && iconPosition === "left" && <Icon className={iconSizes[size]} />}
      {size !== "icon" && <span>{children}</span>}
      {!loading && Icon && iconPosition === "right" && <Icon className={iconSizes[size]} />}
    </button>
  )
}

export default function ButtonPage() {
  const [copiedCode, setCopiedCode] = useState<string>("")

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile header */}
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
      <div className="flex-1 bg-background">
        <div className="container mx-auto p-6 space-y-8 max-w-6xl">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Core Components</span>
            </div>
            <h1 className="text-4xl font-bold">Buttons</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A button lets the user perform an action with a tap or a click. Designed with multiple variants, states,
              and sizes to fit any use case in your application.
            </p>
          </div>

          {/* Design System Reference */}
          <Card>
            <CardHeader>
              <CardTitle>pawabloX Button System</CardTitle>
              <CardDescription>Complete button design system with all variants and states</CardDescription>
            </CardHeader>
            <CardContent></CardContent>
          </Card>

          {/* Button Variants */}
          <Tabs defaultValue="variants" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
              <TabsTrigger value="sizes">Sizes</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            {/* Variants Tab */}
            <TabsContent value="variants" className="space-y-6">
              {/* Primary Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-lime-400 rounded"></div>
                    Primary Buttons
                  </CardTitle>
                  <CardDescription>Used for the main call-to-action. Bright lime green color.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Default Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" icon={Ban} className="hover:bg-lime-500">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Icon Only</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="icon" icon={Ban} />
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="icon" icon={Ban} className="hover:bg-lime-500" />
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="icon" loading />
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="icon" icon={Ban} disabled />
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Small Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Small Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="sm" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="sm" icon={Ban} className="hover:bg-lime-500">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="sm" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="sm" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Large Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Large Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="lg" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="lg" icon={Ban} className="hover:bg-lime-500">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="lg" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="primary" size="lg" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaButton variant="primary" icon={Ban}>BUTTON</PawaButton>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(`<PawaButton variant="primary" icon={Ban}>BUTTON</PawaButton>`, "primary")
                      }
                      className="ml-2"
                    >
                      {copiedCode === "primary" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-800 rounded"></div>
                    Secondary Buttons
                  </CardTitle>
                  <CardDescription>Used for secondary actions. Dark gray/black color.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Default Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" icon={Ban} className="hover:bg-gray-700">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Icon Only</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="icon" icon={Ban} />
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="icon" icon={Ban} className="hover:bg-gray-700" />
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="icon" loading />
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="icon" icon={Ban} disabled />
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Small Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Small Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="sm" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="sm" icon={Ban} className="hover:bg-gray-700">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="sm" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="sm" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Large Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Large Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="lg" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="lg" icon={Ban} className="hover:bg-gray-700">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="lg" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="secondary" size="lg" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaButton variant="secondary" icon={Ban}>BUTTON</PawaButton>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(`<PawaButton variant="secondary" icon={Ban}>BUTTON</PawaButton>`, "secondary")
                      }
                      className="ml-2"
                    >
                      {copiedCode === "secondary" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tertiary Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded"></div>
                    Tertiary Buttons
                  </CardTitle>
                  <CardDescription>Used for less prominent actions. Outlined style.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Default Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" icon={Ban} className="hover:bg-gray-50">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Icon Only</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="icon" icon={Ban} />
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="icon" icon={Ban} className="hover:bg-gray-50" />
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="icon" loading />
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="icon" icon={Ban} disabled />
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Small Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Small Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="sm" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="sm" icon={Ban} className="hover:bg-gray-50">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="sm" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="sm" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Large Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Large Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="lg" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="lg" icon={Ban} className="hover:bg-gray-50">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="lg" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="tertiary" size="lg" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaButton variant="tertiary" icon={Ban}>BUTTON</PawaButton>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(`<PawaButton variant="tertiary" icon={Ban}>BUTTON</PawaButton>`, "tertiary")
                      }
                      className="ml-2"
                    >
                      {copiedCode === "tertiary" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Text Buttons */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-transparent border border-dashed border-gray-400 rounded"></div>
                    Text Buttons
                  </CardTitle>
                  <CardDescription>Used for the least prominent actions. Minimal styling.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  {/* Default Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Default Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" icon={Ban} className="hover:bg-gray-100">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Icon Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Icon Only</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="icon" icon={Ban} />
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="icon" icon={Ban} className="hover:bg-gray-100" />
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="icon" loading />
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="icon" icon={Ban} disabled />
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Small Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Small Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="sm" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="sm" icon={Ban} className="hover:bg-gray-100">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="sm" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="sm" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Large Size Buttons */}
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-700">Large Size</h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="lg" icon={Ban}>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Default</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="lg" icon={Ban} className="hover:bg-gray-100">
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Hover</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="lg" loading>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Loading</label>
                      </div>
                      <div className="flex flex-col items-center space-y-2">
                        <PawaButton variant="text" size="lg" icon={Ban} disabled>
                          BUTTON
                        </PawaButton>
                        <label className="text-sm font-medium text-black">Disabled</label>
                      </div>
                    </div>
                  </div>

                  {/* Code Example */}
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaButton variant="text" icon={Ban}>BUTTON</PawaButton>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(`<PawaButton variant="text" icon={Ban}>BUTTON</PawaButton>`, "text")
                      }
                      className="ml-2"
                    >
                      {copiedCode === "text" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* States Tab */}
            <TabsContent value="states" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Button States</CardTitle>
                  <CardDescription>Interactive states and feedback for better user experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">State Comparison</h3>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                      <div className="space-y-4">
                        <h4 className="font-medium text-purple-600">Default</h4>
                        <div className="space-y-2">
                          <PawaButton variant="primary" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="secondary" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="tertiary" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="text" icon={Ban}>
                            BUTTON
                          </PawaButton>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-purple-600">Hover</h4>
                        <div className="space-y-2">
                          <PawaButton variant="primary" icon={Ban} className="hover:bg-lime-500">
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="secondary" icon={Ban} className="hover:bg-gray-700">
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="tertiary" icon={Ban} className="hover:bg-gray-50">
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="text" icon={Ban} className="hover:bg-gray-100">
                            BUTTON
                          </PawaButton>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-purple-600">Loading</h4>
                        <div className="space-y-2">
                          <PawaButton variant="primary" loading>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="secondary" loading>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="tertiary" loading>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="text" loading>
                            BUTTON
                          </PawaButton>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <h4 className="font-medium text-purple-600">Disabled</h4>
                        <div className="space-y-2">
                          <PawaButton variant="primary" icon={Ban} disabled>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="secondary" icon={Ban} disabled>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="tertiary" icon={Ban} disabled>
                            BUTTON
                          </PawaButton>
                          <PawaButton variant="text" icon={Ban} disabled>
                            BUTTON
                          </PawaButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sizes Tab */}
            <TabsContent value="sizes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Button Sizes</CardTitle>
                  <CardDescription>Different sizes for various contexts and screen sizes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Size Comparison</h3>
                      <div className="flex flex-wrap items-end gap-4">
                        <div className="flex flex-col items-center gap-2">
                          <PawaButton variant="primary" size="sm" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <span className="text-xs text-muted-foreground">Small (32px)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaButton variant="primary" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <span className="text-xs text-muted-foreground">Default (40px)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaButton variant="primary" size="lg" icon={Ban}>
                            BUTTON
                          </PawaButton>
                          <span className="text-xs text-muted-foreground">Large (48px)</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaButton variant="primary" size="icon" icon={Ban} />
                          <span className="text-xs text-muted-foreground">Icon (40px)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Examples Tab */}
            <TabsContent value="examples" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Real-world Examples</CardTitle>
                  <CardDescription>Common button patterns and combinations used in applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Form Actions</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Email Address</label>
                        <input
                          type="email"
                          placeholder="Enter your email"
                          className="w-full px-3 py-2 border border-input rounded-md"
                        />
                      </div>
                      <div className="flex gap-2">
                        <PawaButton variant="primary" icon={Send}>
                          Submit
                        </PawaButton>
                        <PawaButton variant="tertiary">Cancel</PawaButton>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Card Actions</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <div>
                        <h4 className="font-semibold">Project Alpha</h4>
                        <p className="text-sm text-muted-foreground">
                          A comprehensive design system for modern applications
                        </p>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex gap-2">
                          <PawaButton variant="text" size="sm" icon={Heart}>
                            Like
                          </PawaButton>
                          <PawaButton variant="text" size="sm" icon={Star}>
                            Star
                          </PawaButton>
                        </div>
                        <div className="flex gap-2">
                          <PawaButton variant="tertiary" size="sm" icon={Edit}>
                            Edit
                          </PawaButton>
                          <PawaButton variant="primary" size="sm" icon={ArrowRight}>
                            View
                          </PawaButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {copiedCode && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              Code copied to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
