let nums = [10, 15, 22, 33, 42, 55];
let sum = 0;

for (let n of nums) {
    if (n % 2 === 0) {
        sum += n;
    }
}

console.log("Sum of even numbers:", sum);
