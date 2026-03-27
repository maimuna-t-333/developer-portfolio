import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";

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

        {/* Left — Visual */}
        <div className="relative">
          <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-4 mb-6">
              {[
                { value: "5K+", label: "Students Trained", color: "#6C63FF" },
                { value: "80+", label: "Projects Built", color: "#FF6584" },
                { value: "20+", label: "Courses Created", color: "#68A063" },
                { value: "4.9★", label: "Average Rating", color: "#F59E0B" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#0F0F1A] border border-white/10 rounded-xl p-4 text-center"
                >
                  <div className="text-2xl font-bold mb-1" style={{ color: stat.color }}>
                    {stat.value}
                  </div>
                  <div className="text-[#A0A0B0] text-xs">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Profile */}
            <div className="flex items-center gap-4 bg-[#0F0F1A] border border-white/10 rounded-xl p-4">
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
            </div>
          </div>

          {/* Glow */}
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-[#6C63FF]/10 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* Right — Content */}
        <div>
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">About</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            Your Guide to Modern Web Development
          </h2>
          <p className="text-[#A0A0B0] leading-relaxed mb-6">
            I'm a full-stack web developer and educator passionate about making complex concepts simple. Through practical, project-based teaching, I help developers build real skills that employers actually want.
          </p>
          <p className="text-[#A0A0B0] leading-relaxed mb-8">
            Every course is built from real-world experience — not just theory. Every template I sell is one I've actually used in production. I believe the best way to learn is by building things that matter.
          </p>

          {/* Highlights */}
          <ul className="space-y-3 mb-8">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-[#6C63FF] shrink-0 mt-0.5" />
                <span className="text-[#A0A0B0] text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/courses"
            className="inline-flex items-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
          >
            Start Learning Today <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}