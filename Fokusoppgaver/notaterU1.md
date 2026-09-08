///////////////////////////
> HTML-dokument:
///////////////////////////
>>> CSS
    <link rel="stylesheet" href="style.css">
>>> JS
    <script src="model.js"></script>
    <script src="view.js"></script>
    <script src="controller.js"></script>

///////////////////////////
> INPUT
///////////////////////////

[For String]
    <input onchange="variabelInput = (this.value)">

    let variabelInput;

[For Number]
    <input onchange="variabelInput = Number(this.value)">

>[Slipper å lage en funksjon, f.eks. onchange=funksjon(), for å knytte de sammen]

///////////////////////////
> MVC
///////////////////////////
let appView = document.getElmentById('app');

    function updateView(){

    let html = /*HTML*/`...`;

        html += /*HTML*/`...`;

    let html2 = /*HTML*/`...`;

        html2 += /*HTML*/`...`;

    appView.innerHTML = html + html2;
    }

updateView();

///////////////////////////
> this
///////////////////////////

<button onclick="klikkeMeg(this)">Knapp</button>

>["this" sender hele knappen]

<button onclick="klikkeMeg(this.innerHTML)">Knapp</button>

>["this" sender bare det som er mellom tagsene]

<button id="minId" onclick="klikkeMeg(this.id)">Knapp</button>

