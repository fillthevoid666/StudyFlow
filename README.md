# StudyFlow — Aplikasi Manajemen Tugas & Jadwal Kuliah

Prototipe aplikasi mobile lintas platform berbasis **React Native (Expo)** untuk membantu mahasiswa mengelola jadwal perkuliahan harian dan tenggat waktu (*deadline*) tugas.

## Anggota Kelompok
1. **I Wayan Abi Bimantara** — NIM: `240040076`
2. *(Nama Anggota 2 — NIM, atau hapus baris ini jika individu)*

## Fitur & Arsitektur Navigasi
Aplikasi mengombinasikan **Bottom Tab Navigation** dan **Stack Navigation** dengan 5 layar utama:
- **Home Screen (Tab 1):** Ringkasan jadwal mata kuliah hari ini dan tugas dengan tenggat terdekat.
- **Tasks Screen (Tab 2):** Daftar seluruh tugas dengan filter status (*Semua*, *Belum Selesai*, *Selesai*).
- **Profile Screen (Tab 3):** Statistik progres penyelesaian tugas dan informasi pengembang.
- **Add Task Screen (Stack):** Formulir penambahan tugas baru.
- **Task Detail Screen (Stack):** Detail tugas, tombol ubah status selesai, dan hapus tugas.

## Cara Menjalankan Proyek
1. Clone repositori ini:
   ```bash
   git clone <URL_REPO_ANDA>
   cd StudyFlow