"use client"

import { useState } from "react";
import { 
  ChevronLeft, 
  ChevronRight, 
  Download, 
  Printer, 
  Plus, 
  LayoutGrid, 
  Columns, 
  Rows,
  Calendar as CalendarIcon,
  Search,
  Check,
  ChevronDown,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];

const events = [
  { id: 1, title: "Advanced UI/UX", time: "09:00 - 12:00", day: 2, type: "classroom" },
  { id: 2, title: "Cyber Security 101", time: "14:00 - 16:00", day: 4, type: "virtual" },
  { id: 3, title: "Safety Protocols", time: "All Day", day: 5, type: "self-learning" },
  { id: 4, title: "Project Mgmt", time: "10:00 - 14:00", day: 6, type: "classroom" },
  { id: 5, title: "Cloud Infrastructure", time: "15:00 - 17:00", day: 6, type: "virtual" },
  { id: 6, title: "Ethics Training", time: "Self-Paced", day: 11, type: "self-learning" },
  { id: 7, title: "Database Admin", time: "09:00 - 13:00", day: 18, type: "classroom" },
];

export default function CalendarPage() {
  const [activeView, setActiveView] = useState("month");

  const calendarDays = Array.from({ length: 35 }, (_, i) => {
    const dayNumber = i - 5; // Offset to start at Sept 24th roughly for the Oct 2023 layout
    return {
      day: dayNumber > 0 && dayNumber <= 31 ? dayNumber : (dayNumber <= 0 ? 30 + dayNumber : dayNumber - 31),
      isCurrentMonth: dayNumber > 0 && dayNumber <= 31,
      events: events.filter(e => e.day === dayNumber)
    };
  });

  return (
    <div className="flex h-screen bg-background overflow-hidden">
      {/* Calendar Sidebar */}
      <aside className="w-64 border-r border-white/5 p-6 flex flex-col gap-8 overflow-y-auto">
        <div className="space-y-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">View Controls</p>
          <div className="space-y-1">
            <Button 
              variant={activeView === "month" ? "secondary" : "ghost"} 
              className={cn("w-full justify-between text-xs font-semibold h-9 rounded-lg", activeView === "month" && "bg-primary/10 text-primary border-none")}
              onClick={() => setActiveView("month")}
            >
              Month View <CalendarIcon className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-xs font-semibold h-9 rounded-lg opacity-60">
              Week View <Columns className="w-3.5 h-3.5" />
            </Button>
            <Button variant="ghost" className="w-full justify-between text-xs font-semibold h-9 rounded-lg opacity-60">
              Day View <Rows className="w-3.5 h-3.5" />
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Quick Filters</p>
          <div className="space-y-3">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Client</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-secondary/50 border-none h-9 text-xs">
                  <SelectValue placeholder="All Clients" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Clients</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase">Branch</label>
              <Select defaultValue="all">
                <SelectTrigger className="bg-secondary/50 border-none h-9 text-xs">
                  <SelectValue placeholder="All Branches" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Branches</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Training Types</p>
          <div className="space-y-3">
            {[
              { label: "Classroom", color: "bg-primary", checked: true },
              { label: "Virtual", color: "bg-emerald-500", checked: true },
              { label: "Self-Learning", color: "bg-orange-500", checked: true },
            ].map((type) => (
              <div key={type.label} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className={cn("w-3 h-3 rounded-sm", type.color)} />
                  <span className="text-xs font-medium">{type.label}</span>
                </div>
                <Checkbox defaultChecked={type.checked} className="border-white/20 data-[state=checked]:bg-primary" />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-auto pt-6 space-y-3 border-t border-white/5">
          <div className="flex justify-between items-center text-[10px] font-bold uppercase text-muted-foreground">
            <span>Upcoming Session Load</span>
          </div>
          <Progress value={75} className="h-1 bg-white/5" />
          <p className="text-[10px] text-muted-foreground leading-tight">75% capacity utilized for Oct.</p>
        </div>
      </aside>

      {/* Main Calendar Content */}
      <main className="flex-1 flex flex-col min-w-0">
        <header className="p-6 border-b border-white/5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <h1 className="text-2xl font-bold text-white tracking-tight">October 2023</h1>
            <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="ghost" className="h-7 px-3 text-[10px] font-bold uppercase tracking-wider">Today</Button>
              <Button variant="ghost" size="icon" className="h-7 w-7"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="secondary" className="bg-white/5 border-none h-9 text-xs text-white">
              <Download className="w-3.5 h-3.5 mr-2" /> Export
            </Button>
            <Button variant="secondary" className="bg-white/5 border-none h-9 text-xs text-white">
              <Printer className="w-3.5 h-3.5 mr-2" /> Print
            </Button>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="bg-primary hover:bg-primary/90 h-9 text-xs px-4 text-white">
                  <Calendar className="w-3.5 h-3.5 mr-2" /> Schedule Training <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-popover border-white/10 w-[240px]">
                <DropdownMenuItem asChild>
                  <Link href="/schedule/create" className="py-3 cursor-pointer w-full">Schedule Classroom Session</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schedule/create" className="py-3 cursor-pointer w-full">Virtual Session</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/schedule/create" className="py-3 cursor-pointer w-full">Self Learning Session</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        <div className="flex-1 flex flex-col p-6 min-h-0">
          {/* Calendar Header Days */}
          <div className="grid grid-cols-7 mb-4">
            {days.map(day => (
              <div key={day} className="text-[10px] font-bold text-muted-foreground text-center tracking-widest px-2">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="flex-1 grid grid-cols-7 grid-rows-5 gap-px bg-white/5 border border-white/5 rounded-xl overflow-hidden shadow-2xl">
            {calendarDays.map((day, i) => (
              <div 
                key={i} 
                className={cn(
                  "bg-background p-3 flex flex-col gap-2 transition-colors hover:bg-white/5 min-h-[120px]",
                  !day.isCurrentMonth && "opacity-30",
                  day.day === 5 && day.isCurrentMonth && "ring-1 ring-inset ring-primary/40 bg-primary/5"
                )}
              >
                <span className={cn(
                  "text-xs font-bold",
                  day.day === 5 && day.isCurrentMonth ? "text-primary" : "text-muted-foreground"
                )}>
                  {day.day}
                </span>
                <div className="flex flex-col gap-1.5 overflow-y-auto no-scrollbar">
                  {day.events.map(event => (
                    <div 
                      key={event.id} 
                      className={cn(
                        "p-2 rounded-lg text-[10px] border shadow-sm",
                        event.type === 'classroom' && "bg-primary/20 text-primary border-primary/20",
                        event.type === 'virtual' && "bg-emerald-500/20 text-emerald-400 border-emerald-500/20",
                        event.type === 'self-learning' && "bg-orange-500/20 text-orange-400 border-orange-500/20"
                      )}
                    >
                      <p className="font-bold leading-tight mb-0.5 truncate">{event.title}</p>
                      <p className="opacity-70 font-medium">{event.time}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
