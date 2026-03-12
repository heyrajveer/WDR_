// let arr =[1,2,3];
// arr[1]=20;
// arr[5]=40;
// arr[4]=30;
// arr[1]=9;
// arr[10]=0;
// console.log(arr[3]); //undefined 
// console.log(arr);
// console.log(arr.length); //length become according to the largest index


// let  x=[];
// x[0]=100;
// x[2]=200;
// console.log(x); //[ 100, <1 empty item>, 200 ]
// console.log(x.length); //3

// sparse array->so this empty space in array  is called holes and also known as spase arrays 

// let arr =[1,2,3];
// delete arr[1];  //so this delete also create a hole means empty space
 // console.log(arr);  //  [ 1, <1 empty item>, 3 ]


// delete arr[1]; 
// delete arr[1]; 
// console.log(arr[1]); //undefine

// let arr1 =[1,2,3];
// let arr2 =arr1;

// arr2.push(4);

// console.log(arr1); //[ 1, 2, 3, 4 ]
// console.log(arr2);//[ 1, 2, 3, 4 ]

// let a=10;
// let b=a;
// b=90;
// a=30;
// console.log(a);
// console.log(b);





//console.log(a+b);  //both are a and b are undefined but later adding both are undeined beceome NAN//NaN
// var a=[1,2,3];
// var b =[4,5,6]

//  var b =a+b;
// console.log(b);// 1,2,34,5,6
// console.log(typeof(b)); //string
//  "+" operator convert array to string 



// let a=10;
// m1(a);
// var g=5
// function m1(a){
//     console.log(g-a); //NaN;=>beacuse g is undefined hoisted unifined +value give NaN 
//     return g-a;
// }



// let a=[1,2,3]
// let b=[4,5,6]
// let c=[a,b]
// console.log(c); //[ [ 1, 2, 3 ], [ 4, 5, 6 ] ]
//  //2d array milega not merget only nested

// let c =a.concat(b);
// console.log(c); [ 1, 2, 3, 4, 5, 6 ]

//Spread Operator
// let d =[...a,b];
// console.log(d); //[ 1, 2, 3, [ 4, 5, 6 ] ]
// let af=[...a,...b];
// console.log(af);//[ 1, 2, 3, 4, 5, 6 ]
// console.log(...a,...b); //1 2 3 4 5 6

// let a=[1,2,3]
// let b=[4,5,6]
// a.push(b);
// console.log(a); //[ 1, 2, 3, [ 4, 5, 6 ] ]


// const arr =[1,2,3];
// arr[2]=5;
// console.log(arr);
// arr.push(7);
// console.log(arr);//no issue 
// ////array is declare by const but value can be mutubale beacuse that particulare index is not declare by const

// arr=[2,3,4];  //arr is declare by const so that unable to inintalize by new array
// console.log(arr);


//map
// let arr =[1,2,3]
// let a =arr.map(()=>console.log("hello wolrd"))
//console.log(a);
//hello wolrd
// hello wolrd
// hello wolrd
// [ undefined, undefined, undefined ] 
//Map is a array method that creates a new array  by applying a function to each element of  original array02




// let arr =[1,2,3]
// function m1(a,i,j){
//     console.log("hello world:" +a +":"+j)
// }
// arr.map(m1);
// hello world:1:1,2,3
// hello world:2:1,2,3
// hello world:3:1,2,3

// let arr =[1,2,3];
// function m1(c){
//     console.log("hello world:"+c);
//     return c*2
// ;}
// console.log(arr.map(m1));
// hello world:1
// hello world:2
// hello world:3
//[ 2, 4, 6 ] //ACTUALL ARRAY STILLS SAME 


// console.log(arr.forEach(m1)); //that give nothing in return 
//hello world:
// hello world:
// hello world:
// undefined.


// let arr =[1,2,3];
// console.log(arr.map((c,d,e)=>{
//     console.log("hello world:"+c);
//     return c*2;
// ;})); 
// console.log(arr); // [ 1, 2, 3 ]
// hello world:1
// hello world:2
// hello world:3
// [ 2, 4, 6 ]//ye return value  krega or tum chaho to islo khi store bhi kr skte ho


//  let arr =[1,2,3];
// let a =arr.map((c,d,e)=>{
//     return c*2;
// ;}); 

// console.log(a);
//[ 2, 4, 6 ]

// let a =["a","b","c"];
// let b  = a.map((element,index)=>{
// console.log(`${index}:${element}`);
// })
// 0:a
// 1:b
// 2:c



// let a =[{name:"ALia",age:30},{name:"raj", age:25}];
// let b =a.map((element)=> element.name="ram");
// console.log(b);
// // [ 'ALia', 'raj' ]  b stores the value  but for foreach that will give undefinded
// console.log(a);//  [ { name: 'ram', age: 30 }, { name: 'ram', age: 25 } ]



// let a =[{name:"ALia",age:30},{name:"raj", age:25},{phone:"23456789",age:45}];
// let b =a.map((element)=> element.name);
// console.log(b);
//[ 'ALia', 'raj', undefined ]




//find method
//for particualr value we used find
// let arr =[1,2,3]
//  let c =arr.map((element)=> element==2);
//  console.log("map=>"+c); //map=>false,true,false
// let b =arr.find((element)=> element==2);
// console.log("findfunction=>"+ b);//findfunction=>2

// let arr =[1,2,3,4]
// let b =arr.find((element)=> element >2);
// console.log("findfunction=>"+ b);//findfunction=>3 //one element return whoes matches the conditon


// let arr =[{name:"raj",email:"raj@123"},{name:"rohan",email:"rohan@123"},{name:"raj",email:"ravi@123"}]
// let result =arr.find((e)=>e.name=="raj");
// console.log(result); //{ name: 'raj', email: 'raj@123' }



// comparator
// let a =5;
// let b="5"
// console.log(a==b) //"5"==>5 //true checking only value
// console.log(a===b) //false //comapre value and type too





