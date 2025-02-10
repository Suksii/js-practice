const reverseNumber = (num) => {
  const isNegative = num < 0;
  let absoluteValue = Math.abs(num);
  let convertToArray = absoluteValue.toString().split("");
    let reversedArray = convertToArray.reverse();
    let convertToNumber = Number(reversedArray.join(""));
    return isNegative ? -convertToNumber : convertToNumber;
};

console.log(reverseNumber(213215));
