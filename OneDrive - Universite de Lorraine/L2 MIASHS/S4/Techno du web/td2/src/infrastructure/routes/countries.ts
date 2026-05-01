import { Hono } from "hono";
import { GetCountriesHandler } from "../handlers/countries/GetCountriesHandler";
import { GetCountryCitiesHandler } from "../handlers/countries/GetCountryCitiesHandler";

const countriesRouter = new Hono();

countriesRouter.get("/:code/cities", (c) => new GetCountryCitiesHandler().handle(c));
countriesRouter.get("/", (c) => new GetCountriesHandler().handle(c));

export default countriesRouter;