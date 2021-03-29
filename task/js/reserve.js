// //parameternya gak pakai array
// function desc(nomor1, nomor2, nomor3, nomor4) {
//     var normal = [nomor1, nomor2, nomor3, nomor4];
//     var balik = normal.reverse();
//     return balik;
// }
// console.log(desc(1, 2, 3, 4));
// //pakaiarray
// function descanding(...array) {
//     var normal = [];
//     normal.push(...array);
//     var balik = normal.reverse();
//     return balik;
// }
// var nomor = [1, 2, 3, 4];
// console.log(descanding(...nomor));

function verse(){
    //cara step by step
    let world = document.getElementById("normalText").value;
    let array = world.split("");
    let reverseArray = array.reverse();
    let joinArray = reverseArray.join("");
    //cara simple
    let a = world.split("").reverse().join("");
    console.log(a);
    
    document.getElementById("from").innerHTML = `<hr>Normal Text : ${world}`
    document.getElementById("result").innerHTML = `Reverse Text : ${joinArray}`
}