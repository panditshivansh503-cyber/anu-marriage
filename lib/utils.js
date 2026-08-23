export const CATEGORIES=["Venue","Food","Decoration","Photography","Clothing","Transportation","Invitations","Jewellery","Accommodation","Gifts","Other"];
export const PAYMENT_METHODS=["Cash","UPI","Bank Transfer","Card","Cheque","Other"];
export const money=n=>new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",maximumFractionDigits:0}).format(Number(n)||0);
export const dateLabel=d=>d?new Intl.DateTimeFormat("en-IN",{day:"2-digit",month:"short",year:"numeric"}).format(new Date(d)):"-";
export const uid=()=>crypto.randomUUID();
