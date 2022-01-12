const request = require("request");

const json = {
  service_name: "Dinesh Chugtai",
  username: "dinesh",
  password: "abc",
};

request.post(
  {
    url: "http://localhost:3004/services",
    body: json,
    json: true,
  },
  function (error, response, body) {
    console.log(body);
  }
);
