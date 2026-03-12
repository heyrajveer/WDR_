//case1->
// function m1(ab){
//     console.log(ab);    
// }
// m1(); undifned


//case2->
// m1();   undifned
// function m1(ab){
//     console.log(ab);
    
// }


//case3->
// let an =10;
// function m1(ab){
//     console.log(ab);
// }
// m1(an); 


//case4->
// m1(ab); referenceError:cannot access before initialization
// let ab =10;
// function m1(ab){
//     console.log(ab);   
// }


//case5->
// let ab =10;
// m1(ab);
// function m1(ab){
//     console.log(ab);   
// }    working smooth



//case6->
// let ab =10;
// m1(ab);
// function m1(ab){

//     console.log(ab);  
//     console.log(a);    ->a is not defined
// }


//case7->
// let ab =10;
// function m1(ab){
//     console.log(ab);  
//     console.log(a);   
// }
// let a=10;
// m1(ab);  working 


// function fnName(){
//     fun_body
// }

// functionName(args){

// }


// function m1(){
//     console.log("m1 is executed");
//     return 2;      
// }
// let a =m1; //yha [Function: m1] ayega
// console.log(a);



//important//
// function m1(a){
//     console.log("m1 is executed"+a);
         
// }
// let a =m1();
// console.log(a);
// console.log(m1());
// let a=10;
// let b=m1;
// m1(2);
// b(4);
// console.log(b(3));
// let a =10;
// let b =m1;



//case1
// function m1(a){
//     console.log("m1 is executed"+a);
         
// }
// let ab=b;
// console.log(ab()); undefined

// case2
// function m1(a){
//     console.log("m1 is executed"+a);
         
// }
// let ab=b();// jb tak hum () nhih dete tb tk humko function block milta he bus vo execute nhi hota
// console.log(ab); undefined

// case3
// function m1(a){
//     let b=a;
//     b++;
//     console.log("m1 is executed"+a++);
//     return a--;

         
// }
// let a =10;
// b=m1();
// console.log(b);

// case4
// function m1(a){
//     console.log("m1 is executed"+a++);
//     return a--;        
// }
// let a =10;
// b=m1(a);
// console.log(b);

// case4
// function m1(a){
//     console.log("m1 is executed"+a++);
//     return a--;        
// }
// let a =10;
// b=m1(a);
// console.log(b);



// case5;
// m1();
// function m1(a){
//     console.log("m1 is executed"+a);   
// }
// let a=10;  
// return  m1 exectued undefined

// case6
// m1(10);
// function m1(a){
//     console.log("m1 is executed"+a);   
// }
// let a=10;
// return  m1 is executed 10;


// case7
// m1(a);
// function m1(a){
//     console.log("m1 is executed"+a);   
// }
// let a=10;
// ReferenceError: Cannot access 'a' before initialization


// case 8
// m1(a);
// function m1(a){
//     console.log("m1 is executed"+ a);   
// }
// var a=10;
//  output:m1 is executed undefined
// var is hoisted and initialized with undefined, whereas functions are hoisted with their complete function definition stored in memory.

// a function which is created with it function keyword are known as   declared function
//declared functions are hoisted with its body











