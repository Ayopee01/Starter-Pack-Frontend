"use client";

import { useT } from "../i18n/use-t";
import { FaFacebookF, FaFacebookMessenger, FaInstagram, FaLine, FaPhoneAlt, FaTiktok } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

export default function Footer() {
  const { t } = useT();

  return (
    <footer className="bg-gray-900 text-gray-300 dark:bg-black">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        
        {/* logo */}
        <div>
          <h3 className="font-heading text-xl font-semibold text-white">Starter Pack</h3>
          <p className="mt-3 text-sm leading-relaxed text-gray-400">{t("footer.tagline")}</p>

          {/* social media */}
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href="https://line.me/R/ti/p/@yourlineid"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LINE"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-green-500 hover:text-white"
            >
              <FaLine className="h-4 w-4" />
            </a>
            <a
              href="https://www.facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-blue-600 hover:text-white"
            >
              <FaFacebookF className="h-4 w-4" />
            </a>
            <a
              href="https://m.me/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Messenger"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-linear-to-tr hover:from-blue-500 hover:via-violet-500 hover:to-pink-500 hover:text-white"
            >
              <FaFacebookMessenger className="h-4 w-4" />
            </a>
            <a
              href="https://www.instagram.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-linear-to-tr hover:from-yellow-400 hover:via-pink-500 hover:to-purple-600 hover:text-white"
            >
              <FaInstagram className="h-4 w-4" />
            </a>
            <a
              href="https://www.tiktok.com/@yourpage"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-black hover:text-white hover:ring-1 hover:ring-gray-600"
            >
              <FaTiktok className="h-4 w-4" />
            </a>
            <a
              href="tel:021234567"
              aria-label={t("floating.call")}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-800 transition-colors hover:bg-brand-600 hover:text-white"
            >
              <FaPhoneAlt className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* menu */}
        <div>
          <h4 className="font-heading font-semibold text-white">{t("footer.menu")}</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="#home" className="hover:text-white">{t("nav.home")}</a></li>
            <li><a href="#about" className="hover:text-white">{t("nav.about")}</a></li>
            <li><a href="#product" className="hover:text-white">{t("nav.product")}</a></li>
            <li><a href="#contact" className="hover:text-white">{t("nav.contact")}</a></li>
          </ul>
        </div>

        {/* contact */}
        <div>
          <h4 className="font-heading font-semibold text-white">{t("footer.contact")}</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex gap-3">
              <HiOutlineLocationMarker className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
              {/* ลิงก์เปิด Google Maps — เปลี่ยน URL เป็นลิงก์แชร์จริงของร้านได้ (Google Maps > แชร์ > คัดลอกลิงก์) */}
              <a
                href="https://maps.google.com/?q=123+ถนนสุขุมวิท+คลองเตย+กรุงเทพฯ+10110"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                {t("contact.address")}
              </a>
            </li>
            <li className="flex gap-3">
              <HiOutlinePhone className="h-5 w-5 shrink-0 text-brand-400" />
              <a href="tel:021234567" className="hover:text-white">02-123-4567</a>
            </li>
            <li className="flex gap-3">
              <HiOutlineMail className="h-5 w-5 shrink-0 text-brand-400" />
              <a href="mailto:hello@example.com" className="hover:text-white">hello@example.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-5 text-center text-sm text-gray-500">
        © 2026 Starter Pack. {t("footer.rights")}
      </div>
    </footer>
  );
}
