import { Gateway } from "./gateway.js";
const gateway = new Gateway();
gateway.loadRoutes();
gateway.start();
