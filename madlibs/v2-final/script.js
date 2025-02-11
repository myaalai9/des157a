(function(){

    'use strict';
    console.log('reading js'); 

    const myForm = document.querySelectorAll('#madlib-questions'); 
    const formData = document.querySelectorAll('input[type=text]');
    const dropDown = document.querySelector('select'); 
    const madlib =document.querySelector('#output');

    const section1 = document.querySelector('#section-1');
    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');

    const nextBtn = document.querySelector('#next-btn');
    const submitBtn = document.querySelector('#submit-btn');
    const restartBtn = document.querySelector('#restart-btn');

     //gets data from form field and assigns it a variable
     const dateName = document.querySelector('#date-name').value;
     const adj  = document.querySelector('#adjective').value;
     const clothing = document.querySelector('#clothing').value;
     const num = document.querySelector('#number').value;
     const food = document.querySelector('#food').value;
     const noun = document.querySelector('#noun').value;
     const obj = document.querySelector('#object').value;
     const opt = document.querySelector('#betterorworse').value;
     const objPlural = document.querySelector('#object-plural').value;
     const place = document.querySelector('#place').value;
     const verb = document.querySelector('#verb').value;
     const emotion = document.querySelector('#emotion').value;

     nextBtn.addEventListener('click', function () {
        let errorMessage = '';
    
        if (dateName === '') {
            errorMessage = 'Please enter a name for your date';
        } else if (adj === '') {
            errorMessage = 'Please provide an adjective';
        } else if (clothing === '') {
            errorMessage = 'Please provide an item of clothing';
        } else if (num === '') {
            errorMessage = 'Please provide a number';
        } else if (food === '') {
            errorMessage = 'Please provide a food item';
        } else if (noun === '') {
            errorMessage = 'Please provide a noun';
        }
    
        if (errorMessage) {
            alert(errorMessage);  // Show the first missing field
        } else {
            section1.style.visibility = 'hidden';
            section2.style.visibility = 'visible';
            section3.style.visibility = 'hidden';
        }
    });

    restartBtn.addEventListener('click', function () {
        section3.style.visibility = 'hidden';
        section2.style.visibility = 'hidden';
        section1.style.visibility = 'visible';
    });


    submitBtn.addEventListener('click',function(event){
        event.preventDefault();
        alert('form was submitted')

        
        section1.style.visibility = 'hidden';
        section2.style.visibility = 'hidden';
        section3.style.visibility = 'visible';

        // let myText; 

        // if(dateName == ''){
        //     myText = 'Please provide a name for your date'
        //     document.querySelector('#date-name').focus();
        // }
        // else if(adj == ''){
        //     myText = 'Please provide an adjective'
        //     document.querySelector('#adjective').focus();
        // }
        // else if(clothing == ''){
        //     verb = 'Please provide a item of clothing'
        //     document.querySelector('#clothing').focus();
        // }
        // else if(num == ''){
        //     myText = 'Please provide a number'
        //     document.querySelector('#number').focus();
        // }
        // else if(food == ''){
        //     myText = 'Please provide a food item'
        //     document.querySelector('#food').focus();
        // }
        // else if(noun == ''){
        //     myText = 'Please provide a noun'
        //     document.querySelector('#noun').focus();
        // }
        // else if(obj == ''){
        //     myText = 'Please provide an object'
        //     document.querySelector('#object').focus();
        // }
        // else if(opt == ''){
        //     myText = 'Please select an option'
        //     document.querySelector('#betterorworse').focus();
        // }
        // else if(objPlural == ''){
        //     myText = 'Please provide a plural object'
        //     document.querySelector('#object-plural').focus();
        // }
        // else if(place == ''){
        //     myText = 'Please provide a place'
        //     document.querySelector('#place').focus();
        // }
        // else if(verb == ''){
        //     myText = 'Please provide a verb'
        //     document.querySelector('#verb').focus();
        // }
        // else if(emotion == ''){
        //     myText = 'Please provide an emotion'
        //     document.querySelector('#emotion').focus();
        // }
        // else{
            myText = `<p>When I arrived at the restaurant, I was excited to meet my date,${dateName} who I met online. They were wearing a ${adj} ${clothing}, which was a good sign, but things got weird soon.</p>

            <p>First, they ordered ${num} plates of ${food} , then started asking me about ${noun} loudly in the middle of the restaurant. I tried to laugh it off but when they pulled out a ${obj} and said “I never leave home without this”. I was surprised and spilled my glass of wine.</p>
                        
            <p> From there it got ${opt}. They told me they collect ${objPlural} as a hobby and asked if I was interested in joining them to a museum in ${place} next time. When the bill came, they started to ${verb} non-stop, so I had to pay for everything.</p>
                        
            <p>When I left, they asked “Are you up for a second date?” I’m not sure if they meant it, but I was feeling ${emotion} about it.</p>`;
            const textFields = document.querySelectorAll('input[type=text]');
            for( let i=0; i<textFields.length; i++ ){
                textFields[i].value = '';
            // }
        
        }
    
        madlib.innerHTML = myText; 
    });

})(); 