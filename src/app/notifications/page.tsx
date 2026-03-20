"use client"

import { useState } from "react";
import { 
  Bell, 
  Search, 
  Megaphone, 
  GraduationCap, 
  ShieldCheck, 
  Calendar, 
  PlusSquare, 
  Video, 
  Phone, 
  Users, 
  MoreVertical, 
  Paperclip, 
  Smile, 
  Send,
  ArrowRight,
  MessageSquare
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

const notices = [
  {
    id: 1,
    priority: "HIGH PRIORITY",
    title: "Quarterly Compliance Certification Required",
    description: "All staff members are required to complete the new data privacy and security module before the end of the month...",
    date: "Oct 24, 2023",
    category: "Compliance",
    color: "border-red-500",
    badge: "bg-red-500/10 text-red-500"
  },
  {
    id: 2,
    priority: "REGULAR",
    title: "Upcoming Live Workshop: Advanced UI Design",
    description: "Join our guest speaker for an in-depth session on modern UI trends and practical design implementations...",
    date: "Oct 22, 2023",
    category: "Events",
    color: "border-blue-500",
    badge: "bg-blue-500/10 text-blue-500"
  },
  {
    id: 3,
    priority: "TRAINING",
    title: "New Course Content Available: Node.js 20",
    description: "We've just added 10 new modules to the Backend Development track focusing on the latest LTS release...",
    date: "Oct 20, 2023",
    category: "Training",
    color: "border-emerald-500",
    badge: "bg-emerald-500/10 text-emerald-500"
  }
];

const contacts = [
  { name: "Sarah Jenkins", role: "Lead Trainer", status: "online", image: "https://picsum.photos/seed/sarah/100/100" },
  { name: "David Chen", role: "Admin Support", status: "offline", image: "https://picsum.photos/seed/david/100/100" },
  { name: "Maria Garcia", role: "Compliance Officer", status: "online", image: "https://picsum.photos/seed/maria/100/100" },
];

const studyGroups = [
  { name: "React Workshop Group", members: 12 },
  { name: "Safety Certification 2023", members: 45 },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("All Notices");

  return (
    <div className="flex flex-col lg:flex-row gap-6 p-8 min-h-screen bg-background">
      
      {/* LEFT SIDEBAR - ANNOUNCEMENTS & COMMUNICATION HUB */}
      <aside className="w-full lg:w-80 space-y-6 shrink-0">
        
        {/* Announcements Card */}
        <Card className="bg-[#151921] border-none shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-2">
            <CardTitle className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Announcements</CardTitle>
          </CardHeader>
          <CardContent className="p-2">
            {[
              { label: "All Notices", icon: Megaphone },
              { label: "Training", icon: GraduationCap },
              { label: "Compliance", icon: ShieldCheck },
              { label: "Events", icon: Calendar },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => setActiveTab(item.label)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  activeTab === item.label 
                    ? "bg-primary text-white shadow-lg shadow-primary/20" 
                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                )}
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </button>
            ))}
          </CardContent>
        </Card>

        {/* Communication Hub Card */}
        <Card className="bg-[#151921] border-none shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="p-6 pb-4 flex flex-row items-center justify-between space-y-0">
            <CardTitle className="text-sm font-bold text-white">Communication Hub</CardTitle>
            <PlusSquare className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-white transition-colors" />
          </CardHeader>
          <CardContent className="p-6 pt-0 space-y-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <Input 
                placeholder="Search contacts..." 
                className="bg-secondary/50 border-none pl-10 h-10 text-xs placeholder:text-muted-foreground"
              />
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Mentors & Admins</p>
              {contacts.map((contact) => (
                <div key={contact.name} className="flex items-center gap-3 group cursor-pointer">
                  <div className="relative">
                    <Avatar className="w-10 h-10 border border-white/10 group-hover:scale-105 transition-transform">
                      <AvatarImage src={contact.image} />
                      <AvatarFallback>{contact.name[0]}</AvatarFallback>
                    </Avatar>
                    {contact.status === 'online' && (
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#151921]" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-white truncate">{contact.name}</p>
                    <p className="text-xs text-primary font-medium">{contact.role}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">Study Groups</p>
              {studyGroups.map((group) => (
                <div key={group.name} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 cursor-pointer transition-all">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-bold text-white truncate">{group.name}</p>
                    <p className="text-[10px] text-muted-foreground">{group.members} members</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </aside>

      {/* MAIN CONTENT AREA */}
      <main className="flex-1 space-y-8">
        
        {/* Notice Board Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Megaphone className="w-6 h-6 text-primary" />
              <h1 className="text-2xl font-bold text-white">Notice Board</h1>
            </div>
            <Badge variant="outline" className="bg-primary/5 border-primary/20 text-primary text-[10px] font-bold tracking-widest">4 UNREAD</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {notices.map((notice) => (
              <Card key={notice.id} className={cn("bg-[#151921] border-none border-l-4 shadow-xl group hover:bg-[#1A1F26] transition-all duration-300", notice.color)}>
                <CardContent className="p-6 space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary" className={cn("text-[8px] font-black tracking-widest px-2 py-0.5 border-none", notice.badge)}>
                      {notice.priority}
                    </Badge>
                    <span className="text-[10px] font-bold text-muted-foreground">{notice.date}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{notice.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">{notice.description}</p>
                  <div className="pt-2 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[10px] font-bold uppercase text-muted-foreground">
                      {notice.category === 'Compliance' && <ShieldCheck className="w-3.5 h-3.5" />}
                      {notice.category === 'Events' && <Calendar className="w-3.5 h-3.5" />}
                      {notice.category === 'Training' && <GraduationCap className="w-3.5 h-3.5" />}
                      {notice.category}
                    </div>
                    <button className="text-[10px] font-bold text-primary flex items-center gap-1 group-hover:gap-2 transition-all uppercase tracking-widest">
                      Read More <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Chat Interface Section */}
        <section className="space-y-6">
          <Card className="bg-[#151921] border-none shadow-2xl rounded-3xl overflow-hidden flex flex-col h-[500px]">
            {/* Chat Header */}
            <div className="p-6 border-b border-white/5 flex items-center justify-between bg-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-white">React Workshop Group Chat</h3>
                  <p className="text-xs text-muted-foreground flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> 12 Participants
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white"><Video className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white"><Phone className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white"><Users className="w-4 h-4" /></Button>
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white"><MoreVertical className="w-4 h-4" /></Button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-8 space-y-8 scrollbar-thin scrollbar-thumb-white/10">
              <div className="flex justify-center">
                <Badge variant="secondary" className="bg-white/5 text-muted-foreground text-[10px] font-bold px-3">YESTERDAY</Badge>
              </div>

              {/* Received Message */}
              <div className="flex items-end gap-3 max-w-[80%]">
                <Avatar className="w-8 h-8 shrink-0">
                  <AvatarImage src="https://picsum.photos/seed/sarah/100/100" />
                  <AvatarFallback>SJ</AvatarFallback>
                </Avatar>
                <div className="space-y-1">
                  <div className="p-4 rounded-2xl rounded-bl-none bg-[#1C222C] text-sm text-foreground leading-relaxed shadow-sm">
                    Hi Alex! I saw you completed the first three modules of the React course. Great progress!
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium px-1">10:42 AM</span>
                </div>
              </div>

              {/* Sent Message */}
              <div className="flex items-end gap-3 max-w-[80%] ml-auto flex-row-reverse">
                <div className="space-y-1 text-right">
                  <div className="p-4 rounded-2xl rounded-br-none bg-primary text-sm text-white leading-relaxed shadow-lg shadow-primary/10">
                    Thanks Sarah! I'm really enjoying the practical examples. I have a question about the state management section though.
                  </div>
                  <span className="text-[10px] text-muted-foreground font-medium px-1">11:15 AM</span>
                </div>
              </div>
            </div>

            {/* Chat Input */}
            <div className="p-6 bg-white/5 border-t border-white/5">
              <div className="flex items-center gap-4 bg-[#1A1F26] rounded-2xl p-2 pl-4">
                <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white shrink-0"><Paperclip className="w-4 h-4" /></Button>
                <Input 
                  placeholder="Type your message..." 
                  className="bg-transparent border-none shadow-none focus-visible:ring-0 text-sm placeholder:text-muted-foreground/50 h-10"
                />
                <div className="flex items-center gap-1 shrink-0 px-2">
                  <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground hover:text-white"><Smile className="w-4 h-4" /></Button>
                  <Button size="icon" className="h-9 w-9 bg-primary hover:bg-primary/90 rounded-xl shadow-lg shadow-primary/20">
                    <Send className="w-4 h-4 text-white" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* RIGHT SIDEBAR - GROUP MEMBERS (Visiual only for layout) */}
      <aside className="hidden xl:flex w-64 flex-col gap-6">
        <Card className="bg-[#151921] border-none shadow-xl rounded-2xl flex-1 flex flex-col overflow-hidden">
          <CardHeader className="p-6 flex flex-row items-center justify-between border-b border-white/5">
            <CardTitle className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Group Members</CardTitle>
            <Badge className="bg-white/5 text-muted-foreground text-[10px]">12</Badge>
          </CardHeader>
          <CardContent className="p-6 flex-1 space-y-4">
            {[
              { name: "Sarah Jenkins", role: "Lead Trainer", color: "bg-emerald-500", image: "https://picsum.photos/seed/sarah/100/100" },
              { name: "David Chen", role: "Admin Support", color: "bg-emerald-500", image: "https://picsum.photos/seed/david/100/100" },
              { name: "Alex Rivera", role: "Trainee", color: "bg-blue-500", image: "https://picsum.photos/seed/alex/100/100" },
            ].map((member) => (
              <div key={member.name} className="flex items-center gap-3">
                <div className="relative">
                  <Avatar className="w-8 h-8 border border-white/10">
                    <AvatarImage src={member.image} />
                    <AvatarFallback>{member.name[0]}</AvatarFallback>
                  </Avatar>
                  <div className={cn("absolute bottom-0 right-0 w-2 h-2 rounded-full border border-[#151921]", member.color)} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-bold text-white truncate">{member.name}</p>
                  <p className="text-[10px] text-muted-foreground">{member.role}</p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </aside>
    </div>
  );
}
