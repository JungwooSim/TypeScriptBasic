interface User {
    name: string;
}

interface Action {
    do(): void;
}

// intersection : 다중 타입을 갖는것 (User & Action)
function createUserAction(u: User, a: Action): User & Action {
    return {...u, ...a};
}

const u = createUserAction({name: 'jay'}, { do() {}});

// union Type : 다중 파라미터를 갖는것 (string | number)
// 유니온 타입은 공통된 멤버만 사용가능하다. (Ex. string, number 모두 사용가능한 함수)
function compare(x: string | number, y: string | number) {
    // type guard - number, number
    if (typeof x === 'number' && typeof y === 'number') {
        return x === y ? 0 : x > y ? 1 : -1;
    }

    // type guard - string, string
    if (typeof x === 'string' && typeof y === 'string') {
        return x.localeCompare(y);
    }

    throw Error('not supported type');
}

const v = compare("a", 1);

// ------------
// Union Type Guard
function isAction(v: User | Action): v is Action {
    return (<Action>v).do !== undefined;
}

function process(v: User | Action) {
    if (isAction(v)) {
        v.do();
    } else {
        v.name;
    }
}
