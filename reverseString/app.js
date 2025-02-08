const reverseString = (str) => {
  let str1 = [];
  str = str.split("");
  for (let i = str.length - 1; i >= 0; i--) {
    str1.push(str[i]);
  }
  return str1.join("");
};

console.log(reverseString("Hello World"));
