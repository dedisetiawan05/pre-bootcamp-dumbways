function fibonacciSequence() {
    let limit = parseInt(document.getElementById("limit").value);
    let from = parseInt(document.getElementById("from").value);
    let fibonacci = [];
    let number;
    for (let i = 0; i <= limit; i++){
        if (i < 2) {
            number = i;
        } else {
            number = fibonacci[i - 1] + fibonacci[i - 2];
        }
        fibonacci.push(number);
    }

    const newfibonacci = fibonacci.filter(function (numbers) {
        return  numbers > from;
    });
    document.getElementById("from").disabled = false
    document.getElementById("buttonFilter").disabled = false
    document.getElementById("result").innerHTML = `<div class='alert'><strong>hasil dari 0 </strong><br>${fibonacci}<div>`
    document.getElementById("result2").innerHTML = `<div class='alert'><strong>Hasil diatas ${from} </strong><br>${newfibonacci}<div>`
}