const isPalindrome = (str) => {
  let str1 = [];
  str = str.replaceAll(" ", "").split("");
  for (let i = str.length - 1; i >= 0; i--) {
    str1.push(str[i]);
  }
  str = str.join("");
  str1 = str1.join("");
  if (str1 == str) {
    return true;
  } else return false;
};

console.log(isPalindrome("ana voli milovana"));
