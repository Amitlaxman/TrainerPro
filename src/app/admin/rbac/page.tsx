
"use client"

import { 
  ShieldAlert, 
  RotateCcw, 
  UserPlus, 
  Save, 
  Monitor, 
  Smartphone, 
  History, 
  Search, 
  Filter,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  AlertCircle,
  Clock,
  RefreshCw,
  LayoutGrid,
  Calendar,
  CreditCard,
  BookOpen,
  BarChart3,
  MoreVertical,
  ShieldCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";

const roles = ["SUPER ADMIN", "LMS ADMIN", "TRAINER", "TRAINEE"];

const screens = [
  { id: 1, name: "Admin Dashboard", description: "System metrics and analytics overview", icon: LayoutGrid, permissions: [true, true, false, false] },
  { id: 2, name: "Trainer Session Planner", description: "Schedule and manage upcoming training", icon: Calendar, permissions: [true, true, true, false], hasOverride: true },
  { id: 3, name: "Billing & Subscriptions", description: "Financial records and plan management", icon: CreditCard, permissions: [true, false, false, false] },
  { id: 4, name: "Course Catalog", description: "Library of available learning modules", icon: BookOpen, permissions: [true, true, true, true] },
  { id: 5, name: "Advanced Reports", description: "Custom data export and filtering", icon: BarChart3, permissions: [true, true, false, false] },
];

const stats = [
  { label: "Active Permissions", value: "1,204", icon: Eye, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Restricted Screens", value: "12", icon: AlertCircle, color: "text-red-500", bg: "bg-red-500/10" },
  { label: "Last Modified", value: "2h ago", icon: Clock, color: "text-orange-500", bg: "bg-orange-500/10" },
  { label: "Sync Status", value: "Active", icon: RefreshCw, color: "text-emerald-500", bg: "bg-emerald-500/10" },
];

export default function RBACManagement() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground p-10 space-y-10">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Role-Based Access Control</h1>
          <p className="text-muted-foreground font-medium max-w-2xl">
            Configure granular permissions across all platform screens and roles.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button variant="secondary" className="bg-[#151921] border-white/5 text-white h-11 px-6 text-xs font-bold uppercase tracking-wider">
            <RotateCcw className="w-4 h-4 mr-2" /> Reset Changes
          </Button>
          <Button variant="secondary" className="bg-[#151921] border-white/5 text-white h-11 px-6 text-xs font-bold uppercase tracking-wider">
            <UserPlus className="w-4 h-4 mr-2" /> User Override
          </Button>
          <Button className="bg-primary hover:bg-primary/90 h-11 px-8 text-xs font-bold uppercase tracking-widest text-white shadow-xl shadow-primary/20">
            <Save className="w-4 h-4 mr-2" /> Save Permissions
          </Button>
        </div>
      </div>

      {/* Tabs & Search Bar */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <Tabs defaultValue="web" className="w-fit">
          <TabsList className="bg-[#151921] border border-white/5 p-1 h-12">
            <TabsTrigger value="web" className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs font-bold px-6 gap-2">
              <Monitor className="w-4 h-4" /> Web Screens <Badge className="bg-primary/20 text-primary border-none text-[10px] px-1.5 ml-1">24</Badge>
            </TabsTrigger>
            <TabsTrigger value="mobile" className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs font-bold px-6 gap-2">
              <Smartphone className="w-4 h-4" /> Mobile Screens <Badge className="bg-white/10 text-muted-foreground border-none text-[10px] px-1.5 ml-1">12</Badge>
            </TabsTrigger>
            <TabsTrigger value="history" className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs font-bold px-6 gap-2">
              <History className="w-4 h-4" /> History
            </TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="relative flex-1 max-w-md">
          <Filter className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Filter screens..." 
            className="bg-[#151921] border-white/5 pl-10 h-12 text-sm focus-visible:ring-1 focus-visible:ring-primary/40 rounded-xl"
          />
        </div>
      </div>

      {/* Permissions Matrix */}
      <Card className="bg-[#151921]/40 border-none rounded-[2rem] overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/5 bg-white/2">
                <th className="py-8 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">Screen / Feature Name</th>
                {roles.map((role) => (
                  <th key={role} className="py-8 px-4 text-center">
                    <div className="space-y-1.5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white leading-none">{role}</p>
                      <div className="flex items-center justify-center gap-3 text-[8px] font-black uppercase tracking-widest">
                        <button className="text-primary hover:underline">All</button>
                        <span className="text-white/10">/</span>
                        <button className="text-muted-foreground/40 hover:text-white">None</button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {screens.map((screen) => (
                <tr key={screen.id} className="group hover:bg-white/2 transition-colors">
                  <td className="py-8 px-8">
                    <div className="flex items-center gap-6">
                      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                        <screen.icon className="w-5 h-5 text-muted-foreground group-hover:text-white transition-colors" />
                      </div>
                      <div className="space-y-1 relative">
                        <div className="flex items-center gap-3">
                          <h3 className="text-sm font-bold text-white">{screen.name}</h3>
                          {screen.hasOverride && (
                            <div className="flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-orange-500/10 border border-orange-500/20">
                              <div className="w-1 h-1 rounded-full bg-orange-500 animate-pulse" />
                              <span className="text-[8px] font-black text-orange-500 uppercase tracking-widest">Override Active</span>
                            </div>
                          )}
                        </div>
                        <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">{screen.description}</p>
                      </div>
                    </div>
                  </td>
                  {screen.permissions.map((hasAccess, idx) => (
                    <td key={idx} className="py-8 px-4 text-center">
                      <div className="flex justify-center">
                        <Checkbox 
                          defaultChecked={hasAccess} 
                          className="w-6 h-6 rounded-lg border-white/10 data-[state=checked]:bg-primary data-[state=checked]:border-none" 
                        />
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="p-8 border-t border-white/5 flex items-center justify-between bg-white/2">
          <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Showing 5 of 24 web screens</p>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground border border-white/5"><ChevronLeft className="w-4 h-4" /></Button>
            <div className="flex items-center gap-1.5 mx-2">
              <Button className="h-9 w-9 bg-primary text-white font-black text-xs p-0 border-none rounded-xl">1</Button>
              <Button variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-white font-black text-xs p-0">2</Button>
              <Button variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-white font-black text-xs p-0">3</Button>
            </div>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground border border-white/5"><ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </Card>

      {/* Summary Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-[#151921] border-none p-10 rounded-[2.5rem] shadow-2xl relative overflow-hidden group hover:ring-1 hover:ring-primary/20 transition-all">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">{stat.label}</p>
              <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                <stat.icon className={cn("w-5 h-5", stat.color)} />
              </div>
            </div>
            <div className="relative z-10">
              <h3 className={cn("text-4xl font-black text-white tracking-tighter", stat.value === 'Active' && "text-emerald-500")}>
                {stat.value}
              </h3>
            </div>
            <div className={cn("absolute -right-4 -bottom-4 w-32 h-32 blur-3xl opacity-5", stat.bg)} />
          </Card>
        ))}
      </div>
    </div>
  );
}
