import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";

export default function Footer() {
  const { data } = useContext(LanguageContext);

  const title =
    data?.contactSection?.title || "Let’s work together on\nyour next product.";

  const email = data?.contactSection?.email || "yagmurgamzecimen@gmail.com";

  const phone = data?.contactSection?.phone || "+90 541 696 57 23";

  const links = data?.contactSection?.links || [
    { label: "Github", href: "https://github.com/ygmrci" },
    { label: "Linkedin", href: "https://linkedin.com/in/yagmurgamzecimen" },
  ];

  return (
    <section
      id="footer"
      className="px-4 py-16 sm:px-6 md:px-12 md:py-24 bg-[#F9F9F9] dark:bg-zinc-900"
    >
      <div className="mx-auto max-w-6xl">
        {/* Title */}
        <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight text-zinc-900 dark:text-zinc-100">
          {title}
        </h2>

        {/* Row */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-6">
          {/* Contact */}
          <div className="flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${email}`}
              className="
                inline-flex items-center gap-2
                text-fuchsia-600 underline underline-offset-4
                hover:text-fuchsia-700
                dark:text-fuchsia-400 dark:hover:text-fuchsia-300
              "
            >
              <span aria-hidden="true">👉</span>
              {email}
            </a>

            <a
              href={`tel:${phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 text-indigo-600 hover:underline dark:text-indigo-400"
            >
              <span aria-hidden="true">📞</span>
              {phone}
            </a>
          </div>

          {/* Links */}
          <nav aria-label="Links">
            <ul className="flex items-center gap-6 text-[11px]">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => console.log("CLICK:", l.href)}
                    className={`
                      underline-offset-4 hover:underline
                      ${
                        l.label === "Github"
                          ? "text-green-600 hover:text-green-700"
                          : l.label === "Linkedin"
                            ? "text-blue-600 hover:text-blue-700"
                            : "text-zinc-900 dark:text-zinc-100"
                      }
                    `}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
