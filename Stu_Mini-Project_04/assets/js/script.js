var count = 0;
var incrementEl = document.querySelector(".start-button");
var countEl = document.querySelector(".large-font timer-count");



// function setCounterText() {
//     countEl.textContent = count;
//   }

//document.getElementById("start-button").onclick = function () {
incrementEl.addEventListener("click", function () {
   countdown();


 });

function countdown() {
    var timeLeft = 10;
    var timeInterval = setInterval(function () {
        countEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft === 0) {
            clearInterval(timeInterval);
        }
    },1000);
}
