import { Hono } from "hono";

export const calculator = new Hono();
let state = 0;
let state2 = 1;

calculator.get("/add", (c) => {
  const { y } = c.req.query();
  if (!y || isNaN(parseInt(y))) return c.json({ error: "Invalid Number" }, 400);

  state = state + parseInt(y);

  return c.json({
    result: state,
  });
});

calculator.get("/stateless-add", (c) => {
  const { x, y } = c.req.query();
  if (!y || !x || isNaN(parseInt(x)) || isNaN(parseInt(y)))
    return c.json({ error: "Invalid Number" }, 400);

  return c.json({
    result: parseInt(x) + parseInt(y),
  });
});

calculator.get("/reset", (c) => {
  state = 0;
  return c.json({ message: "State resettet" });
});

calculator.get("/mulitplier", (c) => {
  const { x, y } = c.req.query();
  if (!y || !x || isNaN(parseInt(x)) || isNaN(parseInt(y))) {
    if (!x && y) {
      state = state * parseInt(y);
      return c.json({ result: state });
    }
    return c.json({ error: "Invalide Number" }, 400);
  }

  return c.json({
    result: parseInt(x) * parseInt(y),
  });
});
