<!-- reguler function -->
function hello() {
    let name = document.getElementById("name").value;
    let hope = document.getElementById("hope").value;
    <!-- arrow function-->
    const printHope = (hope) => {
        return `Saya Ingin Menjadi ${hope}`;
        }
        document.getElementById("result").innerHTML = `<hr><p> Hello Saya ${name} , ${printHope(hope)}</p>`
}
