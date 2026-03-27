"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Hero() {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const statsRef = useRef(null);
  const ctaRef = useRef(null);
  const codeCardRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline for hero entrance
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(orb1Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }
      )
      .fromTo(orb2Ref.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.5 }, "-=1.2"
      )
      .fromTo(".hero-badge",
        { y: -30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 }, "-=0.5"
      )
      .fromTo(titleRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8 }, "-=0.3"
      )
      .fromTo(subtitleRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7 }, "-=0.4"
      )
      .fromTo(statsRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.15 }, "-=0.3"
      )
      .fromTo(ctaRef.current.children,
        { y: 20, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, stagger: 0.1 }, "-=0.2"
      )
      .fromTo(codeCardRef.current,
        { x: 80, opacity: 0, rotateY: 15 },
        { x: 0, opacity: 1, rotateY: 0, duration: 1 }, "-=0.8"
      );

      // Floating animation for code card
      gsap.to(codeCardRef.current, {
        y: -15,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulsing orbs
      gsap.to(orb1Ref.current, {
        scale: 1.2,
        opacity: 0.35,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(orb2Ref.current, {
        scale: 1.3,
        opacity: 0.2,
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });

      // Floating dots
      gsap.utils.toArray(".hero-dot").forEach((dot, i) => {
        gsap.to(dot, {
          y: -20,
          opacity: 0.8,
          duration: 2 + i * 0.3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: i * 0.4,
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F0F1A]">

      {/* Orbs */}
      <div ref={orb1Ref} className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#6C63FF]/20 rounded-full blur-[120px] pointer-events-none" />
      <div ref={orb2Ref} className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#FF6584]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Floating Dots */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="hero-dot absolute w-1.5 h-1.5 bg-[#6C63FF] rounded-full opacity-30"
          style={{
            left: `${8 + i * 12}%`,
            top: `${15 + (i % 4) * 20}%`,
          }}
        />
      ))}

      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(108,99,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(108,99,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <div>
          <div className="hero-badge inline-flex items-center gap-2 bg-[#6C63FF]/10 border border-[#6C63FF]/30 rounded-full px-4 py-1.5 mb-6 opacity-0">
            <Star size={14} className="text-[#6C63FF]" fill="#6C63FF" />
            <span className="text-[#6C63FF] text-sm font-medium">#1 Web Development Trainer</span>
          </div>

          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 opacity-0">
            Master{" "}
            <span className="bg-gradient-to-r from-[#6C63FF] to-[#FF6584] bg-clip-text text-transparent">
              Modern Web
            </span>
            <br />Development
          </h1>

          <p ref={subtitleRef} className="text-[#A0A0B0] text-lg leading-relaxed mb-8 max-w-lg opacity-0">
            Learn React, Next.js, Node.js and more with hands-on projects. Download premium templates to kickstart your builds faster.
          </p>

          <div ref={statsRef} className="flex gap-8 mb-8">
            {[
              { value: "5K+", label: "Students" },
              { value: "20+", label: "Courses" },
              { value: "4.9★", label: "Rating" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.1 }}
                className="cursor-default opacity-0"
              >
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[#A0A0B0] text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="opacity-0">
              <Link href="/courses" className="flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Explore Courses <ArrowRight size={18} />
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="opacity-0">
              <Link href="/templates" className="flex items-center gap-2 border border-white/20 hover:border-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold transition-colors hover:bg-white/5">
                <Play size={18} className="text-[#6C63FF]" /> Browse Templates
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Right — Code Card */}
        <div ref={codeCardRef} className="relative hidden lg:block opacity-0">
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
              <span className="text-green-400">'react'</span>
              {"\n\n"}
              <span className="text-[#6C63FF]">export default </span>
              <span className="text-yellow-400">function </span>
              <span className="text-white">App() {"{"}</span>
              {"\n  "}
              <span className="text-[#FF6584]">const </span>
              <span className="text-white">[count, setCount] =</span>
              <span className="text-yellow-400"> useState</span>
              <span className="text-white">(0)</span>
              {"\n\n  "}
              <span className="text-[#FF6584]">return </span>
              <span className="text-white">{"(\n    "}</span>
              <span className="text-[#6C63FF]">{"<div>"}</span>
              {"\n      "}
              <span className="text-[#6C63FF]">{"<h1>"}</span>
              <span className="text-green-400">Hello World 🚀</span>
              <span className="text-[#6C63FF]">{"</h1>"}</span>
              {"\n    "}
              <span className="text-[#6C63FF]">{"</div>"}</span>
              {"\n  )\n}"}
            </pre>
          </div>

          {/* Floating badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.5 }}
            whileHover={{ scale: 1.08 }}
            className="absolute -top-6 -right-6 bg-[#6C63FF] text-white rounded-xl px-4 py-2 text-sm font-semibold shadow-lg cursor-default"
          >
            ✓ Project Complete
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.08 }}
            className="absolute -bottom-6 -left-6 bg-[#1A1A2E] border border-white/10 rounded-xl px-4 py-3 shadow-lg cursor-default"
          >
            <div className="text-xs text-[#A0A0B0] mb-1">Next lesson</div>
            <div className="text-white text-sm font-semibold">React Hooks Deep Dive</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}