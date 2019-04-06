$(document).ready(function() { 

    var goalCounter = 0;

    var targetNum = 0;

    var rockOne = 0; 
    var rockTwo = 0;
    var rockThree = 0;
    var rockFour = 0;

    var winCount = 0;
    var lossCount = 0;

    function startGame() {
        goalCounter = 0;
        $("#current-score-num").text(goalCounter);

        targetNum = randomNums(19, 120);
        $("#random-num").text(targetNum);
        console.log("Goal is: " + targetNum);
        rockOne = randomNums(1, 12);
        rockTwo = randomNums(1, 12);
        rockThree = randomNums(1, 12);
        rockFour = randomNums(1, 12);
        console.log("Crystal values: " + rockOne + ", " + rockTwo + ", " + rockThree + ", " + rockFour);

    } 

    function randomNums(min, max) {
        var rando = Math.floor(Math.random() * (max - min + 1)) + min;
        return rando;
    }


    $("#rock-one").on("click", function() {
        goalCounter += rockOne;
        console.log(goalCounter);
        $("#current-score-num").text(goalCounter);
        scoreCheck();
    });

    $("#rock-two").on("click", function() {
        goalCounter += rockTwo;
        console.log(goalCounter);
        $("#current-score-num").text(goalCounter);
        scoreCheck();
    });

    $("#rock-three").on("click", function() {
        goalCounter += rockThree;
        console.log(goalCounter);
        $("#current-score-num").text(goalCounter);
        scoreCheck();
    });

    $("#rock-four").on("click", function() {
        goalCounter += rockFour;
        console.log(goalCounter);
        $("#current-score-num").text(goalCounter);
        scoreCheck();
    });
    
    function scoreCheck() {
        if (goalCounter > targetNum) {
            lossCount++;
            $("#losses").text(lossCount);
            $("#outcome-message").text("You lost! What a loser :P");
            startGame();
        }
        else if (goalCounter === targetNum) {
            winCount++;
            $("#wins").text(winCount);
            $("#outcome-message").text("You won! You're awesome!!!");
            startGame();
        }
    }

    startGame();

});
