import Head from 'next/head';
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "@/components/ui/app-sidebar";

export default function Layout({ children }) {
  return (
    <SidebarProvider>
    {/* Head allows you to modify the <head> section of the page */}
      <Head>
        <title>Habit Tracker</title>
        <meta name="description" content="Dashboard for Habit Tracker" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

        {/* Sidebar */}
        <AppSidebar />
        <SidebarInset>
          <header className='flex justify-between items-center p-4 border-b border-gray-300 w-full'>
            <h1>Habit Tracker</h1>
            <SidebarTrigger />
          </header>

          {/* Main content area where pages will be rendered */}
          <main className='w-full p-4 flex flex-grow'>
            {children}
          </main>

          {/* Footer */}
          <footer className='flex self-end justify-center items-center p-4 border-t border-gray-300 w-full'>
            <p>© 2024 Habit Tracker. All rights reserved.</p>
          </footer>
        </SidebarInset>
    </SidebarProvider>
  );
}
