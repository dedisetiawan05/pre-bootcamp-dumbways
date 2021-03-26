function celciusToFahr(isi){
    let isiKonvert = (isi * 9/5) + 32;
    console.log(isiKonvert);
    return isiKonvert;
}
function celciusToKelvin(isi){
    let isiKonvert = isi + 275.15;
    console.log(isiKonvert);
    return isiKonvert;
}
function fahrToCelcius(isi){
    let isiKonvert = (isi - 32) * 5/9;
    console.log(isiKonvert);
    return isiKonvert;
}
function fahrToKelvin(isi){
    let isiKonvert = ((isi - 32) * 5/9) + 273.15;
    console.log(isiKonvert);
    return isiKonvert;
}
function  kelvinToCelc(isi){
    let isiKonvert = isi - 273.15;
    console.log(isiKonvert);
    return isiKonvert;
}
function kelvinToFahr(isi){
    let isiKonvert = ((isi - 273.25)* 9/5) + 32;
    console.log(isiKonvert);
    return isiKonvert;
}
function convertion(){
    let suhu = document.getElementById("suhu").value;
    let isi = document.getElementById("isi").value;
    let hasil;
    let suhuKonversi = document.getElementById("suhuKonversi").value;
    if(suhu == "celcius" && suhuKonversi == "fahrenheit"){
        hasil = celciusToFahr(isi);
    }else if(suhu == "celcius" && suhuKonversi == "kelvin"){
        hasil = celciusToKelvin(isi);
    }else if(suhu == "fahrenheit" && suhuKonversi == "celcius"){
        hasil = fahrToCelcius(isi);
    }else if(suhu == "fahrenheit" && suhuKonversi == "kelvin"){
        hasil = fahrToKelvin(isi);
    }else if(suhu == "kelvin" && suhuKonversi == "celcius"){
        hasil = kelvinToCelc(isi);
    }else if(suhu == "kelvin" && suhuKonversi == "fahrenheit"){
        hasil = kelvinToFahr(isi);
    }else if(suhu == suhuKonversi){
        hasil = isi;
    }
    function singkatan(suhu){
        if(suhu == "celcius"){
            return "&deg; C";
        }else if(suhu == "fahrenheit"){
            return "&deg; F";
        }else if(suhu == "kelvin"){
            return "&deg; K";
        }
    }
    console.log(isi);
console.log(suhu);
console.log(suhuKonversi);
console.log(this.hasil);
document.getElementById("dari").innerHTML = isi
document.getElementById("derajat1").innerHTML = singkatan(suhu)
document.getElementById("derajat2").innerHTML = singkatan(suhuKonversi) 
document.getElementById("hasil").innerHTML = hasil
}
