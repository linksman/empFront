const doWork = (res, rej) => {
    setTimeout(() => res({a: 1, b:2, c:3}), 1000)
}

let someText = new Promise(doWork);
someText.then(({b}) => {
    console.log("1" + b);
    return new Promise(doWork);
})