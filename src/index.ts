import { Hono } from "hono";
import * as os from "os";
import { calculator } from "./routes/calculator";
import { abbort } from "./routes/ending";

const app = new Hono();
let state = 0;

app.get("/", (c) => {
  return c.text(`Hello from: ${os.hostname()}`);
});
app.get("/2", (c) => {
  return c.text("Hello From the Other Side");
});

app.route("/calc", calculator);
app.route("/abbort", abbort);
export default {
  fetch: app.fetch,
  port: 8080,
};
