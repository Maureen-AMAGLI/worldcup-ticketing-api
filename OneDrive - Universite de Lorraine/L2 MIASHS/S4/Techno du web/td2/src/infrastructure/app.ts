import { Hono } from "hono";
import { GetHomeHandler } from "./handlers/home/GetHomeHandler";
import { GetHealthHandler } from "./handlers/home/GetHealthHandler";
import matchsRouter from "./routes/matchs";
import teamsRouter from "./routes/teams";
import citiesRouter from "./routes/cities";
import countriesRouter from "./routes/countries";
import stadiumsRouter from "./routes/stadiums";



const app = new Hono();

app.get("/", (c) => new GetHomeHandler().handle(c));
app.get("/health", (c) => new GetHealthHandler().handle(c));
app.route("/matchs", matchsRouter);
app.route("/teams", teamsRouter);
app.route("/cities", citiesRouter);
app.route("/countries", countriesRouter);
app.route("/stadiums", stadiumsRouter);
export default app;