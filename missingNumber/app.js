const missingNumber = (arr) => {
  const numArray = [];

  for (let i = 1; i < arr.length + 1; i++) {
    numArray.push(i);
  }
  let br = 0;
  for (let i = 0; i < numArray.length; i++) {
    if (numArray[i] !== arr[i]) return numArray[i];
  }
  return "There is no missing number";
};

console.log(missingNumber([1, 3, 4, 5, 6, 7, 8]));
