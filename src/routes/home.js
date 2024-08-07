import { registerHTTP } from "../lib/registerHTTP.js";
import { resolve } from "path";

export default (router, gateway) => {
  registerHTTP("get", "/", router, (req, res) => {
    let fp = resolve("./src/www/index.html");
    res.sendFile(fp);
  });
};
