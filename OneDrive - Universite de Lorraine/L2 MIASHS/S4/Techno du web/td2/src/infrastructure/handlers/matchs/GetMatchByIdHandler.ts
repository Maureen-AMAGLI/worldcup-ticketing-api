import { Context } from "hono";
import { matchs } from "../../mock/matchs";

export class GetMatchByIdHandler {
  async handle(c: Context) {
    const id = Number(c.req.param("id"));
    const match = matchs.find((m) => m.id === id);

    if (!match) {
      return c.json({
        success: false,
        error: `Match ${id} does not exist`
      }, 404);
    }

    return c.json({
      success: true,
      message: `Match ${id}`,
      data: match
    });
  }
}