// 1) Rewrite the Problem in Your Own Words:
// I have an array of numbers and a target number. I need to create a function that will check if there are two numbers in the array that add up to equal the target number. The arguments of the function will be the array and the target number.

// 2) Write Your Own Test Cases:
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([4,6,8,2,4], 14));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,1,1,1], 10));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1,1,1,1], -5));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1], 3));
}
module.exports = hasTargetSum;

// 3) Pseudocode:
// The input is an array of numbers and a target number.
// For each element of the array except the last, add it to every single other element and see if the sum equals to the target value.

// 4) Code and Algorithm:
// function hasTargetSum(array, target) {

// // Iterate through the array for every element except the last.
//   for (let i= 0; i< array.length-1; i++) {
//     // In that iteration, iterate through every element of the array that comes after the element in the previous iteration.
//     for (let j= i+ 1;  j< array.length; j++) {
//       // If the element in first iteration and the element in the second iteration added up to equal the target returns true, end the loop and return true. Otherwise keep looping.
//       if (array[i] + array[j] === target) {
//         return true;
//       }
//     }
//     // And then continue iterating through the outer iteration.
//   }
//   // If nothing adds up, return false.
//   return false
// }

// 5) Make It Clean and Readable:

function hasTargetSum(array, target) {

  // Iterate through the array for every element except the last.
    for (let i= 0; i< array.length-1; i++) {
      // Iterate through every element of the array that comes after the element in the previous iteration.
      for (let j= i+ 1;  j< array.length; j++) {
        // If the element in first iteration and the element in the second iteration added up to equal the target returns true, end the loop and return true. Otherwise keep looping.
        if (array[i] + array[j] === target) {
          return true;
        }
      }
      // If none return true from the first loop, continue iterating through the outer iteration.
    }
    // If nothing adds up, return false.
    return false
  }

// 6) Optimize:
// Don't know how.

// 7) Add written explanation of your solution here:
// Each element of the array is added to every element after that, respectively. If any of these sums are equal to the target, the function returns true. Otherwise, it returns false.

// 8) Write the Big O time complexity of your function here:
// O(n^2)