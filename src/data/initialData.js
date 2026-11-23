export const INITIAL_SCHEDULES = [
  {
    id: 'sch-1',
    course: 'Aplikasi Berbasis Platform',
    time: '08:00 - 10:30 WITA',
    room: 'Lab Komputer 3',
    lecturer: 'Made Agus Putra Subali, S.Kom., M.Kom.',
  },
  {
    id: 'sch-2',
    course: 'Rekayasa Perangkat Lunak',
    time: '13:00 - 15:30 WITA',
    room: 'Ruang B-204',
    lecturer: 'Dosen Pengampu RPL',
  },
];

export const INITIAL_TASKS = [
  {
    id: 'tsk-1',
    title: 'Proyek UTS React Native Expo',
    course: 'Aplikasi Berbasis Platform',
    deadline: '28 Nov 2026',
    priority: 'Tinggi',
    description: 'Membangun aplikasi StudyFlow dengan minimal 5 screen, Bottom Tab + Stack Navigation, serta laporan PDF.',
    isCompleted: false,
  },
  {
    id: 'tsk-2',
    title: 'Dokumen Requirement SIAKAD',
    course: 'Rekayasa Perangkat Lunak',
    deadline: '25 Nov 2026',
    priority: 'Sedang',
    description: 'Menyusun pemetaan Stakeholder Register, daftar FR/NFR, User Story, Use Case, dan RTM.',
    isCompleted: true,
  },
  {
    id: 'tsk-3',
    title: 'Latihan Komponen Props & State',
    course: 'Aplikasi Berbasis Platform',
    deadline: '30 Nov 2026',
    priority: 'Rendah',
    description: 'Membuat komponen LikeButton dinamis menggunakan hook useState.',
    isCompleted: false,
  },
];