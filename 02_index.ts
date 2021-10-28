// Interface VS Type

interface SumA {
    (a: number, b: number): number;
}

type SumB = (a: number, b: number) => number

const sum: SumB = (a, b) => a + b;