import { useContext } from "react";
import { LanguageContext } from "../../context/LanguageContext";
import SectionTitle from "../ui/SectionTitle";

export default function About() {
  const { data } = useContext(LanguageContext);
  const { title, leftTitle, rightTitle, items, description } =
    data.aboutSection;

  return (
    <section id="profile" className="px-4 py-10 sm:px-6 md:px-12 md:py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle>{title}</SectionTitle>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-indigo-600">
              {leftTitle}
            </h3>

            <dl className="mt-4 space-y-3 text-sm">
              {items.map((item) => (
                <div
                  key={item.label}
                  className="grid grid-cols-[150px_1fr] gap-6"
                >
                  <dt className="font-medium text-zinc-900 dark:text-zinc-100">
                    {item.label}
                  </dt>
                  <dd className="text-zinc-600 dark:text-zinc-400">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-indigo-600">
              {rightTitle}
            </h3>

            <p className="mt-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
              {description}
            </p>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
      </div>
    </section>
  );
}
