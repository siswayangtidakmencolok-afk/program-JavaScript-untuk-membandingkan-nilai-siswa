function Hitungnilaisiswa() {
    const nilai_siswa = prompt("Masukkan nilai:");
    const presentase_nilai = parseInt(nilai_siswa);

    const jenis_bilangan = presentase_nilai % 2 === 0 ? "Genap" : "Ganjil";

    let nilai_huruf = "";

    if (presentase_nilai >= 85 && presentase_nilai <= 100) {
        nilai_huruf = "A";
    } else if (presentase_nilai >= 75 && presentase_nilai <= 84) {
        nilai_huruf = "B";
    } else if (presentase_nilai >= 60 && presentase_nilai <= 74) {
        nilai_huruf = "C";
    } else {
        nilai_huruf = "D";
    }

    console.log(`nilai angka: ${nilai_siswa}`);
    console.log(`nilai huruf: ${nilai_huruf}`);
    console.log(`bilangan ${jenis_bilangan}`);

    const jawaban = prompt("Hitung nilai siswa lain? (ya/tidak):");
    if (jawaban.toLowerCase() === "ya") {
        Hitungnilaisiswa();
    }
}

Hitungnilaisiswa();