import { Context } from "hono";
import { stadiums } from "../../mock/stadiums";

export class GetStadiumsHandler {
  async handle(c: Context) {
    const cityName = c.req.query("city[name]");
    const countryName = c.req.query("country[name]");
    const countryCode = c.req.query("country[code]");
    let result = [...stadiums];

    if (cityName) {
      result = result.filter((s) =>
        s.city.name.toLowerCase().includes(cityName.toLowerCase())
      );
    }

    if (countryName) {
      result = result.filter((s) =>
        s.city.country.name.toLowerCase().includes(countryName.toLowerCase())
      );
    }

    if (countryCode) {
      result = result.filter((s) =>
        s.city.country.code.toLowerCase() === countryCode.toLowerCase()
      );
    }

    const message = cityName ? `Stadiums filtered by city[name]: ${cityName}`
      : countryName ? `Stadiums filtered by country[name]: ${countryName}`
      : countryCode ? `Stadiums filtered by country[code]: ${countryCode}`
      : "All stadiums";

    return c.json({ success: true, message, data: result });
  }
}