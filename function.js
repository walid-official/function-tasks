// with variable
// function myPractice(){
//     let a = 20;
//     let b = 30;
//     let c = a+b;
//     console.log(c);
// }

// myPractice();

// with condition
// function myCondition(){
//     let x = 25;
//     if(x > 20){
//         console.log("You will get award")
//     }else{
//         console.log("you won't get award");
//     }
// }
// myCondition();

//with loop
// function myLoop(){
//     for(let n = 1; n < 5; n++){
//         console.log(n);
//     }
// }
// myLoop();

//with Array

// function myArray(){
//    let number = [1,2,3,5,6,7,8,9];
//    console.log(number);
// }
// myArray();

//with object

// function myObject(){
//     let student ={
//         name : "walid",
//         age : 22,
//         married : false,
//     }
//     console.log(student);
// }
// myObject();

// function sumOfNumbers(numbers) {
//     let sum = 0;
//     for(const number of numbers){
//         console.log(number);
//         sum = sum + number;
//     }
//     return sum;
// }
// const numbs = [4, 2, 1, 6];
// const sum = sumOfNumbers(numbs);
// console.log('Sum of numbers is', sum);


// Tasks-Start
//*****************************************************************

//task-1
//-------

// function myMultiply(num1,num2,num3,num4){
//     let multiply = num1 * num2 * num3 * num4;
//     return multiply;
// }
// let result = myMultiply(2,3,4,5);
// console.log(result);


//task-2
//-------

// function oddEven(numbers){
//     if(numbers % 2 === 1){
//         let resultOdd = numbers * 2;
//         return resultOdd;
//     }else if(numbers % 2 === 0){
//         let resultEven = numbers / 2;
//         return resultEven;
//     }
// }
// console.log(oddEven(21));

//task-3
//------

// function make_avg(number){
//     let sum = 0;
//     for(let num of number){
//         sum += num;
//     }
//     return sum;
// }
// let numbers = [2,3,4,5,6];
// let len = numbers.length;
// let avr = numbers;
// let result = make_avg(avr);
// let all = result / len;
// console.log(all);


//task-4
//------

// function count_zero(binary){
//     let text = ""
//     for(let count of binary){
//       if(count.includes("0")){                          
//         text += count
//       }
//     //   if(count === "0"){
//     //     text += count
//     //   }
//     }
//     console.log(text);
//     return text.length;
// }
// let binary = "001101010101"
// let binNumber = binary;
// console.log(count_zero(binNumber)); 


// function count_zero(binary){
//     let text = ""
//     for(let count of binary){
//       if(count === "0"){
//         text += count
//       }
//     }
//     console.log(text);
//     return text.length;
// }
// let binary = "001101010101"
// let binNumber = binary;
// console.log(count_zero(binNumber)); 


//task-5
//------

// function square(number){
//     return number * number;
// }
// let sqrNumber = Number(prompt('Enter Your Number :'));
// console.log(square(sqrNumber));


//task-6
//------

// function checkEO(str){
//     if(str.length % 2 === 0){
//         let even = "This is even";
//         return even;
//     }else{
//         let odd = "Not Even but Odd";
//         return odd;
//     }
// }

// let str = "programming hero";
// console.log(checkEO(str));


//task-7
//------

// function evenOdd(str){
//     let result = str.length % 2 === 0;
//     return result;
// }

// let str = "programming hero";
// console.log(evenOdd(str));


//task-8
//------

// function sumOfEvenNumbers(num){
//   let arr = []
//   let sum = 0;
//    for(let numbers of num){
//     if(numbers % 2 === 0){
//         sum += numbers
//     }
//    }
//    return sum;
// }

// let numbers = [2,3,4,5,6];
// let resultNumbers = numbers;
// console.log(sumOfEvenNumbers(resultNumbers));

function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }