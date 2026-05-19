import {Button} from "@/components/Button"
import {
  ArrowRight,
  Download,
  X,      
  ChevronDown,
} from "lucide-react";
import {AnimatedBorderButton} from "@/components/AnimatedBorderButton"
import { GiThink } from "react-icons/gi";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

export const Hero = () => {
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
      <div>
        <div>
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
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                Solving problems and Building {" "}
                <span className="text-primary glow-text">modern web</span>
                <br />
                applications with
                <br />
                <span className="font-serif italic font-normal text-white">
                  passion & precision.
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                Assalamualikum, I'm Safayat, a final year CSE student at CUET
                passionate about Full-Stack development, competitive
                programming, and problem solving. I enjoy working with
                algorithms, OOP, SQL, MongoDB, and modern web technologies while
                continuously learning and building new projects.
              </p>
            </div>
             {/* CTAs */}
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-300">
              <Button size="lg">
                Contact Me <ArrowRight className="w-5 h-5" />
              </Button>
              <AnimatedBorderButton>
                <Download className="w-5 h-5" />
                Download CV
              </AnimatedBorderButton>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-4 animate-fade-in animation-delay-400">
              <span className="text-sm text-muted-foreground">Follow me: </span>
              {[
                { icon: BsGithub, href: "https://github.com/Safayatcc20" },
                { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/md-safayat-bin-nasir/" },
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
        </div>
      </div>
    </section>
  );
};
