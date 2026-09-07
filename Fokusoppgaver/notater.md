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



