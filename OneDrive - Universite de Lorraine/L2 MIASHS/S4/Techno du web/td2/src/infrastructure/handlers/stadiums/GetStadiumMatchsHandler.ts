import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { stadiums } from "../../mock/stadiums";

export class GetStadiumMatchsHandler {
  async handle(c: Context) {
    const name = c.req.param("name");

    const stadium = stadiums.find((s) =>
      s.name.toLowerCase() === name.toLowerCase()
    );

    if (!stadium) {
      throw new HTTPException(404, { message: `Stadium "${name}" does not exist` });
    }

    const result = matchs.filter((m) => m.stadium.id === stadium.id);

    return c.json({ success: true, message: `Matchs at ${name}`, data: result });
  }
}