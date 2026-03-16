
const arr =[5,1,3,2,6];
function isEven(x){
   if(x%2===0){
    return x>2;
   }
}
const output =arr.filter(isEven);
console.log(output);

let users = [
  {name: "Raj", age: 22,role:1},
  {name: "Amit", age: 25,role:2},
  {name: "Neha", age: 20,role:3}
];
let names = users.reduce((acc, user) => {
  acc.push(user.name);
  return acc;
}, []);

console.log(names);
let mapnames =users.filter((x)=>x.age<25).map((x)=>x.role);
console.log(mapnames)