"use client";

import { useT } from "../i18n/use-t";
import { LANG_STORAGE_KEY } from "../i18n/provider";

// ปุ่มสลับภาษา TH / EN
export default function LanguageSwitcher({ className = "" }: { className?: string }) {
  const { t, i18n, lang } = useT();
  const current = lang;

  const change = (lng: "th" | "en") => {
    i18n.changeLanguage(lng);
    try {
      localStorage.setItem(LANG_STORAGE_KEY, lng);
    } catch {
    }
  };

  return (
    <div
      role="group"
      aria-label={t("nav.language")}
      className={`inline-flex rounded-full bg-gray-100 p-1 dark:bg-gray-800 font-heading text-sm ${className}`}
    >
      <button
        type="button"
        onClick={() => change("th")}
        aria-pressed={current === "th"}
        className={`cursor-pointer rounded-full px-3 py-1 transition-colors ${current === "th" ? "bg-white text-brand-700 shadow-sm dark:bg-gray-700 dark:text-brand-300" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
          }`}
      >
        TH
      </button>
      <button
        type="button"
        onClick={() => change("en")}
        aria-pressed={current === "en"}
        className={`cursor-pointer rounded-full px-3 py-1 transition-colors ${current === "en" ? "bg-white text-brand-700 shadow-sm dark:bg-gray-700 dark:text-brand-300" : "text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100"
          }`}
      >
        EN
      </button>
    </div>
  );
}
