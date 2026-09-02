let plass = 0; //variabel for plasser i sekken

//funksjon som flytter innerHTML fra Meny og til Sekk
function leggTilItem(item, tomt){
    if (tomt.innerHTML !== ""){
        switch (plass){
            case 0:
                document.getElementById('rute0').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 1:
                document.getElementById('rute1').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 2:
                document.getElementById('rute2').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 3:
                document.getElementById('rute3').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 4:
                document.getElementById('rute4').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 5:
                document.getElementById('rute5').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 6:
                document.getElementById('rute6').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 7:
                document.getElementById('rute7').innerHTML = item;
                tomt.style.display = "none";
                plass++;
                break;
            case 8:
                document.getElementById('rute8').innerHTML = item;
                tomt.style.display = "none";                            //Det her betyr bare skjul dette elementet (i menyen) når vi legger et item i sekken. Det betyr hvis vi har <div id="kvikklunsj">Kvikklunsj</div>, så skal du kjøre tomt.style.display = "none"; Merk at HTML'en eksisterer fortsatt, men den blir bare skjult. Det ville ha sett slik ut i HTML'en <div id="kvikklunsj" style="display: none;">Kvikklunsj</div>
                //tomt.innerHTML = "";                                  //Tidligere brukte vi tomt.innerHTML = ""; som bare sletter innholdet inni elementet, som i dette tilfellet er HTML'en. Dvs. hvis HTML'en er <div id="kvikklunsj">Kvikklunsj</div>, så skal funksjonen fjerne innholdet i elementet, som i dette tilfellet er Kvikklunsj. Da blir resultatet <div id="kvikklunsj"></div>.
                plass++;
                break;
        }
    }
    
}

function tømSekk(){
    let sekkItems = document.querySelectorAll('#myInventory *');        //Finn alle elementer med id="myInventory" og alle elementer som ligger inni #myInventory, dvs. * = alle elementer som ligger i #myInventory f.eks. rute0, rute1, rute2 osv.
        for (let item of sekkItems){                                    //For hver ting som finnes i sekkItems, gjør det som står mellom { }.
            item.innerHTML = "";                                        //Her sier vi fjern HTML fra denne ruten. Altså hvis <div id="rute0">Kvikklunsj</div>, så blir det <div id="rute0"></div>. Hele teksten blir da tømt.
        }

    let menyItems = document.querySelectorAll('.grid-inv .item');      //Finn alle items i menyen. Her finner vi meny-items, ikke inventory-rutene. '.grid-inv .item' betyr finn alle .item som ligger inni .grid-inv. Dette lagres i variabelen let menyItems. Merk at her finner vi klasser og ikke ID'er. Vi brukte ID'er da vi skulle finne alle elementer med ID'en #inventory (parent), og alt av "child-elementer", dvs. (* = child).

        for (let item of menyItems){                                    //Gå gjennom alle elementer i menyitems én etter én, dvs. item = kvikklunsj, item = vannflaske, item = telt osv.
            item.style.display = "";                                    //Her tilbakestiller vi egentlig det som som tidligere ble skjult når vi trykket på items i menyen. item.style.display = ""; betyr å sette dette tilbake til utgangspunktet (som var display = grid) eller fjern display-verdien som Javascript har satt som er "none", mens tomt.style.display = "none"; betyr at elementet ikke skal være med i layouten i det hele tatt, altså skjul. Hvis vi hadde brukt tomt.innerHTML = "";, så hadde innholdet i elementet (altså det som er mellom <div></div>) blitt slettet og vi hadde ikke fått muligheten til å hente den tilbake.
        }

        plass = 0;                                                      //Her nullstilles plassen til 0 igjen. Hvis du f.eks. legger til tre ting i sekken, så er plassen = 3 (se leggTilItem-funksjonen), så vi må nullstille denne verdien tilbake til plass = 0. Med andre ord, start på nytt i rute0. 
        }


function erDuKlar(){

    let melding = document.getElementById("melding");
    let meldingTekst = document.getElementById("meldingTekst");
    let kvikklunsj = document.getElementById("kvikklunsj");
    let monsenbilde = document.getElementById("monsenbilde");
    melding.style.display = "block";

    if (kvikklunsj.style.display !== "none"){
        meldingTekst.innerHTML =
        ("Du har glemt Kvikklunsjen! Lars Monsen nekter å dra uten! 🫠");
    }
    else if (monsenbilde.style.display !== "none"){
        meldingTekst.innerHTML =
        ("Du har glemt bildet av Lars Monsen! Hvem skal nå stirre på deg og gi deg motivasjon når du vurderer å snu? 🥹")
    }
    else if (plass < 9){
        meldingTekst.innerHTML =
        "Du trodde du var klar for villmarka? Sekken er ikke engang full! Lars har sett bedre pakking hos en speider på sin første tur! 😡";
    } 
    else {
        meldingTekst.innerHTML =
        "Sekken er full! Lars nikker fornøyd. Nå er du endelig klar for villmarka! 🥳🎉🎊";
    }
}


function lukkMelding(){
    document.getElementById("melding").style.display = "none";
}
