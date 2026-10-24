# TODO — Jurnale Trading Journal

## PWA jurnal trading mobile-first
- [x] Aplikasi harus dapat dijalankan di browser Chrome, terutama pada layar HP, dengan antarmuka PWA responsif dan nyaman digunakan.
- [x] Pertahankan jurnal trading untuk mencatat, melihat, mengubah, dan menghapus detail setiap transaksi.
- [x] Pertahankan dashboard performa yang merangkum hasil trading melalui metrik utama dan visualisasi perkembangan.
- [x] Pertahankan kalkulator risiko untuk membantu menghitung ukuran posisi dan batas risiko berdasarkan akun atau modal.
- [x] Pertahankan pengelolaan beberapa akun trading beserta modal dan perubahan saldonya.
- [x] Pertahankan kalender trading untuk meninjau aktivitas dan hasil transaksi berdasarkan tanggal.
- [x] Pertahankan ekspor dan pencadangan data lokal ke berkas yang dapat disimpan pengguna.
- [x] Pertahankan pemulihan data jurnal dari berkas cadangan dengan validasi sebelum impor.
- [x] Pertahankan kemampuan unggah dan melampirkan screenshot pada catatan trade.
- [x] Data jurnal harus disimpan persisten sepenuhnya di penyimpanan browser perangkat tanpa backend cloud untuk data jurnal.
- [x] Sediakan route manifest `/manus-routes.json` yang mendeklarasikan halaman aplikasi.
- [x] Sediakan server preview self-contained pada port 3000 dan konfigurasi PWA yang valid.

## Performance v2
- [x] Halaman Performance dibagi menjadi tiga bagian: ringkasan informasi umum, Advanced Statistics, dan Trader DNA.
- [x] Bagian ringkasan menampilkan kartu informasi umum bergaya referensi, grafik, metrik utama, dan tombol Bagikan ke story.
- [x] Tombol Advanced Statistics dan Trader DNA ditempatkan bersama tombol Bagikan ke story dan membuka halaman detail penuh dengan tombol kembali seperti alur Kalender.
- [x] Advanced Statistics dimulai dari pengaturan Periode dan berlanjut hingga Pair terpopuler.
- [x] Layout Performance menyesuaikan HP, tablet, dan laptop.
- [x] Versi aplikasi dinaikkan menjadi 2.0.0.

## Performance v2.0.1
- [x] Panel `Profitability · ...% menang` dipindahkan ke bawah bagian `Distribusi win / loss`.
- [x] Jarak judul, panel, dan baris tabel Advanced Statistics dirapikan agar teks dan nilai tidak terpotong pada layar kecil.
- [x] Navigasi bawah Performance, My Journal, dan Tools diberi transisi, highlight, glow, dan animasi ikon saat berpindah tab.
- [x] Versi aplikasi dinaikkan menjadi 2.0.1.

## Performance v2.0.2
- [x] Seluruh blok Advanced Statistics dipindahkan setelah Distribusi win / loss, termasuk Profitability, baris Total Trades sampai Withdrawals, dan catatan perhitungan Pips.
- [x] Jarak vertikal antara metrik Performance, Bagikan ke story, dan tombol detail disamakan tanpa ruang flex kosong.
- [x] Animasi navigasi bawah disederhanakan menjadi transisi standar yang halus.
- [x] Halaman Performance memiliki animasi masuk ringan saat pertama dibuka atau saat tab Performance dipilih.
- [x] Versi aplikasi dinaikkan menjadi 2.0.2.

## Performance v2.0.3
- [x] Judul `Advanced Statistics` dan subjudul `Statistik lengkap akun · ... trade` tetap berada di posisi atas.
- [x] Hanya kartu tabel Advanced Statistics beserta isinya yang dipindahkan ke bawah Distribusi win / loss.
- [x] Margin tambahan antara metrik Perolehan Pips dan tombol Bagikan ke story dihapus agar jarak antar bagian konsisten.
- [x] Versi aplikasi dinaikkan menjadi 2.0.3.

