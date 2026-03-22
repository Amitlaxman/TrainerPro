
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
  ChevronRight,
  CalendarDays,
  Database,
  Search,
  LayoutGrid,
  GraduationCap,
  Database as AdminIcon,
  Plus,
  ShieldCheck,
  History
} from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
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
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const trainerNavigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "My Schedule", href: "/schedule", icon: Calendar },
  { name: "Calendar", href: "/calendar", icon: CalendarDays },
  { name: "Personal", href: "/personal", icon: User },
  { name: "Employees", href: "/employees", icon: Users },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Content", href: "/content", icon: Database },
  { name: "Question Bank", href: "/question-bank", icon: Search },
  { name: "Analytics", href: "/analytics", icon: BarChart3 },
  { name: "AI Tools", href: "/ai-tools", icon: Sparkles },
];

const adminNavigation = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "PSARA Compliance", href: "/admin/psara", icon: ShieldCheck },
  { name: "Training History", href: "/admin/training-history", icon: History },
  { name: "Courses", href: "/courses", icon: BookOpen },
  { name: "Reports", href: "/analytics", icon: BarChart3 },
  { name: "Assessments", href: "/question-bank", icon: Search },
];

const adminSecondaryNav = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Alerts", href: "/alerts", icon: Bell },
];

const secondaryNavigation = [
  { name: "Notifications", href: "/notifications", icon: Bell },
  { name: "Settings", href: "/settings", icon: Settings },
];

export function AppSidebar() {
  const pathname = usePathname();
  const router = useRouter();
  const isAdmin = pathname.startsWith("/admin");
  const trainerImage = PlaceHolderImages.find(img => img.id === "avatar-trainer")?.imageUrl;

  const handleLogout = () => {
    router.push("/login");
  };

  const nav = isAdmin ? adminNavigation : trainerNavigation;
  const secondaryNav = isAdmin ? adminSecondaryNav : secondaryNavigation;

  return (
    <Sidebar className={cn("border-r border-sidebar-border", isAdmin && "bg-[#0F1218]")}>
      <SidebarHeader className="p-6">
        <div className="flex items-center gap-3">
          <div className={cn(
            "w-10 h-10 rounded-lg flex items-center justify-center shadow-lg",
            isAdmin ? "bg-blue-600 shadow-blue-600/20" : "bg-primary shadow-primary/20"
          )}>
            {isAdmin ? <AdminIcon className="text-white w-6 h-6" /> : <GraduationCap className="text-white w-6 h-6" />}
          </div>
          <div className="flex flex-col">
            <span className="font-headline text-xl leading-none tracking-tight text-white">
              {isAdmin ? "LMS Admin" : "TrainerPro"}
            </span>
            {!isAdmin && <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] mt-1">Trainer Portal</span>}
          </div>
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="px-4 text-[10px] font-bold uppercase tracking-widest opacity-50">
            Main Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {nav.map((item) => (
                <SidebarMenuItem key={item.name}>
                  <SidebarMenuButton
                    asChild
                    isActive={pathname === item.href}
                    tooltip={item.name}
                    className={cn(
                      "h-11 transition-all",
                      pathname === item.href && isAdmin ? "bg-blue-600/10 text-blue-400 font-bold" : ""
                    )}
                  >
                    <Link href={item.href} className="flex items-center gap-3">
                      <item.icon className={cn("w-5 h-5", pathname === item.href && isAdmin ? "text-blue-400" : "")} />
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
          <SidebarGroupLabel className="px-4 text-[10px] font-bold uppercase tracking-widest opacity-50">
            System
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {secondaryNav.map((item) => (
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

        {isAdmin && (
          <div className="mt-auto p-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-12 rounded-xl text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-blue-600/20">
              <Plus className="w-4 h-4 mr-2" /> Create New Course
            </Button>
          </div>
        )}

        {!isAdmin && (
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
        )}
      </SidebarContent>

      <SidebarFooter className="p-4">
        <div className={cn(
          "p-3 rounded-xl border flex items-center gap-3",
          isAdmin ? "bg-blue-600/5 border-blue-600/10" : "bg-sidebar-accent/50 border-sidebar-border"
        )}>
          <Avatar className={cn("w-10 h-10 border-2", isAdmin ? "border-blue-600/20" : "border-primary/20")}>
            <AvatarImage src={trainerImage} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold truncate text-white">{isAdmin ? "Admin User" : "John Smith"}</p>
            <p className="text-[10px] uppercase font-bold opacity-50 truncate tracking-widest">
              {isAdmin ? "System Admin" : "Head Trainer"}
            </p>
          </div>
          <button 
            onClick={handleLogout}
            className="p-1.5 hover:bg-sidebar-accent rounded-lg transition-colors"
          >
            <LogOut className="w-4 h-4 opacity-70" />
          </button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
