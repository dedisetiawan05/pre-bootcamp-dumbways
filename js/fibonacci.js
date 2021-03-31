function fibonacciSequence() {
    let limit = parseInt(document.getElementById("limit").value);
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
    document.getElementById("result").innerHTML = `<hr>Result<br>${fibonacci}`
}