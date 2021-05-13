const length = (str) => str.length;

const sumDigits = (num) => {
  const str = String(num);
  let result = 0;
  for (let i = 0; i < length(str); i += 1) {
    result += Number(str[i]);
  }

  return result;
};

const addDigits = (num) => {
  let result = num;
  while (result >= 10) {
    result = sumDigits(result);
  }

  return result;
};
console.log(addDigits(345));