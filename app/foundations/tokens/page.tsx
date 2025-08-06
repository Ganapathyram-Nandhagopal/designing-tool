import { promises as fs } from "fs"
import { DesignTokenBrowser } from "@/components/design-token-browser"

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

export default async function TokensPage() {
  // Load the design token files
  const tailwindFile = await fs.readFile(process.cwd() + "/data/tailwind-tokens.json", "utf8")
  const themeFile = await fs.readFile(process.cwd() + "/data/theme-tokens.json", "utf8")

  const tailwindTokens: VariableCollection = JSON.parse(tailwindFile)
  const themeTokens: VariableCollection = JSON.parse(themeFile)

  return (
    <div className="flex-1 bg-background">
      <DesignTokenBrowser tailwindTokens={tailwindTokens} themeTokens={themeTokens} />
    </div>
  )
}
