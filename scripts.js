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
  if (result.innerHTML.length == 1) {
    result.innerHTML = "0";
  } else {
    result.innerHTML = result.innerHTML.slice(0, -1);
  }
});

document.querySelectorAll(".num-btn").forEach((item) => {
  item.addEventListener("click", (event) => {
    if (result.innerHTML == 0) {
      result.innerHTML = item.innerHTML;
    } else {
      result.innerHTML += item.innerHTML;
    }
  });
});

document.querySelectorAll(".key--operator").forEach((item) => {
  item.addEventListener("click", function () {
    if (item.dataset.action === "add") {
      if (result.innerHTML.slice(-1) !== "+") {
        result.innerHTML = result.innerHTML + "+";
      }
    } else if (item.dataset.action === "substract") {
      if (result.innerHTML.slice(-1) !== "-") {
        result.innerHTML = result.innerHTML + "-";
      }
    } else if (item.dataset.action === "multiply") {
      if (result.innerHTML.slice(-1) !== "x") {
        result.innerHTML = result.innerHTML + "x";
      }
    } else if (item.dataset.action === "divide") {
      if (result.innerHTML.slice(-1) !== "/") {
        result.innerHTML = result.innerHTML + "/";
      }
    }
  });
});

point.addEventListener("click", function () {
  if (result.innerHTML.slice(-1) !== ".") {
    result.innerHTML = result.innerHTML + ".";
  }
});

equals.addEventListener("click", function () {
  result.innerHTML = eval(result.innerHTML);
});

reset.addEventListener("click", function () {
  result.innerHTML = "0";
});
