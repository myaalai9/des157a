(function(){

    'using strict';
    console.log('reading js'); // debugging and ensures java script is linked properly

    const collage = document.querySelector('section');
    const overlay = document.querySelector('#overlay'); 
    const overlayBg = document.querySelector('#overlay-background');

    const mom = document.querySelector('#mom-on-beach');
    const dad = document.querySelector('#dad-on-beach');
    const rover = document.querySelector('#rover-on-beach');
    const boy = document.querySelector('#boy-on-beach');
    const sunset = document.querySelector('#sunset-beach');
    const shellPicking = document.querySelector('#shell-picking');
    const beachCorner = document.querySelector('#beach-corner')

    const button = document.querySelector('.close'); 
    const overlayImg = document.querySelector('#overlay-img');
    const overlayText = document.querySelector('h2');

    // Event listener for when photo of mom is clicked
    mom.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
    });

    // Event listener for when photo of dad is clicked
    dad.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/dad-on-beach-full.jpg'); // Changes img source
        overlayText.innerHTML = '<h2>1997: My dad and my brother on the beach.<br> He was just a little baby! </h2>';
    });

    // Event listener for when photo of my dog,rover is clicked
    rover.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/rover-on-beach-full.jpg'); // Changes img source
        overlayText.innerHTML = '<h2>August 2023: My dog , Rover enjoying<br> a day on the beach. He loves running around<br> and playing fetch. </h2>';
        overlay.style.top ='50px'; //adjust overlay position
        button.style.top ='530px';
    });

    // Event listener for when photo of brother when he was young is clicked
    boy.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/boy-on-beach-full.jpg');// Changes img source
        overlayText.innerHTML = '<h2> 2000: My brother running on the beach, happily<br> playing with his football. I think<br> he was around 4 years old </h2>';
    });

    // Event listener for when photo of brother and his friend is clicked
    sunset.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/sunset-beach-full.jpg'); // Changes img source
        overlayImg.style.width = '500px';
        overlay.style.top ='40px'; //adjust overlay position
        overlayText.innerHTML = '<h2> 2024: My brother and his friend enjoying the sunset.<br>It was the day before my flight back to Davis.</h2>';
        button.style.top ='600px'; //adjust button position
    });

    // Event listener for when photo of my cousin and I collecting sea shells
    shellPicking.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/shell-picking-full.jpg'); // Changes img source
        overlayImg.style.width = '450px';
        overlayText.innerHTML = '<h2> 2018: My cousin and I was picking shells on the<br> beach to make a picture frame</h2>';
        overlay.style.top ='35px'; //adjust overlay position
        overlay.style.left = '360px';
        button.style.top ='610px'; //adjust button position
        button.style.left = '450px'
    });

    // Event listener for when photo of my dad skipping rocks on the ocean is clicked
    beachCorner.addEventListener('click' , function(event){
        event.preventDefault();
        overlay.style.display = 'block';
        overlayBg.style.display = 'block'; 
        collage.style.display = 'block';
        overlayImg.setAttribute('src','images/beach-corner-full.jpg'); // Changes img source
        overlayText.innerHTML = '<h2> 2021: It was a spontaneous trip and I snapped<br> this photo of my dad throwing a stone into<br> the ocean where it would skip over water. </h2>';
        overlay.style.top ='70px'; //adjust overlay position
        button.style.top ='530px'; //adjust button position
    });


     // Event listener for the button to close the image is clicked and shows the collage. 
    document.querySelector('.close').addEventListener('click',function(event){
        event.preventDefault();
        overlay.style.display = 'none';
        overlayBg.style.display = 'none'; 
        collage.style.display = 'block';
    })

    // Event listener for the when the ESC button is clicked and returns to the collage.  
    document.addEventListener('keydown', function(event){
        if (event.key === 'Escape'){ //if key pressed equals Escape, then the following should happen
            overlay.style.display = 'none';
            overlayBg.style.display = 'none'; 
            collage.style.display = 'block';
        }
    })
})();