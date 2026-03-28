"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Download, CheckCircle } from "lucide-react";
import { templates } from "@/data/templates";
import { useCart } from "@/context/CartContext";

export default function SingleTemplatePage() {
  const { slug } = useParams();
  const { addToCart, cartItems } = useCart();
  const template = templates.find((item) => item.slug === slug);

  if (!template) {
    return (
      <div className="min-h-screen bg-[#0F0F1A] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-white text-2xl font-bold mb-4">Template not found</h2>
          <Link href="/templates" className="text-[#6C63FF] hover:underline">
            Back to Templates
          </Link>
        </div>
      </div>
    );
  }

  const inCart = cartItems.some((item) => item.id === template.id);

  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/templates" className="inline-flex items-center gap-2 text-[#A0A0B0] hover:text-white mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Templates
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <span className="inline-block bg-[#6C63FF]/20 text-[#6C63FF] text-xs px-3 py-1 rounded-full font-medium mb-4">
              {template.category}
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{template.title}</h1>
            <p className="text-[#A0A0B0] text-lg leading-relaxed mb-6">{template.description}</p>

            <div className="rounded-2xl overflow-hidden border border-white/10 mb-8">
              <img
                src={template.image}
                alt={template.title}
                className="w-full h-full object-cover ..."
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.style.background = "linear-gradient(135deg, #1A1A2E, #6C63FF33)";
                }}
              />
            </div>

            <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
              <h2 className="text-white font-bold text-xl mb-4">What&apos;s Included</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {[
                  "Full source code included",
                  "Mobile responsive design",
                  "Clean and commented code",
                  "Easy to customize",
                  "Free future updates",
                  "Documentation included",
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
                <span className="text-3xl font-bold text-white">${template.price}</span>
                <span className="text-[#A0A0B0] line-through">${template.originalPrice}</span>
                <span className="text-xs bg-green-500/20 text-green-400 px-2 py-1 rounded-md font-medium">
                  {Math.round((1 - template.price / template.originalPrice) * 100)}% OFF
                </span>
              </div>

              <p className="text-[#A0A0B0] text-sm mb-6">One-time payment. Lifetime access.</p>

              <button
                onClick={() => addToCart(template)}
                disabled={inCart}
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-all duration-300 mb-3 ${inCart
                    ? "bg-green-500/20 text-green-400 cursor-default"
                    : "bg-[#6C63FF] hover:bg-[#5a52d5] text-white hover:scale-105"
                  }`}
              >
                <Download size={16} />
                {inCart ? "Added to Cart" : "Add to Cart"}
              </button>

              <Link
                href="/cart"
                className="block w-full text-center border border-white/20 hover:border-[#6C63FF] text-white py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-white/5"
              >
                Go to Cart
              </Link>

              <div className="mt-6 pt-6 border-t border-white/10">
                <h4 className="text-white font-semibold text-sm mb-3">Tech Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {template.tech.map((item) => (
                    <span key={item} className="text-xs bg-white/5 border border-white/10 text-[#A0A0B0] px-2 py-1 rounded-md">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
