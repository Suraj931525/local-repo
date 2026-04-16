// conditional statement
// if else
//if we want to check one condition according to only one block 


// let age=20;
// if(age>18){
//     console.log("you are eligible for vote");
// }
// else{
//     console.log("try next time")
    
// }



// let age1=parseInt(prompt("Enter your age:"));
// if(age1>18){
//    document.writeln("you are eligible for vote");
// }
// else{
//     document.writeln("try next time")
    
// }





//else if 
// we can check  more than one condition according to multiple block

// let num1=340;
// let num2=320;
// let num3=220;
// let num4=200;
// if(num1>num2&&num1>num3&&num1>num4){
//     console.log("num1 is largest");
// }
// else if(num2>num1&&num2>num3&&num3>num4){
//     console.log("num2 is largest");
// }
// else if(num3>num1&&num3>num2&&num3>num4){
//     console.log("num3 is largest is largest");
// }
// else{
//     console.log("num4 is largest");
// }

let marks = parseInt(prompt("enter marathi mark out of 100"))
let marks1 = parseInt(prompt("enter hindi mark out of 100"))
let marks2 = parseInt(prompt("enter english mark out of 100"))
let marks3 = parseInt(prompt("enter history mark out of 100"))
let marks4 = parseInt(prompt("enter maths mark out of 100"))

let totalmarks = marks + marks1 + marks2 + marks3 + marks4;

if (totalmarks > 400) {
    console.log("Grade A")
}
else if (totalmarks > 300 && totalmarks <= 400) {
    console.log("Grade B")
}
else if (totalmarks > 200 && totalmarks <= 300) {
    console.log("Grade C")
}
else if (totalmarks > 100 && totalmarks <= 200) {
    console.log("Grade D")
}
else {
    console.log("Fail")
}


// switch
// it is alternative of else if statement


// let time=12
// switch(time){
//     case 6:
//         console.log("good morning")
//     break;
//     case 12:
//         console.log("good Afternoon")
//     break;
//     case 4:
//         console.log("good evening")
//     break;
//     default:
//         console.log("good night")
  
// }




// while

for(let i=1;i<=10;i++){
    console.log("hello")
}


//while

let a=1;
while(a<=10){
    console.log("hello while loop")
    a++;
}

//Do While Loop

// if want to execute our statement  aleast one

let b=1;
do{
    console.log("hello");
    b++;
}
while(b<10)