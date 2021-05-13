// my solution
/* const firstCapitalLetter = (str) => {
  return str.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
*/



// @ts-check

import { length, toUpperCase } from './strings.js';

// BEGIN
export default (str) => {
  let result = '';
  for (let i = 0; i < length(str); i += 1) {
    const shouldBeBig = (i === 0 || str[i - 1] === ' ');
    result += shouldBeBig ? toUpperCase(str[i]) : str[i];
  }

  return result;
};
// END


/*
The above code uses RegEx to transform the letters. The RegEx might look confusing, so let me explain what happens:

^ - matches the beginning of the string.
\w - matches any word character.
{1} - takes only the first character.
Thus, ^\w{1} matches the first letter of the word.
| - works like the boolean OR. It matches the expression after and before the |.
\s+ - matches any amount of whitespace between the words (for example spaces, tabs, or line breaks).
*/
