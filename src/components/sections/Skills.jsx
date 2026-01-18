import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Skills() {
  const { data } = useContext(LanguageContext);
  const { title, skills } = data.skillsSection;

  return (
    <section id="skills" className="px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <h2 className="mb-8 text-2xl font-semibold">{title}</h2>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 md:grid-cols-4">
        {skills.map((skill) => (
          <li
            key={skill}
            className="
              flex items-center justify-center
              rounded-md border
              px-3 py-2
              text-sm
              border-zinc-300 dark:border-zinc-700
              text-zinc-900 dark:text-zinc-100
              bg-white/60 dark:bg-zinc-900
              text-center
              break-words
            "
          >
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}
