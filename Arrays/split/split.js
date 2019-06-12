///  MDN  ///
/*
The split() method splits a String object into an array of strings by 
separating the string into substrings, using a specified separator string 
to determine where to make each split.

syntax : string.split('')
*/

// split the string so that every character is a single element in an array
function one(str){
    // code here
}
console.log(one('sample'))// ['s','a','m','p','l','e'] 


// split the string so that every word is a single element in an array
function two(str){
    // code here
}
console.log(two('lambda code school'))// ['lambda', 'code', 'school']



// use split to remove all dashes and then join the array back into a string
function three(str){
    // code here
}
console.log(three('full-stack-web-developer'))// full stack web developer


// split the following string on every capital letter
    function four(str){
        return str.split(/[A-Z]/).join(' ');
    }
    console.log(four('TtheMmeaningOofLlife'))// the meaning of life



// remove all special characters
    function four(str){
        return str.split(/[^A-Za-z0-9]/).join(' ');
    }
    console.log(four('tcR- j_ji;{}"?/St.,'))// tcR J Ji St
