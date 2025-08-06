"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SwitchPage() {
  return (
    <Tabs defaultValue="automatic" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="automatic">Automatic</TabsTrigger>
        <TabsTrigger value="manual">Manual</TabsTrigger>
      </TabsList>
      <TabsContent value="automatic">Make it automatic.</TabsContent>
      <TabsContent value="manual">Make it manual.</TabsContent>
    </Tabs>
  )
}
