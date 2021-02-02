const students = [
    {id: 29, name: "Smith"},
    {id: 10, name: "Tom Hancks"},
    {id: 28, name: "alex"}
];

// for (let i = 0; i < students.length; i++) {
//     const element = students[i]; 
//     const output = element.name;
//     console.log(output); 
// }

const names = students.map( s => s.name);
const ids = students.map( s => s.id);
const bigger = students.filter( s => s.id> 20);
console.log(names, ids, bigger);
