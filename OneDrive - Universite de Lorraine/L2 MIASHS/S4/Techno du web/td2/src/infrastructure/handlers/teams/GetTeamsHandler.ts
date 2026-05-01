import { Context } from "hono";
import { HTTPException } from "hono/http-exception";
import { teams } from "../../mock/teams";

export class GetTeamsHandler {
  async handle(c: Context) {
    const sort = c.req.query("sort");
    const name = c.req.query("name");
    let result = [...teams];

    if (name) {
      result = result.filter((t) =>
        t.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    if (!sort || sort === "name") {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === "-name") {
      result.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      throw new HTTPException(400, { message: `Valeur de sort invalide : ${sort}` });
    }

    return c.json({
      success: true,
      message: name ? `Teams filtered by name: ${name}` : "All teams",
      data: result
    });
  }
}