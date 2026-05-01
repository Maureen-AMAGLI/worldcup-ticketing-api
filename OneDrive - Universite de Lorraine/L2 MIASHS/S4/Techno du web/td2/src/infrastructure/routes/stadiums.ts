import { Hono } from "hono";
import { GetStadiumsHandler } from "../handlers/stadiums/GetStadiumsHandler";
import { GetStadiumMatchsHandler } from "../handlers/stadiums/GetStadiumMatchsHandler";
import { GetStadiumByNameHandler } from "../handlers/stadiums/GetStadiumByNameHandler";

const stadiumsRouter = new Hono();

stadiumsRouter.get("/:name/matchs", (c) => new GetStadiumMatchsHandler().handle(c));
stadiumsRouter.get("/:name", (c) => new GetStadiumByNameHandler().handle(c));
stadiumsRouter.get("/", (c) => new GetStadiumsHandler().handle(c));

export default stadiumsRouter;