import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "../../mock/teams";
import { FifaCode } from "../../../domain/value-objects/FifaCode";

export class GetTeamByFifaCodeHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");

    try {
      new FifaCode(fifaCode);
    } catch {
      throw new HTTPException(400, { message: `Invalid FIFA code: "${fifaCode}"` });
    }

    const team = teams.find((t) => t.code.value === fifaCode);
    if (!team) {
      throw new HTTPException(404, { message: `Team ${fifaCode} does not exist` });
    }

    return c.json({ success: true, message: `Team ${fifaCode}`, data: team });
  }
}