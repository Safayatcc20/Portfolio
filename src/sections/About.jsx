import { Code2, Trophy, Database, Zap } from "lucide-react";

const highlights = [
  {
    icon: Trophy,
    title: "Competitive Programmer",
    description:
      "Codeforces Specialist (1433). Solved 1500+ problems. Active ICPC participant.",
  },
  {
    icon: Code2,
    title: "Full-Stack Developer",
    description:
      "Built web apps using React, Node.js, Express, MongoDB, and PostgreSQL.",
  },
  {
    icon: Database,
    title: "Strong Fundamentals",
    description:
      "Solid understanding of DSA, OOP, and database design through CP and projects.",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description:
      "Strong analytical mindset focused on efficient and scalable solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - About Text */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-xl font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Competitive Programmer & 
              <span className="font-serif italic font-normal text-white">
                {" "}
                Full-Stack Developer
              </span>
            </h2>

            <div className="space-y-4 text-foreground animate-fade-in animation-delay-200">
              <p>
                Final-year CSE student at CUET. Competitive programmer with
                <strong> 1500+ solved problems</strong> and Codeforces Specialist
                rating (1433).
              </p>

              <p>
                Full-stack developer experienced in
                <strong> React, Node.js, Express, MongoDB, and PostgreSQL</strong>.
                Built multiple web applications and worked with real-world systems
                during industrial exposure.
              </p>

              <p>
                Strong foundation in algorithms, data structures, and system design,
                developed through competitive programming and project work.
              </p>
            </div>

            {/* CTA Quote - More Specific */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium text-foreground">
                <span className="text-primary">Looking for:</span> Full-stack and Software Engineering roles 
                where I can apply my problem-solving expertise and grow as an engineer.
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in hover:-translate-y-1 hover:border-primary/20 transition-all duration-300"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors duration-300">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};