import Link from "next/link";
import { Eye } from "lucide-react";
import { templates } from "@/data/templates";

export default function TemplatesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Templates</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Digital Templates</h1>
          <p className="text-[#A0A0B0] max-w-xl mx-auto">
            Premium, production-ready templates to accelerate your projects.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              className="group bg-[#1A1A2E] border border-white/10 hover:border-[#6C63FF]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={template.image}
                  alt={template.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Link
                    href={`/templates/${template.slug}`}
                    className="flex items-center gap-1 bg-white text-[#0F0F1A] text-xs font-semibold px-3 py-2 rounded-lg"
                  >
                    <Eye size={14} /> Preview
                  </Link>
                </div>
                <span className="absolute top-3 left-3 bg-[#6C63FF]/90 text-white text-xs px-2 py-1 rounded-md font-medium">
                  {template.category}
                </span>
              </div>

              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#6C63FF] transition-colors">
                  {template.title}
                </h3>
                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">{template.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {template.tech.map((t) => (
                    <span key={t} className="text-xs bg-white/5 border border-white/10 text-[#A0A0B0] px-2 py-1 rounded-md">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-white font-bold text-xl">${template.price}</span>
                    <span className="text-[#A0A0B0] text-sm line-through">${template.originalPrice}</span>
                  </div>
                  <Link
                    href={`/templates/${template.slug}`}
                    className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white text-sm px-3 py-2 rounded-lg font-medium transition-colors"
                  >
                    Get It
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}