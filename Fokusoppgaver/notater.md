# 📔 MINE NOTATER

========================================================
# ⚠️ 1. HTML-DOKUMENT & OPPSETT
========================================================
```html
<!-- CSS -->
<link rel="stylesheet" href="style.css">

<!-- JS -->
<script src="model.js"></script>
<script src="view.js"></script>
<script src="controller.js"></script>
```

========================================================
# ⚠️ 2. INPUT-FELTER
========================================================

**For Tekst (String):**
```html
<input onchange="variabelInput = (this.value)">
```
```javascript
let variabelInput;
```

**For Tall (Number):**
```html
<input onchange="variabelInput = Number(this.value)">
```

> **NB:** Du slipper å lage en egen funksjon (f.eks. `onchange=funksjon()`) bare for å knytte verdien til en variabel.

========================================================
# ⚠️ 3. MVC (Model-View-Controller)
========================================================
```javascript
let appView = document.getElementById('app');

function updateView(){
    let html = /*HTML*/`...`;
    html += /*HTML*/`...`;

    let html2 = /*HTML*/`...`;
    html2 += /*HTML*/`...`;

    appView.innerHTML = html + html2;
}

updateView();
```

========================================================
# ⚠️ 4. BRUK AV "this"
========================================================
```html
<!-- "this" sender HELE knappen (elementet) -->
<button onclick="klikkeMeg(this)">Knapp</button>

<!-- "this" sender bare teksten INNI knappen -->
<button onclick="klikkeMeg(this.innerHTML)">Knapp</button>

<!-- "this" sender bare ID-en til knappen -->
<button id="minId" onclick="klikkeMeg(this.id)">Knapp</button>
```

========================================================
# ⚠️ 5. RETURVERDI (RETURN)
========================================================
```javascript
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
        return "Det er varmt!"; // Sender teksten tilbake
    }
}
```
>**NB** Her brukes Return til å sende teksten tilbake. Vi slipper da å opprette og holde styr på en ekstra variabel.


Fokusoppgave 3 - Loops (RNG):
```javascript
let tilfeldigTall = rngFunk();

function rngFunk(){
    return Math.floor(Math.random()*10) + 1; 
    // Genererer et tilfeldig tall mellom 1-10
}
```
>**NB** Her legges hele Math.random()-funksjonen i rngFunk() slik at det senere kan gjenbrukes andre steder dersom det er behov. Hadde vi lagt Math.random i en variabel, så måtte vi ha skrevet hele Math.random på nytt når vi skal hente den fra den gitte variabelen.
========================================================
# ⚠️ 6. setInterval()
========================================================
```javascript
// Standard:
    let sekunderInput; //Knyttet til et input-felt.

    function startClick(){
        setInterval(nedtelling, 1000);
    }

    function nedtelling(){
        let melding = returMelding(sekunderInput);
        sekunderInput --;


// Starter med en gang programmet kjører
setInterval(intervalFunk(batteriLade), 100);
```

```javascript
let ladeIntervaller = [];

function ladeFunk(batteriLade){
    if(iRobot[batteriLade].batterinivå < 100){
        // Starter KUN når funksjonen blir kalt
        ladeIntervaller[batteriLade] = setInterval(function (){
            intervalFunk(batteriLade)
        }, 100);        
    };        
}
```

========================================================
# ⚠️ 7. LOOPS (for & while-loops)
========================================================

## Standard for-loop:
```javascript
for(let i = 0; i < variabel.length; i++){
    html += ``;
}
```

```html
<!-- Sender med telleren (i) så funksjonen vet hvilken rad som trykkes på -->
<button onclick="loopKnapp(${i})">LoopKnapp</button>
```

