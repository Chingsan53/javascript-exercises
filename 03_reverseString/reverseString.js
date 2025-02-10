const reverseString = function (words) {
  let newWord = "";
  for (let i = words.length - 1; i >= 0; i--) {
    newWord += words[i];
  }

  return newWord;
};

// Do not edit below this line
module.exports = reverseString;