## Performance v2.0.4
- [x] Heading `OVERVIEW / ACCOUNT`, `Performance`, dan deskripsi analisis di halaman utama dihapus.
- [x] Ikon dompet dipindahkan ke bawah nama Active Account.
- [x] Judul dan subjudul Advanced Statistics ditempatkan setelah bagian Periode.
- [x] Animasi muncul ringan ditambahkan untuk tabel/matriks Performance dan judul Advanced Statistics.
- [x] Versi aplikasi dinaikkan menjadi 2.0.4.

## Performance v2.0.5
- [x] Animasi khusus kartu Performance dibuat lebih hidup namun tetap halus.
- [x] Saldo utama mendapat efek muncul ringan.
- [x] Garis grafik digambar bertahap dan area grafik muncul dengan fade-in.
- [x] Kartu data, legenda, dan tombol aksi muncul berurutan dengan jeda singkat.
- [x] Animasi tidak diterapkan ke halaman lain.
- [x] Versi aplikasi dinaikkan menjadi 2.0.5.

## Performance v2.0.6
- [x] Sweep cahaya halus ditambahkan pada permukaan kartu Performance.
- [x] Animasi saldo dibuat lebih terlihat dengan bounce ringan.
- [x] Grafik menggambar garis lebih lama, area grafik fade-in, dan titik akhir grafik membesar singkat.
- [x] Data, legenda, dan tombol aksi muncul bertahap dengan timing yang lebih terasa.
- [x] Versi aplikasi dinaikkan menjadi 2.0.6.

## UI Animation v2.1.0
- [x] Staggered entrance diterapkan pada kartu, statistik, teks, legenda, dan tombol dengan jeda bertahap 50–100 ms.
- [x] Easing modern `cubic-bezier(0.16, 1, 0.3, 1)` digunakan pada entrance dan transisi utama dengan durasi 400–600 ms.
- [x] Hover dan tap micro-interaction ditambahkan pada tombol, kartu statistik, selector, dan tab.
- [x] Grafik Performance tumbuh dari kiri ke kanan melalui path drawing dan area fade-in.
- [x] Angka utama Performance kembali menggunakan counting-up dari 0 saat pertama kali dimuat.
- [x] Reduced-motion fallback tetap tersedia untuk pengguna yang menonaktifkan animasi.
- [x] Versi aplikasi dinaikkan menjadi 2.1.0.

## Performance v2.1.1
- [x] Kartu utama Performance diposisikan di tengah area layar atas–bawah.
- [x] Overview Performance tidak dapat ditarik atau discroll vertikal; gerakan yang tersisa hanya animasi internal kartu.
- [x] Halaman detail Advanced Statistics dan Trader DNA tetap memiliki scroll untuk konten panjang.
- [x] Versi aplikasi dinaikkan menjadi 2.1.1.

## Layout v2.1.2
- [x] Perilaku scroll overview Performance dikembalikan seperti sebelumnya.
- [x] Kartu Performance tidak lagi terkunci di tengah atau mengunci overflow layar.
- [x] Posisi awal konten dibuat lebih dekat ke header.
- [x] Penyesuaian jarak atas berlaku konsisten pada Performance, My Journal, dan Tools.
- [x] Versi aplikasi dinaikkan menjadi 2.1.2.

## Layout v2.1.3
- [x] Posisi awal konten dinaikkan lagi sekitar seperempat jarak agar lebih dekat ke bagian atas.
- [x] Penyesuaian berlaku untuk Performance, My Journal, dan Tools.
- [x] Ikon dompet disamakan dengan bentuk tombol ikon kalender di header.
- [x] Indikator titik merah pada detail Advanced Statistics disembunyikan.
- [x] Versi aplikasi dinaikkan menjadi 2.1.3.

## Advanced Statistics v2.1.4
- [x] Titik hijau/merah yang melayang di pojok halaman dihapus dari DOM tampilan Advanced Statistics.
- [x] Penyebabnya diperbaiki pada selector `.performance-detail-page .dot`, bukan pada overlay Chrome.
- [x] Versi aplikasi dinaikkan menjadi 2.1.4.

