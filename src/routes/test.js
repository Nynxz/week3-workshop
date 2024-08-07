import { registerHTTP } from "../lib/registerHTTP.js";
import { resolve } from "path";

export default (router, gateway) => {
  registerHTTP("get", "/test", router, (req, res) => {
    let fp = resolve("./src/www/test.html");
    res.sendFile(fp);
  });

  registerHTTP("post", "/api/login", router, (req, res) => {
    console.log("User Is Logging In!");
    res.send("Success!!!");
  });
};