>["this" sender bare id'en]

///////////////////////////
> RETURN
///////////////////////////

let melding;
let tempInput;

function updateView(){
    let html = `
    <input onchange="tempInput = Number(this.value)">
    ${melding}
    `;
}

function tempController(){
    melding = tempMelding(tempInput);

    updateView();
}

function tempMelding(temp){
    if(temp > 20){
    return "Det er varmt!";
    }
}

>[Kan brukes til å sende en melding]

Fokusoppgave 3 - Loops:

    let tilfeldigTall = rngFunk()

    function rngFunk(){
        return Math.floor(Math.random()*10) +1;
    }

>[Lager et tilfeldig tall mellom 1 og 10. Lage en variabel for funksjonen]

///////////////////////////
> setInterval()
///////////////////////////

    setInterval(intervalFunk(batteriLade), 100);

>[Standard setInterval() som starter med en gang]

let ladeIntervaller = [];

    function ladeFunk(batteriLade){
        if(iRobot[batteriLade].batterinivå < 100){

        ladeIntervaller[batteriLade] = setInterval(
            function (){
                intervalFunk(batteriLade)
            }, 100);        
        };        
    }


>[funksjon i setInterval() som IKKE starter med en gang]

///////////////////////////
> for-loops
///////////////////////////

    for(let i = 0; i < variabel.length; i++){
        html += ``;
    }
>[Standard for-loop]

    <button onclick="loopKnapp(${i})">LoopKnapp</button>
    
>[Vi bruker ${i} for at funksjonen loopKnapp skal vite hvilken knapp som blir trykket på]

    function loopKnapp(para){
        variabel[i].objekt += 10;
    }
>[Trykker du på knapp 3, så skal verdien til egenskapen legges til med 10]

///////////////////////////
> while-loop
///////////////////////////
Fokusoppgave 3 - Loops

    function gjettSvar(){            
        while(Number(inputSvar) !== tilfeldigTall){
            
            antallForsøk++;

        if(Number(inputSvar) < tilfeldigTall){
            visMelding = "For lavt! Prøv igjen!";
        }
        else if(Number(inputSvar) > tilfeldigTall){
            visMelding = "For høyt! Prøv igjen!";
            }
            break;
        }
    }

>[while-loop kjører helt til riktig tall er gjettet]

> let visMelding = ""; ➡️ <div>${visMelding}</div>

> let tilfeldigTall = rngFunk(); ➡️ 

    function rngFunk(){
        return Math.floor(Math.random()*10) +1;
    }



///////////////////////////
> arrays & objects
///////////////////////////

> Et Array:
let variabelArray = ["Array1", "Array2", "Array3"];

> Et Objekt i et Array:

let variabelArray = [
    {object1: Egenskap1}, 
    {object2: Egenskap2},
    {object3: Egenskap3},
    ];


///////////////////////////
> splice(i, 1)
///////////////////////////
Fokusoppgave 1 - Objekter-Loops-Arrays:

    function emotionalDMG(){

        for(let i = monster.length - 1; i >= 0; i--){

            monster[i].Health -= 20;

            if(monster[i].Health <= 0){
                monster.splice(i, 1);

            }
        }

        updateView();
    }


splice(i, 1)
splice(i, 2)

>[Brukes for å fjerne et objekt i et array.]

i = iterasjon i en for-loop
1 = slett kun et objekt
2 = slett objektet og det neste objektet i arrayet

///////////////////////////
> sort(function(a, b))
///////////////////////////
Fokusoppgave 3 - Objekter-Loops-Arrays:

    function sortElement(){
        spellType.sort(function(a, b){         //sammenligningsfunksjon
            if(a.element < b.element){
                return -1; //sorter 'a' før 'b'
            }
            if(a.element > b.element){
                return 1; //sorter 'b' før 'a'
            }
            return 0; // de er like, behold rekkefølgen
        });

        updateView();
    }

> bytt ut a med b, så blir elementene sortert fra Å til A (IKKE BYTT a og b I SELVE FUNKSJONEN!)

///////////////////////////
> Mutating/Destructive Arrays Methods
///////////////////////////

> Disse kalles for muterende fordi de endrer (muterer) den originale listen direkte, mens map() eller filter() lager en helt ny liste.

Stack-metoder
Disse jobber kun i slutten av listen (sist inn, først ut / LIFO:

    push(): Legger til et element på slutten.
    pop(): Fjerner det siste elementet.

Queue-metoder
Disse jobber kun i starten av listen:

    unshift(): Legger til et element helt først.
    shift(): Fjerner det aller første elementet.


Fokusoppgave 3 - Objekter-Loops-Arrays:

    function createSpell(){
        let newSpell = {
            name: spellName,
            element: elementName,
            power: powerValue,
        };

        spellType.unshift(newSpell);

        updateView();

    }

///////////////////////////
> confirm()
///////////////////////////

Fokusoppgave 2 - Objekter-Loops-Arrays:

    function kjøpKnapp(paraPris){

        let valgtPizza = pizza[paraPris];

            if(valgtPizza.pris > 200){
                if (!confirm("Er du sikker på at du vil kjøpe denne luksuspizzaen?")){
                    return;
                }
            }
        
        kjøpListeVar += valgtPizza.pris;

        valgtePizzaer.push(valgtPizza);
        
        updateView();
    }

Forklaring:

    confirm():
        > Hvis de trykker "Avbryt" i confirm-boksen, stopper vi funksjonen her med 'return'
        > Denne må legges øverst, ellers blir Special Order lagt til arrayet og dermed i handlekurven selv om du har trykket på cancel

    push():
        > valgtePizzaer er variabelen med det tomme arrayet (se øverst)
        > push er en innebygd funksjon, som legger objektet valgtPizza bakerst i listen (se nedenfor)
            det motsatte av push() er unshift(), som legger et element foran
            pop() = fjerner den siste
            shift() = fjerner den første
            
        > (valgtPizza) er den pizzaen med navn og pris som vi akkurat har trykket på
        
        Prosessen:
        1) Starter med et tomt array:
            let valgtePizzaer = [];

        2) Velger Kebabpizza:
            let valgtePizzaer = [ { navn: "Kebabpizza", pris: 179 ... } ];
        
        3) Vi velger Hawaiipizza etterpå:
            let valgtePizzaer = [ 
                { navn: "Kebabpizza", pris: 179 ... }, 
                { navn: "Hawaii", pris: 159 ... } // <-- Lagt til bakerst!
                ];
