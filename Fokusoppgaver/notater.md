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

splice(i, 1)
splice(i, 2)

>[Brukes for å fjerne et objekt i et array.]

i = iterasjon i en for-loop
1 = slett kun et objekt
2 = slett objektet og det neste objektet i arrayet