/* #Fifth task */

const btnGet = document.querySelector('.main__getList');
const inputId = document.querySelector('.main__inputId');
const todoList = document.querySelector('.main__todo');

let userId = null;

const getFetchRequest = (url) => {
    return fetch(url.toString())
        .then((response) => {
            return response.json();
        })
        .then((json) => {
            return json;
        })
        .catch(() => {
            console.log(`Завершено c ошибкой.`);
        });
}

const createView = (value) => {
    let total = '';
    let temp = '';

    for (let key in value) {
        const title = value[key].title;
        const status = value[key].completed;
        if (status) {
            temp = `<li style="text-decoration: line-through">${title}</li>`;
        } else {
            temp = `<li>${title}</li>`;
        }
        total += temp;
    }
    todoList.innerHTML = total;
}

btnGet.addEventListener('click', async () => {
    userId = inputId.value;
    const result = await getFetchRequest(`https://jsonplaceholder.typicode.com/users/${userId}/todos`);

    if (result.length > 0) {
        createView(result);
    } else {
        alert("Пользователь с указанным id не найден");
        createView(result);
    }
});