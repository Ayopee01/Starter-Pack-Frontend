"use client";

import { HiOutlineCube, HiOutlineChartBar, HiOutlineCog, HiOutlineDesktopComputer, HiOutlineShieldCheck, HiOutlineTruck } from "react-icons/hi";
import { useT } from "../i18n/use-t";

// Products Cards 
const products = [
  { key: "web", icon: HiOutlineDesktopComputer, href: "#contact" },
  { key: "marketing", icon: HiOutlineChartBar, href: "#contact" },
  { key: "goods", icon: HiOutlineCube, href: "#contact" },
  { key: "automation", icon: HiOutlineCog, href: "#contact" },
  { key: "security", icon: HiOutlineShieldCheck, href: "#contact" },
  { key: "delivery", icon: HiOutlineTruck, href: "#contact" },
];

export default function Product() {
  const { t } = useT();

  return (
    <section id="product" className="bg-gray-50 dark:bg-gray-900/40 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {t("product.eyebrow")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("product.title")}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t("product.subtitle")}</p>
        </div>

        {/* Products Cards */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map(({ key, icon: Icon, href }) => (
            <a
              key={key}
              href={href}
              className="group block rounded-2xl bg-white dark:bg-gray-900 p-7 shadow-sm ring-1 ring-gray-100 dark:ring-gray-800 transition hover:-translate-y-1 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-brand-50 dark:bg-brand-900/30 text-brand-600 dark:text-brand-400 transition-colors group-hover:bg-brand-600 group-hover:text-white dark:group-hover:bg-brand-600 dark:group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>
              <h3 className="mt-5 font-heading text-xl font-semibold text-gray-900 dark:text-white">{t(`product.${key}`)}</h3>
              <p className="mt-2 text-gray-600 dark:text-gray-400">{t(`product.${key}Desc`)}</p>
              <span className="mt-4 inline-block font-heading text-sm text-brand-600 dark:text-brand-400 group-hover:underline">
                {t("product.more")}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
