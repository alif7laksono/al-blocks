import {
  Calendar,
  Home,
  Inbox,
  CircleUser,
  FileQuestion,
  Footprints,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

const items = [
  {
    title: "Header&Navigation",
    url: "#",
    icon: Home,
  },
  {
    title: "Hero Sections",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Feature Sections",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Call to Action",
    url: "#",
    icon: CircleUser,
  },
  {
    title: "Faq",
    url: "#",
    icon: FileQuestion,
  },
  {
    title: "Footer Section",
    url: "#",
    icon: Footprints,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
