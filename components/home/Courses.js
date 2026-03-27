import Link from "next/link";
import { Clock, Users, Star, ArrowRight } from "lucide-react";
import { courses } from "@/data/courses";

export default function Courses() {
  const featured = courses.filter((c) => c.featured);

  return (
    <section className="py-20 px-4 md:px-8 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Learn</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Featured Courses</h2>
            <p className="text-[#A0A0B0] mt-2 max-w-lg">
              Hands-on courses designed to take you from beginner to job-ready.
            </p>
          </div>
          <Link
            href="/courses"
            className="flex items-center gap-2 text-[#6C63FF] hover:text-white font-medium transition-colors shrink-0"
          >
            View All Courses <ArrowRight size={16} />
          </Link>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group bg-[#0F0F1A] border border-white/10 hover:border-[#6C63FF]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6C63FF]/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F1A] to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2">
                  {course.tags.map((tag) => (
                    <span key={tag} className="bg-[#6C63FF]/90 text-white text-xs px-2 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6C63FF] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">{course.description}</p>

                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-[#A0A0B0] mb-4">
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {course.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users size={12} /> {course.students.toLocaleString()}
                  </span>
                  <span className="flex items-center gap-1 text-yellow-400">
                    <Star size={12} fill="currentColor" /> {course.rating}
                  </span>
                </div>

                {/* Price */}
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
          ))}
        </div>
      </div>
    </section>
  );
}