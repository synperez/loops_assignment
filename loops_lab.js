// ## Exercises

// ## Problem One 

// a. Write a `while` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1
// let num = 100;
// while ( num >= 1){
//     console.log(num);
//     num -= 1;
// }


// b. Write a `for` loop that takes the variable `num` and logs all the numbers, descending, between "num" and 1

// for (let num = 100; num >= 1; num -= 1){
//     console.log(num)
// }

// Example:

// ```js
// let num = 8

// // Your code here

// /* Logs:
// 8
// 7
// 6
// 5
// 4
// 3
// 2
// 1
// */
// ```

// ## Problem Two

// a. Write a `while` loop that takes the variable "max", and iterates over all numbers from 0 to "max". 
// For each iteration, it will check if the current number is even or odd, and log that to the screen (e.g. "2 is even")

// let max = 0;
// while ( max <= 10) {
//     if (max % 2 === 0){
//         console.log(max + " is even.");
//     } else {
//         console.log(max + " is odd.")
//     }
//     max += 1;
// }`

// b. Use a `for` loop instead


// for (max = 0; max <= 10; max += 1){
// if (max % 2 === 0){
//     console.log(max + " is even.");
// } else {
//     console.log(max + " is odd.")
// }
// }

// Example: 

// ```js
// let max = 3

// // Your code here

// /* Logs:
// "0 is even"
// "1 is odd"
// "2 is even"
// "3 is odd"
// */

// ```

// ## Problem Three

// a. Write a `while` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result 


// let x = 0;
// while ( x <= 10){
//     console.log( x + " * 9 = " + x * 9 );
//     x ++;
// }



// b. Use a `for` loop instead.


// for (let x = 0; x <= 10; x ++) {
//     console.log( x + " * 9 = " + x * 9 )
// }



// Example:

// ```js
// let x = 5

// // Your code here

// /* Logs:
// "0 * 9 = 0"
// "1 * 9 = 9"
// "2 * 9 = 18"
// "3 * 9 = 27"
// "4 * 9 = 36"
// "5 * 9 = 45"
// */
// ```


// Write a `while` loop and a `for` loop that takes the variable "x" and iterates over all numbers from 0 to "x". For each iteration of the loop, it will multiply the number of "x" by 9 and log the result (e.g. "2 * 9 = 18").


// ## Problem Four

// Write code that prints/logs all the numbers that end in a 5 from 1 to 100, **exclusive**.

// let x = 5
// while ( x <= 100) {
//     console.log(x)
// x += 10;
// }


// ## Problem Five

// Without running/executing your code, how many times will the loop below run? Explain why.

// ```js
// let i = 5;

// while (i > 3) {
//     i += 1
// }

// // Your explanation here
//nothing would print, there is no console.log. there is no ; at the end to stop the loop either

// ```

// ## Problem Six

// Write a loop that uses console.log to log all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, log "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), log "Buzz" instead.

// let x = 0
//     while (x <= 100) {
//         if (x % 3 == 0){
//             console.log("fizz")
//         }
//         else if (x % 5 == 0){
//             console.log("buzz")
//         } else {
//             console.log(x)
//         } x += 1;
//     }

// ## Problem Seven

// Modify your program to log "FizzBuzz", for numbers that are divisible by both 3 and 5 (still log "Fizz" or "Buzz" for numbers divisible by only one of those).

// let x = 0
//     while (x <= 100) {
//         if (x % 3 === 0 && x % 5 === 0){
//             console.log("fizzbuzz")
//         }
//         else if (x % 5 == 0){
//             console.log("buzz")
//         }else if (x % 3 == 0){
//             console.log("fizz")
//         }
//          else {
//             console.log(x)
//         } x += 1;
//     }


// ## Problem Eight

// Write a program that would log the [lyrics of the song 99 Bottles of Beer](http://www.99-bottles-of-beer.net/lyrics.html). This is the first verse of the song:

//   ```
//   99 bottles of beer on the wall, 99 bottles of beer.
//   Take one down, pass it around, 98 bottles of beer on the wall.
//   ```

// This verse is repeated, each time with one less bottle, until the number of bottles is 0. When the number of bottles is 2, the verse is:

//   ```
//   2 bottles of beer on the wall, 2 bottles of beer.
//   Take one down, pass it around, 1 bottle of beer on the wall.
//   ```

//   In the last line, the word bottles (plural), is  replaced with bottle (singular)

//   When the number of bottles is 1, the verse is:

//   ```
//   1 bottle of beer on the wall, 1 bottle of beer.
//   Take one down, pass it around, No more bottle of beer on the wall.
//   ```

// let x = 99;
//     while (x >= 2){
//      if (x >= 1){
//         console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
//         console.log("Take one down, pass it around, " + (x - 1) + " bottles of beer on the wall.");
//         x -= 1;
//     } else (x === 0)
//         console.log(x + " bottles of beer on the wall, " + x + " bottles of beer.");
//         console.log("Take one down, pass it around, " + "no more " + " bottle of beer on the wall.");
//     }



// ## Problem Nine

// Given an integer N draw a square of N x N asterisks. Look at the examples.

// Example 1:
// Input: `let N = 2`

// Output:
// ```js
// **
// **
// ```

// Example 2:
// Input: `let N = 3`

// Output:
// ```js
// ***
// ***
// ***
// ```

// <details>
//   <summary>
//     Hint 1 
//   </summary>
//   Try printing/logging a single line of * first.
// </details>

// <details>
//   <summary>
//     Hint 2
//   </summary>
//   You will need 2 loops for this.
// </details>

// let size = 50;
// let asterisks = "*";
// for (let x = 1; x <= size; x++){
//     console.log(asterisks.repeat(size));
// }

// ## Problem Ten

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// let sum = 0;
//     for (let num = 0; num <=1000; num++){
//         if (num % 3 === 0 || num % 5 === 0){
//             sum += num;

//         }
//     }console.log(sum)