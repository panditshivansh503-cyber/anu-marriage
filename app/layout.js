import "./globals.css";
import AppShell from "../components/AppShell";
export const metadata={title:"Anu Marriage",description:"Marriage Expenditure Manager"};
export default function RootLayout({children}){return <html lang="en"><body><AppShell>{children}</AppShell></body></html>}
