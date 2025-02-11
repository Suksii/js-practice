const missingNumber = (arr) => {
  const numArray = [];

  //   for (let i = 1; i < arr.length + 1; i++) {
  //     numArray.push(i);
  //   }
  //   for (let i = 0; i < numArray.length; i++) {
  //     if (numArray[i] !== arr[i]) {
  //       return numArray[i];
  //     }
  //   }
  //   return "There is no missing number";

  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;
  const actualSum = arr.reduce((prev, curr) => prev + curr, 0);

  const missingNumber = expectedSum - actualSum;

  return missingNumber;
};
console.log(missingNumber([1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13]));
