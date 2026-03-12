

// function greet(name) {
//     return "Hello " + name;
// }

// function processUser(callback) {
//     return callback("Rajveer");
// }

// console.log(processUser(greet));


// function m1(){
//     console.log("m1 is executed");
    
// }
// // let a=m1;
// //  console.log(a()); // m1 is executed  //  undefined
//  let a=m1();
//  console.log(a);



//  function m1(name){
//     console.log("m1 is executed");
//     return "hello"+name;
    
// }


// function m2(
// a){
//     let name ="rahul";
//     return a(name);
// }
// let b=m2(m1);
//  console.log(b); //now b is a string
//  //b is not afunction
// //  m2 is high ordered function becoz it accept m1 as acallback function




// function add(a){
//     return function inner(b){
//         return a+b;
//     }
// }
// // console.log(add); // [Function: add]
// // console.log(add()); //[Function: inner]

// const a1 =add(20);
// const a2 =add(10);

// // console.log(a1);
// console.log(a1());

// console.log(""+a2); // output:function inner(b) {  return a+b; }
// console.log(a2(5));  //15




// function add(a){
//     console.log(a);
//     return function inner(b){
//         console.log("nner function"+a);
//         return a+b;
//     }
// }
// let a =add(10);
// a();
// console.log("heelo"+b);

// in which add is a high ordered function becoz it return a afunction;

function a(x,callbackfunction){
    console.log(x + ":"+callbackfunction);
return callbackfunction(x);
}
function b(y){
    return function (z){
        console.log(y);
        return y+z;
  }
}
let c=10;
let d=20;
// let f =a(c,b(d));
// console.log(f) //output->30;



//  a(c,b);
//   output->function b(y){
//     return function (z){
//         return y+z;
//   }
// }


// let e =a(c,b(d));
// console.log(e);
// output-> :function (z){
//         return y+z;
//   }

let e=a(c,b);
console.log(e(20))


