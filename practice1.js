const request = require("request");

const vowelCheck = input => {
  let vowels = "aeiou";
  return vowels.includes(input[0]);
};

request(
  "https://jsonplaceholder.typicode.com/posts",
  { json: true },
  (err, res, body) => {
    if (err) {
      return console.log(err);
    }
    let result = {};

    body.forEach(({ userId, title }) => {
      if (vowelCheck(title)) {
        if (!result[userId]) {
          result[userId] = [];
        }
        result[userId].push(title);
      }

      //   if (!result[userId] && vowels.includes(title[0])) {
      //   } else if (){
      //     result[userId].push();
      //   }
      // keys are userIds, values list of titles post.title only if title starts with vowel
      //   console.log(post.userId);
      // contains 5 vowels in the title
      // regular expressions - does the title contain the letters abc in that order
      // regular expressions - does the title contain at least 2 vowels next to each other
      //
    });

    console.log(body);
  }
);
