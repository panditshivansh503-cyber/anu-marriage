"use client";
import {useEffect,useState} from "react";
import Link from "next/link";
import {CATEGORIES,PAYMENT_METHODS,uid} from "../lib/utils";
import {getPeople,getExpenses,saveExpenses} from "../lib/storage";
export default function ExpenseForm({initial,onDone}){
 const [people,setPeople]=useState([]),[form,setForm]=useState({personId:"",title:"",category:"Venue",amount:"",date:new Date().toISOString().slice(0,10),paymentMethod:"Cash",notes:"",...initial}),[msg,setMsg]=useState("");
 useEffect(()=>setPeople(getPeople()),[]);
 const ch=e=>setForm({...form,[e.target.name]:e.target.value});
 const submit=e=>{e.preventDefault();if(!form.personId)return setMsg("Please select a person.");if(Number(form.amount)<=0)return setMsg("Amount must be greater than 0.");const old=getExpenses();const person=people.find(p=>p.id===form.personId);const item={id:initial?.id||uid(),...form,amount:Number(form.amount),personName:person?.name||""};saveExpenses(initial?old.map(x=>x.id===initial.id?item:x):[item,...old]);onDone?.(item);setMsg("Expense saved successfully.");};
 return <form onSubmit={submit} className="bg-white border rounded-2xl p-6 space-y-5">{msg&&<div className="bg-rose-50 text-rose-700 p-3 rounded-xl text-sm">{msg}</div>}<div className="grid md:grid-cols-2 gap-5">
 <label className="space-y-2"><span className="text-sm font-semibold">Person Name</span><select required name="personId" value={form.personId} onChange={ch} className="w-full border rounded-xl px-3 py-3"><option value="">Select person</option>{people.map(p=><option key={p.id} value={p.id}>{p.name}</option>)}</select><Link href="/people" className="text-xs text-rose-600">+ Add New Person</Link></label>
 <label className="space-y-2"><span className="text-sm font-semibold">Expense Title</span><input required name="title" value={form.title} onChange={ch} placeholder="Wedding Hall" className="w-full border rounded-xl px-3 py-3"/></label>
 <label className="space-y-2"><span className="text-sm font-semibold">Category</span><select name="category" value={form.category} onChange={ch} className="w-full border rounded-xl px-3 py-3">{CATEGORIES.map(x=><option key={x}>{x}</option>)}</select></label>
 <label className="space-y-2"><span className="text-sm font-semibold">Amount (₹)</span><input required min="0.01" type="number" name="amount" value={form.amount} onChange={ch} className="w-full border rounded-xl px-3 py-3" placeholder="50000"/></label>
 <label className="space-y-2"><span className="text-sm font-semibold">Date</span><input required type="date" name="date" value={form.date?.slice(0,10)} onChange={ch} className="w-full border rounded-xl px-3 py-3"/></label>
 <label className="space-y-2"><span className="text-sm font-semibold">Payment Method</span><select name="paymentMethod" value={form.paymentMethod} onChange={ch} className="w-full border rounded-xl px-3 py-3">{PAYMENT_METHODS.map(x=><option key={x}>{x}</option>)}</select></label>
 </div><label className="block space-y-2"><span className="text-sm font-semibold">Notes</span><textarea name="notes" value={form.notes} onChange={ch} rows="4" className="w-full border rounded-xl px-3 py-3"/></label><div className="flex gap-3"><button className="bg-rose-600 text-white px-5 py-3 rounded-xl font-semibold">{initial?"Update Expense":"Save Expense"}</button><Link href="/expenses" className="border px-5 py-3 rounded-xl font-semibold">Cancel</Link></div></form>
}
