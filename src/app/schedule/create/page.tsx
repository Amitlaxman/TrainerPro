"use client"

import { 
  ArrowLeft, 
  Plus, 
  Settings, 
  Radio, 
  Users, 
  History, 
  FileQuestion, 
  CheckCircle2, 
  ExternalLink, 
  QrCode, 
  CloudUpload, 
  Trash2, 
  Send,
  Link as LinkIcon,
  Calendar,
  Clock,
  MoreVertical,
  ChevronDown
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
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function CreateSession() {
  const [trainees, setTrainees] = useState([
    { name: "Alex Thompson", id: "EMP-00124", email: "alex.t@company.com", mobile: "+1 (555) 012-3456" },
    { name: "Elena Gilbert", id: "EMP-00156", email: "elena.g@company.com", mobile: "+1 (555) 987-6543" },
  ]);

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground">
      {/* Top Breadcrumb/Nav (Simplified mock based on image top right) */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
            <Radio className="w-4 h-4 text-primary" />
          </div>
          <span className="font-bold text-sm tracking-tight text-white">Virtual Training Scheduler</span>
        </div>
        <nav className="flex items-center gap-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">
          <Link href="/" className="hover:text-primary transition-colors">Dashboard</Link>
          <Link href="/schedule" className="hover:text-primary transition-colors">Sessions</Link>
          <Link href="/employees" className="hover:text-primary transition-colors">Trainers</Link>
          <Link href="/analytics" className="hover:text-primary transition-colors">Reports</Link>
          <Avatar className="w-8 h-8 ring-2 ring-primary/20 ring-offset-2 ring-offset-[#0A0C10]">
            <AvatarImage src="https://picsum.photos/seed/user123/100/100" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </nav>
      </header>

      <div className="p-8 max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Form Content */}
        <div className="lg:col-span-8 space-y-8">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-tight">Schedule Classroom Training Session</h1>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-none text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">
                <Radio className="w-3 h-3 mr-1" /> Virtual Mode
              </Badge>
              <span className="text-xs text-muted-foreground font-medium italic">Drafting new session...</span>
            </div>
          </div>

          {/* Configuration Details */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Settings className="w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Configuration Details</h2>
            </div>
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Client</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-11 focus:ring-primary/20">
                      <SelectValue placeholder="Choose Client" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10">
                      <SelectItem value="acme">Acme Corp</SelectItem>
                      <SelectItem value="techglobal">TechGlobal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Branch / Site</label>
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 focus:ring-primary/20">
                        <SelectValue placeholder="Branch" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10">
                        <SelectItem value="main">Main</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2 pt-6">
                    <Select>
                      <SelectTrigger className="bg-[#0F1218] border-none h-11 focus:ring-primary/20">
                        <SelectValue placeholder="Site" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#151921] border-white/10">
                        <SelectItem value="virtual">Virtual (Global)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Course</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-11 focus:ring-primary/20">
                      <SelectValue placeholder="Select Training Course" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10">
                      <SelectItem value="cyber">Cybersecurity Awareness 101</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Trainer</label>
                  <Select>
                    <SelectTrigger className="bg-[#0F1218] border-none h-11 focus:ring-primary/20">
                      <SelectValue placeholder="Assign Trainer" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10">
                      <SelectItem value="jane">Jane Doe</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Session Start</label>
                    <Input type="date" className="bg-[#0F1218] border-none h-11" />
                  </div>
                  <div className="space-y-2 pt-6">
                    <Input type="time" className="bg-[#0F1218] border-none h-11" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Session End</label>
                    <Input type="date" className="bg-[#0F1218] border-none h-11" />
                  </div>
                  <div className="space-y-2 pt-6">
                    <Input type="time" className="bg-[#0F1218] border-none h-11" />
                  </div>
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Training Location</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="https://meet.google.com/abc-defg-hij" className="bg-[#0F1218] border-none h-11 pl-10" />
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Live Session Controls */}
          <section className="space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Radio className="w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Live Session Controls</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#151921] border-none p-6 rounded-2xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
                <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center p-2 shadow-inner">
                  <QrCode className="w-full h-full text-black" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-bold text-white">Attendance QR Code</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Trainees can scan to join and log attendance</p>
                  <Button variant="link" className="text-primary text-[10px] font-bold uppercase p-0 h-auto">
                    <CloudUpload className="w-3 h-3 mr-1" /> Download QR
                  </Button>
                </div>
              </Card>
              <Card className="bg-[#151921] border-none p-6 rounded-2xl flex flex-col justify-center space-y-4">
                <h3 className="font-bold text-white">Session Materials</h3>
                <Button className="bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 h-12 rounded-xl text-xs font-bold uppercase tracking-widest">
                  <CloudUpload className="w-4 h-4 mr-2" /> Release Training Materials
                </Button>
                <p className="text-[10px] text-muted-foreground text-center italic">Materials will be available in the trainee portal immediately.</p>
              </Card>
            </div>
          </section>

          {/* Trainee Management */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary">
                <Users className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Trainee Management</h2>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-xl h-10 px-6 text-xs font-bold uppercase tracking-wider">
                <Plus className="w-4 h-4 mr-2" /> Add Trainee
              </Button>
            </div>
            <Card className="bg-[#151921] border-none overflow-hidden rounded-2xl">
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5 hover:bg-transparent">
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
                      <TableCell className="text-sm font-semibold text-white">{t.name}</TableCell>
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
                <p className="text-[10px] text-muted-foreground flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/30" />
                  Trainees will automatically receive the meeting invite after scheduling.
                </p>
              </div>
            </Card>
          </section>

          {/* Attendance Log */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary">
                <History className="w-5 h-5" />
                <h2 className="text-xl font-bold text-white">Attendance Log</h2>
              </div>
              <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest">
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
                      <TableCell className="text-sm font-semibold text-white">{t.name}</TableCell>
                      <TableCell className="text-xs text-muted-foreground">{10 + i}:02 AM</TableCell>
                      <TableCell>
                        <Badge variant="outline" className="text-[8px] font-bold bg-primary/5 border-primary/20 text-primary uppercase px-1.5 h-4">
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
              <FileQuestion className="w-5 h-5" />
              <h2 className="text-xl font-bold text-white">Quiz Builder</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#151921] border-none p-8 rounded-2xl border-l-4 border-primary/40 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      <FileQuestion className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Pre-Assessment</h3>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Before session start</p>
                    </div>
                  </div>
                  <Badge variant="ghost" className="text-[10px] font-black tracking-widest text-muted-foreground uppercase hover:bg-white/5 cursor-pointer">
                    Manual <ChevronDown className="w-3 h-3 ml-1" />
                  </Badge>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 h-11 text-xs font-bold uppercase tracking-widest rounded-xl shadow-lg shadow-primary/20">
                  Release Pre-Quiz Now
                </Button>
              </Card>

              <Card className="bg-[#151921] border-none p-8 rounded-2xl border-l-4 border-white/10 space-y-6 opacity-60">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-lg text-muted-foreground">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Post-Assessment</h3>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">After session end</p>
                    </div>
                  </div>
                  <Badge variant="ghost" className="text-[10px] font-black tracking-widest text-muted-foreground uppercase hover:bg-white/5 cursor-pointer">
                    Manual <ChevronDown className="w-3 h-3 ml-1" />
                  </Badge>
                </div>
                <Button disabled className="w-full bg-white/5 text-muted-foreground h-11 text-xs font-bold uppercase tracking-widest rounded-xl">
                  Release Post-Quiz Now
                </Button>
              </Card>
            </div>
          </section>

          <footer className="pt-8 border-t border-white/5 text-center">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2023 Virtual Training Scheduler. All rights reserved.</p>
          </footer>
        </div>

        {/* Sidebar Summary & Checklist */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="sticky top-8 space-y-6">
            {/* Session Summary Card */}
            <Card className="bg-primary border-none text-white rounded-3xl overflow-hidden shadow-2xl shadow-primary/20">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.3em] opacity-80 mb-2">
                  <Calendar className="w-3 h-3" /> Session Summary
                </div>
                <div className="space-y-4 pt-4 border-t border-white/10">
                  <div>
                    <p className="text-[10px] uppercase font-bold opacity-60 tracking-widest mb-1">Course</p>
                    <h3 className="text-xl font-bold leading-tight">Cybersecurity Awareness 101</h3>
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
                    <LinkIcon className="w-3 h-3" />
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-[10px] font-bold uppercase tracking-widest opacity-60">Attendees</p>
                  <div className="flex -space-x-3 overflow-hidden">
                    {[1, 2, 3].map((i) => (
                      <Avatar key={i} className="inline-block border-2 border-primary h-8 w-8">
                        <AvatarImage src={`https://picsum.photos/seed/${i + 10}/100/100`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                    ))}
                    <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center text-[10px] font-bold border-2 border-primary">
                      +8
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-white text-primary hover:bg-white/90 h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl group">
                  Schedule <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-[10px] text-center opacity-60 font-medium px-4 leading-relaxed">
                  By clicking, invites will be sent to all assigned trainees and trainers immediately.
                </p>
              </CardContent>
            </Card>

            {/* Setup Checklist */}
            <Card className="bg-[#151921] border-none p-8 rounded-3xl space-y-6">
              <div className="flex items-center gap-2 text-primary">
                <CheckCircle2 className="w-5 h-5" />
                <h3 className="font-bold text-white uppercase tracking-widest text-xs">Setup Checklist</h3>
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
                      <div className="w-5 h-5 rounded-full bg-emerald-500 flex items-center justify-center">
                        <CheckCircle2 className="w-3 h-3 text-white" />
                      </div>
                    ) : (
                      <div className="w-5 h-5 rounded-full border-2 border-white/10" />
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
        </aside>
      </div>
    </div>
  );
}
