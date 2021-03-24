function isPrimeNumber(angka) {
    if (angka == 1) {
        console.log(`Angka ${angka} Bukan bilangan Prima`);
    } else if (angka == 2) {
        console.log(`Angka ${angka} Adalah bilangan Prima`);
    } else {
        for (var i = 2; i < angka; i++) {
            if (angka % i == 0) {
                var isPrime = false;
                break;
            } else {
                isPrime = true;
            }
        }
        if (isPrime == true) {
            console.log(`Angka ${angka} Adalah bilangan Prima`);
        } else {
            console.log(`Angka ${angka} Bukan bilangan Prima`);
        }
    }    
}
isPrimeNumber(15);