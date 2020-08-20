enum StarbuksGrade {
    WELCOME = 0,
    GREEN = 1,
    GOLD = 2,
    TEST = "TEST" // 문자열도 가능
}

function getDicound(v: StarbuksGrade): number {
    switch (v) {
        case StarbuksGrade.WELCOME:
            return 0;
        case StarbuksGrade.GREEN:
            return 5;
        case StarbuksGrade.GOLD:
            return 10;
    }
}

console.log(getDicound(StarbuksGrade.GREEN));
console.log(StarbuksGrade.GREEN);
