function celciusToFahr(value){
    let valueConvert = (value * 9/5) + 32;
    return valueConvert;
}
function celciusToKelvin(value){
    let valueConvert = value + 275.15;
    return valueConvert;
}
function fahrToCelcius(value){
    let valueConvert = (value - 32) * 5/9;
    return valueConvert;
}
function fahrToKelvin(value){
    let valueConvert = ((value - 32) * 5/9) + 273.15;
    return valueConvert;
}
function  kelvinToCelc(value){
    let valueConvert = value - 273.15;
    return valueConvert;
}
function kelvinToFahr(value){
    let valueConvert = ((value - 273.25)* 9/5) + 32;
    return valueConvert;
}
function convertion(){
    let temp = document.getElementById("temp").value;
    let value = document.getElementById("value").value;
    let result;
    let tempConvert = document.getElementById("tempConvert").value;
    if(temp == "celcius" && tempConvert == "fahrenheit"){
        result = celciusToFahr(value);
    }else if(temp == "celcius" && tempConvert == "kelvin"){
        result = celciusToKelvin(value);
    }else if(temp == "fahrenheit" && tempConvert == "celcius"){
        result = fahrToCelcius(value);
    }else if(temp == "fahrenheit" && tempConvert == "kelvin"){
        result = fahrToKelvin(value);
    }else if(temp == "kelvin" && tempConvert == "celcius"){
        result = kelvinToCelc(value);
    }else if(temp == "kelvin" && tempConvert == "fahrenheit"){
        result = kelvinToFahr(value);
    }else if(temp == tempConvert){
        result = value;
    }
    function deg(temp){
        if(temp == "celcius"){
            return "&deg; C";
        }else if(temp == "fahrenheit"){
            return "&deg; F";
        }else if(temp == "kelvin"){
            return "&deg; K";
        }
    }
document.getElementById("from").innerHTML = value
document.getElementById("deg1").innerHTML = deg(temp)
document.getElementById("deg2").innerHTML = deg(tempConvert) 
document.getElementById("result").innerHTML = result
}
