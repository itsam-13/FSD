function fibonacci(n) {
    if (n <= 1) {
        return n; 
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

let n = 6;
console.log("Fibonacci number at position", n, "is", fibonacci(n));
