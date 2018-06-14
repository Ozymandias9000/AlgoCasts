// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

maxChar = str => {
  charMap = {};
  max = 0;
  maxChar = ''
  str.split('').forEach((char) => {
    charMap[char] = charMap[char] + 1 || 1;
    if (charMap[char] > max) {
      max++;
      maxChar = char;
    }
  })
  return maxChar;
}


// function maxChar(str) {
//   let charMap = {};
//   let max = 0;
//   let maxChar = '';

//   for (let char of str) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }

//   for (let char in charMap) {
//     if (charMap[char] > max) {
//       max ++;
//       maxChar = char;
//     }
//   }
//   return maxChar;
// }

module.exports = maxChar;