```javascript
function loopKnapp(para){
    variabel[i].objekt += 10; // Øker verdien med 10 på valgt objekt
}
```
## For-loop for å lage opprette ulike elementer:
```Javascript
    function updateView(){
        let html = ``;

        for(let i = 0; i < 25; i++){
            if(i === selectedLampIndex){
                html += 
                `<div class ="sirkel lightOn" onclick="reaksjonsTid(); selectRandomLamp()"></div>`;
            }
            else{
                html += `<div class ="sirkel"></div>`;
            }
        }
        appView.innerHTML = html;
    }

```
>**NB** Vi bruker denne for-loop'en for å opprette 25 sirkler, hvor 1 av dem er gul. Skriver du f.eks. i < 50 i for-loop'en, så får du 50 sirkler. 

## while-loop (Kjører til et krav er møtt):
```javascript
function gjettSvar(){            
    while(Number(inputSvar) !== tilfeldigTall){
        antallForsøk++;

        if(Number(inputSvar) < tilfeldigTall){
            visMelding = "For lavt! Prøv igjen!";
        } else if(Number(inputSvar) > tilfeldigTall){
            visMelding = "For høyt! Prøv igjen!";
        }
        break; // Hindrer uendelig løkke hvis koden feiler
    }
}
```

========================================================
# ⚠️ 8. ARRAYS & OBJEKTER
========================================================

**Et vanlig Array (Liste):**
```javascript
let variabelArray = ["Array1", "Array2", "Array3"];
```

**Et vanlig Objekt**
```javascript
let person = {
    egenskap1: "verdi1",
    egenskap2: "verdi2",
    egenskap1: "verdi3",
};
```

**Objekter inni et Array:**
```javascript
let variabelArray = [
    {Egenskap1: verdi1}, 
    {Egenskap2: verdi2}, 
    {Egenskap3: verdi3}, 
];
```

========================================================
# ⚠️ 9. ARRAYS: splice() og sort()
========================================================

### Fjerne elementer med `splice(index, antall)`:
```javascript
function emotionalDMG(){
    // Går baklengs gjennom loopen når vi sletter, for å unngå hopp i indexer!
    for(let i = monster.length - 1; i >= 0; i--){
        monster[i].Health -= 20;

        if(monster[i].Health <= 0){
            monster.splice(i, 1); // Sletter monsteret som døde
        }
    }
    updateView();
}
```

### Sortere med `sort()`:
```javascript
function sortElement(){
    spellType.sort(function(a, b){
        if(a.element < b.element) return -1; // Sorterer A til Å
        if(a.element > b.element) return 1;
        return 0;
    });
    updateView();
}
```

========================================================
# ⚠️ 10. MUTERING AV ARRAYS (Push, Pop, Shift, Unshift)
========================================================
> **Husk:** Disse endrer den *originale* listen direkte.

* `push()` -> Legger til på **slutten**
* `pop()` -> Fjerner fra **slutten**
* `unshift()` -> Legger til i **starten**
* `shift()` -> Fjerner fra **starten**

```javascript
function createSpell(){
    let newSpell = { name: spellName, element: elementName };
    spellType.unshift(newSpell); // Legges helt først i lista
    updateView();
}
```

========================================================
# ⚠️ 11. CONFIRM-BOKSER
========================================================
```javascript
function kjøpKnapp(paraPris){
    let valgtPizza = pizza[paraPris];

    if(valgtPizza.pris > 200){
        // Hvis brukeren trykker "Avbryt", stopper vi koden med return med en gang
        if (!confirm("Er du sikker på at du vil kjøpe denne luksuspizzaen?")){
            return; 
        }
    }
    
    kjøpListeVar += valgtPizza.pris;
    valgtePizzaer.push(valgtPizza);
    updateView();
}
```
========================================================
# ⚠️ 12. INCLUDE()
========================================================

========================================================
# ⚠️ 13. new Date().getTime()
========================================================
```javascript
new Date().getTime()
```
> Brukes til å måle tid. Det funksjonen gjør er at det spør om hva tiden er nå.

```javascript
    let startTime;
    let finishTime;

```

>**NB** funksjonen kan bare brukes til å regne ut tid i bakgrunnen. Vi kan ikke bruke denne funksjonen for å vise det visuelt på en nettside. Bruk heller setInterval() for å lage en teller for å få en visuell illusjon om at der knyttet sammen, selv om de ikke gjør det teknisk sett.