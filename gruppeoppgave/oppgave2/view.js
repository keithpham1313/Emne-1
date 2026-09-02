updateView()

function updateView(){
    let html = /*HTML*/ `
    <h2>Tamamonsen Larsagochi</h2>

    <div class="skjerm">

        <div class="knappar">
        <button  class="knapp" onclick="itemFeed('kvikklunsj')">🍫 Kvikklunsj</button>
        <button  class="knapp" onclick="itemFeed('vann')">💧 Vann</button>
        <button  class="knapp" onclick="itemFeed('hygiene')">🧻 Våtserviett</button>
        <button  class="knapp" onclick="itemFeed('komfort')">🔥 Bål</button>
        <button  class="knapp" onclick="itemFeed('humør')">🐕 Hund </button>
        </div>

          <img id="lars" src="lars.png" alt="lars bilde" >
    
        <div class="stats">
        <div>🍫 Sult: ${larsStats.sult}</div>
        <div>💧 Tørst: ${larsStats.tørst}</div>
        <div>🧻 Hygiene: ${larsStats.hygiene}</div>
        <div>🔥 Komfort: ${larsStats.komfort}</div>
        <div>🐕 Humør: ${larsStats.humør}</div>
        </div>
    </div>

    <div id="visMeldingId">${melding}</div>



    `;
    
    document.getElementById('app').innerHTML = html;
    
}