import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { MatchStatus } from "../../../domain/enums/MatchStatus";

export class GetMatchsByStatusHandler {
  async handle(c: Context) {
    const status = c.req.param("status");

    if (!Object.values(MatchStatus).includes(status as MatchStatus)) {
      throw new HTTPException(400, { message: `Invalid status: "${status}"` });
    }

    const result = matchs.filter((m) => m.status === status);

    return c.json({ success: true, message: `Matchs with status ${status}`, data: result });
  }
}