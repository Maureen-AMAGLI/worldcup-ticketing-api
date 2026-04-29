import { Hono } from "hono";
import { GetCitiesHandler } from "../handlers/cities/GetCitiesHandler";

const citiesRouter = new Hono();

citiesRouter.get("/", (c) => new GetCitiesHandler().handle(c));

export default citiesRouter;