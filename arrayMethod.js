// map, filter & reduce
const arr = [5, 3, 4, 8, 7];

function double(x) {
  return x * 2;
}

const output = arr.map(double);

console.log(output);

const users = [
  { firstName: "Alok", lastName: "Raj", age: 23 },
  { firstName: "Ashish", lastName: "Kumar", age: 65 },
  { firstName: "Ankit", lastName: "Roy", age: 29 },
  { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
];

// const op = users.reduce((acc, curr) => {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

const op = users.reduce((acc, curr) => {
    if (curr.age < 30) {
        acc = [...acc, curr.firstName];
    } 
    return acc;
  }, []);

console.log(op);
