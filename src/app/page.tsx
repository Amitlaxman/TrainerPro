"use client"

import { 
  TrendingUp, 
  Users, 
  Award, 
  Clock, 
  AlertTriangle,
  ArrowRight,
  CheckCircle2,
  Calendar,
  MoreVertical,
  Search,
  ChevronDown
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell
} from 'recharts';
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const stats = [
  { label: "Total Trained", value: "1,284", change: "+12%", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
  { label: "Avg. Score", value: "88%", change: "+3.2%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { label: "Certifications", value: "412", change: "+24", icon: Award, color: "text-purple-500", bg: "bg-purple-500/10" },
  { label: "Compliance", value: "94.2%", change: "-0.5%", icon: CheckCircle2, color: "text-orange-500", bg: "bg-orange-500/10" },
];

const completionData = [
  { name: 'Jan', value: 65 },
  { name: 'Feb', value: 72 },
  { name: 'Mar', value: 85 },
  { name: 'Apr', value: 78 },
  { name: 'May', value: 90 },
  { name: 'Jun', value: 95 },
];

const departmentData = [
  { name: 'Logistics', score: 85, fill: 'hsl(var(--primary))' },
  { name: 'Patrol', score: 78, fill: 'hsl(var(--accent))' },
  { name: 'Front Desk', score: 92, fill: 'hsl(var(--primary))' },
  { name: 'Internal', score: 65, fill: 'hsl(var(--accent))' },
  { name: 'Tech', score: 88, fill: 'hsl(var(--primary))' },
];

const recentActivity = [
  { id: 1, user: "Alex Rivera", action: "Completed Emergency Response", time: "2h ago", status: "success" },
  { id: 2, user: "Sarah Chen", action: "Assigned Surveillance II", time: "4h ago", status: "assigned" },
  { id: 3, user: "Mike Johnson", action: "Failed Compliance Quiz", time: "5h ago", status: "error" },
  { id: 4, user: "Elena Gilbert", action: "Certificate Renewed", time: "1d ago", status: "success" },
];

export default function Dashboard() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline text-white">Dashboard Overview</h1>
          <p className="text-muted-foreground mt-1">Welcome back, Trainer. Here's what's happening today.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search records..." className="pl-9 w-[240px] bg-secondary border-none" />
          </div>
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button className="bg-primary hover:bg-primary/90">
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

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="border-none shadow-sm bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg ${stat.bg}`}>
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="bg-white/5 border-none text-xs font-medium">
                  {stat.change}
                </Badge>
              </div>
              <div>
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold text-white mt-1">{stat.value}</h3>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2 bg-card/50 border-none">
          <CardHeader>
            <CardTitle className="text-lg">Training Completion Trend</CardTitle>
            <CardDescription>Performance trends over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={completionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} 
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }} 
                />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#191D24', border: 'none', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.5)' }}
                  itemStyle={{ color: '#fff' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: 'hsl(var(--primary))', strokeWidth: 2, stroke: '#191D24' }} 
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-none">
          <CardHeader>
            <CardTitle className="text-lg">Compliance Alert</CardTitle>
            <CardDescription>Critical updates required</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/20 flex gap-4">
              <AlertTriangle className="w-5 h-5 text-destructive shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">12 Overdue Certifications</p>
                <p className="text-xs text-muted-foreground mt-1">First Aid renewal expired for Shift A teams.</p>
                <Button variant="link" size="sm" className="p-0 h-auto text-destructive text-xs mt-2">Take Action</Button>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/20 flex gap-4">
              <Clock className="w-5 h-5 text-orange-500 shrink-0" />
              <div>
                <p className="text-sm font-semibold text-white">Upcoming Expirations</p>
                <p className="text-xs text-muted-foreground mt-1">8 guard profiles expire in 14 days.</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card/50 border-none">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-lg">Recent Activity</CardTitle>
              <CardDescription>Track real-time progress</CardDescription>
            </div>
            <Button variant="ghost" size="sm" className="text-xs">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {recentActivity.map((item) => (
                <div key={item.id} className="flex items-center justify-between group">
                  <div className="flex items-center gap-4">
                    <div className={`w-2 h-2 rounded-full ${
                      item.status === 'success' ? 'bg-emerald-500' : 
                      item.status === 'error' ? 'bg-destructive' : 'bg-primary'
                    }`} />
                    <div>
                      <p className="text-sm font-semibold text-white">{item.user}</p>
                      <p className="text-xs text-muted-foreground">{item.action}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-[10px] uppercase font-bold tracking-wider text-muted-foreground">{item.time}</p>
                    <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card/50 border-none">
          <CardHeader>
            <CardTitle className="text-lg">Departmental Progress</CardTitle>
            <CardDescription>Completion rates by unit</CardDescription>
          </CardHeader>
          <CardContent className="h-[250px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={departmentData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.05)" />
                <XAxis type="number" hide />
                <YAxis 
                  dataKey="name" 
                  type="category" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: 'rgba(255,255,255,0.6)', fontSize: 12 }} 
                />
                <Tooltip 
                  cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                  contentStyle={{ backgroundColor: '#191D24', border: 'none', borderRadius: '8px' }}
                />
                <Bar dataKey="score" radius={[0, 4, 4, 0]} barSize={20}>
                  {departmentData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
