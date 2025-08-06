"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Copy, Check, Search, ImageIcon, ExternalLink, ImageIcon as Image } from "lucide-react"
import { useState, useMemo } from "react"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowDown,
  ChevronLeft,
  ChevronRight,
  ChevronUp,
  ChevronDown,
  Menu,
  X,
  Home,
  MoreHorizontal,
  MoreVertical,
  Navigation,
  Move,
  MoveHorizontal,
  MoveVertical,
  Plus,
  Minus,
  Edit,
  Trash2,
  Save,
  Download,
  Upload,
  CopyIcon,
  Share,
  Heart,
  Star,
  Bookmark,
  Flag,
  Eye,
  EyeOff,
  Lock,
  Unlock,
  Settings,
  RefreshCwIcon as Refresh,
  RotateCw,
  RotateCcw,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Bell,
  Users,
  User,
  UserPlus,
  MessageSquare,
  Video,
  Mic,
  MicOff,
  AtSign,
  File,
  FileText,
  Folder,
  FolderOpen,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Camera,
  Film,
  Music,
  Archive,
  Calendar,
  Clock,
  MapPin,
  Globe,
  Building,
  Briefcase,
  CreditCard,
  DollarSign,
  TrendingUp,
  TrendingDown,
  BarChart3,
  PieChart,
  LineChart,
  Smartphone,
  Laptop,
  Monitor,
  Wifi,
  WifiOff,
  Bluetooth,
  Battery,
  Zap,
  Database,
  Server,
  Cloud,
  Code,
  Cpu,
  HardDrive,
  ThumbsUp,
  ThumbsDown,
  Share2,
  Link,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  HelpCircle,
  Loader,
  Shield,
  Key,
  Fingerprint,
  Circle,
  Square,
  Triangle,
  Diamond,
  Hash,
  Equal,
  Paintbrush,
  Scissors,
  Ruler,
  Wrench,
  Hammer,
  Flashlight,
  Sun,
  Moon,
  CloudRain,
  Umbrella,
  Thermometer,
  Droplets,
  Wind,
  TreesIcon as Tree,
  Leaf,
  Car,
  Truck,
  Plane,
  Train,
  Bike,
  Bus,
  Rocket,
  ShoppingCart,
  ShoppingBag,
  Package,
  Gift,
  Tag,
  Store,
  Receipt,
  Percent,
  Watch,
  Timer,
  AlarmClockIcon as Alarm,
  Hourglass,
  TimerIcon as Stopwatch,
  Book,
  BookOpen,
  GraduationCap,
  Pencil,
  PenTool,
  Calculator,
  Activity,
  Stethoscope,
  Pill,
  Cross,
  Type,
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  List,
  Quote,
  Gamepad2,
  Dice1,
  Trophy,
  Award,
  Target,
  Map,
  Compass,
  Route,
  Milestone,
  Signpost,
} from "lucide-react"

// Define our icon library with actual imported components
const iconLibrary = {
  "Navigation & Arrows": {
    ArrowLeft,
    ArrowRight,
    ArrowUp,
    ArrowDown,
    ChevronLeft,
    ChevronRight,
    ChevronUp,
    ChevronDown,
    Menu,
    X,
    Home,
    MoreHorizontal,
    MoreVertical,
    Navigation,
    Move,
    MoveHorizontal,
    MoveVertical,
  },
  "Actions & Interface": {
    Plus,
    Minus,
    Edit,
    Trash2,
    Save,
    Download,
    Upload,
    CopyIcon,
    Share,
    Heart,
    Star,
    Bookmark,
    Flag,
    Eye,
    EyeOff,
    Lock,
    Unlock,
    Settings,
    Refresh,
    RotateCw,
    RotateCcw,
  },
  Communication: {
    Mail,
    Phone,
    MessageCircle,
    Send,
    Bell,
    Users,
    User,
    UserPlus,
    MessageSquare,
    Video,
    Mic,
    MicOff,
    AtSign,
  },
  "Files & Media": {
    File,
    FileText,
    Folder,
    FolderOpen,
    Image,
    Play,
    Pause,
    Volume2,
    VolumeX,
    Camera,
    Film,
    Music,
    Archive,
  },
  "Business & Finance": {
    Calendar,
    Clock,
    MapPin,
    Globe,
    Building,
    Briefcase,
    CreditCard,
    DollarSign,
    TrendingUp,
    TrendingDown,
    BarChart3,
    PieChart,
    LineChart,
  },
  Technology: {
    Smartphone,
    Laptop,
    Monitor,
    Wifi,
    WifiOff,
    Bluetooth,
    Battery,
    Zap,
    Database,
    Server,
    Cloud,
    Code,
    Cpu,
    HardDrive,
  },
  Social: {
    ThumbsUp,
    ThumbsDown,
    Share2,
    Link,
    Github,
    Twitter,
    Facebook,
    Instagram,
    Linkedin,
    Youtube,
  },
  "Interface Elements": {
    AlertCircle,
    AlertTriangle,
    CheckCircle,
    XCircle,
    Info,
    HelpCircle,
    Loader,
    Shield,
    Key,
    Fingerprint,
  },
  "Shapes & Symbols": {
    Circle,
    Square,
    Triangle,
    Diamond,
    Hash,
    Equal,
  },
  "Tools & Utilities": {
    Paintbrush,
    Scissors,
    Ruler,
    Wrench,
    Hammer,
    Flashlight,
  },
  "Weather & Nature": {
    Sun,
    Moon,
    CloudRain,
    Umbrella,
    Thermometer,
    Droplets,
    Wind,
    Tree,
    Leaf,
  },
  Transportation: {
    Car,
    Truck,
    Plane,
    Train,
    Bike,
    Bus,
    Rocket,
  },
  "Shopping & Commerce": {
    ShoppingCart,
    ShoppingBag,
    Package,
    Gift,
    Tag,
    Store,
    Receipt,
    Percent,
  },
  "Time & Calendar": {
    Watch,
    Timer,
    Alarm,
    Hourglass,
    Stopwatch,
  },
  "Education & Learning": {
    Book,
    BookOpen,
    GraduationCap,
    Pencil,
    PenTool,
    Calculator,
  },
  "Health & Medical": {
    Activity,
    Stethoscope,
    Pill,
    Cross,
  },
  "Text & Typography": {
    Type,
    Bold,
    Italic,
    Underline,
    AlignLeft,
    AlignCenter,
    AlignRight,
    List,
    Quote,
  },
  Gaming: {
    Gamepad2,
    Dice1,
    Trophy,
    Award,
    Target,
  },
  "Location & Maps": {
    Map,
    Compass,
    Route,
    Milestone,
    Signpost,
  },
}

