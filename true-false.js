// falsy -> 0, '', undefine, null, NaN, false
// truthy -> '0', ' ', [], {}, 'false'

//true
const age1 = 4;
if(age1){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

//false
const age2 = 0;
if(age2){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// -------------------------------------

// true
const name1 = 'solaiman';
if(name1){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// false
const name2 = '';
if(name2){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// true
const name3 = '0';
if(name3){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}


// ----------------------------------------

// undefine
// false
let number1;
console.log(number1);
if(number1){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}
 
// ----------------------------------------

// null
// false
let number2 = null;
console.log(number2);
if(number2){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// -----------------------------------------

// NaN
// false
let number3 = NaN;
console.log(number3);
if(number3){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// ---------------------------------------

// array
// true
let array = [];
console.log(array);
if(array){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}

// -----------------------------------------

// object
// true
let object = {};
console.log(object);
if(object){
    console.log('condition is  true');
}
else{
    console.log("condition is false");
}
