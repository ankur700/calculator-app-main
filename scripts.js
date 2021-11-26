"use strict";

const result = document.getElementById("result");
const equals = document.getElementById("equals");
const reset = document.getElementById("reset");
const del = document.getElementById("del");

const point = document.getElementById("point");
const add = document.getElementById("add");
const substract = document.getElementById("substract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
let radios = document.getElementsByName("theme-toggle");
const selectedTheme = document.getElementById("selected-theme");

let theme;

if (theme == null) {
  setTheme("theme1");
} else {
  setTheme(theme);
}

for (let radio of radios) {
  radio.addEventListener("click", function () {
    let theme = this.value;
    setTheme(theme);
  });
}

function setTheme(theme) {
  if (theme == "theme1") {
    selectedTheme.href = "./themes/theme1.css";
  } else if (theme == "theme2") {
    selectedTheme.href = "./themes/theme2.css";
  } else if (theme == "theme3") {
    selectedTheme.href = "./themes/theme3.css";
  }
}

del.addEventListener("click", function () {
  result.innerHTML = result.innerHTML.slice(0, -1);
});

document.querySelectorAll(".num-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    result.innerHTML += item.value;
  });
});

equals.addEventListener("click", function () {
  result.innerHTML = eval(result.innerHTML);
});

reset.addEventListener("click", function () {
  result.innerHTML = "0";
});
