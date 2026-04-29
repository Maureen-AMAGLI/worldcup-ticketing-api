export class FifaCode {
  constructor(public value: string) {
    if (!/^[A-Z]{3}$/.test(value)) {
      throw new Error("Le code FIFA doit être 3 lettres majuscules");
    }
  }
}