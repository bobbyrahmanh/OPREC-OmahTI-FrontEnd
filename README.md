# OmahTI Analytics – Landing Page (OPREC OmahTI Front-End)

Halaman landing page statis bertema **OmahTI Analytics**, dibuat sebagai tugas seleksi (open recruitment) Front-End OmahTI. Halaman ini menampilkan ringkasan fitur analitik OmahTI, proyek & kemenangan terbaru dari berbagai divisi, serta daftar kontributor.

Dibangun hanya dengan **HTML, CSS, dan JavaScript** tanpa framework maupun proses build.

## Fitur

- **Navigation bar** berisi logo, menu (Divisions, Features, About, Contact), tombol tema, serta tombol Sign In dan Sign Up.
- **Banner utama** dengan tombol *Get Started* dan *More Analytics*.
- **Bagian produk** yang terdiri dari dua kartu:
  - *Project Tracking*: memantau progres dan kontribusi di seluruh proyek OmahTI.
  - *Competition Analytics*: melacak partisipasi dan kontribusi di kompetisi IT.
- **Latest Projects & Winnings** berupa kartu proyek (OmahTI Learning Center, Data Royale, OemOem, 1st Place Datathon, PORSENIGAMA, FMIPA Projects, dan lainnya) beserta daftar kontributor.
- **Banner ajakan** ("Ready to share?") dengan tombol Sign Up dan Contact.
- **Footer** berisi informasi (About, Contact, Cookie policy, Terms and Conditions, Privacy Policy), tautan sosial media, dan indikator status sistem.

### Fitur Opsional

1. **Animasi hover** saat kursor diarahkan ke elemen.
2. **Tombol Contact** membuka website lain di tab baru melalui `window.open('link', '_blank')`.
3. **Tombol tema** untuk berpindah antara *dark mode* dan *light mode*.
4. **Interaksi JavaScript** pada tombol *More* (menampilkan proyek tambahan) dan tombol *+3 more* (menampilkan nama kontributor lainnya).

## Teknologi

| Teknologi | Kegunaan |
| --- | --- |
| HTML5 | Struktur halaman |
| CSS3 | Styling, tema gelap/terang, animasi hover |
| JavaScript (Vanilla) | Toggle tema, tombol *More*, daftar kontributor |
| Google Fonts | Montserrat, Inter, Nunito, Open Sans, Poppins, Quicksand |
| Lucide & Material Icons (SVG inline) | Ikon antarmuka |

## Struktur Proyek

```
OPREC-OmahTI-FrontEnd/
├── tes.html       # Struktur halaman utama
├── tes.css        # Styling halaman
├── tes.js         # Interaksi (toggle tema, More, kontributor)
└── opsional.txt   # Daftar fitur opsional yang diimplementasikan
```

## Cara Menjalankan

1. Clone repositori ini:

   ```bash
   git clone https://github.com/bobbyrahmanh/OPREC-OmahTI-FrontEnd.git
   cd OPREC-OmahTI-FrontEnd
   ```

2. Buka file `tes.html` langsung di browser, atau gunakan ekstensi **Live Server** di VS Code agar halaman ter-reload otomatis saat ada perubahan.

> Koneksi internet diperlukan untuk memuat font Google Fonts dan gambar yang di-hosting secara eksternal.

## Catatan

- Gambar pada kartu proyek dan bagian produk masih memakai URL eksternal, sehingga bisa tidak tampil jika sumbernya berubah atau dihapus.
- Beberapa tautan (menu navigasi, footer, tombol Sign In/Sign Up) masih berupa placeholder.

Repositori dikelola oleh [@bobbyrahmanh](https://github.com/bobbyrahmanh).


