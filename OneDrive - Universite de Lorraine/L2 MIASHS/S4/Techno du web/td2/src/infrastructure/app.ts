import { Hono } from "hono";
import { HTTPException } from "hono/http-exception";
import { GetHomeHandler } from "./handlers/home/GetHomeHandler";
import { GetHealthHandler } from "./handlers/home/GetHealthHandler";
import matchsRouter from "./routes/matchs";
import teamsRouter from "./routes/teams";
import citiesRouter from "./routes/cities";
import countriesRouter from "./routes/countries";
import stadiumsRouter from "./routes/stadiums";

const app = new Hono();

app.onError((err, c) => {
  if (err instanceof HTTPException) {
    return c.json({ success: false, error: err.message }, err.status);
  }
  return c.json({ success: false, error: "Internal Server Error" }, 500);
});

app.notFound((c) => {
  return c.json({ success: false, error: "Not Found" }, 404);
});

app.get("/", (c) => new GetHomeHandler().handle(c));
app.get("/health", (c) => new GetHealthHandler().handle(c));
app.route("/matchs", matchsRouter);
app.route("/teams", teamsRouter);
app.route("/cities", citiesRouter);
app.route("/countries", countriesRouter);
app.route("/stadiums", stadiumsRouter);

export default app;