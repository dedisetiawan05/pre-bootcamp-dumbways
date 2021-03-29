function jumlahLoop() {
    var count = document.getElementById("batas").value;
    console.log(count);
    var start = 1;
    var temp = [];
//perulangan while
    while (start <= count) {
        temp.push("<li> Nama Saya Dedi</li>");
        start++;
    }
    document.getElementById("output-perulangan").innerHTML = temp

}
