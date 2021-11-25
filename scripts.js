"use strict";

const result = document.getElementById("result");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const del = document.getElementById("del");

let one = document.getElementById("one").value;
let two = document.getElementById("two").value;
let three = document.getElementById("three").value;
let four = document.getElementById("four").value;
let five = document.getElementById("five").value;
let six = document.getElementById("six").value;
let seven = document.getElementById("seven").value;
let eight = document.getElementById("eight").value;
let nine = document.getElementById("nine").value;

const point = document.getElementById("point");
const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");

del.addEventListener("click", function () {
  result.value = result.value.slice(0, -1);
});

document.querySelectorAll(".num-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    result.value += item.value;
  });
});

equals.addEventListener("click", function () {
  result.value = eval(result.value);
});

reset.addEventListener("click", function () {
  result.value = "";
});
