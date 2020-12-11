// player variables
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// enemy variables
var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 50;

// fight function -- created via function expression (not function declaration)
var fight = function(enemyName) {
    while (enemyHealth > 0 && playerHealth > 0) {
        // ask player to fight or skip
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

        // if player selects SKIP, confirm and stop loop
        if (promptFight === "SKIP" || promptFight === "skip") {
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            // if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + " has decided to skip this fight. Goodbye!");
                // subtract money from playerMoney for skipping, stop loop
                playerMoney -= 10;
                break;
            }
        }
        // if player selects fight, fight current enemy
        else {
            //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
            enemyHealth -= playerAttack

            // Log a resulting message to the console so we know that it worked.
            console.log(playerName + " attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + " health remaining.");

            // check enemy's health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died!");
                // award player money for winning
                playerMoney += 20;
                // leave loop when enemy dies
                break;
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
                break;
            }
            else {
                window.alert(playerName + " still has " + playerHealth + " health left.");
            }
        }
    }
};

// start game function
var startGame = function () {
    // reset stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;

    // fight
    for (var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // tell player what round they are in
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));

            // pick new enemy to fight from enemyNames array
            var pickedEnemyName = enemyNames[i];

            // reset enemyHealth before starting new fight
            enemyHealth = 50;

            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;

            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }

    // play again
    endGame();
}

// end game function
var endGame = function () {
    window.alert("The game has now ended. Let's see how you did!");
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");
    }
    // if player has died
    else {
        window.alert("You've lost your robot in battle.");
    }
    
    // ask if player wants to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");
    // restart
    if (playAgainConfirm) {
        startGame();
    }
    // goodbye
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
};

// start game on page load
startGame();

