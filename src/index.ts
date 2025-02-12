import { Hono } from "hono";
import * as os from "os";
import { calculator } from "./routes/calculator";

const app = new Hono();
let state = 0;

app.get("/", (c) => {
  return c.text(`Hello from: ${os.hostname()}`);
});

app.route("/calc", calculator);
export default {
  fetch: app.fetch,
  port: 8080,
};
