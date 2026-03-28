"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Menu, X, ShoppingCart, Code2 } from "lucide-react";
import gsap from "gsap";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cartItems } = useCart();
  const headerRef = useRef(null);

  useEffect(() => {
    // Header entrance
    gsap.fromTo(headerRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 }
    );

    // Nav links stagger
    gsap.fromTo(".nav-link",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.08, ease: "power2.out", delay: 0.5 }
    );

    // Scroll effect
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      ref={headerRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 opacity-0 ${
        scrolled
          ? "bg-[#0F0F1A]/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/20"
          : "bg-[#0F0F1A]/80 backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-white">Maimuna<span className="text-[#6C63FF]">Dev</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link opacity-0 text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#6C63FF] group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <Link href="/cart" className="relative p-2 text-[#A0A0B0] hover:text-white transition-colors">
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6C63FF] text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>
          <Link href="/admin" className="hidden md:block text-sm border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200">
            Admin
          </Link>
          <Link href="/courses" className="hidden md:block text-sm bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105">
            Get Started
          </Link>
          <button className="md:hidden text-white" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A2E] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors">
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/admin" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-sm border border-[#6C63FF] text-[#6C63FF] px-4 py-2 rounded-lg font-medium">Admin</Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-sm bg-[#6C63FF] text-white px-4 py-2 rounded-lg font-medium">Get Started</Link>
          </div>
        </div>
      )}
    </header>
  );
}