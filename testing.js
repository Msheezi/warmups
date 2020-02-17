let array = [1, 2, 3, 4, 5];

const test = arr => {
  let result = [];
  arr.forEach(num => {
    result.push(num * 3);
  });
  return result;
};

console.log(test(array));
