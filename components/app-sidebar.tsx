"use client"

import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import {
  ChevronRight,
  BookOpen,
  HelpCircle,
  Layers,
  Type,
  Palette,
  ImageIcon,
  Square,
  Badge,
  CheckSquare,
  Circle,
  ToggleLeft,
  FileInputIcon as Input,
  AlertTriangle,
  Coins,
  Loader2,
} from "lucide-react"

const navigationItems = [
  {
    title: "Getting started",
    icon: BookOpen,
    href: "/getting-started",
  },
  {
    title: "How to use",
    icon: HelpCircle,
    href: "/how-to-use",
  },
]

const foundationItems = [
  {
    title: "Tokens",
    icon: Coins,
    href: "/foundations/tokens",
  },
  {
    title: "Logotypes",
    icon: Layers,
    href: "/foundations/logotypes",
  },
  {
    title: "Iconography",
    icon: ImageIcon,
    href: "/foundations/iconography",
  },
  {
    title: "Colors",
    icon: Palette,
    href: "/foundations/colors",
  },
  {
    title: "Typography",
    icon: Type,
    href: "/foundations/typography",
  },
]

const componentItems = [
  {
    title: "Button",
    icon: Square,
    href: "/components/button",
  },
  {
    title: "Badges",
    icon: Badge,
    href: "/components/badges",
  },
  {
    title: "Checkbox",
    icon: CheckSquare,
    href: "/components/checkbox",
  },
  {
    title: "Radio buttons",
    icon: Circle,
    href: "/components/radio",
  },
  {
    title: "Switch",
    icon: ToggleLeft,
    href: "/components/switch",
  },
  {
    title: "Input",
    icon: Input,
    href: "/components/input",
  },
  {
    title: "Alert",
    icon: AlertTriangle,
    href: "/components/alert",
  },
]

export function AppSidebar() {
  const [foundationsOpen, setFoundationsOpen] = useState(true)
  const [componentsOpen, setComponentsOpen] = useState(true)
  const [isPending, startTransition] = useTransition()
  const [loadingPath, setLoadingPath] = useState<string | null>(null)
  const router = useRouter()

  const handleNavigation = (href: string) => {
    setLoadingPath(href)
    startTransition(() => {
      router.push(href)
    })
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <a
          href="/"
          className="flex items-center gap-1 sm:gap-2 px-1 sm:px-2 py-2 sm:py-4 hover:bg-sidebar-accent rounded-md transition-colors"
        >
          <div className="flex items-center gap-2">
            <div>
              <div className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl leading-none">
                <span style={{ color: "#9CE800", fontWeight: "900", fontStyle: "italic" }}>pawa</span>
                <span style={{ color: "#000000", fontWeight: "900", fontStyle: "italic" }}>bloX</span>
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground">Design System | v1.0</div>
            </div>
          </div>
        </a>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => handleNavigation(item.href)}
                    disabled={isPending}
                    className="flex items-center gap-2"
                  >
                    {loadingPath === item.href && isPending ? (
                      <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                    ) : (
                      <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    )}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Foundations Section */}
        <SidebarGroup>
          <Collapsible open={foundationsOpen} onOpenChange={setFoundationsOpen}>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span>Foundations</span>
                <ChevronRight
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${foundationsOpen ? "rotate-90" : ""}`}
                />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {foundationItems.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton
                        onClick={() => handleNavigation(item.href)}
                        disabled={isPending}
                        className="flex items-center gap-2"
                      >
                        {loadingPath === item.href && isPending ? (
                          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                        ) : (
                          <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        <span>{item.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>

        {/* Core Components Section */}
        <SidebarGroup>
          <Collapsible open={componentsOpen} onOpenChange={setComponentsOpen}>
            <SidebarGroupLabel asChild>
              <CollapsibleTrigger className="flex items-center justify-between w-full">
                <span>Core Components</span>
                <ChevronRight
                  className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${componentsOpen ? "rotate-90" : ""}`}
                />
              </CollapsibleTrigger>
            </SidebarGroupLabel>
            <CollapsibleContent>
              <SidebarGroupContent>
                <SidebarMenuSub>
                  {componentItems.map((item) => (
                    <SidebarMenuSubItem key={item.title}>
                      <SidebarMenuSubButton
                        onClick={() => handleNavigation(item.href)}
                        disabled={isPending}
                        className="flex items-center gap-2"
                      >
                        {loadingPath === item.href && isPending ? (
                          <Loader2 className="w-3 h-3 sm:w-4 sm:h-4 animate-spin" />
                        ) : (
                          <item.icon className="w-3 h-3 sm:w-4 sm:h-4" />
                        )}
                        <span>{item.title}</span>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarGroupContent>
            </CollapsibleContent>
          </Collapsible>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t border-sidebar-border">
        <div className="p-1 sm:p-2 text-xs text-muted-foreground">© 2025 pawabloX Design System</div>
      </SidebarFooter>
    </Sidebar>
  )
}
