
"use client"

import { 
  Users, 
  BookOpen, 
  FileCheck, 
  TrendingUp, 
  Plus, 
  Search, 
  Bell, 
  Calendar,
  MoreVertical,
  CloudUpload,
  FilePlus,
  BarChart3,
  ShieldAlert,
  ChevronDown,
  History,
  CheckCircle2,
  AlertCircle,
  LayoutDashboard
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Cell
} from 'recharts';

const stats = [
  { label: "Total Courses", value: "128", change: "+5.2%", icon: BookOpen, color: "text-blue-500", bg: "bg-blue-500/10", trend: "up" },
  { label: "Active Trainees", value: "1,240", change: "-2.1%", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10", trend: "down" },
  { label: "Pending Assessments", value: "45", change: "+12.4%", icon: AlertCircle, color: "text-orange-500", bg: "bg-orange-500/10", trend: "up" },
  { label: "Completion Rate", value: "82.4%", change: "+3.0%", icon: CheckCircle2, color: "text-emerald-500", bg: "bg-emerald-500/10", trend: "up" },
];

const progressData = [
  { name: 'Jan', active: 400, onTrack: 240, behind: 100 },
  { name: 'Feb', active: 300, onTrack: 139, behind: 80 },
  { name: 'Mar', active: 200, onTrack: 980, behind: 150 },
  { name: 'Apr', active: 278, onTrack: 390, behind: 120 },
  { name: 'May', active: 189, onTrack: 480, behind: 90 },
  { name: 'Jun', active: 239, onTrack: 380, behind: 110 },
];

const courses = [
  { title: "Advanced React Patterns", engagement: "98% High Engagement", value: 98, color: "bg-blue-500" },
  { title: "Cybersecurity Fundamentals", engagement: "85% Steady Growth", value: 85, color: "bg-emerald-500" },
  { title: "Emotional Intelligence at Work", engagement: "12% Low Engagement", value: 12, color: "bg-red-500" },
];

const recentActivity = [
  { id: 1, user: "John Doe", action: "completed \"React Basics\"", time: "2 mins ago" },
  { id: 2, user: "Sarah Smith", action: "failed \"Unit Testing\"", time: "15 mins ago" },
  { id: 3, user: "Mike Ross", action: "started \"Node.js v20\"", time: "1 hour ago" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col">
      {/* Top Header */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between gap-6">
        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search courses, trainees, or records..." 
            className="bg-[#151921] border-none pl-10 h-11 text-sm focus-visible:ring-1 focus-visible:ring-primary/40"
          />
        </div>
        
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="relative h-10 w-10 text-muted-foreground hover:text-white">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-[#0A0C10]" />
          </Button>
          
          <div className="h-8 w-[1px] bg-white/10" />
          
          <div className="flex items-center gap-3">
            <div className="text-right">
              <p className="text-sm font-bold text-white leading-none">Admin User</p>
              <p className="text-[10px] text-muted-foreground font-medium mt-1">System Administrator</p>
            </div>
            <Avatar className="h-9 w-9 border border-white/10 shadow-lg">
              <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
              <AvatarFallback>AU</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="p-10 space-y-10">
        {/* Title Section */}
        <div className="flex items-end justify-between">
          <div className="space-y-1">
            <h1 className="text-3xl font-bold text-white tracking-tight">LMS Admin Dashboard</h1>
            <p className="text-muted-foreground font-medium">Real-time platform performance and trainee progress tracking.</p>
          </div>
          <Button variant="secondary" className="bg-[#151921] border-white/5 h-11 px-6 text-xs font-bold uppercase tracking-widest text-white shadow-xl">
            <Calendar className="w-4 h-4 mr-2" /> Last 30 Days
          </Button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <Card key={stat.label} className="bg-[#151921] border-none p-8 rounded-2xl shadow-2xl relative overflow-hidden group">
              <div className="flex items-start justify-between mb-6">
                <div className={cn("p-2.5 rounded-xl", stat.bg)}>
                  <stat.icon className={cn("w-5 h-5", stat.color)} />
                </div>
                <Badge className={cn(
                  "bg-[#0A0C10] border-none text-[10px] font-bold px-2 py-0.5",
                  stat.trend === 'up' ? "text-emerald-500" : "text-red-500"
                )}>
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                <h3 className="text-3xl font-black text-white">{stat.value}</h3>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Dashboard Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Course Performance Card */}
            <Card className="bg-[#151921] border-none rounded-2xl shadow-2xl overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between bg-white/2">
                <CardTitle className="text-lg font-bold text-white">Course Performance Overview</CardTitle>
                <Button variant="link" className="text-primary text-xs font-bold uppercase tracking-widest p-0">View All</Button>
              </CardHeader>
              <CardContent className="p-8 space-y-10">
                {courses.map((course, i) => (
                  <div key={i} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                          {i === 0 ? <LayoutDashboard className="w-5 h-5 text-blue-400" /> : <BookOpen className="w-5 h-5 text-emerald-400" />}
                        </div>
                        <p className="text-sm font-bold text-white">{course.title}</p>
                      </div>
                      <span className={cn("text-[10px] font-black uppercase tracking-widest", 
                        course.value > 80 ? "text-emerald-500" : 
                        course.value > 50 ? "text-primary" : "text-red-500"
                      )}>{course.engagement}</span>
                    </div>
                    <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={cn("h-full rounded-full transition-all duration-500", course.color)} 
                        style={{ width: `${course.value}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Trainee Progress Snapshot */}
            <Card className="bg-[#151921] border-none rounded-2xl shadow-2xl overflow-hidden">
              <CardHeader className="p-8 border-b border-white/5 flex flex-row items-center justify-between">
                <CardTitle className="text-lg font-bold text-white">Trainee Progress Snapshot</CardTitle>
                <div className="flex items-center gap-4 text-[9px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-primary" /> Active</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-emerald-500" /> On-track</div>
                  <div className="flex items-center gap-1.5"><div className="w-2 h-2 rounded-full bg-orange-500" /> Behind</div>
                </div>
              </CardHeader>
              <CardContent className="p-8 h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={progressData}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                    <XAxis 
                      dataKey="name" 
                      axisLine={false} 
                      tickLine={false} 
                      tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }} 
                    />
                    <YAxis hide />
                    <Tooltip 
                      cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                      contentStyle={{ backgroundColor: '#0F1218', border: 'none', borderRadius: '12px' }}
                    />
                    <Bar dataKey="active" stackId="a" fill="hsl(var(--primary))" radius={[0, 0, 0, 0]} barSize={40} />
                    <Bar dataKey="onTrack" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} barSize={40} />
                    <Bar dataKey="behind" stackId="a" fill="#F59E0B" radius={[4, 4, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar Dashboard Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Actions */}
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-2xl">
              <h3 className="text-lg font-bold text-white mb-8">Quick Actions</h3>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Upload Content", icon: CloudUpload },
                  { label: "Add Question", icon: FilePlus },
                  { label: "Gen Report", icon: BarChart3 },
                  { label: "Send Alert", icon: ShieldAlert },
                  { label: "Export History", icon: History },
                ].map((action, i) => (
                  <button 
                    key={i} 
                    className={cn(
                      "flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-white/2 border border-white/5 hover:bg-white/5 hover:border-white/10 transition-all group",
                      i === 4 && "col-span-2"
                    )}
                  >
                    <action.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest group-hover:text-white">{action.label}</span>
                  </button>
                ))}
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-2xl">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white">Recent Activity</h3>
                <History className="w-4 h-4 text-muted-foreground opacity-50" />
              </div>
              <div className="space-y-8">
                {recentActivity.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-white">
                        {item.user} <span className="font-medium text-muted-foreground">{item.action}</span>
                      </p>
                      <p className="text-[10px] text-muted-foreground font-medium uppercase tracking-widest">{item.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
