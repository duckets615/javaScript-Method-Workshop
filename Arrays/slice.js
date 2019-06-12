/*

////    MDN    ////

The slice() method returns a shallow copy of a portion of an array into a new array 
object selected from begin to end (end not included). The original array will not be modified.

Parameters:
arr.slice(start, end);

slice parameters are inclusive for start, and exclusive for end
-this means slice(0,5) will include idx[0], but will end at idx[4], 5 will be excluded

if only one param given, slice will copy every element after
- slice(0) will copy the first element and everything afer it
- slice (3) will copy the third element and everything after it

negative indexes can be used to copy from the end of an array

- slice(-1) will copy the last element of an array
- slice (-2) will copy the last two elements of an array and so forth 

**IMPORTANT** when working with array variables remember that array variables only reference the original array references,
              not the values themselves. This means when you change an array variable, you change the original array.
              ex. if array1 = [1,2,3]  and  array2 = array1.splice(0,1), then array1 will now = [2,3];
              using slice, you create a new array identical to array1, and can now work on array2 without array1 being affected
              array1 = [1,2,3],  array2 = array1.slice(0).splice(0,1), array1 will now remain unchanged array1 = [1,2,3]
*/


// SLICE PROBLEM SET

ar1 = [1,2,3,4,5]
ar2 = [10,11,12,13,14]
ar3 = ['a','b','c','d','e']
ar4 = ['lambda', 'coding', 'school']

// return an exact copy of a given array
function one(ar) {
    // code here
    return ar.slice(0);
}
console.log(one(ar1)) // [1,2,3,4,5]



// return the first 3 elements of the array
function two(ar) {
    // code here
    return ar.slice(0,3)
}
console.log(two(ar1)) // [1,2,3]



// return the last element of an array
function three(ar) {
    // code here
    return ar.slice(-1)
    //return ar.slice(ar.length-1)
}
console.log(three(ar1)) // [5]



// return the first two, and the last two
function four(ar) {
    // code here
    return ar.slice(0,2).concat(ar.slice(-2))
    //return ar.slice(0,2) + ',' + (ar.slice(-2))
}
console.log(four(ar3)) // ['a','b','d','e']



// replace the first letter of word2 with the first letter of word1
function five(word1, word2) {
    // code here
    return word1.slice(0,1) + word2.slice(1)
}
console.log(five('cat', 'zomputer')) // computer



// return the the middle letter of w1, the first letter of w2, and the second to last letter of w3
function six(w1,w2,w3) {
    // code here
    return w1.slice(Math.floor(w1.length / 2), Math.floor(w1.length / 2) + 1) + w2.slice(0,1) + w3.slice(-1);   
}
console.log(six('website', 'code', 'school')) // scl


