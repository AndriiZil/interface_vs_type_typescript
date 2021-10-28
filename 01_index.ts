// Interface vs Type

class A {

}

interface UserA {
    name: string;
    age: number;
}

type UserB = {
    name: string;
    age: number;
}

const user: UserB = {
    name: 'User',
    age: 30
}

