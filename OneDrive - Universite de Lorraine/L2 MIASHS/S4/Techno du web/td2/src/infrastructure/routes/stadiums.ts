import { Hono } from "hono";
import { GetStadiumsHandler } from "../handlers/stadiums/GetStadiumsHandler";

const stadiumsRouter = new Hono();

stadiumsRouter.get("/", (c) => new GetStadiumsHandler().handle(c));

export default stadiumsRouter;