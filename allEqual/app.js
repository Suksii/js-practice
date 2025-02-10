const allEqual = (arr) => {
  if (arr.length < 2) {
    return "Array must have at least 2 elements";
  }
  return new Set([...arr]).size === 1;
};

console.log(allEqual([5, 5, 5, 5, 5]));
console.log(allEqual([5, 1, 3, 1, 1]));
console.log(allEqual([]));
console.log(allEqual([31]));
