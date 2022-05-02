import { Developer } from './Class/DeveloperClass.js';

/* #Second task */

const developerAnton = new Developer("Anton", 36, ["Javascript","HTML","CSS"], 80000);
const developerAntonJson = JSON.stringify(developerAnton);

console.group(`#Second task`);
    console.log(developerAntonJson);
console.groupEnd();

