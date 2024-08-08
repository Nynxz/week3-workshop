import { findUser } from "../db/dummyusers.js";
import { registerHTTP } from "../lib/registerHTTP.js";
import { resolve } from "path";

export default (router, gateway) => {
  registerHTTP("get", "/test", router, (req, res) => {
    let fp = resolve("./src/www/test.html");
    res.sendFile(fp);
  });

  registerHTTP("post", "/api/login", router, (req, res) => {
    console.log(req.body);
    const user = findUser(req.body.email, req.body.password);
    if (user) {
      res.send(JSON.stringify({ valid: true }));
    } else {
      res.send(JSON.stringify({ valid: false }));
    }
  });
};
