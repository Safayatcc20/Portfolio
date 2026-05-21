import { Trophy, Zap, ExternalLink, Code2 } from "lucide-react";
import { FaCode, FaGithub } from "react-icons/fa6";
import { SiCodechef, SiCodeforces, SiLeetcode } from "react-icons/si";

import { useCodeforces } from "@/hooks/useCodeforces";

const cpProfiles = [
  {
    platform: "Codeforces",
    icon: SiCodeforces,
    rating: 1433,
    title: "Specialist",
    handle: "Safayatcc20",
    link: "https://codeforces.com/profile/Safayatcc20",
    problemsSolved: "1500+",
  },
  {
    platform: "CodeChef",
    icon: SiCodechef,
    rating: 1648,
    title: "3★ Coder",
    handle: "safayatcc20",
    link: "https://www.codechef.com/users/safayatcc20",
    problemsSolved: "200+",
  },
  {
    platform: "LeetCode",
    icon: SiLeetcode,
    rating: 1482,
    title: "",
    handle: "safayatcc99",
    link: "https://leetcode.com/u/safayatcc99/",
    problemsSolved: "78+",
  },
  {
    platform: "AtCoder",
    icon: FaCode,
    rating: 607,
    title: "Brown",
    handle: "Safayatcc20",
    link: "https://atcoder.jp/users/Safayatcc20",
    problemsSolved: "200+",
  },
];

const contests = [
  {
    name: "IUPC 2025 - CUET Inter University Programming Contest",
    rank: "21st",
    team: "Team: CUET_SSN",
    icon: "🏅",
    year: "2025",
    link: "https://coderoj.com/c/cou-iupc-2025-div/standings",
  },
  {
    name: "PUC IUPC 2024",
    rank: "24th",
    team: "Inter-University Contest",
    icon: "🥇",
    year: "2024",
    link: "#",
  },
  {
    name: "ICPC Dhaka Regional 2023",
    rank: "254th",
    team: "Honorable Mention",
    icon: "🎖️",
    year: "2023",
    link: "#",
  },
];

const icpcJourney = [
  {
    year: "2025-2026",
    name: "ICPC Asia Dhaka Regional Preliminary",
    team: "CUET_HSN",
    status: "🔄 Participating",
    link: "#",
  },
  {
    year: "2024-2025",
    name: "ICPC Asia Dhaka Online Preliminary",
    team: "CUET_Kanotix",
    status: "✅ Participated",
    link: "#",
  },
  {
    year: "2023-2024",
    name: "ICPC Asia Dhaka Regional Preliminary",
    team: "CUET_Patrons",
    rank: "254",
    badge: "🎖️ Honorable Mention",
    status: "✅ Ranked",
    link: "#",
  },
];

const highlights = [
  "2000+ Problems Solved",
  "Strong Data Structures & Algorithms",
  "5 Years ICPC Participation",
  "Multiple Contest Rankings",
  "Team-based Problem Solving",
  "GitHub-organized Solutions",
];

export const CompetitiveProgramming = () => {
  const { data, loading, error } = useCodeforces("Safayatcc20");

  return (
    <section id="cp" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-xl" />
      <div className="absolute -bottom-40 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm text-primary uppercase tracking-widest font-medium flex items-center justify-center gap-2">
            <Zap className="w-4 h-4" />
            Problem Solving
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-white">
            Competitive Programming
          </h2>

          <p className="text-muted-foreground text-lg">
            Strong algorithmic foundation built through consistent practice in
            data structures, algorithms, and competitive programming contests.
          </p>
        </div>

        {/* CP Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {cpProfiles.map((cp) => (
            <a
              key={cp.platform}
              href={cp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="glass p-6 rounded-xl border border-white/10 hover:border-primary/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="flex justify-between items-start mb-5">
                <div className="flex items-center gap-3">
                  <cp.icon className="text-3xl text-primary" />

                  <div>
                    <h3 className="text-white font-semibold group-hover:text-primary transition-colors">
                      {cp.platform}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {cp.title}
                    </p>
                  </div>
                </div>

                <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>

              <div className="mb-5">
                <p className="text-sm text-muted-foreground">
                  @{cp.handle}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                {/* Current Rating */}
                <div>
                  <p className="text-xl font-bold text-primary">
                    {cp.platform === "Codeforces"
                      ? loading
                        ? "..."
                        : error
                        ? "N/A"
                        : data?.rating
                      : cp.rating}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Current Rating
                  </p>
                </div>

                {/* Max Rating */}
                <div>
                  <p className="text-xl font-bold text-white">
                    {cp.platform === "Codeforces"
                      ? loading
                        ? "..."
                        : error
                        ? "N/A"
                        : data?.maxRating
                      : cp.rating}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Max Rating
                  </p>
                </div>

                {/* Problems Solved */}
                <div>
                  <p className="text-xl font-bold text-white">
                    {cp.problemsSolved}
                  </p>

                  <p className="text-xs text-muted-foreground mt-1">
                    Solved
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Highlights */}
        <div className="glass p-8 rounded-2xl border border-white/10 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-5 h-5 text-primary" />
            Key Highlights
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((h, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-muted-foreground"
              >
                <span className="w-2 h-2 bg-primary rounded-full" />
                {h}
              </div>
            ))}
          </div>
        </div>

        {/* Contest Rankings */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Contest Rankings
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {contests.map((c, i) => (
              <a
                key={i}
                href={c.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-6 rounded-xl border border-white/10 hover:border-primary/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex justify-between items-start mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{c.icon}</span>

                    <div>
                      <h4 className="text-white font-semibold group-hover:text-primary transition-colors text-sm">
                        {c.name}
                      </h4>

                      <p className="text-xs text-muted-foreground mt-1">
                        {c.year}
                      </p>

                      <p className="text-xs text-muted-foreground">
                        {c.team}
                      </p>
                    </div>
                  </div>

                  <div className="text-primary font-bold">
                    {c.rank}
                  </div>
                </div>

                <div className="text-xs text-muted-foreground">
                  View standings →
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* ICPC Journey */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Code2 className="w-6 h-6 text-primary" />
            ICPC Journey
          </h3>

          <div className="space-y-3">
            {icpcJourney.map((contest, idx) => (
              <a
                key={idx}
                href={contest.link}
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-4 rounded-xl border border-white/10 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1 block"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2 flex-wrap">
                      <span className="text-sm font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                        {contest.year}
                      </span>

                      <span className="text-sm text-muted-foreground">
                        {contest.name}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-xs bg-white/5 px-2.5 py-1 rounded text-muted-foreground">
                        {contest.team}
                      </span>

                      {contest.rank && (
                        <span className="text-xs font-bold text-primary">
                          Rank #{contest.rank}
                        </span>
                      )}

                      {contest.badge && (
                        <span className="text-xs font-bold px-2 py-1 rounded-full bg-primary/20 text-primary">
                          {contest.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-sm text-muted-foreground">
                    {contest.status}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* GitHub */}
        <div className="glass p-8 rounded-2xl border border-white/10">
          <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
            <FaGithub className="w-5 h-5" />
            GitHub Solutions Repository
          </h3>

          <p className="text-muted-foreground mb-6">
            All problem solutions and learning notes are maintained in GitHub
            repositories.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="https://github.com/Safayatcc20/Problem_solving_in_Judge"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors duration-300 font-medium"
            >
              <FaGithub className="w-4 h-4" />
              CP Solutions Repository
            </a>

            <a
              href="https://github.com/Safayatcc20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors duration-300 font-medium border border-white/20"
            >
              <FaGithub className="w-4 h-4" />
              All GitHub Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};