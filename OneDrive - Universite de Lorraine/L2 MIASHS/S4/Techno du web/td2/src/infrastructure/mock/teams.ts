import { Team } from "@domain/entities/Team";
import { FifaCode } from "@domain/value-objects/FifaCode";

export const teams = [
  new Team("France", new FifaCode("FRA")),
  new Team("Brésil", new FifaCode("BRA")),
  new Team("Argentine", new FifaCode("ARG")),
  new Team("Espagne", new FifaCode("ESP")),
  new Team("Allemagne", new FifaCode("GER")),
  new Team("Portugal", new FifaCode("POR")),
];