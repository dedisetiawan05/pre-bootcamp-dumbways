//parameternya gak pakai array
function balik(nomor1, nomor2, nomor3, nomor4) {
    var normal = [nomor1, nomor2, nomor3, nomor4];
    var balik = normal.reverse();
    return balik;
}
console.log(balik(1, 2, 3, 4));
//pakaiarray
function balik(...array) {
    var normal = [];
    normal.push(...array);
    var balik = normal.reverse();
    return balik;
}
var nomor = [1, 2, 3, 4];
console.log(balik(...nomor));