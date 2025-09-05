import { Calendar, MapPin, Award, Globe2, User } from "lucide-react";

const experiences = [
  
  {
    id: 1,
    title: "Code Vision",
    organization: "College Club",
    period: "2023 - present",
    location: "University Campus",
    type: "Member",
    description:
      "Active member of Code Vision since 2nd year, contributing to events, management, and club growth.",
    achievements: [
      "Joined as Coordinator in 2023, promoted to Organizer in 2024, and currently serving as Governor",
      "Leading a team to manage club operations and social media presence",
      "Participated in and organized multiple coding events and workshops",
    ],
    icon: User,
    color: "text-green-500",
  },
  {
    id: 2,
    title: "Graphics Team Lead",
    organization: "Google Developers Group BCET",
    period: "September 2024 - Present",
    location: "University Campus",
    type: "Community",
    description:
      "Led the creative design efforts for GDG events, ensuring impactful visual communication and branding.",
    achievements: [
      "Designed posters, event banners, and certificates for workshops and events",
      "Contributed to the success of major events such as the Google Gen AI Study Jam",
      "Collaborated with organizing team to plan, execute, and complete multiple tech events.",
    ],
    icon: Globe2,
    color: "text-purple-500",
  },
  // {
  //   id: 3,
  //   title: "Open Source Contributor",
  //   organization: "GitHub Community",
  //   period: "Dec 2023 - Present",
  //   location: "Remote",
  //   type: "Contribution",
  //   description:
  //     "Contributing to open source projects and participating in community discussions.",
  //   achievements: [
  //     "Contributed to 3 open source projects",
  //     "Fixed 10+ bugs and added new features",
  //     "Active in developer community forums",
  //   ],
  //   icon: Award,
  //   color: "text-orange-500",
  // },
];

const typeColors = {
  Schooling: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
  Member:
    "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
  Community:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
  Contribution:
    "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
};

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary">Experience</span>
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/20"></div>

          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-primary rounded-full border-4 border-background z-10 top-6"></div>

                {/* Content */}
                <div className="flex-1 ml-12 md:ml-0 md:w-1/2">
                  <div className="gradient-border p-4 sm:p-6 card-hover rounded-xl bg-card/50 backdrop-blur-sm">
                    <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
                      <div
                        className={`p-2 sm:p-3 rounded-full bg-primary/10 w-fit`}
                      >
                        <exp.icon
                          className={`h-5 w-5 sm:h-6 sm:w-6 ${exp.color}`}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                          <h3 className="text-lg sm:text-xl font-semibold leading-tight">
                            {exp.title}
                          </h3>
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium w-fit ${
                              typeColors[exp.type]
                            }`}
                          >
                            {exp.type}
                          </span>
                        </div>
                        <h4 className="text-base sm:text-lg text-primary font-medium mb-2">
                          {exp.organization}
                        </h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="truncate">
                              {exp.period || exp.Passed}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                            <span className="truncate">{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {exp.description && (
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {Array.isArray(exp.achievements) &&
                      exp.achievements.length > 0 && (
                        <div className="space-y-2">
                          <h5 className="font-semibold text-sm sm:text-base">
                            Key Achievements:
                          </h5>
                          <ul className="space-y-1 sm:space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="text-xs sm:text-sm text-muted-foreground flex items-start gap-2 leading-relaxed"
                              >
                                <span className="text-primary mt-0.5 sm:mt-1 flex-shrink-0">
                                  •
                                </span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
