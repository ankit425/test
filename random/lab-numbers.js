/*

Lab Numbers

A lab number is a number such that the square of any of its prime divisors is still one of its divisors.

For example:
Input: 8
Output: true (2 is a prime divisor of 8, and 2x2=4 is also a divisor of 8)

Input: 50
Output: true (5 is a prime divisor of 50, and 5x5=25 is also a divisor of 50)

Write a program to check if the user input is a Lab number or not.

Bonus: Print all the Lab numbers in a given range.

*/


const isPrime = n => {
  if (n == 1) return false;
   
  for (let i = 2; i <= Math.ceil(n / 2); i++) {
        if (n % i == 0) return false;
    }
    
    return true;
};

let divisor;

const checkLabNumber = number => {
    for (let i = 2; i <= Math.ceil(number / 2); i++) {
        if (isPrime(i) && (number % i === 0 && number % (i * i) === 0)) {
            divisor = i;
            return true;
        }
    }
    
    return false;
}; 

const nums = [98, 50, 20, 31, 45, 66];

nums.forEach(num => {

    console.log(`Number: ${num}`);
    
    console.log(`is Lab Number? ${checkLabNumber(num)}`);
    
    console.log(`Prime Divisor: ${checkLabNumber(num) ? divisor : null} \n`);
    
});

const labNumbers = [];

for (let i = 1; i <= 100; i++) {
    if (checkLabNumber(i))
        labNumbers.push(i);
}

console.log(`Lab numbers below 100 are: `);
console.log(labNumbers);