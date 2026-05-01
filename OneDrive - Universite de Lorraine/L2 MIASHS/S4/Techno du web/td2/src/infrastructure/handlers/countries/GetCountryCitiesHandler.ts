import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { countries } from "../../mock/countries";
import { cities } from "../../mock/cities";

export class GetCountryCitiesHandler {
  async handle(c: Context) {
    const code = c.req.param("code");

    const country = countries.find((co) => co.code === code);

    if (!country) {
      throw new HTTPException(404, { message: `Pays ${code} non trouvé` });
    }

    const result = cities.filter((ci) => ci.country.code === code);

    return c.json({ success: true, message: `Cities for country ${code}`, data: result });
  }
}