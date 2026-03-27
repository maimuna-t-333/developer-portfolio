export default function Skills() {
  const skills = [
    { name: "React.js", level: 95, color: "#61DAFB" },
    { name: "Next.js", level: 92, color: "#6C63FF" },
    { name: "Node.js", level: 88, color: "#68A063" },
    { name: "Tailwind CSS", level: 96, color: "#38BDF8" },
    { name: "MongoDB", level: 82, color: "#4DB33D" },
    { name: "TypeScript", level: 85, color: "#3178C6" },
  ];

  const tools = [
    "React", "Next.js", "Node.js", "Express",
    "MongoDB", "PostgreSQL", "Tailwind CSS", "TypeScript",
    "Git", "Docker", "Vercel", "REST APIs",
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#0F0F1A]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-[#6C63FF] text-sm font-semibold uppercase tracking-widest">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">
            Skills & Technologies
          </h2>
          <p className="text-[#A0A0B0] mt-3 max-w-xl mx-auto">
            Years of hands-on experience building production-grade web applications.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Skill Bars */}
          <div className="space-y-5">
            {skills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-white font-medium text-sm">{skill.name}</span>
                  <span className="text-[#A0A0B0] text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%`, backgroundColor: skill.color }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Tools Grid */}
          <div>
            <h3 className="text-white font-semibold mb-5 text-lg">Tools & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="bg-white/5 border border-white/10 hover:border-[#6C63FF]/50 hover:bg-[#6C63FF]/10 text-white text-sm px-4 py-2 rounded-lg transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            {/* Experience Card */}
            <div className="mt-8 bg-[#1A1A2E] border border-white/10 rounded-2xl p-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                {[
                  { value: "5+", label: "Years Exp." },
                  { value: "80+", label: "Projects" },
                  { value: "5K+", label: "Students" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-2xl font-bold text-[#6C63FF]">{item.value}</div>
                    <div className="text-[#A0A0B0] text-xs mt-1">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}