import React from "react";
import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default async function Docs() {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar:state")?.value === "true";
  return (
    <div>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AppSidebar />
        <main className="px-4">
          <SidebarTrigger />
        </main>
      </SidebarProvider>
    </div>
  );
}
