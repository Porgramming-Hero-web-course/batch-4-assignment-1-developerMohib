// Problem - 5 ==> Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.


interface Person {
    name: string;
    age: number;
}
const person: Person = {
    name: "Alice",
    age: 30
}

const getProperty = <T, X extends keyof T>(obj: T, key: X): T[X] => {
    return obj[key]
}
getProperty(person, "name")
