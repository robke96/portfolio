import { SiAstro, SiJavascript, SiNextdotjs, SiNodedotjs, SiShadcnui, SiTailwindcss, SiTypescript, type IconType } from "@icons-pack/react-simple-icons";

export interface projectCardI {
    title: string;
    description: string;
    img: string;
    badges: {
        label: string;
        Icon: IconType;
        style: string;
    }[];
    codeSrc?: string;
    demoSrc?: string;
}[]

// Available badges
const badges = { 
    javascript: { label: "JavaScript", Icon: SiJavascript, style: "text-[#F7DF1E] bg-[#F7DF1E]/10" },
    typescript: { label: "TypeScript", Icon: SiTypescript, style: "text-[#3a90f0] bg-[#3a90f0]/10" },
    nodejs: { label: "Node.js", Icon: SiNodedotjs, style: "text-[#339933] bg-[#339933]/10" },
    tailwind: { label: "Tailwind", Icon: SiTailwindcss, style: "text-[#38BDF8] bg-[#38BDF8]/10" },
    shadcn: { label: "ShadCN/UI", Icon: SiShadcnui, style: "text-[white] bg-[white]/10" }, 
    nextjs: { label: "Next.js", Icon: SiNextdotjs, style: "text-[white] bg-[black]" },
    astro: { label: "Astro", Icon: SiAstro, style: "text-[#FF5607] bg-[#FF5607]/10" },

}

export const projectCardsData: projectCardI[] = [
    {
      title: "This Portfolio page",
      description: "",
      img: "/img/portfolio_page.webp",
      badges: [badges.typescript, badges.nodejs, badges.astro, badges.tailwind, badges.shadcn,],
      codeSrc: "https://github.com/robke96/portfolio",
      demoSrc: "/"
    },
];

export default projectCardsData;