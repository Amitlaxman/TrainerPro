"use client"

import { 
  ArrowLeft, 
  Download, 
  FileDown, 
  MapPin, 
  Users, 
  TrendingUp, 
  CheckCircle2, 
  Smile,
  Image as ImageIcon,
  BookOpen,
  Search,
  ChevronLeft,
  ChevronRight,
  MessageSquare,
  Upload,
  MoreVertical,
  Verified
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend,
  Cell
} from 'recharts';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const growthData = [
  { name: 'TYPOGRAPHY', pre: 40, post: 75 },
  { name: 'GRID SYSTEMS', pre: 35, post: 70 },
  { name: 'COLOR THEORY', pre: 50, post: 85 },
  { name: 'HIERARCHY', pre: 30, post: 88 },
];

const attendees = [
  { name: "Johnathan Smith", id: "TG-1004", status: "Present", pre: "65%", post: "92%", gain: "+27%", color: "text-emerald-500" },
  { name: "Sarah Jenkins", id: "TG-1008", status: "Late", pre: "72%", post: "88%", gain: "+16%", color: "text-emerald-500" },
  { name: "Michael Ross", id: "TG-1021", status: "Absent", pre: "-", post: "-", gain: "-", color: "text-muted-foreground" },
  { name: "Anita Sharma", id: "TG-1045", status: "Present", pre: "40%", post: "58%", gain: "+18%", color: "text-emerald-500" },
  { name: "David Miller", id: "TG-1052", status: "Present", pre: "80%", post: "75%", gain: "-5%", color: "text-destructive" },
];

