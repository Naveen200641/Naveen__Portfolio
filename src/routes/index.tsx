import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/components/PortfolioPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Naveen N — Frontend Developer & AI Enthusiast" },
      { name: "description", content: "Portfolio of Naveen N — CSE student, frontend developer and AI enthusiast building modern, AI-powered digital experiences." },
      { property: "og:title", content: "Naveen N — Frontend Developer & AI Enthusiast" },
      { property: "og:description", content: "Premium portfolio showcasing projects, skills and achievements of Naveen N." },
    ],
  }),
  component: PortfolioPage,
});
