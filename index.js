



function a(){
    var v = 56
    function b() {
        var a = 7;
        function c() {
          var b = 76;
          function d() {
            console.log(a, b,v);
          }
          d();
        }
        c();
      }
      b()
}
a();

// function x(){
//     // for(let i =1; i<=5; i++){
//     //     setTimeout(function(){
//     //         console.log(i)
//     //     },i * 1000)
//     // }

//     for(var i =1; i<=5; i++){
//        function close(i){
//         setTimeout(function(){
//             console.log(i)
//         },i * 1000)
//        }
//        close(i)       
//     }

//     console.log("Welcome to JS world!")
  
// }
// x();