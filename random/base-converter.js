/*
Base Converter

In mathematics, a base is the number of different digits or combination of digits and letters that a system of counting uses to represent numbers. 
For example, the most common base used today is the decimal system. Because "dec" means 10, it uses the 10 digits from 0 to 9.
A decimal number has base 10, a binary has base 2, an octal has base 8, etc.

Given a non-negative integer & a base as input, create a program to convert the given decimal into the corresponding base.

Some Examples:
Input: 25 7
Output: 34

Input: 368 4
Output: 11300

Input: 78 3
Output: 2220

*/


const numbers = [25, 368, 78];
const bases = [7, 4, 3];

const convertBase = (num, base) => {
    let converted = '';
    while (num > 0) {
        let rem = num % base;
        converted = rem + converted;
        num = parseInt(num / base);
    }
    
    return converted;
};


for (let i = 0; i < 3; i++) {
    console.log(`Input: ${numbers[i]} ${bases[i]}`);
    console.log(`Output: ${convertBase(numbers[i], bases[i])}`);
}

