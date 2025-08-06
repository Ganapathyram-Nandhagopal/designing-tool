"use client"

import React from "react"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Circle, Copy, Check, Sun, Moon } from "lucide-react"
import { useState } from "react"

// PawaRadio Component matching the exact design system
const PawaRadio = ({
  variant = "primary",
  size = "default",
  checked = false,
  disabled = false,
  label,
  description,
  name,
  value,
  className = "",
  onChange,
  ...props
}: {
  variant?: "primary" | "secondary"
  size?: "sm" | "default" | "lg"
  checked?: boolean
  disabled?: boolean
  label?: string
  description?: string
  name?: string
  value?: string
  className?: string
  onChange?: (value: string) => void
  [key: string]: any
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center rounded-full border-2 transition-all duration-200 cursor-pointer"

  const variants = {
    primary: {
      unchecked: "border-gray-300 bg-white",
      checked: "border-lime-400 bg-white",
      disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
    },
    secondary: {
      unchecked: "border-gray-300 bg-white",
      checked: "border-[#FF9940] bg-white",
      disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
    },
  }

  const sizes = {
    sm: "w-4 h-4",
    default: "w-5 h-5",
    lg: "w-6 h-6",
  }

  const dotSizes = {
    sm: "w-2 h-2",
    default: "w-2.5 h-2.5",
    lg: "w-3 h-3",
  }

  const getRadioClasses = () => {
    const variantStyles = variants[variant]
    let classes = `${baseClasses} ${sizes[size]} focus:outline-none focus:ring-2 focus:ring-offset-2`

    if (disabled) {
      classes += ` ${variantStyles.disabled}`
    } else if (checked) {
      classes += ` ${variantStyles.checked} active:scale-95`
      if (variant === "primary") {
        classes += " focus:ring-lime-400"
      } else {
        classes += " focus:ring-[#FF9940]"
      }
    } else {
      classes += ` ${variantStyles.unchecked} hover:border-gray-400 active:scale-95`
      if (variant === "primary") {
        classes += " focus:ring-lime-400"
      } else {
        classes += " focus:ring-[#FF9940]"
      }
    }

    return classes
  }

  const getDotColor = () => {
    if (disabled) return "bg-gray-400"
    if (variant === "primary") return "bg-lime-400"
    if (variant === "secondary") return "bg-[#FF9940]"
    return "bg-lime-400"
  }

  const handleChange = () => {
    if (!disabled && onChange && value) {
      onChange(value)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === " " || e.key === "Enter") {
      e.preventDefault()
      handleChange()
    }
  }

  return (
    <div className={`flex items-start gap-3 ${className}`}>
      <div
        className={getRadioClasses()}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        tabIndex={disabled ? -1 : 0}
        role="radio"
        aria-checked={checked}
        aria-disabled={disabled}
        style={{
          outline: "none",
          boxShadow: checked ? "0 0 0 2px rgba(132, 204, 22, 0.2)" : "none",
        }}
        {...props}
      >
        {checked && <div className={`${dotSizes[size]} ${getDotColor()} rounded-full`} />}
      </div>
      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && (
            <label
              className={`block text-sm font-medium cursor-pointer ${disabled ? "text-gray-400" : "text-gray-900"}`}
              onClick={handleChange}
            >
              {label}
            </label>
          )}
          {description && (
            <p className={`text-xs mt-1 ${disabled ? "text-gray-300" : "text-gray-500"}`}>{description}</p>
          )}
        </div>
      )}
    </div>
  )
}

// PawaRadioGroup Component for managing radio button groups
const PawaRadioGroup = ({
  variant = "primary",
  size = "default",
  value,
  onChange,
  children,
  className = "",
  ...props
}: {
  variant?: "primary" | "secondary"
  size?: "sm" | "default" | "lg"
  value?: string
  onChange?: (value: string) => void
  children: React.ReactNode
  className?: string
  [key: string]: any
}) => {
  return (
    <div
      className={`space-y-3 ${className}`}
      role="radiogroup"
      onKeyDown={(e) => {
        if (e.key === "ArrowDown" || e.key === "ArrowUp") {
          e.preventDefault()
          // Handle arrow key navigation for radio groups
        }
      }}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            variant,
            size,
            checked: child.props.value === value,
            onChange,
          })
        }
        return child
      })}
    </div>
  )
}

