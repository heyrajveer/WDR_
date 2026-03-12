// //join()->join all values in  a string 
// const arr = ["Raj", "Rohan", "Aman"];
// console.log(arr.join());      // "Raj,Rohan,Aman"
// console.log(arr.join(" - ")); // "Raj - Rohan - Aman"
// console.log(arr);//[ 'Raj', 'Rohan', 'Aman' ] doesn't modify the actual array

// const arr1=[1,2,3,4];
// const a =arr1.join("-");
// console.log(typeof(a));//string 


// //shift()->remove element
// const arr1 =[1,2,3];
// const a =arr1.shift();
// console.log(a);
// console.log(arr1);//[ 2, 3 ] actuall array modify


// //unshift()->add element
// const arr1 =[1,2,3];
// const a =arr1.unshift(3);
// console.log(a);
// console.log(arr1);//[ 3, 1, 2, 3 ] actuall array modify

// // //indexOf()
// const arr1 =[1,2,3];
// const a =arr1.indexOf(30)
// console.log(arr1.indexOf(3)); //2
// console.log(arr1);
// //out of the bound ka -1 return hoga 


//includes()->true or false value exist or not



//splice()->add , remove and replace element ->modify actual array
//(1,0,5,7)->array.splice(startIndex, deleteCount, item1, item2, ...)
// const arr =[1,2,3];
// arr.splice(1,1); 
// console.log(arr); [ 1, 3 ]
// arr.splice(1,0,5,7) //adding value at index 1and delete element is  0
// console.log(arr); [ 1, 5, 7, 3 ]

// arr.splice(1, 1, 99);
// console.log(arr);//[ 1, 99, 7, 3 ]  replacing


// const arr ="ramara";
// arr.split("");
// console.log(arr.split("")) //[ 'r', 'a', 'm', 'a', 'r', 'a' ]
// console.log(arr); //ramara actual array will not modify


//concate
// const arr =[1,2,3];
// const arr2 =[1,2,3];
// console.log(arr.concat(arr2));
// console.log(arr)  //concate will not modify actual array

//slice();
//const arr =[1,2,3];
// console.log(arr.slice(1,3));// [ 2, 3 ]
// console.log(arr);//[ 1, 2, 3 ] will not modify actual array



//reduce()
// let arr =[1,2,3,4];
// let sum =arr.reduce((acc,curr)=>{
//     return acc+ curr;
// })
// console.log(sum);//10;

// let arr= [1,2,3,4];
// let a =arr.some("2");
// console.log(a);


// let nums =[1,3,5,8];
// let  haseven =nums.some(nums=>nums %2 ===0);
// console.log(haseven); //true stop when found value

// let nums =[2,4,6];
// let alleven =nums.every(
//     nums => nums %2==0
// )
// console.log(alleven);//true if any conditon fails then false


// let arr =[1,2,[3,4]];
// console.log(arr.flat());//[1,2,3,4]




// let nums=[1,2,3]
// let nums2 =[3,4,];
// let a = (...nums)(...nums2);
// console.log(a)


//sahllow copy
// let obj1 = {
//   name: "Raj",
//   address: { city: "Delhi" }
// };
// let obj2 = { ...obj1 };  // Shallow copy

// obj2.address.city = "Mumbai";
// obj2.name ="rajveer";

// console.log(obj1.address.city);  // Mumbai 
// console.log(obj1.name)



// //deep copy
// let obj1 = {
//   name: "Raj",
//   address: { city: "Delhi" }
// };
// let obj2 = structuredClone(obj1);  // Deep copy

// obj2.address.city = "Mumbai";

// console.log(obj1.address.city);  // Delhi ✅
// obj2.name="rohan"
// console.log(obj1.name)



//iife
// (function(){
//    console.log("Hello");
// })();
// //immedialtely invoked function

