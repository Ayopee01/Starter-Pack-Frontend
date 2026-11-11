"use client";

import { HiArrowRight, HiOutlineBadgeCheck, HiOutlineLightningBolt, HiOutlineSupport } from "react-icons/hi";
import { useT } from "../i18n/use-t";

// Highlights Cards
const highlights = [
  { key: "fast", icon: HiOutlineLightningBolt },
  { key: "quality", icon: HiOutlineBadgeCheck },
  { key: "support", icon: HiOutlineSupport },
];

export default function Home() {
  const { t } = useT();

  return (
    <section id="home" className="bg-linear-to-br from-brand-50 via-white to-brand-100 dark:from-gray-950 dark:via-gray-950 dark:to-brand-900/40 pb-20 md:pb-28">
      {/* Header */}
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pb-16 pt-32 sm:px-6 md:grid-cols-2 md:pb-20 md:pt-40">
        <div className="text-center md:text-left">
          <span className="inline-block rounded-full bg-brand-100 px-4 py-1 text-sm font-medium text-brand-700 dark:bg-brand-900/50 dark:text-brand-300">
            {t("hero.welcome")} Starter Pack
          </span>
          <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-gray-900 dark:text-white sm:text-5xl lg:text-6xl">
            {t("hero.title1")}
            <span className="block text-brand-600 dark:text-brand-400">{t("hero.title2")}</span>
          </h1>
          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300">{t("hero.tagline")}</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start">
            <a
              href="#product"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-7 py-3 font-heading text-white shadow-lg transition-colors hover:bg-brand-700"
            >
              {t("hero.viewProducts")} <HiArrowRight />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-brand-600 px-7 py-3 font-heading text-brand-700 transition-colors hover:bg-brand-50 dark:border-brand-400 dark:text-brand-300 dark:hover:bg-brand-900/40"
            >
              {t("hero.contactUs")}
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex aspect-[4/3] items-center justify-center rounded-3xl bg-linear-to-br from-brand-400 to-brand-700 text-white/80 shadow-2xl">
          <span className="font-heading text-lg">Hero Image</span>
        </div>
      </div>

      {/* Highlights */}
      <div className="mx-auto grid max-w-6xl gap-5 px-4 sm:grid-cols-3 sm:px-6">
        {highlights.map(({ key, icon: Icon }) => (
          <div key={key} className="rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg ring-1 ring-gray-100 dark:ring-gray-800">
            <Icon className="h-9 w-9 text-brand-600 dark:text-brand-400" />
            <h3 className="mt-3 font-heading text-lg font-semibold text-gray-900 dark:text-white">{t(`highlights.${key}`)}</h3>
            <p className="mt-1 text-gray-600 dark:text-gray-400">{t(`highlights.${key}Desc`)}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
