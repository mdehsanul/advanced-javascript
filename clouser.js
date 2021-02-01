function stopWath(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWath();
// console.log(clock1);
console.log(clock1());
console.log(clock1());
console.log(clock1());
console.log(clock1());

const clock2 = stopWath();
// console.log(clock2);
console.log(clock2());
console.log(clock2());

console.log(clock1());

console.log(clock2());