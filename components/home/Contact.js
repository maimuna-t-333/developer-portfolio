"use client";
import { useRef, useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const formRef = useRef(null);
  const infoRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(headingRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.6,
          scrollTrigger: { trigger: headingRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.7,
          scrollTrigger: { trigger: formRef.current, start: "top 85%", once: true },
        }
      );
      gsap.fromTo(infoRef.current,
        { opacity: 0, x: -40 },
        {
          opacity: 1, x: 0, duration: 0.7,
          scrollTrigger: { trigger: infoRef.current, start: "top 85%", once: true },
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Shake animation on error
      gsap.fromTo(formRef.current,
        { x: -8 },
        { x: 0, duration: 0.4, ease: "elastic.out(1, 0.3)" }
      );
      return;
    }
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setErrors({});
    }, 1500);
  };

  const inputClass = (field) =>
    `w-full bg-white/5 border ${
      errors[field] ? "border-red-500/70" : "border-white/10 focus:border-[#6C63FF]"
    } rounded-xl px-4 py-3 text-white text-sm outline-none transition-all duration-200 placeholder:text-[#A0A0B0] focus:bg-white/8`;

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-3 sm:px-4 md:px-8 bg-[#1A1A2E]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div ref={headingRef} className="text-center mb-14 opacity-0">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Get in Touch</h2>
          <p className="text-[#A0A0B0] mt-3 max-w-xl mx-auto">
            Have questions about courses or templates? I'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — Info */}
          <div ref={infoRef} className="opacity-0 space-y-6">
            <div>
              <h3 className="text-white font-bold text-xl mb-2">Let's Talk</h3>
              <p className="text-[#A0A0B0] leading-relaxed">
                Whether you have a question about a course, want to license a template, or just want to say hi — I'm happy to help.
              </p>
            </div>

            {/* Contact Info Cards */}
            {[
              { icon: Mail, label: "Email", value: "maimuna.tabr@gmail.com", color: "#6C63FF" },
              { icon: Phone, label: "Phone", value: "01736788394", color: "#FF6584" },
              { icon: MapPin, label: "Location", value: "Available Worldwide (Remote)", color: "#68A063" },
            ].map(({ icon: Icon, label, value, color }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-[#0F0F1A] border border-white/10 rounded-2xl p-5 hover:border-[#6C63FF]/30 transition-colors duration-200"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: `${color}20` }}
                >
                  <Icon size={20} style={{ color }} />
                </div>
                <div>
                  <div className="text-[#A0A0B0] text-xs mb-0.5">{label}</div>
                  <div className="text-white font-medium text-sm">{value}</div>
                </div>
              </div>
            ))}

            {/* Response Time Badge */}
            <div className="inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Usually responds within 24 hours</span>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={formRef} className="opacity-0">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center bg-[#0F0F1A] border border-white/10 rounded-2xl p-10">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} className="text-green-400" />
                </div>
                <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                <p className="text-[#A0A0B0] mb-6">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[#6C63FF] hover:bg-[#5a52d5] text-white px-6 py-2.5 rounded-xl text-sm font-semibold transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="bg-[#0F0F1A] border border-white/10 rounded-2xl p-6 md:p-8">
                <div className="space-y-4">

                  {/* Name + Email Row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-white text-xs font-medium mb-1.5 block">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass("name")}
                      />
                      {errors.name && (
                        <p className="text-red-400 text-xs mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="text-white text-xs font-medium mb-1.5 block">
                        Email Address <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className={inputClass("email")}
                      />
                      {errors.email && (
                        <p className="text-red-400 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1.5 block">
                      Subject <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className={inputClass("subject")}
                    >
                      <option value="" className="bg-[#1A1A2E]">Select a subject</option>
                      <option value="course" className="bg-[#1A1A2E]">Course Inquiry</option>
                      <option value="template" className="bg-[#1A1A2E]">Template Question</option>
                      <option value="collaboration" className="bg-[#1A1A2E]">Collaboration</option>
                      <option value="other" className="bg-[#1A1A2E]">Other</option>
                    </select>
                    {errors.subject && (
                      <p className="text-red-400 text-xs mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-white text-xs font-medium mb-1.5 block">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me how I can help you..."
                      rows={5}
                      className={`${inputClass("message")} resize-none`}
                    />
                    <div className="flex justify-between items-center mt-1">
                      {errors.message ? (
                        <p className="text-red-400 text-xs">{errors.message}</p>
                      ) : <span />}
                      <span className="text-[#A0A0B0] text-xs">
                        {formData.message.length}/500
                      </span>
                    </div>
                  </div>

                  {/* Submit */}
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 bg-[#6C63FF] hover:bg-[#5a52d5] disabled:opacity-70 disabled:cursor-not-allowed text-white py-3.5 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#6C63FF]/30"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} /> Send Message
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
