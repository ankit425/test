/*

Gapful Numbers

A gapful number is a number of at least 3 digits that is divisible by the number formed by the first and last digit of the original number.

For Example:
Input: 192
Output: true (192 is gapful because it is divisible 12)

Input: 583
Output: true (583 is gapful because it is divisible by 53)

Input: 210
Output: false (210 is not gapful because it is not divisible by 20)

Write a program to check if the user input is a gapful number or not.

Bonus: Print all the gapful numbers in a given range.

*/

const checkGapful = num => {
    // min 3 digits
    if (num < 100) return false;
    
    const stringRep = String(num);
    
    // extract first and last digit
    const checkNum = Number(stringRep[0] + stringRep[stringRep.length - 1]);
    
    return num % checkNum == 0;
};

const num = [192, 583, 210];

num.forEach(n => {
    console.log(`Number: ${n}
Is Gapful? ${checkGapful(n)}
`);
});

console.log(`Gapful Numbers between 100 and 1000 are: 
`);
let gapfulNum = [];
for (let i = 100; i < 1000; i++) {
    if (checkGapful(i))
        gapfulNum = gapfulNum.concat(i);
}

console.log(gapfulNum);
