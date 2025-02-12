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
    
    nextBtn.addEventListener('click', function (event) {
        event.preventDefault();

        const dateName = document.querySelector('#date-name').value;
        const adj = document.querySelector('#adjective').value;
        const clothing = document.querySelector('#clothing').value;
        const num = document.querySelector('#number').value;
        const food = document.querySelector('#food').value;
        const noun = document.querySelector('#noun').value;

        if(dateName == ''){
            alert('Please provide a name for your date');
        }
        else if(adj == ''){
            alert('Please provide an adjective');
        }
        else if(clothing == ''){
            alert('Please provide a item of clothing');
        }
        else if(num == ''){
            alert('Please provide a number');
        }
        else if(food == ''){
            alert('Please provide a food item');
        }
        else if(noun == ''){
            alert('Please provide a noun');
        }else{
            section1.style.visibility = 'hidden';
            section2.style.visibility = 'visible';
            section3.style.visibility = 'hidden';
        }
    });

    submitBtn.addEventListener('click',function(event){
        event.preventDefault();
        alert('form was submitted')

        const obj = document.querySelector('#object').value;
        const opt = document.querySelector('#betterorworse').value;
        const objPlural = document.querySelector('#object-plural').value;
        const place = document.querySelector('#place').value;
        const verb = document.querySelector('#verb').value;
        const emotion = document.querySelector('#emotion').value;

        
        section1.style.visibility = 'hidden';
        section2.style.visibility = 'hidden';
        section3.style.visibility = 'visible';

        if(obj == ''){
            alert('Please provide an object');

        }
        else if(opt == ''){
            alert('Please choose an option');
        }
        else if(objPlural == ''){
            alert('Please provide a plural object');

        }
        else if(place == ''){
            alert('Please provide a place');
        }
        else if(verb == ''){
            alert('Please provide a verb');
        }
        else if(emotion == ''){
            alert('Please provide a emotion');
        }else{
            section1.style.visibility = 'block';
            section2.style.visibility = 'hidden';
            section3.style.visibility = 'hidden';



            document.querySelector('#madlib').innerHTML = `<p>When I arrived at the restaurant, I was excited to meet my date,${dateName} who I met online. They were wearing a ${adj} ${clothing}, which was a good sign, but things got weird soon.</p>

            <p>First, they ordered ${num} plates of ${food} , then started asking me about ${noun} loudly in the middle of the restaurant. I tried to laugh it off but when they pulled out a ${obj} and said “I never leave home without this”. I was surprised and spilled my glass of wine.</p>
                        
            <p> From there it got ${opt}. They told me they collect ${objPlural} as a hobby and asked if I was interested in joining them to a museum in ${place} next time. When the bill came, they started to ${verb} non-stop, so I had to pay for everything.</p>
                        
            <p>When I left, they asked “Are you up for a second date?” I’m not sure if they meant it, but I was feeling ${emotion} about it.</p>`;
        
        }
    
        
    });

    restartBtn.addEventListener('click', function () {
        section3.style.visibility = 'hidden';
        section2.style.visibility = 'hidden';
        section1.style.visibility = 'visible';
    });


})(); 