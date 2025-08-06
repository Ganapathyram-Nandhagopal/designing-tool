import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Palette, Layers } from "lucide-react"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Mobile header with hamburger */}
      <div className="md:hidden flex items-center justify-between p-4 border-b bg-background">
        <SidebarTrigger />
        <div className="flex flex-col items-center">
          <h1 className="text-2xl font-bold">
            <span style={{ color: "#9CE800", fontWeight: "900", fontStyle: "italic" }}>pawa</span>
            <span style={{ color: "#000000", fontWeight: "900", fontStyle: "italic" }}>bloX</span>
          </h1>
          <p className="text-sm text-muted-foreground">Design System v1.0</p>
        </div>
        <div></div> {/* Spacer for centering */}
      </div>

      {/* Main content */}
      <div className="flex-1 bg-background">
        <div className="container mx-auto p-6 sm:p-8 md:p-10 lg:p-12 space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {/* Hero Section */}
          <div className="text-center space-y-4 sm:space-y-6 md:space-y-8 pt-0.5 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            <div className="hidden md:flex items-center justify-center gap-3 mb-3 sm:mb-4 md:mb-6">
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span style={{ color: "#9CE800", fontWeight: "900", fontStyle: "italic" }}>pawa</span>
                  <span style={{ color: "#000000", fontWeight: "900", fontStyle: "italic" }}>bloX</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">Design System v1.0</p>
              </div>
            </div>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive design system built for modern web applications. Explore our foundations, components, and
              design tokens.
            </p>
            <div className="flex gap-4 justify-center mt-4 sm:mt-6 md:mt-8">
              <Button asChild size="lg">
                <a href="/getting-started">
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/foundations/tokens">View Tokens</a>
              </Button>
            </div>
          </div>

          {/* Quick Access Cards */}
          <div className="flex justify-center gap-4 sm:gap-6 md:gap-8">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Palette className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-lg">Design Tokens</CardTitle>
                </div>
                <CardDescription>Explore colors, spacing, typography and more design tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                  <a href="/foundations/tokens">
                    Browse Tokens
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Layers className="w-5 h-5 text-green-600" />
                  <CardTitle className="text-lg">Components</CardTitle>
                </div>
                <CardDescription>Ready-to-use UI components for your applications</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                  <a href="/components/button">
                    Browse Components
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Getting Started Section */}
          <div className="bg-muted/50 rounded-lg p-4 sm:p-6 md:p-8 text-center">
            <h2 className="text-2xl font-bold mb-2 sm:mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-2xl mx-auto">
              Learn how to integrate pawabloX design system into your project and start building consistent, beautiful
              user interfaces.
            </p>
            <div className="flex gap-2 sm:gap-4 justify-center">
              <Button asChild>
                <a href="/getting-started">Getting Started Guide</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="/how-to-use">How to Use</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
