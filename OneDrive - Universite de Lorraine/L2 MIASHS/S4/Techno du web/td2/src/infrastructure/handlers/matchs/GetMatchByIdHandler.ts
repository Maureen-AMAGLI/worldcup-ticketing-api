import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";

export class GetMatchByIdHandler {
  async handle(c: Context) {
    const id = Number(c.req.param("id"));
    const match = matchs.find((m) => m.id === id);

    if (!match) {
      throw new HTTPException(404, { message: `Match ${id} does not exist` });
    }

    return c.json({ success: true, message: `Match ${id}`, data: match });
  }
}