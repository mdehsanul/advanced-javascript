const num = [1, 2, 3, 4, 5, 6, 7, 8];

// slice() will make a copy of the array from given -> (starting_index, end_index - 1)
// no change in original array
const part = num.slice(2, 5);
console.log(part);
console.log(num);

// splice() will cut the array -> (starting_index, amountOf-number need to cut, numbers want to inject in array)
// change in original array
const removed = num.splice(2, 5, 66, 77, 88, 99);
console.log(removed);
console.log(num);

// join array value without gap
const together1 = num.join("");
console.log(together1);
console.log(num);

// join array value with gap
const together2 = num.join(" ");
console.log(together2);
console.log(num);

// join array value using ',' 
const together3 = num.join(",");
console.log(together3);
console.log(num);

// join array value using string
const together4 = num.join("ami");
console.log(together4);
console.log(num);
