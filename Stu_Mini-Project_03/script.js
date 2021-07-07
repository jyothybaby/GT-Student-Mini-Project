var wins = 0, lost = 0, tie = 0;
var computerPrompt = ["R", "S", "P"];

window.alert("Lets Play!!");
playGame();

function playGame() {
   let userInput = prompt("what is your choice");
   if (!userInput) {
      return;
   }

   var userPrompt = userInput.toUpperCase();
   var random = Math.floor(Math.random() * computerPrompt.length);
   var computerSelection = prompt("Computer selects : ", computerPrompt[random]);
   gameFunction(userPrompt, computerSelection);

   if (window.confirm("Do you want to play more")) {
      playGame();
   } else {
      window.alert("This is the Summary!!" + "\n" + "wins: " + wins + "\n" + "lost: " + lost + "\n" + "Tie: " + tie);
   }
}

function gameFunction(userPrompt, computerSelection) {
   if (userPrompt === computerSelection) {
      tie = tie + 1;

      window.alert("It is a Tie!! " + "\n" + "wins: " + wins + "\n" + "lost: " + lost + "\n" + "Tie: " + tie);
   } else if ((userPrompt == "R" && computerSelection == "S") || (userPrompt == "S" && computerSelection == "P") || (userPrompt == "P" && computerSelection == "R")) {
      wins = wins + 1;
      window.alert("You Win!!" + "\n" + "wins: " + wins + "\n" + "lost: " + lost + "\n" + "Tie: " + tie);


   } else {
      lost++
      window.alert("You Lost!!" + "\n" + "wins: " + wins + "\n" + "lost: " + lost + "\n" + "Tie: " + tie);

   }
   return;

}



