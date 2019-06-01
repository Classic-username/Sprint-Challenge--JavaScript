// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function consume(arg1, arg2, cb){
  return cb(arg1, arg2);
};

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function add(num1, num2){
  return num1 + num2;
};

function multiply(num1, num2){
  return num1 * num2;
};

function greeting(fName, lName){
  return `Hello ${fName} ${lName}, nice to meet you!`;
};

/* Step 3: Check your work by un-commenting the following calls to consume(): */
console.log(consume(2,2,add)); // 4
console.log(consume(10,16,multiply)); // 160
console.log(consume("Mary","Poppins", greeting)); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 


const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// ## MY ANSWER ##
// nestedFunction can acces internal because nested function is within the myfunction scope. If nestedFunction had a variable within it, myFunction couldn't access it because myFunction is within global scope, but not within nestedFunction scope.
//Likewise if there was another function (anotherFunc) entirely with a variable inside, myFunction couldn't access the variable within anotherFunc, because myFunction isn't within that scope.