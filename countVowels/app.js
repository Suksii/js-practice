// const countVowels = (str) => {
//   const vowels = "aeiou";
//   const vowelsArray = vowels.split("");
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     for (let j = 0; j < vowelsArray.length; j++) {
//       if (str[i].toLowerCase() === vowelsArray[j]) {
//         count++;
//       }
//     }
//   }
//   return count;
// };

const countVowels = (str) => {
  const vowels = "aeiou";
  const substr = str
    .toLowerCase()
    .split("")
    .filter((s) => vowels.includes(s));
  return substr.length;
};

console.log(countVowels("Hello Kitty"));
