function vowelsCheck() {
    let aplhabet = document.getElementById("alphabet").value;
    let isVocal;
    switch (aplhabet) {
        case "a":
        case "A":
        case "e":
        case "E":
        case "i":
        case "I":
        case "o":
        case "O":
        case "u":
        case "U":
            isVocal = "Huruf Vokal";
            break;
        default:
            isVocal = "Bukan Huruf Vocal";
            break;
    }
    document.getElementById("result").innerHTML = `<hr>Result<br>Huruf ${aplhabet} adalah ${isVocal}`
}