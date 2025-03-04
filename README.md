# kartu-bicara

## 📌 Tentang Proyek Ini

**Kartu Bicara** adalah aplikasi berbasis web yang bertujuan untuk meningkatkan komunikasi melalui permainan kartu interaktif. Proyek ini terdiri dari **frontend** dan **backend** yang masing-masing memiliki repositori tersendiri:

- **Frontend (Vue 3 + Vite)** → [kartu-bicara-web](https://github.com/ikhsanheriyawan2404/kartu-bicara-web)
- **Backend (Colyseus + Express)** → [kartu-bicara-server](https://github.com/Ikhsanheriyawan2404/kartu-bicara-server)

Proyek ini bersifat **open source**, dan kami mengundang siapa saja untuk berkontribusi, baik dalam pengembangan fitur baru, perbaikan bug, maupun penambahan konten permainan.

---

## 🚀 Cara Berkontribusi

Jika kamu tertarik untuk berkontribusi, silakan ikuti langkah-langkah berikut:

1. **Fork repo ini** dan buat branch baru untuk perubahanmu.
2. **Jalankan proyek secara lokal** dengan mengikuti petunjuk di atas.
3. **Tambahkan fitur atau perbaikan** yang ingin kamu kembangkan.
4. **Buat Pull Request (PR)** ke repository utama.

Kami juga menerima saran dan ide untuk pengembangan lebih lanjut! Silakan buat **issue** di repository jika memiliki masukan atau menemukan bug.

---

## 📋 Capaian yang Harus Dicapai

Berikut adalah daftar fitur dan pengembangan yang masih dalam progres atau belum tersedia:

### ✅ **Fitur yang sudah tersedia**
- Pemilihan kategori sebelum masuk ke permainan.
- Rotasi giliran pemain secara otomatis.
- ~~Timer permainan.~~
- ~~Penghitungan skor berdasarkan jawaban yang benar~~.
- ~~Penyimpanan riwayat permainan~~.

### 🚧 **Fitur yang masih perlu dikembangkan**
- [ ] **Halaman Dashboard** → Menampilkan daftar permainan yang tersedia atau telah dimainkan.
- [ ] **Profil Pemain** → Menyimpan informasi skor dan statistik permainan pemain.
- [ ] **Sistem Leaderboard** → Menampilkan peringkat pemain berdasarkan skor tertinggi.
- [ ] **UI untuk Administrasi Data Kartu** → Halaman CRUD untuk menambah, mengedit, dan menghapus kartu pertanyaan.
- [ ] **Sistem Multiplayer Real-Time yang Lebih Stabil** → Mengoptimalkan koneksi WebSocket dan handling sesi permainan.

### 🃏 **Data Kartu / Pertanyaan yang Masih Kurang**
- [ ] Penambahan lebih banyak **kategori** pertanyaan.
- [ ] Penambahan lebih banyak **pertanyaan** untuk setiap kategori yang ada.
- [ ] Diversifikasi tingkat kesulitan pertanyaan.

---

Kami sangat antusias untuk mengembangkan proyek ini bersama komunitas.  
Jika kamu tertarik untuk membantu, jangan ragu untuk **bergabung dan berkontribusi**! 🚀

---

### Installation

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
bun install
```

### Compile and Hot-Reload for Development

```sh
bun dev
```

### Type-Check, Compile and Minify for Production

```sh
bun run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
bun lint
```
