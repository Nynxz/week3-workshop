const express = require("express");
const config = require("./config.js");

module.exports = {
  Gateway: class {
    app;
    config;
    routes;

    constructor() {
      this.app = express();
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
      this._loadRoute("/", "./routes/home.jsx");
      this._loadRoute("/test", "./routes/test.jsx");
    }

    _loadRoute(route, routefile) {
      this.app.get(route, (req, res) => {
        res.send(require(routefile).route(this.app, req, res));
      });
    }
  },
};
