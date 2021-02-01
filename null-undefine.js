// null
let number2 = null;
console.log(number2);

// undefine
// 7/8 way we can get undefine

// step -1 (solution: define value for the variable)
let pakhi; 
console.log(pakhi);

// ----------------------------------
// step -2 (solution: use return with value)
function addNumber(num1, num2){
    console.log(num1 + num2);
}

const result1 = addNumber(13, 82)
console.log(result1);

// ----------------------------------
// step -3 (solution: use return with value)
function addNumber(num1, num2){
    console.log(num1 + num2);
    return
}

const result2 = addNumber(13, 82)
console.log(result2);

// ----------------------------------
// step -4 (solution: set parameter(num2) value or use 'default parameter' -> 'num2=20')
function addNumber(num1, num2){
    console.log(num1, num2);
}

const result3 = addNumber(13)
console.log(result3);

// -----------------------------------
// step -5 (solution: set the value for key 'address')
const person ={
    name: 'shaown',
    phone: 458421
}

console.log(person.address);

// -----------------------------------
// step -6 (solution: don not use reserve word 'undefined')
let fun = undefined;
console.log(fun);
//  ----------------------------------
// step -7
let ages =  [2, 5, 9];
console.log(ages[11]);

