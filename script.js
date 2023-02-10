("use strict");

window.addEventListener("load", init);

function generateData() {
  let data = [];
  for (let i = 0; i < 40; i++) {
    data.push(Math.floor(Math.random() * 32));
  }
  return data;
}

let model = generateData();

function init() {
  loop();
}

function loop() {
  displayData();
  setTimeout(loop, 1000);
}

function GetNumbers() {
  return model[model.length - 1];
}

function displayData() {
  let barChart = document.querySelector(".bars");
  barChart.innerHTML = "";
  for (let i = 0; i < model.length; i++) {
    let bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = model[i] + "em";
    barChart.appendChild(bar);
  }
  modifyModel();
}

function modifyModel() {
  model.pop();
  model.unshift(Math.floor(Math.random() * 32));
}
