// TUGAS 1 MEMBUAT 25 VARIABEL TIPE DATA PRIMITIF TEXTSCRIPT
//1.  tipe data string
var namaLengkap = "Enggar Dyah";
console.log("Nama lengkap: ".concat(namaLengkap));
var asalKampus = "Universitas Bina Saran Informatika";
console.log("Asal kampus: ".concat(asalKampus));
// 2. tipe data number
// interger
var umur = 21;
console.log("Umur: ".concat(umur));
// float
var tinggiBadan = 160.8;
console.log("Tinggi Badan: ".concat(tinggiBadan));
// 4. Tipe data bigInt
var bayarUKT = 4500000n;
console.log("Jumlah pembayaran ukt: Rp.".concat(bayarUKT));
// 3. Tipe data boolean
var statusMahasiswa = true;
console.log("Status mahasiswa (aktif): ".concat(statusMahasiswa));
// 4. Tipe data null
var nilai = null;
console.log("Nilai: ".concat(nilai));
var nilaiJaringanKomputer = NaN;
console.log("Nilai tugas jaringan komputer: ".concat(nilaiJaringanKomputer));
// 6. TIpe data undefined
var sisaUang = undefined;
console.log("Sisa uang hari ini: ".concat(sisaUang));
// Tipe data unokwn
var minuman = "Es Teh";
console.log("Minuman favorit: ".concat(minuman));
// 7. Tipe data array
var ipk = [4.0, 4.0, 4.0, 3.95];
console.log("Nilai IPK: ".concat(ipk));
var mhs = ["Enggar", "Juwita", "Fayza", "Nasya"];
console.log("Nama mahasiswa: ".concat(mhs));
// 8. Tipe data tupple
var hasilNilai = [95, true];
console.log("Hasil UAS Interaksi Manusia Komputer: ".concat(hasilNilai));
// 9. Tipe data any
var bebas = 45;
bebas = "Ini adalah string";
console.log("Tipe data any: ".concat(bebas));
// 10. Tipe data object
var dataDiri = {
    namaPanggilan: "Enggar",
    alamat: "Tambun Utara, Kab Bekasi",
    nim: 282933830,
};
console.log(dataDiri);
// 11. Tipe data void
function sapa() {
    console.log("Studi Independen di Productzilla Academy");
}
sapa();
// Tipe data never
function pengulanganInfinite() {
    while (true) {
    }
}
// ini akan menghasilkan perulangan tanpa batas selagi hasilnya true akan terus berjalan
// Tipe data assertions
var data = "Aku sedang belajar typescript";
var panjangKata = data.length;
console.log("Panjang kata dari data tersebut: ".concat(panjangKata));
// Tipe data union
var info;
info = false;
info = "MSIB Batch 7";
console.log(info);
