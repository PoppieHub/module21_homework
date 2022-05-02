/* #Third task */

let name = localStorage.getItem("userName");
let visitDate = localStorage.getItem("date");

if(!name) {
    name = prompt("Добро пожаловать! Назовите, пожалуйста, ваше имя");
} else {
    alert(`Добрый день, ${name}! Давно не виделись. В последний раз вы были у нас ${visitDate}`);
}

visitDate = new Date();

localStorage.setItem("userName", name);
localStorage.setItem("date",`${visitDate.toLocaleString("ru")}`);