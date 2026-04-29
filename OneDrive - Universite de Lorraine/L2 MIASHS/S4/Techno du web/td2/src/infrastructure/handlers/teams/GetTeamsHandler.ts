import { Context } from "hono";
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
      return c.json({
        success: false,
        error: `Valeur de sort invalide : ${sort}`
      }, 400);
    }

    return c.json({
      success: true,
      message: name ? `Teams filtered by name: ${name}` : "All teams",
      data: result
    });
  }
}