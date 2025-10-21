let numbers = [12, 56, 23, 89, 5, 90];
let max = numbers[0];

for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}

console.log("Largest number:", max);
