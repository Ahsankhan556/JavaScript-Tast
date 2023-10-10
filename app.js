//? chapter no 
// Q no 1

// var date = new Date();
// var day = date.getDay();
// console.log(date);

//   ? Q no 2

// var FarstName = prompt("FarstName");
// var LastName  = prompt("LastName");
// var result   =  (FarstName+LastName);
// alert(result);

//? Q no 3

// function twonumber(){
// var number1 = parseFloat(prompt("Enter First number"))
// var number2 = parseFloat(prompt("Enter Second number"))
// var sum = number1+number2;
// return sum;
// }
// var result = twonumber();
// document.write("the same number of two number "+result);

                                      //   ?Q no 4


// function calculate(num1, num2, operator) {
//     var result;

//     switch (operator) {
//         case '+':
//             result = num1 + num2;
//             break;
//         case '-':
//             result = num1 - num2;
//             break;
//         case '*':
//             result = num1 * num2;
//             break;
//         case '/':
//             if (num2 === 0) {
//                 result = "Cannot divide by zero";
//             } else {
//                 result = num1 / num2;
//             }
//             break;
//         default:
//             result = "Invalid operator";
//     }

//     return result;
// }



                            //    ? Q no 5

// function square(number) {
// return number * number;
// }

// var inputNumber = 5;
// var squared = square(inputNumber);
// console.log("The square of " + inputNumber + " is " + squared);
                              

                       //? Q no 6
                       
// function square(number) {
// return number * number;
// }
                      
// var result = square(5);
// console.log(result); 


                    //    ? Q no 7

// ????????????????????????????? 
                      

                  // ? Q no 8 
                  
                  
// function calculateHypotenuse(base, perpendicular) {
//   function calculateSquare(number) {
//     return number * number;
//   }
                  
//   const baseSquare = calculateSquare(base);
//   const perpendicularSquare = calculateSquare(perpendicular);
                  
//   const hypotenuseSquare = baseSquare + perpendicularSquare;
                  
//   const hypotenuse = Math.sqrt(hypotenuseSquare);
                  
//   return hypotenuse;
// }
                  
// const base = 3;
// const perpendicular = 4;
// const hypotenuse = calculateHypotenuse(base, perpendicular);
// document.write("Hypotenuse:", hypotenuse); // This will output 5 (for a 3-4-5 right triangle)




                      //  Q no 9


// function calculateRectangleArea(width, height) {
// if (width <= 0 || height <= 0) {
// return "Width and height must be positive values.";
// }
// return width * height;
// }
                      
// var area1 = calculateRectangleArea(5, 10);
// document.write("Area (Arguments as Values): " + area1);
                      
                      

                        //   Q no 10



// ?????????????????????????



                    //   Qno 11



// function capitalizeWords(str) {
// var words = str.split(' ');
// var capitalizedWords = words.map(word => {
// if (word.length > 0) {
// return word.charAt(0).toUpperCase() + word.slice(1);
// } else {
// return '';
// }
// });
                      
// var result = capitalizedWords.join(' ');

// return result;
// }
// var inputString = 'the quick brown fox';
// var outputString = capitalizeWords(inputString);
// document.write(outputString);
                      

                                // ?Q no 12


// function findLongestWord(str) {
// var words = str.split(' ');
// var longestWord = '';
// var longestLength = 0;
// for (const word of words) {
// var wordLength = word.length;
// if (wordLength > longestLength) {
// longestWord = word;
// longestLength = wordLength;
// }
// }
// return longestWord;
// }
// var inputString = 'Web Development Tutorial';
// var longestWord = findLongestWord(inputString);
// document.write(longestWord); 
                                  



                            //  ? Q no 13


// function countOccurrences(str, letter) {
// str = str.toLowerCase();
// letter = letter.toLowerCase();
                              
// var count = 0;
                              
// for (let i = 0; i < str.length; i++) {
// if (str[i] === letter) {
// count++;
// }
// }

// return count;
// }
                              
// var inputString = 'JSResourceS.com';
// var letterToCount = 'o';
// var occurrences = countOccurrences(inputString, letterToCount);
// document.write(`The letter "${letterToCount}" appears ${occurrences} times in the string.`);
                              





                            //? Qno 14





                            