"use client";

import { useSyncExternalStore } from "react";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANG } from "./index";

// useT() เป็น hook ที่ใช้แทน useTranslation() ของ react-i18next 
const subscribe = () => () => {};
const getSnapshot = () => true; // ฝั่ง browser หลัง hydrate
const getServerSnapshot = () => false; // ตอน server render และระหว่าง hydrate

export function useT() {
  const { t, i18n } = useTranslation();
  const hydrated = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  if (!hydrated) {
    return { t: i18n.getFixedT(DEFAULT_LANG) as typeof t, lang: DEFAULT_LANG, i18n };
  }
  return { t, lang: i18n.resolvedLanguage ?? DEFAULT_LANG, i18n };
}
