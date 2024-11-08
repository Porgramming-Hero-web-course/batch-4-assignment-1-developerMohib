// Problem - 8 ==> Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

interface Person111 {
    name: string;
    email: string;
    age: number;
}
const person111: Person111 = { name: "Alice", email: "alice@gmail.com", age: 32 }

const validateKeys = <T extends object, K extends keyof T>(obj: T, keys: K[]): boolean => {
    return keys.every((key) => key in obj);
};

validateKeys(person111, ["name"])