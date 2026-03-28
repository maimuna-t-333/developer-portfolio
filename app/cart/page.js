"use client";

import { useState } from "react";
import Link from "next/link";
import { Trash2, ShoppingCart, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [couponError, setCouponError] = useState("");

  const applyCoupon = () => {
    if (!coupon.trim()) {
      setDiscount(0);
      setCouponError("Please enter a coupon code");
      return;
    }

    if (coupon.trim().toUpperCase() === "DEV10") {
      setDiscount(0.1);
      setCouponError("");
    } else {
      setDiscount(0);
      setCouponError("Invalid coupon code");
    }
  };

  const discountAmount = total * discount;
  const finalTotal = total - discountAmount;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8 flex items-center justify-center">
        <div className="max-w-xl w-full text-center bg-[#1A1A2E] border border-white/10 rounded-3xl p-8">
          <div className="w-16 h-16 mx-auto rounded-full bg-[#6C63FF]/20 flex items-center justify-center mb-5">
            <ShoppingCart className="text-[#6C63FF]" size={28} />
          </div>

          <h1 className="text-3xl font-bold text-white mb-3">Your cart is empty</h1>
          <p className="text-[#A0A0B0] mb-6">
            Looks like you have not added any courses or templates yet.
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">
            Cart
          </span>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-2 mb-3">
            Your Shopping Cart
          </h1>
          <p className="text-[#A0A0B0] max-w-2xl">
            Review your selected courses and digital resources before checkout.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-[#1A1A2E] border border-white/10 rounded-3xl p-6 md:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-8">
              <h2 className="text-white text-2xl font-bold">Cart Items</h2>
              <button
                onClick={clearCart}
                className="text-sm text-red-400 hover:text-red-300 transition-colors self-start sm:self-auto"
              >
                Clear All
              </button>
            </div>

            <div className="space-y-5">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row gap-5 bg-[#0F0F1A] border border-white/10 rounded-2xl p-4"
                >
                  <div className="w-full md:w-40 h-28 rounded-xl overflow-hidden shrink-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-white text-lg font-semibold mb-1">
                          {item.title}
                        </h3>
                        <p className="text-[#A0A0B0] text-sm line-clamp-2 mb-2">
                          {item.description}
                        </p>
                        <p className="text-xs text-[#6C63FF] font-medium">
                          {item.category || item.level || "Digital Product"}
                        </p>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-400 hover:text-red-300 transition-colors shrink-0"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="text-[#A0A0B0] text-sm">Qty: 1</span>
                      <span className="text-white text-lg font-bold">${item.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#1A1A2E] border border-white/10 rounded-3xl p-6 md:p-8 h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#6C63FF]/20 flex items-center justify-center">
                <Tag className="text-[#6C63FF]" size={18} />
              </div>
              <h2 className="text-white text-2xl font-bold">Order Summary</h2>
            </div>

            <div className="mb-6">
              <label className="block text-sm text-white mb-2">Promo Code</label>

              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Enter coupon"
                  className="flex-1 bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-2 text-white outline-none focus:border-[#6C63FF]"
                />
                <button
                  onClick={applyCoupon}
                  className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-4 py-2.5 rounded-xl transition-all hover:scale-105"
                >
                  Apply
                </button>
              </div>

              {discount > 0 && (
                <p className="text-green-400 text-sm mt-2">
                  Coupon applied successfully (10% off)
                </p>
              )}

              {couponError && (
                <p className="text-red-400 text-sm mt-2">{couponError}</p>
              )}

              <p className="text-xs text-[#A0A0B0] mt-2">
                Try demo coupon: <span className="text-white font-medium">DEV10</span>
              </p>
            </div>

            <div className="border-t border-white/10 pt-4 mb-6">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#A0A0B0]">Subtotal</span>
                <span className="text-white">${total.toFixed(2)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-green-400">Discount (10%)</span>
                  <span className="text-green-400">
                    - ${discountAmount.toFixed(2)}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-sm mb-4">
                <span className="text-[#A0A0B0]">Tax</span>
                <span className="text-white">$0.00</span>
              </div>

              <div className="flex justify-between font-bold text-lg border-t border-white/10 pt-4">
                <span className="text-white">Total</span>
                <span className="text-[#6C63FF]">${finalTotal.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white py-3 rounded-xl font-semibold transition-all hover:scale-105"
            >
              Proceed to Checkout <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
