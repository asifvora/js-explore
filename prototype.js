
// const data = [
//   {
//     name: "Asif",
//     age: 21,
//   },
//   {
//     name: "Rehan",
//     age: 29,
//   },
//   {
//     name: "Zehn",
//     age: 26,
//   },
//   {
//     name: "Ryan",
//     age: 22,
//   },
// ];

// console.log(data);

// Array.prototype.addIds = function () {
//   return this.map((item, index) => {
//     return {
//       id: index + 1,
//       ...item,
//     };
//   });
// };

// Array.prototype.removeIds = function () {
//   return this.map((item) => {
//     delete item["id"];
//     return item;
//   });
// };

// console.log(data.addIds());
// console.log(data.removeIds());

const items = [1, 2, 3, [5, 5], [[8, 9]], [99], 125];

Array.prototype.flatArray = function () {
  return this.reduce((arrayData, element) => {
    if (Array.isArray(element)) {
      arrayData = [...arrayData, ...element.flatArray()];
    } else {
      arrayData = [...arrayData, element];
    }
    return arrayData;
  }, []);
};

console.log(items.flatArray());