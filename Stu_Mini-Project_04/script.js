var btnStart = document.querySelector(".start-button");
var txtCounter = document.getElementById("timerDisplay");
var loseCounter = document.querySelector(".lose");
var winsCounter = document.queryCommandValue(".win");
var lost = 0;
var wins = 0;
var btnReset = document.querySelector(".reset-button");


//var arrayString=["j","a","v","a","s","c","r","i","p","t"];
var arrayString = "javascript";
var gussingArrayString = "j_v_aSc_r__t";
console.log(gussingArrayString.length);

// "Start" button event listner
btnStart.addEventListener("click", function () {

    countdown();
});
//"Reset button event listner"
btnReset.addEventListener("click", function () {
    lost = 0;
    wins = 0;
    loseCounter.textContent = lost;
    winsCounter.textContent = wins;
});

function countdown() {
    var timeLeft = 10;
    console.log(timeLeft);
    var timeInterval = setInterval(function () {
        btnStart.disabled = true;
        txtCounter.textContent = timeLeft;
        timeLeft--;
        console.log(timeLeft);
        if (timeLeft < 0){
            clearInterval(timeInterval);
            lost++;
            console.log(lost);
            loseCounter.textContent = lost;
            btnStart.disabled = false;

        } else {
            wins++;
            winsCounter.textContent = wins;
        }
   

        }, 1000);
    }





// function countdown() {
//     var timeLeft = 10;
//     console.log(timeLeft);
//     var timeInterval = setInterval(function () {
//         btnStart.disabled = true;
//         txtCounter.textContent = timeLeft;
//         timeLeft--;
//         console.log(timeLeft);
//         for (var i = 0; i <gussingArrayString.length; i++) {
//             if (gussingArrayString[i] === "_") {
//                 document.addEventListener("keydown", keydownAction);

//             }

//         }
//         if ((timeLeft > 0) && (gussingArrayString===arrayString )){

//             wins++;
//             winsCounter.textContent = wins;
//         } else {
//             clearInterval(timeInterval);
//             lost++;
//             console.log(lost);
//             loseCounter.textContent = lost;
//             btnStart.disabled = false;

//         }

//     }, 1000);

// }

// function keydownAction(event) {
//     var keyPress = event.key;
//     document.querySelector("#wordBlanks").textContent = keyPress;
// }

