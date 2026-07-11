import React from "react";
import Title from "./Title";
import { Blocks, BookCheck, CalendarCog } from "lucide-react";

const About = () => {
  return (
    <div className="bg-base-300 py-10 px-4 md:px-10">
      <Title title="À propos" />

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-12 max-w-6xl mx-auto">
        {/* Image – cachée sur mobile */}
        <div className="hidden md:block flex-shrink-0">
          <img
            className="w-96 h-96 object-cover rounded-xl shadow-lg"
            src="src/assets/img.png"
            alt="Photo de profil"
          />
        </div>

        {/* Cartes d'expérience */}
        <div className="flex flex-col gap-6 w-full md:w-auto">
          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <BookCheck className="w-12 h-12 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Développeur Frontend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Je crée des interfaces modernes avec React et Tailwind.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <CalendarCog className="w-12 h-12 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Développeur Backend</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                J’ai de l’expérience avec Node.js, Express et les bases de données.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-base-100 p-5 rounded-2xl shadow-md hover:shadow-lg transition">
            <Blocks className="w-12 h-12 text-accent flex-shrink-0" />
            <div>
              <h3 className="font-bold text-lg">Fullstack & DevOps</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Je maîtrise le déploiement et l’intégration continue (CI/CD).
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;