function salary(){
    let name = document.getElementById("name").value;
    let grade = document.getElementById("grade").value;
    let work = parseInt(document.getElementById("work").value);
    let salary;
    let salaryPerDay;
    let salaryPerMonth;
    let salaryTotal;
    let salaryOvertime;
    let overtime;
        //salary Per Jam
        if (grade == "a" || grade == "A") {
            salary = 1000;
        } else if (grade == "b" || grade == "B") {
            salary = 2000;
        } else if (grade == "c" || grade == "C") {
            salary = 3000;
        }else if (grade == "d" || grade == "d") {
            salary = 4000;
        } else {
            salary = 0;
        }
        //salary overtime
        if (work * 30 > 200) {
            overtime = (work * 30) - 200;
        } else {
            overtime = 0;
        }
        salaryPerDay = salary * work;
        salaryPerMonth = salary * work * 30;
        salaryOvertime = overtime * salary;
        salaryTotal = salaryPerDay + salaryPerMonth + salaryOvertime;
    
        console.log(`Nama : Bapak ${name}`);
        console.log(`grade : ${grade.toUpperCase()}`);
        console.log(`Waktu Kerja Per Hari : ${work}`);
        console.log(`Gaji Perhari : ${salaryPerDay}`);
        console.log(`Gaji Perbulan : ${salaryPerMonth}`);
        console.log(`Gaji Lembur : ${salaryOvertime}`);
        console.log(`Total Gaji : ${salaryTotal}`);
        document.getElementById("result").innerHTML = `<hr>
                <br> Nama : Bapak ${name}
                <br>Golongan : ${grade}
                <br>Kerja Per Hari : ${work}
                <br>Gaji Perhari : ${salaryPerDay}
                <br>Gaji Perbulan : ${salaryPerMonth}
                <br>Gaji Lembur : ${salaryOvertime}
                <br>Total Gaji : ${salaryTotal}`
}