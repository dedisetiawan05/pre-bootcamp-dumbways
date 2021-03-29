function convert(){
let age = document.getElementById("age").value;
    let convertAge; 
    if(age == 0 || age == 1){
        convertAge = "Bayi";
    }else if(age >=2 && age <= 10){
        convertAge = "Anak-anak";
    }else if(age >=11 && age <= 19){
        convertAge = "Remaja";
    }else if(age >=20 && age <= 60){
        convertAge = "Dewasa";
    }else if(age >= 90){
        convertAge = "Lanjut Usia";
    }else{
        alert("Inputan Salah");
    }
document.getElementById("output").innerHTML = `Umur ${age} Tahun Adalah ${convertAge}`
}