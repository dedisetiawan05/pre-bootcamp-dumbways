function cari(){
    let kalimat = document.getElementById("kalimat").value;
    let karakter = document.getElementById("karakter").value;
    var x =kalimat.split(karakter).length-1;
    console.log(x);
    
    document.getElementById("hasil").innerHTML = `Total Huruf/Kata ${karakter} diulang sebanyak ${x} kali`
}