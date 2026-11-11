"use client";

import { useEffect, useRef, useState } from "react";
import { FaFacebookMessenger, FaFacebookF, FaInstagram, FaLine, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { HiChatAlt2, HiX } from "react-icons/hi";
import { useT } from "../i18n/use-t";

export default function FloatingContact() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // คลิกนอกกล่อง หรือกด ESC เพื่อปิด
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    window.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <ul
        className={`flex flex-col items-end gap-3 transition-all duration-200 ${open ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
          }`}
        aria-hidden={!open}
        inert={!open}
      >
        <li>
          <a href="https://line.me/R/ti/p/@yourlineid" target="_blank" rel="noopener noreferrer" aria-label="LINE OA" className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">LINE OA</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform group-hover:scale-110">
              <FaLine className="h-5 w-5" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">Facebook</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg transition-transform group-hover:scale-110">
              <FaFacebookF className="h-5 w-5" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://m.me/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Messenger" className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">Messenger</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-tr from-blue-500 via-violet-500 to-pink-500 text-white shadow-lg transition-transform group-hover:scale-110">
              <FaFacebookMessenger className="h-5 w-5" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">Instagram</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-linear-to-tr from-yellow-400 via-pink-500 to-purple-600 text-white shadow-lg transition-transform group-hover:scale-110">
              <FaInstagram className="h-5 w-5" />
            </span>
          </a>
        </li>
        <li>
          <a href="https://www.tiktok.com/@yourpage" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">TikTok</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-black text-white shadow-lg transition-transform group-hover:scale-110">
              <FaTiktok className="h-5 w-5" />
            </span>
          </a>
        </li>
        <li>
          <a href="tel:021234567" aria-label={t("floating.call")} className="group flex items-center gap-3">
            <span className="pointer-events-none translate-x-2 rounded-md bg-white px-3 py-1 text-sm text-gray-700 dark:bg-gray-800 dark:text-gray-100 opacity-0 shadow-md transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100">{t("floating.call")}</span>
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white shadow-lg transition-transform group-hover:scale-110">
              <FaPhoneAlt className="h-5 w-5" />
            </span>
          </a>
        </li>
      </ul>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="relative flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-brand-600 text-white shadow-xl transition-colors hover:bg-brand-700"
        aria-label={open ? t("floating.close") : t("floating.open")}
        aria-expanded={open}
      >
        {!open && (
          <span className="absolute inset-0 animate-ping rounded-full bg-brand-500 opacity-40" aria-hidden />
        )}
        {open ? <HiX className="relative h-6 w-6" /> : <HiChatAlt2 className="relative h-7 w-7" />}
      </button>
    </div>
  );
}
