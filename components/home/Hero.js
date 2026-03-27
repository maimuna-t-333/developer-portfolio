"use client";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F1A]">

      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6C63FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF6584]/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-6">
            <Star size={14} className="text-[#6C63FF]" fill="#6C63FF" />
            <span className="text-[#6C63FF] text-sm font-medium">#1 Web Development Trainer</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Master{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              Modern Web
            </span>
            <br />
            Development
          </h1>

          <p className="text-[#A0A0B0] text-lg leading-relaxed mb-8 max-w-lg">
            Learn React, Next.js, Node.js and more with hands-on projects. Download premium templates to kickstart your builds faster.
          </p>

          {/* Stats */}
          <div className="flex gap-8 mb-8">
            {[
              { value: "5K+", label: "Students" },
              { value: "20+", label: "Courses" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[#A0A0B0] text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/courses"
              className="flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
            >
              Explore Courses <ArrowRight size={18} />
            </Link>
            <Link
              href="/templates"
              className="flex items-center gap-2 border border-white/20 hover:border-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5"
            >
              <Play size={18} className="text-[#6C63FF]" /> Browse Templates
            </Link>
          </div>
        </div>

        {/* Right — Visual Card */}
        <div className="relative hidden lg:block">
          {/* Main Card */}
          <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="ml-2 text-[#A0A0B0] text-xs">App.jsx</span>
            </div>
            <pre className="text-sm leading-relaxed font-mono">
              <span className="text-[#FF6584]">import </span>
              <span className="text-white">{"{ useState }"} </span>
              <span className="text-[#FF6584]">from </span>
              <span className="text-green-400">react</span>
              <span className="text-white">{"\n\n"}</span>
              <span className="text-[#6C63FF]">export default </span>
              <span className="text-yellow-400">function </span>
              <span className="text-white">App() {"{"}</span>
              <span className="text-white">{"\n  "}</span>
              <span className="text-[#FF6584]">const </span>
              <span className="text-white">[count, setCount] =</span>
              <span className="text-yellow-400"> useState</span>
              <span className="text-white">(0){"\n\n  "}</span>
              <span className="text-[#FF6584]">return </span>
              <span className="text-white">{"(\n    "}</span>
              <span className="text-[#6C63FF]">{"<div>"}</span>
              <span className="text-white">{"\n      "}</span>
              <span className="text-[#6C63FF]">{"<h1>"}</span>
              <span className="text-green-400">Hello World 🚀</span>
              <span className="text-[#6C63FF]">{"</h1>"}</span>
              <span className="text-white">{"\n    "}</span>
              <span className="text-[#6C63FF]">{"</div>"}</span>
              <span className="text-white">{"\n  )\n}"}</span>
            </pre>
          </div>

          {/* Floating Cards */}
          <div className="absolute -top-6 -right-6 bg-[#6C63FF] text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
            ✓ Project Complete
          </div>
          <div className="absolute -bottom-6 -left-6 bg-[#1A1A2E] border border-white/10 rounded-xl px-4 py-3 shadow-lg">
            <div className="text-xs text-[#A0A0B0] mb-1">Next lesson</div>
            <div className="text-white text-sm font-semibold">React Hooks Deep Dive</div>
          </div>
        </div>
      </div>
    </section>
  );
}