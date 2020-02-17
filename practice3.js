const request = require("request");

//fetch all links on a wikipedia page
// https://en.wikipedia.org/wiki/Computer_programming

request(
  "https://en.wikipedia.org/wiki/Computer_programming",
  (err, res, body) => {
    let links = [];
    let strToMatch = /<a href="\S*"\s/g;

    let matchArray = body.match(strToMatch);
    let result = matchArray.filter(link => {
      return link.includes("http");
    });
    // let result = matchArray.map(link => {

    //     if (link[0] !== "/") {
    //     console.log(link);
    //     return link.slice(9, -2);
    //   }
    // });
    console.log(result);
    // console.log(typeof body);
    // console.log(testcase);
  }
);
