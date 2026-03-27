"use client";
import { Star } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Frontend Developer @ Google",
    avatar: "SJ",
    rating: 5,
    text: "The React course completely changed my career. I went from zero to landing a job at Google in 6 months. The projects are real-world and the explanations are crystal clear.",
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Full-Stack Developer",
    avatar: "AH",
    rating: 5,
    text: "Best investment I've made in my developer journey. The Next.js bootcamp is incredibly detailed. I built and deployed 3 real apps during the course.",
  },
  {
    id: 3,
    name: "Priya Sharma",
    role: "Freelance Web Developer",
    avatar: "PS",
    rating: 5,
    text: "The templates alone are worth 10x the price. I used the SaaS template for a client project and saved 40+ hours of work. Absolutely professional quality.",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 px-4 md:px-8 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Reviews</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">What Students Say</h2>
          <p className="text-[#A0A0B0] mt-3 max-w-xl mx-auto">
            Join thousands of developers who leveled up their careers.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -6, borderColor: "rgba(108,99,255,0.4)" }}
              className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 transition-colors duration-300"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Star size={14} className="text-yellow-400" fill="currentColor" />
                  </motion.div>
                ))}
              </div>
              <p className="text-[#A0A0B0] text-sm leading-relaxed mb-6">"{t.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#6C63FF] flex items-center justify-center text-white text-sm font-bold shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{t.name}</div>
                  <div className="text-[#A0A0B0] text-xs">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-[#0F0F1A] border border-white/10 rounded-2xl px-8 py-4">
            <div className="text-4xl font-bold text-white">4.9</div>
            <div>
              <div className="flex gap-1 mb-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400" fill="currentColor" />
                ))}
              </div>
              <div className="text-[#A0A0B0] text-sm">Based on 5,000+ reviews</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}