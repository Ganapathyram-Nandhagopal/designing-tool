import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Code, Layers, Zap } from "lucide-react"

export default function GettingStartedPage() {
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
      <div className="flex-1 bg-background">
        <div className="container mx-auto p-6 space-y-8 max-w-4xl">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">v1.0</Badge>
              <span className="text-sm text-muted-foreground">Getting Started</span>
            </div>
            <h1 className="text-4xl font-bold">Welcome to pawabloX Design System</h1>
            <p className="text-xl text-muted-foreground">
              Your comprehensive toolkit for building consistent, accessible, and beautiful user interfaces.
            </p>
          </div>

          {/* What is pawabloX */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-green-600" />
                What is pawabloX?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                pawabloX is a modern design system that bridges the gap between design and development. Built with
                scalability and consistency in mind, it provides a unified language for teams to create exceptional
                digital experiences.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Our system includes carefully crafted design tokens exported directly from Figma, ensuring perfect
                alignment between your designs and implementation. Whether you're building a simple website or a complex
                application, pawabloX provides the foundation you need to move fast without breaking things.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Palette className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Design Tokens</h4>
                    <p className="text-xs text-muted-foreground">
                      Colors, spacing, typography, and more - all synchronized with Figma
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Layers className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Components</h4>
                    <p className="text-xs text-muted-foreground">
                      Ready-to-use UI components built with accessibility in mind
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-muted/50 rounded-lg">
                  <Code className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm">Developer Ready</h4>
                    <p className="text-xs text-muted-foreground">Built with modern frameworks and best practices</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Key Features */}
          <Card>
            <CardHeader>
              <CardTitle>Key Features</CardTitle>
              <CardDescription>What makes pawabloX special</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">🎨 Figma Integration</h4>
                  <p className="text-sm text-muted-foreground">
                    Direct token export from Figma ensures your designs and code stay perfectly synchronized.
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold">📱 Responsive Design</h4>
                  <p className="text-sm text-muted-foreground">
                    Mobile-first approach with consistent behavior across all screen sizes.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Start */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Start</CardTitle>
              <CardDescription>Get up and running in minutes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-semibold">Explore the Foundations</h4>
                    <p className="text-sm text-muted-foreground">
                      Start by browsing our design tokens, colors, typography, and spacing guidelines.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-semibold">Review Components</h4>
                    <p className="text-sm text-muted-foreground">
                      Check out our component library to see what's available for your projects.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-semibold">Start Building</h4>
                    <p className="text-sm text-muted-foreground">
                      Use our tokens and components to create consistent, beautiful interfaces.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                <Button asChild>
                  <a href="/foundations/tokens">
                    Browse Design Tokens
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/how-to-use">Learn How to Use</a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <div className="bg-muted/50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-4">Ready to dive deeper?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button variant="outline" asChild className="justify-start h-auto p-4">
                <a href="/foundations/colors" className="flex flex-col items-start gap-1">
                  <span className="font-semibold">Explore Colors</span>
                  <span className="text-xs text-muted-foreground">Discover our color palette and usage guidelines</span>
                </a>
              </Button>

              <Button variant="outline" asChild className="justify-start h-auto p-4">
                <a href="/components/button" className="flex flex-col items-start gap-1">
                  <span className="font-semibold">View Components</span>
                  <span className="text-xs text-muted-foreground">Browse our component library and examples</span>
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
