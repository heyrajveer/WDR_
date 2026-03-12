// let person = {
//   name: "Arpit",
//   age: 22,
//   city: "Noida"
// };

// An object is a collection of key–value pairs.
// let person = {
//   name: "rajveer",
//   age: 22,
//   city: "Noida",
//   play:function m2(){console.log(this.name +"is playing");
   
//   }
// };
// console.log(person)
//{ name: 'rajveer', age: 22, city: 'Noida', play: [Function: m2] }


// let b= person.play;
// console.log(person.play); //[Function: m2]
// console.log(b); //[Function: m2]


// console.log(person.play());  raj is playing pubg  
// line2: undefined why??->Step 2️ What does play() return?
// Your function does NOT return anything.

// person.play(); // rajveer is playing


// case
// let person={
// name:"raj",
// play :()=>{
//   console.log(this.name+ "is playing pubg");
// }
// }
// person.play();  output undefinded



// case:
// let person = {
//   name: "raj",
//   play: function() {
//     const welocme=()=>{
//  console.log(this.name + " is playing pubg");
 
//     }
//     welocme();
   
//   }
// }
// person.play();
// output:raj is playing pubg
//Arrow function borrows this from parent scope.


// case
// let person = {
//   name: "raj",
//   play: () => {
//     console.log(this.name);
//   }
// };

// person.play();  // undefined
// Do NOT have their own this
// 👉 They take this from outer scope




// let person = {
//   name: "raj",
//   play: function() {
//     const welcome=()=>{
//  console.log(this.name + " is playing pubg");
//     }  
//    welcome();
//   }
// }

// person.play();
