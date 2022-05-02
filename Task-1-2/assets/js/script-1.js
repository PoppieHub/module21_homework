import { Student } from './Class/StudentClass.js';

/* #First task */

const xmlDom = `
    <list>
      <student>
        <name lang="en">
          <first>Ivan</first>
          <second>Ivanov</second>
        </name>
        <age>35</age>
        <prof>teacher</prof>
      </student>
      <student>
        <name lang="ru">
          <first>Петр</first>
          <second>Петров</second>
        </name>
        <age>58</age>
        <prof>driver</prof>
      </student>
    </list>
`;

const parser = new DOMParser();
const xmlDOM = parser.parseFromString(xmlDom,'text/xml');

const listNode = xmlDOM.querySelector("list");
const students = listNode.querySelectorAll("student");

let totalArr = [];

for (let i = 0; i < students.length; i++) {
    const item = students.item(i);
    const nameNode = item.querySelector("name");
    const firstNode = nameNode.querySelector("first");
    const secondNode = nameNode.querySelector("second");
    const ageNode = item.querySelector("age");
    const profNode = item.querySelector("prof");

    const langAttr = nameNode.getAttribute('lang');

    let resultObj = new Student(`${firstNode.textContent} ${secondNode.textContent}`, ageNode.textContent, profNode.textContent, langAttr);
    totalArr.push(resultObj);
}

const result = {
    list: totalArr
}

console.group(`#First task`);
    console.log(result);
console.groupEnd();
