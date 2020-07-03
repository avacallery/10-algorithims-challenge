// Complete the function by returning a RegExp object, re, that matches any string s that begins and ends with the same vowel.

// ^ matches beginning of input
// $ matches end of input
// (.) captures any character.
// \1 is a backreference to the first capture group in our expression

function regexVar() {
  /*
   * Declare a RegExp object variable named 're'
   * It must match a string that starts and ends with the same vowel (i.e., {a, e, i, o, u})
   */

  const re = new RegExp(/^([aeiou]).+\1$/);
  /*
   * Do not remove the return statement
   */
  console.log(re.test('aeioua'));
  return re;
}

regexVar('aeioua');
