// Function to check if a number is perfect
function isPerfectNumber(num) {
    let sum = 0;

    // Find divisors and sum them
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    // Check if sum of divisors equals the number
    return sum === num;
}

// Example usage
let number = 28;

if (isPerfectNumber(number)) {
    console.log(number + " is a perfect number.");
} else {
    console.log(number + " is not a perfect number.");
}