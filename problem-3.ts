
// Problem - 3 ==> Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string).

const sentence: string = "I love typescript . Typescript is interesting programing language. let's jump to typescript";
const word: string = "typescript";
const countWordOccurrences = (sentence: string, word: string): number => {

    const targetWord = new RegExp(`\\b${word}\\b`, "gi")
    const matchWord = sentence.match(targetWord)
    return matchWord ? matchWord.length : 0;
}

countWordOccurrences(sentence, word)