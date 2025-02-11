const longestWord = (str) => {
  const words = str.replace(/[^a-zA-Z0-9\s]/g, "").split(" ");
  if (words.join("").length === 0) return "No words";
  const wordLengths = words.map((word) => word.length);
  const maxLength = Math.max(...wordLengths);
  const longestWord = words.filter((word) => word.length === maxLength);
  return longestWord;
};

console.log(longestWord("My name is Suco..."));
console.log(longestWord(">>>>>!!"));
console.log(longestWord(""));
console.log(longestWord("Yoday is beautiful day........"));
