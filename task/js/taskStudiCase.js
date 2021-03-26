function konversiUmur(){
let umur = document.getElementById("umur").value;
    console.log(umur);
    let kelas; 
    if(umur == 0 || umur == 1){
        kelas = "Bayi";
    }else if(umur >=2 && umur <= 10){
        kelas = "Anak-anak";
    }else if(umur >=11 && umur <= 19){
        kelas = "Remaja";
    }else if(umur >=20 && umur <= 60){
        kelas = "Dewasa";
    }else{
        kelas = "Lanjut Usia";
    }
document.getElementById("output").innerHTML = `Umur ${umur} Tahun Adalah ${kelas}`
}