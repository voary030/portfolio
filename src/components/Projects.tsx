import React from "react";
import Title from "./Title";
import { Code, ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-commerce Plateforme",
      description:
        "Une plateforme e-commerce complète avec panier, paiement et dashboard administrateur.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com/ton-projet",
      demo: "https://demo-projet.com",
      image: "src/assets/project1.jpg",
    },
    {
      id: 2,
      title: "Application de Gestion de Tâches",
      description:
        "Application Kanban avec drag & drop, authentification et collaboration en temps réel.",
      tech: ["Next.js", "Tailwind", "Prisma", "WebSocket"],
      github: "https://github.com/ton-projet2",
      demo: "https://demo-projet2.com",
      image: "src/assets/project2.jpg",
    },
    {
      id: 3,
      title: "Portfolio Photographe",
      description:
        "Site vitrine pour photographe avec galerie, animations et formulaire de contact.",
      tech: ["React", "Framer Motion", "EmailJS", "Tailwind"],
      github: "https://github.com/ton-projet3",
      demo: "https://demo-projet3.com",
      image: "src/assets/project3.jpg",
    },
  ];

  return (
    <div className="bg-base-200 py-16 px-4 md:px-10" id="projects">
      <Title title="Mes Projets" />

      <div className="max-w-6xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-base-100 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
          >
            {/* Image du projet */}
            <div className="relative overflow-hidden h-48 bg-base-300">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://via.placeholder.com/400x200/3b82f6/ffffff?text=Project";
                }}
              />
              {/* Overlay au survol */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="btn btn-accent btn-sm gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Voir le projet
                  </span>
                </a>
              )}
            </div>

            {/* Contenu */}
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="badge badge-ghost badge-sm text-xs border border-base-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Liens */}
              <div className="flex gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-ghost btn-sm gap-2"
                  >
                    <Code className="w-4 h-4" />
                    Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-accent btn-sm gap-2"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;