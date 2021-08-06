//What is callback function in javaScript
setTimeout(function () {
  console.log("timer");
}, 5000);

function x(y) {
  console.log("x");
  y();
}

x(function y() {
  console.log("y");
});

function attEventListner() {
  let count = 0;
  document.getElementById("clickMe")
  .addEventListener("click", function xyz() {
    console.log("Clicked", ++count);
  });
}
attEventListner()
// Blocking the main thread javascript

//Power of callback

//Deep about event listner

//
