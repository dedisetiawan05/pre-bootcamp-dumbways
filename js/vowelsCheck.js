function vowelsCheck() {
    let aplhabet = document.getElementById("alphabet").value;
    let alphabetUppercase = aplhabet.toUpperCase();
    let isVocal = alphabetUppercase  == "A"
                || alphabetUppercase == "E"
                || alphabetUppercase == "I"
                || alphabetUppercase == "O"
                || alphabetUppercase == "U" ? "Huruf Vokal" : "Bukan Huruf Vocal";
    document.getElementById("result").innerHTML = `<hr>Result<br>Huruf ${aplhabet} adalah ${isVocal}`
}