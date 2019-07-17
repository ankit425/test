// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

// let num = 600851475143;
// let currentDivisor = 2;
// let maxDivisor = 0;
// while (num !== 1) {
//   if (num % currentDivisor) currentDivisor++;
//   else {
//     console.log(num, currentDivisor);
//     maxDivisor = currentDivisor;
//     num = num / currentDivisor;
//   }
// }

// console.log(maxDivisor);

let num = 600851475143;

function getFactors(num) {
  const factors = [];
  let end = Math.ceil(Math.sqrt(num));
  for (let i = 2; i <= end; i++) {
    if (num % i === 0) {
      factors.push(i);
    }
  }
  return factors;
}

function isPrime(num) {
  const factors = getFactors(num);
  return factors.length === 0;
}

const numFactors = getFactors(num);

let largest = 1;
for (let factor of numFactors) {
  if (isPrime(factor) && factor > largest) largest = factor;
}

console.log(largest);
