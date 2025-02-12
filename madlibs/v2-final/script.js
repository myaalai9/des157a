(function(){

    'use strict';
    console.log('reading js'); 

    const myForm = document.querySelectorAll('.madlib-questions'); 
    // console.log(myForm);
    const formData = document.querySelectorAll('input[type=text]');
    const dropDown = document.querySelector('select'); 
    const madlib = document.querySelector('#output');
    // console.log(madlib)

    const section1 = document.querySelector('#section-1');
    const section2 = document.querySelector('#section-2');
    const section3 = document.querySelector('#section-3');
    const body = document.querySelector('body'); 

    // const nextBtn = document.querySelector('#next-btn');
    const submitBtn = document.querySelector('#submit-btn');
    const restartBtn = document.querySelector('#restart-btn');

    const dateName = document.querySelector('#date-name');
    const adj = document.querySelector('#adjective');
    const clothing = document.querySelector('#clothing');
    const num = document.querySelector('#number');
    const food = document.querySelector('#food');
    const noun = document.querySelector('#noun');
    const obj = document.querySelector('#object');
    const opt = document.querySelector('#betterorworse')
    const objPlural = document.querySelector('#object-plural');
    const place = document.querySelector('#place');
    const verb = document.querySelector('#verb');
    const emotion = document.querySelector('#emotion');

    let dateNameValue,adjValue,clothingValue,numValue,foodValue,nounValue,objValue,optValue,objPluralValue,placeValue,verbValue,emotionValue;
    
    myForm[0].addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('submitted first form');

        dateNameValue = dateName.value;
        console.log(dateNameValue);

        adjValue = adj.value;
        console.log(adjValue);

        clothingValue = clothing.value;
        console.log(clothingValue);
        
        numValue = num.value;
        console.log(numValue);

        foodValue = food.value;
        console.log(foodValue);

        nounValue = noun.value;
        console.log(nounValue);

        section1.style.display = 'none';
        section2.style.display = 'flex';
        section3.style.display = 'none';
   
    });

    submitBtn.addEventListener('click',function(event){
        event.preventDefault();

        objValue = obj.value;
        console.log(objValue);

        optValue = opt.value;
        console.log(optValue);

        objPluralValue = objPlural.value;
        console.log(objPluralValue);
        
        placeValue = place.value;
        console.log(placeValue); 

        verbValue = verb.value;
        console.log(verbValue);

        emotionValue = emotion.value;
        console.log(emotionValue);

        section1.style.display = 'none';
        section2.style.display = 'none';
        section3.style.display = 'flex';
        body.style.backgroundColor = 'rgb(171, 136, 136)';
        restartBtn.style.display = 'block';


        madlib.innerHTML = `<p>When I arrived at the restaurant, I was excited to meet my date, ${dateNameValue} who I met online. They were wearing a ${adjValue} ${clothingValue}, which was a good sign, but things got weird soon.</p>
            
        <p>First, they ordered ${numValue} plates of ${foodValue} , then started asking me about ${nounValue} loudly in the middle of the restaurant. I tried to laugh it off but when they pulled out a ${objValue} and said “I never leave home without this”. I was surprised and spilled my glass of wine.</p>
       
        <p> From there it got ${optValue}. They told me they collect ${objPluralValue} as a hobby and asked if I was interested in joining them to a museum in ${placeValue} next time. When the bill came, they started to ${verbValue} non-stop, so I had to pay for everything.</p>
            
        <p>When I left, they asked “Are you up for a second date?” I’m not sure if they meant it, but I was feeling ${emotionValue} about it.</p>`; 
    
        
        for(const eachField of formData){
            eachField.value ='';
        }
    });

    restartBtn.addEventListener('click', function () {
        section3.style.display = 'none';
        section2.style.display = 'none';
        section1.style.display = 'flex';
        body.style.backgroundColor = ' rgb(56, 88, 50)';
    });


})(); 