"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, CheckCircle, PlayCircle, ShoppingCart, Star, Users } from "lucide-react";
import { courses } from "@/data/courses";
import { useCart } from "@/context/CartContext";

export default function SingleCoursePage() {
  const { slug } = useParams();
  const { addToCart, cartItems } = useCart();
  const course = courses.find((item) => item.slug === slug);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0F0F1A] flex items-center justify-center px-4">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Course not found</h2>
          <Link href="/courses" className="text-[#6C63FF] hover:underline">
            Back to Courses
          </Link>
        </div>
      </div>
    );
  }

  const inCart = cartItems.some((item) => item.id === course.id);

  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/courses" className="inline-flex items-center gap-2 text-[#A0A0B0] hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="flex gap-2 flex-wrap mb-4">
              {course.tags.map((tag) => (
                <span key={tag} className="bg-[#6C63FF]/20 text-[#6C63FF] text-xs px-3 py-1 rounded-full font-medium">
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{course.title}</h1>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-6">{course.description}</p>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#A0A0B0] mb-8">
              <span className="flex items-center gap-2">
                <Users size={16} /> {course.students.toLocaleString()} students
              </span>
              <span className="flex items-center gap-2 text-yellow-400">
                <Star size={16} fill="currentColor" /> {course.rating}
              </span>
              <span>{course.duration}</span>
              <span>{course.level}</span>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
              <img src={course.image} alt={course.title} className="w-full h-[340px] object-cover" />
            </div>

            <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-xl mb-4">What You Will Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Build real-world projects step by step",
                  "Write production-quality frontend code",
                  "Understand architecture and best practices",
                  "Create reusable UI components",
                  "Ship responsive interfaces confidently",
                  "Apply the workflow to your own products",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#6C63FF] shrink-0" />
                    <span className="text-[#A0A0B0] text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span className="text-3xl font-bold text-white">${course.price}</span>
                <span className="text-[#A0A0B0] line-through">${course.originalPrice}</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium">
                  {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF
                </span>
              </div>

              <p className="text-[#A0A0B0] text-sm mb-6">Lifetime access with all future updates included.</p>

              <button
                onClick={() => addToCart(course)}
                disabled={inCart}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 mb-3 ${
                  inCart
                    ? "bg-green-500/20 text-green-400 cursor-default"
                    : "bg-[#6C63FF] hover:bg-[#5a52d5] text-white hover:scale-105"
                }`}
              >
                <ShoppingCart size={16} />
                {inCart ? "Added to Cart" : "Enroll Now"}
              </button>

              <Link
                href="/cart"
                className="block w-full text-center border border-white/20 hover:border-[#6C63FF] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5"
              >
                Go to Cart
              </Link>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold text-sm mb-3">Course Format</h4>
                <div className="space-y-3 text-sm text-[#A0A0B0]">
                  <div className="flex items-center gap-2">
                    <PlayCircle size={16} className="text-[#6C63FF]" />
                    On-demand lessons and project walkthroughs
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#6C63FF]" />
                    Downloadable resources and source code
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-[#6C63FF]" />
                    Structured learning path from fundamentals to delivery
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
