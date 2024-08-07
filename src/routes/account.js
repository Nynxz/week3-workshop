import { registerHTTP } from "../lib/registerHTTP.js";
import { resolve } from "path";

export default (router, gateway) => {
  registerHTTP("get", "/account", router, (req, res) => {
    let fp = resolve("./src/www/account-page.html");
    res.sendFile(fp);
  });
};
