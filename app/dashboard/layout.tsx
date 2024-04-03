"use client";

import { useState, useCallback } from "react";
import { useMediaQuery } from "@/hooks/use-media-query";

import MainMenu from "./components/main-menu";
import MobileMenu from "./components/mobile-menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpenChange = useCallback((open: boolean) => {
    setMobileMenuOpen(open);
  }, []);

  return (
    <div className="md:grid md:grid-cols-[250px_1fr] h-screen">
      <MainMenu className="hidden md:flex" />
      {!isDesktop && <MobileMenu isOpen={mobileMenuOpen} onOpenChange={handleMobileMenuOpenChange} />}
      <div className="overflow-auto py-2 px-4">
        <h1 className="pb-4">Welcome back, Tom!</h1>
        {children}
      </div>
    </div>
  );
}