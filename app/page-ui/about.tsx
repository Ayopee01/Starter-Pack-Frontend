"use client";

import { HiCheckCircle } from "react-icons/hi";
import { useT } from "../i18n/use-t";

// Features
const features = ["point1", "point2", "point3", "point4"];

// Stats Cards
const stats = [
  { value: "10+", key: "statYears" },
  { value: "500+", key: "statClients" },
  { value: "1,200+", key: "statProjects" },
  { value: "98%", key: "statSatisfaction" },
];

export default function About() {
  const { t } = useT();

  return (
    <section id="about" className="py-20 md:py-28">
      {/* Header */}
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 md:grid-cols-2">
        <div>
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {t("about.eyebrow")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("about.title")}
          </h2>
          <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">{t("about.desc")}</p>
          <ul className="mt-6 space-y-3">
            {/* Features */}
            {features.map((key) => (
              <li key={key} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                <HiCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-brand-600 dark:text-brand-400" />
                {t(`about.${key}`)}
              </li>
            ))}
          </ul>
        </div>

        {/* About Image */}
        <div className="flex aspect-square items-center justify-center rounded-3xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500 md:order-first">
          <span className="font-heading">About Image</span>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="mx-auto mt-16 grid max-w-6xl grid-cols-2 gap-6 px-4 sm:px-6 md:grid-cols-4">
        {stats.map(({ value, key }) => (
          <div key={key} className="rounded-2xl bg-brand-50 dark:bg-brand-900/30 p-6 text-center">
            <p className="font-heading text-3xl font-bold text-brand-700 dark:text-brand-400">{value}</p>
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{t(`about.${key}`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
