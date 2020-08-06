// You are given a string containing characters A and B only.
// Your task is to change it into a string such that there are no matching adjacent characters.
// To do this, you are allowed to delete zero or more characters in the string.
// Your task is to find the minimum number of required deletions.

// find length of consecutive characters to find number of deletions
// find consecutive duplicate characters in string

// SOLUTION #1

function alternatingCharacters(string) {
  let duplicateCounter = 0;

  string.forEach((char, index) => {
    if (char === string[index + 1]) {
      duplicateCounter++;
    }
  });

  // for (let i = 0; i < string.length - 1; i++) {
  //   if (string[i] === string[i + 1]) {
  //     duplicateCounter++;
  //   }
  // }
  return duplicateCounter;
}

console.log(alternatingCharacters('AAABBB'));

// SOLUTION #2

function alternatingCharacters(string) {
  let currentCharacter = '';
  let nextCharacter = '';
  let duplicateCounter = 0;

  for (let i = 0; i < string.length - 1; i++) {
    currentCharacter = string[i];
    nextCharacter = string[i + 1];

    if (currentCharacter === nextCharacter) {
      duplicateCounter++;
    }
  }
  return duplicateCounter;
}

// console.log(alternatingCharacters('AAABBB'));
