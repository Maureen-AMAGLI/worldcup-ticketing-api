import { Context } from "hono";
import { countries } from "../../mock/countries";

export class GetCountriesHandler {
  async handle(c: Context) {
    const name = c.req.query("name");

    let result = [...countries];

    if (name) {
      result = result.filter((c) =>
        c.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return c.json({
      success: true,
      message: name ? `Countries filtered by name: ${name}` : "All countries",
      data: result
    });
  }
}