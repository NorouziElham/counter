let number1 = 0;
let container1 = document.getElementById("container1");
let firstNumber=container1.getAttribute("data-counter");
let number2 = 0;
let container2 = document.getElementById("container2");
let secondNumber=container2.getAttribute("data-counter");
let number3 = 0;
let container3 = document.getElementById("container3");
let thirdNumber=container3.getAttribute("data-counter");

function printNumber1() {
    if (number1 <= firstNumber) {
    container1.textContent = number1;
    number1++;
  } else {
    clearInterval(finalnaumber1);
  }
}
function printNumber2() {
   if (number2 <= secondNumber) {
    container2.textContent = number2;
    number2++;
  } else {
    clearInterval(finalnaumber2);
  }
}
function printNumber3() {
  
  if (number3 <=thirdNumber) {
    container3.textContent = number3;
    number3++;
  } else {
    clearInterval(finalnaumber3);
  }
}

function countNumbers() {
  
  let finalnaumber1 = setInterval(printNumber1, 1130);
  let finalnaumber2 = setInterval(printNumber2, 70);
  let finalnaumber3 = setInterval(printNumber3, 650);
}

window.addEventListener("load", countNumbers);
