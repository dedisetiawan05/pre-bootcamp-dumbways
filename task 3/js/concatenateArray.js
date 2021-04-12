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
    //sortir
    let finalArray = array1.concat(array2).sort();
    //jumlah hapus data array
    let limitPop = finalArray.toString().split("q").length - 1;
    console.log(`Ada ${limitPop} Data array yang sama`);
    //hapus data
    finalArray.splice(finalArray.length - limitPop, limitPop);
    //for each
    finalArray.forEach(number => console.log(number));
    document.getElementById("result").innerHTML = `<div class='alert'><strong>Result</strong><br> ${finalArray}</div>`;
    //reduce
    const sumArray = finalArray.reduce((accumulator, currentValue) => accumulator + currentValue);
    document.getElementById("result2").innerHTML = `<div class='alert'><strong>Sum Result</strong><br> ${sumArray}</div>`;

}