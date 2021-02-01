// normal-way
const numbers = [3, 4, 5, 6, 7, 8];
const output = [];
for (let i = 0; i < numbers .length; i++) {
    const element = numbers[i];
    result = element * element;
    output.push(result);
}

console.log(output);

// ------------------------------------

// map() syntax
const num1 = [3, 4, 5, 6, 7, 8];
num1.map(function(element, index, array){
    console.log(element, index, array);
})

// use of map()
const num2 = [3, 4, 5, 6, 7, 8];
const result1 = num2.map(function(element){
    return element * element;
})

console.log(result1);

// use of map() in short-way
const num3 = [3, 4, 5, 6, 7, 8];
const result2 = num2.map(x => x * x)
console.log(result2);

// map ar bhai-brother -> filter()
// filter() -> use for select element from an array using condition
const bigger = [3, 4, 5, 6, 7, 8];
const result3 = bigger.filter(x => x > 5)
console.log(result3);

// find()
const isThere = [3, 4, 5, 6, 7, 8];
const result4 = isThere.find(x => x > 5)
console.log(result4);