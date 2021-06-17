const https = require("https");
const start = Date.now();
const crypto = require("crypto");
const fs = require("fs");

function doRequest() {
  https
    .request("https://www.google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        ``;
        console.log('doRequest', Date.now() - start);
      });
    })
    .end();
}

function doHash() {
  crypto.pbkdf2("a", "b", 100000, 512, "sha512", () => {
    console.log("%c Hash:", "background: red", Date.now() - start);
  });
}

doRequest(); //http request to google // 1

fs.readFile('multitask.js', 'utf8', () => { // 2
    console.log('readfile', Date.now() - start )
})
// 3

doHash()
doHash()
doHash()
doHash()
