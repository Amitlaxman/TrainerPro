"use client"

import {
  LayoutDashboard,
  ClipboardList,
  BookOpen,
  Tags,
  Users,
  Settings,
  Bell,
  LogOut,
  Layers,
  LayoutGrid
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const navigation = [
  { name: "Overview", href: "/", icon: LayoutGrid },
  { name: "Question Bank", href: "/question-bank", icon: ClipboardList },
  { name: "Assessments", href: "/courses", icon: BookOpen },
  { name: "Categories", href: "/content", icon: Tags },
  { name: "Students", href: "/employees", icon: Users },
];

const secondaryNavigation = [
  { name: "General Config", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const trainerImage = PlaceHolderImages.find(img => img.id === "avatar-trainer")?.imageUrl;

  return (
    <Sidebar className="border-r border-sidebar-border bg-[#0A0C10]">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Layers className="text-white w-5 h-5" />
          </div>
          <span className="font-headline text-xl tracking-tight text-white">LMS Admin</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href || pathname.startsWith(item.href + '/')}
                    tooltip={item.name}
                    className="h-11 px-4 hover:bg-white/5 data-[active=true]:bg-primary/10 data-[active=true]:text-primary"
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        <SidebarGroup className="mt-4">
          <SidebarGroupLabel className="px-4 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground opacity-50">
            Settings
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className="h-11 px-4 hover:bg-white/5"
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-6">
        <div className="flex items-center gap-3">
          <Avatar className="w-10 h-10 border border-white/10">
            <AvatarImage src={trainerImage} />
            <AvatarFallback>AR</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-bold truncate text-white">Alex Rivera</p>
            <p className="text-[10px] text-muted-foreground font-medium truncate">System Administrator</p>
          </div>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
