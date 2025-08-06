import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function AlertPage() {
  return (
    <Tabs defaultValue="profile" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="appearance">Appearance</TabsTrigger>
        <TabsTrigger value="display">Display</TabsTrigger>
      </TabsList>
      <TabsContent value="profile">Make changes to your profile here.</TabsContent>
      <TabsContent value="account">Manage your account settings.</TabsContent>
      <TabsContent value="appearance">Customize how the application looks to you.</TabsContent>
      <TabsContent value="display">Control how others see you in the application.</TabsContent>
    </Tabs>
  )
}
