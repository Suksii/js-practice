const isArmstrong = (num) => {
  const numArray = num.toString().split("").map(Number);
  return (
    numArray.reduce(
      (prev, curr) => prev + Math.pow(curr, numArray.length),
      0
    ) === num
  );
};

console.log(isArmstrong(153));
console.log(isArmstrong(407));
console.log(isArmstrong(370));
