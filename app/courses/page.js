import Link from "next/link";
import { Clock, Users, Star } from "lucide-react";
import { courses } from "@/data/courses";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">All Courses</span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-4">Learn Web Development</h1>
          <p className="text-[#A0A0B0] max-w-xl mx-auto">
            Practical, project-based courses to take your skills to the next level.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.id}
              href={`/courses/${course.slug}`}
              className="group bg-[#1A1A2E] border border-white/10 hover:border-[#6C63FF]/50 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#6C63FF]/10"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover ..."
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.style.background = "linear-gradient(135deg, #1A1A2E, #6C63FF33)";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E] to-transparent" />
                <div className="absolute top-3 left-3 flex gap-2 flex-wrap">
                  {course.tags.map((tag) => (
                    <span key={tag} className="bg-[#6C63FF]/90 text-white text-xs px-2 py-1 rounded-md font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-5">
                <div className="text-xs text-[#A0A0B0] mb-2">{course.level}</div>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#6C63FF] transition-colors">
                  {course.title}
                </h3>
                <p className="text-[#A0A0B0] text-sm mb-4 line-clamp-2">{course.description}</p>

                <div className="flex items-center gap-4 text-xs text-[#A0A0B0] mb-4">
                  <span className="flex items-center gap-1"><Clock size={12} /> {course.duration}</span>
                  <span className="flex items-center gap-1"><Users size={12} /> {course.students.toLocaleString()}</span>
                  <span className="flex items-center gap-1 text-yellow-400"><Star size={12} fill="currentColor" /> {course.rating}</span>
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
          ))}
        </div>
      </div>
    </div>
  );
}