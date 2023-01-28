let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let addbtn = document.getElementById("add");
let subbtn = document.getElementById("sub");
let mulbtn = document.getElementById("mul");
let divbtn = document.getElementById("div");
let answer = document.getElementById("answer");


addbtn.addEventListener("click",addition);
subbtn.addEventListener("click",subtraction);
mulbtn.addEventListener("click",multiplication);
divbtn.addEventListener("click",division);


function funct_name (value1,value2,value3){
    answer.innerText = value1+value2+value3;
}
funct_name("om",25,true);
function addition(){
    //addition
    var input1 = Number(num1.value);
    var input2 = Number(num2.value);
    var ans = input1+input2;
    answer.innerText=ans;
}
// arrow function
function arr_function(){
    return "hello world";
}

let arr2_function = (value) => {return value;} 

function subtraction(){
    //subtraction
    var input1 = Number(num1.value);
    var input2 = Number(num2.value);
    var ans = input1-input2;
    answer.innerText=ans;
}
function multiplication(){
    //multiplication
    var input1 = Number(num1.value);
    var input2 = Number(num2.value);
    var ans = input1*input2;
    answer.innerText=ans;
}
function division(){
    //divison
    var input1 = Number(num1.value);
    var input2 = Number(num2.value);
    var ans = input1/input2;
    answer.innerText=ans;
}

function pytha(){
    var inp1 = square(2) ,inp2 = square(3);
    let pythagorus = plus(inp1,inp2);
    // let add = plus(2,2);
    // let squ = square(2);
    console.log(add+squ);
    
}
function square(x) {
    return  x * x;
}

function plus(z,y)
{
    return Number(z)+Number(y);
}

pytha();

