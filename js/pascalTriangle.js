//dapet rumus dari CPPisMe
function pascalTriangle(){
    let lines = parseInt(document.getElementById("row").value);
    let pattern = [];
    for(let row=0;row < lines; row++){
    //biar sedikit rapih
      for(let a = lines; a > row; a--){
            pattern.push("&nbsp;");
        }
        let value = 1;
        for(let col = 0;col <= row;col++){
            pattern.push(`${value} &nbsp; `);
            //penjelasannya
            console.log(`asal value : ${value}`);
            console.log(`nilai yang akan muncul di baris ke- ${row} kolom ke-${col} pada html : ${value}`);
            console.log(`value selanjutnya = asal value : ${value} x ( baris ${row} - kolom ${col}) / (kolom ${col} + 1) = ${value * (row-col)/(col+1)}`);
            //rumusnya
            //value * (baris-kolom) / (kolom+1)
            value = value * (row-col)/(col+1);
            console.log("=======================");
        }
        pattern.push("<br>");
    }
    document.getElementById("result").innerHTML =`<hr> Result <br>${pattern.join("")}`
}