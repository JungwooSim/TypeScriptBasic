interface Person {
    name: string;
    say(): void;
}

interface Programmer {
    writeCode(requirment: string): string;
}

abstract class Korean implements Person {
    public abstract jumin: number;

    constructor(public name: string) {
    }

    abstract loveKimchi(): void;

    say(): void {
    }
}

class KoreanProgrammer extends Korean implements Programmer {

    constructor(public name: string, public jumin: number) {
        super(name);
    }

    say(): void {
        console.log("hi");
    }
    writeCode(requirment: string): string {
        console.log(requirment);
        return requirment + "...";
    }

    loveKimchi(): void {
        console.log("love~ kimchi~");
    }
}


const jay = new KoreanProgrammer("jay", 123123);
