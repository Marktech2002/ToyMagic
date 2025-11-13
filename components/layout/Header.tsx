"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import LogoIcon from "@/components/icons/LogoIcon";
import Image from "next/image";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Features", href: "/features" },
  { label: "How it works", href: "/how-it-works" },
  { label: "Download", href: "/download" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="md:sticky top-0 z-50 w-full glassmorphic">
      <div className="container mx-auto px-4 lg:px-16">
        <div className="flex h-16 md:h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            {/* <LogoIcon width={30} height={30} /> */}
            <span className="text-xl txt-fnt md:text-[26px] font-bold text-card-foreground">ToyMagic</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-base font-normal text-foreground hover:text-primary transition-all duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <Button className="hidden md:flex rounded-full px-6 bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50">
            Try Demo
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                className="relative rounded-full hover:bg-primary/10 transition-all duration-300"
              >
                <Menu className={`h-12 w-12 transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`} />
                <X className={`h-12 w-12 absolute transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`} />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-screen h-full border-none p-0 overflow-hidden"
            >
              <div className="flex flex-col glassmorphic h-full justify-center">
                <nav className="flex flex-col items-center justify-center px-6 flex-1">
                  {navItems.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="text-[40px] txt-fnt text-[#3474FF] font-bold hover:text-primary hover:bg-primary/10 transition-all duration-200 px-5 py-4 rounded-2xl group relative overflow-hidden"
                      style={{
                        animation: isOpen ? `slideInRight 0.3s ease-out ${index * 0.1}s both` : "none",
                      }}
                    >
                      <span className="relative z-10">{item.label}</span>
                      <span className="absolute inset-0 bg-linear-to-r from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </Link>
                  ))}
                </nav>

                <div className="p-6 border-t border-border/20">
                  <Button
                    className="w-full txt-fnt rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-primary/50 font-bold text-[24px] py-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Try Demo
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <style jsx global>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}