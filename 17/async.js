const https = require("https");
const start = Date.now();

function doRequest() {
  https
    .request("https://www.google.com", res => {
      res.on("data", () => {});
      res.on("end", () => {
        console.log(Date.now() - start);
      });
    })
    .end();
}
doRequest()
doRequest()
doRequest()
doRequest()

// this requests is run simultaneously
// libuv -- do the request but it delivers to OS to do this requests
// So its no block under the event loop

