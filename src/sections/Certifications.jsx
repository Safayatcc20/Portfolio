const certifications = [
  {
    title: "Industrial Attachment Certificate",
    issuer: "Premier 1888 Ltd.",
    date: "2025",
    icon: "🏢",
  },
  {
    title: "Mobile App Development Training",
    issuer: "Bangladesh Computer Council, ICT Division",
    date: "2024",
    icon: "📱",
  },
];

export const Certifications = () => {
  return (
    <section id="certifications" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
            Certifications
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
            Learning and
            <span className="font-serif italic font-normal text-white">
              {" "}
              professional growth.
            </span>
          </h2>

          <p className="text-muted-foreground">
            Certifications and training programs that reflect my continuous
            learning journey in software development and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl">{cert.icon}</span>
              <h3 className="text-lg font-semibold mt-4">{cert.title}</h3>
              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              <p className="text-xs text-primary mt-2">{cert.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
