const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Chittagong University of Engineering & Technology (CUET)",
    duration: "2022 - 2026",
    cgpa:"3.59/4.00",
    description:
      "Focused on software engineering, data structures, algorithms, and web development. Actively involved in competitive programming and full-stack projects.",
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institute: "Bakolia Government College",
    duration: "2018 - 2020",
    description:
      "Studied Science group with strong foundation in Mathematics, Physics, Chemistry, Biology and ICT.",
  },
  {
    degree: "Secondary Secondary Certificate (HSC)",
    institute: "Sonargaon High School",
    duration: "2013 - 2018",
    description:
      "Studied Science group with strong foundation in Mathematics, Physics, Chemistry, Biology.",
  },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-highlight/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm uppercase tracking-wider">
            Academic Background
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            My <span className="text-white italic font-serif">Education</span>
          </h2>

          <p className="text-muted-foreground">
            Academic journey shaped by learning and growth.
          </p>
        </div>

        {/* Education Grid */}
        <div className="max-w-6xl mx-auto">
          {/* Current/Main Education */}
          <div className="mb-12">
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
              Current Education
            </h3>
            <div className="glass rounded-2xl p-8 border border-primary/30 hover:border-primary/50 
            transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-gradient-to-br from-primary/5 to-transparent">
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Degree</p>
                  <h4 className="text-lg font-semibold text-white">
                    {educationData[0].degree}
                  </h4>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Institute</p>
                  <p className="text-lg font-semibold text-primary">
                    {educationData[0].institute}
                  </p>
                </div>
                <div className="flex gap-6">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Duration</p>
                    <p className="text-lg font-semibold">
                      {educationData[0].duration}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">CGPA</p>
                    <p className="text-lg font-bold text-primary">
                      {educationData[0].cgpa}
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground mt-6">
                {educationData[0].description}
              </p>
              {educationData[0].achievements && (
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider mb-4">
                    Achievements
                  </p>
                  <ul className="space-y-2">
                    {educationData[0].achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Previous Education */}
          <div>
            <h3 className="text-sm font-bold text-primary uppercase tracking-wider mb-6">
              Previous Education
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {educationData.slice(1).map((item, index) => (
                <div
                  key={index}
                  className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 
                  transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {item.degree}
                  </h4>
                  <p className="text-primary font-medium mb-1">
                    {item.institute}
                  </p>
                  <p className="text-xs text-muted-foreground mb-3">
                    {item.duration}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};