/* Решение dibdv */

// @ts-check

// BEGIN (write your solution here)

const reverse = (str) => {
  let result = '';
  let lastChar = str.length - 1;

  while (lastChar >= 0) {
    result += str.charAt(lastChar);
    lastChar -= 1;
  }
  return result;
};

// END

export default reverse;
===========================

/* Решение учителя */

// @ts-check

// BEGIN
// Visualize Execution: https://goo.gl/8pNRk2
const reverse = (str) => {
  let i = str.length - 1;
  let result = '';

  while (i >= 0) {
    result += str[i];
    i -= 1;
  }

  return result;
};
// END

export default reverse;