export default function RadioPage() {
  const [copiedCode, setCopiedCode] = useState<string>("")
  const [darkMode, setDarkMode] = useState(false)
  const [radioStates, setRadioStates] = useState({
    primary: "option1",
    secondary: "option2",
    size: "medium",
    payment: "credit",
    notification: "email",
    theme: "light",
  })

  const handleCopyCode = (code: string, id: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(id)
    setTimeout(() => setCopiedCode(""), 2000)
  }

  const updateRadioState = (key: string, value: string) => {
    setRadioStates((prev) => ({ ...prev, [key]: value }))
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
              <Circle className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Core Components</span>
            </div>
            <h1 className="text-4xl font-bold">Radio Buttons</h1>
            <p className="text-xl text-muted-foreground max-w-3xl">
              Displays the primary logo or a variation used to represent the brand visually. A control that allows the
              user to select one option from a set of mutually exclusive options.
            </p>
          </div>

          {/* Design System Reference */}
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>pawabloX Radio Button System</CardTitle>
                  <CardDescription>Complete radio button design system with all variants and themes</CardDescription>
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
            <CardContent>
              <div className={`p-8 rounded-lg transition-colors ${darkMode ? "bg-slate-800" : "bg-gray-50"} space-y-6`}>
                <div className="space-y-4">
                  <PawaRadio
                    variant="primary"
                    checked={false}
                    label="Radio Button Text"
                    description="This is a radio description."
                    value="option1"
                  />
                  <PawaRadio
                    variant="primary"
                    checked={true}
                    label="Radio Button Text"
                    description="This is a radio description."
                    value="option2"
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Radio Button Variants */}
          <Tabs defaultValue="variants" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="variants">Variants</TabsTrigger>
              <TabsTrigger value="states">States</TabsTrigger>
              <TabsTrigger value="sizes">Sizes</TabsTrigger>
              <TabsTrigger value="examples">Examples</TabsTrigger>
            </TabsList>

            {/* Variants Tab */}
            <TabsContent value="variants" className="space-y-6">
              {/* Primary Radio */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-lime-400 rounded-full"></div>
                    Primary Radio Button
                  </CardTitle>
                  <CardDescription>Used for primary selections and standard option choices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Choose your plan</h4>
                    <PawaRadioGroup
                      variant="primary"
                      value={radioStates.primary}
                      onChange={(value) => updateRadioState("primary", value)}
                    >
                      <PawaRadio
                        label="Basic Plan"
                        description="Perfect for individuals getting started"
                        value="basic"
                      />
                      <PawaRadio label="Pro Plan" description="Great for growing teams and businesses" value="pro" />
                      <PawaRadio
                        label="Enterprise Plan"
                        description="Advanced features for large organizations"
                        value="enterprise"
                      />
                    </PawaRadioGroup>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaRadio variant="primary" label="Option 1" value="option1" />`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(
                          `<PawaRadio variant="primary" label="Option 1" value="option1" />`,
                          "primary-radio",
                        )
                      }
                      className="ml-2"
                    >
                      {copiedCode === "primary-radio" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Secondary Radio */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-[#FF9940] rounded-full"></div>
                    Secondary Radio Button
                  </CardTitle>
                  <CardDescription>Used for important selections and critical option choices.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <h4 className="font-semibold">Priority Level</h4>
                    <PawaRadioGroup
                      variant="secondary"
                      value={radioStates.secondary}
                      onChange={(value) => updateRadioState("secondary", value)}
                    >
                      <PawaRadio label="Low Priority" description="Standard processing time" value="low" />
                      <PawaRadio label="High Priority" description="Expedited processing" value="high" />
                      <PawaRadio
                        label="Critical Priority"
                        description="Immediate attention required"
                        value="critical"
                      />
                    </PawaRadioGroup>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <code className="text-sm">{`<PawaRadio variant="secondary" label="Option 1" value="option1" />`}</code>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() =>
                        handleCopyCode(
                          `<PawaRadio variant="secondary" label="Option 1" value="option1" />`,
                          "secondary-radio",
                        )
                      }
                      className="ml-2"
                    >
                      {copiedCode === "secondary-radio" ? <Check className="w-3 h-3" /> : <Copy className="w-3 h-3" />}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* States Tab */}
            <TabsContent value="states" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Radio Button States</CardTitle>
                  <CardDescription>Different states and interactions for better user experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Primary States</h3>
                      <div className="space-y-3">
                        <PawaRadio
                          variant="primary"
                          checked={false}
                          label="Unselected"
                          description="Default unselected state"
                          value="unselected"
                        />
                        <PawaRadio
                          variant="primary"
                          checked={true}
                          label="Selected"
                          description="Active selected state"
                          value="selected"
                        />
                        <PawaRadio
                          variant="primary"
                          checked={false}
                          disabled={true}
                          label="Disabled Unselected"
                          description="Cannot be interacted with"
                          value="disabled-unselected"
                        />
                        <PawaRadio
                          variant="primary"
                          checked={true}
                          disabled={true}
                          label="Disabled Selected"
                          description="Cannot be interacted with"
                          value="disabled-selected"
                        />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Secondary States</h3>
                      <div className="space-y-3">
                        <PawaRadio
                          variant="secondary"
                          checked={false}
                          label="Unselected"
                          description="Default unselected state"
                          value="unselected"
                        />
                        <PawaRadio
                          variant="secondary"
                          checked={true}
                          label="Selected"
                          description="Active selected state"
                          value="selected"
                        />
                        <PawaRadio
                          variant="secondary"
                          checked={false}
                          disabled={true}
                          label="Disabled Unselected"
                          description="Cannot be interacted with"
                          value="disabled-unselected"
                        />
                        <PawaRadio
                          variant="secondary"
                          checked={true}
                          disabled={true}
                          label="Disabled Selected"
                          description="Cannot be interacted with"
                          value="disabled-selected"
                        />
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
                  <CardTitle>Radio Button Sizes</CardTitle>
                  <CardDescription>Different sizes for various contexts and information hierarchy</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-6">
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Size Comparison</h3>
                      <div className="flex flex-wrap items-center gap-8">
                        <div className="flex flex-col items-center gap-2">
                          <PawaRadio variant="primary" size="sm" checked={true} label="Small" value="small" />
                          <span className="text-xs text-muted-foreground">16px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaRadio variant="primary" size="default" checked={true} label="Default" value="default" />
                          <span className="text-xs text-muted-foreground">20px</span>
                        </div>
                        <div className="flex flex-col items-center gap-2">
                          <PawaRadio variant="primary" size="lg" checked={true} label="Large" value="large" />
                          <span className="text-xs text-muted-foreground">24px</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold">Size Selection Example</h3>
                      <PawaRadioGroup
                        variant="primary"
                        value={radioStates.size}
                        onChange={(value) => updateRadioState("size", value)}
                      >
                        <PawaRadio
                          size="sm"
                          label="Small Size"
                          description="Compact radio for tight spaces"
                          value="small"
                        />
                        <PawaRadio
                          size="default"
                          label="Default Size"
                          description="Standard radio for most use cases"
                          value="medium"
                        />
                        <PawaRadio size="lg" label="Large Size" description="Larger radio for emphasis" value="large" />
                      </PawaRadioGroup>
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
                  <CardDescription>Common radio button patterns and use cases in applications</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Payment Method</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-semibold">Choose Payment Method</h4>
                      <PawaRadioGroup
                        variant="primary"
                        value={radioStates.payment}
                        onChange={(value) => updateRadioState("payment", value)}
                      >
                        <PawaRadio
                          label="Credit Card"
                          description="Pay with Visa, Mastercard, or American Express"
                          value="credit"
                        />
                        <PawaRadio label="PayPal" description="Pay securely with your PayPal account" value="paypal" />
                        <PawaRadio
                          label="Bank Transfer"
                          description="Direct transfer from your bank account"
                          value="bank"
                        />
                        <PawaRadio
                          label="Apple Pay"
                          description="Quick payment with Touch ID or Face ID"
                          value="apple"
                        />
                      </PawaRadioGroup>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Notification Preferences</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-semibold">How would you like to receive notifications?</h4>
                      <PawaRadioGroup
                        variant="primary"
                        value={radioStates.notification}
                        onChange={(value) => updateRadioState("notification", value)}
                      >
                        <PawaRadio label="Email Only" description="Receive notifications via email" value="email" />
                        <PawaRadio label="SMS Only" description="Receive notifications via text message" value="sms" />
                        <PawaRadio
                          label="Both Email and SMS"
                          description="Receive notifications via both channels"
                          value="both"
                        />
                        <PawaRadio
                          label="No Notifications"
                          description="Don't send me any notifications"
                          value="none"
                        />
                      </PawaRadioGroup>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">Theme Selection</h3>
                    <div className="p-4 border rounded-lg space-y-4">
                      <h4 className="font-semibold">Choose your preferred theme</h4>
                      <PawaRadioGroup
                        variant="secondary"
                        value={radioStates.theme}
                        onChange={(value) => updateRadioState("theme", value)}
                      >
                        <PawaRadio label="Light Theme" description="Clean and bright interface" value="light" />
                        <PawaRadio label="Dark Theme" description="Easy on the eyes in low light" value="dark" />
                        <PawaRadio
                          label="Auto Theme"
                          description="Automatically switch based on system preference"
                          value="auto"
                        />
                      </PawaRadioGroup>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Usage Guidelines */}
          <Card>
            <CardHeader>
              <CardTitle>Usage Guidelines</CardTitle>
              <CardDescription>Best practices for using radio buttons in your applications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-green-600">✓ Do</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use for mutually exclusive options</li>
                    <li>• Provide clear, descriptive labels</li>
                    <li>• Group related options together</li>
                    <li>• Use primary variant for standard selections</li>
                    <li>• Use secondary variant for critical choices</li>
                    <li>• Always have one option pre-selected</li>
                    <li>• Support keyboard navigation (arrow keys)</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-red-600">✗ Don't</h3>
                  <ul className="space-y-2 text-sm">
                    <li>• Use for multiple selections (use checkboxes)</li>
                    <li>• Use for single yes/no options (use checkbox)</li>
                    <li>• Make labels too long or complex</li>
                    <li>• Use too many options in one group (consider dropdown)</li>
                    <li>• Forget to handle disabled states</li>
                    <li>• Use radio buttons for navigation</li>
                    <li>• Leave all options unselected</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Component Code */}
          <Card>
            <CardHeader>
              <CardTitle>Component Implementation</CardTitle>
              <CardDescription>Complete PawaRadio and PawaRadioGroup component code</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`const PawaRadio = ({
  variant = "primary",
  size = "default",
  checked = false,
  disabled = false,
  label,
  description,
  value,
  onChange,
  ...props
}) => {
  const baseClasses = "relative inline-flex items-center justify-center rounded-full border-2 transition-all duration-200 cursor-pointer"
  
  const variants = {
    primary: {
      unchecked: "border-gray-300 bg-white",
      checked: "border-lime-400 bg-white",
      disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
    },
    secondary: {
      unchecked: "border-gray-300 bg-white",
      checked: "border-[#FF9940] bg-white",
      disabled: "border-gray-200 bg-gray-100 cursor-not-allowed",
    },
  }
  
  const sizes = {
    sm: "w-4 h-4",
    default: "w-5 h-5",
    lg: "w-6 h-6",
  }
  
  return (
    <div className="flex items-start gap-3">
      <div className={getRadioClasses()} onClick={handleChange} role="radio" aria-checked={checked}>
        {checked && <div className="w-2.5 h-2.5 bg-lime-400 rounded-full" />}
      </div>
      {(label || description) && (
        <div className="flex-1 min-w-0">
          {label && <label className="block text-sm font-medium">{label}</label>}
          {description && <p className="text-xs mt-1 text-gray-500">{description}</p>}
        </div>
      )}
    </div>
  )
}

const PawaRadioGroup = ({ value, onChange, children, ...props }) => {
  return (
    <div className="space-y-3" role="radiogroup" {...props}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            checked: child.props.value === value,
            onChange,
          })
        }
        return child
      })}
    </div>
  )
}`}</code>
                </pre>
              </div>
              <Button
                size="sm"
                variant="outline"
                onClick={() =>
                  handleCopyCode(
                    `const PawaRadio = ({ variant = "primary", checked = false, label, value, onChange, ...props }) => { /* component code */ }`,
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
