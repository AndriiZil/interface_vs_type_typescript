type A = {
    age: number;
}

type B = {
    name: string;
}

type C = A | B;

interface D extends C {}

interface D extends A, B {}

const obj: C = {
    name: 'A'
}
