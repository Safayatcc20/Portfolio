import { skillGroups } from "@/data/skills";

export const Skills = () => {
  return (
    <section
      id="skills"
      className="py-28 relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/3 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}

        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-primary uppercase tracking-[0.25em] font-semibold">
            Technical Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Skills & Technologies
          </h2>

          <p className="text-muted-foreground text-lg">
            Technologies and tools I use to build scalable web
            applications and solve complex programming problems.
          </p>
        </div>

        {/* Skills Grid */}

        <div className="grid lg:grid-cols-2 gap-8">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="glass rounded-2xl p-7 border border-white/10
              hover:border-primary/40 transition-all duration-300
              hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Category Header */}

              <div className="flex items-center gap-3 mb-6">
                <div className="text-3xl">
                  {group.icon}
                </div>

                <h3 className="text-2xl font-bold">
                  {group.title}
                </h3>
              </div>

              {/* Skills */}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex items-center gap-3
                    rounded-lg px-3 py-2
                    hover:bg-primary/10
                    transition-all duration-300"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary" />

                    <span className="font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};