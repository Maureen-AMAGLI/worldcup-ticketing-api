import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { MatchStage } from "../../../domain/enums/MatchStage";

export class GetMatchsByStageHandler {
  async handle(c: Context) {
    const stage = c.req.param("stage");

    if (!Object.values(MatchStage).includes(stage as MatchStage)) {
      throw new HTTPException(400, { message: `Invalid stage: "${stage}"` });
    }

    const result = matchs.filter((m) => m.stage === stage);

    return c.json({ success: true, message: `Matchs at stage ${stage}`, data: result });
  }
}