"use client"

import { useState } from "react";
import { 
  BarChart3, 
  Search, 
  Bell, 
  HelpCircle, 
  ChevronDown, 
  Calendar as CalendarIcon,
  TrendingUp,
  Users,
  Award,
  CheckCircle2,
  MoreHorizontal,
  Star
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
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
import { cn } from "@/lib/utils";

const completionData = [
  { name: 'Week 1', value: 45 },
  { name: 'Week 2', value: 52 },
  { name: 'Week 3', value: 38 },
  { name: 'Week 4', value: 65 },
  { name: 'Week 5', value: 48 },
  { name: 'Week 6', value: 72 },
  { name: 'Week 7', value: 55 },
  { name: 'Week 8', value: 85 },
  { name: 'Week 9', value: 62 },
  { name: 'Week 10', value: 58 },
  { name: 'Week 11', value: 68 },
];

const departments = [
  { name: "Engineering", score: 92 },
  { name: "Sales & Marketing", score: 84 },
  { name: "Human Resources", score: 89 },
  { name: "Operations", score: 78 },
  { name: "Product Design", score: 95 },
];

const topPerformers = [
  { name: "Alex Rivera", dept: "Logistics", score: 98, courses: 12, id: "1" },
  { name: "Sarah Chen", dept: "Front Desk", score: 96, courses: 15, id: "2" },
  { name: "Elena Gilbert", dept: "Tech Ops", score: 95, courses: 10, id: "3" },
  { name: "Marcus Thorne", dept: "Logistics", score: 94, courses: 11, id: "4" },
];

export default function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState("3M");

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground p-8 space-y-8">
      {/* Top Header Section */}
      <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-4xl font-bold text-primary tracking-tight">Training Analytics Report</h1>
          <p className="text-muted-foreground font-medium">Real-time insights and performance tracking across the organization.</p>
        </div>

        {/* Filters Card */}
        <Card className="bg-[#151921] border-none shadow-xl rounded-2xl p-2 flex flex-wrap items-center gap-2">
          <div className="flex p-1 bg-secondary/50 rounded-xl mr-4">
            {["1W", "1M", "3M", "1Y"].map((range) => (
              <button
                key={range}
                onClick={() => setTimeRange(range)}
                className={cn(
                  "px-4 py-2 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                  timeRange === range ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground hover:text-white"
                )}
              >
                {range}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2 pr-4 border-r border-white/5">
            <div className="space-y-1">
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Client:</p>
              <Select defaultValue="all">
                <SelectTrigger className="bg-transparent border-none h-8 text-xs font-bold p-0 gap-2 focus:ring-0">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Branch:</p>
              <Select defaultValue="all">
                <SelectTrigger className="bg-transparent border-none h-8 text-xs font-bold p-0 gap-2 focus:ring-0">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-1">
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Site:</p>
              <Select defaultValue="all">
                <SelectTrigger className="bg-transparent border-none h-8 text-xs font-bold p-0 gap-2 focus:ring-0">
                  <SelectValue placeholder="All" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="all">All</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center gap-3 pl-2">
            <div className="text-right">
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none">Oct 2023</p>
              <p className="text-[8px] font-bold text-muted-foreground uppercase tracking-widest leading-none mt-0.5">- Dec 2023</p>
            </div>
            <div className="p-2 bg-white/5 rounded-lg">
              <CalendarIcon className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </Card>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Overall Pass Rate</p>
            <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl font-bold text-white">88.4%</h3>
            <span className="text-xs font-bold text-emerald-500 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +2.1%
            </span>
          </div>
          <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500" style={{ width: '88.4%' }} />
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Score Improvement</p>
            <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-primary" />
            </div>
          </div>
          <div className="flex items-baseline gap-3">
            <h3 className="text-4xl font-bold text-white">+12.5%</h3>
            <span className="text-xs font-bold text-emerald-500 flex items-center">
              <TrendingUp className="w-3 h-3 mr-1" /> +1.5%
            </span>
          </div>
          <p className="text-[10px] text-muted-foreground font-medium leading-relaxed">
            Average gain from pre-test to post-test
          </p>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Active Learners</p>
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center">
              <Users className="w-4 h-4 text-accent" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <h3 className="text-4xl font-bold text-white">1,248</h3>
            <div className="text-[10px] text-muted-foreground font-medium">
              <p>Total across</p>
              <p>sites</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold text-accent uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
            92% active this month
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-6">
          <div className="flex items-center justify-between">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Top Course</p>
            <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Star className="w-4 h-4 text-orange-500" />
            </div>
          </div>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Cybersecurity 101</h3>
            <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">
              482 enrollments
            </p>
          </div>
          <Button variant="outline" className="w-full border-white/10 bg-white/5 hover:bg-white/10 text-[10px] font-bold uppercase tracking-widest h-10 rounded-xl text-white">
            View Course Details
          </Button>
        </Card>
      </div>

      {/* Main Charts Row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Completion Trends Bar Chart */}
        <Card className="xl:col-span-2 bg-[#151921] border-none p-10 rounded-[2.5rem] shadow-2xl overflow-hidden relative">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-xl font-bold text-white tracking-tight">Training Completion Trends</h3>
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
              <MoreHorizontal className="w-5 h-5" />
            </Button>
          </div>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={completionData} margin={{ top: 0, right: 0, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 700 }}
                  dy={15}
                />
                <YAxis hide domain={[0, 100]} />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#0F1218', border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                />
                <Bar dataKey="value" radius={[6, 6, 0, 0]} barSize={45}>
                  {completionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 7 ? 'hsl(var(--primary))' : 'rgba(59, 130, 246, 0.4)'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Avg Scores by Department */}
        <Card className="bg-[#151921] border-none p-10 rounded-[2.5rem] shadow-2xl flex flex-col justify-between">
          <h3 className="text-xl font-bold text-white tracking-tight mb-8">Avg. Scores by Department</h3>
          <div className="space-y-10">
            {departments.map((dept) => (
              <div key={dept.name} className="space-y-3">
                <div className="flex justify-between items-center text-[11px] font-bold uppercase tracking-widest">
                  <span className="text-muted-foreground">{dept.name}</span>
                  <span className="text-white opacity-40">{dept.score}%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary" 
                    style={{ width: `${dept.score}%` }} 
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 xl:grid-cols-5 gap-8">
        {/* Engagement by Time */}
        <Card className="xl:col-span-2 bg-[#151921] border-none p-10 rounded-[2.5rem] shadow-2xl">
          <h3 className="text-xl font-bold text-white tracking-tight mb-10">Engagement by Time of Day</h3>
          <div className="space-y-8">
            <div className="flex justify-between text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
            <div className="grid grid-cols-7 gap-3 h-[200px] items-end">
              {Array.from({ length: 7 }).map((_, i) => (
                <div 
                  key={i} 
                  className={cn(
                    "w-full rounded-xl bg-primary/20 hover:bg-primary/40 transition-all cursor-pointer",
                    i === 2 ? "h-full bg-primary/60" : 
                    i === 3 ? "h-[70%]" : 
                    i === 4 ? "h-[85%]" : 
                    "h-[40%]"
                  )} 
                />
              ))}
            </div>
            <div className="flex justify-between items-center pt-4 border-t border-white/5">
              <span className="text-[10px] font-bold text-muted-foreground uppercase">8 AM</span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase">Peak Hour: 11 AM</span>
              <span className="text-[10px] font-bold text-muted-foreground uppercase">8 PM</span>
            </div>
          </div>
        </Card>

        {/* Top Performing Employees */}
        <Card className="xl:col-span-3 bg-[#151921] border-none overflow-hidden rounded-[2.5rem] shadow-2xl">
          <div className="p-10 pb-4">
            <h3 className="text-xl font-bold text-white tracking-tight mb-8">Top Performing Employees</h3>
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 hover:bg-transparent uppercase">
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Employee</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Dept</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Avg. Score</TableHead>
                  <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-right">Courses</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topPerformers.map((person) => (
                  <TableRow key={person.id} className="border-white/5 hover:bg-white/5 transition-colors">
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8 border border-white/10">
                          <AvatarImage src={`https://picsum.photos/seed/${person.id}/100/100`} />
                          <AvatarFallback>{person.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-white">{person.name}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground font-medium">{person.dept}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                          <div className="h-full bg-primary" style={{ width: `${person.score}%` }} />
                        </div>
                        <span className="text-xs font-bold text-white">{person.score}%</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-right text-xs font-bold text-white">{person.courses}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="p-6 bg-white/5 border-t border-white/5 text-center">
            <button className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] hover:underline">
              View All Employees
            </button>
          </div>
        </Card>
      </div>

      {/* Footer Branding */}
      <footer className="pt-10 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-30 border-t border-white/5">
        <div className="flex items-center gap-2">
          <BarChart3 className="w-3 h-3" />
          Analytics Dashboard v3.2
        </div>
        <div>All data is real-time and synced across sites</div>
      </footer>
    </div>
  );
}
