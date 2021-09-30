let darkmode = document.getElementById("theme-switch");
darkmode.addEventListener("change", changeTheme, false);
function changeTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    document.getElementById('mergeSort').classList.remove("btn-dark");
    document.getElementById('quickSort').classList.remove("btn-dark");
    document.getElementById('selectionSort').classList.remove("btn-dark");
    document.getElementById('bubbleSort').classList.remove("btn-dark");
    document.getElementById('insertionSort').classList.remove("btn-dark");
    document.getElementById('newArray').classList.remove("btn-dark");
    document.getElementById('mergeSort').classList.add("btn-primary");
    document.getElementById('quickSort').classList.add("btn-primary");
    document.getElementById('selectionSort').classList.add("btn-primary");
    document.getElementById('bubbleSort').classList.add("btn-primary");
    document.getElementById('insertionSort').classList.add("btn-primary");
    document.getElementById('newArray').classList.add("btn-primary");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    document.getElementById('mergeSort').classList.add("btn-dark");
    document.getElementById('quickSort').classList.add("btn-dark");
    document.getElementById('selectionSort').classList.add("btn-dark");
    document.getElementById('bubbleSort').classList.add("btn-dark");
    document.getElementById('insertionSort').classList.add("btn-dark");
    document.getElementById('newArray').classList.add("btn-dark");
    document.getElementById('mergeSort').classList.remove("btn-primary");
    document.getElementById('quickSort').classList.remove("btn-primary");
    document.getElementById('selectionSort').classList.remove("btn-primary");
    document.getElementById('bubbleSort').classList.remove("btn-primary");
    document.getElementById('insertionSort').classList.remove("btn-primary");
    document.getElementById('newArray').classList.remove("btn-primary");
  }
}
let slider = document.getElementById("myRange");
let speed = document.querySelector("#mySpeed");
let bars = document.getElementById("container");
let array = [];
let time = 250;
for (let i = 1; i <= slider.value; i++) {
  let randNumber = getRndInteger(0, 100);
  array.push(randNumber);
}
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
let container = document.getElementById("container");
let width = container.getBoundingClientRect();
let barsWidth = width.width - 220;
let len = Math.floor(barsWidth / slider.value);
for (let i = 0; i < array.length; i++) {
  let element = array[i] * 5;
  let barHeight = document.createElement("div");
  bars.appendChild(barHeight);
  barHeight.className = "barHeight";
  barHeight.id = `bar${i}`;
  document.getElementById(`bar${i}`).style.height = `${element}px`;
  document.getElementById(`bar${i}`).style.width = `${len}px`;
  document.getElementById(`bar${i}`).style.display = "inline-block";
  document.getElementById(`bar${i}`).style.margin = "1px";
  document.getElementById(`bar${i}`).style.backgroundColor = "#5cdb95";
}
let val = slider.value;
slider.addEventListener("change", () => {
  //event listener for size slider
  bars.innerHTML = ` `;
  array = [];
  for (let i = 1; i <= slider.value; i++) {
    let randNumber = getRndInteger(0, 100);
    array.push(randNumber);
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let len = Math.floor(barsWidth / slider.value);
  for (let i = 0; i < slider.value; i++) {
    let element = array[i] * 5;
    let barHeight = document.createElement("div");
    bars.appendChild(barHeight);
    barHeight.className = "barHeight";
    barHeight.id = `bar${i}`;
    document.getElementById(`bar${i}`).style.height = `${element}px`;
    document.getElementById(`bar${i}`).style.width = `${len}px`;
    document.getElementById(`bar${i}`).style.display = "inline-block";
    document.getElementById(`bar${i}`).style.margin = "1px";
    document.getElementById(`bar${i}`).style.backgroundColor = "#5cdb95";
  }
  val = slider.value;
  // console.log(val);
});

// console.log(speed);
speed.addEventListener("input", function () {
  //time
  time = 520 - this.value;
  // console.log(time);
});
// console.log(time);
let newArray = document.getElementById("newArray");
newArray.addEventListener("click", function () {
  bars.innerHTML = ` `;
  array = [];
  for (let i = 1; i <= val; i++) {
    let randNumber = getRndInteger(0, 100);
    array.push(randNumber);
  }
  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  let len = Math.floor(barsWidth / val);
  for (let i = 0; i < val; i++) {
    let element = array[i] * 5;
    let barHeight = document.createElement("div");
    bars.appendChild(barHeight);
    barHeight.className = "barHeight";
    barHeight.id = `bar${i}`;
    document.getElementById(`bar${i}`).style.height = `${element}px`;
    document.getElementById(`bar${i}`).style.width = `${len}px`;
    document.getElementById(`bar${i}`).style.display = "inline-block";
    document.getElementById(`bar${i}`).style.margin = "1px";
    document.getElementById(`bar${i}`).style.backgroundColor = "#5cdb95";
  }
});

function disableSortingButtons() {
  document.getElementById("bubbleSort").disabled = true;
  document.getElementById("mergeSort").disabled = true;
  document.getElementById("insertionSort").disabled = true;
  document.getElementById("selectionSort").disabled = true;
  document.getElementById("quickSort").disabled = true;
  document.getElementById("newArray").disabled = true;
  document.getElementById("myRange").disabled = true;
}
function enableSortingButtons() {
  document.getElementById("bubbleSort").disabled = false;
  document.getElementById("mergeSort").disabled = false;
  document.getElementById("insertionSort").disabled = false;
  document.getElementById("selectionSort").disabled = false;
  document.getElementById("quickSort").disabled = false;
  document.getElementById("newArray").disabled = false;
  document.getElementById("myRange").disabled = false;
}

async function pleaseWait(time) {
  return new Promise((resolve) => {
    setTimeout((time) => {
      resolve("");
    }, time);
  });
}
