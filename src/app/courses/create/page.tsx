"use client"

import { useState } from "react";
import { 
  Info, 
  HelpCircle, 
  List, 
  FileCheck, 
  Monitor, 
  History, 
  Plus, 
  Search, 
  Bell, 
  User, 
  Copy, 
  Save, 
  PlusCircle, 
  Wand2, 
  Database,
  LayoutDashboard,
  ShieldCheck,
  ChevronRight,
  MoreVertical
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function CourseBuilder() {
  const [activeStep, setActiveStep] = useState(1);
  const [timeLimit, setTimeLimit] = useState([45]);

  const navItems = [
    { id: 1, label: "1. Global Metadata", icon: Info },
    { id: 2, label: "2. Pre-Assessment", icon: HelpCircle },
    { id: 3, label: "3 & 4. Lessons & Content", icon: List },
    { id: 4, label: "5. Post-Assessment", icon: FileCheck },
    { id: 5, label: "6. Certification", icon: Monitor },
    { id: 6, label: "Timeline & Expiry", icon: History },
  ];

  return (
    <div className="min-h-screen bg-[#0F1218] flex flex-col text-white">
      {/* Top Navbar */}
      <header className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-[#151921]/50 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white uppercase">LMS Admin</span>
          <nav className="ml-10 flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Dashboard</Link>
            <Link href="/courses" className="text-primary">Course Builder</Link>
            <Link href="/employees" className="hover:text-primary transition-colors">User Registry</Link>
            <Link href="/analytics" className="hover:text-primary transition-colors">Analytics</Link>
          </nav>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Quick search courses..." 
              className="bg-[#1C222C] border-none h-9 w-64 text-xs pl-10"
            />
          </div>
          <Bell className="w-5 h-5 text-muted-foreground cursor-pointer hover:text-white" />
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/20 flex items-center justify-center">
            <User className="w-4 h-4 text-emerald-500" />
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-72 border-r border-white/5 p-8 flex flex-col gap-10 overflow-y-auto">
          <div className="space-y-4">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] mb-6">Hierarchy Navigation</p>
            <div className="space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveStep(item.id)}
                  className={cn(
                    "w-full flex items-center gap-4 px-4 py-3.5 rounded-xl text-xs font-bold transition-all text-left",
                    activeStep === item.id 
                      ? "bg-primary text-white shadow-lg shadow-primary/10" 
                      : "text-muted-foreground hover:bg-white/5 hover:text-white"
                  )}
                >
                  <item.icon className="w-4 h-4 shrink-0" />
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-auto p-5 rounded-2xl bg-white/5 border border-white/5 space-y-3">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Course Status</p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-orange-500" />
              <span className="text-xs font-bold">Draft Mode</span>
            </div>
          </div>
        </aside>

        {/* Main Workspace */}
        <main className="flex-1 overflow-y-auto p-10 bg-[#0A0C10]/50">
          <div className="max-w-5xl mx-auto space-y-10">
            {/* Page Header */}
            <div className="flex items-start justify-between">
              <div className="space-y-1.5">
                <h1 className="text-3xl font-bold text-white tracking-tight">Advanced Cybersecurity Compliance</h1>
                <div className="flex items-center gap-3 text-xs text-muted-foreground font-medium">
                  <span>Course ID: CS-2024-COMP-001</span>
                  <span className="w-1 h-1 rounded-full bg-white/10" />
                  <span>Last modified 2 hours ago</span>
                </div>
              </div>
              <div className="flex gap-3">
                <Button variant="secondary" className="bg-[#1C222C] border-none h-11 px-6 text-xs font-bold uppercase tracking-wider text-white">
                  <Copy className="w-4 h-4 mr-2" /> Clone
                </Button>
                <Button className="bg-primary hover:bg-primary/90 h-11 px-6 text-xs font-bold uppercase tracking-wider text-white">
                  Save Changes
                </Button>
              </div>
            </div>

            {/* Level 1 Card */}
            <Card className="bg-[#151921] border-none rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3 text-primary">
                  <Database className="w-5 h-5" />
                  <h2 className="text-base font-bold text-white uppercase tracking-wider">Level 1: Global Metadata</h2>
                </div>
                <div className="flex gap-6">
                  <button className="text-[10px] font-bold text-orange-500 uppercase tracking-widest hover:underline">Retire Course</button>
                  <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">Re-activate</button>
                </div>
              </div>
              <CardContent className="p-10 space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-2 space-y-2.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Course Display Name</label>
                    <Input defaultValue="Advanced Cybersecurity Compliance" className="bg-[#0F1218] border-none h-14 text-sm font-medium focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Start Date</label>
                    <Input type="date" className="bg-[#0F1218] border-none h-14 text-sm focus-visible:ring-1 focus-visible:ring-primary/40" />
                  </div>
                  <div className="md:col-span-2 space-y-2.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Description</label>
                    <Textarea 
                      defaultValue="In-depth exploration of corporate compliance standards for high-security environments."
                      className="bg-[#0F1218] border-none min-h-[120px] text-sm font-medium resize-none p-5 focus-visible:ring-1 focus-visible:ring-primary/40"
                    />
                  </div>
                  <div className="space-y-8">
                    <div className="space-y-2.5">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">End Date</label>
                      <Input type="date" className="bg-[#0F1218] border-none h-14 text-sm focus-visible:ring-1 focus-visible:ring-primary/40" />
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Taxonomy: Compliance</label>
                    <div className="flex gap-2">
                      <Select defaultValue="iso">
                        <SelectTrigger className="bg-[#0F1218] border-none h-14 text-sm">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#151921] border-white/10 text-white">
                          <SelectItem value="iso">ISO 27001</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="secondary" size="icon" className="h-14 w-14 shrink-0 bg-[#0F1218] border-none text-muted-foreground hover:text-white">
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-2.5">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.15em]">Taxonomy: Skills</label>
                    <div className="flex gap-2">
                      <Select defaultValue="threat">
                        <SelectTrigger className="bg-[#0F1218] border-none h-14 text-sm">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#151921] border-white/10 text-white">
                          <SelectItem value="threat">Threat Analysis</SelectItem>
                        </SelectContent>
                      </Select>
                      <Button variant="secondary" size="icon" className="h-14 w-14 shrink-0 bg-[#0F1218] border-none text-muted-foreground hover:text-white">
                        <Plus className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Level 2 Card */}
            <Card className="bg-[#151921] border-none rounded-[2rem] overflow-hidden shadow-2xl">
              <div className="p-8 border-b border-white/5 flex items-center justify-between bg-white/5">
                <div className="flex items-center gap-3 text-primary">
                  <HelpCircle className="w-5 h-5" />
                  <h2 className="text-base font-bold text-white uppercase tracking-wider">Level 2: Baseline Pre-Assessment</h2>
                </div>
                <Badge className="bg-emerald-500/10 text-emerald-500 border-none px-3 py-1 font-bold text-[8px] uppercase tracking-widest">Active</Badge>
              </div>
              <CardContent className="p-10 space-y-10">
                {/* Control Panel Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <Card className="bg-[#1C222C]/40 border-none p-8 rounded-2xl flex items-center justify-between">
                    <div className="space-y-1">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Single-Attempt</p>
                      <p className="text-sm font-bold">{true ? 'Enabled' : 'Disabled'}</p>
                    </div>
                    <Switch defaultChecked className="data-[state=checked]:bg-primary" />
                  </Card>
                  
                  <div className="md:col-span-2 Card bg-[#1C222C]/40 border-none p-8 rounded-2xl space-y-6">
                    <div className="flex justify-between items-center">
                      <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Time Limit (Minutes)</p>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] text-muted-foreground font-bold">15m</span>
                        <div className="h-1 w-24 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${(timeLimit[0] / 180) * 100}%` }} />
                        </div>
                        <span className="text-[10px] text-muted-foreground font-bold">180m</span>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <Slider 
                        max={180} 
                        min={15} 
                        step={5} 
                        value={timeLimit} 
                        onValueChange={setTimeLimit}
                        className="[&_[role=slider]]:bg-white" 
                      />
                      <p className="text-[10px] font-bold text-center text-primary uppercase tracking-widest">Current: {timeLimit}m</p>
                    </div>
                  </div>

                  <div className="Card bg-[#1C222C]/40 border-none p-8 rounded-2xl space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Quiz Language</label>
                    <Select defaultValue="en">
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs">
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10 text-white">
                        <SelectItem value="en">English</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Question Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Browse Bank */}
                  <Card className="bg-[#0D1219] border-2 border-[#1C222C] p-8 rounded-2xl space-y-8 group hover:border-primary/30 transition-all cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 bg-primary/10 rounded-xl">
                        <Database className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm tracking-tight text-white">Browse Question Bank</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Filter by Language</p>
                        <Select defaultValue="all">
                          <SelectTrigger className="bg-[#1C222C] border-none h-10 text-[10px]">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#151921] border-white/10 text-white">
                            <SelectItem value="all">All Languages</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button variant="secondary" className="w-full bg-[#1C222C] hover:bg-[#252C36] text-[10px] font-bold uppercase tracking-widest h-11 rounded-xl">
                        Open Selector
                      </Button>
                    </div>
                  </Card>

                  {/* Automated Randomization */}
                  <Card className="bg-[#0D1219] border-2 border-primary/20 p-8 rounded-2xl space-y-8 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-10 -mt-10" />
                    <div className="flex items-center gap-3 relative">
                      <div className="p-2.5 bg-primary/20 rounded-xl">
                        <Wand2 className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-bold text-sm tracking-tight text-white">Automated Randomization</h3>
                    </div>
                    <div className="space-y-6 relative">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Question Count:</p>
                        <Input type="number" defaultValue={10} className="w-16 bg-[#1C222C] border-none h-8 text-center text-xs font-bold" />
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest">Trainee Shuffle:</p>
                        <Checkbox defaultChecked className="border-primary/40 data-[state=checked]:bg-primary" />
                      </div>
                    </div>
                  </Card>

                  {/* Instant Creation */}
                  <Card className="bg-[#1C222C]/20 border-2 border-dashed border-white/5 p-8 rounded-2xl flex flex-col items-center justify-center gap-4 group hover:bg-white/5 hover:border-white/10 transition-all cursor-pointer">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <PlusCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-center">
                      <h3 className="font-bold text-sm text-white">Instant Creation</h3>
                      <p className="text-[10px] text-muted-foreground font-medium mt-1">Direct question entry</p>
                    </div>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>

      {/* Progress Footer */}
      <footer className="px-10 py-6 border-t border-white/5 flex items-center justify-between bg-[#151921]">
        <div className="flex items-center gap-8">
          <div className="flex gap-1.5">
            {[1, 0, 0, 0, 0, 0].map((v, i) => (
              <div key={i} className={cn("w-2 h-2 rounded-full transition-all", v ? "bg-primary" : "bg-white/10")} />
            ))}
          </div>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Level 1 of 6 Complete</span>
        </div>
        <div className="flex items-center gap-8">
          <button className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest hover:text-white">Discard Draft</button>
          <div className="w-[1px] h-4 bg-white/10" />
          <Button className="bg-white text-[#151921] hover:bg-white/90 h-12 px-10 text-xs font-black uppercase tracking-[0.2em] rounded-xl shadow-xl">
            Finish Builder
          </Button>
        </div>
      </footer>
    </div>
  );
}
