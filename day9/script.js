let studentData = [
  {
    name: "Rajveer Kumar",
    email: "rajveer@gmail.com",
    phone: "9876543210",
  },
  {
    name: "Aman Sharma",
    email: "aman.sharma@gmail.com",
    phone: "9123456780",
  },
  {
    name: "Priya Verma",
    email: "priya.verma@gmail.com",
    phone: "9988776655",
  },
  //   {
  //     name: "Rohit Singh",
  //     email: "rohit.singh@gmail.com",
  //     phone: "9012345678"
  //   },
  //   {
  //     name: "Neha Gupta",
  //     email: "neha.gupta@gmail.com",
  //     phone: "9090909090"
  //   },
  //   {
  //     name: "Karan Mehta",
  //     email: "karan.mehta@gmail.com",
  //     phone: "9345678123"
  //   },
  //   {
  //     name: "Simran Kaur",
  //     email: "simran.kaur@gmail.com",
  //     phone: "9765432109"
  //   },
  //   {
  //     name: "Arjun Patel",
  //     email: "arjun.patel@gmail.com",
  //     phone: "9456123789"
  //   },
  //   {
  //     name: "Anjali Yadav",
  //     email: "anjali.yadav@gmail.com",
  //     phone: "9898989898"
  //   },
  //   {
  //     name: "Vikas Jain",
  //     email: "vikas.jain@gmail.com",
  //     phone: "9786543210"
  //   },
];

// for(let i of studentData){
//     console.log(i++); //that give 10time NAN beacuse it is a object
// }
// console.log(studentData);//that give data

// for(let i of studentData){
//     i.name ="rahul"
//     console.log(i.name);
//     console.log(i.email);
//     console.log(i.phone);
//     console.log("=========");
// }

// for(let i of studentData){
//     i.name ="rahul"
//     console.log(i);
// }
//  console.log(studentData);  name update  by reference non-primitive

// its a primitive type
// let arr =[1,2,3];
// for(let i of arr){
//    i= 20;
//    console.log(i);// 20,20,20 copy update only not actuall array
     ////isme i point kr rha he direct value ko isliye not its address sot hat couldnot update he array
// }
// console.log(arr);

// for(let i of studentData){
//     i.name ="rahul"
//     console.log(i);
//     i=20;
//     i.name="rohan"
//     console.log(i.name);// beacuse i become a no and u try 20.name is undefined

// }
//  console.log(studentData);


// let name = ["raj", "rohan"];
// let count = 0;
// for (let i of studentData) {
//   console.log(i);
//   i.name = name[count++];
//   console.log("====");
// }
// console.log(studentData);



// in foreach in function first element behave as element and second one is index
//foreach index and value;
// let arr = [1, 2, 3];
// arr.forEach(m1);
// console.log("=====");
// function m1(element, index) {
//   console.log("index" + index);
//   console.log("element" + element);
// }
// m1(); 
//output
// index0
// element1
// index1
// element2
// index2
// element3
// =====
// indexundefined
// elementundefined




// let a =(element, index)=> {
//   console.log("index" + index);
//   console.log("element" + element);
// }
// console.log("=======");


// let arr = [1, 2, 3];
// let count =5;
// arr.forEach((element,index)=> {
//    element =count++;
//    index=count;
    
// })
// //array me koi update nhi hoga

// console.log(arr);


// let arr = [1, 2, 3];
// let count =5;
// arr.forEach((element,index,arr)=> {
//    element =count++;
//    index=count;
//     console.log(element,index)
//    console.log(arr);  
//// 5 6
//// [ 1, 2, 3 ]
// //6 7
// //[ 1, 2, 3 ]
// 7 8
////[ 1, 2, 3 ]  
// })

// console.log(arr);
//output:
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]



// let arr = [1, 2, 3];
// let count =5;
// let arr1 =[3,4,5];
// arr.forEach((element,index,arr1)=> {
//    console.log(arr1);    
// })
// console.log(arr);
// don't matter what actual in the arr1
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]
// [ 1, 2, 3 ]


// let arr =[1,2,3]
// // let arr3 =[{name:"raj",email:"12@gmial.com"},{name:"rohan",email:"shiv@outlook.com"}]
// let arr3 =[1,2]
// arr3.forEach((element,index,arr1)=>{
//     arr1[++index]=30;
//     // output: [ 1, 30, 30] initially index is 0 but incremeanted to 1 but oth index still have 1 value 
//     //and index 1 update to 30 and also for 2 index =30 because array3 traversal aleast 2 time so that index preincremant two times
// })
// console.log(arr3);
// // output:[ { name: 'raj', email: '12@gmial.com' }, 30, 30 ]




// block//shadow
// function m1(){
//   var a=10;
//  console.log("var:"+a);
//   if(10=="10"){
//    let a=30;
//   console.log("let:"+a);
// }
//  console.log("var:"+a);

// }

// m1();
// var:10
// let:30
// var:10



// console.log(add); 
// var add = function () {
//   return 5;
// };


// console.log(add);

// let add = () => {
//   return 5;
// };

