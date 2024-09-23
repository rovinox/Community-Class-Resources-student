// 1. learn If statements
// https://www.youtube.com/watch?v=PgUXiprlg1k&t=421s&ab_channel=BroCode

// 2. learn about for loop
//  https://www.youtube.com/watch?v=ZOQYIWLngSU&ab_channel=BroCode

//3. learn advanced  way to work with array
// https://www.youtube.com/watch?v=cDCzz8vJf3Y&ab_channel=EnvatoTuts%2B

// write you code here


// Write a JavaScript function to check whether an `input` is an array or not.
// Test Data :
// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));
// false
// true

// const is_array = (input) =>{
//     if (toString.call(input) === "[object Array]"){

//         return true
//     }else {
//         return false
//     }
// }

// console.log(is_array('w3resource'));
// console.log(is_array([1, 2, 4, 0]));


// Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
;

// const first = (n) =>{
// return n[0]
// }

// console.log(first([7, 9, 0, -2]));
// console.log(first([[],3]));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));



// const is_array1 = ['a', 'b', 'c', 'd', 'e',]
// console.log("is_array1", is_array1[4]);
// console.log('is_array1', is_array1[is_array1.length- 1]);
// const is_array2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g','h' ,'i', 'j']
// console.log("is_array2", is_array2[is_array2.length - 1]);
// console.log('is_array2', is_array2.length - 1);







// Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// const last = (n) =>{
//     return n[n.length - 1];
// }
// console.log(last([7, 9, 0, 5,6921]));
// console.log(last([7,5,5,5, 9, 0, -2]));
// console.log(last([7,5,5,5,55,9, 0, 10]));

// Expected Output :
// 6921
// -2
// 10


// Write a simple JavaScript program to join all elements of the following array into a string.
// Sample array : myColor = ["Red", "Green", "White", "Black"];
// Expected Output :
// "Red,Green,White,Black"
//const myColor = ["Red", "Green", "White", "Black"];

// Using the toString method to convert the array to a string
//console.log(myColor.toString());

// Using the default join method to concatenate array elements into a string separated by commas
//console.log(myColor.join());

// Using the join method with a custom separator ('+') to concatenate array elements into a string
///console.log(myColor.join('.'));
//  Write a JavaScript program to compute the sum of an array of integers

const my_array = [[1,23],[19,23,66,565], [15,23], [44,23,45], [51,23]]




for (let i = 0; i < my_array.length; i++){
    console.log(my_array[i]);
    for (let j = 0; j < my_array[i][j].length; i++){
        console.log(my_array[i][j]);
        
    }

}


const arr = [1,2,3]
for (let i of arr) {
  console.log(i);
}
