import { Hono } from "hono";
import { GetCitiesHandler } from "../handlers/cities/GetCitiesHandler";
import { GetCityMatchsHandler } from "../handlers/cities/GetCityMatchsHandler";
import { GetCityByNameHandler } from "../handlers/cities/GetCityByNameHandler";

const citiesRouter = new Hono();

citiesRouter.get("/:name/matchs", (c) => new GetCityMatchsHandler().handle(c));
citiesRouter.get("/:name", (c) => new GetCityByNameHandler().handle(c));
citiesRouter.get("/", (c) => new GetCitiesHandler().handle(c));

export default citiesRouter;