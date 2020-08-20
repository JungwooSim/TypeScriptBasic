// 제네릭은 타입을 파라미터 할 수 있음. 다양한 타입을 지원가능함.
function createPromise<T>(x: T, timeout: number) {
    return new Promise<T>((resolve, reject) => {
        setTimeout(() => {
            resolve(x);
        }, timeout)
    })
}

createPromise(10, 100).then(v => console.log(v));

//------------------

function createTuple2<T, U>(v: T, v2: U): [T, U] {
    return [v, v2];
}

const t1 = createTuple2("user1", 1000);
