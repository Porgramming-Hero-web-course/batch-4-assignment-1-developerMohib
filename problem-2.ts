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
removeDuplicates(someOngko)
removeDuplicates(someBorno)
