const dict = {
  "}": "{",
  ")": "(",
  "]": "["
};

const balancedPairs = str => {
  let stack = [];
  let openers = Object.values(dict);
  let closers = Object.keys(dict);
  let lastOpen;

  for (let i = 0; i < str.length; i++) {
    let currentValue = str[i];
    lastOpen = stack[stack.length - 1];
    if (openers.includes(currentValue)) {
      stack.push(currentValue);
    }

    if (closers.includes(currentValue)) {
      if (stack.length === 0) {
        return false;
      }
      if (lastOpen !== dict[currentValue]) {
        return false;
      }
      stack.pop();
    }
  }

  return stack.length === 0;
};

/// function does the hard work and returns basically a continue or
// a false

console.log(balancedPairs("(({}))")); //true
console.log(balancedPairs("(()))")); //false
console.log(balancedPairs(")")); //false
console.log(balancedPairs("(")); //false
console.log(balancedPairs("(")); //false
console.log(balancedPairs("{}")); //true
console.log(balancedPairs("(({)})")); //false
