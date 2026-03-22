"use client"

import { 
  Search, 
  Bell, 
  Settings, 
  FileDown, 
  Pencil, 
  Plus, 
  MapPin, 
  Building2, 
  Globe, 
  Map, 
  GraduationCap, 
  User, 
  CheckCircle2, 
  AlertTriangle, 
  Trash2, 
  ChevronRight,
  MoreVertical,
  Monitor,
  FileUp
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import Link from "next/link";

const systemUsers = [
  { name: "Robert Chambers", email: "r.chambers@corp.net", id: "#EMP-2091", roles: ["Super Admin", "Trainer"], status: "ACTIVE", statusColor: "text-emerald-500 bg-emerald-500/10" },
  { name: "Elena Rodriguez", email: "e.rod@corp.net", id: "#EMP-4482", roles: ["Trainer"], status: "ACTIVE", statusColor: "text-emerald-500 bg-emerald-500/10" },
  { name: "Markus J.", email: "markus.j@corp.net", id: "#EMP-1102", roles: ["Employee"], status: "RETIRED", statusColor: "text-muted-foreground bg-white/5" },
];

export default function AdminUserManagement() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col">
      {/* Top Header */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between gap-6 bg-[#0A0C10]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold text-white tracking-tight leading-none">User Management</h1>
          <Badge className="bg-blue-600/20 text-blue-400 text-[8px] font-black border-none px-2 py-0.5 uppercase tracking-widest">System Console</Badge>
        </div>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search across entities..." 
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
              <p className="text-sm font-bold text-white leading-none">Admin User</p>
            </div>
            <Avatar className="h-9 w-9 border border-blue-600/20 shadow-lg">
              <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="p-8 space-y-8 overflow-y-auto">
        {/* System Users Section */}
        <section className="space-y-4">
          <div className="flex items-end justify-between">
            <div className="space-y-1">
              <h2 className="text-2xl font-bold text-white tracking-tight">System Users</h2>
              <p className="text-sm text-muted-foreground font-medium">Manage directory users and assigned access tiers.</p>
            </div>
            <div className="flex gap-3">
              <Button asChild variant="secondary" className="bg-[#151921] border-white/5 h-11 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-xl hover:bg-white/5">
                <Link href="/admin/users/bulk-upload">
                  <FileUp className="w-4 h-4 mr-2" /> Bulk Upload
                </Link>
              </Button>
              <Button variant="secondary" className="bg-[#151921] border-white/5 h-11 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-xl hover:bg-white/5">
                <FileDown className="w-4 h-4 mr-2" /> Export CSV
              </Button>
            </div>
          </div>

          <Card className="bg-[#151921]/40 border-none rounded-2xl overflow-hidden shadow-2xl">
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 bg-white/2 hover:bg-transparent uppercase">
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground pl-8 py-6">Name</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Email</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Employee ID</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center">Assigned Roles</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center">Status</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-right pr-8">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {systemUsers.map((user, i) => (
                  <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell className="pl-8 py-6">
                      <p className="text-sm font-bold text-white">{user.name}</p>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-muted-foreground">{user.email}</TableCell>
                    <TableCell className="text-xs font-bold text-muted-foreground">{user.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center gap-2">
                        {user.roles.map((role) => (
                          <Badge key={role} className="bg-blue-600/10 text-blue-400 border-none text-[8px] font-black px-2 py-0.5">
                            {role}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge className={cn("border-none text-[8px] font-black px-2 py-0.5", user.statusColor)}>
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right pr-8">
                      <div className="flex items-center justify-end gap-2">
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                          <FileDown className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Hierarchy & Campus Details Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Entity Hierarchy */}
          <Card className="bg-[#151921]/40 border-none p-8 rounded-3xl shadow-2xl relative">
            <div className="flex items-center justify-between mb-8">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight">Entity Hierarchy</h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Multi-Tier Structure</p>
              </div>
              <Button size="icon" className="h-10 w-10 bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20">
                <Plus className="w-5 h-5 text-white" />
              </Button>
            </div>

            <div className="space-y-4 relative pl-4">
              <div className="absolute left-[1.1rem] top-8 bottom-12 w-[1px] bg-white/5" />
              
              <div className="flex items-center gap-3 group cursor-pointer">
                <Building2 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-bold text-blue-500">Global Enterprise (Company)</span>
              </div>

              <div className="space-y-4 pl-8 relative">
                <div className="absolute left-[-0.9rem] top-2 w-4 h-[1px] bg-white/5" />
                <div className="flex items-center gap-3 group cursor-pointer">
                  <Globe className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-bold text-white">North America (Region)</span>
                </div>

                <div className="space-y-4 pl-8 relative">
                  <div className="absolute left-[-0.9rem] top-2 w-4 h-[1px] bg-white/5" />
                  <div className="flex items-center gap-3 group cursor-pointer">
                    <Map className="w-4 h-4 text-muted-foreground" />
                    <span className="text-sm font-bold text-white">New York City (City)</span>
                  </div>

                  <div className="space-y-4 pl-8 relative">
                    <div className="absolute left-[-0.9rem] top-2 w-4 h-[1px] bg-white/5" />
                    <div className="flex items-center justify-between bg-blue-600/5 border border-blue-600/10 p-3 rounded-xl group cursor-pointer">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-bold text-white">Manhattan Hub (Site)</span>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-500 text-[8px] font-black border-none px-1.5 py-0">Active</Badge>
                    </div>

                    <div className="space-y-4 pl-8 relative">
                      <div className="absolute left-[-0.9rem] top-2 w-4 h-[1px] bg-white/5" />
                      <div className="flex items-center gap-3 group cursor-pointer text-muted-foreground/40">
                        <GraduationCap className="w-4 h-4" />
                        <span className="text-xs font-bold uppercase tracking-widest">Central Academy (Campus)</span>
                      </div>

                      <div className="space-y-4 pl-8 relative">
                        <div className="absolute left-[-0.9rem] top-2 w-4 h-[1px] bg-white/5" />
                        <div className="flex items-center gap-3 group cursor-pointer text-muted-foreground/40">
                          <User className="w-3.5 h-3.5" />
                          <span className="text-xs font-bold uppercase tracking-widest">Sarah Jenkins (Trainee)</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Campus Details */}
          <Card className="bg-[#151921]/40 border-none p-8 rounded-3xl shadow-2xl space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-white tracking-tight">Campus Details</h3>
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Geo-Spatial & Compliance</p>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white bg-white/5"><Pencil className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-red-500 hover:bg-red-500/10 bg-white/5"><Trash2 className="w-4 h-4" /></Button>
              </div>
            </div>

            <div className="aspect-video bg-[#0A0C10] rounded-2xl border border-white/5 relative overflow-hidden group">
              <img src="https://picsum.photos/seed/manhattan/800/450" alt="Map" className="w-full h-full object-cover opacity-20 grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 flex items-center justify-center">
                <MapPin className="w-10 h-10 text-blue-600 drop-shadow-2xl" />
              </div>
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                <p className="text-[10px] font-bold text-white uppercase tracking-widest">Geo: 40.7128° N, 74.0060° W</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">Safety Protocols</p>
                <div className="space-y-3">
                  {[
                    { label: "Fire Safety L1", icon: CheckCircle2, color: "text-emerald-500" },
                    { label: "Bio-metric Access", icon: CheckCircle2, color: "text-emerald-500" },
                    { label: "HVAC Audit Due", icon: AlertTriangle, color: "text-orange-500" },
                  ].map((p) => (
                    <div key={p.label} className="flex items-center gap-3">
                      <p.icon className={cn("w-4 h-4", p.color)} />
                      <span className="text-xs font-bold text-white">{p.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-[9px] font-black text-muted-foreground uppercase tracking-[0.2em]">Client Contact Points</p>
                <div className="bg-[#0A0C10] p-3 rounded-2xl border border-white/5 flex items-center gap-3 group hover:bg-white/5 transition-all cursor-pointer">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs">JD</div>
                  <div className="min-w-0">
                    <p className="text-sm font-bold text-white truncate">James Dalton</p>
                    <p className="text-[10px] text-muted-foreground font-medium truncate">Head of Operations</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Branding Footer */}
        <Card className="bg-[#151921]/40 border border-white/5 p-8 rounded-[2rem] shadow-2xl group hover:border-blue-600/20 transition-all cursor-pointer">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center shrink-0">
              <Monitor className="w-6 h-6 text-blue-500" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold text-white tracking-tight">White-Labeling & Branding</h3>
              <p className="text-sm text-muted-foreground font-medium">Customize the interface to match your corporate identity.</p>
            </div>
            <ChevronRight className="w-6 h-6 text-muted-foreground ml-auto group-hover:text-blue-500 transition-colors" />
          </div>
        </Card>
      </main>
    </div>
  );
}
