// Interface vs Type

// Interface we use for Domain logic and from API

interface User {
    name: string;
    age: number;
}

type Nullable<T> = T | null | undefined;

const user: Nullable<User> = null;
