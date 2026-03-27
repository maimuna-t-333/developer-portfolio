"use client";
import Link from "next/link";
import { Trash2, ShoppingCart, ArrowRight, Tag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function CartPage() {
  const { cartItems, removeFromCart, clearCart, total } = useCart();
  const [checkedOut, setCheckedOut] = useState(false);

  if (checkedOut) return (
    <div className="min-h-screen bg-[#0F0F1A] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-4xl">🎉</span>
        </div>
        <h2 className="text-3xl font-bold text-white mb-3">Order Confirmed!</h2>
        <p className="text-[#A0A0B0] mb-8">Thank you for your purchase. Check your email for access details.</p>
        <Link href="/" className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-8 py-3 rounded-xl font-semibold transition-all">
          Back to Home
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0F0F1A] py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-10 flex items-center gap-3">
          <ShoppingCart className="text-[#6C63FF]" /> Your Cart
          {cartItems.length > 0 && (
            <span className="text-lg text-[#A0A0B0] font-normal">({cartItems.length} items)</span>
          )}
        </h1>

        {cartItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShoppingCart size={40} className="text-[#A0A0B0]" />
            </div>
            <h2 className="text-white text-xl font-bold mb-3">Your cart is empty</h2>
            <p className="text-[#A0A0B0] mb-8">Add some courses or templates to get started.</p>
            <div className="flex gap-4 justify-center">
              <Link href="/courses" className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                Browse Courses
              </Link>
              <Link href="/templates" className="border border-white/20 hover:border-[#6C63FF] text-white px-6 py-3 rounded-xl font-semibold transition-all">
                Browse Templates
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">

            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-4 flex gap-4 items-center">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-20 h-16 object-cover rounded-lg shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-semibold truncate">{item.title}</h3>
                    <p className="text-[#A0A0B0] text-sm mt-1 line-clamp-1">{item.description}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[#6C63FF] font-bold">${item.price}</span>
                      <span className="text-[#A0A0B0] text-sm line-through">${item.originalPrice}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#A0A0B0] hover:text-red-400 transition-colors p-2 shrink-0"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}

              <button
                onClick={clearCart}
                className="text-sm text-red-400 hover:text-red-300 transition-colors mt-2"
              >
                Clear all items
              </button>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6 sticky top-24">
                <h2 className="text-white font-bold text-xl mb-6">Order Summary</h2>

                <div className="space-y-3 mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span className="text-[#A0A0B0] truncate max-w-[160px]">{item.title}</span>
                      <span className="text-white font-medium">${item.price}</span>
                    </div>
                  ))}
                </div>

                {/* Coupon */}
                <div className="flex gap-2 mb-6">
                  <div className="flex-1 flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-3 py-2">
                    <Tag size={14} className="text-[#A0A0B0]" />
                    <input
                      type="text"
                      placeholder="Coupon code"
                      className="bg-transparent text-white text-sm outline-none w-full placeholder:text-[#A0A0B0]"
                    />
                  </div>
                  <button className="bg-white/10 hover:bg-white/20 text-white text-sm px-3 py-2 rounded-lg transition-colors">
                    Apply
                  </button>
                </div>

                <div className="border-t border-white/10 pt-4 mb-6">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-[#A0A0B0]">Subtotal</span>
                    <span className="text-white">${total}</span>
                  </div>
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-[#A0A0B0]">Tax</span>
                    <span className="text-white">$0</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-white">Total</span>
                    <span className="text-[#6C63FF]">${total}</span>
                  </div>
                </div>

                <button
                  onClick={() => { clearCart(); setCheckedOut(true); }}
                  className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] text-white py-3 rounded-xl font-semibold transition-all hover:scale-105"
                >
                  Checkout <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}