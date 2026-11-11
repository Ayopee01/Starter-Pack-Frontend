"use client";

import { useEffect } from "react";
import i18n from "./index";

export const LANG_STORAGE_KEY = "lang";

export default function I18nProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const syncHtmlLang = (lng: string) => {
      document.documentElement.lang = lng;
    };
    i18n.on("languageChanged", syncHtmlLang);

    try {
      const saved = localStorage.getItem(LANG_STORAGE_KEY);
      if (saved && saved !== i18n.language) i18n.changeLanguage(saved);
    } catch {
    }

    return () => i18n.off("languageChanged", syncHtmlLang);
  }, []);

  return <>{children}</>;
}
