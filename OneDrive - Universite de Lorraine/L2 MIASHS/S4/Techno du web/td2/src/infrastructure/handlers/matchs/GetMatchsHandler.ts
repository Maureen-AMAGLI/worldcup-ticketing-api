import { Context } from "hono";
import { matchs } from "../../mock/matchs";
import { FifaCode } from "../../../domain/value-objects/FifaCode";
import { MatchStage } from "../../../domain/enums/MatchStage";

export class GetMatchsHandler {
  async handle(c: Context) {
    const teamCode = c.req.query("team[code]");
    const stage = c.req.query("stage");

    let result = [...matchs];

    if (teamCode) {
      try {
        new FifaCode(teamCode.toUpperCase());
      } catch {
        return c.json({
          success: false,
          error: `Code FIFA invalide : ${teamCode}`
        }, 400);
      }

      result = result.filter((m) =>
        m.homeTeam.code.value.toLowerCase() === teamCode.toLowerCase() ||
        m.awayTeam.code.value.toLowerCase() === teamCode.toLowerCase()
      );
    }

    if (stage) {
      if (!Object.values(MatchStage).includes(stage as MatchStage)) {
        return c.json({
          success: false,
          error: `Stage invalide : ${stage}`
        }, 400);
      }

      result = result.filter((m) => m.stage === stage);
    }

    return c.json({
      success: true,
      message: "All matchs",
      data: result
    });
  }
}