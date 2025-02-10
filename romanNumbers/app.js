const romanNumbers = (num) => {
  const romanNums = [
    { value: 1000, roman: "M" },
    { value: 900, roman: "CM" },
    { value: 500, roman: "D" },
    { value: 100, roman: "C" },
    { value: 90, roman: "XC" },
    { value: 50, roman: "L" },
    { value: 40, roman: "XL" },
    { value: 10, roman: "X" },
    { value: 9, roman: "IX" },
    { value: 5, roman: "V" },
    { value: 4, roman: "IV" },
    { value: 1, roman: "I" },
  ];
  let result = "";

  if (num < 0) {
    return "Number must be positive";
  }
  for (const { value, roman } of romanNums) {
    while (num >= value) {
      result += roman;
      num -= value;
    }
  }
  return result;
};

console.log(romanNumbers(55));
console.log(romanNumbers(525));
console.log(romanNumbers(1999));
console.log(romanNumbers(-1999));
