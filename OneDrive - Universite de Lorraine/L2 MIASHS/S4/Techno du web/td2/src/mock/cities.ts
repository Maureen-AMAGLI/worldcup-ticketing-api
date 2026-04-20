import {City} from "@domain/entities/City";
import {countries} from "./countries";

const [usa, mexico, canada] = countries;

export const cities = [
    new City("New York", usa),
    new City("Los Angeles", usa),
    new City("Mexico City", mexico),
    new City("Guadalajara", mexico),
    new City("Toronto", canada),
    new City("Vancouver", canada),
];