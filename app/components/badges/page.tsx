"use client"

import type React from "react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge, Copy, Check, Calendar, Sun, Moon } from "lucide-react"
import { useState } from "react"

// PawaBadge Component matching the exact design system
const PawaBadge = ({
  variant = "primary",
  size = "default",
  children,
  className = "",
  showIcons = true,
  ...props
}: {
  variant?: "primary" | "secondary" | "outline" | "dark"
  size?: "sm" | "default" | "lg"
  children?: React.ReactNode
  className?: string
  showIcons?: boolean
  [key: string]: any
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none"

  const variants = {
    primary: "bg-lime-400 text-black border border-lime-400",
    secondary: "bg-orange-500 text-white border border-orange-500",
    outline: "bg-transparent text-gray-700 border border-gray-300",
    dark: "bg-gray-800 text-white border border-gray-800",
  }

  const sizes = {
    sm: "px-2 py-0.5 text-xs max-h-5",
    default: "px-2 py-1 text-sm max-h-5",
    lg: "px-2 py-1 text-base max-h-5",
  }

  const iconSizes = {
    sm: "w-3 h-3",
    default: "w-4 h-4",
    lg: "w-4 h-4",
  }

  return (
    <span className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {showIcons && <Calendar className={`${iconSizes[size]} my-1`} />}
      <span>{children}</span>
    </span>
  )
}

export default function BadgesPage() {
  const [copiedCode, setCopiedCode] = useState<string>("")
  const [darkMode, setDarkMode] = useState(false)

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
              <Badge className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Core Components</span>
            </div>
            <h1 className="text-4xl font-bold">Badges</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Displays the primary logo or a variation used to represent the brand visually. Small status descriptors
              for UI elements.
            </p>
          </div>

          {/* Design System Reference */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>pawabloX Badge System</CardTitle>
                  <CardDescription>Complete badge design system with all variants and themes</CardDescription>
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setDarkMode(!darkMode)}
                  className="flex items-center gap-2"
                >
                  {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  {darkMode ? "Light" : "Dark"}
                </Button>
              </div>
            </CardHeader>
          </Card>

          {/* Badge Variants */}
          <Tabs defaultValue="variants" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="sizes">Sizes</TabsTrigger>
              <TabsTrigger value="usage">Usage</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            {/* Variants Tab */}
            <TabsContent value="variants" className="space-y-6">
              {/* Primary Badge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
                    Primary Badge
                  </CardTitle>
                  <CardDescription>Used for positive states, success messages, and primary actions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <PawaBadge variant="primary">Badge</PawaBadge>
                    <PawaBadge variant="primary" showIcons={false}>
                      Success
                    </PawaBadge>
                    <PawaBadge variant="primary" showIcons={false}>
                      Active
                    </PawaBadge>
                    <PawaBadge variant="primary" showIcons={false}>
                      New
                    </PawaBadge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaBadge variant="primary">Badge</PawaBadge>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<PawaBadge variant="primary">Badge</PawaBadge>`, "primary-badge")}
                      className="ml-2"
                    >
                      {copiedCode === "primary-badge" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Badge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                    Secondary Badge
                  </CardTitle>
                  <CardDescription>Used for warnings, important notifications, and secondary actions.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <PawaBadge variant="secondary">Badge</PawaBadge>
                    <PawaBadge variant="secondary" showIcons={false}>
                      Warning
                    </PawaBadge>
                    <PawaBadge variant="secondary" showIcons={false}>
                      Pending
                    </PawaBadge>
                    <PawaBadge variant="secondary" showIcons={false}>
                      Hot
                    </PawaBadge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaBadge variant="secondary">Badge</PawaBadge>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(`<PawaBadge variant="secondary">Badge</PawaBadge>`, "secondary-badge")
                      }
                      className="ml-2"
                    >
                      {copiedCode === "secondary-badge" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Outline Badge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 border-2 border-gray-300 rounded-full"></div>
                    Outline Badge
                  </CardTitle>
                  <CardDescription>Used for neutral states, categories, and subtle information.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <PawaBadge variant="outline">Badge</PawaBadge>
                    <PawaBadge variant="outline" showIcons={false}>
                      Draft
                    </PawaBadge>
                    <PawaBadge variant="outline" showIcons={false}>
                      Category
                    </PawaBadge>
                    <PawaBadge variant="outline" showIcons={false}>
                      Tag
                    </PawaBadge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaBadge variant="outline">Badge</PawaBadge>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<PawaBadge variant="outline">Badge</PawaBadge>`, "outline-badge")}
                      className="ml-2"
                    >
                      {copiedCode === "outline-badge" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Dark Badge */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                    Dark Badge
                  </CardTitle>
                  <CardDescription>Used for premium features, dark themes, and high contrast needs.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex flex-wrap items-center gap-4">
                    <PawaBadge variant="dark">Badge</PawaBadge>
                    <PawaBadge variant="dark" showIcons={false}>
                      Premium
                    </PawaBadge>
                    <PawaBadge variant="dark" showIcons={false}>
                      Pro
                    </PawaBadge>
                    <PawaBadge variant="dark" showIcons={false}>
                      VIP
                    </PawaBadge>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaBadge variant="dark">Badge</PawaBadge>`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopyCode(`<PawaBadge variant="dark">Badge</PawaBadge>`, "dark-badge")}
                      className="ml-2"
                    >
                      {copiedCode === "dark-badge" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Sizes Tab */}
            <TabsContent value="sizes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Badge Sizes</CardTitle>
                  <CardDescription>Different sizes for various contexts and information hierarchy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Size Comparison</h3>
                      <div className="flex flex-wrap items-center gap-6">
                        <div className="flex flex-col items-center gap-2">
                          <PawaBadge variant="primary" size="sm">
                            Small
                          </PawaBadge>
                          <span className="text-xs text-muted-foreground">Small</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaBadge variant="primary" size="default">
                            Default
                          </PawaBadge>
                          <span className="text-xs text-muted-foreground">Default</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaBadge variant="primary" size="lg">
                            Large
                          </PawaBadge>
                          <span className="text-xs text-muted-foreground">Large</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Usage Tab */}
            <TabsContent value="usage" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Usage Guidelines</CardTitle>
                  <CardDescription>Best practices for using badges in your applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-green-600">✓ Do</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Use badges to highlight important information</li>
                        <li>• Keep badge text short and descriptive</li>
                        <li>• Use consistent colors for similar states</li>
                        <li>• Place badges near related content</li>
                        <li>• Use appropriate sizes for context</li>
                        <li>• Ensure sufficient color contrast</li>
                      </ul>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-red-600">✗ Don't</h3>
                      <ul className="space-y-2 text-sm">
                        <li>• Use too many badges in one area</li>
                        <li>• Make badge text too long</li>
                        <li>• Use badges for primary actions</li>
                        <li>• Mix different badge styles randomly</li>
                        <li>• Use badges as buttons</li>
                        <li>• Overuse bright colored badges</li>
                      </ul>
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
                  <CardDescription>Common badge patterns and use cases in applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">User Profile</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h4 className="font-semibold">John Doe</h4>
                            <PawaBadge variant="dark" size="sm" showIcons={false}>
                              Pro
                            </PawaBadge>
                            <PawaBadge variant="primary" size="sm" showIcons={false}>
                              Verified
                            </PawaBadge>
                          </div>
                          <p className="text-sm text-muted-foreground">Senior Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Component Code */}
          <Card>
            <CardHeader>
              <CardTitle>Component Implementation</CardTitle>
              <CardDescription>Complete PawaBadge component code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`const PawaBadge = ({
  variant = "primary",
  size = "default", 
  children,
  showIcons = true,
  ...props
}) => {
  const baseClasses = "inline-flex items-center justify-center gap-1.5 rounded-full font-medium transition-all duration-200 select-none"

  const variants = {
    primary: "bg-lime-400 text-black border border-lime-400",
    secondary: "bg-orange-500 text-white border border-orange-500", 
    outline: "bg-transparent text-gray-700 border border-gray-300",
    dark: "bg-gray-800 text-white border border-gray-800",
  }

  const sizes = {
    sm: "px-2 py-0.5 text-xs max-h-5",
    default: "px-2 py-1 text-sm max-h-5", 
    lg: "px-2 py-1 text-base max-h-5",
  }

  return (
    <span className={\`\${baseClasses} \${variants[variant]} \${sizes[size]}\`} {...props}>
      {showIcons && <Calendar className="w-4 h-4" />}
      <span>{children}</span>
    </span>
  )
}`}</code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleCopyCode(
                    `const PawaBadge = ({ variant = "primary", size = "default", children, showIcons = true, ...props }) => { /* component code */ }`,
                    "component-code",
                  )
                }
                className="mt-4"
              >
                {copiedCode === "component-code" ? (
                  <Check className="w-4 h-4 mr-2" />
                ) : (
                  <Copy className="w-4 h-4 mr-2" />
                )}
                Copy Component Code
              </Button>
            </CardContent>
          </Card>

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
