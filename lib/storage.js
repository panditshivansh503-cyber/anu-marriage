export const KEYS={people:"anu_marriage_people",expenses:"anu_marriage_expenses"};
export const getData=(key,fallback=[])=>{if(typeof window==="undefined")return fallback;try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}};
export const setData=(key,value)=>localStorage.setItem(key,JSON.stringify(value));
export const getPeople=()=>getData(KEYS.people,[]);
export const getExpenses=()=>getData(KEYS.expenses,[]);
export const savePeople=p=>setData(KEYS.people,p);
export const saveExpenses=e=>setData(KEYS.expenses,e);
export function totals(people,expenses){
 const personWise=people.map(p=>{const es=expenses.filter(e=>e.personId===p.id);return {...p,expenses:es.length,total:es.reduce((s,e)=>s+Number(e.amount),0)}}).filter(p=>p.expenses||p.name);
 const categoryWise=Object.values(expenses.reduce((a,e)=>{a[e.category]??={_id:e.category,total:0};a[e.category].total+=Number(e.amount);return a},{})).sort((a,b)=>b.total-a.total);
 const monthly=Object.values(expenses.reduce((a,e)=>{const k=e.date.slice(0,7);a[k]??={_id:k,total:0};a[k].total+=Number(e.amount);return a},{})).sort((a,b)=>a._id.localeCompare(b._id));
 return {totalExpenditure:expenses.reduce((s,e)=>s+Number(e.amount),0),totalExpenses:expenses.length,totalPeople:people.length,highestExpense:expenses.length?[...expenses].sort((a,b)=>b.amount-a.amount)[0]:null,lowestExpense:expenses.length?[...expenses].sort((a,b)=>a.amount-b.amount)[0]:null,personWise,categoryWise,monthly};
}
