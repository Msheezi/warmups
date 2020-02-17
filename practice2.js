//the input is a string, return the 3 most common 3 letter substring of that string, contiguous substring
//min length on the substring: at least 3 chars
// if there is a tie, print all the substrings that tie

const mostCommonSub = (input, targetLength) => {
  let subsResult = {};

  for (let i = 0; i < input.length - (targetLength - 1); i++) {
    let subs = input.slice(i, i + targetLength);

    if (!subsResult[subs]) {
      subsResult[subs] = 0;
    }

    subsResult[subs] += 1;
  }

  let result = [];
  let max = 0;
  Object.keys(subsResult).forEach(substr => {
    let count = subsResult[substr];

    if (result.length === 0) {
      result.push(substr);
      max = count;
      return;
    }
    if (count === max) {
      result.push(substr);
    }
    if (count > max) {
      max = count;
      result = [substr];
    }
  });

  console.log(result.join(" "));
};

mostCommonSub("abcabcdefdefghighighi", 4); //base
mostCommonSub("", 4); //empty string
mostCommonSub("abcabcdefdefghighighi", 1); // target value 1
mostCommonSub("a", 1); // str length 1
mostCommonSub("abcabcdefdefghighighi", 50); // target greater than length
mostCommonSub("abca?bcde*f98defghighighi", 3); //non alpha chars in str
mostCommonSub("aaaaaaaaaaaaaaaaaaaaa", 2); //all the same input
mostCommonSub({ hi: "aaaaaaaaaaaaaaaaaaaaa" }, 2); //input is not a string
