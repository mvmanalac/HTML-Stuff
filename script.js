// // Pre-Class Assignment
// // Section 1 ****
// // Given a string of characters as input, write a function that returns it with the characters reversed.

// const reverseString = (string) => {
//     // reverse the string in here
//     let result = '';

//     for (let character of string) {
//         console.log(character);
//         result = character + result;

//         // 'h' + ''
//         // 'e' + 'h'
//     }

//     // return the reversed string
//     return result;
// }

// const myReversedString = reverseString('hello');

// console.log(myReversedString);

// Section 2 ****

// const reverseString = (string) => {
//     return string.split('').reverse().join('');

// }

// const myReversedString = reverseString('hello');

// console.log(myReversedString);

// Section 3 **** (Same as Section 2, but advanced)

const reverseString = (string) => {
    const splitStringArray = string.split();
    const reverserdArray = splitStringArray.reverse();

    return string.split('').reverse();
}

const myReversedString = reverseString('hello');

console.log(myReversedString);

// Section 4 - HTML
