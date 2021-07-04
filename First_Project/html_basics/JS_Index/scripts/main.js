// Intro and Variables

console.log("Hello World!");
console.log("My name is Tom");

let x = 5;
let y;
y = 3;
let z = x + y;

console.log(`the value of x is ${x}`);

console.log("the value of y is " + y);

const MY_CONST = 7;

console.log("my const is " + MY_CONST);

console.log("the value z is " + z);

// Types

let myString = "This is a string value ";
let myOtherString = "and its pretty cool";

console.log(myString + myOtherString);

let myNumber = 100;

console.log(myNumber * myString);

// below are boolean values
// they can be true or false and nothing else
// they allign neatly with the state of a bit
// which is either 0 or 1

let myBoolean = true;
let myOtherBoolean = false;

// Variables can change content and type

let myVariable = "abc";
console.log(typeof myVariable);

myVariable = 1;
console.log(typeof myVariable);

//try to avoid mixing Types, like numbers and strings

let coercedVariable = 7 + 7 + 7;
console.log("the value of coercedVarible is " + coercedVariable);

coercedVariable = 7 + 7 + "7";
console.log("the value of coercedVarible is " + coercedVariable);

coercedVariable = "7" + 7 + 7;
console.log("the value of coercedVarible is " + coercedVariable);

// If + else statements, if + else if statements

let conditional = true;

if (conditional) {
  console.log("The conditional was true.");
} else {
  console.log("The conditional was false.");
}

let numberConditional = 2;

if (numberConditional === 5) {
  console.log("The number is equal to 5");
} else if (numberConditional > 3) {
  console.log("The number is at least bigger than 3");
} else if (numberConditional < 10) {
  console.log("The number is less than 10");
}

// Loops
// i++ is the same and saying i = i + 1

for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// challenge 3, 99 bottles code

for (let i = 99; i > 0; i--) {
  console.log(`${i} bottles of beer on the wall`);
}

// while loops

let whileLoopVariable = 0;

while (whileLoopVariable <= 10) {
  console.log(whileLoopVariable);
  whileLoopVariable = whileLoopVariable + 1;
}

// do-while loops

do {
  console.log("this will always print to the console.");
} while (false);

// break and continue

for (let i = 0; i < 10; i++) {
  console.log(i);
  if (i === 5) {
    break;
  }
}

for (let i = 0; i < 10; i++) {
  if (i === 3) {
    continue;
  }

  console.log(i);
  if (i === 5) {
    break;
  }
}

// switch statements

let switchVariable = 43;

switch (switchVariable) {
  case 1:
    console.log("The variable is set to 1.");
  case 44:
    console.log("The variable is set to 43.");
    default:
        console.log("No cases were matched.");
}



// Cups of coffee

let a = 1;

if (a < 3 ) {
console.log("Yes i'll take another cup of coffee.");
} else {
  console.log("I think i'm okay for now.");  
}

// Oil Change

let b = 1;

if (a > 500 ) {
  console.log("Yes I think I need an oil change.");
  } else {
    console.log("My car doesn't need an oil change yet.");  
  }



  let myArray = ["What is the meaning of life?", "The meaning of life is", 42];

  for (let i = 0; i<=myArray.length; i++)
  {
      console.log(myArray[i]);
  }


 for (var a=0; a<100; a++) {
  if (a === 0) {
    console.log( );
  }

 }


  for (var a=0; a<100; a++) {
    if (a === 0) {
            console.log(a +  " is even");
    }
    else if (x % 2 === 0) {
            console.log(a + " is even");   
    }
    else {
            console.log(a + " is odd");
    }
}