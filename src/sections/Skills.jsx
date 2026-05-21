import { useState } from "react";
import { skillGroups } from "@/data/skills";
import { motion, AnimatePresence } from "framer-motion";

export const Skills = () => {
  const [active, setActive] = useState("languages");

  const current = skillGroups.find((g) => g.id === active);

  return (
    <section id="skills" className="py-32 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* HEADER */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-primary uppercase tracking-widest font-medium">
            Technical Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Skills & Technologies
          </h2>

          <p className="text-muted-foreground text-lg">
            A structured overview of my technical stack covering programming,
            frontend, backend, databases, and tools used in real-world projects.
          </p>
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {skillGroups.map((group) => (
            <button
              key={group.id}
              onClick={() => setActive(group.id)}
              className={`px-4 py-2.5 rounded-lg flex items-center gap-2 transition-all duration-300 font-medium text-sm border
                ${
                  active === group.id
                    ? "bg-white text-black shadow-lg shadow-primary/40"
                    : "bg-white/10 text-muted-foreground hover:bg-white/20 hover:text-white"
                }`}
            >
              <span
                className={`text-lg transition-all duration-300 ${
                  active === group.id
                    ? "drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] scale-110"
                    : ""
                }`}
              >
                {group.icon}
              </span>

              {group.title}
            </button>
          ))}
        </div>

        {/* SKILLS GRID (ANIMATED) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.35 }}
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
          >
            {current.skills.map((skill, i) => (
              <div
                key={i}
                className="glass p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:shadow-lg hover:shadow-primary/10"
              >
                {/* Skill Name */}
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-lg font-semibold text-white group-hover:text-primary transition-colors">
                    {skill.name}
                  </h4>

                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/20 text-primary">
                    {skill.badge}
                  </span>
                </div>

                {/* Category */}
                <p className="text-xs text-muted-foreground">
                  {current.title}
                </p>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};