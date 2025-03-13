(function(){
    'use strict';
    console.log('reading js');

    //sounds
    const bgMusic = new Audio('audio/jungle.mp3');
    const discovery = new Audio('audio/discovery.mp3');

    const start = document.querySelector('#start');
    const inst = document.querySelector('#instructions');
    const game = document.querySelector('#game');
    const gameControl = document.querySelector('#gamecontrol');
    const diceArea = document.querySelector ('#dicearea p');
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

        bgMusic.play();

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
        gameControl.innerHTML = `<h4>${gameData.players[gameData.index]}'s turn!</h4>`;
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
        gameControl.innerHTML = `<h4>${gameData.players[gameData.index]}, Lets's hunt!</h4>`;
        diceArea.innerHTML += `<img id="die1" src="images/${gameData.dice[gameData.roll1-1]}"> <img id="die2" src="images/${gameData.dice[gameData.roll2-1]}">`; 
       // animate magnifying glass here
        document.querySelector('#magnifying-glass1').style.animation = 'none';
        document.querySelector('#magnifying-glass2').style.animation = 'none';
        document.querySelector('#die1').style.animation = 'none';
        document.querySelector('#die2').style.animation = 'none';

        setTimeout(() => {
            document.querySelector('#magnifying-glass1').style.animation = 'wiggle1 3s ease 1';
            document.querySelector('#magnifying-glass2').style.animation = 'wiggle2 3s ease 1';
            document.querySelector('#die1').style.animation = 'appear 3s ease 1';
            document.querySelector('#die2').style.animation = 'appear 3s ease 1';
        }, 10); 
        
       
        gameData.rollSum = gameData.roll1 + gameData.roll2;
        console.log(gameData.rollSum);

        discovery.play()

    
        if (gameData.rollSum === 2){
            // console.log('snake eyes!');
            gameControl.innerHTML += '<h4 id="wormeyes">Oh snap! Two worms, back to zero!</h4>';
            gameData.score[gameData.index] = 0;
            // switch player using tenerary operator 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            // we will add showCurrentScore() function here...
            showCurrentScore(); 
            // wait 3 seconds...
            setTimeout(setUpTurn, 3000); 
        }

        // if either die is a 1
        else if(gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log('one of the two dice rolled a 1');
            // switch player using tenerary operator 
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            gameControl.innerHTML = ''; 
            gameControl.innerHTML +=`<h4 id="yikes">Yikes, a worm!<br>Switching to ${gameData.players[gameData.index]}<h4>`;
            // wait 3 seconds...
            setTimeout(setUpTurn, 3000);  
        }

        // if neither die is a 1
        else{
            console.log('neither die was a 1, game continues'); 
            // update score 
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            gameControl.innerHTML = `<h4 id="turn">${gameData.players[gameData.index]}, what do you want to do?<h4>`;
            gameControl.innerHTML += '<button id="rollagain">Look for more</button><button id="pass">Take a break</button>';


            document.querySelector('#rollagain').addEventListener('click', function(){
                // setUpTurn(); you could set up the turn again or just throw the dice again
                throwDice(); 
            }); 

            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();

            });
            
            // check Winning Condition function will be added here... 
            checkWinningCondition();
        }

    }

    function checkWinningCondition (){
        if (gameData.score[gameData.index] > gameData.gameEnd){

            gameControl.innerHTML = ''; 
            gameControl.innerHTML += `<h4 id="winning">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]
            } points! </h4>`; 
            document.querySelector('#winning').style.animation = 'scale 0.3s ease 5';
            gameControl.innerHTML += '<button id="newgame">Start a New Game?</button>'; 
        } 
        else{
            // show Current score function here
            showCurrentScore(); 
        }

        document.querySelector('#newgame').addEventListener('click', function(){
            location.reload(); // refresh the page 
        });
    
    }

    function showCurrentScore(){
        score1.innerHTML = `${gameData.score[0]}`;
        score2.innerHTML = `${gameData.score[1]}`;
    }


    document.querySelector('#restart-btn').addEventListener('click', function(){
        location.reload(); // refresh the page 
    });

})();