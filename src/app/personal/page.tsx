
"use client"

import { 
  Search, 
  Upload, 
  FileBarChart, 
  Bell, 
  HelpCircle, 
  Calendar as CalendarIcon,
  Users,
  Star,
  Clock,
  Video,
  MapPin,
  Monitor,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  ChevronDown,
  Calendar
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer
} from 'recharts';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const performanceData = [
  { name: 'S01', avgScore: 65, classAvg: 75 },
  { name: 'S02', avgScore: 78, classAvg: 85 },
  { name: 'S03', avgScore: 45, classAvg: 60 },
  { name: 'S04', avgScore: 92, classAvg: 88 },
  { name: 'S05', avgScore: 62, classAvg: 78 },
];

const schedule = [
  {
    date: { month: "OCT", day: "24" },
    title: "Advanced System Design",
    type: "Virtual",
    time: "09:00 AM",
    icon: Video,
  },
  {
    date: { month: "OCT", day: "24" },
    title: "Leadership Workshop",
    type: "Physical (Conf B)",
    time: "01:30 PM",
    icon: MapPin,
  },
  {
    date: { month: "OCT", day: "25" },
    title: "Data Structures II",
    type: "Online Self-Paced",
    time: "Anytime",
    icon: Monitor,
  },
];

export default function PersonalDashboard() {
  const trainerImage = PlaceHolderImages.find(img => img.id === "avatar-trainer")?.imageUrl;
  const student1Image = PlaceHolderImages.find(img => img.id === "avatar-student-1")?.imageUrl;
  const student2Image = PlaceHolderImages.find(img => img.id === "avatar-student-2")?.imageUrl;

  return (
    <div className="min-h-screen bg-[#0F1218] text-white p-6 md:p-10 space-y-8">
      {/* Top Navigation Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="text-2xl font-bold tracking-tight">TrainerPro</span>
        </div>

        <div className="flex-1 max-w-xl relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search sessions or trainees" 
            className="w-full bg-[#1A1F26] border-none pl-10 h-11 focus-visible:ring-1 focus-visible:ring-primary/50" 
          />
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="relative bg-[#1A1F26] hover:bg-white/5 h-11 w-11 rounded-xl">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-3 right-3 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-[#1A1F26]" />
          </Button>
          <Button variant="ghost" size="icon" className="bg-[#1A1F26] hover:bg-white/5 h-11 w-11 rounded-xl">
            <HelpCircle className="w-5 h-5 text-muted-foreground" />
          </Button>
          <div className="h-10 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-semibold">Alex Smith</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-wider">Senior Instructor</p>
            </div>
            <Avatar className="h-11 w-11 ring-2 ring-primary/20 ring-offset-2 ring-offset-[#0F1218]">
              <AvatarImage src={trainerImage} />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left Sidebar Column */}
        <div className="lg:col-span-3 space-y-8">
          {/* Welcome Card */}
          <Card className="bg-primary border-none text-white p-8 rounded-3xl overflow-hidden relative shadow-2xl shadow-primary/20">
            <div className="relative z-10 space-y-3">
              <h2 className="text-3xl font-bold leading-tight">Welcome back, Alex!</h2>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                You have 3 sessions scheduled for today and 8 quizzes pending grade.
              </p>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
          </Card>

          {/* Quick Actions */}
          <div className="space-y-4">
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground px-2">Quick Actions</p>
            <div className="space-y-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="w-full justify-between gap-3 h-12 bg-primary hover:bg-primary/90 text-white rounded-xl shadow-lg shadow-primary/10">
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5" /> 
                      <span>Schedule Training</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="bg-popover border-white/10 w-[240px]">
                  <DropdownMenuItem asChild>
                    <Link href="/schedule/create" className="py-3 cursor-pointer w-full text-white">Schedule Classroom Session</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/schedule/virtual" className="py-3 cursor-pointer w-full text-white">Virtual Session</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/schedule/self-learning" className="py-3 cursor-pointer w-full text-white">Self Learning Session</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

              <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-white/5 text-muted-foreground hover:text-white rounded-xl">
                <Search className="w-5 h-5" /> Browse Question Bank
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-white/5 text-muted-foreground hover:text-white rounded-xl">
                <Upload className="w-5 h-5" /> Upload Material
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-3 h-12 hover:bg-white/5 text-muted-foreground hover:text-white rounded-xl">
                <FileBarChart className="w-5 h-5" /> Generate Reports
              </Button>
            </div>
          </div>

          {/* Pending Tasks */}
          <Card className="bg-[#151921] border-none p-6 rounded-3xl">
            <div className="flex items-center gap-2 mb-6">
              <AlertCircle className="w-5 h-5 text-red-500" />
              <h3 className="font-bold">Pending Tasks</h3>
            </div>
            <div className="space-y-6">
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Release post-assessments</p>
                  <p className="text-xs text-muted-foreground">Python Basics (Sec A)</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-blue-500 mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Grade 8 pending quizzes</p>
                  <p className="text-xs text-muted-foreground">Advanced React Hooks</p>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-white/20 mt-1.5 shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-white">Review low-performing sites</p>
                  <p className="text-xs text-muted-foreground">Site performance audit</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Main Content Column */}
        <div className="lg:col-span-9 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            <Card className="bg-[#151921] border-none p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 p-2 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <CalendarIcon className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-medium">Active Sessions</p>
                <h3 className="text-4xl font-bold">12</h3>
                <p className="text-xs text-emerald-500 font-bold flex items-center gap-1">
                   <ChevronRight className="w-3 h-3 -rotate-45" /> +2 this week
                </p>
              </div>
            </Card>

            <Card className="bg-[#151921] border-none p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 p-2 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <Users className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-medium">Total Trainees</p>
                <h3 className="text-4xl font-bold">1,240</h3>
                <p className="text-xs text-muted-foreground font-medium">Cumulative total</p>
              </div>
            </Card>

            <Card className="bg-[#151921] border-none p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 p-2 bg-primary/10 rounded-xl group-hover:scale-110 transition-transform">
                <Star className="w-5 h-5 text-primary" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-medium">Avg Feedback</p>
                <div className="flex items-baseline gap-1">
                  <h3 className="text-4xl font-bold">4.8</h3>
                  <span className="text-muted-foreground text-sm">/ 5</span>
                </div>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map(i => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                  <Star className="w-3 h-3 text-yellow-500" />
                </div>
              </div>
            </Card>

            <Card className="bg-[#151921] border-none p-6 rounded-3xl relative overflow-hidden group">
              <div className="absolute top-4 right-4 p-2 bg-red-500/10 rounded-xl group-hover:scale-110 transition-transform">
                <Clock className="w-5 h-5 text-red-500" />
              </div>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground font-medium">Pending Quizzes</p>
                <h3 className="text-4xl font-bold">8</h3>
                <p className="text-xs text-red-500 font-bold uppercase tracking-wider">Action required</p>
              </div>
            </Card>
          </div>

          {/* Middle Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
            {/* My Schedule */}
            <Card className="xl:col-span-2 bg-[#151921] border-none rounded-3xl p-8 space-y-8">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">My Schedule</h3>
                <Button variant="link" asChild className="text-primary text-sm font-bold p-0 h-auto">
                  <Link href="/schedule">View Calendar</Link>
                </Button>
              </div>
              <div className="space-y-6">
                {schedule.map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-2xl bg-[#1C222C] flex flex-col items-center justify-center border border-white/5">
                        <span className="text-[10px] font-bold text-primary">{item.date.month}</span>
                        <span className="text-lg font-bold">{item.date.day}</span>
                      </div>
                      <div className="space-y-1">
                        <p className="text-sm font-bold leading-none">{item.title}</p>
                        <div className="flex items-center gap-2 text-muted-foreground text-[10px] font-bold uppercase tracking-wider">
                          <item.icon className="w-3 h-3" />
                          <span>{item.type} • {item.time}</span>
                        </div>
                      </div>
                    </div>
                    <Button asChild variant="outline" size="sm" className="bg-[#1C222C] border-none hover:bg-white/5 rounded-xl text-[10px] font-bold h-8 cursor-pointer text-white">
                      <Link href="/schedule/details">Manage</Link>
                    </Button>
                  </div>
                ))}
              </div>
            </Card>

            {/* Performance Chart */}
            <Card className="xl:col-span-3 bg-[#151921] border-none rounded-3xl p-8 space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold">Recent Performance</h3>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-wider">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary" /> Avg Score</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-white/10" /> Class Avg</div>
                </div>
              </div>
              <div className="h-[240px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={performanceData} barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700 }} 
                      dy={10}
                    />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{ fill: 'transparent' }}
                      contentStyle={{ backgroundColor: '#1A1F26', border: 'none', borderRadius: '12px' }}
                    />
                    <Bar dataKey="classAvg" fill="rgba(255,255,255,0.05)" radius={[6, 6, 6, 6]} barSize={40} />
                    <Bar dataKey="avgScore" fill="#3B82F6" radius={[6, 6, 6, 6]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </Card>
          </div>

          {/* Feedback Snapshot */}
          <Card className="bg-[#151921] border-none rounded-3xl p-8 space-y-8">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Trainee Feedback Snapshot</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"><ChevronLeft className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10"><ChevronRight className="w-4 h-4" /></Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-[#1C222C] border-none p-6 rounded-2xl space-y-4 hover:ring-1 hover:ring-primary/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/10">
                      <AvatarImage src={student1Image} />
                      <AvatarFallback>SJ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Sarah Jenkins</p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Python Mastery Session</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                </div>
                <p className="text-sm italic text-foreground/80 leading-relaxed font-medium">
                  "The explanation on decorators was life-changing! Alex makes complex topics very approachable."
                </p>
              </Card>

              <Card className="bg-[#1C222C] border-none p-6 rounded-2xl space-y-4 hover:ring-1 hover:ring-primary/20 transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 ring-2 ring-primary/10">
                      <AvatarImage src={student2Image} />
                      <AvatarFallback>MZ</AvatarFallback>
                    </Avatar>
                    <div className="space-y-0.5">
                      <p className="text-sm font-bold">Marcus Zhao</p>
                      <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">React Hooks Advanced</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-2.5 h-2.5 fill-yellow-500 text-yellow-500" />)}
                  </div>
                </div>
                <p className="text-sm italic text-foreground/80 leading-relaxed font-medium">
                  "Great content, would appreciate more hands-on labs for the last module though."
                </p>
              </Card>
            </div>
          </Card>

        </div>
      </div>
    </div>
  );
}
