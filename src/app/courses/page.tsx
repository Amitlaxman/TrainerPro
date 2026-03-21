"use client"

import { BookOpen, Plus, Clock, Users, ShieldCheck, ChevronRight, BarChart, Settings2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "Surveillance Protocols I",
    description: "Foundational course on camera operation and blind-spot identification.",
    duration: "4h 30m",
    students: 128,
    progress: 75,
    category: "Technical",
    image: "https://picsum.photos/seed/surveillance/400/200"
  },
  {
    id: 2,
    title: "Emergency Response 2024",
    description: "Crisis management training including fire safety and medical aid.",
    duration: "6h 15m",
    students: 245,
    progress: 92,
    category: "Safety",
    image: "https://picsum.photos/seed/emergency-r/400/200"
  },
  {
    id: 3,
    title: "Conflict De-escalation",
    description: "Verbal techniques for managing high-stress security interactions.",
    duration: "3h 00m",
    students: 84,
    progress: 40,
    category: "Communication",
    image: "https://picsum.photos/seed/deescalation/400/200"
  },
  {
    id: 4,
    title: "Compliance & Legal",
    description: "Review of privacy laws and use-of-force legal frameworks.",
    duration: "2h 45m",
    students: 156,
    progress: 100,
    category: "Legal",
    image: "https://picsum.photos/seed/legal/400/200"
  }
];

export default function Courses() {
  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline text-white">Course Management</h1>
          <p className="text-muted-foreground mt-1">Design, assign, and monitor training materials.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="secondary" className="bg-white/5 border-none">
            <Settings2 className="w-4 h-4 mr-2" /> Organization
          </Button>
          <Button asChild className="bg-primary hover:bg-primary/90">
            <Link href="/courses/create">
              <Plus className="w-4 h-4 mr-2" /> Create New Course
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
        {courses.map((course) => (
          <Card key={course.id} className="bg-card/50 border-none overflow-hidden group hover:bg-card transition-all duration-300 flex flex-col">
            <div className="relative aspect-video overflow-hidden">
              <img 
                src={course.image} 
                alt={course.title} 
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100" 
              />
              <div className="absolute top-3 left-3">
                <Badge className="bg-black/60 backdrop-blur-md border-none text-[10px] uppercase font-bold tracking-widest px-2 py-1">
                  {course.category}
                </Badge>
              </div>
            </div>
            <CardHeader className="p-5 flex-1">
              <div className="flex justify-between items-start mb-2">
                <CardTitle className="text-lg text-white leading-tight">{course.title}</CardTitle>
                {course.progress === 100 && (
                  <ShieldCheck className="w-5 h-5 text-emerald-500 shrink-0" />
                )}
              </div>
              <CardDescription className="text-sm line-clamp-2">
                {course.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="px-5 pb-5 space-y-4">
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {course.duration}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-3.5 h-3.5" /> {course.students} Trainees
                </div>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between text-[10px] font-bold uppercase text-muted-foreground">
                  <span>Progress</span>
                  <span>{course.progress}%</span>
                </div>
                <Progress value={course.progress} className="h-1.5 bg-white/5" />
              </div>
            </CardContent>
            <CardFooter className="px-5 pb-5 pt-0">
              <Button variant="outline" className="w-full border-white/5 hover:bg-white/10 group-hover:border-primary/30 transition-all">
                Manage Course <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
