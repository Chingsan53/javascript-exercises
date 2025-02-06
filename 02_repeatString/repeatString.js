const repeatString = function (word, value) {
  let string = "";
  if (value < 0) return "ERROR";
  for (let rp = 0; rp < value; rp++) string += word;
  return string;
};

// Do not edit below this line
module.exports = repeatString;
