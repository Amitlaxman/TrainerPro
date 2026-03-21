"use client"

import { useState } from "react";
import { 
  CloudUpload, 
  FileText, 
  Video, 
  Search, 
  X, 
  CheckCircle2, 
  Lightbulb,
  ChevronDown,
  Trash2,
  Settings,
  Shield,
  FileBadge,
  Clock
} from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
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
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export default function UploadContent() {
  const [activeDifficulty, setActiveDifficulty] = useState("Easy");

  const recentUploads = [
    { title: "Cybersecurity_Basics.mp4", version: "v1.2", date: "Oct 24, 2023", status: "Active", icon: Video, color: "text-blue-400 bg-blue-400/10" },
    { title: "Security_Policy_v2.pdf", version: "v2.0", date: "Oct 20, 2023", status: "Active", icon: FileText, color: "text-red-400 bg-red-400/10" },
  ];

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground p-8 flex flex-col">
      <div className="max-w-[1440px] mx-auto w-full space-y-10 flex-1">
        {/* Header */}
        <div className="space-y-1">
          <h1 className="text-3xl font-bold text-white tracking-tight">Upload Content</h1>
          <p className="text-muted-foreground font-medium">Add new educational videos, presentations, or documents to the central repository.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-8">
            {/* Drop Zone */}
            <Card className="bg-[#151921] border-2 border-dashed border-white/10 p-12 rounded-[2rem] flex flex-col items-center justify-center text-center space-y-6 group hover:border-primary/40 transition-all">
              <div className="flex gap-4">
                <Video className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <CloudUpload className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
                <FileText className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Drag and drop files here</h3>
                <p className="text-sm text-muted-foreground">Supported formats: .mp4, .mov, .pdf, .ppt, .pptx</p>
              </div>
              <Button className="bg-primary hover:bg-primary/90 px-8 rounded-xl font-bold h-12 shadow-xl shadow-primary/20">
                Browse Files
              </Button>
            </Card>

            {/* Upload Progress */}
            <Card className="bg-[#151921] border-none p-6 rounded-2xl flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                <CloudUpload className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 space-y-3">
                <div className="flex justify-between items-center text-xs font-bold uppercase tracking-widest">
                  <span className="text-white">Cybersecurity_Basics.mp4</span>
                  <span className="text-primary">65%</span>
                </div>
                <Progress value={65} className="h-1.5 bg-white/5" />
                <p className="text-[10px] text-muted-foreground font-medium flex items-center gap-1.5">
                  <span className="w-1 h-1 rounded-full bg-muted-foreground" /> 3 minutes remaining
                </p>
              </div>
              <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                <X className="w-4 h-4" />
              </Button>
            </Card>

            {/* Content Metadata */}
            <Card className="bg-[#151921] border-none p-10 rounded-[2rem] shadow-xl space-y-10">
              <div className="flex items-center gap-3">
                <h2 className="text-xl font-bold text-white tracking-tight">Content Metadata</h2>
              </div>
              
              <div className="space-y-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Content Title</label>
                  <Input placeholder="e.g. Introduction to Network Security" className="bg-[#0A0C10] border-none h-14 text-sm font-medium focus-visible:ring-1 focus-visible:ring-primary/40 px-6" />
                </div>
                
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Description</label>
                  <Textarea 
                    placeholder="Briefly describe the contents of this file..."
                    className="bg-[#0A0C10] border-none min-h-[160px] text-sm font-medium resize-none p-6 focus-visible:ring-1 focus-visible:ring-primary/40"
                  />
                </div>

                <div className="pt-8 border-t border-white/5 space-y-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    <div className="w-1 h-1 rounded-full bg-primary" /> Video Options
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Video Duration</label>
                      <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                        <Input placeholder="00:00:00" className="bg-[#0A0C10] border-none h-12 pl-12 text-sm font-medium" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Custom Thumbnail</label>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-lg bg-[#0A0C10] overflow-hidden">
                          <img src="https://picsum.photos/seed/thumb/100/100" alt="thumb" className="object-cover w-full h-full opacity-40" />
                        </div>
                        <Button variant="secondary" className="bg-[#0A0C10] hover:bg-white/5 border-none h-12 px-6 text-xs font-bold text-white uppercase tracking-widest">
                          Upload Image
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-white/5 space-y-8">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">
                    <FileText className="w-3.5 h-3.5" /> Document Options (PDF/PPT)
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Page Count</label>
                      <p className="text-xl font-bold text-white opacity-20">—</p>
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Permissions</label>
                      <div className="flex p-1 bg-[#0A0C10] rounded-xl w-fit">
                        <button className="px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-lg bg-white/5 text-muted-foreground">View Only</button>
                        <button className="px-6 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-lg text-muted-foreground/30">Allow Download</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Bottom Ledger */}
            <Card className="bg-[#151921] border-none overflow-hidden rounded-[2rem] shadow-2xl">
              <div className="p-8 border-b border-white/5 flex items-center justify-between">
                <h3 className="text-lg font-bold text-white tracking-tight">Manage Content</h3>
                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Show Archived Content</span>
                  <Switch className="data-[state=checked]:bg-primary" />
                </div>
              </div>
              <Table>
                <TableHeader>
                  <TableRow className="border-white/5 bg-white/2 hover:bg-transparent uppercase">
                    <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground pl-8">File Name</TableHead>
                    <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Version</TableHead>
                    <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Upload Date</TableHead>
                    <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Status</TableHead>
                    <TableHead className="text-right pr-8"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentUploads.map((file, i) => (
                    <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                      <TableCell className="pl-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center", file.color)}>
                            <file.icon className="w-5 h-5" />
                          </div>
                          <span className="text-sm font-bold text-white">{file.title}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-xs font-medium text-muted-foreground">{file.version}</TableCell>
                      <TableCell className="text-xs font-medium text-muted-foreground">{file.date}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <span className="text-xs font-bold text-white">{file.status}</span>
                        </div>
                      </TableCell>
                      <TableCell className="text-right pr-8">
                        <div className="flex items-center justify-end gap-2">
                          <Button variant="ghost" size="sm" className="text-primary hover:text-white text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5">
                            <Settings className="w-3.5 h-3.5" /> Manage
                          </Button>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-6">
            <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-8">
              <h3 className="text-lg font-bold text-white tracking-tight">Tagging & Taxonomy</h3>
              
              <div className="space-y-6">
                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Subject Mapping</label>
                  <Select defaultValue="cyber">
                    <SelectTrigger className="bg-[#0A0C10] border-none h-12 text-sm font-medium">
                      <SelectValue placeholder="Select Subject" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="cyber">Cybersecurity</SelectItem>
                      <SelectItem value="compliance">Compliance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Smart Tags</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input placeholder="Add or search tags..." className="bg-[#0A0C10] border-none h-12 pl-10 text-sm font-medium" />
                  </div>
                  <div className="flex flex-wrap gap-2 pt-2">
                    {[
                      { label: "Security", color: "bg-primary/20 text-primary" },
                      { label: "Basics", color: "bg-primary/20 text-primary" },
                      { label: "Compliance", color: "bg-primary/20 text-primary" },
                    ].map((tag, i) => (
                      <Badge key={i} className={cn("px-3 py-1 font-bold text-[9px] uppercase tracking-widest border-none flex items-center gap-1.5", tag.color)}>
                        {tag.label} <X className="w-3 h-3 cursor-pointer opacity-50 hover:opacity-100" />
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Language Tags</label>
                  <Select>
                    <SelectTrigger className="bg-[#0A0C10] border-none h-12 text-sm font-medium">
                      <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="es">Spanish</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2.5">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Difficulty Level</label>
                  <div className="flex p-1 bg-[#0A0C10] rounded-xl">
                    {["Easy", "Medium", "Hard"].map((lvl) => (
                      <button
                        key={lvl}
                        onClick={() => setActiveDifficulty(lvl)}
                        className={cn(
                          "flex-1 py-2.5 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all",
                          activeDifficulty === lvl 
                            ? "bg-white/10 text-white shadow-xl" 
                            : "text-muted-foreground/30 hover:text-muted-foreground"
                        )}
                      >
                        {lvl}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>

            <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest">Manage Content</h3>
                <div className="flex items-center gap-2">
                  <span className="text-[8px] font-bold text-muted-foreground uppercase">Show Archived</span>
                  <Switch className="scale-75 data-[state=checked]:bg-primary" />
                </div>
              </div>
              <div className="space-y-4">
                {recentUploads.map((file, i) => (
                  <div key={i} className="flex items-center gap-3 group cursor-pointer">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105", file.color)}>
                      <file.icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-bold text-white truncate group-hover:text-primary transition-colors">{file.title}</p>
                    </div>
                    <MoreVertical className="w-4 h-4 text-muted-foreground opacity-30" />
                  </div>
                ))}
              </div>
            </Card>

            <Card className="bg-primary/5 border border-primary/10 p-8 rounded-[2rem] space-y-4">
              <div className="flex items-center gap-3 text-primary">
                <Lightbulb className="w-5 h-5" />
                <h3 className="text-xs font-bold uppercase tracking-widest">Pro Tip</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed font-medium">
                Accurate metadata and tagging increase content discoverability by 45%. Take a moment to ensure subjects are mapped correctly.
              </p>
            </Card>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <footer className="mt-12 pt-8 border-t border-white/5 flex items-center justify-end gap-6 max-w-[1440px] mx-auto w-full pb-8">
        <Button variant="ghost" asChild className="text-muted-foreground hover:text-white font-bold text-xs uppercase tracking-widest">
          <Link href="/content">Cancel</Link>
        </Button>
        <Button className="bg-primary hover:bg-primary/90 h-14 px-10 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 flex items-center gap-3">
          <Shield className="w-4 h-4" /> Save Content
        </Button>
      </footer>
    </div>
  );
}
