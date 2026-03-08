1️⃣ What is the difference between var, let, and const?
Ans:


var=> var is a function scope variable, same variable will be redeclare, and there also one thing if we use var in our code in line number 100 but we can use in any where bacause it is hosting type

let=> let is block scope variable, same variable not be redeclare but we can reassign it && also in our code in line number 5 we can't use it before 5 like line number (1,2,3,4)it is not hosting type

const=> const is block scope variable,same variable not be redeclare and reassign also in declare must contain a value... also in our code in line number 5 we can't use it before 5 like line number (1,2,3,4)it is not hosting type




2️⃣ What is the spread operator (...)?

ans:
The spread operator (...) is :-- it use for fully copy array or object's value, if we declare a variable it container like 4; and want to copy this value in other variable then case we use this (...) , ir we not use it or wright let b = a;  and then something do with variable b , then value of a will change also because they are like linked with other if we change one veriable we it will change other value too.. that's way we use spread operator , a variable value if daclare by spread operator then it will not change on other any variable..




3️⃣ What is the difference between map(), filter(), and forEach()?

ans: 
map()=> it return a new array and apply a function on every element of array

filter()=> it return a new array that will pass the condition state , like we have a array let arr = [1,2,3,4,5,6] and use on it let newArr arr.filter(item=> item%2 === 0 ); the newArr variable have the new array of that element that passed the condition and have a new array , the array is will be [2,4,6]




4️⃣ What is an arrow function?


ans: 
arrow function a shortcut to write a function and a profetional way, it's from ES6.
syntex: 
const functionName = () => {
    // code here
}



5️⃣ What are template literals?

ans:
template literals is use full and shortcut way to write a string ,
we can easyly diploy a variable and any function on useing it ..
${} under of this we can use out variable and function in name:bactic (` `);
