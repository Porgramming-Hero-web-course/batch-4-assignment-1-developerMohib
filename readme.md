## Why Type Guards are Important in TypeScript (With Examples)

### Introduction

TypeScript, an extension of JavaScript, helps us write safer code by providing static typing. This means we can specify what kind of values our variables should hold. However, when dealing with complex types like **unions** or **intersections**, TypeScript may not always know the specific type at runtime. This is where **type guards** come in.

type safety is paramount. However, there are situations where the TypeScript compiler needs a little help in understanding the types we're working with. This is where Type Guards come into play. Let's dive into why they're necessary and explore various types of Type Guards along with their use cases.

Type guards are methods that allow us to **narrow down** the type of a variable, giving TypeScript more information about what kind of value it holds. This helps in avoiding type errors and writing more predictable code.

### Why Are Type Guards Necessary?

- Runtime Type Checking: While TypeScript provides compile-time type checking, Type Guards allow us to perform type checks at runtime.
- Narrowing Types: They help narrow down union types to more specific types, enabling safer and more precise code.
- Improved Code Readability: Type Guards make code more self-documenting and easier to understand.
- Enhanced IDE Support: They provide better autocompletion and IntelliSense in IDEs.

Consider a function that accepts a parameter which could be a **string** or **number**:

```typescript
function printLength(value: string | number) {
    console.log(value.length); // Error: Property 'length' does not exist on type 'number'.
}
```


### Built-In Type Guards

#### Using ```typeof``` 

The ```typeof``` operator is a ```built in``` JavaScript operator that returns the ```type of``` a variable as a string. It works well with primitive types like ```string```, ```number```, and ```boolean```.
the ```typeof`` check helps TypeScript understand the specific type of value inside each branch, allowing us to safely access the length property of the string.
```
function printLength(value: string | number) {
    if (typeof value === "string") {
        console.log(`Length of string: ${value.length}`);
    } else {
        console.log(`Value is a number: ${value}`);
    }
}

printLength("Hello"); // Output: Length of string: 5
printLength(42);      // Output: Value is a number: 42
```


### Using ```instanceof```
The ```instanceof``` operator checks whether an object is an instance of a specific class. This is useful when working with objects created from classes.

```
class Dog {
    bark() {
        console.log("Woof!");
    }
}

class Cat {
    meow() {
        console.log("Meow!");
    }
}

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();
    } else if (animal instanceof Cat) {
        animal.meow();
    }
}

const dog = new Dog();
const cat = new Cat();

makeSound(dog); // Output: Woof!
makeSound(cat); // Output: Meow!

```

In this example, ```instanceof``` helps TypeScript determine whether ```animal``` is an instance of ```Dog``` or ```Cat```, allowing us to call the appropriate method.


### Using ```in``` Operator

The ```in``` operator checks if a property exists on an object. This can be useful when dealing with interfaces or objects with different properties.

```
interface Car {
    make: string;
    model: string;
}

interface Bike {
    brand: string;
    type: string;
}

function printVehicleInfo(vehicle: Car | Bike) {
    if ("make" in vehicle) {
        console.log(`Car: ${vehicle.make} ${vehicle.model}`);
    } else {
        console.log(`Bike: ${vehicle.brand} ${vehicle.type}`);
    }
}

const myCar: Car = { make: "Honda", model: "Civic" };
const myBike: Bike = { brand: "Yamaha", type: "Sport" };

printVehicleInfo(myCar);  // Output: Car: Honda Civic
printVehicleInfo(myBike); // Output: Bike: Yamaha Sport

```

Here, the ```in``` operator is used to check if the ```make``` property exists on the ```vehicle```. This helps TypeScript narrow down the type of ```vehicle``` to either ```Car``` or ```Bike```.


### Custom Type Guards 

Custom type guards are user-defined functions that return a type predicate. This tells TypeScript what type a value is if the function returns ```true```.

```
interface Fish {
    swim: () => void;
}

interface Bird {
    fly: () => void;
}

function isFish(animal: Fish | Bird): animal is Fish {
    return (animal as Fish).swim !== undefined;
}

function move(animal: Fish | Bird) {
    if (isFish(animal)) {
        animal.swim();
    } else {
        animal.fly();
    }
}

const fish: Fish = { swim: () => console.log("Swimming...") };
const bird: Bird = { fly: () => console.log("Flying...") };

move(fish); // Output: Swimming...
move(bird); // Output: Flying...

```

### Use Cases of Type Guards 
- Working with Union Types : Type guards help handle different types in a union, ensuring type safety.

- Refining Types: Type guards refine the type of a variable, allowing TypeScript to provide better autocomplete suggestions and error checking.

- Avoiding Runtime Errors: By narrowing down the type, type guards help prevent runtime errors that occur due to accessing properties or methods on the wrong type.