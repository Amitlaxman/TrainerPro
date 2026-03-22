"use client"

import { 
  Shield, 
  HelpCircle, 
  Briefcase, 
  Lock, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-[#0A0C10] flex flex-col items-center">
      {/* Top Navigation */}
      <header className="w-full max-w-[1440px] px-12 py-8 flex items-center justify-between text-white">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/20">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <span className="font-headline text-2xl tracking-tight">Employee Portal</span>
        </div>
        <button className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-white transition-colors">
          <HelpCircle className="w-4 h-4" />
          Need help?
        </button>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center w-full px-6 pb-20">
        <Card className="w-full max-w-[480px] bg-[#11141D] border border-white/5 rounded-[2rem] p-10 shadow-2xl">
          <CardContent className="p-0 space-y-8">
            {/* Step Header */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-[10px] font-black text-blue-500 uppercase tracking-[0.2em]">Step 1 of 3</p>
                <p className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.2em]">33%</p>
              </div>
              <h1 className="text-3xl font-bold text-white tracking-tight">Registration</h1>
              <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                <div className="h-full bg-blue-600 rounded-full w-[33%] transition-all duration-500" />
              </div>
            </div>

            {/* Instruction */}
            <div className="space-y-1">
              <h2 className="text-xl font-bold text-white">Initiate Registration</h2>
              <p className="text-sm text-muted-foreground">Enter your credentials to verify your identity.</p>
            </div>

            {/* Form Fields */}
            <div className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Employee ID</label>
                <div className="relative">
                  <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    placeholder="EMP-12345" 
                    className="bg-[#1A1F26] border-none h-14 pl-12 text-sm font-medium focus-visible:ring-1 focus-visible:ring-blue-500/40 text-white rounded-xl"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Temporary Password</label>
                <div className="relative">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input 
                    type="password"
                    placeholder="••••••••" 
                    className="bg-[#1A1F26] border-none h-14 pl-12 text-sm font-medium focus-visible:ring-1 focus-visible:ring-blue-500/40 text-white rounded-xl"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-blue-600 hover:bg-blue-700 h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-xl shadow-blue-600/20 group">
              Verify Identity <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            {/* Legal Links */}
            <p className="text-[10px] text-center text-muted-foreground font-medium">
              By registering, you agree to our{" "}
              <Link href="#" className="text-blue-500 hover:underline">Terms of Service</Link> and{" "}
              <Link href="#" className="text-blue-500 hover:underline">Privacy Policy</Link>.
            </p>
          </CardContent>
        </Card>
      </main>

      {/* Footer */}
      <footer className="w-full p-8 text-center text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em]">
        © 2024 Corporate Systems Inc. Secure Employee Portal.
      </footer>
    </div>
  );
}
