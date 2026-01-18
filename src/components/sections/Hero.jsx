import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import githubIcon from "../../../public/images/github.png";
import linkedinIcon from "../../../public/images/linkedin.png";
import profileImg from "../../../public/images/profile.jpeg";

export default function Hero() {
  const { data } = useContext(LanguageContext);
  const { name, headline, headline2, intro } = data.heroSection;

  return (
    <section id="profile" className="px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* TEXT */}
          <div className="order-1">
            {/* Name + line (md+ görünür) */}
            <div className="mb-3 hidden items-center gap-3 md:flex">
              <span className="h-px w-16 bg-indigo-600"></span>
              <p className="text-sm font-medium text-indigo-600">{name}</p>
            </div>

            {/* Headline (md+ görünür) */}
            <h1 className="hidden text-4xl font-bold leading-tight sm:text-5xl md:block md:text-6xl">
              {headline}
              <br />
              {headline2}
            </h1>

            {/* Intro (md+ normal görünür) */}
            <p className="mt-5 hidden max-w-xl text-sm leading-6 text-zinc-600 sm:text-base dark:text-zinc-400 md:block">
              {intro}
            </p>

            {/* Mobile: mini profile + intro yan yana */}
            <div className="md:hidden">
              <div className="flex items-start gap-4">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="h-20 w-20 shrink-0 rounded-2xl object-cover shadow-sm"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <p className="text-sm font-medium text-indigo-600">{name}</p>
                  <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                    {intro}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}

            <div className="mt-8 hidden items-center gap-3 md:flex">
              <a
                href="#contact"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-700"
              >
                Hire me
              </a>

              <a
                href="https://github.com/ygmrci"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <img src={githubIcon} alt="Github" className="h-4 w-4" />
                Github
              </a>

              <a
                href="https://www.linkedin.com/in/yagmurgamzecimen/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-4 py-2.5 text-sm font-medium transition hover:bg-zinc-50 dark:border-zinc-700 dark:hover:bg-zinc-900"
              >
                <img src={linkedinIcon} alt="Linkedin" className="h-4 w-4" />
                Linkedin
              </a>
            </div>
          </div>

          {/* IMAGE (sadece md+) */}
          <div className="order-2 hidden justify-center md:flex md:justify-end">
            <img
              src={profileImg}
              alt="Profile"
              loading="lazy"
              decoding="async"
              className="
                h-82 w-82 lg:h-[360px] lg:w-[360px]
                rounded-3xl object-cover
                shadow-xl shadow-black/10 dark:shadow-black/40
              "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
