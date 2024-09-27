// TUGAS 2
// 1.MEMBUAT VARIABEL SESUAI TIPENYA
let namaPahlawan: string = "Arion";
let umurPahlawan: number = 30;
let siapPerang: boolean = true;
console.log(`Nama pahlawan : ${namaPahlawan}, umur pahlawan : ${umurPahlawan}, siap Perang kah? ${siapPerang}`);
// penyimpanan variabel dalam object
let dataHero: { nameHero: string; ageHero: number; isWar: boolean } = {
  nameHero: "Arion",
  ageHero: 30,
  isWar: true,
};
console.log(dataHero);

// 2. Tugas Membuat Variabel Sumber Daya Kerajaan
let jumlahEmas: number = 5000;
let persediaanMakanan: number = 120;
let prajurit: number = 200;
console.log(`Jumlah emas ${jumlahEmas} keping emas, persediaan makanan ${persediaanMakanan} unit makanan, prajurit ${prajurit}`);

// 3. Tugas petualangan kerajaan
let emasTambahan: number = 1500;
let pengalamanBertarung: number = 75;
let totalEmas: number = jumlahEmas + emasTambahan;
console.log(`Total emas yang didapatkan adalah ${totalEmas}`);

// 4.Tugas Misi Penyembuhan
let kurangiKesehatan = function (jumlahPrajurit: number, poinHilang: number): number {
  let poinKesehatan: number = 100;
  let hasilHitung: number = poinKesehatan - (poinHilang - 5);
  if (hasilHitung === 0) {
    console.log("Poin kamu sudah mencapi 0, maaf tidak bisa ikut bertarung");
  }
  return hasilHitung;
};
console.log(kurangiKesehatan(20, 20));
console.log(kurangiKesehatan(30, 105));

// 5. Rangkuman Misi Arion
let cetakRangkuman = function (): void {
  console.log(`Nama Pahlawan : ${namaPahlawan}`);
  console.log(`Emas yang dikumpulkan : ${totalEmas} keping emas`);
  console.log(`Poin pengalaman yang didapatkan : ${pengalamanBertarung}xp`);
};

cetakRangkuman();
