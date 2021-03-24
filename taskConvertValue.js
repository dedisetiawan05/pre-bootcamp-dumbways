function convert(nilai) {
    if (nilai <= 29) {
        console.log("Nilai Konversi Adalah E");
    } else if (nilai >= 30 && nilai <= 49) {
        console.log("Nilai Konversi Adalah D");
    } else if (nilai >= 50 && nilai <= 69) {
        console.log("Nilai Konversi Adalah C");
    } else if (nilai >= 70 && nilai <= 85) {
        console.log("Nilai Konversi Adalah B");
    } else if (nilai >= 86 && nilai <= 100) {
        console.log("Nilai Konversi Adalah A");
    } else if (nilai > 100) {
        console.log("Input Nilai terlalu tinggi");
    } else if (nilai < 0) {
        console.log("Input Nilai terlalu rendah");
    } else {
        console.log("Input Salah");
    }
}
convert(90);