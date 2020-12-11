// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 100;
var playerMoney = 10;

// log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);

// enemy variables
var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// fight function -- created via function expression
var fight = function() {
  window.alert("Welcome to Robot Gladiators!");

  var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
  if (promptFight === "FIGHT" || promptFight === "fight") {
      //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
      enemyHealth -= playerAttack

      // Log a resulting message to the console so we know that it worked.
      console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");
  
      // check enemy's health
      if (enemyHealth <= 0) {
          window.alert(enemyName + " has died!");
          }
      else {
          window.alert(enemyName + " still has " + enemyHealth + " health left.");
          }

      // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
      playerHealth -= enemyAttack

      // Log a resulting message to the console so we know that it worked.
      console.log(enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining.");

      // check player's health
      if (playerHealth <= 0) {
          window.alert(playerName + " has died!");
          }
      else {
          window.alert(playerName + " still has " + playerHealth + " health left.");
          }
  }
  else if (promptFight === "SKIP" || promptFight === "skip") {
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");
      // if yes (true), leave fight
      if (confirmSkip) {
          window.alert(playerName + " has decided to skip this fight. Goodbye!");
          // subtract money from playerMoney for skipping
          playerMoney -= 2;
      }
      // if no (false), ask question again by running fight() again
      else {
          fight();
      }
  }
  else {
      window.alert("not a valid option!");
      fight();
  }
};

fight();