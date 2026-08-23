"use client";
import {useState} from "react";
import Link from "next/link";
import {Menu,X,LayoutDashboard,Receipt,PlusCircle,Users,BarChart3,Heart} from "lucide-react";
import {usePathname} from "next/navigation";
const links=[["/","Dashboard",LayoutDashboard],["/expenses","Expenses",Receipt],["/expenses/add","Add Expense",PlusCircle],["/people","People",Users],["/reports","Reports",BarChart3]];
export default function AppShell({children}){
 const [open,setOpen]=useState(false),path=usePathname();
 return <div className="min-h-screen bg-slate-50">
  <aside className={`fixed z-50 inset-y-0 left-0 w-72 bg-white border-r p-5 transition-transform lg:translate-x-0 ${open?"translate-x-0":"-translate-x-full"}`}>
   <div className="flex justify-between items-center mb-8"><Link href="/" onClick={()=>setOpen(false)} className="flex gap-3 items-center"><div className="w-11 h-11 rounded-2xl bg-rose-100 text-rose-600 grid place-items-center"><Heart/></div><div><b className="text-xl">Anu Marriage</b><div className="text-xs text-slate-500">Expenditure Manager</div></div></Link><button className="lg:hidden" onClick={()=>setOpen(false)}><X/></button></div>
   <nav className="space-y-2">{links.map(([href,label,Icon])=><Link key={href} href={href} onClick={()=>setOpen(false)} className={`flex gap-3 items-center px-4 py-3 rounded-xl font-medium ${path===href||(href!=="/"&&path.startsWith(href))?"bg-rose-50 text-rose-700":"text-slate-600 hover:bg-slate-50"}`}><Icon size={19}/>{label}</Link>)}</nav>
  </aside>
  <div className="lg:pl-72"><header className="sticky top-0 z-30 bg-white/90 backdrop-blur border-b px-4 py-4"><button className="lg:hidden p-2" onClick={()=>setOpen(true)}><Menu/></button></header><main className="p-4 sm:p-6 lg:p-8 max-w-[1600px] mx-auto">{children}</main></div>
 </div>
}
