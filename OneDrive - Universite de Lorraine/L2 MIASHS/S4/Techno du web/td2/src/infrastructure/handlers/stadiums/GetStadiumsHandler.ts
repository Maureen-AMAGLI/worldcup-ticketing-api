import { Context } from "hono";
import { stadiums } from "../../mock/stadiums";

export class GetStadiumsHandler {
  async handle(c: Context) {
    const name = c.req.query("name");

    let result = [...stadiums];

    if (name) {
      result = result.filter((s) =>
        s.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return c.json({
      success: true,
      message: name ? `Stadiums filtered by name: ${name}` : "All stadiums",
      data: result
    });
  }
}