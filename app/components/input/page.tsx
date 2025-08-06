import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InputPage() {
  return (
    <Tabs defaultValue="text" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="text">Text</TabsTrigger>
        <TabsTrigger value="number">Number</TabsTrigger>
        <TabsTrigger value="email">Email</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="text">
        <div className="grid gap-2">
          <label htmlFor="text">Text</label>
          <input type="text" id="text" placeholder="Enter text" className="border rounded-md px-2 py-1" />
        </div>
      </TabsContent>
      <TabsContent value="number">
        <div className="grid gap-2">
          <label htmlFor="number">Number</label>
          <input type="number" id="number" placeholder="Enter number" className="border rounded-md px-2 py-1" />
        </div>
      </TabsContent>
      <TabsContent value="email">
        <div className="grid gap-2">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter email" className="border rounded-md px-2 py-1" />
        </div>
      </TabsContent>
      <TabsContent value="password">
        <div className="grid gap-2">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter password" className="border rounded-md px-2 py-1" />
        </div>
      </TabsContent>
    </Tabs>
  )
}
