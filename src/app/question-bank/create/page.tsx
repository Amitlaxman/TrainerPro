"use client"

import { useState } from "react";
import { 
  Plus, 
  Search, 
  ChevronDown,
  Bold,
  Italic,
  List as ListIcon,
  ImageIcon,
  Sigma,
  Link as LinkIcon,
  HelpCircle,
  Sparkles,
  Trash2,
  X,
  Save,
  Globe,
  ChevronUp
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

export default function CreateQuestion() {
  const [questionType, setQuestionType] = useState<"single" | "multiple">("single");
  const [difficulty, setDifficulty] = useState("Medium");
  const [options, setOptions] = useState([
    { id: 'A', text: "Always verify, never trust every access request.", isCorrect: true },
    { id: 'B', text: "", isCorrect: false },
    { id: 'C', text: "", isCorrect: false },
  ]);

  const toggleOptionStatus = (id: string) => {
    setOptions(prev => prev.map(opt => {
      if (questionType === "single") {
        return { ...opt, isCorrect: opt.id === id };
      }
      return opt.id === id ? { ...opt, isCorrect: !opt.isCorrect } : opt;
    }));
  };

  const addOption = () => {
    const nextId = String.fromCharCode(65 + options.length);
    setOptions([...options, { id: nextId, text: "", isCorrect: false }]);
  };

  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col">
      {/* Header */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between bg-[#0A0C10]">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight">Question Bank Creator</h1>
            <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Drafting: New Assessment Item</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="ghost" asChild className="text-muted-foreground hover:text-white font-bold text-xs uppercase tracking-widest">
            <Link href="/question-bank">Discard</Link>
          </Button>
          <Button className="bg-primary hover:bg-primary/90 h-11 px-8 rounded-xl font-black text-xs uppercase tracking-widest text-white shadow-xl shadow-primary/20">
            <Save className="w-4 h-4 mr-2" /> Save Question
          </Button>
        </div>
      </header>

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* Main Editor Section */}
        <main className="lg:col-span-8 overflow-y-auto p-10 space-y-12">
          {/* Question Stem Section */}
          <section className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Question Stem</h2>
              </div>
              <span className="text-[10px] font-bold text-muted-foreground/50 uppercase tracking-widest">ID: QB-2024-001</span>
            </div>

            <Card className="bg-[#151921] border-none rounded-2xl overflow-hidden shadow-2xl">
              <div className="p-4 border-b border-white/5 bg-white/5 flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><Bold className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><Italic className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><ListIcon className="w-4 h-4" /></Button>
                <div className="w-px h-4 bg-white/10 mx-1" />
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><ImageIcon className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><Sigma className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white"><LinkIcon className="w-4 h-4" /></Button>
                <button className="text-[10px] font-bold text-primary uppercase tracking-widest ml-auto hover:underline">Full Preview</button>
              </div>
              <div className="p-8">
                <Textarea 
                  placeholder="Enter your question stem here... Example: Which of the following best describes 'Zero Trust Architecture'?"
                  className="bg-transparent border-none min-h-[200px] text-lg font-medium resize-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0 placeholder:text-muted-foreground/30"
                />
              </div>
            </Card>
          </section>

          {/* Answer Options Section */}
          <section className="space-y-6 pb-10">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 text-primary">
                <div className="w-1 h-1 rounded-full bg-primary" />
                <h2 className="text-sm font-bold text-white uppercase tracking-widest">Answer Options</h2>
              </div>
              <div className="flex p-1 bg-[#151921] rounded-xl">
                <button 
                  onClick={() => setQuestionType("single")}
                  className={cn(
                    "px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all",
                    questionType === "single" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground/50 hover:text-muted-foreground"
                  )}
                >
                  Single Correct
                </button>
                <button 
                  onClick={() => setQuestionType("multiple")}
                  className={cn(
                    "px-4 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all",
                    questionType === "multiple" ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground/50 hover:text-muted-foreground"
                  )}
                >
                  Multiple Choice
                </button>
              </div>
            </div>

            <div className="space-y-4">
              {options.map((opt) => (
                <div key={opt.id} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full bg-[#151921] flex items-center justify-center text-xs font-bold text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                    {opt.id}
                  </div>
                  <Card className={cn(
                    "flex-1 bg-[#151921] border-none p-4 rounded-xl flex items-center justify-between transition-all",
                    opt.isCorrect && "ring-1 ring-emerald-500/40 bg-emerald-500/[0.02]"
                  )}>
                    <Input 
                      placeholder={opt.text ? "" : "Enter option text..."} 
                      defaultValue={opt.text}
                      className="bg-transparent border-none text-sm font-medium focus-visible:ring-0 shadow-none px-0"
                    />
                    <div className="flex items-center gap-4">
                      <span className={cn(
                        "text-[9px] font-black uppercase tracking-[0.2em]",
                        opt.isCorrect ? "text-emerald-500" : "text-muted-foreground/30"
                      )}>
                        {opt.isCorrect ? "CORRECT" : "WRONG"}
                      </span>
                      <Switch 
                        checked={opt.isCorrect} 
                        onCheckedChange={() => toggleOptionStatus(opt.id)}
                        className="data-[state=checked]:bg-emerald-500" 
                      />
                    </div>
                  </Card>
                </div>
              ))}

              <Button 
                onClick={addOption}
                variant="outline" 
                className="w-full h-14 border-dashed border-white/5 bg-white/[0.02] hover:bg-white/5 rounded-xl text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-white"
              >
                <Plus className="w-4 h-4 mr-2" /> Add Another Option
              </Button>
            </div>
          </section>
        </main>

        {/* Sidebar Configuration Section */}
        <aside className="lg:col-span-4 bg-[#0F1218] border-l border-white/5 overflow-y-auto p-8 space-y-10">
          <div className="space-y-8">
            {/* Subject Assignment */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Subject Assignment</label>
              <Select defaultValue="cyber">
                <SelectTrigger className="bg-[#151921] border-none h-12 text-sm font-bold text-white rounded-xl">
                  <SelectValue placeholder="Select Subject" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="cyber">Cybersecurity</SelectItem>
                  <SelectItem value="compliance">Compliance</SelectItem>
                  <SelectItem value="it">IT Operations</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Language */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Language</label>
              <div className="relative">
                <Select defaultValue="en">
                  <SelectTrigger className="bg-[#151921] border-none h-12 text-sm font-bold text-white rounded-xl pl-10">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#151921] border-white/10 text-white">
                    <SelectItem value="en">English</SelectItem>
                    <SelectItem value="es">Spanish</SelectItem>
                  </SelectContent>
                </Select>
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              </div>
            </div>

            {/* Scoring */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Scoring (Points)</label>
              <div className="relative">
                <Input 
                  type="number" 
                  defaultValue={10} 
                  className="bg-[#151921] border-none h-12 text-sm font-bold text-white rounded-xl px-4" 
                />
                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-0.5">
                  <button className="p-0.5 hover:bg-white/5 rounded"><ChevronUp className="w-3 h-3 text-muted-foreground" /></button>
                  <button className="p-0.5 hover:bg-white/5 rounded"><ChevronDown className="w-3 h-3 text-muted-foreground" /></button>
                </div>
              </div>
            </div>

            {/* Smart Tagging */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Smart Tagging</label>
                <Badge className="bg-primary/10 text-primary border-none text-[8px] font-bold px-1.5 py-0">AUTO-GEN</Badge>
              </div>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <Input 
                  placeholder="Search or create tags..." 
                  className="bg-[#151921] border-none h-12 text-sm font-medium text-white rounded-xl pl-10" 
                />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {["Network", "Architecture", "Infrastructure"].map(tag => (
                  <Badge key={tag} className="bg-[#151921] text-muted-foreground hover:text-white border-none text-[10px] font-bold px-3 py-1.5 rounded-lg flex items-center gap-2 group cursor-pointer transition-colors">
                    {tag} <X className="w-3 h-3 opacity-30 group-hover:opacity-100" />
                  </Badge>
                ))}
              </div>
            </div>

            {/* Difficulty Level */}
            <div className="space-y-3">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Difficulty Level</label>
              <div className="flex gap-2 p-1 bg-[#151921] rounded-xl">
                {["Easy", "Medium", "Hard"].map(lvl => (
                  <button
                    key={lvl}
                    onClick={() => setDifficulty(lvl)}
                    className={cn(
                      "flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-lg transition-all",
                      difficulty === lvl ? "bg-primary text-white shadow-lg shadow-primary/20" : "text-muted-foreground/50 hover:text-muted-foreground"
                    )}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* AI Insight Card */}
          <Card className="bg-primary/5 border border-primary/10 p-6 rounded-3xl space-y-4">
            <div className="flex items-center gap-3 text-primary">
              <Sparkles className="w-5 h-5" />
              <h3 className="text-[10px] font-bold uppercase tracking-widest">AI Insight</h3>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-medium">
              This question aligns with SOC2 compliance learning objectives and reinforces data perimeter security concepts.
            </p>
          </Card>
        </aside>
      </div>
    </div>
  );
}