export default function IconographyPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [copiedIcon, setCopiedIcon] = useState<string>("")
  const [iconSize, setIconSize] = useState(24)
  const [strokeWidth, setStrokeWidth] = useState(2)

  // Calculate total icons
  const totalIcons = Object.values(iconLibrary).reduce((sum, icons) => sum + Object.keys(icons).length, 0)

  // Filter icons based on search and category
  const filteredIcons = useMemo(() => {
    let iconsToShow: Record<string, Record<string, any>> = {}

    if (selectedCategory === "all") {
      iconsToShow = iconLibrary
    } else {
      iconsToShow = { [selectedCategory]: iconLibrary[selectedCategory as keyof typeof iconLibrary] || {} }
    }

    // Apply search filter
    if (searchTerm) {
      const filtered: Record<string, Record<string, any>> = {}
      Object.entries(iconsToShow).forEach(([category, icons]) => {
        const matchingIcons: Record<string, any> = {}
        Object.entries(icons).forEach(([iconName, IconComponent]) => {
          if (iconName.toLowerCase().includes(searchTerm.toLowerCase())) {
            matchingIcons[iconName] = IconComponent
          }
        })
        if (Object.keys(matchingIcons).length > 0) {
          filtered[category] = matchingIcons
        }
      })
      return filtered
    }

    return iconsToShow
  }, [searchTerm, selectedCategory])

  // Calculate filtered total
  const filteredTotal = Object.values(filteredIcons).reduce((sum, icons) => sum + Object.keys(icons).length, 0)

  const handleCopyIcon = (iconName: string, format: "jsx" | "import") => {
    let textToCopy = ""

    if (format === "jsx") {
      textToCopy = `<${iconName} size={${iconSize}} strokeWidth={${strokeWidth}} />`
    } else {
      textToCopy = `import { ${iconName} } from "lucide-react"`
    }

    navigator.clipboard.writeText(textToCopy)
    setCopiedIcon(`${iconName}-${format}`)
    setTimeout(() => setCopiedIcon(""), 2000)
  }

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
        <div className="container mx-auto p-6 space-y-8 max-w-7xl">
          {/* Header */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <ImageIcon className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Foundations</span>
            </div>
            <h1 className="text-4xl font-bold">Iconography</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              A comprehensive icon library powered by Lucide React. Consistent, beautiful, and accessible icons for your
              applications.
            </p>
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" asChild>
                <a href="https://lucide.dev" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Lucide.dev
                </a>
              </Button>
              <Badge variant="secondary">{totalIcons} Icons Available</Badge>
              {searchTerm && <Badge variant="outline">{filteredTotal} Found</Badge>}
            </div>
          </div>

          {/* Controls */}
          <Card>
            <CardHeader>
              <CardTitle>Icon Customizer</CardTitle>
              <CardDescription>Adjust icon appearance and search through the library</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Search Icons</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <Input
                      placeholder="Search icons..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="w-full px-3 py-2 border border-input bg-background rounded-md text-sm"
                  >
                    <option value="all">All Categories</option>
                    {Object.keys(iconLibrary).map((category) => (
                      <option key={category} value={category}>
                        {category} ({Object.keys(iconLibrary[category as keyof typeof iconLibrary]).length})
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Size: {iconSize}px</label>
                  <input
                    type="range"
                    min="16"
                    max="48"
                    value={iconSize}
                    onChange={(e) => setIconSize(Number(e.target.value))}
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Stroke: {strokeWidth}px</label>
                  <input
                    type="range"
                    min="1"
                    max="4"
                    step="0.5"
                    value={strokeWidth}
                    onChange={(e) => setStrokeWidth(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for using icons in pawabloX</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold">Icon Sizing</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>
                      • <strong>16px:</strong> Small UI elements, inline text
                    </li>
                    <li>
                      • <strong>20px:</strong> Form inputs, small buttons
                    </li>
                    <li>
                      • <strong>24px:</strong> Standard buttons, navigation (default)
                    </li>
                    <li>
                      • <strong>32px:</strong> Large buttons, feature highlights
                    </li>
                    <li>
                      • <strong>48px:</strong> Hero sections, empty states
                    </li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold">Implementation</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use semantic icon names for clarity</li>
                    <li>• Maintain consistent stroke width (2px default)</li>
                    <li>• Use currentColor for theme compatibility</li>
                    <li>• Add aria-labels for accessibility</li>
                    <li>• Consider icon-text alignment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Icon Library */}
          <div className="space-y-8">
            {Object.entries(filteredIcons).map(([category, icons]) => (
              <Card key={category}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {category}
                        <Badge variant="outline">{Object.keys(icons).length} icons</Badge>
                      </CardTitle>
                      <CardDescription>
                        {category === "Navigation & Arrows" &&
                          "Directional icons, navigation elements, and movement indicators"}
                        {category === "Actions & Interface" && "Interactive elements and user interface controls"}
                        {category === "Communication" && "Messaging, social interaction, and contact icons"}
                        {category === "Files & Media" && "File management, document types, and media controls"}
                        {category === "Business & Finance" && "Charts, analytics, money, and business-related icons"}
                        {category === "Technology" && "Hardware, connectivity, and technology icons"}
                        {category === "Social" && "Social media, sharing, and engagement icons"}
                        {category === "Interface Elements" && "UI feedback, alerts, and status indicators"}
                        {category === "Shapes & Symbols" && "Geometric shapes, symbols, and basic elements"}
                        {category === "Tools & Utilities" && "Tools, utilities, and practical instruments"}
                        {category === "Weather & Nature" && "Weather conditions, natural elements, and environment"}
                        {category === "Transportation" && "Vehicles, travel, and transportation methods"}
                        {category === "Shopping & Commerce" && "E-commerce, shopping, and retail icons"}
                        {category === "Time & Calendar" && "Time management, scheduling, and calendar icons"}
                        {category === "Education & Learning" && "Educational tools, learning, and academic icons"}
                        {category === "Health & Medical" && "Healthcare, medical equipment, and wellness icons"}
                        {category === "Text & Typography" &&
                          "Text formatting, typography controls, and content editing"}
                        {category === "Gaming" && "Games, entertainment, and recreational activities"}
                        {category === "Location & Maps" && "Geography, navigation, and location-based icons"}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 gap-4">
                    {Object.entries(icons).map(([iconName, IconComponent]) => (
                      <div key={iconName} className="group relative">
                        <div className="flex flex-col items-center p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                          <div className="flex items-center justify-center w-12 h-12 mb-2">
                            <IconComponent size={iconSize} strokeWidth={strokeWidth} className="text-current" />
                          </div>
                          <div className="text-xs text-center text-muted-foreground font-mono truncate w-full">
                            {iconName}
                          </div>

                          {/* Copy buttons - shown on hover */}
                          <div className="absolute inset-0 bg-background/90 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-1">
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCopyIcon(iconName, "jsx")}
                              className="h-7 text-xs"
                            >
                              {copiedIcon === `${iconName}-jsx` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                              JSX
                            </Button>
                            <Button
                              size="sm"
                              variant="outline"
                              onClick={() => handleCopyIcon(iconName, "import")}
                              className="h-7 text-xs"
                            >
                              {copiedIcon === `${iconName}-import` ? (
                                <Check className="w-3 h-3" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                              Import
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Code Examples */}
          <Card>
            <CardHeader>
              <CardTitle>Implementation Examples</CardTitle>
              <CardDescription>How to use Lucide icons in your React components</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h4 className="font-semibold">Basic Usage</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>import {"{ Search, User, Settings }"} from "lucide-react"</div>
                    <div></div>
                    <div>{"<Search size={24} strokeWidth={2} />"}</div>
                    <div>{'<User className="text-green-600" />'}</div>
                    <div>{'<Settings size={20} aria-label="Settings" />'}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">With Tailwind Classes</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>{'<Search className="w-5 h-5 text-muted-foreground" />'}</div>
                    <div>{'<User className="w-6 h-6 text-green-600 hover:text-green-700" />'}</div>
                    <div>{'<Settings className="w-4 h-4 text-slate-600" />'}</div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold">In Buttons</h4>
                  <div className="bg-muted p-4 rounded-lg font-mono text-sm space-y-1">
                    <div>{"<Button>"}</div>
                    <div>{'  <Download className="w-4 h-4 mr-2" />'}</div>
                    <div>{"  Download File"}</div>
                    <div>{"</Button>"}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {copiedIcon && (
            <div className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-lg shadow-lg">
              Copied {copiedIcon.includes("jsx") ? "JSX" : "import"} to clipboard!
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
