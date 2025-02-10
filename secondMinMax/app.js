const secondMinMax = (arr) => {
  if (arr.length < 2) {
    return "Array must have at least two different numbers";
  }

  const sortedArray = arr.sort((a, b) => a - b);

  return { secondMin: sortedArray[1], secondMax: sortedArray[arr.length - 2] };
};

console.log(secondMinMax([6, 2, 1, 42, 12]));
