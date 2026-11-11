"use client";

import { useTheme } from "next-themes";
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";
import { useT } from "../i18n/use-t";

// Function ThemeToggle สำหรับสลับธีม
export default function ThemeToggle() {
  const { t } = useT();
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={t("nav.toggleTheme")}
      className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:text-brand-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:text-brand-400"
    >
      {/* Icon */}
      <HiOutlineMoon className="h-5 w-5 dark:hidden" />
      <HiOutlineSun className="hidden h-5 w-5 dark:block" />
    </button>
  );
}
