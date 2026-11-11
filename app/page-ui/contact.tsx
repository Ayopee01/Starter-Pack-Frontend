"use client";

import { useRef, useState, type FormEvent } from "react";
import { useT } from "../i18n/use-t";
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiCheckCircle, HiExclamationCircle } from "react-icons/hi";

// ใช้ EmailJS ส่งอีเมลจากฟอร์มติดต่อ ใช้ Key จาก .env
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-gray-300 bg-white dark:border-gray-700 dark:bg-gray-800 px-4 py-3 text-gray-900 dark:text-white outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200 dark:focus:ring-brand-900";

export default function Contact() {
  const { t } = useT();
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");
  // เก็บ key ของข้อความ error (ไม่ใช่ตัวข้อความ) เพื่อให้เปลี่ยนภาษาตามได้
  const [errorKey, setErrorKey] = useState<"contact.errorConfig" | "contact.errorSend">("contact.errorSend");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      setStatus("error");
      setErrorKey("contact.errorConfig");
      return;
    }

    setStatus("sending");
    try {
      // ส่งฟอร์มผ่าน EmailJS
      // โหลด EmailJS ตอนกดส่งเท่านั้น — ถ้า import ไว้บนสุด server จะโหลดด้วย
      // แล้ว EmailJS เช็ค localStorage ตอนโหลด ทำให้ Node.js ขึ้น ExperimentalWarning
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setErrorKey("contact.errorSend");
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-heading text-sm font-medium uppercase tracking-widest text-brand-600 dark:text-brand-400">
            {t("contact.eyebrow")}
          </p>
          <h2 className="mt-2 font-heading text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            {t("contact.title")}
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">{t("contact.subtitle")}</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          {/* Contact Info */}
          <div className="space-y-6 rounded-2xl bg-brand-700 dark:bg-brand-900 p-8 text-white lg:col-span-2">
            <h3 className="font-heading text-xl font-semibold">{t("contact.infoTitle")}</h3>
            <div className="flex gap-4">
              <HiOutlineLocationMarker className="h-6 w-6 shrink-0 text-brand-200" />
              <a
                href="https://maps.google.com/?q=123+ถนนสุขุมวิท+คลองเตย+กรุงเทพฯ+10110"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-50 hover:underline"
              >
                {t("contact.address")}
              </a>
            </div>
            <div className="flex gap-4">
              <HiOutlinePhone className="h-6 w-6 shrink-0 text-brand-200" />
              <a href="tel:021234567" className="hover:underline">02-123-4567</a>
            </div>
            <div className="flex gap-4">
              <HiOutlineMail className="h-6 w-6 shrink-0 text-brand-200" />
              <a href="mailto:hello@example.com" className="break-all hover:underline">hello@example.com</a>
            </div>

            {/* แผนที่ Google Maps */}
            <iframe
              src="https://maps.google.com/maps?q=123+ถนนสุขุมวิท+คลองเตย+กรุงเทพฯ+10110&z=15&output=embed"
              title={t("contact.mapTitle")}
              className="aspect-video w-full rounded-xl border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>

          {/* Form EmailJS */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="grid gap-5 rounded-2xl bg-white dark:bg-gray-900 p-6 shadow-lg ring-1 ring-gray-100 dark:ring-gray-800 sm:grid-cols-2 sm:p-8 lg:col-span-3"
          >
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{t("contact.name")}</span>
              <input name="user_name" type="text" required className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{t("contact.email")}</span>
              <input name="user_email" type="email" required className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{t("contact.phone")}</span>
              <input name="user_phone" type="tel" className={inputClass} />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{t("contact.subject")}</span>
              <input name="subject" type="text" className={inputClass} />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-sm font-medium text-gray-700 dark:text-gray-300">{t("contact.message")}</span>
              <textarea name="message" rows={5} required className={`${inputClass} resize-y`} />
            </label>

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full cursor-pointer rounded-full bg-brand-600 px-8 py-3 font-heading text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "sending" ? t("contact.sending") : t("contact.send")}
              </button>

              <div aria-live="polite" className="mt-4">
                {status === "success" && (
                  <p className="flex items-center gap-2 text-green-600 dark:text-green-400">
                    <HiCheckCircle className="h-5 w-5" /> {t("contact.success")}
                  </p>
                )}
                {status === "error" && (
                  <p className="flex items-center gap-2 text-red-600 dark:text-red-400">
                    <HiExclamationCircle className="h-5 w-5 shrink-0" /> {t(errorKey)}
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
