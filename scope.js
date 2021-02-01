// let as local scope
function sum(first, second){
    let result = first + second;
    return result;
}

const output = sum(3, 7);
// console.log(result); // not possible, out of let scope
console.log(output);

// -----------------------------

// let as global scope
let bonus = 20;
function sumof(third, forth){
    let result1 = third + forth + bonus ;
    console.log(bonus);
    if(result1 >  9){
        let mood = "happy";
        mood = "fishy";
        mood = "funky";
        mood = "cranky";
        console.log(mood);
    }
    //console.log(mood); // not possible, out of let scope
    return result1;
}

const output1 = sumof(3, 7);
//console.log(bonus); //  possible to access, inside the area of let scope
console.log(output1);