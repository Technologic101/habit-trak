import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarTrigger, SidebarMenuItem } from "@/components/ui/sidebar"

export default function AppSidebar({ children }) {
  return (
    <Sidebar>
      <SidebarHeader className="border-b border-sidebar-border">
        <div className="flex justify-between">
          <h1 className="text-lg font-semibold">Habit Tracker</h1>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>Dashboard</SidebarMenuItem>
            <SidebarMenuItem>Habits</SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        {children}
      </SidebarContent>
    </Sidebar>
  )
}