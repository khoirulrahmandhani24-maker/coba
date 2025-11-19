// Database Tafsir Mimpi Jawa
const mimpiData = [
  // ALAM
  { kata: "banjir", kategori: "alam", arti: "Banjir dalam mimpi melambangkan datangnya rezeki yang melimpah, namun perlu diwaspadai karena bisa juga menandakan ujian emosional.", filosofi: "Air adalah simbol kehidupan. Banjir mengajarkan keseimbangan antara kelimpahan dan pengendalian diri.", sumber: "Primbon Betaljemur Adammakna" },
  { kata: "gunung", kategori: "alam", arti: "Mendaki gunung menunjukkan perjuangan menuju tujuan mulia. Puncak = kesuksesan.", filosofi: "Gunung adalah guru ketabahan. Setiap langkah adalah pelajaran.", sumber: "Serat Primbon Jawa" },
  { kata: "hujan", kategori: "alam", arti: "Hujan deras = berkah.<br> Hujan gerimis = ketenangan batin.", filosofi: "Hujan membersihkan jiwa dan membawa kesuburan.", sumber: "Primbon Jawa Kuno" },
  { kata: "api", kategori: "alam", arti: "Api besar = semangat dan peningkatan kedudukan.<br> Terbakar = mendapat kehormatan.", filosofi: "Api adalah unsur kesucian dan energi. Dalam falsafah Jawa, api memurnikan dan memberi kekuatan spiritual.", sumber: "Primbon Kanda Empat" },
  { kata: "pohon", kategori: "alam", arti: "Pohon rindang = rezeki stabil.<br> Pohon tumbang = kehilangan.<br> Memanjat pohon = usaha keras.", filosofi: "Pohon melambangkan akar kehidupan, pertumbuhan, dan kekuatan keluarga.", sumber: "primbon pedesaan Jawa Timur" },
  { kata: "matahari", kategori: "alam", arti: "Terbit = harapan baru.<br> Terbenam = fase berakhir.<br> Sangat terang = sukses besar.", filosofi: "Matahari adalah simbol kebenaran, kekuatan, dan kemuliaan. Dalam falsafah Jawa, “srengenge” digambarkan sebagai petunjuk jalan.", sumber: "Primbon Jawa manuskrip Mataram" },
  { kata: "bulan", kategori: "alam", arti: "Bulan purnama = keberkahan.<br> Bulan terbelah = konflik.<br> Bulan jatuh = kehilangan.", filosofi: "Bulan melambangkan kewibawaan, keindahan, dan ketenteraman batin. Dalam kejawen, bulan juga tanda energi halus.", sumber: "Primbon Pasar Weton" },
  { kata: "Sungai", kategori: "alam", arti: "Jernih = rezeki halal.<br> Keruh = fitnah.<br> Menyeberang sungai = melewati cobaan.", filosofi: "Sungai adalah aliran takdir. Jernih = lancar. Keruh = ujian.", sumber: "Primbon Betaljemur Adammakna" },

  // HEWAN
  { kata: "ular", kategori: "hewan", arti: "Ular = musuh tersembunyi.<br> Jika digigit = fitnah.<br> Jika mati = kemenangan.", filosofi: "Ular mengajarkan kewaspadaan tanpa ketakutan berlebih.", sumber: "Kitab Primbon Jawa" },
  { kata: "macan", kategori: "hewan", arti: "Macan = kekuatan & wibawa.<br> Jika menyerang = tantangan besar.", filosofi: "Macan adalah simbol keberanian dan kepemimpinan.", sumber: "Serat Centhini" },
  { kata: "burung", kategori: "hewan", arti: "Burung terbang bebas = jiwa yang merdeka.<br> Burung masuk rumah = tamu.", filosofi: "Burung adalah utusan langit, membawa kabar baik.", sumber: "Primbon Adammakna" },
  { kata: "gajah", kategori: "hewan", arti: "Melihat gajah = kehormatan dan rezeki besar.<br> Didekati gajah = akan bertemu orang penting.<br> Gajah marah = konflik dengan orang berpengaruh.", filosofi: "Gajah adalah simbol kebijaksanaan, kemakmuran, dan kekuatan lembut.", sumber: "Tradisi Jawa-Budha kuno" },
  { kata: "Kupu-Kupu", kategori: "hewan", arti: "Kupu masuk rumah = kedatangan tamu.<br> Kupu besar = kabar penting.<br> Menangkap kupu = mendapat keberuntungan kecil.", filosofi: "Kupu = transformasi, perubahan baik, dan keindahan batin.", sumber: "Primbon Betaljemur" },
  { kata: "Ayam", kategori: "hewan", arti: "Ayam berkokok = datangnya kabar baik.<br> Ayam bertarung = perselisihan kecil dalam keluarga.", filosofi: "Ayam adalah simbol kehidupan sehari-hari, kejujuran, dan rezeki yang nyata.", sumber: "Primbon Pasaran" },

  // SIMBOL JAWA
  { kata: "wayang", kategori: "simbol", arti: "Menonton wayang = mendapat petuah hidup.<br> Menjadi dalang = mengendalikan nasib.", filosofi: "Wayang adalah cermin kehidupan: ada lakon, ada sutradara, ada penonton.", sumber: "Filosofi Jawa" },
  { kata: "keris", kategori: "simbol", arti: "Memegang keris = kehormatan.<br> Keris patah = kehilangan wibawa.", filosofi: "Keris adalah simbol tanggung jawab dan keberanian.", sumber: "Primbon Jawa" },
  { kata: "gamelan", kategori: "simbol", arti: "Mendengar gamelan = kedamaian batin.<br> Bermain gamelan = harmoni hidup.", filosofi: "Gamelan mengajarkan kerja sama dan irama kehidupan.", sumber: "Budaya Kraton" },

  // MANUSIA
  { kata: "menikah", kategori: "manusia", arti: "Menikah dengan orang dikenal = ikatan baru.<br> Dengan orang asing = perubahan besar.", filosofi: "Pernikahan adalah simbol penyatuan dua jiwa menuju keseimbangan.", sumber: "Primbon Jawa" },
  { kata: "meninggal", kategori: "manusia", arti: "Orang tua meninggal = peringatan untuk berbakti.<br> Diri sendiri = kelahiran kembali.", filosofi: "Kematian adalah pintu menuju kehidupan baru (metamorfosis jiwa).", sumber: "Serat Wedhatama" },
  { kata: "terbang", kategori: "manusia", arti: "Terbang tanpa sayap = ambisi tinggi.<br> Jatuh = peringatan kesombongan.", filosofi: "Terbang mengajarkan keseimbangan antara cita-cita dan realitas.", sumber: "Primbon Jawa Kuno" },
];