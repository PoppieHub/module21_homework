import { Person } from './PersonClass.js';

export class Developer extends Person {
    constructor(name, age, skills, salary) {
        super(name, age);
        this.skills = skills;
        this.salary = salary;
    }
}