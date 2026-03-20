"use client"

import { useState } from "react";
import { Users, Search, Filter, Plus, Mail, Shield, ChevronRight, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const employees = [
  { id: "1", name: "Alex Rivera", role: "Security Officer", dept: "Logistics", progress: 85, status: "Active", email: "a.rivera@corp.com" },
  { id: "2", name: "Sarah Chen", role: "Sr. Guard", dept: "Front Desk", progress: 92, status: "Active", email: "s.chen@corp.com" },
  { id: "3", name: "Mike Johnson", role: "Security Trainee", dept: "Patrol", progress: 45, status: "Pending", email: "m.johnson@corp.com" },
  { id: "4", name: "Elena Gilbert", role: "Field Supervisor", dept: "Tech Ops", progress: 100, status: "Certified", email: "e.gilbert@corp.com" },
  { id: "5", name: "Marcus Thorne", role: "Security Officer", dept: "Logistics", progress: 78, status: "Active", email: "m.thorne@corp.com" },
  { id: "6", name: "Leila Vance", role: "Entry Guard", dept: "Patrol", progress: 30, status: "Warning", email: "l.vance@corp.com" },
];

export default function Employees() {
  const [search, setSearch] = useState("");

  const filtered = employees.filter(e => 
    e.name.toLowerCase().includes(search.toLowerCase()) || 
    e.dept.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline text-white">Employee Management</h1>
          <p className="text-muted-foreground mt-1">Manage trainee profiles, assignments, and progress tracking.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 shadow-lg shadow-primary/20">
          <Plus className="w-4 h-4 mr-2" /> Add New Trainee
        </Button>
      </div>

      <Card className="bg-card/50 border-none shadow-sm overflow-hidden">
        <div className="p-6 border-b border-white/5 flex flex-col md:flex-row md:items-center gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <Input 
              placeholder="Search by name, department, or role..." 
              className="pl-9 bg-secondary border-none"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Button variant="secondary" size="sm" className="bg-white/5 border-none">
              <Filter className="w-4 h-4 mr-2" /> Filters
            </Button>
            <Button variant="secondary" size="sm" className="bg-white/5 border-none">
              Export CSV
            </Button>
          </div>
        </div>
        <Table>
          <TableHeader>
            <TableRow className="border-white/5 hover:bg-transparent">
              <TableHead className="text-muted-foreground">Employee</TableHead>
              <TableHead className="text-muted-foreground">Department</TableHead>
              <TableHead className="text-muted-foreground">Progress</TableHead>
              <TableHead className="text-muted-foreground">Status</TableHead>
              <TableHead className="text-right text-muted-foreground">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filtered.map((employee) => (
              <TableRow key={employee.id} className="border-white/5 hover:bg-white/5 transition-colors">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-9 w-9 border border-white/10">
                      <AvatarImage src={`https://picsum.photos/seed/${employee.id}/100/100`} />
                      <AvatarFallback>{employee.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-white">{employee.name}</p>
                      <p className="text-xs text-muted-foreground">{employee.role}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <Shield className="w-3 h-3 text-primary opacity-70" />
                    <span className="text-sm">{employee.dept}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3 w-[150px]">
                    <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          employee.progress === 100 ? 'bg-emerald-500' : 'bg-primary'
                        }`}
                        style={{ width: `${employee.progress}%` }}
                      />
                    </div>
                    <span className="text-xs font-medium">{employee.progress}%</span>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge className={`${
                    employee.status === 'Certified' ? 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20' :
                    employee.status === 'Warning' ? 'bg-destructive/10 text-destructive border-destructive/20' :
                    'bg-primary/10 text-primary border-primary/20'
                  } border shadow-none font-medium text-[10px] uppercase tracking-wider`}>
                    {employee.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-right">
                  <div className="flex items-center justify-end gap-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                      <Mail className="w-4 h-4 text-muted-foreground" />
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="bg-popover border-white/10">
                        <DropdownMenuItem>View Profile</DropdownMenuItem>
                        <DropdownMenuItem>Assign Course</DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">Remove</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
}
