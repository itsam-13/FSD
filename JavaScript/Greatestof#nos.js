let a = 10, b = 25, c = 15;

let greatest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);

console.log("The greatest number is " + greatest);
