import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import th from "./locales/th.json";
import en from "./locales/en.json";

// ภาษาเริ่มต้น TH (ไทย)
export const DEFAULT_LANG = "th";

if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources: {
      th: { translation: th },
      en: { translation: en },
    },
    lng: DEFAULT_LANG, // ภาษาเริ่มต้น (ตอน prerender จะเป็นภาษาไทยเสมอ)
    fallbackLng: DEFAULT_LANG,
    initAsync: false, // โหลดแบบ sync เพราะข้อความอยู่ในไฟล์แล้ว ทำให้ render ครั้งแรกมีข้อความทันที
    interpolation: { escapeValue: false }, // React escape ให้อยู่แล้ว
  });
} else {

  i18n.addResourceBundle("th", "translation", th, true, true);
  i18n.addResourceBundle("en", "translation", en, true, true);
}

export default i18n;
