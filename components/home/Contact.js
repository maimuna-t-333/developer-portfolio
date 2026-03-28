export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 md:px-8 bg-[#0F0F1A]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Get in Touch
        </h2>
        <p className="text-[#A0A0B0] mb-8">
          Have questions about courses or templates? Feel free to reach out.
        </p>

        <div className="bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 text-white"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 text-white"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full mb-4 bg-[#0F0F1A] border border-white/10 rounded-xl px-4 py-3 text-white"
          />
          <button className="bg-[#6C63FF] text-white px-6 py-3 rounded-xl">
            Send Message
          </button>
        </div>
      </div>
    </section>
  );
}