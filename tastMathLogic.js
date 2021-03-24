function dataGaji(nama, golongan, jam) {
    console.log(`Nama : Bapak ${nama}`);
    console.log(`Golongan : ${golongan}`);
        if (golongan == "a" || golongan == "A") {
            var gaji = 1000;
        } else if (golongan == "b" || golongan == "B") {
            var gaji = 2000;
        } else if (golongan == "c" || golongan == "C") {
            var gaji = 3000;
        }else if (golongan == "d" || golongan == "d") {
            var gaji = 4000;
        } else {
            gaji = 0;
        }
    var gajiPerhari = gaji * jam;
    console.log(`Gaji Perhari : ${gajiPerhari}`);
    var gajiBulanan = gaji * jam * 30;
        console.log(`Gaji Perbulan : ${gajiBulanan}`);
        if (jam * 30 > 200) {
            var jamLembur = (jam * 30) - 200;
        } else {
            var jamLembur = 0;
        }
    var lembur = jamLembur * gaji;
    console.log(`Gaji Lembur : ${lembur}`);
    var totalGaji = gajiPerhari + gajiBulanan + lembur;
    console.log(`Total Gaji : ${totalGaji}`);
}
dataGaji("Dedi Setiawan", "A", 8);