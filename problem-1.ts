
// Problem - 1 ==>  Write a TypeScript function sumArray that accepts an array of numbers


const ongko: number[] = [1, 2, 3, 4, 5, 6]
const sumArray = (arr: number[]): number => {
    return arr.reduce((acc, total) => acc + total, 0)
}
sumArray(ongko)