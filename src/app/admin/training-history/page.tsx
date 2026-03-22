
"use client"

import { 
  Search, 
  Bell, 
  Filter, 
  ChevronLeft, 
  ChevronRight, 
  Calendar as CalendarIcon,
  Download,
  History,
  MoreVertical,
  GraduationCap
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

const trainingData = [
  { sr: "01", code: "EMP-4829", name: "Alexander Pierce", date: "Oct 24, 2023", duration: "45m", time: "09:15 AM", subject: "Safety & Compliance", testDur: "15m", compTime: "12m 40s", totalQs: "20", att: "20" },
  { sr: "02", code: "EMP-1023", name: "Sarah Jenkins", date: "Oct 24, 2023", duration: "30m", time: "10:30 AM", subject: "Cybersecurity Awareness", testDur: "20m", compTime: "18m 15s", totalQs: "25", att: "25" },
  { sr: "03", code: "EMP-3392", name: "Marcus Wright", date: "Oct 25, 2023", duration: "60m", time: "02:00 PM", subject: "Equipment Operation", testDur: "30m", compTime: "25m 00s", totalQs: "15", att: "15" },
  { sr: "04", code: "EMP-5512", name: "Elena Rodriguez", date: "Oct 25, 2023", duration: "45m", time: "09:00 AM", subject: "Code of Conduct", testDur: "10m", compTime: "05m 12s", totalQs: "10", att: "10" },
  { sr: "05", code: "EMP-9021", name: "David Thompson", date: "Oct 26, 2023", duration: "120m", time: "11:15 AM", subject: "Leadership Workshop", testDur: "45m", compTime: "40m 30s", totalQs: "40", att: "38" },
  { sr: "06", code: "EMP-2104", name: "James Wilson", date: "Oct 26, 2023", duration: "45m", time: "03:30 PM", subject: "Quality Assurance", testDur: "20m", compTime: "15m 20s", totalQs: "20", att: "20" },
  { sr: "07", code: "EMP-3049", name: "Emily Davis", date: "Oct 27, 2023", duration: "30m", time: "10:00 AM", subject: "GDPR Compliance", testDur: "15m", compTime: "10m 45s", totalQs: "15", att: "15" },
  { sr: "08", code: "EMP-8821", name: "Robert Miller", date: "Oct 27, 2023", duration: "60m", time: "01:45 PM", subject: "Incident Management", testDur: "30m", compTime: "28m 10s", totalQs: "30", att: "30" },
  { sr: "09", code: "EMP-7123", name: "Linda Garcia", date: "Oct 28, 2023", duration: "45m", time: "09:30 AM", subject: "Chemical Safety", testDur: "20m", compTime: "19m 55s", totalQs: "20", att: "20" },
  { sr: "10", code: "EMP-4455", name: "William Harris", date: "Oct 28, 2023", duration: "30m", time: "11:00 AM", subject: "Office Ergonomics", testDur: "10m", compTime: "04m 30s", totalQs: "10", att: "10" },
  { sr: "11", code: "EMP-6671", name: "Jessica Taylor", date: "Oct 29, 2023", duration: "90m", time: "10:30 AM", subject: "Customer Service...", testDur: "30m", compTime: "22m 00s", totalQs: "25", att: "25" },
  { sr: "12", code: "EMP-1102", name: "Michael Brown", date: "Oct 29, 2023", duration: "45m", time: "02:15 PM", subject: "Warehouse Logistics", testDur: "20m", compTime: "15m 10s", totalQs: "20", att: "20" },
  { sr: "13", code: "EMP-5509", name: "Susan Lee", date: "Oct 30, 2023", duration: "30m", time: "09:00 AM", subject: "Fire Safety Drill", testDur: "15m", compTime: "08m 45s", totalQs: "15", att: "15" },
  { sr: "14", code: "EMP-3321", name: "Christopher King", date: "Oct 30, 2023", duration: "45m", time: "11:30 AM", subject: "Diversity Training", testDur: "20m", compTime: "12m 30s", totalQs: "20", att: "20" },
  { sr: "15", code: "EMP-9980", name: "Patricia Scott", date: "Oct 31, 2023", duration: "60m", time: "03:00 PM", subject: "First Aid Essentials", testDur: "30m", compTime: "26m 40s", totalQs: "25", att: "25" },
];

export default function EmployeeTrainingHistory() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col">
      {/* Top Header */}
      <header className="p-6 border-b border-white/5 flex items-center justify-between gap-6 bg-[#0A0C10]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white tracking-tight leading-none">Training Portal</h1>
            <nav className="flex items-center gap-4 mt-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span className="hover:text-white cursor-pointer">Dashboard</span>
              <span className="text-blue-500 border-b border-blue-500 pb-0.5">Training History</span>
              <span className="hover:text-white cursor-pointer">Employees</span>
              <span className="hover:text-white cursor-pointer">Reports</span>
            </nav>
          </div>
        </div>

        <div className="relative flex-1 max-w-xl">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search records..." 
            className="bg-[#151921] border-none pl-10 h-11 text-sm focus-visible:ring-1 focus-visible:ring-blue-500/40"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-10 w-10 text-muted-foreground hover:text-white bg-white/5">
            <Bell className="w-5 h-5" />
          </Button>
          <div className="h-8 w-[1px] bg-white/10 mx-2" />
          <div className="flex items-center gap-3 text-right">
            <div>
              <p className="text-sm font-bold text-white leading-none">Admin User</p>
              <p className="text-[10px] text-muted-foreground font-medium mt-1">System Manager</p>
            </div>
            <Avatar className="h-9 w-9 border border-blue-600/20">
              <AvatarImage src="https://picsum.photos/seed/admin/100/100" />
              <AvatarFallback>AD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <main className="p-10 space-y-8 flex-1">
        <div className="space-y-1">
          <h2 className="text-3xl font-bold text-white tracking-tight">Employee Training History</h2>
          <p className="text-muted-foreground font-medium">Comprehensive log of all completed training modules and assessment scores.</p>
        </div>

        {/* Filters Card */}
        <Card className="bg-[#151921] border-none p-8 rounded-2xl shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-2 space-y-2.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Client*</label>
              <Select>
                <SelectTrigger className="bg-[#0A0C10] border-none h-12 text-xs font-bold text-white rounded-xl">
                  <SelectValue placeholder="Select Client" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="acme">Acme Corp</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Branch*</label>
              <Select>
                <SelectTrigger className="bg-[#0A0C10] border-none h-12 text-xs font-bold text-white rounded-xl">
                  <SelectValue placeholder="Select Branch" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="main">Main Branch</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-2 space-y-2.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Site</label>
              <Select>
                <SelectTrigger className="bg-[#0A0C10] border-none h-12 text-xs font-bold text-white rounded-xl">
                  <SelectValue placeholder="Select Site" />
                </SelectTrigger>
                <SelectContent className="bg-[#151921] border-white/10 text-white">
                  <SelectItem value="site1">Primary Hub</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="md:col-span-4 space-y-2.5">
              <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em]">Attendance Dates</label>
              <div className="flex items-center gap-3">
                <Input type="date" className="bg-[#0A0C10] border-none h-12 text-xs rounded-xl" />
                <Input type="date" className="bg-[#0A0C10] border-none h-12 text-xs rounded-xl" />
              </div>
            </div>
            <div className="md:col-span-2">
              <Button className="bg-[#0066FF] hover:bg-blue-700 h-12 px-8 rounded-xl font-black text-xs uppercase tracking-widest text-white shadow-2xl shadow-blue-600/20 w-full flex items-center justify-center gap-2">
                <Filter className="w-4 h-4" /> Submit
              </Button>
            </div>
          </div>
        </Card>

        {/* Table Container */}
        <Card className="bg-[#151921]/40 border-none rounded-3xl overflow-hidden shadow-2xl">
          <Table>
            <TableHeader>
              <TableRow className="border-white/5 bg-white/5 hover:bg-transparent uppercase">
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground py-6 pl-8">Sr. No.</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Emp Code</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Employee Name</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Training Date</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Duration</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Time</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Subjects</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Test Dur.</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground">Comp. Time</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center">Total Qs</TableHead>
                <TableHead className="text-[10px] font-bold tracking-widest text-muted-foreground text-center pr-8">At T.</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {trainingData.map((row, i) => (
                <TableRow key={i} className="border-white/5 hover:bg-white/5 transition-colors">
                  <TableCell className="text-xs font-medium text-muted-foreground pl-8 py-5">{row.sr}</TableCell>
                  <TableCell className="text-xs font-bold text-white">{row.code}</TableCell>
                  <TableCell className="text-xs font-bold text-white">{row.name}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{row.date}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{row.duration}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{row.time}</TableCell>
                  <TableCell className="text-xs font-bold text-white">{row.subject}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{row.testDur}</TableCell>
                  <TableCell className="text-xs font-medium text-muted-foreground">{row.compTime}</TableCell>
                  <TableCell className="text-xs font-medium text-center text-white">{row.totalQs}</TableCell>
                  <TableCell className="text-xs font-medium text-center text-white pr-8">{row.att}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Footer Navigation */}
          <div className="p-8 border-t border-white/5 flex items-center justify-between bg-white/2">
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Showing 1 to 15 of 45 records</p>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground border border-white/5 hover:bg-white/5"><ChevronLeft className="w-4 h-4" /></Button>
              <div className="flex items-center gap-1.5 mx-2">
                <Button className="h-9 w-9 bg-blue-600 text-white font-black text-xs p-0 border-none rounded-xl shadow-lg shadow-blue-600/20">1</Button>
                <Button variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-white font-black text-xs p-0 rounded-xl">2</Button>
                <Button variant="ghost" className="h-9 w-9 text-muted-foreground hover:text-white font-black text-xs p-0 rounded-xl">3</Button>
              </div>
              <Button variant="ghost" size="icon" className="h-9 w-9 text-muted-foreground border border-white/5 hover:bg-white/5"><ChevronRight className="w-4 h-4" /></Button>
            </div>
          </div>
        </Card>
      </main>

      {/* Global Footer */}
      <footer className="px-10 py-6 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground bg-[#0A0C10]">
        <div>CORPORATE TRAINING MANAGEMENT SYSTEM © 2024</div>
        <div className="flex items-center gap-8 mt-4 md:mt-0">
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]" /> 
            <span className="opacity-60">System Online</span>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" /> 
            <span className="opacity-60">Version 2.4.1</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
