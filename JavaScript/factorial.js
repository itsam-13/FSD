function factorial(n) {
    if (n < 0) return "Factorial not defined for negative numbers";
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

let num = parseInt(prompt("Enter a number: "));
console.log(`Factorial of ${num} is ${factorial(num)}`);
