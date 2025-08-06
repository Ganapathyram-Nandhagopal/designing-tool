"use client"
import { Checkbox } from "@/components/ui/checkbox"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CheckboxPage() {
  return (
    <Tabs defaultValue="item-1" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="item-1">Checkbox 1</TabsTrigger>
        <TabsTrigger value="item-2">Checkbox 2</TabsTrigger>
        <TabsTrigger value="item-3">Checkbox 3</TabsTrigger>
        <TabsTrigger value="item-4">Checkbox 4</TabsTrigger>
      </TabsList>
      <TabsContent value="item-1">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms1" />
          <label
            htmlFor="terms1"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </TabsContent>
      <TabsContent value="item-2">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms2" />
          <label
            htmlFor="terms2"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </TabsContent>
      <TabsContent value="item-3">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms3" />
          <label
            htmlFor="terms3"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </TabsContent>
      <TabsContent value="item-4">
        <div className="flex items-center space-x-2">
          <Checkbox id="terms4" />
          <label
            htmlFor="terms4"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Accept terms and conditions
          </label>
        </div>
      </TabsContent>
    </Tabs>
  )
}
