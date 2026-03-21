"use client"

import { useState } from "react";
import { 
  Plus, 
  Search, 
  Filter, 
  Video, 
  FileText, 
  Presentation, 
  Download, 
  MoreVertical, 
  ChevronLeft, 
  ChevronRight,
  Database,
  Files,
  Archive,
  ChevronDown,
  Trash2,
  FileDown
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
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
import { cn } from "@/lib/utils";
import Link from "next/link";

const repositoryData = [
  {
    title: "Quantum Physics Intro.pdf",
    version: "Version 2.4",
    type: "PDF Document",
    typeIcon: FileText,
    typeColor: "text-red-400 bg-red-400/10",
    subject: "Physics",
    tags: [{ label: "SCIENCE", color: "bg-blue-500/10 text-blue-400" }, { label: "ADVANCED", color: "bg-white/5 text-muted-foreground" }],
    uploadDate: "Oct 12, 2023",
    size: "4.2 MB",
    status: "Active",
    statusColor: "bg-emerald-500"
  },
  {
    title: "Organic Chemistry Lecture 04",
    version: "4K Resolution",
    type: "Video MP4",
    typeIcon: Video,
    typeColor: "text-blue-400 bg-blue-400/10",
    subject: "Chemistry",
    tags: [{ label: "ORGANIC", color: "bg-blue-500/10 text-blue-400" }, { label: "LECTURE", color: "bg-white/5 text-muted-foreground" }],
    uploadDate: "Oct 10, 2023",
    size: "1.2 GB / 45:12",
    status: "Active",
    statusColor: "bg-emerald-500"
  },
  {
    title: "Macroeconomics Semester 1 Review",
    version: "Legacy Slides",
    type: "Presentation",
    typeIcon: Presentation,
    typeColor: "text-orange-400 bg-orange-400/10",
    subject: "Economics",
    tags: [{ label: "OLD CURRICULUM", color: "bg-white/5 text-muted-foreground" }],
    uploadDate: "Jun 15, 2022",
    size: "18.5 MB",
    status: "Archived",
    statusColor: "bg-muted-foreground/50"
  },
  {
    title: "Calculus II: Integration Techniques",
    version: "HD Stream",
    type: "Video MP4",
    typeIcon: Video,
    typeColor: "text-blue-400 bg-blue-400/10",
    subject: "Mathematics",
    tags: [{ label: "CALCULUS", color: "bg-blue-500/10 text-blue-400" }, { label: "WEEK 3", color: "bg-white/5 text-muted-foreground" }],
    uploadDate: "Oct 08, 2023",
    size: "850 MB / 32:40",
    status: "Active",
    statusColor: "bg-emerald-500"
  }
];

export default function ContentRepository() {
  const [showArchived, setShowArchived] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0C10] p-8 space-y-8 max-w-[1400px] mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight">Digital Content Repository</h1>
          <p className="text-muted-foreground font-medium">Centralized management for all your educational assets and learning materials.</p>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90 text-white h-11 px-6 rounded-xl font-bold uppercase tracking-widest text-[10px]">
          <Link href="/content/upload">
            <Plus className="w-4 h-4 mr-2" /> Upload New Content
          </Link>
        </Button>
      </div>

      {/* Filters Bar */}
      <Card className="bg-[#151921] border-none p-4 rounded-2xl shadow-xl space-y-4">
        <div className="flex flex-col xl:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by Title, Subject, or Tags..." 
              className="bg-[#0A0C10] border-none h-11 pl-12 text-sm focus-visible:ring-1 focus-visible:ring-primary/40"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2 w-full xl:w-auto">
            <Button variant="secondary" className="bg-[#0A0C10] hover:bg-white/5 border-none h-11 px-4 text-xs font-bold text-white gap-2">
              <Video className="w-4 h-4 text-primary" /> Videos <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
            <Button variant="secondary" className="bg-[#0A0C10] hover:bg-white/5 border-none h-11 px-4 text-xs font-bold text-white gap-2">
              <FileText className="w-4 h-4 text-red-400" /> PDFs <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
            <Button variant="secondary" className="bg-[#0A0C10] hover:bg-white/5 border-none h-11 px-4 text-xs font-bold text-white gap-2">
              <Presentation className="w-4 h-4 text-orange-400" /> PPTs <ChevronDown className="w-3 h-3 opacity-50" />
            </Button>
            <Button variant="secondary" className="bg-[#0A0C10] hover:bg-white/5 border-none h-11 px-4 text-xs font-bold text-white gap-2">
              <Filter className="w-4 h-4 opacity-50" /> More Filters
            </Button>
          </div>
        </div>
        <div className="flex items-center justify-between pt-2 border-t border-white/5">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Show archived content</span>
            <Switch checked={showArchived} onCheckedChange={setShowArchived} className="data-[state=checked]:bg-primary" />
          </div>
          <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Showing 10 of 254 entries</p>
        </div>
      </Card>

      {/* Repository Table */}
      <Card className="bg-[#151921] border-none overflow-hidden rounded-2xl shadow-2xl">
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 bg-white/5 hover:bg-transparent">
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground py-6 pl-8">Content Title</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Type</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Tags</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Upload Date</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Size / Dur.</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Status</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground text-center pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {repositoryData.map((item, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="pl-8 py-6">
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", item.typeColor)}>
                      <item.typeIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                      <p className="text-[10px] text-muted-foreground font-medium">{item.version}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-xs font-medium text-white opacity-80">{item.type}</TableCell>
                <TableCell className="text-xs font-bold text-white">{item.subject}</TableCell>
                <TableCell>
                  <div className="flex gap-1.5 flex-wrap">
                    {item.tags.map((tag, idx) => (
                      <Badge key={idx} className={cn("text-[8px] font-black tracking-widest px-2 py-0.5 border-none", tag.color)}>
                        {tag.label}
                      </Badge>
                    ))}
                  </div>
                </TableCell>
                <TableCell className="text-xs font-medium text-muted-foreground">{item.uploadDate}</TableCell>
                <TableCell className="text-xs font-medium text-muted-foreground">{item.size}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={cn("w-1.5 h-1.5 rounded-full", item.statusColor)} />
                    <span className="text-xs font-bold text-white opacity-80">{item.status}</span>
                  </div>
                </TableCell>
                <TableCell className="pr-8">
                  <div className="flex items-center justify-center gap-1">
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                      {item.status === 'Archived' ? <FileDown className="w-4 h-4" /> : <Download className="w-4 h-4" />}
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                      {item.status === 'Archived' ? <Trash2 className="w-4 h-4" /> : <MoreVertical className="w-4 h-4" />}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        
        {/* Pagination */}
        <div className="p-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/2">
          <div className="flex items-center gap-3">
            <span className="text-xs text-muted-foreground font-medium">Rows per page:</span>
            <Select defaultValue="10">
              <SelectTrigger className="bg-transparent border-none text-xs font-bold w-14 h-8 p-0 gap-1 focus:ring-0">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-[#151921] border-white/10 text-white">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-xs text-muted-foreground font-medium">1-10 of 254</span>
            <div className="flex items-center gap-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronLeft className="w-4 h-4" /></Button>
              <div className="flex items-center gap-1">
                <Button variant="secondary" className="h-8 w-8 bg-primary text-white font-bold text-xs p-0 border-none rounded-lg">1</Button>
                <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-bold text-xs p-0">2</Button>
                <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-bold text-xs p-0">3</Button>
                <span className="text-muted-foreground px-1">...</span>
                <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-bold text-xs p-0">26</Button>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </div>
      </Card>

      {/* Bottom Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-[#151921] border-none p-8 rounded-3xl shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Database className="w-6 h-6 text-primary" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Storage Used</p>
            <h3 className="text-2xl font-bold text-white">45.2 GB</h3>
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-3xl shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Files className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Total Assets</p>
            <h3 className="text-2xl font-bold text-white">1,284</h3>
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-3xl shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-orange-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Archive className="w-6 h-6 text-orange-500" />
          </div>
          <div className="space-y-1">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Archived Items</p>
            <h3 className="text-2xl font-bold text-white">42</h3>
          </div>
        </Card>
      </div>

      <footer className="pt-10 border-t border-white/5 flex items-center justify-center">
        <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">© 2023 Digital Content Repository • Educational LMS Platform</p>
      </footer>
    </div>
  );
}
