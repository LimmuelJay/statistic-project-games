

document.querySelector(".roll-btn").onclick = function() {randomDiceP1D1()};


function randomDiceP1D1(){

    // Player 1 Random Dice
    var player1Dice1 = Math.floor(Math.random() * 6) + 1;
    var player1Dice2 = Math.floor(Math.random() * 6) + 1;

    // Player 2 Random Dice
    var player2Dice1 = Math.floor(Math.random() * 6) + 1;
    var player2Dice2 = Math.floor(Math.random() * 6) + 1;


    // Player 1 Dice 1
    
    document.querySelector(".p1d1").src = "images/dice" + player1Dice1 + ".png";
    
    // Player 1 Dice 2
    
    document.querySelector(".p1d2").src = "images/dice" + player1Dice2 + ".png";
    

    // Player 2 Dice 1
    
    document.querySelector(".p2d1").src = "images/dice" + player2Dice1 + ".png";
    

    // Player 2 Dice 2
    
    document.querySelector(".p2d2").src = "images/dice" + player2Dice2 + ".png";
    

    // Player Winner

    var player1 = player1Dice1 + player1Dice2;
    var player2 = player2Dice1 + player2Dice2;

    if (player1 > player2){
       document.querySelector(".title-container h1").textContent = "Player 1 wins!";
    
                // Add Score Player 1
       let scorep1 = parseFloat(document.querySelector(".scorep1 p").textContent);
       scorep1++;
       document.querySelector(".scorep1 p").textContent = scorep1;
    }else

    if (player1 < player2){
        document.querySelector(".title-container h1").textContent = "Player 2 wins!";

                // Add Score Player 2
        let scorep2 = parseFloat(document.querySelector(".scorep2 p").textContent);
        scorep2++;
        document.querySelector(".scorep2 p").textContent = scorep2;
    }else {
        document.querySelector(".title-container h1").textContent = "Draw!";
    }

}







