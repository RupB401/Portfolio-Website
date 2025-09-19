import {
  ArrowRight,
  ExternalLink,
  Github,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "Glimmr",
    description:
      "Glimmr is a desktop app to display, search, and manage GIF overlays on Windows.",
    image: "/Images/Gimmr.png",
    tags: ["Python", "PyQt6"],

    demoUrl: "https://github.com/RupB401/Glimmr",
    githubUrl: "https://github.com/RupB401/Glimmr",
  },
  {
    id: 2,
    title: "StockPlay",
    description:
      "StockPlay - Real-Time Stock Market Simulator & Portfolio Tracker",
    image: "/Images/StockPlay.png",
    tags: ["React Js", "FastAPI", "PostgresSQL"],
    demoUrl: "https://stockplay.netlify.app/",
    githubUrl: "https://github.com/RupB401/StockPlay",
  },
  {
    id: 3,
    title: "Space Invader",
    description:
      "A modern take on the classic Space Invaders game, built with Python and Pygame.",
    image: "/Images/SpaceInvader.png",
    tags: ["Python", "Pygame"],
    demoUrl: "https://github.com/RupB401/Space-Invaders",
    githubUrl: "https://github.com/RupB401/Space-Invaders",
  },
  {
    id: 4,
    title: "MovieCharFor",
    description: "Shows movie names and add to favourites",
    image: "/Images/Movie Clipfor.png",
    tags: ["React JS", "JavaScript"],
    demoUrl: "https://moviechartfor.netlify.app/",
    githubUrl: "https://github.com/RupB401/MovieCharFor",
  },
  {
    id: 5,
    title: "FluxPlayer",
    description:"Video Player made with python and PyQt6",
    image: "/Images/FluxPlayer.png",
    tags: ["Python", "PyQt6"],
    demoUrl: "https://github.com/RupB401/FluxPlayer",
    githubUrl: "https://github.com/RupB401/FluxPlayer",
  }
];

export const ProjectsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const projectsPerPage = 2;
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const [isAnimating, setIsAnimating] = useState(false);
  const prevPage = useRef(currentPage);
  const [slideDirection, setSlideDirection] = useState("");

  // Auto-scroll every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 6000);

    return () => clearInterval(interval);
  }, [totalPages]);

  useEffect(() => {
    if (prevPage.current !== currentPage) {
      setIsAnimating(true);
      setSlideDirection(currentPage > prevPage.current ? "right" : "left");
      const timeout = setTimeout(() => setIsAnimating(false), 600); // match transition duration
      prevPage.current = currentPage;
      return () => clearTimeout(timeout);
    }
  }, [currentPage]);

  const getCurrentProjects = () => {
    const startIndex = currentPage * projectsPerPage;
    return projects.slice(startIndex, startIndex + projectsPerPage);
  };

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const goToPrevious = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        {/* Project Cards with Pagination */}
        <div className="relative">
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch min-h-[400px] transition-transform duration-600 ease-in-out
              ${
                isAnimating
                  ? slideDirection === "right"
                    ? "translate-x-8"
                    : "translate-x-[-2rem]"
                  : "translate-x-0"
              }
            `}
          >
            {getCurrentProjects().map((project) => (
              <div
                key={project.id}
                className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover h-full flex flex-col transform transition-all duration-500 hover:scale-[1.02]"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={`${project.id}-${tag}-${tagIndex}`}
                          className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="text-xl font-semibold mb-1">
                      {" "}
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={20} />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/80 hover:text-primary transition-colors duration-300"
                      >
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-6 w-6 text-primary" />
            </button>

            {/* Pagination Dots */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToPage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentPage === index
                      ? "bg-primary scale-125"
                      : "bg-primary/30 hover:bg-primary/50"
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={goToNext}
              className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors duration-300"
              aria-label="Next projects"
            >
              <ChevronRight className="h-6 w-6 text-primary" />
            </button>
          </div>
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/RupB401"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
