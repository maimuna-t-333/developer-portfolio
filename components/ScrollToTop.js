"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUp } from "lucide-react";
import gsap from "gsap";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const btnRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!btnRef.current) return;
    gsap.to(btnRef.current, {
      opacity: visible ? 1 : 0,
      scale: visible ? 1 : 0.5,
      duration: 0.3,
      ease: "back.out(1.7)",
    });
  }, [visible]);

  const scrollUp = () => {
    gsap.to(window, { scrollTo: 0, duration: 1, ease: "power3.inOut" });
  };

  return (
    <button
      ref={btnRef}
      onClick={scrollUp}
      className="fixed bottom-8 right-8 z-50 w-11 h-11 bg-[#6C63FF] hover:bg-[#5a52d5] text-white rounded-full flex items-center justify-center shadow-lg shadow-[#6C63FF]/30 opacity-0 transition-colors"
    >
      <ArrowUp size={20} />
    </button>
  );
}
