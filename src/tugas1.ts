// TUGAS 1
// MEMBUAT 25 VARIABEL TIPE DATA PRIMITIF TEXTSCRIPT
// tipe data string
let namaLengkap: string = "Enggar Dyah";
console.log(`Nama lengkap: ${namaLengkap}`);

let asalKampus: string = "Universitas Bina Saran Informatika";
console.log(`Asal kampus: ${asalKampus}`);

// Tipe data number
// interger
let umur: number = 21;
console.log(`Umur: ${umur}`);

// float
let tinggiBadan: number = 160.8;
console.log(`Tinggi Badan: ${tinggiBadan}`);

// octal
let bilangaOktal: number = 0o125;
console.log(`Bilangan oktal: ${bilangaOktal}`);

// hexa
let BilanganHexa: number = 0x55;
console.log(`Bilangan hexa: ${BilanganHexa}`);

// binary
let bilanganBinary: number = 0b1010101;
console.log(`Bilangan binary : ${bilanganBinary}`);

// Tipe data bigInt
let bayarUKT: bigint = 4500000n;
console.log(`Jumlah pembayaran ukt: Rp.${bayarUKT}`);

//  Tipe data boolean
let statusMahasiswa: boolean = true;
console.log(`Status mahasiswa (aktif): ${statusMahasiswa}`);

//  Tipe data null
let nilai: null = null;
console.log(`Nilai: ${nilai}`);

//Tipe data NAN
type NumberOrNaN = number;
let nilaiJaringanKomputer: NumberOrNaN = NaN;
console.log(`Nilai tugas jaringan komputer: ${nilaiJaringanKomputer}`);

// Tipe data undefined
let sisaUang: undefined = undefined;
console.log(`Sisa uang hari ini: ${sisaUang}`);

// Tipe data unokwn
let minuman: unknown = "Es Teh";
console.log(`Minuman favorit: ${minuman}`);

// Tipe data array
// array string
let mhs: string[] = ["Enggar", "Juwita", "Fayza", "Nasya"];
console.log(`Nama mahasiswa: ${mhs}`);

// array number
let ipk: number[] = [4.0, 4.0, 4.0, 3.95];
console.log(`Nilai IPK: ${ipk}`);

// array campuran
let mixedArray: any[] = [true, "Enggar", "Keysia", 20];
console.log(`Array campuran ${mixedArray}`);

// Tipe data tupple
let hasilNilai: [number, boolean] = [95, true];
console.log(`Hasil UAS Interaksi Manusia Komputer: ${hasilNilai}`);

// Tipe data any
let bebas: any = 45;
bebas = "Ini adalah string";
console.log(`Tipe data any: ${bebas}`);

// Tipe data object
let dataDiri: { namaPanggilan: string; alamat: string; nim: number } = {
  namaPanggilan: "Enggar",
  alamat: "Tambun Utara, Kab Bekasi",
  nim: 282933830,
};
console.log(dataDiri);

// Tipe data void
function sapa(): void {
  console.log("Studi Independen di Productzilla Academy");
}
sapa();

// Tipe data never
// ini akan menghasilkan perulangan tanpa batas selagi hasilnya true akan terus berjalan
function pengulanganInfinite(): never {
  while (true) {}
}

// Tipe data assertions
let data: any = "Aku sedang belajar typescript";
let panjangKata: number = (data as string).length;
console.log(`Panjang kata dari data tersebut: ${panjangKata}`);

// Tipe data union
let info: boolean | string;
info = false;
info = "MSIB Batch 7";
console.log(info);

// Tipe data interface
interface Hobi {
  namaHobi: string;
  frekuensi: number;
  isActive: boolean;
}

// console.log(`${hobi.nama} mempunyai hobi ${hobi}`);

//  MEMBUAT FUNTION OPERATOR MATEMATIKA
function tambahAngka(a: number, b: number) {
  return a + b;
}
console.log(`Hasil a+b adalah ${tambahAngka(20, 40)}`);

function kurangAngka(a: number, b: number) {
  return a - b;
}
console.log(`Hasil pertambahan a-b adalah ${kurangAngka(50, 15)}`);

function kaliAngka(a: number, b: number) {
  return a * b;
}
console.log(`Hasil perkalian a*b adalah ${kaliAngka(100, 8)}`);

function bagiAngka(a: number, b: number) {
  return a / b;
}
console.log(`Hasil perkalian a/b adalah ${bagiAngka(100, 5)}`);
