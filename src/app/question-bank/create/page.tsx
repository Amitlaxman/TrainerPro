"use client"

import { useState } from "react"
import { 
  ArrowLeft, 
  Save, 
  Plus, 
  Trash2, 
  HelpCircle, 
  Layers, 
  Target, 
  Type, 
  Star,
  CheckCircle2,
  AlertCircle
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export default function CreateQuestion() {
  const [questionType, setQuestionType] = useState("single")
  const [options, setOptions] = useState([
    { id: 1, text: "", isCorrect: false },
    { id: 2, text: "", isCorrect: false },
  ])

  const addOption = () => {
    setOptions([...options, { id: Date.now(), text: "", isCorrect: false }])
  }

  const removeOption = (id: number) => {
    setOptions(options.filter(o => o.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#0A0C10] p-8 space-y-8 max-w-5xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild className="text-muted-foreground hover:text-white bg-white/5">
            <Link href="/question-bank"><ArrowLeft className="w-4 h-4" /></Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white tracking-tight">Create New Question</h1>
            <p className="text-sm text-muted-foreground font-medium mt-1">Configure your assessment item details and taxonomy.</p>
          </div>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-white/10 text-white hover:bg-white/5">Save as Draft</Button>
          <Button className="bg-primary hover:bg-primary/90 text-white font-bold px-8">
            <Save className="w-4 h-4 mr-2" /> Publish Question
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Form */}
        <div className="lg:col-span-8 space-y-8">
          {/* Question Content */}
          <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Type className="w-5 h-5" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">Question Content</h2>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Question Stem (The Prompt)</Label>
                <Textarea 
                  placeholder="Enter the main question text here..." 
                  className="bg-[#0A0C10] border-none min-h-[150px] text-sm resize-none focus-visible:ring-primary/40 p-4"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Question Type</Label>
                  <Select value={questionType} onValueChange={setQuestionType}>
                    <SelectTrigger className="bg-[#0A0C10] border-none h-11 text-sm">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#151921] border-white/10 text-white">
                      <SelectItem value="single">Single Choice</SelectItem>
                      <SelectItem value="multiple">Multiple Correct</SelectItem>
                      <SelectItem value="subjective">Subjective / Essay</SelectItem>
                      <SelectItem value="numeric">Numeric</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Points (PTS)</Label>
                  <Input type="number" defaultValue="1.0" className="bg-[#0A0C10] border-none h-11 text-sm font-bold" />
                </div>
              </div>
            </div>
          </Card>

          {/* Options / Answers */}
          {(questionType === "single" || questionType === "multiple") && (
            <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 text-primary">
                  <Layers className="w-5 h-5" />
                  <h2 className="text-lg font-bold text-white uppercase tracking-wider">Answer Options</h2>
                </div>
                <Button onClick={addOption} size="sm" variant="ghost" className="text-primary hover:text-white text-[10px] font-bold uppercase tracking-widest">
                  <Plus className="w-3.5 h-3.5 mr-1" /> Add Option
                </Button>
              </div>

              <div className="space-y-4">
                {options.map((option, index) => (
                  <div key={option.id} className="flex items-start gap-4 group">
                    <div className="flex flex-col items-center gap-2 mt-2">
                      <Switch 
                        checked={option.isCorrect} 
                        className="data-[state=checked]:bg-emerald-500" 
                      />
                      <span className="text-[8px] font-bold text-muted-foreground uppercase">Correct</span>
                    </div>
                    <div className="flex-1 relative">
                      <Input 
                        placeholder={`Option ${index + 1}`} 
                        className="bg-[#0A0C10] border-none h-12 text-sm pr-10" 
                      />
                      <button 
                        onClick={() => removeOption(option.id)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-destructive opacity-0 group-hover:opacity-100 transition-all"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {/* Taxonomic metadata */}
          <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl space-y-6">
            <div className="flex items-center gap-3 text-primary">
              <Target className="w-5 h-5" />
              <h2 className="text-lg font-bold text-white uppercase tracking-wider">Taxonomy & Metadata</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Subject</Label>
                <Select>
                  <SelectTrigger className="bg-[#0A0C10] border-none h-11">
                    <SelectValue placeholder="Choose Subject" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#151921] border-white/10 text-white">
                    <SelectItem value="math">Mathematics</SelectItem>
                    <SelectItem value="cs">Computer Science</SelectItem>
                    <SelectItem value="history">History</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Difficulty</Label>
                <div className="flex p-1 bg-[#0A0C10] rounded-xl h-11">
                  {["LOW", "MEDIUM", "HIGH"].map(lvl => (
                    <button 
                      key={lvl} 
                      className="flex-1 text-[9px] font-black uppercase tracking-widest rounded-lg text-muted-foreground hover:text-white transition-all hover:bg-white/5"
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>
              <div className="md:col-span-2 space-y-2">
                <Label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Tags (Keywords)</Label>
                <Input placeholder="Add tags separated by commas..." className="bg-[#0A0C10] border-none h-11 text-sm" />
              </div>
            </div>
          </Card>
        </div>

        {/* Sidebar info */}
        <div className="lg:col-span-4 space-y-6">
          <div className="sticky top-8 space-y-6">
            <Card className="bg-primary border-none text-white p-8 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-6 h-6" />
                  <h3 className="font-bold uppercase tracking-widest">Quality Check</h3>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-xs font-semibold text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Stem length sufficient</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-primary-foreground/80">
                    <AlertCircle className="w-4 h-4 text-orange-400" />
                    <span>Missing correct answer toggle</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs font-semibold text-primary-foreground/80">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Subject mapping assigned</span>
                  </div>
                </div>
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[10px] uppercase font-bold opacity-60 mb-2">Estimated Complexity</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-3xl font-black">B2</span>
                    <span className="text-xs font-bold opacity-60">(Intermediate)</span>
                  </div>
                </div>
              </div>
              <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/5 rounded-full blur-3xl" />
            </Card>

            <Card className="bg-[#151921] border-none p-8 rounded-3xl space-y-4">
              <h3 className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" /> Pro Tips
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Using clear, concise language in your question stem reduces cognitive load and improves student performance tracking.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
