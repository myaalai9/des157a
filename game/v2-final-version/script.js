(function(){
    'use strict';
    console.log('reading js');

    const start = document.querySelector('#start');
    const inst = document.querySelector('#instructions');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');

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

        // Randomly set the gameData.index here which will choose the player
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        setUpTurn();

    });

    // The close button for rules 
    document.querySelector('#continue-btn').addEventListener('click', function(){
        
        start.style.display = 'none';
        inst.style.display = 'none';
        game.style.display = 'block';
    });
    

    document.querySelector('#restart-btn').addEventListener('click', function(){
        location.reload(); // refresh the page 
    });

})();