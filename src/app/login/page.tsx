"use client"

import { useState } from "react";
import { GraduationCap, HelpCircle, Eye, EyeOff, LogIn, Lock, User, Check } from "lucide-react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState<"trainer" | "admin">("trainer");

  return (
    <div className="min-h-screen bg-[#0A0C10] flex flex-col items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      {/* Top Header */}
      <header className="w-full p-8 flex items-center justify-between relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
            <GraduationCap className="text-white w-6 h-6" />
          </div>
          <span className="font-headline text-2xl tracking-tight text-white">LMSPortal</span>
        </div>
        <div className="flex items-center gap-6">
          <button className="text-xs font-bold text-muted-foreground hover:text-white transition-colors flex items-center gap-2 uppercase tracking-widest">
            <HelpCircle className="w-4 h-4" /> Support
          </button>
          <Button variant="secondary" className="bg-white/5 border-none h-10 px-6 text-[10px] font-bold uppercase tracking-[0.2em] rounded-xl text-white">
            Employee Portal
          </Button>
        </div>
      </header>

      {/* Main Login Card */}
      <main className="flex-1 flex flex-col items-center justify-center p-6 w-full max-w-[480px] relative z-10">
        <Card className="w-full bg-[#151921] border-none shadow-2xl rounded-3xl overflow-hidden animate-in fade-in zoom-in duration-500">
          {/* Card Header Gradient */}
          <div className="bg-gradient-to-br from-primary to-[#1E40AF] p-12 text-center relative">
            <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }} />
            <div className="relative space-y-2">
              <h1 className="text-3xl font-bold text-white tracking-tight">Welcome Back</h1>
              <p className="text-primary-foreground/70 text-sm font-medium">Secure access to your training dashboard</p>
            </div>
            {/* Role Toggle Switch */}
            <div className="mt-8 inline-flex p-1 bg-black/20 rounded-2xl backdrop-blur-md border border-white/10">
              <button 
                onClick={() => setRole("trainer")}
                className={cn(
                  "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                  role === "trainer" ? "bg-white text-primary shadow-xl" : "text-white/60 hover:text-white"
                )}
              >
                Trainer
              </button>
              <button 
                onClick={() => setRole("admin")}
                className={cn(
                  "px-8 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-[0.2em] transition-all",
                  role === "admin" ? "bg-white text-primary shadow-xl" : "text-white/60 hover:text-white"
                )}
              >
                Admin
              </button>
            </div>
          </div>

          <CardContent className="p-10 space-y-8 bg-[#151921]">
            <div className="space-y-6">
              {/* Employee ID Field */}
              <div className="space-y-3">
                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                  <User className="w-3 h-3 text-primary" /> Employee ID
                </label>
                <Input 
                  placeholder="e.g. EMP-12345" 
                  className="bg-[#0A0C10] border-none h-14 text-sm font-medium focus-visible:ring-1 focus-visible:ring-primary/40 px-6 rounded-2xl" 
                />
              </div>

              {/* Password Field */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.2em] flex items-center gap-2">
                    <Lock className="w-3 h-3 text-primary" /> Password
                  </label>
                  <button className="text-[10px] font-bold text-primary uppercase tracking-widest hover:underline">
                    Forgot Password?
                  </button>
                </div>
                <div className="relative">
                  <Input 
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••" 
                    className="bg-[#0A0C10] border-none h-14 text-sm font-medium focus-visible:ring-1 focus-visible:ring-primary/40 px-6 pr-12 rounded-2xl" 
                  />
                  <button 
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center gap-3">
                <Checkbox id="remember" className="border-white/10 data-[state=checked]:bg-primary rounded-md" />
                <label htmlFor="remember" className="text-xs font-medium text-muted-foreground cursor-pointer">
                  Stay signed in for 30 days
                </label>
              </div>
            </div>

            {/* Sign In Button */}
            <Button asChild className="w-full bg-primary hover:bg-primary/90 h-14 rounded-2xl text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-primary/20 group">
              <Link href="/">
                <LogIn className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" /> Sign In
              </Link>
            </Button>

            {/* Signup Link */}
            <div className="pt-4 text-center">
              <p className="text-sm font-medium text-muted-foreground">
                First-time user? <button className="text-primary hover:underline ml-1">Sign up here</button>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Legal Footer */}
        <div className="mt-10 flex items-center gap-6 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
          <button className="hover:text-white transition-colors">Privacy Policy</button>
          <span className="opacity-20">•</span>
          <button className="hover:text-white transition-colors">Terms of Service</button>
          <span className="opacity-20">•</span>
          <button className="hover:text-white transition-colors">Contact Admin</button>
        </div>
      </main>

      {/* Footer Branding */}
      <footer className="w-full p-8 text-center text-[10px] font-bold text-muted-foreground/40 uppercase tracking-[0.2em] relative z-10">
        © 2024 Learning Management System. All rights reserved. Professional Edition.
      </footer>
    </div>
  );
}
