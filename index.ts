/* ----------------------------  Assignment 1 ---------------------------- */

// Problem - 1 ==>  Write a TypeScript function sumArray that accepts an array of numbers

const ongko: number[] = [1, 2, 3, 4, 5, 6]
const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, total) => acc + total, 0)
}
console.log('sum array', sumArray(ongko));




// Problem - 2 ==> Create a TypeScript function removeDuplicates

const someOngko: number[] = [1, 2, 2, 3, 4, 4, 5];
const someBorno: string[] = ["a", "a", "b", "b", "c", "c", "d", "e"]

const removeDuplicates = <T>(arr: T[]): T[] => {
    let uniqueValues: T[] = []

    arr.forEach(element => {
        if (!uniqueValues.includes(element)) {
            uniqueValues.push(element)
        }
    });
    return uniqueValues;
}
console.log('remove duplicate', removeDuplicates(someOngko))
console.log('remove duplicate', removeDuplicates(someBorno))



// Problem - 3 ==> Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string).

const sentence: string = "I love typescript . Typescript is interesting programing language. let's jump to typescript";
const word: string = "typescript";
const countWordOccurrences = (sentence: string, word: string): number => {

    const targetWord = new RegExp(`\\b${word}\\b`, "gi")
    const matchWord = sentence.match(targetWord)
    return matchWord ? matchWord.length : 0;
}

console.log("word count ", countWordOccurrences(sentence, word))



// Problem - 4 ==> Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type


type Circle = { shape: "circle"; radius: number };
type Rectangle = { shape: "rectangle"; width: number; height: number };
type Shape = Circle | Rectangle;

const circle: Circle = { shape: "circle", radius: 2 };
const rectangle: Rectangle = { shape: "rectangle", width: 5, height: 9 };

const calculateShapeArea = (shape: Shape): number => {
    if (shape.shape === "circle") {

        // Area of circle: π * radius^2
        const result = Math.PI * shape.radius ** 2;
        return result;

    } else if (shape.shape === "rectangle") {

        // Area of rectangle: width * height
        const result = shape.width * shape.height
        return result;

    }
    else {
        return 0
    }
}

const circleArea = calculateShapeArea(circle);
const rectangleArea = calculateShapeArea(rectangle);
console.log(circleArea, 'now ractangle', rectangleArea);



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
console.log(getProperty(person, "name"))



// Problem - 6 ==>  Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.


interface Profile {
    name: string;
    email: string;
    age: number
}

const myProfile: Profile = { name: "Alice", age: 25, email: "alice@example.com" };

// Partial make optional interface key value
const updateProfile = (profile: Profile, newProfile: Partial<Profile>): Profile => {
    return { ...profile, ...newProfile }
}

console.log(updateProfile(myProfile, { age: 26 }))



// Problem - 7 ==> Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year

class Car {
    make: string;
    model: string;
    year: number;

    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getCarAge(): number {
        const currentYear = new Date().getFullYear()
        return currentYear - this.year;
    }
}
const car = new Car("Honda", "Civic", 2018);
console.log(car.getCarAge());


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

console.log(validateKeys(person111, ["name"]));