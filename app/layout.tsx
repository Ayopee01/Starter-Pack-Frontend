import type { Metadata } from "next";
import { Kanit, Sarabun } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import FloatingContact from "./components/floating";
import I18nProvider from "./i18n/provider";

const kanit = Kanit({
  variable: "--font-kanit",
  subsets: ["latin", "thai"],
  weight: ["400", "500", "600", "700"],
});

const sarabun = Sarabun({
  variable: "--font-sarabun",
  subsets: ["latin", "thai"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Starter Pack",
  description: "สร้างเว็บไซต์ธุรกิจของคุณให้พร้อมใช้งานได้รวดเร็ว",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="th"
      className={`${kanit.variable} ${sarabun.variable} h-full antialiased`}
      // next-themes 
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col font-sans">
        {/* ThemeProvider (next-themes)*/}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem storageKey="theme" disableTransitionOnChange>
          {/* I18nProvider */}
          <I18nProvider>
            {children}
            {/* Floating Contact Button */}
            <FloatingContact />
          </I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
