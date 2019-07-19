// By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

// What is the 10 001st prime number ?

const primes = [];

const isPrime = num => {
  if (num == 1) return false;
  for (let i = 2; i <= Math.ceil(num / 2); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

let i = 2;
while (primes.length != 10001) {
  if (isPrime(i)) primes.push(i);

  i++;
}

console.log(primes[primes.length - 1]);
