
"use client"

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Clock, 
  Calendar, 
  Rocket, 
  X, 
  AlertTriangle, 
  ChevronDown,
  ListFilter
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import Link from "next/link";

const courses = [
  {
    id: "TR-0429",
    title: "Advanced Phishing Defense",
    tags: ["Security", "Video"],
    subject: "IT Security",
    time: "45m",
    status: "Active",
    updated: "2h ago",
  },
  {
    id: "TR-0812",
    title: "Managerial Ethics 101",
    tags: ["Compliance", "Quiz"],
    subject: "Human Resources",
    time: "1.5h",
    status: "Scheduled",
    updated: "Yesterday",
  },
  {
    id: "TR-0231",
    title: "Data Privacy (GDPR)",
    tags: ["Legal", "PPT"],
    subject: "Compliance",
    time: "30m",
    status: "Draft",
    updated: "Oct 12",
  },
  {
    id: "TR-0994",
    title: "Customer Delight Workshop",
    tags: ["Soft Skills", "Video"],
    subject: "Sales",
    time: "2h",
    status: "Active",
    updated: "Oct 05",
  },
];

export default function CoursesPage() {
  const [selectedCourse, setSelectedCourse] = useState<typeof courses[0] | null>(null);
  const [deliveryMode, setDeliveryMode] = useState<"self" | "instructor">("self");

  return (
    <div className="flex h-screen bg-[#0A0C10] overflow-hidden">
      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-10">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Course Inventory</h1>
              <p className="text-sm text-muted-foreground mt-1 font-medium">
                Select a course to configure deployment parameters
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="secondary" className="bg-[#151921] border-none text-xs font-bold uppercase tracking-widest h-11 px-6">
                <ListFilter className="w-4 h-4 mr-2" /> Sort
              </Button>
              <Button asChild className="bg-primary hover:bg-primary/90 text-xs font-bold uppercase tracking-widest h-11 px-6">
                <Link href="/courses/create">
                  <Plus className="w-4 h-4 mr-2" /> New Course
                </Link>
              </Button>
            </div>
          </div>

          {/* Table Container */}
          <Card className="bg-[#151921]/40 border-none shadow-2xl rounded-2xl overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 hover:bg-transparent bg-white/5">
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pl-8">ID</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Title</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Time</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
                  <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pr-8">Updated</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {courses.map((course) => (
                  <TableRow 
                    key={course.id} 
                    className={cn(
                      "border-white/5 cursor-pointer transition-all",
                      selectedCourse?.id === course.id ? "bg-primary/10" : "hover:bg-white/5"
                    )}
                    onClick={() => setSelectedCourse(course)}
                  >
                    <TableCell className="text-xs font-bold text-muted-foreground pl-8 py-6">{course.id}</TableCell>
                    <TableCell>
                      <div className="space-y-1.5">
                        <p className="text-sm font-bold text-white">{course.title}</p>
                        <div className="flex gap-1.5">
                          {course.tags.map(tag => (
                            <Badge key={tag} className="bg-primary/5 text-primary border-primary/20 text-[8px] font-bold uppercase tracking-widest px-2 py-0.5">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm font-medium text-white">{course.subject}</TableCell>
                    <TableCell className="text-sm font-medium text-white">{course.time}</TableCell>
                    <TableCell>
                      <Badge className={cn(
                        "text-[9px] font-bold uppercase tracking-widest px-2.5 py-1 border-none",
                        course.status === 'Active' && "bg-emerald-500/10 text-emerald-500",
                        course.status === 'Scheduled' && "bg-primary/10 text-primary",
                        course.status === 'Draft' && "bg-muted/10 text-muted-foreground"
                      )}>
                        {course.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-xs font-medium text-muted-foreground pr-8">{course.updated}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </div>
      </main>

      {/* Sidebar - Schedule Training */}
      <aside className={cn(
        "w-[400px] border-l border-white/5 bg-[#0F1218] flex flex-col transition-all duration-300",
        !selectedCourse && "translate-x-full absolute right-0 opacity-0"
      )}>
        {selectedCourse && (
          <div className="flex flex-col h-full">
            <header className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-primary" />
                <h2 className="text-lg font-bold text-white tracking-tight">Schedule Training</h2>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground" onClick={() => setSelectedCourse(null)}>
                <X className="w-5 h-5" />
              </Button>
            </header>

            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10">
              {/* Target Audience */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Target Audience</p>
                <div className="space-y-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Search employee or department..." className="bg-secondary/50 border-none h-11 pl-10 text-sm" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Engineering", "Marketing"].map(dept => (
                      <Badge key={dept} className="bg-primary/20 text-primary border-none text-[10px] font-bold px-3 py-1 flex items-center gap-2">
                        {dept.toUpperCase()} <X className="w-3 h-3 cursor-pointer" />
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Timeline */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Timeline</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase">Start Date</label>
                    <div className="relative">
                      <Input type="date" className="bg-secondary/50 border-none h-11 text-xs" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase">Start Time</label>
                    <div className="relative">
                      <Input type="time" defaultValue="09:00" className="bg-secondary/50 border-none h-11 text-xs" />
                    </div>
                  </div>
                  <div className="col-span-2 space-y-2">
                    <label className="text-[10px] font-bold text-muted-foreground uppercase">Deadline / Due Date</label>
                    <Input type="date" className="bg-secondary/50 border-none h-11 text-xs" />
                  </div>
                </div>
              </div>

              {/* Delivery Mode */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Delivery Mode</p>
                <div className="flex p-1 bg-secondary/50 rounded-xl">
                  <button 
                    onClick={() => setDeliveryMode("self")}
                    className={cn(
                      "flex-1 h-10 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                      deliveryMode === "self" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
                    )}
                  >
                    Self-Paced
                  </button>
                  <button 
                    onClick={() => setDeliveryMode("instructor")}
                    className={cn(
                      "flex-1 h-10 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                      deliveryMode === "instructor" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
                    )}
                  >
                    Instructor-Led
                  </button>
                </div>
              </div>

              {/* Dependencies */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Dependencies</p>
                <Select defaultValue="none">
                  <SelectTrigger className="bg-secondary/50 border-none h-11 text-sm">
                    <SelectValue placeholder="Select Dependencies" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#151921] border-white/10 text-white">
                    <SelectItem value="none">None (Direct Access)</SelectItem>
                    <SelectItem value="prev">Prerequisite Required</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Automations */}
              <div className="space-y-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Automations</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Checkbox id="email" defaultChecked className="border-primary/40 data-[state=checked]:bg-primary" />
                    <label htmlFor="email" className="text-sm font-medium text-white">Email Invitation</label>
                  </div>
                  <div className="flex items-center gap-3">
                    <Checkbox id="remind" defaultChecked className="border-primary/40 data-[state=checked]:bg-primary" />
                    <label htmlFor="remind" className="text-sm font-medium text-white">24-hour Reminder</label>
                  </div>
                </div>
              </div>

              {/* Conflict Check */}
              <div className="space-y-4 pb-4">
                <p className="text-[10px] font-bold text-primary uppercase tracking-widest">Schedule Conflict Check</p>
                <Card className="bg-secondary/30 border-none p-4 rounded-xl space-y-4">
                  <div className="flex justify-between items-center text-[10px] font-bold text-muted-foreground uppercase">
                    <span>Oct 18 - Oct 22</span>
                    <div className="flex gap-2">
                      <button className="hover:text-white transition-colors">{"<"}</button>
                      <button className="hover:text-white transition-colors">{">"}</button>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-1">
                    {["MON", "TUE", "WED", "THU", "FRI"].map((day, i) => (
                      <div key={day} className="flex flex-col items-center gap-2">
                        <span className="text-[8px] font-bold text-muted-foreground">{day}</span>
                        <div className={cn(
                          "w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold",
                          i === 2 ? "bg-primary text-white" : 
                          i === 3 ? "bg-destructive/20 text-destructive border border-destructive/20" : 
                          "bg-white/5 text-muted-foreground"
                        )}>
                          {18 + i}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg flex gap-3">
                    <AlertTriangle className="w-4 h-4 text-destructive shrink-0" />
                    <p className="text-[10px] text-destructive leading-tight font-medium">
                      Conflict: Engineering Team has All-Hands on Oct 21.
                    </p>
                  </div>
                </Card>
              </div>
            </div>

            <footer className="p-8 border-t border-white/5 space-y-4 bg-white/5">
              <Button className="w-full bg-primary hover:bg-primary/90 h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl group">
                <Rocket className="w-4 h-4 mr-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /> 
                Deploy Training
              </Button>
              <p className="text-[10px] text-center text-muted-foreground font-medium">
                Final confirmation will be sent to 124 employees.
              </p>
            </footer>
          </div>
        )}
      </aside>
    </div>
  );
}
