import { Person } from './PersonClass.js';

export class Student extends Person {
    constructor(name, age, prof, lang) {
        super(name, age);
        this.prof = prof;

        if (lang) {
            this.lang = lang;
        }
    }
}