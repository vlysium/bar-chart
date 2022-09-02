"use strict";

let queue = []; //empty array, will be filled with items
let currentCustomers; //a random number between 0 and 32

let barChart; //bars will be appended to this bar chart element

document.addEventListener("DOMContentLoaded", init);

//initialize
function init() {
  barChart = document.getElementById("bar-chart");

  updateQueue();
}

//update the queue with the new number of customers
function updateQueue() {
  if (queue.length >= 40) {
    queue.pop();
  }

  currentCustomers = Math.floor(Math.random() * 33); //assuming between 0 and 32 inclusive
  queue.unshift(currentCustomers);
  //console.log(queue);

  displayQueue();

  setTimeout(updateQueue, 1000);
}

//add a new bar to the bar chart
function displayQueue() {
  barChart.textContent = "";
  queue.forEach((bar) => {
    barChart.innerHTML += `<li class="bar" data-hover="${bar}" style="height: ${bar * 6 + 4}px; background-color: hsl(${
      128 - bar * 4
    }, 100%, 50%); color: hsl(${128 - bar * 4}, 100%, 50%)"></li>`;
  });
}
