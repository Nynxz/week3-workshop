const express = require("express");
const config = require("./config.js");

module.exports = {
  Gateway: class {
    app;
    http;
    config;
    routes;

    constructor() {
      this.app = express();
      this.http = require("http").Server(this.app);
      this.app.use(express.static(__dirname + "/www"));
      this.config = config.config();
      this._loadRoutes();
    }

    start() {
      this.app.listen(this.config.PORT, () => {
        console.log(`Gateway listening on port ${this.config.PORT}`);
      });
    }

    _loadRoutes() {
      this._loadRoute("/", "./routes/home.js");
      this._loadRoute("/test", "./routes/test.js");
      this._loadRoute("/account", "./routes/account.js");
    }

    _loadRoute(route, routefile) {
      this.app.get(route, (req, res) => {
        require(routefile).route(this.app, req, res);
      });
    }
  },
};
