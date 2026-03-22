
"use client"

import { 
  ShieldCheck, 
  Search, 
  Bell, 
  Settings, 
  Filter, 
  Calendar, 
  TrendingUp, 
  CheckCircle2, 
  AlertTriangle, 
  ChevronDown, 
  MoreVertical,
  ArrowRight,
  Map as MapIcon,
  ShieldAlert,
  LayoutGrid,
  Users,
  FileText,
  BadgeCheck
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

const stats = [
  { label: "Overall Compliance %", value: "94.2%", change: "+2.1% from last month", icon: ShieldCheck, color: "text-blue-500", bg: "bg-blue-500/10", trend: "up" },
  { label: "PSARA License Status", value: "Active", sub: "Valid until Dec 2026", icon: BadgeCheck, color: "text-emerald-500", bg: "bg-emerald-500/10", trend: "neutral" },
  { label: "Training Completion", value: "88.5%", change: "+5.4% increase", icon: Users, color: "text-blue-400", bg: "bg-blue-400/10", trend: "up" },
  { label: "Expiring Docs", value: "12 Items", sub: "Requires action in 15 days", icon: AlertTriangle, color: "text-red-500", bg: "bg-red-500/10", trend: "down" },
];

const regionalData = [
  { name: "Maharashtra", value: 98, isHq: true, color: "bg-emerald-500" },
  { name: "Delhi NCR", value: 82, color: "bg-blue-500" },
  { name: "Karnataka", value: 64, color: "bg-red-500" },
  { name: "Tamil Nadu", value: 91, color: "bg-emerald-500" },
];

const siteCompliance = [
  { name: "HDFC Towers, BKC", sub: "Mumbai South", guards: 124, compliant: 121, percentage: "97.5%", status: "emerald" },
  { name: "Nexus Tech Park", sub: "Bangalore North", guards: 86, compliant: 52, percentage: "60.4%", status: "red" },
  { name: "ITC Maurya Security", sub: "New Delhi", guards: 45, compliant: 42, percentage: "93.3%", status: "emerald" },
  { name: "Oracle IDC", sub: "Hyderabad", guards: 210, compliant: 204, percentage: "97.1%", status: "emerald" },
];

export default function PSARACompliance() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col">
      {/* Top Header */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between gap-6 bg-[#0A0C10]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <ShieldCheck className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">PSARA Compliance Dashboard</h1>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">SecureGuard India</p>
          </div>
        </div>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Check Individual Guard Compliance (Name or ID)..." 
            className="bg-[#151921] border-none pl-10 h-11 text-sm focus-visible:ring-1 focus-visible:ring-blue-500/40"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-white bg-white/5">
            <Bell className="w-5 h-5" />
          </Button>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-white bg-white/5">
            <Settings className="w-5 h-5" />
          </Button>
          
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-white leading-none">Admin Officer</p>
              <p className="text-[10px] text-muted-foreground font-medium mt-1">HQ Mumbai</p>
            </div>
            <Avatar className="h-9 w-9 border border-blue-600/20 shadow-lg">
              <AvatarImage src="https://picsum.photos/seed/officer/100/100" />
              <AvatarFallback>AO</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sub Sidebar */}
        <aside className="w-64 border-r border-white/5 p-6 space-y-10 hidden xl:block">
          <div className="space-y-2">
            {[
              { label: "Dashboard", icon: LayoutGrid, active: true },
              { label: "Compliance Audit", icon: ShieldCheck },
              { label: "Training Center", icon: GraduationCap },
              { label: "Guard Roster", icon: Users },
              { label: "Documentation", icon: FileText },
            ].map((item) => (
              <button
                key={item.label}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all",
                  item.active ? "bg-blue-600 text-white shadow-lg shadow-blue-600/20" : "text-muted-foreground hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </div>

          <div className="space-y-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] px-4">State Regulations</p>
            <div className="space-y-2 px-2">
              {["DL-PSARA-2024", "MH-PSARA-2024", "KA-RULES-2.0"].map((reg) => (
                <Badge key={reg} variant="secondary" className="w-full justify-start bg-[#151921] border-white/5 text-[10px] font-bold py-2 rounded-lg cursor-pointer hover:bg-white/5">
                  {reg}
                </Badge>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8 space-y-8 overflow-y-auto">
          {/* Filters Bar */}
          <Card className="bg-[#151921]/50 border-none p-4 rounded-2xl shadow-xl flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 border-r border-white/5 text-muted-foreground">
              <Filter className="w-4 h-4" />
              <span className="text-xs font-bold uppercase tracking-widest">Filters:</span>
            </div>
            
            <div className="flex items-center gap-3 flex-1">
              <Select defaultValue="all">
                <SelectTrigger className="bg-[#0A0C10] border-none h-10 w-[160px] text-xs font-bold text-white">
                  <SelectValue placeholder="All Clients" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All Clients</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="bg-[#0A0C10] border-none h-10 w-[160px] text-xs font-bold text-white">
                  <SelectValue placeholder="All Branches" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All Branches</SelectItem>
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="bg-[#0A0C10] border-none h-10 w-[160px] text-xs font-bold text-white">
                  <SelectValue placeholder="All Sites" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All Sites</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button variant="secondary" className="bg-[#0A0C10] border-none h-10 px-4 text-xs font-bold text-white gap-2">
              Mar 1, 2024 - Mar 31, 2024 <Calendar className="w-4 h-4 text-muted-foreground" />
            </Button>
          </Card>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="bg-[#151921] border-none p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
                <div className="flex items-start justify-between mb-6 relative z-10">
                  <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                    <stat.icon className={cn("w-5 h-5", stat.color)} />
                  </div>
                  {stat.trend === 'up' && <TrendingUp className="w-4 h-4 text-emerald-500" />}
                  {stat.trend === 'down' && <AlertTriangle className="w-4 h-4 text-red-500" />}
                </div>
                <div className="space-y-1 relative z-10">
                  <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                  <h3 className="text-3xl font-black text-white">{stat.value}</h3>
                  <p className={cn("text-[10px] font-medium mt-2", 
                    stat.trend === 'up' ? "text-emerald-500" : 
                    stat.trend === 'down' ? "text-red-500" : "text-muted-foreground"
                  )}>
                    {stat.change || stat.sub}
                  </p>
                </div>
                <div className={cn("absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-10", stat.bg)} />
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Regional Compliance Column */}
            <div className="lg:col-span-4 space-y-8">
              <Card className="bg-[#151921] border-none rounded-2xl shadow-2xl overflow-hidden">
                <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-bold text-white tracking-tight">Regional Compliance</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-10">
                  {regionalData.map((region) => (
                    <div key={region.name} className="space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-bold text-white">{region.name}</span>
                          {region.isHq && <Badge className="bg-blue-600/20 text-blue-400 text-[8px] font-black border-none px-1.5 py-0">HQ</Badge>}
                        </div>
                        <span className="text-sm font-black text-white">{region.value}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={cn("h-full rounded-full transition-all duration-500", region.color)} 
                          style={{ width: `${region.value}%` }} 
                        />
                      </div>
                    </div>
                  ))}

                  <div className="pt-6">
                    <div className="aspect-[16/10] rounded-2xl bg-[#0A0C10] border border-white/5 p-4 relative overflow-hidden group">
                      <img 
                        src="https://picsum.photos/seed/map/400/250" 
                        alt="Compliance Map" 
                        className="w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0C10] to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-[10px] font-bold text-white uppercase tracking-widest mb-2">Compliance Hotspots</p>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-emerald-500" />
                          <div className="w-2 h-2 rounded-full bg-blue-500" />
                          <div className="w-2 h-2 rounded-full bg-red-500" />
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Site Compliance Status Table */}
            <div className="lg:col-span-8 space-y-8">
              <Card className="bg-[#151921] border-none rounded-2xl shadow-2xl overflow-hidden">
                <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                  <CardTitle className="text-lg font-bold text-white tracking-tight">Site Compliance Status</CardTitle>
                  <Button variant="link" className="text-blue-400 text-xs font-bold uppercase tracking-widest p-0">Export Report</Button>
                </CardHeader>
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 bg-white/2 hover:bg-transparent uppercase">
                      <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground pl-8 py-6">Site Name</TableHead>
                      <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center">Guards</TableHead>
                      <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center">Compliant</TableHead>
                      <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Percentage</TableHead>
                      <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-right pr-8">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {siteCompliance.map((site, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="pl-8 py-6">
                          <div>
                            <p className="text-sm font-bold text-white">{site.name}</p>
                            <p className="text-[10px] text-muted-foreground font-medium">{site.sub}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-sm font-bold text-white text-center">{site.guards}</TableCell>
                        <TableCell className={cn("text-sm font-bold text-center", site.status === 'emerald' ? "text-emerald-500" : "text-red-500")}>
                          {site.compliant}
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-3">
                            <span className="text-xs font-bold text-white min-w-[40px]">{site.percentage}</span>
                            <div className="flex-1 h-1.5 bg-white/5 rounded-full overflow-hidden min-w-[80px]">
                              <div 
                                className={cn("h-full rounded-full", site.status === 'emerald' ? "bg-emerald-500" : "bg-red-500")} 
                                style={{ width: site.percentage }} 
                              />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="text-right pr-8">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-6 bg-white/2 border-t border-white/5 text-center">
                  <button className="text-[10px] font-bold text-blue-400 uppercase tracking-[0.2em] flex items-center justify-center gap-2 mx-auto hover:underline">
                    View all 42 sites <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </Card>
            </div>
          </div>

          {/* Bottom Alert */}
          <Card className="bg-red-500/5 border border-red-500/20 rounded-2xl p-6 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500" />
            <div className="flex items-center justify-between gap-6 relative z-10">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center shrink-0">
                  <ShieldAlert className="w-6 h-6 text-red-500" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-sm font-bold text-white uppercase tracking-wider">Critical Compliance Alert</h3>
                  <p className="text-xs text-muted-foreground font-medium leading-relaxed max-w-3xl">
                    Training certificates for 14 guards at Nexus Tech Park expired yesterday. Deployment without valid certification is a PSARA violation and may lead to immediate license review.
                  </p>
                </div>
              </div>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-8 h-12 rounded-xl font-bold text-xs uppercase tracking-widest shadow-xl shadow-red-500/20 shrink-0">
                Reassign Guards
              </Button>
            </div>
          </Card>
        </main>
      </div>
    </div>
  );
}
