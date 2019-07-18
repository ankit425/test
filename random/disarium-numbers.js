/*


Disarium Numbers

A number is called a Disarium number if the sum of the powers of its digits equals the number itself. The digits are powered to their positions in the number.

For example:
Input: 135
Output: true
135 is a Disarium number because it equals to 1^1 + 3^2 + 5^3 (each digit powered to the position in the number).

Write a program to check if the user input is a Disarium number or not.

Bonus: Print all the Disarium numbers in a given range. 

*/


const isDisarium = num => {
   const stringRep = String(num);
   let processedNum = 0;
   for (let i = 0; i < stringRep.length; i++) {
      processedNum += Number(stringRep[i]) ** (i + 1);
  }
  
  if (processedNum === num)
      return true;
  return false;
};


console.log(`Number: ${135}
Is Disarium? ${isDisarium(135)}`);

const disariumNumbers = [];

for (let i = 1; i < 1000; i++) {
    if (isDisarium(i)) disariumNumbers.push(i);
}

console.log(`Diarium numbers below 1000:
${disariumNumbers}`);
