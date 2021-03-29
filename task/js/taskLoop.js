function sequence(){

    let firstNumber = parseInt(document.getElementById("firstNumber").value);
    let limit = firstNumber + 15;
    function normalSequence(firstNumber) {
        let normal = [];
        
        while (firstNumber <= limit) {
            normal.push(firstNumber);
            firstNumber++;
        }
        return normal;
    }
    let resultOne = normalSequence(firstNumber);
    console.log(resultOne);
    console.log(limit);
    function quadratSequence(firstNumber){
        let arrayQuadrat = [];
        while (firstNumber <= limit) {
            let quadrat = firstNumber * firstNumber;
            arrayQuadrat.push(quadrat);
            firstNumber++;
        }
        return arrayQuadrat;
    }
    let resultTwo = quadratSequence(firstNumber);

    function multypleSequence(firstNumber){
        let multyple = [];
        let start = 1;
        while (start <= 20) {
        firstNumber = firstNumber + 3;
        multyple.push(firstNumber);
        start++;
        
        }
        return multyple;
    }
    let resultThree = multypleSequence(firstNumber);
    console.log(resultThree);
    console.log(firstNumber);

    document.getElementById("resultOne").innerHTML = `<hr>Normal Sequence <br> ${resultOne}`
    document.getElementById("resultTwo").innerHTML = `Quadrat Sequence <br> ${resultTwo}`
    document.getElementById("resultThree").innerHTML = `Multyple Sequence <br> ${resultThree}`
}