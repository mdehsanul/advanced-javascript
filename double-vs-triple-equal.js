// double equal (==) : only check the value. 
// triple equal (===) : check the value as well as the type of the value. 

// double equal (==)
// true
const num1 = 2;
const num2 = 2;
if(num1 == num2){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// double equal (==)
// true
const num3 = 2;
const num4 = "2";
if(num3 == num4){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// double equal (==)
// false
const num5 = 2;
const num6 = true;
if(num5 == num6){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// double equal (==)
// true
const num7 = 1;
const num8 = true;
if(num7 == num8){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// double equal (==)
// false
const num9 = 0;
const num10 = true;
if( num9  == num10){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// double equal (==)
// true
const num11 = 0;
const num12 = false;
if(num11 == num12){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}


// ------------------------------------

// triple equal (===) 
// false
const first = 2;
const second = "2";
if(first === second){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}

// triple equal (===) 
// false
const third = 0;
const fourth = false;
if(third === fourth){
    console.log("condition is true");
}
else{
    console.log("condition is false"); 
}