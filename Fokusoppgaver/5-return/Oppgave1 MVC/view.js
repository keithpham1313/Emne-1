function updateView(){
    let html = /*HTML*/`
        <input onchange="tempInput = Number(this.value)">
        <button onclick="tempController()">Sjekk</button>
        <p>${sjekkTemp(tempInput)}</p>
    `;

    appView.innerHTML = html;
}

updateView();

function sjekkTemp(temp){

    if(temp >= 100 && temp <= 200){
        return "Jeg brenner!!!"
    }
    else if(temp >= 20 && temp <= 25){
        return "Det er varmt ute!";
    }
    else if(temp > 5 && temp <= 20){
        return "Det er passe temperatur."
    }
    else if(temp < 5){
        return "Det er kaldt ute!"    
    }
    return "";
}