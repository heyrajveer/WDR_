// ways to create Array

// let arr1 =[1,2,3]//litral syntax

// let arr1 =new Array(1,2,);//using constructor
// console.log(arr1);//[ 1, 2 ]

//  let arr1 =new Array(5); //create empty array of size(5);
// console.log(arr1);->[ <5 empty items> ]


// traversing in Array
// let arr =[1,2,3,4];
// arr.forEach(e => {
//     console.log(e);
// });
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }
// output:
// 1
// 2
// 3
// 4

// for(let i=0;i<arr.length;i++){
//     console.log(++arr[i]);
// }
//output:
// 2
// 3
// 4
// 5

// for(let i=0;i<arr.length;i++){
//     console.log(arr[++i]);
// }
//ouput:
// 2
// 4

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i++]);
// }

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]++);
// }
// console.log(arr);
// output:
// 1
// 2
// 3
// 4
// [ 2, 3, 4, 5 ] //mutable array update



// let arr =[1,2,3,4];
// for(let i=0;i<arr.length;i++){
//     console.log(++arr[i]);
// }
// console.log(arr);
// output:
// 2
// 3
// 4
// 5
// [ 2, 3, 4, 5 ]



// for(let i of arr){
//     console.log(i);
// }
//1
//2
//3
//4



// for(let i of arr){
//     console.log("first"+ i++);
//      console.log(++i);
// }
// console.log(arr);
// output
// 1
// 2
// 3
// 4
// [ 1, 2, 3, 4 ]


