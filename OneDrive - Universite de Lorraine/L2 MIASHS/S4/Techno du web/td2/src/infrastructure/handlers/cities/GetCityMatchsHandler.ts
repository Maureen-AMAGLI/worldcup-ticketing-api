import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { matchs } from "../../mock/matchs";
import { cities } from "../../mock/cities";

export class GetCityMatchsHandler {
  async handle(c: Context) {
    const name = c.req.param("name");

    const city = cities.find((ci) =>
      ci.name.toLowerCase() === name.toLowerCase()
    );

    if (!city) {
      throw new HTTPException(404, { message: `Ville ${name} non trouvée` });
    }

    const result = matchs.filter((m) =>
      m.stadium.city.name.toLowerCase() === city.name.toLowerCase()
    );

    return c.json({ success: true, message: `Matchs for city ${name}`, data: result });
  }
}