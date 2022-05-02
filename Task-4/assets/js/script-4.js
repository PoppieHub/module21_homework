/* #Fourth task */

const getRandomIntRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const usePromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const random = getRandomIntRange(1, 100);
            if (random % 2 === 0) {
                resolve({
                    message: `Завершено успешно.`,
                    data: random
                });
            } else reject({
                message: `Завершено c ошибкой.`,
                data: random
            });
        }, 3000);
    });
}

const usePromiseForAsync = async () => {
    const promiseResult = await usePromise();
    console.group(`Второй способ`);
        console.log(`${promiseResult.message} Сгенерированное число — ${promiseResult.data}`);
    console.groupEnd();
}

usePromise()
    .then((result) => {
        console.group(`Первый способ`);
            console.log( (`${result.message} Сгенерированное число — ${result.data}`) );
        console.groupEnd();
    })
    .catch((error) => {
        console.group(`Первый способ`);
            console.log( (`${error.message} Сгенерированное число — ${error.data}`) );
        console.groupEnd();
    });

usePromiseForAsync();

