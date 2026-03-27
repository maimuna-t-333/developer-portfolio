"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { CreditCard, ShieldCheck, ArrowLeft, CheckCircle2 } from "lucide-react";

export default function CheckoutPage() {
  const { cartItems, total, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full bg-[#1A1A2E] border border-white/10 rounded-3xl p-8 text-center">
          <div className="w-16 h-16 mx-auto rounded-full bg-green-500/20 flex items-center justify-center mb-5">
            <CheckCircle2 className="text-green-400" size={32} />
          </div>
          <h1 className="text-3xl font-bold text-white mb-3">Order Placed Successfully</h1>
          <p className="text-[#A0A0B0] mb-6">
            Thank you for your purchase. Your digital resources are now ready for access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/templates"
              className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-5 py-3 rounded-xl font-medium transition-colors"
            >
              Browse More Templates
            </Link>
            <Link
              href="/courses"
              className="border border-white/10 hover:border-[#6C63FF]/50 text-white px-5 py-3 rounded-xl font-medium transition-colors"
            >
              Explore Courses
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Link
          href="/cart"
          className="inline-flex items-center gap-2 text-[#A0A0B0] hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={16} />
          Back to Cart
        </Link>

        <div className="mb-12">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">
            Checkout
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-3">
            Complete Your Purchase
          </h1>
          <p className="text-[#A0A0B0] max-w-2xl">
            Secure your access to premium web development resources and courses.
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-[#1A1A2E] border border-white/10 rounded-3xl p-10 text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
            <p className="text-[#A0A0B0] mb-6">
              Add a course or template before proceeding to checkout.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/courses"
                className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-5 py-3 rounded-xl font-medium transition-colors"
              >
                Browse Courses
              </Link>
              <Link
                href="/templates"
                className="border border-white/10 hover:border-[#6C63FF]/50 text-white px-5 py-3 rounded-xl font-medium transition-colors"
              >
                Browse Templates
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <form
              onSubmit={handlePlaceOrder}
              className="lg:col-span-2 bg-[#1A1A2E] border border-white/10 rounded-3xl p-6 md:p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-11 h-11 rounded-xl bg-[#6C63FF]/20 flex items-center justify-center">
                  <CreditCard className="text-[#6C63FF]" size={20} />
                </div>
                <div>
                  <h2 className="text-white text-2xl font-bold">Billing Details</h2>
                  <p className="text-[#A0A0B0] text-sm">
                    Enter your information to complete checkout
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-white mb-2">First Name</label>
                  <input
                    type="text"
                    placeholder="John"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2">Last Name</label>
                  <input
                    type="text"
                    placeholder="Doe"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white mb-2">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white mb-2">Country</label>
                  <input
                    type="text"
                    placeholder="Bangladesh"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm text-white mb-2">Card Number</label>
                  <input
                    type="text"
                    placeholder="1234 5678 9012 3456"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>

                <div>
                  <label className="block text-sm text-white mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    required
                    className="w-full bg-[#0F0F1A] border border-white/10 focus:border-[#6C63FF] outline-none text-white rounded-xl px-4 py-3"
                  />
                </div>
              </div>

              <div className="mt-8 flex items-start gap-3 bg-[#0F0F1A] border border-white/10 rounded-2xl p-4">
                <ShieldCheck className="text-green-400 shrink-0 mt-0.5" size={18} />
                <p className="text-sm text-[#A0A0B0] leading-relaxed">
                  This is a demo checkout UI for portfolio presentation. No real payment will be processed.
                </p>
              </div>

              <button
                type="submit"
                className="mt-8 w-full bg-[#6C63FF] hover:bg-[#5a52d5] text-white py-3.5 rounded-xl font-semibold transition-colors"
              >
                Place Order
              </button>
            </form>

            <div className="bg-[#1A1A2E] border border-white/10 rounded-3xl p-6 md:p-8 h-fit sticky top-24">
              <h2 className="text-white text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4 border-b border-white/10 pb-4"
                  >
                    <div>
                      <h3 className="text-white font-medium">{item.title}</h3>
                      <p className="text-sm text-[#A0A0B0]">
                        {item.category || item.level || "Digital Product"}
                      </p>
                    </div>
                    <span className="text-white font-semibold">${item.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-3 text-sm border-t border-white/10 pt-5">
                <div className="flex justify-between text-[#A0A0B0]">
                  <span>Subtotal</span>
                  <span>${total}</span>
                </div>
                <div className="flex justify-between text-[#A0A0B0]">
                  <span>Processing Fee</span>
                  <span>$0</span>
                </div>
                <div className="flex justify-between text-white text-lg font-bold pt-2 border-t border-white/10">
                  <span>Total</span>
                  <span>${total}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}