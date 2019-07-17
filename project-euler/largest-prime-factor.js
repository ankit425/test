// The prime factors of 13195 are 5, 7, 13 and 29.

// What is the largest prime factor of the number 600851475143 ?

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
  // prime numbers have no factors other than 1 and themselves
  return factors.length === 0;
}

const numFactors = getFactors(num);

let largest = 1;
for (let factor of numFactors) {
  if (isPrime(factor) && factor > largest) largest = factor;
}

console.log(largest);
