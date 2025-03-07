(function(){
    'use strict';
    console.log('reading js');

    const start = document.querySelector('#start');
    const inst = document.querySelector('#instructions');
    const game = document.querySelector('#game');

    // Click start button to begin game
    document.querySelector('#start-btn').addEventListener('click', function(){
        
        start.style.display = 'none';
        inst.style.display = 'block';
        game.style.display = 'none';
    });

    // The close button
    document.querySelector('#close-btn').addEventListener('click', function(){
        
        start.style.display = 'none';
        inst.style.display = 'none';
        game.style.display = 'block';
    });

})();