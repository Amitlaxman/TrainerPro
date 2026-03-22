"use client"

import { 
  ArrowLeft, 
  Download, 
  CloudUpload, 
  CheckCircle2, 
  AlertCircle, 
  Pencil, 
  ArrowRight,
  Database,
  FileSpreadsheet
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

const previewData = [
  { 
    status: 'success', 
    id: 'EMP-4029', 
    name: 'Johnathan Smith', 
    designation: 'Senior Engineer', 
    mobile: '+1 234-567-8901', 
    gender: 'Male', 
    joiningDate: '2023-05-15', 
    site: 'HQ - New York' 
  },
  { 
    status: 'error', 
    id: 'EMP-4029', 
    name: 'Sarah Miller', 
    designation: 'Product Manager', 
    mobile: '+1 234-567-8902', 
    gender: 'Female', 
    joiningDate: '2023-06-20', 
    site: 'Remote',
    errorType: 'DUPLICATE ID',
    errorField: 'id'
  },
  { 
    status: 'success', 
    id: 'EMP-5102', 
    name: 'Robert Chen', 
    designation: 'Marketing Lead', 
    mobile: '+1 234-567-8903', 
    gender: 'Male', 
    joiningDate: '2023-08-10', 
    site: 'SF Office' 
  },
  { 
    status: 'error', 
    id: 'EMP-5105', 
    name: 'Aisha Khan', 
    designation: 'Sales Exec', 
    mobile: '98765-INVALID', 
    gender: 'Female', 
    joiningDate: '2023-09-01', 
    site: 'London',
    errorType: 'INVALID MOBILE',
    errorField: 'mobile'
  },
];

export default function BulkUserUpload() {
  return (
    <div className="min-h-screen bg-[#0A0C10] text-foreground flex flex-col font-body">
      <main className="flex-1 p-12 max-w-[1440px] mx-auto w-full space-y-10">
        
        {/* Breadcrumb & Header */}
        <div className="space-y-6">
          <nav className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
            <ArrowLeft className="w-3 h-3" />
            <Link href="/admin/users" className="hover:text-white transition-colors">Master Data Management</Link>
            <span className="opacity-20">/</span>
            <span className="text-white">Bulk User Upload</span>
          </nav>
          
          <div className="space-y-2">
            <h1 className="text-5xl font-black text-white tracking-tighter">Bulk User Upload</h1>
            <p className="text-muted-foreground font-medium text-lg leading-relaxed">
              Streamline your onboarding process by importing employees in bulk.
            </p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="grid grid-cols-3 gap-4 pb-4">
          {[
            { label: "Upload Spreadsheet", active: true, icon: FileSpreadsheet },
            { label: "Validate & Preview", active: false, icon: Database },
            { label: "Confirm Import", active: false, icon: CheckCircle2 },
          ].map((step, i) => (
            <div key={i} className="space-y-4">
              <div className="flex items-center gap-3">
                <step.icon className={cn("w-4 h-4", step.active ? "text-blue-500" : "text-muted-foreground/40")} />
                <span className={cn("text-[10px] font-black uppercase tracking-[0.2em]", step.active ? "text-white" : "text-muted-foreground/40")}>
                  {step.label}
                </span>
              </div>
              <div className={cn("h-1 w-full rounded-full", step.active ? "bg-blue-600 shadow-[0_0_15px_rgba(37,99,235,0.4)]" : "bg-white/5")} />
            </div>
          ))}
        </div>

        {/* Step 1: Upload Card */}
        <Card className="bg-[#151921]/50 border-none p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden group">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-white tracking-tight">Step 1: Select your file</h2>
              <p className="text-sm text-muted-foreground font-medium">Supported formats: .csv, .xlsx (Max 10MB)</p>
            </div>
            <Button variant="outline" className="bg-blue-600/5 border-blue-600/20 text-blue-400 hover:bg-blue-600/10 h-12 px-8 rounded-xl text-[10px] font-black uppercase tracking-widest">
              <Download className="w-4 h-4 mr-2" /> Download Sample Template
            </Button>
          </div>

          <div className="mt-12">
            <div className="border-2 border-dashed border-white/5 rounded-[2rem] p-24 flex flex-col items-center justify-center text-center space-y-8 group-hover:border-blue-600/20 transition-all bg-[#0A0C10]/30">
              <div className="w-20 h-20 rounded-full bg-blue-600/10 flex items-center justify-center">
                <CloudUpload className="w-10 h-10 text-blue-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white tracking-tight">Drag and drop your file here</h3>
                <p className="text-sm text-muted-foreground">or click to browse your local storage</p>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700 h-14 px-12 rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/20">
                Browse Files
              </Button>
            </div>
          </div>
        </Card>

        {/* Step 2: Preview Section */}
        <section className="space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-2.5 bg-blue-600/10 rounded-xl">
                <Database className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Step 2: Validate Data Preview</h2>
            </div>
            <div className="flex items-center gap-3">
              <Badge className="bg-red-500/10 text-red-500 border-none text-[10px] font-black px-3 py-1">2 Errors found</Badge>
              <Badge className="bg-emerald-500/10 text-emerald-500 border-none text-[10px] font-black px-3 py-1">124 Rows ready</Badge>
            </div>
          </div>

          <Card className="bg-[#151921]/50 border-none rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Table>
              <TableHeader>
                <TableRow className="border-white/5 bg-white/2 hover:bg-transparent uppercase">
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground pl-10 py-8">Status</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Employee ID</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Employee Name</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Designation</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Mobile Number</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Gender</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Date of Joining</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground">Current Site</TableHead>
                  <TableHead className="text-[10px] font-black tracking-widest text-muted-foreground text-right pr-10">Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {previewData.map((row, i) => (
                  <TableRow key={i} className={cn("border-white/5 hover:bg-white/2 transition-colors", row.status === 'error' && "bg-red-500/[0.02]")}>
                    <TableCell className="pl-10 py-8">
                      {row.status === 'success' ? (
                        <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 text-red-500" />
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <span className={cn("text-sm font-bold", row.errorField === 'id' ? "text-red-400" : "text-white")}>
                        {row.id}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm font-bold text-white">{row.name}</TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{row.designation}</TableCell>
                    <TableCell>
                      <span className={cn("text-sm font-bold", row.errorField === 'mobile' ? "text-red-400 underline underline-offset-4 decoration-dashed" : "text-white opacity-80")}>
                        {row.mobile}
                      </span>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{row.gender}</TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{row.joiningDate}</TableCell>
                    <TableCell className="text-sm text-muted-foreground font-medium">{row.site}</TableCell>
                    <TableCell className="text-right pr-10">
                      {row.status === 'error' ? (
                        <span className="text-[10px] font-black text-red-500 uppercase tracking-widest">{row.errorType}</span>
                      ) : (
                        <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-white">
                          <Pencil className="w-4 h-4" />
                        </Button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </section>

        {/* Sticky Footer Actions */}
        <div className="pt-12 border-t border-white/5 flex items-center justify-between bg-[#0A0C10]/80 backdrop-blur-md sticky bottom-0 z-50 pb-8 mt-12">
          <div className="space-y-1">
            <p className="text-sm text-white font-bold">A total of <span className="text-blue-500">126</span> records will be processed.</p>
            <p className="text-xs text-muted-foreground font-medium">Please resolve errors to include all users.</p>
          </div>
          <div className="flex gap-4">
            <Button asChild variant="secondary" className="bg-white/5 border-none h-14 px-10 text-xs font-black uppercase tracking-widest text-white hover:bg-white/10">
              <Link href="/admin/users">Cancel</Link>
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 h-14 px-12 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-blue-600/20 group">
              Confirm Import <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
