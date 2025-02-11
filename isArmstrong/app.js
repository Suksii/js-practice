const isArmstrong = (num) => {
  const numArray = num.toString().split("").map(Number);
  //   return (
  //     numArray.reduce(
  //       (prev, curr) => prev + Math.pow(curr, numArray.length),
  //       0
  //     ) === num
  //   );
  let sum = 0;
  for (let i = 0; i < numArray.length; i++) {
    sum += Math.pow(numArray[i], numArray.length);
  }
  return sum === num;
};

console.log(isArmstrong(153));
console.log(isArmstrong(9474));
console.log(isArmstrong(370));
