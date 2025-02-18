(function(){

    'use strict';
    console.log('reading js'); 

    const img = document.querySelector('#beach');
    const overlap = document.querySelector('#friend');


    img.addEventListener('mouseover', function(event) {
        event.preventDefault();
        img.style.filter = 'grayscale(0%) blur(0)';
    });

    overlap.addEventListener('mouseover', function(event) {
        event.preventDefault();
        overlap.style.filter = 'grayscale(0%) blur(0)';

    });

    overlap.addEventListener('mouseout', function(event) {
        event.preventDefault();
        overlap.style.filter = 'grayscale(60%) blur(1px)';
    });

    img.addEventListener('mouseout', function(event) {
        event.preventDefault();
        img.style.filter = 'grayscale(80%) blur(2px)';
    });

})(); 