"use client"

import {
  BarChart3,
  BookOpen,
  LayoutDashboard,
  ShieldAlert,
  Sparkles,
  Users,
  Settings,
  Bell,
  LogOut,
  User,
  Calendar,
  ChevronRight
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
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "My Schedule", href: "/schedule", icon: Calendar },
  { name: "Personal", href: "/personal", icon: User },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Tools", href: "/ai-tools", icon: Sparkles },
];

const secondaryNavigation = [
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const trainerImage = PlaceHolderImages.find(img => img.id === "avatar-trainer")?.imageUrl;

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <ShieldAlert className="text-white w-5 h-5" />
          </div>
          <span className="font-headline text-xl tracking-tight text-white">TrainerPro</span>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-semibold uppercase tracking-wider opacity-50">
            Management
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className="h-11"
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

        <SidebarSeparator className="mx-4 my-2 opacity-50" />

        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-xs font-semibold uppercase tracking-wider opacity-50">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNavigation.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className="h-11"
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

        {/* Quick Filters - Desktop only mock from image */}
        <SidebarGroup className="mt-auto pb-4 px-4 hidden md:block">
          <div className="p-4 rounded-xl bg-white/5 space-y-3">
            <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Quick Filters</p>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="hover:text-white cursor-pointer transition-colors">Classroom</p>
              <p className="hover:text-white cursor-pointer transition-colors">Virtual Sessions</p>
              <p className="hover:text-white cursor-pointer transition-colors">Self-Paced Checkins</p>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className="p-3 rounded-xl bg-sidebar-accent/50 border border-sidebar-border flex items-center gap-3">
          <Avatar className="w-10 h-10 border-2 border-primary/20">
            <AvatarImage src={trainerImage} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-white">John Smith</p>
            <p className="text-xs opacity-50 truncate">Head Trainer</p>
          </div>
          <button className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors">
            <LogOut className="w-4 h-4 opacity-70" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
