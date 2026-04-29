import {Stadium} from "@domain/entities/Stadium";
import {cities} from "./cities";

const [newYork, losAngeles, mexicoCity, guadalajara, toronto, vancouver] = cities;

export const stadiums = [
    new Stadium(1, "Metlife Stadium", newYork, 75000),
    new Stadium(2, " SoFi Stadium", losAngeles, 70000),
    new Stadium(3, "Estadio Azteca", mexicoCity, 72766),
    new Stadium(4, "Estadio Akron", guadalajara, 44330),
    new Stadium(5, "BMO Field", toronto, 45000),
    new Stadium(6, "Vancouver BC Place", vancouver, 54000),
];

