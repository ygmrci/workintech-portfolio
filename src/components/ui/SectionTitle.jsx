import React from "react";

export default function SectionTitle({ children }) {
  return (
    <div className="mb-6">
      <h2
        className="
          text-4xl
          font-extrabold leading-[1.05] tracking-[-0.02em] text-zinc-900 dark:text-zinc-100
        "
      >
        {children}
      </h2>

      <div className="mt-3 h-px w-full bg-zinc-200 dark:bg-zinc-800" />
    </div>
  );
}
