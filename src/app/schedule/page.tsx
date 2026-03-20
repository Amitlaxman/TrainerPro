
"use client"

import { 
  Download, 
  Plus, 
  Clock, 
  MapPin, 
  Video, 
  ExternalLink, 
  MessageSquare, 
  MoreVertical,
  CalendarDays,
  Calendar,
  ChevronDown
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  { label: "Total Hours", value: "6.5h" },
  { label: "Remaining Sessions", value: "3" },
  { label: "Attendance Rate", value: "94%", color: "text-emerald-500" },
];

const sessions = [
  {
    id: 1,
    type: "classroom",
    title: "Advanced UI Design Principles",
    time: "09:00 AM - 11:00 AM",
    location: "Main Campus, Room 402",
    date: { month: "OCT", day: "24" },
    icon: MapPin,
    color: "bg-blue-600/20 text-blue-400 border-blue-600/30"
  },
  {
    id: 2,
    type: "virtual",
    title: "Frontend Engineering Bootcamp",
    time: "01:00 PM - 02:30 PM",
    location: "zoom.us/j/882940211",
    date: { month: "OCT", day: "24" },
    icon: Video,
    color: "bg-purple-600/20 text-purple-400 border-purple-600/30",
    isLink: true
  },
  {
    id: 3,
    type: "self-paced",
    title: "Database Management Systems",
    time: "04:00 PM - 05:00 PM",
    location: "Online Dashboard - Review Q&A",
    date: { month: "OCT", day: "24" },
    icon: MessageSquare,
    color: "bg-emerald-600/20 text-emerald-400 border-emerald-600/30"
  }
];

export default function MySchedule() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white tracking-tight">Today's My Schedule</h1>
          <p className="text-muted-foreground mt-1">Monday, Oct 24th — 8 Sessions Total</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="secondary" asChild className="bg-white/5 border-none text-white hover:bg-white/10">
            <Link href="/calendar">
              <CalendarDays className="w-4 h-4 mr-2" /> Calendar View
            </Link>
          </Button>
          <Button variant="secondary" className="bg-white/5 border-none text-white hover:bg-white/10">
            <Download className="w-4 h-4 mr-2" /> Export
          </Button>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                <Calendar className="w-4 h-4 mr-2" /> Schedule Training <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-popover border-white/10 w-[240px]">
              <DropdownMenuItem className="py-3 cursor-pointer">
                Schedule Classroom Session
              </DropdownMenuItem>
              <DropdownMenuItem className="py-3 cursor-pointer">
                Virtual Session
              </DropdownMenuItem>
              <DropdownMenuItem className="py-3 cursor-pointer">
                Self Learning Session
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Stats Summary Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat) => (
          <Card key={stat.label} className="bg-card/50 border-none p-8">
            <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</p>
            <h3 className={`text-3xl font-bold mt-2 ${stat.color || 'text-white'}`}>{stat.value}</h3>
          </Card>
        ))}
      </div>

      {/* Sessions Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-white">Active & Upcoming Sessions</h2>
          <Tabs defaultValue="all" className="bg-white/5 p-1 rounded-lg">
            <TabsList className="bg-transparent h-8 p-0">
              <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs px-4 h-full rounded-md">All</TabsTrigger>
              <TabsTrigger value="completed" className="data-[state=active]:bg-primary data-[state=active]:text-white text-xs px-4 h-full rounded-md">Completed</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>

        <div className="space-y-4">
          {sessions.map((session) => (
            <Card key={session.id} className="bg-[#1A1F26]/60 border-none group hover:bg-[#1A1F26] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  {/* Date Badge */}
                  <div className="w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 flex flex-col items-center justify-center shrink-0">
                    <span className="text-[10px] font-bold text-primary">{session.date.month}</span>
                    <span className="text-2xl font-bold text-white">{session.date.day}</span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <Badge className={`uppercase text-[10px] font-bold tracking-widest px-2 py-0.5 rounded ${session.color}`}>
                        {session.type}
                      </Badge>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3.5 h-3.5" />
                        {session.time}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-white leading-none">{session.title}</h4>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <session.icon className="w-4 h-4" />
                      {session.isLink ? (
                        <a href={`https://${session.location}`} target="_blank" rel="noreferrer" className="text-primary hover:underline flex items-center gap-1">
                          {session.location} <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : (
                        <span>{session.location}</span>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-3">
                    <Button asChild variant="outline" className="border-white/5 bg-transparent hover:bg-white/5 text-primary text-xs font-bold rounded-xl h-10 px-6 cursor-pointer">
                      <Link href="/schedule/details">
                        Manage Session
                      </Link>
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-white">
                          <MoreVertical className="w-5 h-5" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-[#1A1F26] border-white/10 text-white">
                        <DropdownMenuItem className="cursor-pointer">Edit Details</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer">View Attendance</DropdownMenuItem>
                        <DropdownMenuItem className="cursor-pointer text-destructive">Cancel Session</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
