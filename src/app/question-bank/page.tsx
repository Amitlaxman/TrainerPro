"use client"

import { useState } from "react";
import { 
  Search, 
  Plus, 
  Bell, 
  Archive, 
  Download, 
  Pencil, 
  ChevronLeft, 
  ChevronRight, 
  ChevronDown,
  BarChart3,
  Database,
  ShieldCheck
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
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
import { cn } from "@/lib/utils";

const questions = [
  {
    id: "#QB-20451",
    stem: "Calculate the...",
    tags: ["Calculus", "Derivatives"],
    subject: "Mathematics",
    difficulty: "MEDIUM",
    difficultyColor: "text-orange-500 bg-orange-500/10",
    type: "Single Choice",
    pts: "5.0",
    updated: "Oct 24, 2023"
  },
  {
    id: "#QB-19882",
    stem: "Identify all valid...",
    tags: ["Python", "CS-Intro"],
    subject: "Computer Science",
    difficulty: "LOW",
    difficultyColor: "text-emerald-500 bg-emerald-500/10",
    type: "Multiple Correct",
    pts: "10.0",
    updated: "Oct 20, 2023"
  },
  {
    id: "#QB-18321",
    stem: "Explain the...",
    tags: ["Europe", "War-History"],
    subject: "History",
    difficulty: "HIGH",
    difficultyColor: "text-red-500 bg-red-500/10",
    type: "Subjective",
    pts: "15.0",
    updated: "Oct 18, 2023"
  },
  {
    id: "#QB-17556",
    stem: "What is the molar...",
    tags: ["Molecules", "Stochiometry"],
    subject: "Chemistry",
    difficulty: "LOW",
    difficultyColor: "text-emerald-500 bg-emerald-500/10",
    type: "Numeric",
    pts: "2.0",
    updated: "Oct 15, 2023"
  }
];

export default function QuestionBank() {
  return (
    <div className="min-h-screen bg-[#0A0C10] p-10 space-y-10">
      {/* Top Search & Action Bar */}
      <div className="flex items-center justify-between gap-6">
        <div className="relative flex-1 max-w-3xl">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search questions by keywords..." 
            className="bg-[#151921] border-none h-12 pl-12 text-sm focus-visible:ring-1 focus-visible:ring-primary/40"
          />
        </div>
        <div className="flex items-center gap-6">
          <Button variant="ghost" size="icon" className="h-10 w-10 relative">
            <Bell className="w-5 h-5 text-muted-foreground" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-[#0A0C10]" />
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90 h-11 px-6 rounded-xl font-bold text-xs uppercase tracking-widest text-white shadow-xl shadow-primary/20">
            <Link href="/question-bank/create">
              <Plus className="w-4 h-4 mr-2" /> Create New Question
            </Link>
          </Button>
        </div>
      </div>

      {/* Header Section */}
      <div className="flex items-end justify-between">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-white tracking-tight">Question Bank Management</h1>
          <p className="text-sm text-muted-foreground max-w-2xl font-medium leading-relaxed">
            Central repository for all assessment items. Filter, search, and manage your academic content efficiently.
          </p>
        </div>
        <div className="flex gap-4">
          <Card className="bg-[#151921] border-none p-5 rounded-2xl flex flex-col items-center justify-center min-w-[120px]">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Total Items</p>
            <p className="text-xl font-bold text-white tracking-tight">1,248</p>
          </Card>
          <Card className="bg-[#151921] border-none p-5 rounded-2xl flex flex-col items-center justify-center min-w-[120px]">
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest mb-1">Last Updated</p>
            <p className="text-xl font-bold text-primary tracking-tight">2h ago</p>
          </Card>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="bg-[#151921] border-none h-11 text-xs text-white min-w-[160px] px-4 font-bold">
            <span className="text-muted-foreground mr-1 font-normal">Subject:</span>
            <SelectValue placeholder="All Subjects" />
          </SelectTrigger>
          <SelectContent className="bg-[#151921] border-white/10 text-white">
            <SelectItem value="all">All Subjects</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="all">
          <SelectTrigger className="bg-[#151921] border-none h-11 text-xs text-white min-w-[160px] px-4 font-bold">
            <span className="text-muted-foreground mr-1 font-normal">Language:</span>
            <SelectValue placeholder="All Languages" />
          </SelectTrigger>
          <SelectContent className="bg-[#151921] border-white/10 text-white">
            <SelectItem value="all">All Languages</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="high">
          <SelectTrigger className="bg-[#151921] border-none h-11 text-xs text-white min-w-[140px] px-4 font-bold">
            <span className="text-muted-foreground mr-1 font-normal">Difficulty:</span>
            <SelectValue placeholder="High" />
          </SelectTrigger>
          <SelectContent className="bg-[#151921] border-white/10 text-white">
            <SelectItem value="high">High</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="single">
          <SelectTrigger className="bg-[#151921] border-none h-11 text-xs text-white min-w-[180px] px-4 font-bold">
            <span className="text-muted-foreground mr-1 font-normal">Type:</span>
            <SelectValue placeholder="Single Correct" />
          </SelectTrigger>
          <SelectContent className="bg-[#151921] border-white/10 text-white">
            <SelectItem value="single">Single Correct</SelectItem>
          </SelectContent>
        </Select>

        <Select defaultValue="calculus">
          <SelectTrigger className="bg-[#151921] border-none h-11 text-xs text-white min-w-[140px] px-4 font-bold">
            <span className="text-muted-foreground mr-1 font-normal">Tags:</span>
            <SelectValue placeholder="Calculus" />
          </SelectTrigger>
          <SelectContent className="bg-[#151921] border-white/10 text-white">
            <SelectItem value="calculus">Calculus</SelectItem>
          </SelectContent>
        </Select>

        <button className="text-[10px] font-bold text-primary uppercase tracking-[0.2em] ml-2 hover:underline">
          Clear all filters
        </button>
      </div>

      {/* Main Table Container */}
      <Card className="bg-[#151921]/40 border-none rounded-[2rem] overflow-hidden shadow-2xl">
        {/* Table Toolbar */}
        <div className="p-8 border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <Checkbox className="border-white/20 data-[state=checked]:bg-primary" />
              <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Select All</span>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white text-[10px] font-bold uppercase tracking-widest">
                <Archive className="w-3.5 h-3.5 mr-2" /> Archive
              </Button>
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-white text-[10px] font-bold uppercase tracking-widest">
                <Download className="w-3.5 h-3.5 mr-2" /> Export
              </Button>
            </div>
          </div>
          <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Showing 1-10 of 1,248 questions</span>
        </div>

        <Table>
          <TableHeader>
            <TableRow className="border-white/5 bg-white/2 hover:bg-transparent">
              <TableHead className="w-16 pl-8 py-6"></TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">ID</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Question Stem</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Subject</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Difficulty</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Type</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">PTS</TableHead>
              <TableHead className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Updated</TableHead>
              <TableHead className="w-16 pr-8"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {questions.map((q, i) => (
              <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell className="pl-8 py-6">
                  <Checkbox className="border-white/20 data-[state=checked]:bg-primary" />
                </TableCell>
                <TableCell className="text-[10px] font-bold text-muted-foreground">{q.id}</TableCell>
                <TableCell>
                  <div className="space-y-1.5">
                    <p className="text-sm font-bold text-white">{q.stem}</p>
                    <div className="flex gap-1.5">
                      {q.tags.map((tag, idx) => (
                        <Badge key={idx} className={cn(
                          "text-[8px] font-black tracking-widest px-2 py-0.5 border-none",
                          idx === 0 ? "bg-primary/10 text-primary" : "bg-white/5 text-muted-foreground"
                        )}>
                          {tag.toUpperCase()}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </TableCell>
                <TableCell className="text-sm font-medium text-white">{q.subject}</TableCell>
                <TableCell>
                  <Badge className={cn("text-[9px] font-black tracking-widest px-2 py-1 border-none", q.difficultyColor)}>
                    {q.difficulty}
                  </Badge>
                </TableCell>
                <TableCell className="text-xs font-medium text-muted-foreground">{q.type}</TableCell>
                <TableCell className="text-sm font-black text-white">{q.pts}</TableCell>
                <TableCell className="text-xs font-medium text-muted-foreground">{q.updated}</TableCell>
                <TableCell className="pr-8 text-right">
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white hover:bg-white/10">
                    <Pencil className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

        {/* Table Pagination */}
        <div className="p-8 bg-white/2 border-t border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Rows per page:</span>
            <Select defaultValue="10">
              <SelectTrigger className="bg-transparent border-none text-[10px] font-black w-12 h-8 p-0 gap-1 focus:ring-0">
                <SelectValue placeholder="10" />
              </SelectTrigger>
              <SelectContent className="bg-[#151921] border-white/10 text-white">
                <SelectItem value="10">10</SelectItem>
                <SelectItem value="25">25</SelectItem>
                <SelectItem value="50">50</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronLeft className="w-4 h-4" /></Button>
            <div className="flex items-center gap-1.5">
              <Button className="h-8 w-8 bg-primary text-white font-black text-[10px] p-0 border-none rounded-lg shadow-lg shadow-primary/20">1</Button>
              <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-black text-[10px] p-0">2</Button>
              <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-black text-[10px] p-0">3</Button>
              <span className="text-muted-foreground px-1 text-[10px] font-black">...</span>
              <Button variant="ghost" className="h-8 w-8 text-muted-foreground hover:text-white font-black text-[10px] p-0">125</Button>
            </div>
            <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground"><ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
      </Card>

      {/* Bottom Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <BarChart3 className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white tracking-tight">Quality Score</h3>
              <span className="text-2xl font-black text-primary">8.4</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium mt-1 leading-relaxed">
              Average clarity rating across 1.2k items.
            </p>
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Database className="w-6 h-6 text-muted-foreground" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white tracking-tight">Archived Items</h3>
              <span className="text-2xl font-black text-white opacity-40">142</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium mt-1 leading-relaxed">
              View items removed from active bank.
            </p>
          </div>
        </Card>

        <Card className="bg-[#151921] border-none p-8 rounded-[2rem] shadow-xl flex items-center gap-6 group hover:bg-[#1A1F26] transition-colors">
          <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <ShieldCheck className="w-6 h-6 text-emerald-500" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-white tracking-tight">Verified Questions</h3>
              <span className="text-2xl font-black text-emerald-500">92%</span>
            </div>
            <p className="text-[10px] text-muted-foreground font-medium mt-1 leading-relaxed">
              Academic board approved items.
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
