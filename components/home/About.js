"use client";
import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  "5+ years of professional web development experience",
  "Worked with 50+ clients across startups and enterprises",
  "Built and shipped 80+ production web applications",
  "Trained 5,000+ students worldwide",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 md:px-8 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "5K+", label: "Students Trained", color: "#6C63FF" },
                { value: "80+", label: "Projects Built", color: "#FF6584" },
                { value: "20+", label: "Courses Created", color: "#68A063" },
                { value: "4.9★", label: "Average Rating", color: "#F59E0B" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-[#0F0F1A] border border-white/10 rounded-xl p-4 text-center cursor-default"
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>{stat.value}</div>
                  <div className="text-[#A0A0B0] text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-4 bg-[#0F0F1A] border border-white/10 rounded-xl p-4"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#6C63FF] to-[#FF6584] flex items-center justify-center text-white font-bold text-xl shrink-0">
                DT
              </div>
              <div>
                <div className="text-white font-bold">Dev Trainer</div>
                <div className="text-[#A0A0B0] text-sm">Full-Stack Web Developer & Educator</div>
                <div className="flex gap-2 mt-2">
                  {["React", "Next.js", "Node.js"].map((tag) => (
                    <span key={tag} className="text-xs bg-[#6C63FF]/20 text-[#6C63FF] px-2 py-0.5 rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#6C63FF]/10 rounded-full blur-3xl pointer-events-none" />
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#6C63FF] lg:text-3xl text-sm font-semibold uppercase tracking-widest">About Me</span>

          <p>
            I'm Maimuna Tabassum, a passionate full-stack developer and instructor.
            I help students learn modern web development through real-world projects
            and practical learning.
          </p>

          <ul className="space-y-3 mb-8">
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-3"
              >
                <CheckCircle size={18} className="text-[#6C63FF] shrink-0 mt-0.5" />
                <span className="text-[#A0A0B0] text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-3 rounded-xl font-semibold transition-colors duration-300"
            >
              Start Learning Today <ArrowRight size={18} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}