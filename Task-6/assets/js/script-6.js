/* #Sixth task */

// Получение данных в localStorage
let cardList = localStorage.getItem('cardList');

// Данные страницы
const pageNumber = document.querySelector('.form__inputPageNumber');
const limit = document.querySelector('.form__inputLimited');
const requestBtn = document.querySelector('.form__btnRequest');
const result = document.querySelector('.gallery_resultDiv');
const warning = document.querySelector('.form__warning');

let pageId, limitId = null;

const checkRange = (number) => {
    return (number >= 1 && number <= 10 && typeof(number) === 'number' && !isNaN(number));
}

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
        let author = value[key].author;
        let download_url = value[key].download_url;
        let url = value[key].url;

        temp = `<div class="gallery__card"><img src="${download_url}" class="gallery__image" alt="${url}"/><p class="gallery__author">${author}</p></div>`;

        total += temp;
    }
    result.innerHTML = total;
}

requestBtn.addEventListener('click',async () => {
    pageId = parseInt(pageNumber.value);
    limitId = parseInt(limit.value);

    if (checkRange(pageId) && checkRange(limitId)) {
        const resultRequest = await getFetchRequest(`https://picsum.photos/v2/list?page=${pageId}&limit=${limitId}.`);

        localStorage.setItem('cardList', JSON.stringify(resultRequest));

        warning.innerHTML = '';

        createView(resultRequest);
    } else {
        if (checkRange(pageId) === false && checkRange(limitId) === false) {
            warning.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
        } else if (!checkRange(pageId)) {
            warning.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
        } else {
            warning.innerHTML = 'Лимит вне диапазона от 1 до 10';
        }
        createView(JSON.parse(cardList));
    }
});

window.onload = function() {
    createView(JSON.parse(cardList));
};