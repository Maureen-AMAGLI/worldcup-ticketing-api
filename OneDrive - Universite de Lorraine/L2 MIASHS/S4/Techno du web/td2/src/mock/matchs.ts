import { Match } from "@domain/entities/Match";
import { stadiums } from "./stadiums";
import { teams } from "./teams";
import { MatchStatus } from "@domain/enums/MatchStatus";
import { MatchStage } from "@domain/enums/MatchStage";

const [metlife, sofi, azteca] = stadiums;
const [france, bresil, argentine, espagne, allemagne, portugal] = teams;

export const matchs = [
  new Match(1, france, bresil, metlife, MatchStatus.scheduled, MatchStage.group, new Date("2026-06-15")),
  new Match(2, argentine, espagne, sofi, MatchStatus.scheduled, MatchStage.group, new Date("2026-06-16")),
  new Match(3, allemagne, portugal, azteca, MatchStatus.scheduled, MatchStage.group, new Date("2026-06-17")),
];