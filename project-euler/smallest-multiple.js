// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const isDivisible = (num, divisors) => {
  let flag = true;
  for (let i of divisors) {
    if (num % i !== 0) return false;
  }
  return flag;
};

let flag = true;
let num = 0;
const checks = [11, 13, 14, 16, 17, 18, 19, 20];

for (let i = 2520; ; i++) {
  if (isDivisible(i, checks)) {
    num = i;
    break;
  }
}

console.log(num);
