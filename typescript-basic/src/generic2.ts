interface User {
    name: string;
}

interface DB<T> {
    add(v: T): void;
    get(): T;
}

interface JSONSerialier {
    serialize(): string;
}

// T는 JSONSerialier 에 속
class LocalDB<T extends JSONSerialier> implements DB<T> {
    constructor(private localStorageKey: string) {
    }

    add(v: T) {
        // localStorage.setItem(this.localStorageKey, JSON.stringify(v));
        localStorage.setItem(this.localStorageKey, v.serialize());
    }

    get(): T {
        const v = localStorage.getItem(this.localStorageKey);
        return (v) ? JSON.parse(v) : null;
    }
}

// const userDb = new LocalDB<User>('user');
// userDb.add({name:'jay'});
// const userA = userDb.get();
// userA.name;

// --------------
// implements 에서 받아온 제내릭 타입을 클래스에서도 받아야함.
class D<T> implements DB<T> {
    add(v: T): void {
    }

    get(): T {
        return undefined;
    }
}
