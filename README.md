# PENSQuiz Landing Page

A sleek promotional landing page for PENSQuiz built with React, TypeScript, and Tailwind CSS. Features modern UI elements, introduces the platform, and directs users to the primary app's login and registration portal.

Landing page ini bertindak sebagai pintu masuk utama / etalase promosi untuk platform **PENSQuiz**, yang dimigrasi dari Laravel Blade template asli (`pensquiz/resources/views/pages/public/landing.blade.php`) ke React Single Page Application yang super cepat dan responsif.

---

## 🛠️ Persyaratan System

*   **Node.js** (v18 atau yang lebih baru)
*   **npm** atau package manager alternatif

---

## 🚀 Panduan Setup & Instalasi

### 1) Salin Environment Variables
Salin file `.env.example` menjadi `.env` di root folder landing page:
```bash
cp .env.example .env
```

Edit file `.env` untuk menyambungkan tombol Login dan Register ke URL frontend utama:
*   `VITE_PENSQUIZ_FRONTEND_URL` — Host/URL di mana **PENSQuiz Frontend** berjalan (contoh: `http://localhost:5173`).

Tombol redirect di landing page akan otomatis mengarah ke:
*   **Login**: `${VITE_PENSQUIZ_FRONTEND_URL}/login`
*   **Register**: `${VITE_PENSQUIZ_FRONTEND_URL}/register`

### 2) Instalasi Dependency & Run
Jalankan perintah berikut di folder `pensquiz_landing_page/`:
```bash
# Menginstal package node modules
npm install

# Menjalankan development server
npm run dev
```

Secara default, landing page akan berjalan secara lokal di host yang ditentukan oleh Vite (biasanya `http://localhost:5173` atau port lain yang tersedia).

---

## ✨ Keunggulan Landing Page Ini

*   **Fast Loading Time**: Menggunakan bundler Vite modern yang sangat ringan dan cepat.
*   **Modern Responsive Design**: Didesain penuh menggunakan Tailwind CSS untuk kenyamanan akses di ponsel, tablet, maupun desktop.
*   **Visual Premium**: Dilengkapi dengan copy marketing yang solid, list keunggulan platform, serta alur pendaftaran user baru yang intuitif.
