import { useState } from "react";
import { cn } from "@/lib/utils";
import { Code, Database, Wrench, Palette, Globe, Server } from "lucide-react";

const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    category: "frontend",
    icon: Code,
    color: "text-orange-500",
  },
  {
    name: "JavaScript",
    category: "frontend",
    icon: Code,
    color: "text-yellow-500",
  },
  { name: "React", category: "frontend", icon: Code, color: "text-blue-500" },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: Palette,
    color: "text-cyan-500",
  },
  
  /*
{
  name: "Next.js",
  category: "frontend",
  icon: Globe,
  color: "text-teal-500",
}
*/,

  // Backend
  {
    name: "Node.js",
    category: "backend",
    icon: Server,
    color: "text-green-600",
  },
  {
    name: "Express",
    category: "backend",
    icon: Server,
    color: "text-yellow-500",
  },
  {
    name: "MongoDB",
    category: "backend",
    icon: Database,
    color: "text-green-500",
  },
  {
    name: "PostgreSQL",
    category: "backend",
    icon: Database,
    color: "text-blue-700",
  },
  { name: "Python", category: "backend", icon: Code, color: "text-yellow-600" },
  {
    name: "FastAPI",
    category: "backend",
    icon: Server,
    color: "text-teal-600",
  },
  {
    name: "Flask",
    category: "backend",
    icon: Server,
    color: "text-yellow-500",
  },

  // Tools
  {
    name: "Git/GitHub",
    category: "tools",
    icon: Wrench,
    color: "text-orange-600",
  },
  { name: "Figma", category: "tools", icon: Palette, color: "text-purple-500" },
  { name: "VS Code", category: "tools", icon: Code, color: "text-blue-600" },
  { name: "Docker", category: "tools", icon: Wrench, color: "text-blue-500" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill, key) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={key}
                className="bg-card p-6 rounded-lg shadow-xs card-hover h-full flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
              >
                <div
                  className={cn(
                    "mb-4 p-3 rounded-full bg-gray-100 dark:bg-gray-800 group-hover:bg-primary/10 transition-colors",
                    skill.color
                  )}
                >
                  <IconComponent className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{skill.name}</h3>
                <div
                  className={cn(
                    "px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800",
                    skill.color,
                    "bg-opacity-20"
                  )}
                >
                  {skill.category}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