## Button interaction v2.1.5
- [x] Menghapus kotak focus dan tap highlight sementara pada semua tombol.
- [x] Menghapus animasi transisi kotak sementara pada Performance, My Journal, dan Tools.
- [x] Tombol kalender, dompet, Advanced Statistics, Trader DNA, Bagikan ke story, backup, restore, CSV, akun, dan Add Trade langsung menampilkan bentuk finalnya.
- [x] Animasi hover/active yang halus tetap dipertahankan tanpa outline kotak.
- [x] Versi aplikasi dinaikkan menjadi 2.1.5.

## Haptic feedback v2.1.6
- [x] Menambahkan getar singkat sekitar 12 ms saat tombol disentuh pada HP/perangkat touch.
- [x] Berlaku untuk tombol kalender, dompet, navigasi, Performance, My Journal, Tools, backup, restore, CSV, akun, Add Trade, dan tombol lainnya.
- [x] Tidak berjalan pada desktop, browser/perangkat yang tidak mendukung `navigator.vibrate()`, atau mode reduced motion.
- [x] Versi aplikasi dinaikkan menjadi 2.1.6.

## Selective haptic v2.1.7
- [x] Getar tombol diperlunak menjadi 8 ms agar lebih halus.
- [x] Tombol kalender header tetap dapat memberi getar saat ikon kalender disentuh.
- [x] Isi kalender/modal kalender tidak memberi getar.
- [x] Semua tombol, diagram, tab, dan kontrol pada Advanced Statistics serta Trader DNA tidak memberi getar.
- [x] Versi aplikasi dinaikkan menjadi 2.1.7.

## Haptic UX tiers v2.2.0
- [x] Aksi utama seperti FAB/Add Trade menggunakan getar tegas 18 ms.
- [x] Navigasi bawah dan filter/dropdown/kalender menggunakan tick ringan 10 ms.
- [x] Tombol simpan, deposit, tambah akun, dan backup menggunakan pola sukses `[15, 30, 20]`.
- [x] Tombol hapus akun/log menggunakan pola peringatan `[40, 40, 40]`.
- [x] Advanced Statistics dan Trader DNA tetap tidak memberi getar pada tombol maupun diagram.
- [x] Versi aplikasi dinaikkan menjadi 2.2.0.

## Splash, haptic, dan menu bawah v2.3.0
- [x] Layar pembuka kini menampilkan logo + tulisan `EDGE JOURNAL / TRADING LOGBOOK` tepat di tengah layar, dengan animasi halus (logo muncul, bolt tergambar, tulisan menyusul) lalu memudar ke aplikasi. Teks "Memuat Edge Journal…" di bagian atas yang membuat logo terlihat naik dihapus.
- [x] Font Google tidak lagi memblokir tampilan pertama sehingga splash muncul langsung.
- [x] Ikon aplikasi (`icon-192.png`, `icon-512.png`, `icon-maskable-512.png`) diganti ke logo bolt outline bergradien biru sesuai referensi.
- [x] Getar sentuhan pertama diperbaiki: Chrome memblokir `navigator.vibrate()` sebelum ada user activation (untuk sentuhan baru terjadi saat jari diangkat). Jika belum ada aktivasi, getar ditunda ke `pointerup`; setelah itu getar langsung di `pointerdown`.
- [x] Getar menu bawah dipicu bersamaan dengan pindah tab (event click) sehingga selalu sinkron, termasuk di sentuhan pertama.
- [x] Menu bawah dipercantik: efek tekan (scale) instan, ikon naik sedikit saat ditekan, indikator garis di atas tab aktif, label tab aktif lebih tebal, bayangan atas, dan `touch-action: manipulation` agar tanpa jeda ketuk.
- [x] Cache service worker dinaikkan ke `edge-journal-v2`; versi aplikasi menjadi 2.3.0.
