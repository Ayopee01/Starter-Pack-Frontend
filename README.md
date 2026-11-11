# Starter Pack

เว็บไซต์ธุรกิจแบบ **Single Page** — ทุกเนื้อหาอยู่ในหน้าเดียว เรียงเป็น section ต่อกัน และใช้เมนูเลื่อนไปยังแต่ละส่วน

## Features

- **Single Page** — Home → About → Product → Contact → Footer เมนูเลื่อนแบบนุ่มนวลไปยังแต่ละ section
- **Responsive** — รองรับทุกขนาดจอ บน mobile มี Hamburger menu เลื่อนออกมาจากฝั่งซ้าย
- **2 ภาษา (TH / EN)** — สลับได้จากปุ่มใน navbar และจำภาษาที่เลือกไว้
- **Dark mode** — ตามธีมของเบราว์เซอร์อัตโนมัติ และกดสลับเองได้ (จำค่าไว้)
- **Floating** — มุมขวาล่างทุกหน้า: LINE OA, Facebook, Messenger, Instagram, TikTok, โทร
- **Form ติดต่อ** — ส่งอีเมลผ่าน EmailJS (ไม่ต้องมี backend)
- **แผนที่ Google Maps** — ฝังในส่วนติดต่อ และที่อยู่กดเปิด Google Maps ได้

## Tech Stack

| หมวด | เทคโนโลยี | เวอร์ชัน |
|---|---|---|
| Runtime | [Node.js](https://nodejs.org) | 26.13.0 (LTS) |
| Framework | [Next.js](https://nextjs.org) + [React](https://react.dev) | 16.4.6 / 19.3.1 |
| Language | [TypeScript](https://www.typescriptlang.org) | 7.0.2 |
| Linting | [ESLint](https://eslint.org) | 10.14.0 |
| CSS | [Tailwind CSS](https://tailwindcss.com) | 4.3.5 |
| Icons | [react-icons](https://react-icons.github.io/react-icons/) | 5.7.0 |
| Fonts | Kanit, Sarabun (`next/font/google`) | — |
| i18n | [i18next](https://www.i18next.com) + [react-i18next](https://react.i18next.com) | 27.1.1 / 18.0.1 |
| Dark mode | [next-themes](https://github.com/pacocoursey/next-themes) | 0.4.6 |
| Email | [EmailJS](https://www.emailjs.com) | 5.0.3 |

ดูเวอร์ชันล่าสุดในเครื่องได้ด้วย `npm ls --depth=0` และ `node -v`

## Getting Started

```bash
npm install
cp .env.example .env.local   # แล้วใส่ค่า EmailJS (ดูหัวข้อถัดไป)
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000)

| คำสั่ง | ใช้ทำอะไร |
|---|---|
| `npm run dev` | รัน dev server (แก้ไฟล์แล้วหน้าเว็บอัปเดตเอง) |
| `npm run build` | build สำหรับ production |
| `npm run start` | รันเว็บที่ build แล้ว |
| `npm run lint` | ตรวจโค้ดด้วย ESLint |

## EmailJS Setup

1. สมัคร/เข้าสู่ระบบที่ [dashboard.emailjs.com](https://dashboard.emailjs.com)
2. คัดลอก `.env.example` เป็น `.env.local` แล้วใส่ค่า:

   | ตัวแปร | หาได้จาก |
   |---|---|
   | `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | Email Services → Service ID |
   | `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | Email Templates → Template ID |
   | `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | Account → General → Public Key |

3. ใน EmailJS Template ใช้ตัวแปรให้ตรงกับชื่อช่องในฟอร์ม:
   `{{user_name}}` `{{user_email}}` `{{user_phone}}` `{{subject}}` `{{message}}`
4. รีสตาร์ท `npm run dev`

> `.env.local` ถูก ignore โดย git — ห้าม commit ค่าจริง ถ้ายังไม่ได้ตั้งค่า ฟอร์มจะแสดงข้อความแจ้งเตือนแทนการส่ง

## Project Structure

```
app/
├── layout.tsx              # โครงหลัก: ฟอนต์, ThemeProvider, I18nProvider, ปุ่มติดต่อลอย
├── page.tsx                # หน้าเดียวของเว็บ — นำ section มาเรียงต่อกัน
├── globals.css             # Tailwind, สีแบรนด์, dark mode, ความสูง navbar
├── components/             # ส่วนที่ใช้ร่วมกัน
│   ├── navbar.tsx          # เมนูด้านบน + เมนู mobile (slide จากซ้าย)
│   ├── footer.tsx
│   ├── floating.tsx        # ปุ่มติดต่อลอย
│   ├── language-switcher.tsx
│   └── theme-toggle.tsx
├── page-ui/                # section ของหน้า (ไม่ใช่ route — ไม่มี page.tsx)
│   ├── home.tsx            # Hero + การ์ดจุดเด่น
│   ├── about.tsx           # ข้อดี + ตัวเลขสถิติ
│   ├── product.tsx         # การ์ดสินค้า/บริการ
│   └── contact.tsx         # ข้อมูลติดต่อ + แผนที่ + Form EmailJS
└── i18n/
    ├── index.ts            # ตั้งค่า i18next (ภาษาเริ่มต้น = th)
    ├── provider.tsx        # โหลดภาษาที่ผู้ใช้เคยเลือก
    ├── use-t.ts            # hook useT() — ใช้แทน useTranslation()
    └── locales/
        ├── th.json         # ข้อความภาษาไทย
        └── en.json         # ข้อความภาษาอังกฤษ
```
