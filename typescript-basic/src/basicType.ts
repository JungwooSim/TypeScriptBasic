let numValue: number; // 실수형, 정수형, 등 가능
let stringValue: string;
let booleanValue: boolean; // true, false
let undefinedValue: undefined;
let nullValue: null;
let objValue: object;

// ES6에서 추가
let symbolValue: symbol;

// Example
objValue = { name : 'jay'};

//------
symbolValue = Symbol();

//------
let nameList: string[];
nameList = ["1", "3"];
nameList.push("333");

//------
let user1: { name: string, score: number};
user1 = {
    name: 'jay',
    score: 30
}

//------
let tuple2: [number, string]; // 2가지 타입으로 구성
tuple2 = [1, "hello"];
