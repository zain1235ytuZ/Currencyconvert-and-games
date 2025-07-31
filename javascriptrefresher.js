/*let color;
mode="dark_mode"
if(mode==="dark_mode"){
    color="black";
}
console.log(color);
let a =5;
let b =8;
let c=a+b;
console.log(c);
console.log(a*b);
console.log(a-b);
console.log(a/b);
console.log(a%b);
if(a>b){
    console.log(greater);
}*/

/*let s=prompt("EntER YOUR NAME 10_100");
let grade;
if(s >=90 && s <=100) {
    grade="A";

}
else if(s >=70 && s <=89) {
    grade="B";
}
else if(s >=50 && s <=69) { 
    grade="C";
}
else if(s>=30 && s<=49) {
grade="D";
}
else{
    grade="F";
}
console.log("your gade was :" + grade);
//   let name="John";*/
// let arr=[0,1,2,3,5,6 ,100,23,23,23,55,12,12,12,2121,12,21,22];
// let size=0;
//  for (let i  of arr) {
//     console.log(i);
//     size++;
//  }
//  console.log("array length is " + size);

// let str="pakistan zindabad";   //for off is used  for printing the only elements or objects of the array or string
// let count=0;
// for (let i of str) {
//     console.log(i);
// }
// console.log("string length is " + size);
 /* let student={
    name:"John", for  in used for printing the key and value of the object
    age:20,
    grade:"A",
    marks:[90,80,70,60,50],


  }

for (let key in student) {
        console.log("key=" + key + " value=" + student[key]);
}*/

/*for(let num=0;num<=100;num++){
  

  if(num%2==0){
    console.log("num is even",num);
  }
  else{
    console.log("num is odd",num);
  }
}*/
//   let  num=25;
//   let usernum= prompt("guess the num:");

// while(usernum!==num){
//   console.log("you entere the wrong num ");
// }
// console.log("you not entere the wrong num ");


// let fullname=prompt("enter your name without space");
//   let username="@"+fullname+ fullname.length;
//    console.log(username);
// let items=[255,233,122,223,355];
// for(let i=0;i<items.length;i++){

//  let offer =items[i]/10;
//   items[i]-=offer;
 
// }
// console.log(items);
//  let pakistanheroes=["fahad","faisal","Nomanijaz"];
//   let indhero=["salman","shahrukh","Amir"];
//   let hero= pakistanheroes.concat(indhero);
// console.log(hero);
// pakistanheroes.push("Atif");
//  console.log(pakistanheroes);
// pakistanheroes.pop("fahad");
// console.log(pakistanheroes);
// pakistanheroes.unshift("arbaz");
// console.log(pakistanheroes);
// pakistanheroes.shift("fahad");
// methods in js for array
//        1push
//       2 pop
// 3    unshift unshift will add the element at the beginning of the array
// 4   shift
// 5   concact
// 6    slice
//   7 splice   splice will also used to add and remove the element from array
// let numbers=[1,2,3,4,5];
//    numbers.splice(2,0,101);
// console.log(numbers);
// numbers.splice(3,1);
// console.log(numbers);
// numbers.splice(3,1,101);
// console.log(numbers);

// let company=["bloomberg","microsoft","uber","netflix"];
//   company.splice(0,1);

// console.log(company);

// company.splice(2,1,"ola");

// console.log(company);
// company.push("Amazon");push will add the element at the end of array
// console.log(company);
//  function display(  a,b  ){
  
//   console.log("thi is a function");
//   console.log("hello baby what is your name");
//   console.log(a*b);
//   console.log(a+b);
//   console.log(a-b);
//   console.log(a/b);
//  console.log(a%b);
//  if(9>3){
//   console.log("ok");
//  }
//  else{
//   console.log("no");
//  }
//  if(9%3==0){
//   console.log("waqayi");
//  }
//  else{
//   console.log("no");
//  }
//  if(9%3!==0){
//   console.log("oh no on");
//  }
//  else{
//   console.log("no");
//  }
//  }
//  display(1000,32323);

//  calculator
// let a;
// let b;
//  function sum(a,b){
//    console.log(a+b);
//  }
// sum(2,3);
// function sub(a,b){
//   console.log(a-b);
// }    calculation with the help of function
// sub(2,3);
// function multi(a,b){
//   console.log(a*b);
// }
// multi(2,3);

// function division(a,b){
//   console.log(a/b);
// }
// division(2,3);


// function modular(a,b){
//   console.log(a%b);
// }
// modular(2,3);
// sum(20,30);
// sub(20,30);

// class calculator {
//   constructor() {
//     console.log("Enter TWO NUMBERS");
//   }
//   sum(a, b) {
//     console.log(a + b);
//   }
//   sub(a, b) { calculator with the help of class and object
//     console.log(a - b);
//   }
//   multi(a, b) {
//     console.log(a * b);
//   }
//   division(a, b) {
//     console.log(a / b);
//   }
//   modular(a, b) {
//     console.log(a % b);
//   }

