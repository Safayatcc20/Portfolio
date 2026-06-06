import { Button } from "@/components/Button";
import { ArrowRight, Download, X, ChevronDown } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { GiThink } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

const skills = [
  "C++",
  "C",
  "OOP",
  "Data Structures",
  "Algorithms",
  "SQL",
  "MongoDB",
  "React",
  "JavaScript",
  "Node.js",
  "Express.js",
  "Tailwind CSS",
  "HTML",
  "Machine Learning",
  "Git",
  "GitHub",
];

export const Hero = () => {
  const [resumeOpen, setResumeOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>
      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `slow-drift ${15 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      {/* Content  */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left column - Text Content */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Competitive Programmer • Full-Stack Enthusiast
              </span>
            </div>
            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-3xl lg:text-3xl font-bold leading-tight animate-fade-in animation-delay-100">
                CSE Student | MERN Stack Developer{" "}
                <span className="text-primary glow-text">
                  | Competitive Programmer
                </span>
                <br />
              </h1>
              <p className="text-lg leading-8 text-muted-foreground max-w-xl animate-fade-in animation-delay-200">
                I build responsive full-stack web applications using
                <span className="text-foreground font-medium">
                  {" "}
                  React, Node.js, and MongoDB
                </span>{" "}
                while solving algorithmic problems through competitive
                programming.
                <br />
                <br />I enjoy working with algorithms, databases, OOP, and
                modern web technologies while continuously learning and building
                new projects.
              </p>
            </div>
            {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300 relative z-[100] isolate">
              {/* Contact */}
              <a href="#contact">
                <Button size="lg">
                  Contact Me
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>

              {/* Resume Dropdown Wrapper */}
              <div className="relative z-50">
                {/* REMOVE OUTER BUTTON - Pass onClick to AnimatedBorderButton instead */}
                <AnimatedBorderButton
                  onClick={() => setResumeOpen(!resumeOpen)} // ✅ Click handler here
                >
                  <div className="flex items-center gap-2">
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 ${resumeOpen ? 'rotate-180' : ''}" />
                    Resume
                  </div>
                </AnimatedBorderButton>

                {resumeOpen && (
                  <div className="absolute left-0 top-full mt-3 w-52 rounded-2xl glass shadow-2xl overflow-hidden border border-border z-[99999]">
                    <a
                      href="/Md.Safayat_Bin_Nasir_Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setResumeOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-all"
                    >
                      👁 View Resume
                    </a>

                    <a
                      href="/Md.Safayat_Bin_Nasir_Resume.pdf"
                      download="Md_Safayat_Bin_Nasir_Resume.pdf"
                      onClick={() => setResumeOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 hover:bg-primary/10 transition-all"
                    >
                      ⬇ Download Resume
                    </a>
                  </div>
                )}
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400 relative z-10">
              <span className="text-2xl text-muted-foreground">
                Follow me:{" "}
              </span>
              {[
                { icon: BsGithub, href: "https://github.com/Safayatcc20" },
                {
                  icon: FaLinkedinIn,
                  href: "https://www.linkedin.com/in/md-safayat-bin-nasir/",
                },
                { icon: X, href: "https://x.com/md_bin94811" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
                </a>
              ))}
            </div>
          </div>
          {/* Right column - Profile Image */}
          <div className="relatice animate-fade-in animation-delay-300">
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-gradient-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/safayats.jpeg"
                  alt="Md.Safayat Bin Nasir"
                  className="w-full aspect-[4/5] object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-3xl font-bold text-highlight">0</div>
                  <div className="text-xl text-shadow-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Skills Section */}
        <div className="mt-20 animate-fade-in animation-delay-600">
          <p className="text-3xl text-secondary-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-gradient-to-r from-surface to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-gradient-to-l from-foreground to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={`skill-${idx}`} className="flex-shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-foreground hover:text-highlight transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 
      animate-fade-in animation-delay-800"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
