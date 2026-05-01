import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { teams } from "../../mock/teams";
import { FifaCode } from "../../../domain/value-objects/FifaCode";

export class GetTeamMatchsByFifaCodeHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");

    try {
      new FifaCode(fifaCode);
    } catch {
      throw new HTTPException(400, { message: `Invalid FIFA code: "${fifaCode}"` });
    }

    const team = teams.find((t) => t.code.value.toLowerCase() === fifaCode.toLowerCase());
    if (!team) {
      throw new HTTPException(400, { message: `Invalid FIFA code: "${fifaCode}"` });
    }

    const result = matchs.filter((m) =>
      m.homeTeam.code.value.toLowerCase() === fifaCode.toLowerCase() ||
      m.awayTeam.code.value.toLowerCase() === fifaCode.toLowerCase()
    );

    return c.json({ success: true, message: `Matchs for team ${fifaCode}`, data: result });
  }
}