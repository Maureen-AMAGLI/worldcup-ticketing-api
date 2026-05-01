import { Context } from "hono";
import { cities } from "../../mock/cities";

export class GetCitiesHandler {
  async handle(c: Context) {
    const name = c.req.query("name");
    let result = [...cities];
    if (name) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
    }
    return c.json({
      success: true,
      message: name ? `Cities filtered by name: ${name}` : "All cities",
      data: result
    });
  }
}