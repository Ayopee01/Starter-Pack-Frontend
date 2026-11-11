"use client";

import { useEffect, useState } from "react";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import { useT } from "../i18n/use-t";
import LanguageSwitcher from "./language-switcher";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  const { t } = useT();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // เพิ่ม shadow ให้ navbar เมื่อเลื่อนหน้าจอลงมา
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // ล็อกการ scroll ของ body และกด ESC เพื่อปิดเมนูเมื่อเปิดอยู่
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // ปิดเมนูอัตโนมัติเมื่อขยายจอเป็นขนาด desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 bg-white/90 backdrop-blur dark:bg-gray-950/90 transition-shadow ${scrolled ? "shadow-md" : ""
        }`}
    >
      <nav className="mx-auto flex h-(--nav-height) max-w-6xl items-center px-4 sm:px-6">
        {/* Hamburger Menu (mobile) */}
        <div className="flex flex-1 justify-start md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="-ml-2 cursor-pointer rounded-md p-2 text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-800"
            aria-label={t("nav.openMenu")}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <HiOutlineMenuAlt2 className="h-6 w-6" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex flex-1 justify-center md:justify-start">
          <a href="#home" className="font-heading text-xl font-semibold text-brand-700 dark:text-brand-400">
            Starter Pack
          </a>
        </div>

        {/* Menu */}
        <ul className="hidden items-center gap-8 md:flex">
          <li><a href="#home" className="font-heading text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-400">{t("nav.home")}</a></li>
          <li><a href="#about" className="font-heading text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-400">{t("nav.about")}</a></li>
          <li><a href="#product" className="font-heading text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-400">{t("nav.product")}</a></li>
          <li><a href="#contact" className="font-heading text-gray-700 transition-colors hover:text-brand-600 dark:text-gray-200 dark:hover:text-brand-400">{t("nav.contact")}</a></li>
        </ul>

        {/* Theme Toggle + Language Switcher + Request Quote Button */}
        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="hidden items-center gap-4 md:flex">
            <ThemeToggle />
            <LanguageSwitcher />
            <a
              href="#contact"
              className="rounded-full bg-brand-600 px-5 py-2 font-heading text-sm text-white transition-colors hover:bg-brand-700"
            >
              {t("nav.quote")}
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 z-40 h-dvh bg-black/50 transition-opacity duration-300 md:hidden ${open ? "opacity-100" : "pointer-events-none opacity-0"
          }`}
        aria-hidden
      />

      {/* Menu Drawer (mobile) */}
      <aside
        id="mobile-menu"
        className={`fixed left-0 top-0 z-50 flex h-dvh w-72 max-w-[80vw] flex-col bg-white shadow-xl dark:bg-gray-900 transition-transform duration-300 ease-out md:hidden ${open ? "translate-x-0" : "-translate-x-full"
          }`}
        aria-hidden={!open}
        inert={!open}
      >
        <div className="flex h-[var(--nav-height)] items-center justify-between border-b border-b-gray-200 dark:border-b-gray-800 px-4">
          {/* Logo (mobile)*/}
          <span className="font-heading text-lg font-semibold text-brand-700 dark:text-brand-400">
            Starter Pack
          </span>
          {/* Close Button (mobile)*/}
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="cursor-pointer rounded-md p-2 text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
            aria-label={t("nav.closeMenu")}
          >
            <HiX className="h-6 w-6" />
          </button>
        </div>

        {/* Menu (mobile)*/}
        <ul className="flex-1 space-y-1 overflow-y-auto p-4">
          <li><a href="#home" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-heading text-gray-700 hover:bg-brand-50 hover:text-brand-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-brand-400">{t("nav.home")}</a></li>
          <li><a href="#about" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-heading text-gray-700 hover:bg-brand-50 hover:text-brand-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-brand-400">{t("nav.about")}</a></li>
          <li><a href="#product" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-heading text-gray-700 hover:bg-brand-50 hover:text-brand-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-brand-400">{t("nav.product")}</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)} className="block rounded-lg px-4 py-3 font-heading text-gray-700 hover:bg-brand-50 hover:text-brand-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-brand-400">{t("nav.contact")}</a></li>
        </ul>

        {/* Language Switcher (mobile) */}
        <div className="flex items-center gap-3 border-t border-t-gray-200 p-4 dark:border-t-gray-800">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </aside>
    </header>
  );
}
