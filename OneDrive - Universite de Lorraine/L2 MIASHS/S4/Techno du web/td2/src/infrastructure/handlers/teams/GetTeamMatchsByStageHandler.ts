import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { FifaCode } from "../../../domain/value-objects/FifaCode";
import { MatchStage } from "../../../domain/enums/MatchStage";
import { teams } from "../../mock/teams";

export class GetTeamMatchsByStageHandler {
  async handle(c: Context) {
    const fifaCode = c.req.param("fifaCode");
    const stage = c.req.param("stage");

    try {
      new FifaCode(fifaCode);
    } catch {
      throw new HTTPException(400, { message: `Invalid FIFA code: "${fifaCode}"` });
    }

    if (!Object.values(MatchStage).includes(stage as MatchStage)) {
      throw new HTTPException(400, { message: `Invalid stage: "${stage}"` });
    }

    const team = teams.find((t) => t.code.value.toLowerCase() === fifaCode.toLowerCase());
    if (!team) {
      throw new HTTPException(404, { message: `Team "${fifaCode}" does not exist` });
    }

    const result = matchs.filter((m) =>
      (m.homeTeam.code.value.toLowerCase() === fifaCode.toLowerCase() ||
      m.awayTeam.code.value.toLowerCase() === fifaCode.toLowerCase()) &&
      m.stage === stage
    );

    return c.json({ success: true, message: `Matchs for team ${fifaCode} at stage ${stage}`, data: result });
  }
}