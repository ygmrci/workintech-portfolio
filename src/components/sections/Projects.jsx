import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import SectionTitle from "../ui/SectionTitle";

export default function Projects() {
  const { data } = useContext(LanguageContext);

  // data ilk render'da boş gelirse patlamasın
  const title = data?.projectsSection?.title ?? "";
  const projects = data?.projectsSection?.projects ?? [];
  const cta = data?.projectsSection?.cta ?? {
    viewSite: "View Site",
    comingSoon: "Coming Soon",
  };

  const images = import.meta.glob("../../assets/images/*", {
    eager: true,
    import: "default",
  });

  return (
    <section id="projects" className="px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{title}</SectionTitle>

        <div className="mt-10 grid items-stretch justify-items-center gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.filter(Boolean).map((project) => {
            const hasLiveUrl = Boolean(project?.liveUrl?.trim());

            return (
              <article
                key={project.id}
                className="
                    group
                    w-full max-w-[344px]
                    justify-self-center
                    flex h-full flex-col
                    rounded-2xl
                    border border-zinc-200
                    bg-white
                    p-4
                    shadow-sm
                    transition-all duration-300 ease-out
                    hover:-translate-y-1 hover:shadow-md
                    dark:border-zinc-800 dark:bg-zinc-900
                  "
              >
                {/* Image */}
                <div
                  className="
                      w-full overflow-hidden rounded-xl
                      bg-zinc-100 dark:bg-zinc-800
                      aspect-[16/9]
                    "
                >
                  <img
                    src={images[`../../assets/images/${project.image}`]}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Content */}
                <div className="mt-4 flex flex-1 flex-col gap-4">
                  <h3 className="min-h-[56px] text-xl font-semibold leading-snug text-indigo-600 line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="min-h-[60px] text-sm leading-5 text-zinc-600 dark:text-zinc-400 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="
                            rounded-md
                            border border-indigo-500/60
                            bg-indigo-50/40
                            px-3 py-1
                            text-xs font-medium
                            text-indigo-700
                            whitespace-nowrap
                            max-w-[160px] truncate
                            dark:bg-indigo-500/10 dark:text-indigo-300 dark:border-indigo-400/40
                          "
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="mt-auto flex items-center justify-between pt-2 text-sm">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                          inline-flex items-center gap-1
                          text-indigo-600 underline-offset-4
                          hover:underline
                          focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
                          dark:text-indigo-400 dark:focus-visible:ring-offset-zinc-900
                        "
                    >
                      Github
                    </a>

                    <a
                      href={hasLiveUrl ? project.liveUrl : undefined}
                      target={hasLiveUrl ? "_blank" : undefined}
                      rel={hasLiveUrl ? "noreferrer" : undefined}
                      aria-disabled={!hasLiveUrl}
                      className={`rounded-lg border px-4 py-2 text-sm font-medium transition
                          ${
                            hasLiveUrl
                              ? "border-indigo-600 text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
                              : "pointer-events-none cursor-not-allowed border-zinc-400 text-zinc-400 opacity-50"
                          }`}
                    >
                      {hasLiveUrl ? cta.viewSite : cta.comingSoon}
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
