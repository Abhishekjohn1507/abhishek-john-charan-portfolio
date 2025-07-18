import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";
import { ThemeProvider } from "@/components/ui/theme-provider";





export const metadata: Metadata = {
  title: "Abhishek John Portfolio",
  description: "Showcase of Abhishek John’s projects, skills, and experience as a web developer. Explore my work, background, and contact information.",
};

const inter =Inter({subsets:["latin"]})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
   
        className={`${inter.className}antialiased`}
      >  <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >

           <Navbar/>
           
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
