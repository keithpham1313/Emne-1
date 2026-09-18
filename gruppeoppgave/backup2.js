

//Sjanse for å bli vinket inn til kontroll.

function policeControl(){
    
    if(rngMathRandom() >= kontrollsjanse){
        message = "Du kjører forbi politikontrollen. Du prøver å se så uskyldig ut at du nesten blir mistenkelig. 👀";
    }
    else{
        message = "🚨 Du blir vinket inn til kontrollen."
        
        message += policeDetection();
    }
    updateView();
}

//Hva oppdager politiet?

function policeDetection(){

    let detection = rngMathRandom();

    if(detection <= 30){
        message = "👮 Politimannen lener seg inn mot vinduet... og sier “Hm. Hva er den lukta?” Du later som du ikke hørte spørsmålet. Han gjentar. 👀"
        
        choice = /*HTML*/ `
            <button onclick="weedChoice('makeExcuse')">Bortforklar 😎</button>
            <button onclick="weedChoice('flee')">Stikke av 👀</button>
        `;

        message += choice;

        return message;
    }
    else if(detection <= 60){
        message = "👮 Politimannen ser på deg. Så på øynene dine. Så på deg igjen, og spurte “Har du drukket?”";
        
        choice = /*HTML*/`
            <button onclick="drunkChoice('makeExcuse')">Bortforklar 😎</button>
            <button onclick="drunkChoice('flee')">Stikke av 👀 🚗🚓</button>       
         `;

         message += choice;

         return message;
    }
    else{
        message = "👮 Politimannen kikker inn i bilen. Han finner ingenting mistenkelig. “Kjør forsiktig” sa han. Du nikker, smiler og kjører av gårde som om ingenting har skjedd.";

        return message;
    }
}

function weedChoice(choice){
    if(choice === "makeExcuse"){
        
        message = "Det er bare en ny type luftfrisker. Den heter Jamaica Breeze. 🌿😎";

        if(chance(50)){
        
            message += `
                Politimannen tror på forklaringen din! Du slapp unna! 😎
            `;

            coolMeter += 100;
        }
        else{

            message += `
                👮 "Den kjøper jeg ikke!" Du får en bot. 
            `;

            coolMeter -= 100;
        }
    }

    else if (choice ==="flee"){
        
        if(chance(20)){
            message += `
                Du kom deg unna! 🚗 <br>+500 cool 😎</br>
            `;

            coolMeter += 500;

        }
        else{
            message += `
                Du blir tatt! Dette var en dårlig idé. <br>-500 cool 😢🚓</br>
            `;

            coolMeter -= 500;
        }

    }
    updateView();

}

function drunkChoice(choice){
    if(choice === "makeExcuse"){
        
        message = "Jeg har ikke drukket. Jeg bare lukter som en pub fordi jeg gikk forbi en. 😎";

        if(chance(50)){
        
            message += `
                Politimannen tror på forklaringen din! Du slapp unna! 😎
            `;

            coolMeter += 100;
        }
        else{

            message += `
                👮 "Den kjøper jeg ikke!" Du får en bot. 
            `;

            coolMeter -= 100;
        }
    }

    else if (choice ==="flee"){
        
        if(chance(20)){
            message += `
                Du kom deg unna! 🚗 <br>+500 cool 😎</br>
            `;

            coolMeter += 500;

        }
        else{
            message += `
                Du blir tatt! Dette var en dårlig idé. <br>-500 cool 😢🚓</br>
            `;

            coolMeter -= 500;
        }

    }
    updateView();
}


/*
Politi kontroll:
    xx% sjanse Du blir vinket inn til kontrollen:
        30% sjanse at politi lukter rev. 
            bortforklarer 
                50% sjanse for at politiet aksepterer bortforklaringen +XX
                50% sjanse for at politiet gir deg bot -XX
            stikker av
                20% sjanse for at du får mange kulhetspoeng (+XXX cool)		
                80% sjanse for at du mister mange kulhetspoeng (-XXX cool)
        20% sjanse at politi merker du er beruset på alkohol. 
            bortforklarer
                50% sjanse for at politiet aksepterer bortforklaringen +XX
                50% sjanse for at politiet gir deg bot -XX
            stikker av        
                20% sjanse for at du får mange kulhetspoeng (+XXX cool)		
                80% sjanse for at du mister mange kulhetspoeng (-XXX cool)


*/




function squirrelRoadkill(){
    if(chance(50)){
        numberSquirrelKill++;

        message = `
            BANG! Du kjørte på et ekorn! 🐿️💥🚗
            <br>
            -10 cool 😵‍💫
            <br>
        `;

        coolMeter -= 10;
    }
    else if(chance(75)){
        message = `
            🚗 Et ekorn løp over veien. Du klarte akkurat å unngå det! 🐿️
            <br>
            +10 cool 😎
        `;

        coolMeter += 10;
    }
    else{
        message = `
            Veien er ekornfri... foreløpig. 🐿️👀
        `;
    }
    updateView();
}