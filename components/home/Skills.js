"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: "React.js", level: 95, color: "#61DAFB" },
  { name: "Next.js", level: 92, color: "#6C63FF" },
  { name: "Node.js", level: 88, color: "#68A063" },
  { name: "Tailwind CSS", level: 96, color: "#38BDF8" },
  { name: "MongoDB", level: 82, color: "#4DB33D" },
  { name: "TypeScript", level: 85, color: "#3178C6" },
];

const tools = [
  "React", "Next.js", "Node.js", "Express",
  "MongoDB", "PostgreSQL", "Tailwind CSS", "TypeScript",
  "Git", "Docker", "Vercel", "REST APIs",
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const barsRef = useRef(null);
  const toolsRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // Heading animation
      gsap.fromTo(headingRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "top 85%",
          }
        }
      );

      // Skill bars stagger
      gsap.fromTo(".skill-bar-item",
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: barsRef.current,
            start: "top 80%",
          }
        }
      );

      // Animate bar fills
      gsap.utils.toArray(".skill-fill").forEach((bar) => {
        const width = bar.dataset.width;
        gsap.fromTo(bar,
          { width: "0%" },
          {
            width: `${width}%`,
            duration: 1.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
            }
          }
        );
      });

      // Tools stagger
      gsap.fromTo(".tool-chip",
        { scale: 0, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 0.4,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: toolsRef.current,
            start: "top 80%",
          }
        }
      );

      // Stats counter animation
      gsap.fromTo(statsRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 md:px-8 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto">

        <div ref={headingRef} className="text-center mb-14 opacity-0">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Skills & Technologies</h2>
          <p className="text-[#A0A0B0] mt-3 max-w-xl mx-auto">
            Years of hands-on experience building production-grade web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Skill Bars */}
          <div ref={barsRef} className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name} className="skill-bar-item opacity-0">
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                  <span className="text-[#A0A0B0] text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="skill-fill h-full rounded-full"
                    data-width={skill.level}
                    style={{ backgroundColor: skill.color, width: 0 }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Tools & Frameworks</h3>
            <div ref={toolsRef} className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <motion.span
                  key={tool}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(108,99,255,0.2)" }}
                  className="tool-chip opacity-0 bg-white/5 border border-white/10 hover:border-[#6C63FF]/50 text-white text-sm px-4 py-2 rounded-lg cursor-default transition-colors"
                >
                  {tool}
                </motion.span>
              ))}
            </div>

            <div ref={statsRef} className="mt-8 bg-[#1A1A2E] border border-white/10 rounded-2xl p-6 opacity-0">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5+", label: "Years Exp." },
                  { value: "80+", label: "Projects" },
                  { value: "5K+", label: "Students" },
                ].map((item) => (
                  <motion.div key={item.label} whileHover={{ scale: 1.05 }}>
                    <div className="text-2xl font-bold text-[#6C63FF]">{item.value}</div>
                    <div className="text-[#A0A0B0] text-xs mt-1">{item.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}