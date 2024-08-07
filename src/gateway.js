import express from "express";
import { config } from "./config.js";
import { readdirSync } from "fs";
import { join } from "path";
export class Gateway {
  app;
  config;
  routes;
  router;

  constructor() {
    this.app = express();
    this.router = express.Router();
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static("./src/www"));
    this.config = config();
  }

  loadRoutes() {
    this._loadRoutesFolder();
    this.app.use(this.router);
  }

  start() {
    this.app.listen(this.config.PORT, () => {
      console.log(`Gateway listening on port ${this.config.PORT}`);
    });
  }

  async _loadRoutesFolder() {
    const routesDir = "./src/routes";
    const routeFiles = readdirSync(routesDir).filter((file) =>
      file.endsWith(".js")
    );
    for (const file of routeFiles) {
      const registerRoutes = await import("./routes/" + file);
      const registerFunc = registerRoutes.default;
      if (typeof registerFunc === "function") {
        registerFunc(this.router, this);
      }
    }
  }
}
