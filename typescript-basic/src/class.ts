interface User {
    name: String;
}
interface Product {
    id: string;
    price: number;
}
// private, public, protected 접근제어자가 있음.
// default = public
class Cart {
    user: User;
    private store: object;

    constructor(user: User) {
        this.user = user;
        this.store = {};
    }

    put(id: string, product: Product){
        // @ts-ignore
        this.store[id] = product;
    }
    get(id: string) {
        // @ts-ignore
        return this.store[id];
    }
}

// 상속 받을 수 있음.
class PromotionCart extends Cart {

}

const cartJohn = new Cart({name: 'john'});
const cartJay = new Cart({name: 'jay'});
