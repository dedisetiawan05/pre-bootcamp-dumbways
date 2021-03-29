function isPrimeNumber() {
    let isPrime = false;
    let number = document.getElementById("number").value
    if (number == 1) {
        isPrime = false;
    } else if (number == 2) {
       isPrime = true;
    } else {
        for (var i = 2; i < number; i++) {
            if (number % i == 0) {
                isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
    }

    if (isPrime) {
            result = "bilangan Prima";
            
        } else {
            result = "Bukan bilangan Prima";
        }
    document.getElementById("result").innerHTML = `<hr>Nomor ${number} Adalah ${result}`
}  