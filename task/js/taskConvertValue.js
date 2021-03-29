function convert() {
let score = parseInt(document.getElementById("score").value);
let grade;    
if (score <= 29) {
        grade = "E";
    } else if (score >= 30 && score <= 49) {
        grade = "D";
    } else if (score >= 50 && score <= 69) {
        grade = "C";
    } else if (score >= 70 && score <= 85) {
        grade = "B";
    } else if (score >= 86 && score <= 100) {
        grade = "A";
    } else if (score > 100) {
        grade = "Tidak diketahui, Input score terlalu tinggi";
    } else if (score < 0) {
        grade = "Tidak diketahui, Input score terlalu rendah";
    } else {
        grade = "Tidak diketahui, Input Salah";
    }
    console.log(score);
    document.getElementById("result").innerHTML = `<hr>Konversi Score Anda ${grade}` 

}
