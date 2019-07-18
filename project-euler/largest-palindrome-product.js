// A palindromic number reads the same both ways.The largest palindrome made from the product of two 2 - digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3 - digit numbers.

const isPalindrome = num => {
  const reversed = String(num)
    .split("")
    .reverse()
    .join("");

  return num == reversed;
};

const checkProduct = () => {
  let max = 0;
  for (let i = 999; i >= 100; i--) {
    for (let j = 999; j >= 100; j--) {
      let product = i * j;
      if (isPalindrome(product) && product > max) {
        max = product;
      }
    }
  }
  return max;
};

console.log(checkProduct());
