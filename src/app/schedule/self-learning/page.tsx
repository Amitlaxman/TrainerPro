
"use client"

import { 
  Plus, 
  Settings, 
  Radio, 
  Users, 
  FileQuestion, 
  Calendar, 
  Trash2, 
  Bell,
  Settings as SettingsIcon,
  Search,
  BookOpen
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function ScheduleSelfLearningSession() {
  const [trainees, setTrainees] = useState([
    { name: "Elena Rodriguez", id: "EMP-1024", email: "elena.r@company.com", mobile: "+1 (555) 012-3456" },
    { name: "Liam O'Connor", id: "EMP-1025", email: "liam.o@company.com", mobile: "+1 (555) 012-7890" },
  ]);

  return (
    <div className="min-h-screen bg-[#0F1218] text-foreground font-body">
      {/* Top Navigation */}
      <header className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-[#151921]">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-white uppercase">Online Self-Training Scheduler</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="flex items-center gap-6 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            <Link href="/" className="hover:text-white transition-colors">Dashboard</Link>
            <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
            <Link href="/employees" className="hover:text-white transition-colors">Trainers</Link>
            <Link href="/analytics" className="hover:text-white transition-colors">Reports</Link>
          </nav>
          <div className="flex items-center gap-3 border-l border-white/10 pl-8">
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white rounded-xl bg-white/5"><Bell className="w-4 h-4" /></Button>
            <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white rounded-xl bg-white/5"><SettingsIcon className="w-4 h-4" /></Button>
            <Avatar className="w-9 h-9 border-2 border-primary/20">
              <AvatarImage src="https://picsum.photos/seed/user789/100/100" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="p-10 max-w-[1440px] mx-auto">
        <div className="mb-10 space-y-3">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary/20 text-primary border-none text-[10px] font-bold uppercase tracking-widest px-3 py-1">
              MODE: ONLINE SELF-LEARNING
            </Badge>
            <span className="text-xs text-muted-foreground font-medium">Status: Draft</span>
          </div>
          <h1 className="text-4xl font-bold text-white tracking-tight">Schedule New Training Session</h1>
          <p className="text-muted-foreground max-w-2xl leading-relaxed">
            Configure self-paced learning paths, assign support trainers, and build assessments for your teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Session Configuration */}
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <Settings className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-white uppercase tracking-wider">Session Configuration</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Select Site</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-12 text-sm text-white focus:ring-1 focus:ring-primary/40">
                      <SelectValue placeholder="Corporate Headquarters - NYC" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="hq">Corporate Headquarters - NYC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Course / Subject</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-12 text-sm text-white focus:ring-1 focus:ring-primary/40">
                      <SelectValue placeholder="Cybersecurity Awareness 2024" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="cyber">Cybersecurity Awareness 2024</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Support Trainer</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-12 text-sm text-white focus:ring-1 focus:ring-primary/40">
                      <SelectValue placeholder="Marcus Aurelius (Senior Technical Trainer)" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="marcus">Marcus Aurelius (Senior Technical Trainer)</SelectItem>
                    </SelectContent>
                  </Select>
                  <p className="text-[10px] text-muted-foreground italic mt-1">This trainer will be visible to trainees for query resolution.</p>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Availability Window</label>
                  <div className="flex items-center gap-4">
                    <Input type="date" className="bg-[#0F1218] border-none h-12 text-sm text-white" />
                    <span className="text-muted-foreground text-xs font-bold">to</span>
                    <Input type="date" className="bg-[#0F1218] border-none h-12 text-sm text-white" />
                  </div>
                </div>
              </div>
            </Card>

            {/* Trainee Management */}
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">Trainee Management</h2>
                </div>
                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">12 Trainees Selected</span>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input placeholder="Search by name, role or department..." className="bg-[#0F1218] border-none h-12 text-sm text-white pl-10 focus-visible:ring-1 focus-visible:ring-primary/40" />
                </div>
                <Button className="bg-primary hover:bg-primary/90 h-12 px-6 rounded-xl text-xs font-bold uppercase tracking-wider">
                  <Plus className="w-4 h-4 mr-2" /> Bulk Add
                </Button>
              </div>

              <div className="rounded-xl border border-white/5 overflow-hidden">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 bg-white/5">
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trainee Name</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Employee ID</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mobile Number</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainees.map((t, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5">
                        <TableCell className="text-sm font-medium text-white">{t.name}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.id}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.email}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.mobile}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
              <div className="mt-4 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                <span className="text-[10px] text-muted-foreground italic">Trainees will automatically receive the meeting invite after scheduling.</span>
              </div>
            </Card>

            {/* Assessment Configuration */}
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
              <div className="flex items-center gap-3 mb-8">
                <SettingsIcon className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-white uppercase tracking-wider">Assessment Configuration</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">Pre-Assessment</h3>
                    <Badge className="bg-orange-500/20 text-orange-400 border-none text-[8px] font-bold uppercase tracking-widest">PENDING</Badge>
                  </div>
                  <Button variant="outline" className="w-full h-12 border-primary/40 text-primary hover:bg-primary/5 text-xs font-bold uppercase tracking-widest rounded-xl">
                    Release Preassessment
                  </Button>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-white">Post-Assessment</h3>
                    <Badge className="bg-muted/20 text-muted-foreground border-none text-[8px] font-bold uppercase tracking-widest">NOT READY</Badge>
                  </div>
                  <Button disabled className="w-full h-12 border-white/10 bg-white/5 text-muted-foreground text-xs font-bold uppercase tracking-widest rounded-xl">
                    Release Postassessment
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-8 space-y-6">
              {/* Scheduling Summary */}
              <Card className="bg-primary border-none text-white rounded-3xl overflow-hidden shadow-2xl relative">
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none" />
                <div className="relative p-8 space-y-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                      <Radio className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="text-lg font-bold tracking-wider uppercase">Scheduling Summary</h2>
                  </div>

                  <div className="space-y-5">
                    {[
                      { label: "Mode", value: "Self-Learning" },
                      { label: "Course", value: "Cybersecurity 2024" },
                      { label: "Site", value: "Corp HQ - NYC" },
                      { label: "Assigned Trainees", value: "12" },
                      { label: "Support Trainer", value: "M. Aurelius" },
                    ].map((item, idx) => (
                      <div key={idx} className="flex justify-between items-baseline py-2 border-b border-white/10">
                        <span className="text-[10px] uppercase font-bold opacity-60 tracking-widest">{item.label}</span>
                        <span className="text-sm font-bold">{item.value}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-start gap-3 p-4 bg-black/10 rounded-2xl border border-white/10">
                    <Checkbox id="confirm-self" className="mt-1 border-white/40 data-[state=checked]:bg-white data-[state=checked]:text-primary" />
                    <label htmlFor="confirm-self" className="text-[10px] leading-relaxed opacity-80 font-medium">
                      I confirm that all training materials and assessment slots are correctly configured for the selected window.
                    </label>
                  </div>

                  <div className="space-y-3 pt-4">
                    <Button className="w-full h-14 bg-white text-primary hover:bg-white/90 rounded-2xl text-xs font-black uppercase tracking-[0.2em] shadow-xl group">
                      <Calendar className="w-4 h-4 mr-2" /> SCHEDULE SESSION
                    </Button>
                    <Button variant="outline" className="w-full h-14 bg-transparent border-white/20 text-white hover:bg-white/10 rounded-2xl text-xs font-black uppercase tracking-[0.2em]">
                      Save as Draft
                    </Button>
                  </div>
                </div>
              </Card>

              {/* Training Guidelines */}
              <Card className="bg-[#151921] border-none p-8 rounded-3xl space-y-6 shadow-xl">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Training Guidelines</h3>
                <div className="space-y-4">
                  {[
                    "A Minimum of 48 hours window is required for self-training sessions.",
                    "Trainees will receive automated notifications upon session release."
                  ].map((guide, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      </div>
                      <span className="text-xs text-muted-foreground leading-relaxed font-medium">{guide}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-[0.1em]">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <BookOpen className="w-4 h-4 text-primary" />
            LMS Training Scheduler © 2024
          </div>
          <div className="flex items-center gap-8">
            <Link href="#" className="hover:text-primary transition-colors">Documentation</Link>
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Support Center</Link>
          </div>
        </footer>
      </main>
    </div>
  );
}
