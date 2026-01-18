import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

export default function Header() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { lang, toggleLang, data } = useContext(LanguageContext);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 md:px-12">
        {/* LEFT: Logo */}
        <div className="flex items-center">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100">
            <span className="text-sm font-semibold text-indigo-600 italic -skew-x-12">
              Y
            </span>
          </div>
        </div>

        {/* RIGHT: top actions + bottom nav */}
        <div className="flex flex-col items-end gap-2">
          {/* Top row: Dark mode + language */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className={`relative h-5 w-9 rounded-full transition ${
                  theme === "dark" ? "bg-indigo-600" : "bg-zinc-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 h-4 w-4 rounded-full transition ${
                    theme === "dark"
                      ? "left-4 bg-[#FFE86E]"
                      : "left-0.5 bg-white"
                  }`}
                />
              </button>

              <span className="text-xs tracking-wide text-zinc-500 dark:text-zinc-400">
                {data.nav.darkMode}
              </span>
            </div>

            <span className="text-zinc-300 dark:text-zinc-700">|</span>

            <button
              type="button"
              onClick={toggleLang}
              className="text-xs font-medium text-indigo-600 hover:underline"
            >
              {lang === "tr" ? data.nav.switchToEn : data.nav.switchToTr}
            </button>
          </div>

          {/* Bottom row: Skills / Projects / Hire me */}
          <div className="flex items-center gap-16">
            <a
              href="#skills"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {data.nav.skills}
            </a>

            <a
              href="#projects"
              className="text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-300 dark:hover:text-white"
            >
              {data.nav.projects}
            </a>

            <a
              href="#footer"
              className="rounded-xl border border-indigo-600 px-4 py-2 text-sm font-medium text-indigo-600 hover:bg-indigo-50 dark:hover:bg-indigo-950"
            >
              {data.nav.hireMe}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
