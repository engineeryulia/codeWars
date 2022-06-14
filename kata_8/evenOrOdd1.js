//Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

const testData = [6, 54, 78, 3, 10, 2, 101, 985, 62, 0];

const testArr = (num) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      odd = odd + num[i];
    } else {
      even = even + num[i];
    }
  }
  return [odd, even];
};

const result = testArr(testData);
console.log(result);
