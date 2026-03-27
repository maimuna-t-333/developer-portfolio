"use client";
import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Download, Eye } from "lucide-react";
import { templates } from "@/data/templates";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Products() {
  const sectionRef = useRef(null);
  const featured = templates.filter((t) => t.featured);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.fromTo(".products-heading",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.7,
          scrollTrigger: { trigger: ".products-heading", start: "top 85%" }
        }
      );

      gsap.fromTo(".product-card",
        { y: 60, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".product-card",
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

        <div className="products-heading opacity-0 flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Resources</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Digital Templates</h2>
            <p className="text-[#A0A0B0] mt-2 max-w-lg">Premium, production-ready templates built with modern technologies.</p>
          </div>
          <Link href="/templates" className="flex items-center gap-2 text-[#6C63FF] hover:text-white font-medium transition-colors shrink-0">
            View All Templates <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((template) => (
            <motion.div
              key={template.id}
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(108,99,255,0.15)" }}
              className="product-card opacity-0 group bg-[#1A1A2E] border border-white/10 hover:border-[#6C63FF]/50 rounded-2xl overflow-hidden transition-colors duration-300"
            >
              <div className="relative overflow-hidden h-48">
                <img src={template.image} alt={template.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link href={`/templates/${template.slug}`} className="flex items-center gap-1 bg-white text-[#0F0F1A] text-xs font-semibold px-3 py-2 rounded-lg hover:bg-[#6C63FF] hover:text-white transition-colors">
                    <Eye size={14} /> Preview
                  </Link>
                </div>
                <span className="absolute top-3 left-3 bg-[#6C63FF]/90 text-white text-xs px-2 py-1 rounded-md font-medium">{template.category}</span>
              </div>
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#6C63FF] transition-colors">{template.title}</h3>
                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">{template.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 text-[#A0A0B0] px-2 py-1 rounded-md">{t}</span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-xl">${template.price}</span>
                    <span className="text-[#A0A0B0] text-sm line-through">${template.originalPrice}</span>
                  </div>
                  <Link href={`/templates/${template.slug}`} className="flex items-center gap-1 bg-[#6C63FF] hover:bg-[#5a52d5] text-white text-sm px-3 py-2 rounded-lg font-medium transition-colors">
                    <Download size={14} /> Get It
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}