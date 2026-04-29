import { Hono } from "hono";
import { GetTeamsHandler } from "../handlers/teams/GetTeamsHandler";
import { GetTeamByFifaCodeHandler } from "../handlers/teams/GetTeamByFifaCodeHandler";

const teamsRouter = new Hono();

teamsRouter.get("/", (c) => new GetTeamsHandler().handle(c));
teamsRouter.get("/:fifaCode", (c) => new GetTeamByFifaCodeHandler().handle(c));

export default teamsRouter;