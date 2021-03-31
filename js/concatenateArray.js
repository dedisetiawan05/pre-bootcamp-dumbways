function concatenateArray() {
    let array1 = parseInt(document.getElementById("array1").value).toString().split("");
    let array2 = parseInt(document.getElementById("array2").value).toString().split("");
    for (let i = 0; i <= array1.length - 1; i++){
        for (let a = 0; a <= array2.length - 1; a++){
            if (array1[i] == array2[a])
            {
                array1[i] = "q";
            }
        }
    }
    let finalArray = array1.concat(array2).sort();
    let limitPop = finalArray.toString().split("q").length-1;
    console.log(`Ada ${limitPop} Data array yang sama`);
    
    for (let b = 0; b <= finalArray.length - 1; b++){
            if (finalArray[b] == "q")
            {
                for (let n = 1; n <= limitPop; n++){
                    finalArray.pop();
                }
            }
        }
    document.getElementById("result").innerHTML = `<hr>Result<br> ${finalArray}`;

}