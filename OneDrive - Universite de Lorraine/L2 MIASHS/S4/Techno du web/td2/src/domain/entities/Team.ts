export class Team {
    constructor(
        public name: string,
        public code: string
    ) {
        if (!/^[A-Z]{3}$/.test(this.code)) {
            throw new Error ("Le code FIFA doit être 3 lettres majuscules");
            
        }
    }
}