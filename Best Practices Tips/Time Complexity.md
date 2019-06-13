# Time Complexity

### Here you will find tips from various contributors, articles and such to help
### write better, more efficient code. Every last byte of memory, every millisecond
### matter. Here you'll find some tips to keep your runtime as fast as possible


## The for loop .length problem

One of the most common iteration methods also has a sort of secret downside to its implementation.
Whether you've been coding for 3 weeks or 3 years, everyone is familiary wit the for loop syntax
Want to loop through every element of an array? easy:  for (let i = 0; i < array.length; i++).
Lets start with 0; we'll incriment i after every loop and then stop once i is no longer less than 
the length of the array.

But under the hood, this syntax violates one of the biggest principles of coding... DRY! DON'T REPEAT YOURSELF!.
When your code running, length of the whatever your looping over is re calculated after every iteration
This means it has to go into the memory, go though the whole data block your working on and run through
it's length, then compare it to i, if i === false, incriment i and then go through the whole process again. 
The time and memory expended for the calculation is miniscule. For your basic coding challenges or 
small websites you'd never be able to tell the difference. But what if you need to loop through
an data type containing a few thousand entries? With every iteration, that miniscule time complexity and
memory usage is increasing expodentially. Multiplied by that by a few thousand times and your looking
at a pretty significant delay.

Luckily theres an easy fix to optimize the code. Simply find the length pre-loop and assign it a variable.
------------------------------------------------
let length = array.length;

for (let i = 0; i < length; i++)
------------------------------------------------
or you can declare it inside the loop syntax along with i:

for (let i = 0, length = array.length; i < length; i++)
------------------------------------------------

Now were comparing one static variable to another static variable, a far more faster and efficient operation.
Our code is now just that bit more optimized then it was before 

