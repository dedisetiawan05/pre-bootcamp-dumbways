let data = [];
function addArray() {
    let addValue = document.getElementById("array").value;
    data = addValue.split("");
    console.table(data);
    document.getElementById("resultArray").innerHTML = `<hr>Result<br>${data}<hr>`;
    document.getElementById("delValue").disabled = false;
    document.getElementById("del").disabled = false;
}
function delArray() {
    let delValue = document.getElementById("delValue").value;
    for (let a = 0; a <= data.length - 1; a++){
        if (data[a] == delValue) {
            delete data[a];
        }
    }
    console.table(data);
    document.getElementById("resultDelArray").innerHTML = `<hr>Result After Delete<br>${data}<hr>`;
}