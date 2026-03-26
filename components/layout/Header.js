"use client";
import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Menu, X, ShoppingCart, Code2 } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Templates", href: "/templates" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0F0F1A]/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="w-8 h-8 bg-[#6C63FF] rounded-lg flex items-center justify-center">
            <Code2 size={18} className="text-white" />
          </div>
          <span className="text-white">Dev<span className="text-[#6C63FF]">Trainer</span></span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          {/* Cart */}
          <Link href="/cart" className="relative p-2 text-[#A0A0B0] hover:text-white transition-colors">
            <ShoppingCart size={20} />
            {cartItems.length > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#6C63FF] text-white text-xs rounded-full flex items-center justify-center font-bold">
                {cartItems.length}
              </span>
            )}
          </Link>

          {/* Admin */}
          <Link
            href="/admin"
            className="hidden md:block text-sm border border-[#6C63FF] text-[#6C63FF] hover:bg-[#6C63FF] hover:text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200"
          >
            Admin
          </Link>

          {/* Get Started */}
          <Link
            href="/courses"
            className="hidden md:block text-sm bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-1.5 rounded-lg font-medium transition-all duration-200"
          >
            Get Started
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#1A1A2E] border-t border-white/10 px-4 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[#A0A0B0] hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 pt-2">
            <Link href="/admin" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-sm border border-[#6C63FF] text-[#6C63FF] px-4 py-2 rounded-lg font-medium">
              Admin
            </Link>
            <Link href="/courses" onClick={() => setMenuOpen(false)} className="flex-1 text-center text-sm bg-[#6C63FF] text-white px-4 py-2 rounded-lg font-medium">
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}