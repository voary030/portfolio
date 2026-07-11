import React from "react";
import Title from "./Title";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Développeur Fullstack",
      company: "Tech Innov Solutions",
      date: "2024 - Présent",
      description:
        "Conception et développement d'applications web scalables. Stack : React, Node.js, PostgreSQL et Docker.",
      tech: ["React", "Node.js", "PostgreSQL", "Docker"],
    },
    {
      id: 2,
      title: "Développeur Frontend",
      company: "Digital Agency Pro",
      date: "2022 - 2024",
      description:
        "Création d'interfaces utilisateur modernes et optimisées pour le SEO. Intégration d'animations et de designs responsives.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "GraphQL"],
    },
    {
      id: 3,
      title: "Développeur Junior",
      company: "Startup Hub",
      date: "2021 - 2022",
      description:
        "Maintenance et évolution de plateformes e-commerce. Implémentation de nouvelles fonctionnalités et correction de bugs.",
      tech: ["React", "Express", "MongoDB", "REST API"],
    },
  ];

  return (
    <div className="bg-base-100 py-16 px-4 md:px-10" id="experience">
      <Title title="Mes expériences" />

      <div className="max-w-4xl mx-auto mt-8 space-y-8 relative">
        {/* Ligne verticale de la timeline (cachée sur mobile, visible sur grand écran) */}
        <div className="hidden md:block absolute left-[calc(25%+8px)] top-0 bottom-0 w-0.5 bg-accent/30"></div>

        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`flex flex-col md:flex-row gap-4 md:gap-6 items-start relative ${
              index !== experiences.length - 1 ? "pb-4" : ""
            }`}
          >
            {/* Point de la timeline et date */}
            <div className="md:w-1/4 flex items-center gap-3 md:gap-0 md:flex-col md:items-end md:pr-6">
              <div className="hidden md:block w-4 h-4 bg-accent rounded-full border-4 border-base-100 shadow-md relative z-10"></div>
              <span className="badge badge-accent badge-lg font-semibold whitespace-nowrap">
                {exp.date}
              </span>
            </div>

            {/* Carte de contenu */}
            <div className="md:w-3/4 bg-base-200 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border-l-4 border-accent">
              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-lg font-semibold text-gray-500 dark:text-gray-400">
                {exp.company}
              </p>
              <p className="mt-3 text-base leading-relaxed">
                {exp.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {exp.tech.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-ghost badge-md text-sm border border-base-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;