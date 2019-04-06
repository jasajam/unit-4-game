$(document).ready(function() { 

    var goalCounter = 0;
// set as numbers to show they will be numbers

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

        // change back from 120 -- lowered for testing purposes
        targetNum = randomNums(19, 40);
        $("#random-num").text(targetNum);
        console.log("Goal is: " + targetNum);
        rockOne = randomNums(1, 12);
        rockTwo = randomNums(1, 12);
        rockThree = randomNums(1, 12);
        rockFour = randomNums(1, 12);
        console.log("Crystal values: " + rockOne + ", " + rockTwo + ", " + rockThree + ", " + rockFour);
    
        // $("#rock-one").val(rockOne);
        // $("#rock-two").val(rockTwo);
        // $("#rock-three").val(rockThree);
        // $("#rock-four").val(rockFour);
    
    } 

    function randomNums(min, max) {
        var rando = Math.floor(Math.random() * (max - min + 1)) + min;
        return rando;
    }



    // think this is a redundance of the startGame() function
    // function resetGame() {
    //     startGame();
    //     goalCounter = 3;
    //     $("#current-score-num").text(goalCounter);
    // }

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

//DONE when page loads you see: permanent elements
    //DONE random numbers for crystals & main random number get chosen
    //  DONE Math.random() + Math.ceiling/floor to choose the numbers
    //DONE????? assign values to crystals

    //DONE random num function: math.random() 19-120 for targetNum & 1-12 for crystals
        // w/ min & maxes -- can get 1 function that will do a random number for targetNum and crystals 


    // reset function: new random #s assigned, count goes to 0
        // maybe gets called first at start of game for putting goalCount to 0 & display at 0
        // can call on random num function for choosing random numbers 
   

    // conditional function: checking the goalCount against the targetNum (as below) - 
    

// onclick event function to start listening to what image is chosen 
    // DONE based on whichever image is chosen, add whatever associated # to the main count
    //    DONE show the user the updated count # 
    //     DONE??? check - is count greater than main random #
    //          if yes, user loses --> loss count goes up by 1, and that's shown to the user
                // message appears saying user lost 
                // then everything resets (new random #s assigned, count goes to 0)
    //     check - is count equal to main random # 
                //  if yes, user wins --> win count goes up by 1, that's shown to user
                    // message appears saying user won
                    // then reset everything 


// toggle - 2 states