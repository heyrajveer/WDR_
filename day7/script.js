//one line function
// console.log(a(3,2));
// let a =(a,b)=>a+b;
// console.log(a(3,2));

// let a =(a,b)=>{return a+b};
// console.log(a(3,2));

// function c(a,b){
//     return a+b;
// }


// var a=(a,b)=>a+b; // a is not a function undefined me function ko store kr rhe he 

// a();
// var a =function m1(){
//     console.log("hello world");   
// } output:TypeError: a is not a function

// a();
// let a =function m1(){
//     console.log("hello world");   
// }  //output:ReferenceError: Cannot access 'a' before initialization
//temporal dead zone


// functionadd(a,b){
//     a+b;
// }
// console.log(add(2,4)) output :undefined

// function add(a,b){
//   return   //if i am not using ; -> then its autmatically added
// }
// console.log(add(2,4)) // output:undefined



// function add(a,b){
//   return a+b;
// }
// console.log(add(2,4)) 


//  person={
//     name:"shiv",
//     greet:function(){
//         console.log(person.name)
//     }
//     //  greet:function(){
//     //     console.log(person.name)
//     // }
//     // above both give the same
//  }
// person.greet();






//function body concept

function m1(a){
    console.log("m1 Ececuted"+a);   
}
m1(10);
m1("hello");

let d =()=>console.log("D executed");
m1(d);  //output:m1 Ececuted()=>console.log("D executed")

console.log(typeof(d));
// output: function

let e =function(){
    console.log("e executed");
}

m1(e); 
// m1 Ececutedfunction(){
//     console.log("e executed");
// }
// pura function body hi chla jayega

console.log(e);
// [Function: e]


