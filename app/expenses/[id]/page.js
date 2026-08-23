"use client";
import {useParams,useSearchParams,useRouter} from "next/navigation";
import {useEffect,useState} from "react";
import Link from "next/link";
import ExpenseForm from "../../../components/ExpenseForm";
import {getExpenses} from "../../../lib/storage";
import {money,dateLabel} from "../../../lib/utils";
export default function Detail(){const{id}=useParams(),params=useSearchParams(),router=useRouter();const[e,setE]=useState(null);useEffect(()=>{setE(getExpenses().find(x=>x.id===id))},[id]);if(!e)return <div>Expense not found.</div>;if(params.get("edit"))return <div className="max-w-4xl mx-auto space-y-5"><h1 className="text-3xl font-bold">Edit Expense</h1><ExpenseForm initial={e} onDone={()=>router.push(`/expenses/${id}`)}/></div>;return <div className="max-w-3xl mx-auto bg-white border rounded-2xl p-7 space-y-5"><div className="flex justify-between"><div><h1 className="text-3xl font-bold">{e.title}</h1><p className="text-slate-500">{e.personName}</p></div><Link href={`/expenses/${id}?edit=1`} className="border px-4 py-2 rounded-xl">Edit</Link></div><div className="grid sm:grid-cols-2 gap-4">{[["Amount",money(e.amount)],["Category",e.category],["Date",dateLabel(e.date)],["Payment",e.paymentMethod],["Notes",e.notes||"-"]].map(([a,b])=><div key={a} className="bg-slate-50 p-4 rounded-xl"><small className="text-slate-500">{a}</small><div className="font-semibold mt-1">{b}</div></div>)}</div></div>}
