"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [theme, setTheme] = useState("");

  const handleTheme = (theme: string) => {
    setTheme(theme === "default" ? "" : theme);
  };

  return (
    <html lang="en">
      <body
        className={cn(
          `${geistSans.variable} ${geistMono.variable} dark`,
          theme
        )}
      >
        <RadioGroup onValueChange={handleTheme} defaultValue="default">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="default" id="r1" />
            <label htmlFor="r1">Default</label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="example_1" id="r2" />
            <label htmlFor="r2">example_1</label>
          </div>
        </RadioGroup>
        {children}
      </body>
    </html>
  );
}
