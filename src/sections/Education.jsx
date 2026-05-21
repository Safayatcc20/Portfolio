const educationData = [
  {
    degree: "B.Sc. in Computer Science & Engineering",
    institute: "Chittagong University of Engineering & Technology (CUET)",
    duration: "2022 - 2026",
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
            My academic journey that shaped my technical foundation and problem-solving skills.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="glass rounded-2xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="text-primary font-medium">
                    {item.institute}
                  </p>

                  <p className="text-muted-foreground text-sm mt-2">
                    {item.description}
                  </p>
                </div>

                <div className="text-sm text-muted-foreground md:text-right whitespace-nowrap">
                  📅 {item.duration}
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};