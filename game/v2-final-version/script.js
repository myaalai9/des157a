(function(){
    'use strict';
    console.log('reading js');

    const start = document.querySelector('#start');
    const inst = document.querySelector('#instructions');
    const game = document.querySelector('#game');
    const gameControl = document.querySelector('#gamecontrol');
    const diceArea = document.querySelector ('#dicearea');
    const score2 = document.querySelector('#player2-score');
    const score1 = document.querySelector('#player1-score');

    const gameData = {
        dice: ['worm.svg', 'ladybug2.svg', 'ladybug3.svg', 
               'ladybug4.svg', 'ladybug5.svg', 'ladybug6.svg'],
        players: ['player 1', 'player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    }; 

    // Click start button to begin game
    document.querySelector('#start-btn').addEventListener('click', function(){
        
        start.style.display = 'none';
        inst.style.display = 'block';
        game.style.display = 'none';



        // Closes the rules 
        document.querySelector('#continue-btn').addEventListener('click', function(){
            
            start.style.display = 'none';
            inst.style.display = 'none';
            game.style.display = 'block';
        });

        document.querySelector('#tutorial-btn').addEventListener('click', function(){
            
            start.style.display = 'none';
            inst.style.display = 'block';
            game.style.display = 'none';
        });
        
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);
        
        setUpTurn();
 
    });

    function setUpTurn() {
        // console.log('setting up the turn')
        gameControl.innerHTML = `<h4>Roll the dice for the ${gameData.players[gameData.index]}</h4>`;
        gameControl.innerHTML += '<button id="roll">Look for ladybugs</button>'; 
        
        document.querySelector('#roll').addEventListener('click',function(){

            console.log('Roll the Dice!');
            throwDice();
        })
        
    }

    function throwDice(){
        diceArea.innerHTML = ''; 
        gameData.roll1 = Math.floor(Math.random() * 6) + 1; //Using ceil could result in zero
        gameData.roll2 = Math.floor(Math.random() * 6) + 1; 
        // console.log(gameData.roll1);
        // console.log(gameData.roll2);
        gameControl.innerHTML = `<h4>Roll the dice for the ${gameData.players[gameData.index]}</h4>`;
        diceArea.innerHTML += `<img id="die1" src="images/${gameData.dice[gameData.roll1-1]}"> <img id="die2" src="images/${gameData.dice[gameData.roll2-1]}">`; 
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);
    }



    document.querySelector('#restart-btn').addEventListener('click', function(){
        location.reload(); // refresh the page 
    });

})();