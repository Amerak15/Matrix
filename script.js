//1.1
var myAge=22;
if (myAge>=18) {
    console.log("You are eligibe for voting")
} else {
    console.log("You don't meet the voting requirments")
} 
/////
//1.2
let name=prompt("What's your name?");
if (name==="John") {
    console.log("Hello,John!")
} else {
    console.log("You are not John!")
}
////
//2.1
function num(num1,num2) {
    return num1+num2;    
}
let sum=num(10,5);
console.log(sum);
////
//2.2
function reverseString(string){
    var splitString=str.split();

    var reverseArray=splitString.reverse();

    var joinArray=reverseArray.Join();
    return joinArray;
} 
////
///3.1
var myFruits=["banana","strawberry","peach","apple","kiwi"]
for (let i = 0; i < myFruits.length; i++) {
    const element = myFruits[i];
    console.log(myFruits[i])
}
////
//3.2
const avg =function(array) {
    let total=0;
    for (let i = 0; i < array.length; i++) {
        total+=array[i];
        const average=sum/array.length;
        console.log(average);
        return average;
    }
}
/////
//3.3
function largest(array1){
    let max=array1[0];
    for (let i = 0; i < array.length; i++) {
        if (array1[i]>max) {
            max=array1[i];
        }
        return max;
    }
}
////
//3.4
const wordsArr = ["the", "kid", "ate", "the", "apple"];
let result = "";
for (let i = 0; i < wordsArr.length; i++) {
result += wordsArr[i] + " ";
}
console.log(result);

/////
//3.5
let nameArr=["Ahmad,Essa,Yazan,Joud"];
let checkName="Ahmad";
function checkNameIfExist(nameArr,checkName) {
    for (let i =0; i< nameArr.length; i++){
        if (checkName===nameArr[i]) {
            return true;
        }
    }
    return false;
}
console.log(checkNameIfExist(nameArr,checkName))
////
//3.6
const arrNum=[];
for (let i = 1; i <= 20; i++) {
    if (i%2===0) {
        console.log(i)
        
    }
}
/////
//4.1 Objects
let bookProperites={
    title:"My book",
    author:"Amer",
    year:"2024",
};
console.log(bookProperites);
/////
//4.2
let person={
    name:"Basel",
    age:22,
    gender:"male"
};
function personDetails(person) {
    console.log(`The name is ${person.name}`);
    console.log(`The age is ${person.age}`);
    console.log(`The gender is ${person.gender}`);
};
////
//5.1+5.2 Objects as classes
const Car = {
    make: "",
    model: "",
    year: "",
    start: function () {
    console.log("Starting the car.");
    },
    drive: function () {
    console.log("Driving the car.");
    },
};
/////
//6.1 Window Object
var alertMsg= document.getElementById('alertMessage');
alertMsg.addEventListener("click",function(){
    window.alert("Error 404!!!");
})
//6.2
var userName =window.prompt("write your name");
window.alert("Hello, " + userName +" "+ "Welcome");
/////
//DOM Manipulation
//7.1
var divText= document.getElementById("text");

var divScndBtn= document.getElementById('text');
divScndBtn.addEventListener("click", function(){
divText.textContent = "Noticed The Diffrence?";
});
//
//7.2
function newItem(){  
    var item=document.createElement("li"); 
    var toDoList = document.getElementById('list');
    toDoList.appendChild(item);
}
var addToListBtn = document.getElementById("btn")
addToListBtn.addEventListener("click", function(){
    newItem()
    });
