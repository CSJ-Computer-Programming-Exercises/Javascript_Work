/*
Declare a variable `myString` and assign it a string value of your choice.
b. Calculate the length of `myString` and store it in a variable called `stringLength`.
c. Declare two variables, `num1` and `num2`, and assign them numerical values.
d. Calculate the remainder of `num1` divided by `num2` and store it in a variable
called `remainder`.
e. Use string interpolation to create a message that includes `myString` and
`stringLength`. Log this message to the console.
f. Determine if `num1` is an even number using a boolean variable called `isEven`.
Log a message to the console indicating whether `num1` is even or not.
g. Generate a random integer between 1 and 100 (inclusive) and store it in a
variable called `randomNum`.
h. Use an assignment operator to update the value of `num1` by adding 7 to it.
i. Change the value of `myString` to `null`.
j. After completing the coding tasks, add appropriate single-line and multi-line
comments to explain your code at various points. Make sure to include
comments that describe the purpose of variables, calculations, and any
important logic.
k. Run your JavaScript code and verify that it produces the expected output in the
console.
*/

var myString = "Hello World";
var stringLength = myString.length;
var num1 = 1;
var num2 = 2;
var remainder = num1 /= num2;
//generates a statement with the previous vars
console.log(myString + ' I am Luca, Hello world is ' + stringLength + ' letters long');
//checks if num1 is even
const isEven =  num1 % 2 === 0;
//logs to console to check
console.log('The ' + num1 + ' is even: ' + isEven);
//generates a random number in between 1 and 100, .floor rounds it down
var randomNum = Math.floor(Math.random() * 100);
//overrides previous one, no need to add var
num1 += 7;
myString = null;
//loads it all into console to see if it worked
console.log(myString + ' overrided ' + randomNum + ' is a number ' + num1 + ' has been added seven');