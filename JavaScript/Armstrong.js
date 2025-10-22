// Check if num is an Armstrong number
function isArmstrong(num) {
    if (num < 0) return false;
    const digits = String(num).length;
    let sum = 0;
    let n = num;
    while (n > 0) {
        const d = n % 10;
        sum += Math.pow(d, digits);
        n = Math.floor(n / 10);
    }
    return sum === num;
}


console.log(isArmstrong(153)); 
console.log(isArmstrong(9474)); 
console.log(isArmstrong(123)); 
