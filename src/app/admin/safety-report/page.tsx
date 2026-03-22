"use client"

import { 
  ShieldCheck, 
  Bell, 
  MapPin, 
  Share2, 
  FileDown, 
  TrendingUp, 
  Users, 
  AlertTriangle, 
  Search,
  Settings,
  History,
  Activity,
  Database,
  CheckCircle2,
  Download,
  Plus,
  Calendar
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
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
import Link from "next/link";

const scoreDistribution = [
  { name: 'OPS', value: 85 },
  { name: 'LAB', value: 65 },
  { name: 'ENG', value: 90 },
  { name: 'HR', value: 75 },
  { name: 'LOG', value: 80 },
];

const gapTopics = [
  { title: "Emergency Evacuation Protocol", score: 64, action: "RE-TRAIN REQUIRED", color: "text-orange-500 bg-orange-500/10" },
  { title: "Chemical Waste Management", score: 68, action: "REVIEW MATERIALS", color: "text-blue-400 bg-blue-400/10" },
  { title: "Personal Protective Equipment", score: 72, action: "MONITOR", color: "text-muted-foreground bg-white/5" },
];

export default function SafetyReadinessReport() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col font-body">
      <main className="flex-1 p-12 max-w-[1440px] mx-auto w-full space-y-12">
        {/* Breadcrumb & Header Action */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-primary">
              <MapPin className="w-3 h-3" /> MAIN CAMPUS • SECTOR A
            </div>
            <div className="space-y-2">
              <h1 className="text-5xl font-black text-white tracking-tighter">Safety Readiness Report</h1>
              <p className="text-muted-foreground font-medium max-w-2xl text-lg leading-relaxed">
                Comprehensive real-time site compliance metrics and risk assessment overview for corporate health and safety auditing.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <Button variant="secondary" className="bg-white/5 border-none h-14 px-8 text-xs font-black uppercase tracking-widest text-white hover:bg-white/10">
              <Share2 className="w-4 h-4 mr-2" /> Share
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 h-14 px-8 text-xs font-black uppercase tracking-widest text-white shadow-2xl shadow-blue-600/20">
              <FileDown className="w-4 h-4 mr-2" /> Export PDF
            </Button>
          </div>
        </div>

        {/* Top KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-[#151921]/50 border-none p-10 rounded-[2.5rem] shadow-2xl group overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Overall Readiness</p>
              <div className="p-2.5 bg-blue-600/10 rounded-xl">
                <Activity className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="space-y-6">
              <div className="flex items-baseline gap-3">
                <h3 className="text-6xl font-black text-white">92%</h3>
                <span className="text-sm font-bold text-emerald-500 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1" /> +2.4%
                </span>
              </div>
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[92%] transition-all duration-1000" />
              </div>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl" />
          </Card>

          <Card className="bg-[#151921]/50 border-none p-10 rounded-[2.5rem] shadow-2xl group overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Active Trainees</p>
              <div className="p-2.5 bg-blue-600/10 rounded-xl">
                <Users className="w-5 h-5 text-blue-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-6xl font-black text-white">1,240</h3>
                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest">Stable</span>
              </div>
              <p className="text-xs text-muted-foreground font-medium">98% Completion rate this month</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-blue-600/5 rounded-full blur-3xl" />
          </Card>

          <Card className="bg-[#151921]/50 border-none p-10 rounded-[2.5rem] shadow-2xl group overflow-hidden relative">
            <div className="flex items-center justify-between mb-8">
              <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">Compliance Gaps</p>
              <div className="p-2.5 bg-orange-500/10 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-orange-500" />
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-3">
                <h3 className="text-6xl font-black text-white">8</h3>
                <span className="text-sm font-bold text-orange-500 flex items-center">
                  <TrendingUp className="w-4 h-4 mr-1 rotate-180" /> -12%
                </span>
              </div>
              <p className="text-xs text-muted-foreground font-medium">Decreased from 14 last period</p>
            </div>
            <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-orange-500/5 rounded-full blur-3xl" />
          </Card>
        </div>

        {/* Gap Analysis Section */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Column: Topic List */}
          <Card className="xl:col-span-5 bg-[#151921]/50 border-none rounded-[2.5rem] overflow-hidden shadow-2xl">
            <div className="p-8 border-b border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Activity className="w-5 h-5 text-blue-500" />
                <h2 className="text-xl font-bold text-white tracking-tight">Topic Gap Analysis</h2>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">Performance &lt; 75%</span>
            </div>
            <div className="p-0">
              <div className="grid grid-cols-3 p-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 border-b border-white/5">
                <div className="pl-4">Low-Score Topics</div>
                <div className="text-center">Avg. Score</div>
                <div className="text-right pr-4">Action Required</div>
              </div>
              <div className="divide-y divide-white/5">
                {gapTopics.map((topic, i) => (
                  <div key={i} className="grid grid-cols-3 p-8 items-center group hover:bg-white/2 transition-colors">
                    <div className="text-sm font-bold text-white pl-4 leading-tight">{topic.title}</div>
                    <div className="flex flex-col items-center gap-2">
                      <span className="text-sm font-black text-orange-500">{topic.score}%</span>
                      <div className="h-1.5 w-16 bg-white/5 rounded-full overflow-hidden">
                        <div className="h-full bg-orange-500 rounded-full" style={{ width: `${topic.score}%` }} />
                      </div>
                    </div>
                    <div className="flex justify-end pr-4">
                      <Badge className={cn("text-[8px] font-black tracking-widest px-3 py-1 border-none", topic.color)}>
                        {topic.action}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Right Column: Chart */}
          <Card className="xl:col-span-7 bg-[#151921]/50 border-none p-10 rounded-[2.5rem] shadow-2xl">
            <div className="mb-10 space-y-1">
              <h2 className="text-xl font-bold text-white tracking-tight">Score Distribution</h2>
              <p className="text-xs text-muted-foreground font-medium">Performance by department across all monitored modules</p>
            </div>
            <div className="h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={scoreDistribution}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.02)" />
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 10, fontWeight: 800 }} 
                    dy={10}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip 
                    cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                    contentStyle={{ backgroundColor: '#0F1218', border: 'none', borderRadius: '16px', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}
                  />
                  <Bar dataKey="value" radius={[8, 8, 0, 0]} barSize={60}>
                    {scoreDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={index === 2 ? '#3B82F6' : 'rgba(255,255,255,0.05)'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </Card>
        </div>

        {/* Scheduled Summaries Section */}
        <Card className="bg-[#151921]/30 border border-white/5 p-10 rounded-[3rem] shadow-2xl space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-500" />
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-bold text-white tracking-tight">Scheduled Compliance Summaries</h2>
                <p className="text-sm text-muted-foreground font-medium">Automate your reporting workflow to stay ahead of audit cycles.</p>
              </div>
            </div>
            <Button className="bg-blue-600/10 text-blue-400 border border-blue-600/20 hover:bg-blue-600/20 h-12 px-8 rounded-2xl text-[10px] font-black uppercase tracking-widest">
              <Plus className="w-4 h-4 mr-2" /> Add New Schedule
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-[#0A0C10] border-none p-8 rounded-[2rem] flex items-center justify-between group hover:ring-1 hover:ring-white/10 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-blue-600/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Database className="w-6 h-6 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Monthly Site Overview</h3>
                  <p className="text-xs text-muted-foreground font-medium">Sent every 1st at 08:00 AM</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </Card>

            <Card className="bg-[#0A0C10] border-none p-8 rounded-[2rem] flex items-center justify-between group hover:ring-1 hover:ring-white/10 transition-all">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <AlertTriangle className="w-6 h-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Critical Gaps Alert</h3>
                  <p className="text-xs text-muted-foreground font-medium">Real-time alerts for scores &lt; 50%</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Switch defaultChecked className="data-[state=checked]:bg-blue-600" />
                <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-white">
                  <Settings className="w-5 h-5" />
                </Button>
              </div>
            </Card>
          </div>
        </Card>

        {/* Footer Branding */}
        <footer className="pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="p-2.5 bg-white/5 rounded-xl">
              <History className="w-5 h-5" />
            </div>
            <p className="text-[10px] font-black uppercase tracking-[0.2em]">Last Update: Oct 24, 2023 14:32:01</p>
          </div>
          
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.4)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">System Online</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.4)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">14 Sensors active</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_15px_rgba(96,165,250,0.4)]" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Database Synced</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}