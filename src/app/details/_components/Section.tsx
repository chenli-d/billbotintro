import React, { ReactNode } from "react";

type Props = {
  id: string;
  title?: string;
  children?: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section
      id={id}
      className="min-h-screen scroll-mt-24 py-20 px-6 md:px-12 border-b border-gray-200 dark:border-gray-700"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">{title}</h2>
        <div className="text-gray-700 dark:text-gray-300 leading-relaxed">{children}</div>
      </div>
    </section>
  );
}
