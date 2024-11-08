## Why Type Guards are Important in TypeScript (With Examples)

### Introduction

TypeScript, an extension of JavaScript, helps us write safer code by providing static typing. This means we can specify what kind of values our variables should hold. However, when dealing with complex types like **unions** or **intersections**, TypeScript may not always know the specific type at runtime. This is where **type guards** come in.

Type guards are methods that allow us to **narrow down** the type of a variable, giving TypeScript more information about what kind of value it holds. This helps in avoiding type errors and writing more predictable code.

### Why Are Type Guards Necessary?

Consider a function that accepts a parameter which could be a **string** or **number**:

```typescript
function printLength(value: string | number) {
    console.log(value.length); // Error: Property 'length' does not exist on type 'number'.
}
```


### Built-In Type Guards

#### Using ```typeof``` 

The ```typeof``` operator is a ```built in``` JavaScript operator that returns the ```type of``` a variable as a string. It works well with primitive types like string, number, and boolean.