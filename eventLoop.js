console.log("Start");

setTimeout(function cb() {
  console.log("Callback");
}, 100);

console.log("End");

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then(function cbf(res) {
    console.log("Data", res);
  });
