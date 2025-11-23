// Contoh 1: Perbandingan Nilai Sederhana
console.log("=== CONTOH 1: Perbandingan 2 Siswa ===");
let nilaiSiswa1 = 85;
let nilaiSiswa2 = 90;

if (nilaiSiswa1 > nilaiSiswa2) {
    console.log("Siswa 1 lebih tinggi");
} else if (nilaiSiswa1 < nilaiSiswa2) {
    console.log("Siswa 2 lebih tinggi");
} else {
    console.log("Nilai sama");
}

// Contoh 2: Perbandingan dengan Nama Siswa
console.log("\n=== CONTOH 2: Perbandingan dengan Nama ===");
let siswa1 = { nama: "Budi", nilai: 75 };
let siswa2 = { nama: "Ani", nilai: 88 };
let siswa3 = { nama: "Citra", nilai: 92 };

let semuaSiswa = [siswa1, siswa2, siswa3];

// Urutkan dari nilai tertinggi ke terendah
semuaSiswa.sort((a, b) => b.nilai - a.nilai);

console.log("Peringkat Nilai:");
semuaSiswa.forEach((siswa, index) => {
    console.log(`${index + 1}. ${siswa.nama}: ${siswa.nilai}`);
});

// Contoh 3: Mencari Nilai Tertinggi dan Terendah
console.log("\n=== CONTOH 3: Nilai Tertinggi & Terendah ===");
let daftarNilai = [85, 92, 78, 95, 88, 76, 90];

let nilaiTertinggi = Math.max(...daftarNilai);
let nilaiTerendah = Math.min(...daftarNilai);
let rataRata = daftarNilai.reduce((sum, nilai) => sum + nilai, 0) / daftarNilai.length;

console.log(`Nilai Tertinggi: ${nilaiTertinggi}`);
console.log(`Nilai Terendah: ${nilaiTerendah}`);
console.log(`Rata-rata: ${rataRata.toFixed(2)}`);

// Contoh 4: Perbandingan dengan Kategori Predikat
console.log("\n=== CONTOH 4: Perbandingan dengan Predikat ===");
function tentukanPredikat(nilai) {
    if (nilai >= 90) return "A (Sangat Baik)";
    if (nilai >= 80) return "B (Baik)";
    if (nilai >= 70) return "C (Cukup)";
    if (nilai >= 60) return "D (Kurang)";
    return "E (Sangat Kurang)";
}

let dataSiswa = [
    { nama: "Ahmad", nilai: 95 },
    { nama: "Siti", nilai: 78 },
    { nama: "Rian", nilai: 88 },
    { nama: "Dewi", nilai: 65 }
];

dataSiswa.forEach(siswa => {
    console.log(`${siswa.nama}: ${siswa.nilai} - ${tentukanPredikat(siswa.nilai)}`);
});

// Contoh 5: Perbandingan Siapa yang Lulus
console.log("\n=== CONTOH 5: Perbandingan Kelulusan ===");
const nilaiMinimalLulus = 75;

dataSiswa.forEach(siswa => {
    let status = siswa.nilai >= nilaiMinimalLulus ? "LULUS" : "TIDAK LULUS";
    console.log(`${siswa.nama}: ${siswa.nilai} - ${status}`);
});

// Hitung jumlah yang lulus
let jumlahLulus = dataSiswa.filter(s => s.nilai >= nilaiMinimalLulus).length;
console.log(`\nTotal siswa yang lulus: ${jumlahLulus} dari ${dataSiswa.length} siswa`);