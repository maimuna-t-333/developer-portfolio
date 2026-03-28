"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Courses() {
  const sectionRef = useRef(null);
  const featured = courses.filter((c) => c.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(".courses-heading",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: ".courses-heading", start: "top 85%" }
        }
      );

      gsap.fromTo(".course-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".course-card",
            start: "top 85%",
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-3 sm:px-4 md:px-8 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">

        <div className="courses-heading opacity-0 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Learn</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured Courses</h2>
            <p className="text-[#A0A0B0] mt-2 max-w-lg">Hands-on courses designed to take you from beginner to job-ready.</p>
          </div>
          <Link href="/courses" className="flex items-center gap-2 text-[#6C63FF] hover:text-white font-medium transition-colors shrink-0">
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <motion.div
              key={course.id}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(108,99,255,0.15)" }}
              className="course-card opacity-0"
            >
              <Link
                href={`/courses/${course.slug}`}
                className="group block bg-[#0F0F1A] border border-white/10 hover:border-[#6C63FF]/50 rounded-2xl overflow-hidden transition-colors duration-300"
              >
                <div className="relative overflow-hidden h-48">
                  <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] to-transparent" />
                  <div className="absolute top-3 left-3 flex gap-2">
                    {course.tags.map((tag) => (
                      <span key={tag} className="bg-[#6C63FF]/90 text-white text-xs px-2 py-1 rounded-md font-medium">{tag}</span>
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6C63FF] transition-colors">{course.title}</h3>
                  <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">{course.description}</p>
                  <div className="flex items-center gap-4 text-xs text-[#A0A0B0] mb-4">
                    <span className="flex items-center gap-1"><Clock size={12} />{course.duration}</span>
                    <span className="flex items-center gap-1"><Users size={12} />{course.students.toLocaleString()}</span>
                    <span className="flex items-center gap-1 text-yellow-400"><Star size={12} fill="currentColor" />{course.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-white font-bold text-xl">${course.price}</span>
                      <span className="text-[#A0A0B0] text-sm line-through">${course.originalPrice}</span>
                    </div>
                    <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium">
                      {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
