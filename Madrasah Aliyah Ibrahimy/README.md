# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Bahasa Indonesia
# Website Madrasah Aliyah Ibrahimy
Website profil sekolah berbasis web yang dibangun menggunakan React dan Vite. Proyek ini dirancang untuk memberikan informasi mengenai Madrasah Aliyah Ibrahimy, mencakup profil sekolah, kegiatan ekstrakurikuler, dan sistem penerimaan murid baru (SPMB).

🚀 Fitur Utama
Navigasi Multi-halaman: Menggunakan React Router untuk perpindahan halaman yang mulus.
Beranda: Halaman utama dengan ringkasan informasi sekolah.
Profil & Tentang: Penjelasan detail mengenai sejarah dan visi misi Madrasah.
Ekstrakurikuler: Informasi mengenai kegiatan non-akademik bagi siswa.
SPMB: Halaman khusus untuk informasi Pendaftaran Mahasiswa/Siswa Baru.
Desain Responsif: Menggunakan Bootstrap untuk memastikan tampilan optimal di berbagai perangkat.
🛠️ Teknologi yang Digunakan
Frontend Library: React.js (v19)
Build Tool: Vite
Styling: Bootstrap & React Bootstrap
Routing: React Router Dom (v7)
Icons: React Icons
📋 Prasyarat Instalasi
Pastikan Anda sudah menginstal perangkat lunak berikut di perangkat Anda:

Node.js (Versi terbaru direkomendasikan)
npm (Biasanya terinstal bersama Node.js)
⚙️ Cara Instalasi & Menjalankan Proyek
Clone repositori ini
git clone [https://github.com/username/nama-repo.git](https://github.com/username/nama-repo.git)
cd "Madrasah Aliyah Ibrahimy"
Instal dependensi
npm install
Jalankan mode pengembangan
npm run dev
Install icons
npm install react-icons
Install react-componennt
 npm install react-bootstrap bootstrap
**Install react-router-dom
npm install react-router-dom
Struktur folder Project :
Madrasah-Aliyah-Ibrahimy/
├── node_modules/           # Folder dependensi npm (terinstal otomatis)
├── public/                 # Aset publik (favicon, logo sekolah)
├── src/
│   ├── assets/             # File gambar, svg, dan branding
│   ├── components/         # Komponen UI Reusable
│   │   ├── Navbar/         # Navigasi (React Bootstrap)
│   │   ├── Footer/         # Footer informasi sekolah
│   │   └── UI/             # Tombol & Card kustom
│   ├── pages/              # Komponen Halaman (Beranda, Tentang, SPMB)
│   ├── layouts/            # Layout utama (MainLayout.jsx)
│   ├── routes/             # Konfigurasi React Router Dom v7
│   ├── styles/             # Custom CSS & Bootstrap overrides
│   │   └── App.css         # Styling global
│   ├── App.jsx             # Entry routing & global provider
│   └── main.jsx            # Entry point (Import Bootstrap CSS di sini)
├── .gitignore              # Daftar file yang diabaikan Git
├── index.html              # Template HTML utama
├── package.json            # Berisi: bootstrap, react-bootstrap, react-icons, react-router-dom
└── vite.config.js          # Konfigurasi Vite
