import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { cities } from "../../mock/cities";

export class GetCityByNameHandler {
  async handle(c: Context) {
    const name = c.req.param("name");

    const city = cities.find((ci) =>
      ci.name.toLowerCase() === name.toLowerCase()
    );

    if (!city) {
      throw new HTTPException(404, { message: `Ville ${name} non trouvée` });
    }

    return c.json({ success: true, message: `City ${name}`, data: city });
  }
}