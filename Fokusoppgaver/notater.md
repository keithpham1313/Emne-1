# 📔 MINE NOTATER

---
## 🌐 1. HTML-DOKUMENT & OPPSETT
---

```html
<!-- CSS -->
<link rel="stylesheet" href="style.css">

<!-- JS -->
<script src="model.js"></script>
<script src="view.js"></script>
<script src="controller.js"></script>
```

---
## 📥 2. INPUT-FELTER
---

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

> 💡 **Hurtigtips:** Du slipper å lage en egen funksjon (f.eks. `onchange=funksjon()`) bare for å knytte verdien til en variabel.

---
## 🗂️ 3. MVC (Model-View-Controller)
---
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

---
## ⚡ 4. BRUK AV "this"
---
```html
<!-- "this" sender HELE knappen (elementet) -->
<button onclick="klikkeMeg(this)">Knapp</button>

<!-- "this" sender bare teksten INNI knappen -->
<button onclick="klikkeMeg(this.innerHTML)">Knapp</button>

<!-- "this" sender bare ID-en til knappen -->
<button id="minId" onclick="klikkeMeg(this.id)">Knapp</button>
```

---
## ↩️ 5. RETURVERDIER (RETURN)
---
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

### 🎲 Fokusoppgave 3 - Loops (RNG):
```javascript
let tilfeldigTall = rngFunk();

function rngFunk(){
    return Math.floor(Math.random()*10) + 1; // Genererer 1-10
}
```

---
## ⏱️ 6. TIMERE (setInterval)
---
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

---
## 🔄 7. LOOPS (for & while)
---

### Standard `for`-loop:
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

### `while`-loop (Kjører til et krav er møtt):
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

---
## 📦 8. ARRAYS & OBJEKTER
---

**Et vanlig Array (Liste):**
```javascript
let variabelArray = ["Array1", "Array2", "Array3"];
```

**Objekter inni et Array:**
```javascript
let variabelArray = [
    {object1: Egenskap1}, 
    {object2: Egenskap2},
    {object3: Egenskap3},
];
```

---
## ✂️ 9. ARRAYS: splice() og sort()
---

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

---
## 🥞 10. MUTERING AV ARRAYS (Push, Pop, Shift, Unshift)
---
> **Husk:** Disse endrer den *originale* listen direkte.

* 📥 `push()` -> Legger til på **slutten**
* 📤 `pop()` -> Fjerner fra **slutten**
* 📥 `unshift()` -> Legger til i **starten**
* 📤 `shift()` -> Fjerner fra **starten**

```javascript
function createSpell(){
    let newSpell = { name: spellName, element: elementName };
    spellType.unshift(newSpell); // Legges helt først i lista
    updateView();
}
```

---
## ⚠️ 11. CONFIRM-BOKSER
---
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
---
## ⚠️ 12. INCLUDE()
---
