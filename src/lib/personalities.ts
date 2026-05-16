export interface Personality {
  id: string;
  name: string;
  title: string;
  description: string;
  color: string;
  accentColor: string;
  avatar: string;
  style: "strategist" | "wildcard" | "researcher";
}

export const PERSONALITIES: Record<string, Personality> = {
  nova: {
    id: "nova",
    name: "Nova",
    title: "Strategic Advisor",
    description: "A strategic thinker who breaks down complex problems into actionable insights.",
    color: "from-blue-500 to-cyan-500",
    accentColor: "oklch(0.72 0.20 235)",
    avatar: "◆",
    style: "strategist",
  },
  echo: {
    id: "echo",
    name: "Echo",
    title: "Creative Wildcard",
    description: "An unpredictable creative force who thinks outside conventional boundaries.",
    color: "from-purple-500 to-pink-500",
    accentColor: "oklch(0.65 0.22 280)",
    avatar: "◈",
    style: "wildcard",
  },
  atlas: {
    id: "atlas",
    name: "Atlas",
    title: "Research Expert",
    description: "A deep researcher who digs into data and uncovers hidden patterns.",
    color: "from-indigo-500 to-blue-500",
    accentColor: "oklch(0.60 0.20 250)",
    avatar: "◇",
    style: "researcher",
  },
};

export const getPersonalityById = (id: string): Personality | undefined => {
  return PERSONALITIES[id.toLowerCase()];
};
