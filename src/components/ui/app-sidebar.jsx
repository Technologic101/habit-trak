import { Sidebar, SidebarContent } from "@/components/ui/sidebar"

export default function AppSidebar({ children }) {
  return (
    <Sidebar>
      <SidebarContent>
        {children}
      </SidebarContent>
    </Sidebar>
  )
}