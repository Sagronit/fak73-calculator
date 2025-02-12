import { Hono } from "hono";

export const abbort = new Hono();

abbort.get("/crash", (c) => {
  console.log("Apllication is crashing");
  process.exit(1);
});

abbort.get("/stress", (c) => {
  console.log("Starting CPU Stress test...");
  while (true) {
    console.log(Math.random() * Math.random());
  }
});
