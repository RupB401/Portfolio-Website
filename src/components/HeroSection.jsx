import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-6xl mx-auto z-10 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Photo - shows on top for mobile, right for desktop */}
          <div className="order-1 md:order-2 flex-shrink-0">
            <div className="relative">
              <img
                src="/Images/my photo in mall.jpg"
                alt="Rup Kr Biswas"
                className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-primary/20 shadow-xl opacity-0 animate-fade-in-delay-2"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-primary/30 animate-pulse"></div>
            </div>
          </div>

          {/* Text content - shows below photo on mobile, left on desktop */}
          <div className="order-2 md:order-1 text-center md:text-left flex-1">
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

              <p className="text-lg md:text-xl text-base-content/80 max-w-2xl md:max-w-none opacity-0 animate-fade-in-delay-3">
                I build modern full-stack applications with React, FastAPI, and
                PostgreSQL — blending clean design with powerful backends.
              </p>

              {/* Button moved below */}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <div className="pb-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="btn btn-primary btn-lg">
            View My Work
          </a>
        </div>
        <div className="animate-bounce">
          <span className="text-sm text-base-content/70 mb-2"> Scroll </span>
          <ArrowDown className="h-5 w-5 text-primary" />
        </div>
      </div>
    </section>
  );
};
