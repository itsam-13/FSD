let n = 5; // number of rows

for (let i = n; i > 0; i--) {
    let row = "";
    for (let j = 0; j < i; j++) {
        row += "* ";
    }
    console.log(row);
}
