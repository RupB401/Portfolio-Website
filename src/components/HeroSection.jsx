import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10 relative">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in text-primary">
              {" "}
              Hi, I'm
            </span>
            <span className="text-secondary opacity-0 animate-fade-in-delay-1">
              {" "}
              Rup Kr
            </span>
            <span className="text-accent ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Biswas
            </span>
          </h1>

          <p className="text-lg md:text-xl text-base-content/80 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I build modern full-stack applications with React, FastAPI, and PostgreSQL — blending clean design with powerful backends.

          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="btn btn-primary btn-lg">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-base-content/70 mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
