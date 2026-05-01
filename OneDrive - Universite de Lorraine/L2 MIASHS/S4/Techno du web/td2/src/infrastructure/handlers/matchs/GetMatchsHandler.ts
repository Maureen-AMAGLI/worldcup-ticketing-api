import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { FifaCode } from "../../../domain/value-objects/FifaCode";
import { MatchStage } from "../../../domain/enums/MatchStage";

export class GetMatchsHandler {
  async handle(c: Context) {
    const teamCode = c.req.query("team[code]");
    const stage = c.req.query("stage");
    const date = c.req.query("date");
    let result = [...matchs];

    if (teamCode) {
      try {
        new FifaCode(teamCode.toUpperCase());
      } catch {
        throw new HTTPException(400, { message: `Invalid FIFA code : ${teamCode}` });
      }
      result = result.filter((m) =>
        m.homeTeam.code.value.toLowerCase() === teamCode.toLowerCase() ||
        m.awayTeam.code.value.toLowerCase() === teamCode.toLowerCase()
      );
    }

    if (stage) {
      if (!Object.values(MatchStage).includes(stage as MatchStage)) {
        throw new HTTPException(400, { message: `Invalid FIFA code: "${teamCode}"` });
      }
      result = result.filter((m) => m.stage === stage);
    }

    if (date) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
        throw new HTTPException(400, { message: `Invalid FIFA code: "${fifaCode}"` });
      }
      result = result.filter((m) =>
        m.date.toISOString().split("T")[0] === date
      );
    }

  return c.json({
    success: true,
    message: date ? `Matchs filtered by date: ${date}` : teamCode ? `Matchs filtered by team[code]: ${teamCode}` : "All matchs",
    data: result
});
  }
}