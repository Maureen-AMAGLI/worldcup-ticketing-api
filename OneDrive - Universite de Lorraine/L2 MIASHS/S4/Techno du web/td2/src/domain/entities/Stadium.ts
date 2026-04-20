import {City} from "./City";

export class Stadium {
    constructor(
        public id: number,
        public name: string,
        public city: City,
        public capacity: number
    ) {
        if (this.capacity <=0) {
            throw new Error("La capacité du stade doit être supérieure à zéro");
             
            }
        }
    }