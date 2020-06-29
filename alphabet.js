// The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.

function getLetter(s) {
  let letter;

  switch (true) {
    case 'aeiou'.includes(s[0]):
      letter = 'A';
      break;
    case 'bcdfg'.includes(s[0]):
      letter = 'B';
      break;
    case 'hjklm'.includes(s[0]):
      letter = 'C';
      break;
    case 'npqrstvwxyz'.includes(s[0]):
      letter = 'D';
      break;
    default:
      text = 'Letter not found';
  }

  return letter;
}

console.log(getLetter('aei'));
