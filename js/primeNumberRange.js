function isPrime(number){
    let count = 2;
    while(count < (number / 2)+1){
        if(number % count !== 0){
          count++;
          continue;
       }
       return false;
    }
    return true;
 }
 function primeNumberRange(){
    // let count = 0;
    let from = parseInt(document.getElementById("from").value);
    let to = parseInt(document.getElementById("to").value); 
    let primeNumber = [];
    for(let number = from; number <= to; number++){
       if(isPrime(number)){
        if(number != 1){
            primeNumber.push(number);
        }
       }
    }
    if(primeNumber.length != 0){
        document.getElementById("result").innerHTML = `<hr>Result<br>Bilangan Prima dari Angka ${from} sampai ${to} Adalah ${primeNumber}`
    }else{
        document.getElementById("result").innerHTML = `<hr>Result<br>Tidak Ada Bilangan Prima dari Angka ${from} sampai ${to} `
    }
 }