export default function SessionDetails() {
  const gallery = [
    PlaceHolderImages.find(img => img.id === "gallery-1")?.imageUrl,
    PlaceHolderImages.find(img => img.id === "gallery-2")?.imageUrl,
    PlaceHolderImages.find(img => img.id === "gallery-3")?.imageUrl,
    PlaceHolderImages.find(img => img.id === "gallery-4")?.imageUrl,
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground p-8 space-y-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4">
          <nav className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
            <Link href="/schedule" className="hover:text-primary transition-colors">Training Archive</Link>
            <span>/</span>
            <span className="text-primary/80">Session Details</span>
          </nav>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h1 className="text-3xl font-bold text-white tracking-tight">Advanced UI Design Principles</h1>
              <Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20 text-[10px] uppercase font-bold tracking-widest">Completed</Badge>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="text-primary/70"># SES-90210</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>Oct 24, 2023</span>
              <span className="w-1 h-1 rounded-full bg-white/10" />
              <span>09:00 AM - 11:00 AM</span>
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-[#151921] border-white/5 hover:bg-white/5 h-11 px-6 text-xs font-bold uppercase tracking-wider">
            <FileDown className="w-4 h-4 mr-2" /> Export Data (CSV)
          </Button>
          <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20 h-11 px-6 text-xs font-bold uppercase tracking-wider">
            <Download className="w-4 h-4 mr-2" /> Download Report (PDF)
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: "Total Attendees", value: "12", sub: "/ 15", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
          { label: "Average Score", value: "88%", icon: TrendingUp, color: "text-emerald-500", bg: "bg-emerald-500/10" },
          { label: "Attendance Rate", value: "80%", icon: CheckCircle2, color: "text-orange-500", bg: "bg-orange-500/10" },
          { label: "Feedback Rating", value: "4.8", sub: "/ 5.0", icon: Smile, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        ].map((stat, i) => (
          <Card key={i} className="bg-[#151921] border-none p-6 flex items-center justify-between group">
            <div className="space-y-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{stat.label}</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold text-white">{stat.value}</span>
                {stat.sub && <span className="text-sm text-muted-foreground font-medium">{stat.sub}</span>}
              </div>
            </div>
            <div className={`p-3 rounded-xl ${stat.bg} group-hover:scale-110 transition-transform`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
          </Card>
        ))}
      </div>

      {/* Chart Section */}
      <Card className="bg-[#151921] border-none p-8">
        <div className="flex items-center justify-between mb-8">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-primary" />
              <h3 className="text-xl font-bold text-white">Assessment Growth Analysis</h3>
            </div>
            <p className="text-xs text-muted-foreground">Comparison between initial knowledge level and final session outcome</p>
          </div>
          <div className="flex items-center gap-6 text-[10px] font-bold uppercase tracking-wider">
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-white/10" /> Pre-Assessment (Avg)</div>
            <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-primary" /> Post-Assessment (Avg)</div>
          </div>
        </div>
        <div className="h-[300px] w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData} barGap={12}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.03)" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10, fontWeight: 700 }} 
                dy={12}
              />
              <YAxis hide domain={[0, 100]} />
              <Tooltip 
                cursor={{ fill: 'rgba(255,255,255,0.02)' }}
                contentStyle={{ backgroundColor: '#0F1218', border: 'none', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
              />
              <Bar dataKey="pre" fill="rgba(255,255,255,0.1)" radius={[4, 4, 0, 0]} barSize={40} />
              <Bar dataKey="post" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} barSize={40} />
            </BarChart>
          </ResponsiveContainer>
          <div className="absolute right-0 top-0 p-4 bg-primary/10 rounded-2xl border border-primary/20 backdrop-blur-md">
            <p className="text-[10px] font-bold text-primary uppercase tracking-widest text-center mb-1">Average Growth</p>
            <div className="flex items-center gap-2 justify-center">
              <span className="text-2xl font-bold text-white">+34%</span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>
          </div>
        </div>
      </Card>

      {/* Info Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Session Info */}
        <Card className="bg-[#151921] border-none p-8 space-y-8">
          <div className="flex items-center gap-2 text-primary">
            <BookOpen className="w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Session Information</h3>
          </div>
          <div className="space-y-6">
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Training Mode</label>
              <div className="flex items-center gap-2 text-white font-semibold">
                <BookOpen className="w-4 h-4 text-primary" /> Physical (Classroom)
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Location</label>
              <div className="space-y-1">
                <p className="text-white font-semibold">Main Campus, Room 402</p>
                <button className="text-[10px] font-bold text-primary uppercase hover:underline">View on Map</button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Trainer</label>
              <div className="flex items-center gap-2 text-white font-semibold">
                Jane Doe <Verified className="w-4 h-4 text-primary fill-primary/10" />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Client & Branch</label>
              <div className="space-y-0.5">
                <p className="text-white font-semibold">TechGlobal Corp</p>
                <p className="text-xs text-muted-foreground">Mumbai West Branch</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Gallery */}
        <Card className="bg-[#151921] border-none p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-primary">
              <ImageIcon className="w-5 h-5" />
              <h3 className="text-xl font-bold text-white">Session Gallery</h3>
            </div>
            <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-2 gap-3">
            {gallery.map((img, i) => (
              <div key={i} className="aspect-[4/3] rounded-xl overflow-hidden relative group cursor-pointer">
                <img src={img} alt={`Gallery ${i}`} className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" />
                {i === 3 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-xs font-bold text-white">+5 More</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          <Button variant="outline" className="w-full border-white/5 bg-transparent hover:bg-white/5 rounded-xl h-12 text-[10px] font-bold uppercase tracking-widest text-muted-foreground hover:text-white border-dashed">
            <Upload className="w-4 h-4 mr-2" /> Upload New Photos
          </Button>
        </Card>

        {/* Executive Summary */}
        <Card className="bg-[#151921] border-none p-8 space-y-6">
          <div className="flex items-center gap-2 text-primary">
            <MessageSquare className="w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Executive Summary</h3>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
            <p className="text-sm text-muted-foreground leading-relaxed">
              The advanced session on UI design principles was highly successful with 80% attendance. Trainees showed significant improvement in typography and layout composition. Key takeaways included the mastery of responsive grid systems and hierarchy patterns. Client stakeholders reported immediate implementation of learnings in current project sprints.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              <Badge className="bg-primary/10 text-primary border-none text-[10px] px-3 py-1 font-bold">UI Patterns</Badge>
              <Badge className="bg-primary/10 text-primary border-none text-[10px] px-3 py-1 font-bold">Visual Hierarchy</Badge>
            </div>
          </div>
        </Card>
      </div>

      {/* Attendee Ledger */}
      <Card className="bg-[#151921] border-none overflow-hidden">
        <div className="p-8 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-primary">
            <Users className="w-5 h-5" />
            <h3 className="text-xl font-bold text-white">Attendee Ledger</h3>
          </div>
          <div className="relative w-full md:w-[320px]">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input placeholder="Search by name or employee ID..." className="pl-10 bg-[#0F1218] border-none h-11 focus-visible:ring-primary/30" />
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground pl-8">Employee Name</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ID</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Pre-Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Post-Score</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Knowledge Gain</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center pr-8">Feedback</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {attendees.map((a, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="font-semibold text-white pl-8 py-5">{a.name}</TableCell>
                <TableCell className="text-xs text-muted-foreground">{a.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      a.status === 'Present' ? 'bg-emerald-500' : 
                      a.status === 'Late' ? 'bg-orange-500' : 'bg-destructive'
                    }`} />
                    <span className="text-xs font-medium text-white">{a.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-xs text-muted-foreground">{a.pre}</TableCell>
                <TableCell className="text-xs font-bold text-white">{a.post}</TableCell>
                <TableCell className={`text-xs font-bold ${a.color}`}>{a.gain}</TableCell>
                <TableCell className="text-center pr-8">
                  <button className="p-2 hover:bg-primary/10 rounded-lg transition-colors text-primary">
                    <MessageSquare className="w-4 h-4" />
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="p-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex gap-3">
            <Button variant="secondary" className="bg-white/5 border-none h-10 px-6 text-[10px] font-bold uppercase tracking-widest">
              View Full Result Chart
            </Button>
            <Button variant="secondary" className="bg-white/5 border-none h-10 px-6 text-[10px] font-bold uppercase tracking-widest">
              View All Feedback
            </Button>
          </div>
          <div className="flex items-center gap-6">
            <p className="text-xs text-muted-foreground">Showing <span className="text-white font-bold">5</span> of <span className="text-white font-bold">15</span> records</p>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronLeft className="w-4 h-4" /></Button>
              <Button variant="secondary" className="h-8 w-8 bg-primary/20 text-primary font-bold text-xs p-0 border border-primary/20">1</Button>
              <Button variant="ghost" className="h-8 w-8 text-muted-foreground text-xs p-0">2</Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Footer Branding */}
      <footer className="pt-8 flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-muted-foreground opacity-50 border-t border-white/5">
        <div className="flex items-center gap-2">
          <BookOpen className="w-3 h-3" />
          LMSADMIN V2.4
        </div>
        <div>SYSTEM STATUS: ALL SYSTEMS OPERATIONAL</div>
      </footer>
    </div>
  );
}