// }
// const calc=new calculator();
// calc.sum(20,30);
//  calc.sub(20,30);
//  calc.multi(20,30);
//  calc.division(20,30);
// calc.modular(20,30);
//  let sum=(a,b)=>{
//   console.log(a+b); calclulator with the help of arrow function
//  }
//  let sub=(a,b)=>{
//   console.log(a-b);
//  }
//  let multi=(a,b)=>{
//   console.log(a*b);
//  }

//  let division=(a,b)=>{
//   console.log(a/b);
//  }
//   let modular=(a,b)=>{
//     console.log(a%b);
//   }
//   sum(20,30);
//   sub(20,30);
//   multi(20,30);
//   division(20,30);
//   modular(20,30);

    // function countvowe(str){
    //   let count = 0;
    //   for (const char of str) {
    //     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){

    //        count++;
    //     }
         
    //   }
     
    //  console.log(count);
     
    // }
    //  countvowe("hello how are you can vary depending ");
    //  console.log(countvowe);
    // let countvowe=(str)=>{
    //   let count = 0;
    //   for (const char of str) {
    //     if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){

    //        count++;
    //     }
         
    //   }
     
    //  console.log(count);
     
    // }
    //  countvowe("hello how are you can vary depending  how wereererwetrt");
    //  console.log(countvowe);
  //  let arr =[89,90,80,60,50,60,70,80,90];
  //  let toppers= arr.filter((val)=>{
  //     return  val > 90;

  //  })

  //  console.log(toppers);
 
//    let n = prompt("Enter a number :");
//    let arr=[];
//    for(let i=1;i<=n;i++){
//     arr[i-1]=i;
//    }
// console.log(arr);

//     sqr= arr.reduce((res,curr)=>{
//     return res + curr ;
//     }
//   );

// console.log(sqr);

// pro= arr.reduce((res,curr)=>{
//   return res * curr ;
//   }
// );

// console.log(pro);
// console.log(arr);
// divi= arr.reduce((res,curr)=>{
//   return res / curr ;
//   }
// );

// console.log(divi);
//   let p= document.getElementById("h")  
// console.log(p);
// let t= document.getElementById("h1")  
// console.log(t);
// let e= document.getElementById("h2")  
// console.log(e);
    // let elment =document.querySelectorAll("#h");
    //  console.dir(elment);
  // let h2 =document.querySelector("h2");
  //  console.dir(h2.innertext);
  //  h2.innertext= h2.innertext + "from ZB solutions";
//     let newbtn =document.createElement("button")
//    newbtn.textContent="Click me";
//   newbtn.style.color="red";
//    newbtn.style.background="blue";
//  document.body.appendChild(newbtn); 

// let mode=document.querySelector("#btn");
// let body=document.querySelector("body");
//    let curtmode="light";
//    mode.addEventListener("click",()=>{
//     if(curtmode=="light"){
//       curtmode="dark";
//       document.body.style.background="black";
      
//     }
//     else{
//      curtmode="light";
//      document.body.style.color="white";
//     }
//     console.log(curtmode);
//    })
//    let boxes=document.querySelectorAll(".box");
//   let btn= document.querySelector(".btn");
//    let turnO=true;
//    let arr2=[
//     [0,1,2],
//     [0,3,6],
//     [0,4,8],
//     [1,4,7],
//     [2,5,8],
//     [2,4,6],
//     [3,4,5],
//     [6,7,8]

//   ];

//    boxes.forEach((box)=>{
//     box.addEventListener("click",()=>{
//       console.log("button clicked");
//       box.innerText="x";
//    });

//   let boxes = document.querySelectorAll(".box");
//   let btn = document.querySelector(".btn");
//   let turnO = true;
  
//   const winpatterns  = [
//     [0, 1, 2],
//     [0, 3, 6],
//     [0, 4, 8],
//     [1, 4, 7],
//     [2, 5, 8],
//     [2, 4, 6],
//     [3, 4, 5],
//     [6, 7, 8]
//   ];
  
//   boxes.forEach((box) => {
//     box.addEventListener("click", () => { 
//       if (box.innerText === "") {  
//         box.innerText = turnO ? "O" : "X";
//         turnO = !turnO;  
//         console.log("Button clicked", box.innerText);
//       }
//       checkwinner();
//     });
//   });
//   const checkwinner=()=>{
//     for ( pattern of winpatterns) {
  
//         let pos1val = boxes[pattern[0]].innerText;
//         let pos2val = boxes[pattern[1]].innerText;
//         let pos3val =  boxes[pattern[2]].innerText;

     //    }
//   }