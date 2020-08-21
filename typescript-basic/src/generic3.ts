// 조건부 타입 활용
interface Veigtable {
    v: string;
}

interface Meat {
    m: string;
}

interface Cart2<T> {
    getItem(): T extends Veigtable ? Veigtable : Meat;
}

const cart1: Cart2<string> = {
    getItem() {
        return {
            m: ''
        }
    }
}

const cart2: Cart2<Veigtable> = {
    getItem() {
        return {
            v: ''
        }
    }
}
