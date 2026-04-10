1️⃣ What is the difference between var, let, and const?
Ans:

var => var is a function scope variable. Same variable can be redeclared. Also, if we use var in our code at line number 100, we can use it anywhere because it is hoisted.

let => let is a block scope variable. Same variable cannot be redeclared, but it can be reassigned. Also, in our code at line number 5, we can't use it before line 5 (lines 1,2,3,4). It is not hoisted in the same way.

const => const is a block scope variable. Same variable cannot be redeclared or reassigned. Also, it must contain a value during declaration. In our code at line number 5, we can't use it before line 5 (lines 1,2,3,4). It is not hoisted in the same way.

2️⃣ What is the spread operator (...)?

Ans:
The spread operator (...) is used to fully copy arrays or objects. If we declare a variable that contains a value (like 4) and want to copy this value into another variable, we use (...). If we do not use it and write let b = a;, then if we change variable b, the value of a will also change because they are linked. If we use the spread operator, the copied value will not affect the original variable.

3️⃣ What is the difference between map(), filter(), and forEach()?

Ans:
map() => It returns a new array and applies a function on every element of the array.

filter() => It returns a new array with elements that pass a condition. For example, if we have an array let arr = [1,2,3,4,5,6] and use let newArr = arr.filter(item => item % 2 === 0);, the new array will be [2,4,6].

forEach() => It executes a function on each element but does not return a new array.

4️⃣ What is an arrow function?

Ans:
Arrow function is a shortcut way to write a function and a modern (ES6) way.

Syntax:
const functionName = () => {
// code here
}

5️⃣ What are template literals?

Ans:
Template literals are a useful and shortcut way to write strings.
We can easily use variables and functions inside them using ${} inside backticks ( ).