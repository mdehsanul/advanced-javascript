const students =[
    {id: 14, name: 'jamal'},
    {id: 23, name: 'kamal'},
    {id: 56, name: 'rahim'},
    {id: 89, name: 'jamila'}
]

// const studentsName = [];
// for (let i = 0; i < students.length; i++) {
//     const names = students[i].name;
//     studentsName.push(names);
// }
// console.log(studentsName);

const names = students.map( s => s.name )
console.log(names);

const ids = students.map( s => s.id )
console.log(ids);

const studentsId_1 = students.filter( s => s.id > 40 )
console.log(studentsId_1);

const studentsId_2 = students.find( s => s.id > 40 )
console.log(studentsId_2);
