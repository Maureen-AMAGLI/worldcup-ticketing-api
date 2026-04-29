import { Context } from "hono";
import { teams } from "../../mock/teams";
import { FifaCode } from "../../../domain/value-objects/FifaCode";

export class GetTeamByFifaCodeHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");

    try {
      new FifaCode(fifaCode);
    } catch {
      return c.json({
        success: false,
        error: `Code FIFA invalide : ${fifaCode}`
      }, 400);
    }

    const team = teams.find((t) => t.code.value === fifaCode);

    if (!team) {
      return c.json({
        success: false,
        error: `Équipe ${fifaCode} non trouvée`
      }, 404);
    }

    return c.json({
      success: true,
      message: `Team ${fifaCode}`,
      data: team
    }, 200);
  }
}