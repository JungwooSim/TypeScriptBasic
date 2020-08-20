function add(x: number, y:number): number { // 마지막 number는 return 타입
    return x + y;
}
const result = add(1,2);

//-------------------

// Optional
// function buildUserInfo(name?: string, email?: string) {
//     return { name, email};
// }

// 초기화
function buildUserInfo(name: string = "-", email: string = "-") {
    return { name, email};
}

const user = buildUserInfo();
//-------------------

const add2 = (a: number, b: number): number => a + b;
//-------------------



