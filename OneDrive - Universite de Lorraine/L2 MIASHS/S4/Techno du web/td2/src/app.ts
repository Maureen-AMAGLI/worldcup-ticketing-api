import { Hono } from "hono";
import { matchs } from "./mock/matchs";


const app = new Hono();

app.get("/", (c) => {
  return c.json({ 
    message: "API Billetterie Coupe du Monde 2026" 
});
});

app.get("/matchs", (c) => {
    return c.json({
        success: true,
        message: "All matchs",
        data: matchs

    });
});

app.get("/matchs/:id", (c) => {
  const id = Number(c.req.param("id"));
  const match = matchs.find((m) => m.id === id);

  if (!match) {
    return c.json({
      success: false,
      error: `Match ${id} does not exist`
    }, 404);
  }

  return c.json({
    success: true,
    message: "Match 1",
    data: match
  });
});

export default app;