let name = {
  firstname: "Asif",
  lastname: "vora",
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
};

console.log(name.fullName());

let fullName = function (city) {
  return this.firstname + " " + this.lastname + " " + city;
};

let name2 = {
  firstname: "Rehan",
  lastname: "Khan",
};

// call : function borrowing
console.log(name.fullName.call(name2));
console.log(fullName.call(name2, "Ahemedabad")); // pass multiple values by (,) coma seprator

// apply
console.log(fullName.apply(name2, ["Ahemedabad"])); // pass multiple values in array fromat

// bind
let printMyName = fullName.bind(name2, "Ahemedabad") // it's give a copy and invoking later
console.log(printMyName)
console.log(printMyName())