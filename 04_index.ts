// Interface VS Type

type NamesA = string[];

interface NameB {
    [key: number]: string;
}

type State = [number, (n: number) => void];

const s: State = [123, (n) => {}];
