document.getElementById("testing").innerHTML = "Ini Dari Javascript";

var name = "Dedi Setiawan";
var semester = 8;
var isFreelance = true;
var haven = ["mobil", "motor"];//array
var family = {
    nama: "Anisa Nurul Hakim",
    gender: "Perempuan",
    jabatan: "Pacar"
}//object
var bigFamily = [{
    nama: "Anisa Nurul Hakim",
    gender: "Perempuan",
    jabatan: "Pacar"
}, {
    nama: "Ahmed Huffadzulhaqq",
    gender: "Laki-laki",
    jabatan: "Adik"
}
];//object of array
var tanggal = new Date();
console.log(typeof name, typeof semester, typeof isFreelance);
console.log(haven);
console.log(family);
console.log(bigFamily);
console.log(bigFamily[1].nama);
console.log(tanggal);

//====================================================//
//reguler function
function helloWorld(nama) {
    console.log(`Hello ${nama}`);
}
//function dengan return
helloWorld("Dedi Setiawan");
function luasSegitiga(alas, tinggi) {
    var luas = alas * tinggi / 2;
    return luas;
}
var luas = luasSegitiga(10, 15);
console.log(`Luas Segitiga = ${luas} `);

//anonymous function
var hi = function (nama) {
    console.log(`Hello ${nama}`);
};
hi("Dedi Setiawan");
//nested function
//function dalam nested tidak bisa diakses diluar function induk
function showMessage() {
    function sayHello() {
        return "Hallo";
    }
    function sayGreating() {
        return " Selamat Sore";
    }
    return sayHello() + sayGreating();
}
console.log(showMessage());