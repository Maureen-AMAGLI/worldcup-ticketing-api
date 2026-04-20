import {Team} from "./Team";
import { Stadium} from "./Stadium";
import {MatchStatus} from "../enums/MatchStatus";
import {MatchStage} from "../enums/MatchStage";

export class Match {
    constructor(
        public id: number,
        public homeTeam: Team,
        public awayTeam: Team,
        public stadium: Stadium,
        public status: MatchStatus,
        public stage: MatchStage,
        public date: Date,
        public homeScore: number = 0,
        public awayScore: number = 0,
        public homeScoreExtraTime: number | null = null,
        public awayScoreExtraTime: number | null = null,
        public homeScoreShootOut: number | null = null,
        public awayScoreShootOut: number | null = null,
    ) {
        if (this.id <= 0) {
            throw new Error("L'id doit être supérieur à 0");
        }
        if (this.homeTeam.name === this.awayTeam.name) {
            throw new Error("Les deux équipes doivent être différentes");
        }
        if (this.homeScore < 0 || this.awayScore < 0) {
            throw new Error("Les scores ne peuvent pas être négatifs");
        }
    }

    isDraw(): boolean {
        return this.homeScore === this.awayScore;
    }

    winner(): Team | null {
        if (this.isDraw()) {
            return null;
        }
        return this.homeScore > this.awayScore ? this.homeTeam : this.awayTeam;
    }
}