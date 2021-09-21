// variable input that will be translated into whale talk, for example we use 'turpentine and turtles'
let input = 'turpentine and turtles';
// array equal to vowels
const vowels = ['a', 'e', 'i', 'o', 'u'];
// variable resultArray to serve as storage of vowels from input
let resultArray = [];
// loop to iterate through each letter of input variable, along with a commented out check that logs the iterator numbered posistion inside the for loop and counts the number of characters in input string.
// A nested for loop that iterates through vowels array each time outer loop runs is created which enables us to check each letter of input against all vowels elements during each iteration.
// whales double e's and u's in their language.
for (let i = 0; i < input.length; i ++) {
  // console.log('i is ' + i);
  for (let j = 0; j < vowels.length; j ++) {
    // console.log('j is ' + j);
    if (input[i] === vowels[j]) {
      resultArray.push(vowels[j]);
      if (input[i] === 'e' || input[i] === 'u') {
        resultArray.push(input[i]);
      }
    }
  }
}
//print to console, using join and uppercase to produce whale language - should print UUEEIEEAUUEE
console.log(resultArray.join('').toUpperCase());