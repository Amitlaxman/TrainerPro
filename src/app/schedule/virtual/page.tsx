"use client"

import { 
  Plus, 
  Settings, 
  Radio, 
  Users, 
  History, 
  FileQuestion, 
  CheckCircle2, 
  QrCode, 
  CloudUpload, 
  Trash2, 
  Send,
  Link as LinkIcon,
  Calendar,
  Clock,
  ChevronDown,
  Bell,
  Settings as SettingsIcon,
  Search,
  Copy,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

export default function ScheduleVirtualSession() {
  const [trainees, setTrainees] = useState([
    { name: "Alex Thompson", id: "EMP-00124", email: "alex.t@company.com", mobile: "+1 (555) 012-3456" },
    { name: "Elena Gilbert", id: "EMP-00156", email: "elena.g@company.com", mobile: "+1 (555) 987-6543" },
  ]);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground font-body">
      {/* Top Navigation */}
      <header className="px-8 py-4 border-b border-white/5 flex items-center justify-between bg-[#151921]/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Radio className="w-5 h-5 text-primary" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">Virtual Training Scheduler</span>
        </div>
        <nav className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/schedule" className="hover:text-primary transition-colors">Sessions</Link>
          <Link href="/employees" className="hover:text-primary transition-colors">Trainers</Link>
          <Link href="/analytics" className="hover:text-primary transition-colors">Reports</Link>
          <Avatar className="w-8 h-8 ring-2 ring-primary/20 ring-offset-2 ring-offset-[#0A0C10]">
            <AvatarImage src="https://picsum.photos/seed/user456/100/100" />
            <AvatarFallback>AS</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <main className="p-10 max-w-[1440px] mx-auto">
        <div className="mb-10 space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Schedule Virtual Training Session</h1>
          <div className="flex items-center gap-3">
            <Badge className="bg-primary/20 text-primary border-none text-[9px] font-bold uppercase tracking-widest px-2 py-0.5">
              <Radio className="w-3 h-3 mr-1" /> VIRTUAL MODE
            </Badge>
            <span className="text-xs text-muted-foreground font-medium italic">Drafting new session...</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Configuration Details */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Settings className="w-4 h-4" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Configuration Details</h2>
              </div>
              <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Client</label>
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                        <SelectValue placeholder="Choose Client" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10 text-white">
                        <SelectItem value="acme">Acme Corp</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Branch / Site</label>
                      <Select>
                        <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                          <SelectValue placeholder="Branch" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#151921] border-white/10 text-white">
                          <SelectItem value="main">Main</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 pt-6">
                      <Select>
                        <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                          <SelectValue placeholder="Site" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#151921] border-white/10 text-white">
                          <SelectItem value="virtual">Virtual</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Course</label>
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                        <SelectValue placeholder="Select Training Course" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10 text-white">
                        <SelectItem value="cyber">Cybersecurity Awareness 101</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Trainer</label>
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                        <SelectValue placeholder="Assign Trainer" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10 text-white">
                        <SelectItem value="trainer1">John Doe</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Session Start</label>
                      <Input type="date" className="bg-[#0F1218] border-none h-11 text-xs text-white" />
                    </div>
                    <div className="space-y-2 pt-6">
                      <Input type="time" className="bg-[#0F1218] border-none h-11 text-xs text-white" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Session End</label>
                      <Input type="date" className="bg-[#0F1218] border-none h-11 text-xs text-white" />
                    </div>
                    <div className="space-y-2 pt-6">
                      <Input type="time" className="bg-[#0F1218] border-none h-11 text-xs text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Meeting Platform</label>
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 text-xs text-white">
                        <SelectValue placeholder="Google Meet" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10 text-white">
                        <SelectItem value="gmeet">Google Meet</SelectItem>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="teams">Microsoft Teams</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Virtual Meeting Link</label>
                    <div className="relative">
                      <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                      <Input placeholder="https://meet.google.com/abc-defg-hij" className="bg-[#0F1218] border-none h-11 text-xs text-white pl-10" />
                    </div>
                  </div>
                </div>
              </Card>
            </section>

            {/* Live Session Controls */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <Radio className="w-4 h-4" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Live Session Controls</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#151921] border-none p-6 rounded-2xl flex items-center gap-6">
                  <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center p-2">
                    <QrCode className="w-full h-full text-black" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-sm font-bold text-white">Attendance QR Code</h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed">Trainees can scan to join and log attendance</p>
                    <button className="text-[9px] font-bold text-primary uppercase flex items-center gap-1">
                      <CloudUpload className="w-3 h-3" /> Download QR
                    </button>
                  </div>
                </Card>
                <Card className="bg-[#151921] border-none p-6 rounded-2xl flex flex-col justify-center space-y-4 text-center">
                  <h3 className="text-sm font-bold text-white">Session Materials</h3>
                  <Button className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 h-10 rounded-xl text-[10px] font-bold uppercase tracking-widest">
                    <CloudUpload className="w-4 h-4 mr-2" /> Release Training Materials
                  </Button>
                  <p className="text-[9px] text-muted-foreground italic">Materials will be available in the trainee portal immediately.</p>
                </Card>
              </div>
            </section>

            {/* Trainee Management */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                  <Users className="w-4 h-4" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest">Trainee Management</h2>
                </div>
                <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-xl h-9 px-4 text-[10px] font-bold uppercase tracking-widest">
                  <Plus className="w-4 h-4 mr-2" /> Add Trainee
                </Button>
              </div>
              <Card className="bg-[#151921] border-none overflow-hidden rounded-2xl shadow-xl">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 bg-white/5 hover:bg-transparent">
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trainee Name</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Employee ID</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Email Address</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Mobile Number</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainees.map((t, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="text-xs font-semibold text-white">{t.name}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.id}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.email}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{t.mobile}</TableCell>
                        <TableCell className="text-center">
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-destructive hover:bg-destructive/10">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <div className="p-4 bg-white/5 border-t border-white/5">
                  <div className="text-[10px] text-muted-foreground flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-muted-foreground/30" />
                    Trainees will automatically receive the meeting invite after scheduling.
                  </div>
                </div>
              </Card>
            </section>

            {/* Attendance Log */}
            <section className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                  <History className="w-4 h-4" />
                  <h2 className="text-sm font-bold text-white uppercase tracking-widest">Attendance Log</h2>
                </div>
                <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest">
                  <div className="flex flex-col items-center">
                    <span className="text-muted-foreground">Total</span>
                    <span className="text-white text-sm">10</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-emerald-500">Present</span>
                    <span className="text-emerald-500 text-sm">2</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-red-500">Absent</span>
                    <span className="text-red-500 text-sm">8</span>
                  </div>
                </div>
              </div>
              <Card className="bg-[#151921] border-none overflow-hidden rounded-2xl shadow-xl">
                <Table>
                  <TableHeader>
                    <TableRow className="border-white/5 hover:bg-transparent">
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trainee</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Join Time</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Method</TableHead>
                      <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {trainees.map((t, i) => (
                      <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                        <TableCell className="text-xs font-semibold text-white">{t.name}</TableCell>
                        <TableCell className="text-xs text-muted-foreground">{10 + i}:02 AM</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-[8px] font-black tracking-widest bg-primary/10 border-primary/20 text-primary uppercase px-1.5 h-4">
                            {i === 0 ? 'Link' : 'QR Code'}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-1.5 text-xs text-emerald-500 font-bold">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Present
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </section>

            {/* Quiz Builder */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 text-primary">
                <FileQuestion className="w-4 h-4" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Quiz Builder</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-[#151921] border-none p-6 rounded-2xl border-l-4 border-primary/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary">
                        <FileQuestion className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-white">Pre-Assessment</h3>
                        <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">Before session start</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black tracking-widest text-muted-foreground uppercase cursor-pointer hover:text-white transition-colors">
                      Manual <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 h-10 text-[10px] font-bold uppercase tracking-widest rounded-xl">
                    Release Pre-Quiz Now
                  </Button>
                </Card>

                <Card className="bg-[#151921] border-none p-6 rounded-2xl border-l-4 border-white/10 space-y-4 opacity-60">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-white">Post-Assessment</h3>
                        <p className="text-[9px] text-muted-foreground uppercase font-bold tracking-widest">After session end</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-[9px] font-black tracking-widest text-muted-foreground uppercase">
                      Manual <ChevronDown className="w-3 h-3" />
                    </div>
                  </div>
                  <Button disabled className="w-full bg-white/5 text-muted-foreground h-10 text-[10px] font-bold uppercase tracking-widest rounded-xl">
                    Release Post-Quiz Now
                  </Button>
                </Card>
              </div>
            </section>

            <footer className="pt-10 border-t border-white/5 text-center">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2023 Virtual Training Scheduler. All rights reserved.</p>
            </footer>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 space-y-6">
              {/* Session Summary */}
              <Card className="bg-primary border-none text-white rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-80 mb-2">
                    <Calendar className="w-3 h-3" /> Session Summary
                  </div>
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div>
                      <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Course</p>
                      <h3 className="text-lg font-bold leading-tight">Cybersecurity Awareness 101</h3>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Client</p>
                        <p className="text-sm font-semibold">Acme Corp</p>
                      </div>
                      <div>
                        <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Location</p>
                        <p className="text-sm font-semibold">Virtual (Global)</p>
                      </div>
                    </div>
                    <div className="pt-4 space-y-2">
                      <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Scheduled Date</p>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Calendar className="w-4 h-4 opacity-70" /> October 24, 2023
                      </div>
                      <div className="flex items-center gap-2 text-sm font-bold">
                        <Clock className="w-4 h-4 opacity-70" /> 10:00 AM - 12:00 PM (EST)
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  <div className="p-4 bg-black/10 rounded-2xl border border-white/5 space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Meeting Link Preview</p>
                    <div className="flex items-center justify-between text-[11px] font-bold text-primary-foreground/70">
                      <span className="truncate italic">https://meet.google.com/abc-defg-hij</span>
                      <Copy className="w-3 h-3 cursor-pointer hover:text-white transition-colors" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Attendees</p>
                    <div className="flex -space-x-3 overflow-hidden">
                      {[1, 2, 3].map((i) => (
                        <Avatar key={i} className="inline-block border-2 border-primary h-8 w-8">
                          <AvatarImage src={`https://picsum.photos/seed/${i + 20}/100/100`} />
                          <AvatarFallback>U</AvatarFallback>
                        </Avatar>
                      ))}
                      <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border-2 border-primary">
                        +8
                      </div>
                    </div>
                  </div>

                  <Button className="w-full bg-white text-primary hover:bg-white/90 h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl group">
                    Schedule & Share Link <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <p className="text-[9px] text-center opacity-60 font-medium px-4 leading-relaxed">
                    By clicking, invites will be sent to all assigned trainees and trainers immediately.
                  </p>
                </CardContent>
              </Card>

              {/* Setup Checklist */}
              <Card className="bg-[#151921] border-none p-8 rounded-3xl space-y-6 shadow-xl">
                <div className="flex items-center gap-2 text-primary">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="font-bold text-white uppercase tracking-widest text-[10px]">Setup Checklist</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Course materials uploaded", done: true },
                    { label: "Trainer availability confirmed", done: true },
                    { label: "Meeting link verified", done: false },
                    { label: "Pre-quiz finalized", done: false },
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      {item.done ? (
                        <div className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center">
                          <CheckCircle2 className="w-2.5 h-2.5 text-white" />
                        </div>
                      ) : (
                        <div className="w-4 h-4 rounded-full border-2 border-white/10" />
                      )}
                      <span className={cn(
                        "text-xs font-semibold",
                        item.done ? "text-white" : "text-muted-foreground"
                      )}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
