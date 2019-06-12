
// return an exact copy of a given array
function one(ar) {
    return ar.slice(0);
}

// return the first 3 elements of the array
function two(ar) {
    return ar.slice(0,3)
}

// return the last element of an array
function three(ar) {
    return ar.slice(-1)
    //return ar.slice(ar.length-1)
}

// return the first two, and the last two elements
function four(ar) {
    return ar.slice(0,2).concat(ar.slice(-2))
    //return ar.slice(0,2) + ',' + (ar.slice(-2))
}

// replace the first letter of word2 with the first letter of word1
function five(word1, word2) {
    return word1.slice(0,1) + word2.slice(1)
}

// return the the middle letter of w1, the first letter of w2, and the second to last letter of w3
function six(w1,w2,w3) {
    return w1.slice(Math.floor(w1.length / 2), Math.floor(w1.length / 2) + 1) + w2.slice(0,1) + w3.slice(-1);   
}