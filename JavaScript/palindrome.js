// Function to check if a number is palindrome
function isPalindrome(num) {
    let original = num;
    let reverse = 0;

    while (num > 0) {
        let digit = num % 10;
        reverse = reverse * 10 + digit;
        num = Math.floor(num / 10);
    }

    return original === reverse;
}


let number = 121;

if (isPalindrome(number)) {
    console.log(number + " is a Palindrome number");
} else {
    console.log(number + " is NOT a Palindrome number");
}
