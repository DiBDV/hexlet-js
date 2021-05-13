// @ts-check

import { length, toUpperCase } from './strings.js';

const bigLettersCount = (str) => {
  // BEGIN (write your solution here)
  
  let upperCase = 0;
  for (let counter = 0; counter < length(str); counter += 1) {
    if (toUpperCase(str[counter]) === str[counter]) {
      upperCase += 1;
    }
  }
  return upperCase;
  
  // END
};

const compare = (first, second) => {
  const firstCount = bigLettersCount(first);
  const secondCount = bigLettersCount(second);

  // BEGIN (write your solution here)
  if (firstCount > secondCount) {
    return 1;
  }
  if (secondCount > firstCount) {
    return -1;
  }
  return 0;

  // END
};

export const greaterThan = (first, second) => (
  compare(first, second) === 1);

export const lessThan = (first, second) => (
  compare(first, second) === -1);

export const isEqual = (first, second) => (
  compare(first, second) === 0);
