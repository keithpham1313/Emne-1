Fokusoppgaver til 1-1
Emne 1 & 2
# Variabler og funksjoner

**Oppgave 1: Vis tekst** 
Lag en enkel side med en knapp og et tekstfelt.
Programmet skal:
- ha et inputfelt der brukeren kan skrive tekst
- ha en knapp som kaller en funksjon når den trykkes
- bruke document.getElementById til å hente teksten fra inputfeltet
- lagre teksten i en variabel
- vise teksten på siden i et <p>-element

**Oppgave 2: Legg sammen to tall**
Lag en side der brukeren kan skrive inn to tall.
Programmet skal:
- ha to inputfelt for tall
- ha en knapp som kaller en funksjon
- bruke document.getElementById til å hente tallene
- lagre tallene i variabler
- regne ut summen
- vise resultatet på siden

**Oppgave 3: Endre tekst på siden**
Lag en side med en tekst og en knapp.
Programmet skal:
- ha et <p>-element med en starttekst
- ha en knapp som kaller en funksjon
- bruke document.getElementById til å hente teksten
- lagre en ny tekst i en variabel
- endre teksten i <p>-elementet når knappen trykkes

**Oppgave 4: Enkel kalkulator**
Lag en enkel kalkulator som kan gange to tall.
Programmet skal:
- ha to inputfelt for tall
- ha en knapp som kaller en funksjon
- bruke document.getElementById til å hente tallene
- lagre tallene i variabler
- regne ut produktet (tall1 * tall2)
- vise resultatet på siden

**Oppgave 5: Endre bakgrunnsfarge**
Lag en side der brukeren kan endre bakgrunnsfargen.
Programmet skal:
- ha et inputfelt der brukeren kan skrive en farge (for eksempel red, blue, green)
- ha en knapp som kaller en funksjon
- bruke document.getElementById til å hente fargen
- lagre fargen i en variabel
- endre bakgrunnsfargen på siden

# Parameter / variabler / this.value

**Oppgave 1: Dynamisk brukerprofil**
Lag en nettside der brukeren kan skrive inn:
- navn
- alder
- favorittfarge
Lag en funksjon som tar disse verdiene som parametere og:
- viser navnet og alderen i en tekst på siden 
-endrer bakgrunnsfargen basert på favorittfargen
Funksjonen skal kunne brukes flere ganger med ulike verdier.

**Oppgave 2: Kalkulator for multiplisering**
Lag en funksjon som tar inn:
- to tall
Funksjonen skal:
- regne ut svaret
- vise resultatet på siden som “5 × 3 = 15”
- funksjonen skal kunne brukes flere ganger med ulike tall

**Oppgave 3: Regn ut rabatt**
Lag en funksjon som tar inn:
- opprinnelig pris
- rabatt i prosent
Funksjonen skal:
- regne ut ny pris
- vise en melding som “Ny pris: 350 kr” på siden
- funksjonen kan kalles flere ganger med ulike produkter

**Oppgave 4: Dynamisk knapp**
Lag en funksjon som tar inn:
- tekst på knappen
- bakgrunnsfarge
- tekstfarge
Funksjonen skal:
- lage en <button> med de verdiene
- legge knappen til på siden
- kunne brukes flere ganger for å lage flere knapper


# If / else

**1. Temperaturkontroll**
Lag et program som spør brukeren om temperaturen ute.
- Hvis temperaturen er over 20 grader, skriv: "Det er varmt ute!"
- Hvis den er mellom 5 og 20 grader (inkludert), skriv: "Det er passe temperatur."
- Hvis den er under 5 grader, skriv: "Det er kaldt ute!"

**2. Karaktersystem**
Brukeren skal skrive inn poeng (fra 0 til 100).
Lag et program som gir karakter basert på følgende:
- 90–100: A
- 80–89: B
- 70–79: C
- 60–69: D
- 0–59: F
Skriv ut hvilken karakter brukeren fikk.

**3. Passordsjekk**
Spør brukeren om å skrive inn et passord.
- Hvis passordet er "hemmelig123", skriv: "Riktig passord, velkommen inn!"
- Ellers skriv: "Feil passord, prøv igjen."

**4. Kinobillett**
Brukeren skriver inn alderen sin.
- Hvis brukeren er under 3 år, er billetten gratis.
- Hvis alderen er mellom 3 og 12 år, koster billetten 50 kr.
- Hvis alderen er over 12 år, koster billetten 100 kr.
Skriv ut hvor mye billetten koster.

**5. Hvilken dag er det?**
Be brukeren skrive inn et tall fra 1 til 7, der 1 = mandag og 7 = søndag.
- Hvis tallet er 6 eller 7, skriv: "Det er helg!"
- Ellers skriv: "Det er en ukedag."

>>> [hadde onchange="dagVar = this.value" til å begynne med men den tar bare imot en string, derfor fungerte det ikke i if-setningen når jeg skrev dagVar === 6. ]


# If / else + this
**Oppgave 1: Dynamisk knapp med tilstand**
Lag en funksjon som lager en knapp med tekst og farge.
Funksjonen skal:
- bruke this for å referere til knappen som blir klikket
- bruke if/else til å bytte tekst og farge når knappen klikkes (f.eks. “På”/“Av”, grønn/rød)
- kunne kalles flere ganger for å lage flere knapper med ulik starttekst og farge

**Oppgave 2: Enkle kontoer**
Lag et objekt som representerer en bankkonto med:
- navn
- saldo
Legg til en metode endreSaldo(beløp) som:
- bruker this for å oppdatere saldoen
- bruker if/else til å sjekke om saldoen blir negativ: hvis ja, vis advarsel; hvis nei, oppdater saldoen
- vis resultatet på siden

>>> [Glemte å skrive "= 0" etter variabelen, så ingenting fungerte]

**Oppgave 3: Dynamisk meny**
Lag flere knapper (eller ul - li) som representerer menyvalg.
Lag en funksjon som:
- bruker this til å hente knappens navn
- bruker if/else for å vise ulik melding basert på hvilken knapp som ble trykket (“Valgt: Hjem”, “Valgt: Om oss”, etc.)

>>> [Jeg skjønte ikke hvordan jeg kunne bruke en parameter i stedet for to]

# return
**Oppgave 1: Temperaturkontroll**
Lag en funksjon sjekkTemperatur(temp) som tar inn en temperatur som parameter og returnerer en tekst:
- Over 20 → "Det er varmt ute!"
- 5–20 → "Det er passe temperatur."
- Under 5 → "Det er kaldt ute!"

>>>[Skjønner ikke hvorfor man skal bruke return her. XD]

**Oppgave 2: Karaktersystem**
Lag en funksjon giKarakter(poeng) som returnerer karakteren basert på poeng:
- 90–100: "A"
- 80–89: "B"
- 70–79: "C"
- 60–69: "D"
- 0–59: "F"

**Oppgave 3: Passordsjekk**
Lag en funksjon som tar inn et parameter og som returnerer en melding:
- Hvis passordet er "hemmelig123" → "Riktig passord, velkommen inn!"
- Ellers → "Feil passord, prøv igjen."

**Oppgave 4: Kinobillet**
Lag en funksjon som tar inn et parameter og som returnerer prisen på billetten:
- Under 3 år → 0
- 3–12 år → 50
- Over 12 år → 100

**Oppgave 5: Hvilken dag er det?**
Lag en funksjon som tar inn et parameter og som tar et tall 1–7 og returnerer:
- 6 eller 7 → "Det er helg!"
- Ellers → "Det er en ukedag."

>>>[Glemte Number i Number(this.value) igjen!!!]

# setInterval

**Oppgave 1: Nedtelling med varsler**
Lag en nedtellingsside der brukeren kan angi et antall sekunder og starte en nedtelling.
Tiden skal reduseres automatisk hvert sekund og vises på siden. Når tiden nærmer seg slutten, skal applikasjonen reagere på ulike tidspunkt underveis.
Programmet skal:
- Vise gjenværende tid
- Reagere når det er mindre enn 10 sekunder igjen
- Gi en tydelig beskjed når nedtellingen er ferdig

>>> [Slet med å huske hvordan man satte opp setInterval() - måtte se i notater]

Bonus
- Endre farge på teksten når tiden begynner å bli lav
- Gi brukeren mulighet til å pause nedtellingen 
- Spill av en lyd når tiden er ute

>>>[Null peiling på å sette setInterval() på pause]
>>>[Aldri lagt til en lyd-fil, måtte google]

**Oppgave 2: Temperatur-overvåker**
Lag en applikasjon som simulerer temperaturmålinger. Temperaturen skal oppdateres automatisk med jevne mellomrom, og verdien kan for eksempel genereres tilfeldig.
Applikasjonen skal vise temperaturen og reagere på ulike temperaturgrenser. Programmet skal tolke målingene og gi en status basert på verdien.
Eksempler på status:
- For kaldt
- Normal temperatur
- For varmt
Temperaturen skal oppdateres kontinuerlig, og visningen skal endres dersom temperaturen går over eller under bestemte grenser.

>>>[Måtte se på noen tidligere oppgaver]

Bonus
- Vis historikk over temperaturmålinger
- Vis høyeste og laveste temperatur
- La brukeren velge temperaturgrenser selv

**Oppgave 3: Kaffetrakter-simulator**
Du skal lage en nettside som simulerer en kaffetrakter. Når brukeren starter bryggingen, skal kaffemaskinen bruke tid på å lage kaffe. Under bryggeprosessen skal kaffemengden gradvis øke.
Når kaffetrakteren er ferdig, skal bryggingen stoppe automatisk.
Applikasjonen skal:
- Ha en knapp for å starte brygging
- Vise hvor mye kaffe som er ferdig brygget
- Gradvis fylle opp kaffemengden over tid
- Stoppe når kaffen er ferdig
Det skal ikke være mulig å starte flere bryggeprosesser samtidig. Hvis brukeren prøver å starte på nytt mens maskinen allerede brygger, skal programmet håndtere dette på en fornuftig måte.
- Bryggeprosessen må stoppes når den er ferdig
- Applikasjonen må ha kontroll på om maskinen allerede er i gang
- Brukergrensesnittet skal alltid vise riktig status

Bonus
- Lag en stopp-knapp som avbryter bryggingen
- Vis statusmeldinger underveis




# Loops
**Oppgave 1: Liste med tall**
Lag en funksjon som lager en liste med tall. Funksjonen skal:
- bruke en for-loop til å lage tallene fra 1 til 10
- vise tallene på siden (for eksempel i en ul eller div)
- bruke if/else til å sjekke om tallet er partall eller oddetall
- vise teksten “X er partall” eller “X er oddetall”
Ekstra:
- la funksjonen ta imot et tall som parameter og telle opp til det tallet


**Oppgave 2: Handleliste**
Lag en array med varer (for eksempel melk, brød, ost, egg). Lag en funksjon som:
- looper gjennom arrayen
- lager en li for hver vare
- viser listen på siden
- bruker if/else til å markere én bestemt vare (for eksempel gjøre teksten rød hvis varen er “ost”)
Ekstra:
- legg til en knapp som legger til en ny vare i arrayen og oppdaterer visningen


**Oppgave 3: Gjett tallet**
Lag et lite spill der brukeren skal gjette et tilfeldig tall. Programmet skal:
- lage et tilfeldig tall mellom 1 og 10
- bruke en while-loop som fortsetter helt til riktig tall er gjettet
- bruke if/else til å gi beskjed om tallet er for høyt eller for lavt
- telle antall forsøk
- vise antall forsøk når brukeren gjetter riktig


**Oppgave 4: Dynamiske knapper**
Lag flere knapper ved hjelp av en loop. Programmet skal:
- bruke en loop til å lage for eksempel 3 knapper
- gi knappene ulik tekst (for eksempel “Knapp 1”, “Knapp 2”, “Knapp 3”)
- bruke this når en knapp blir klikket
- bruke if/else til å vise ulik melding basert på hvilken knapp som ble trykket
- vise melding på siden (for eksempel “Du trykket på Knapp 2”)


**Oppgave 5: Tall i en array**
Lag en array med tall (for eksempel 5, 12, 8, 20, 3). Lag en funksjon som:
- bruker en for-loop til å gå gjennom arrayen
- regner ut summen av tallene
- bruker if/else til å sjekke om summen er over eller under 30
- viser melding på siden: “Summen er X”
- viser i tillegg “Over 30” eller “30 eller mindre”




# Objekter, loops og arrays 

**Oppgave 1. Monsterhåndtering**
Verden er overfylt av monstre, og du må administrere dem!
- Model: Lag en Monster-liste med navn, styrke og humør.
- View: Vis listen over monstre, enten på siden eller i consollen. 
- Controller: Lag funksjoner for å:
Få alle monstre til å bli sinna (if humøret er "glad", endre til "sinna").
Fjern monstre som er for svake (styrke under 5).

**Oppgave 2. Pizzarestaurant**
Du driver en pizzarestaurant der bestillingene går bananas!
- Model: Lag en Pizza-liste med navn, ingredienser (array?) og pris.
- View: Vis menyen og dagens bestillinger.
- Controller: Lag funksjoner for å:
Regne ut totalpris for alle bestillinger.
Hvis en pizza koster over 200kr, gi advarsel: "Er du sikker på at du vil kjøpe denne luksuspizzaen?!"

**Oppgave 3. Magisamling**
Du er en trollmann som samler magiske spells!
- Model: Lag en Spell-liste med navn, kraft (power) og element (ild, vann, jord, luft).
- View: List opp alle spells sortert etter element.
- Controller: Lag funksjoner for å:
Legge til nye spells.
Kaste (bruke) en spell: Fjern den fra lista etter bruk.

**Oppgave 4. Rydderobot Simulator**
Du styrer en gjeng små roboter som rydder et rotete rom!
- Model: Lag en Robot-liste med navn, batterinivå og antall gjenstander ryddet.
- View: Vis robotstatus (navn, batteri, gjenstander).
- Controller: Lag funksjoner for å:
La robotene rydde (hvert rydd gir -10% batteri, pluss 1 til ryddet).
Lade opp batteriet (full oppladning).

**Oppgave 5. Godteribyttemarked**
Barn bytter godteri etter Halloween!
- Model: Lag en Candy-liste med type (sjokolade, karamell, surt), antall, og "verdi" i godteripenger.
- View: Vis alle barns godterilager.
- Controller: Lag funksjoner for å:
La barn bytte godteri (f.eks. 2 sjokolader for 3 karameller).
Finne hvem som har mest verdifulle samling.
Hvis noen prøver å jukse (f.eks. bytte mer enn de har), skriv: "JUKS OPPDAGET!"


# Små Emne 2 oppgaver

**Oppgave 1. Enkel kalkulator**
Lag en kalkulator-app som lar brukeren skrive inn to tall og velge en matematisk operator (+, -, *, /). Når brukeren trykker på "Beregn"-knappen, skal resultatet vises.
- Modell: lagre tallene og operatoren.
- View: vis input-feltene, operatorvalg og resultat.
- Controller: håndtere beregningen når brukeren trykker på knappen.
*Elementer: MVC, this, funksjoner, parametre, if/else, return, variabler.*

**Oppgave 2. To-do liste**
Lag en enkel to-do app hvor brukeren kan skrive inn oppgaver, krysse av oppgaver som fullførte og slette oppgaver. Fullførte oppgaver skal vises med et merke eller gjennomstreking.
- Modell: lagre oppgaver som objekter med tekst og ferdig-status.
- View: vis listen over oppgaver og knapper for å markere ferdig/slette.
- Controller: legg til, endre og slette oppgaver.
*Elementer: MVC, this, objekter, arrays, loops, funksjoner, if/else, parametre, return.*

**Oppgave 3. Handleliste med mengde**
Lag en handleliste der hver vare har navn og mengde. Brukeren kan legge til varer, oppdatere mengden eller fjerne varer fra listen.
- Modell: lagre varer som objekter med navn og mengde.
- View: vis listen over varer med mulighet til å oppdatere eller slette hver vare.
- Controller: håndtere input, endring og sletting.
*Elementer: MVC, arrays, objekter, this, funksjoner, loops, parametre, if/else, return.*

**Oppgave 4. Quiz-app**
Lag en quiz-app med 3–5 spørsmål med multiple choice. Når brukeren svarer på et spørsmål, skal appen vise om svaret var riktig eller feil, og til slutt vise total poengsum.
- Modell: lagre spørsmål, alternativer og riktige svar.
- View: vis spørsmål, alternativer og resultat etter hvert spørsmål.
- Controller: håndtere svar, oppdatere poeng og gå til neste spørsmål.
*Elementer: MVC, objekter, arrays, loops, funksjoner, parametre, if/else, return, this.*

**Oppgave 5. Spill – gjett tall**
Lag et spill der brukeren skal gjette et tilfeldig tall mellom 1 og 100. Appen skal gi tilbakemelding om gjettet er for høyt, for lavt eller korrekt, og telle antall forsøk.
- Modell: lagre det tilfeldige tallet og antall forsøk.
- View: vis inputfelt for gjetning, knapp og tilbakemelding.
- Controller: sammenlign brukerens gjetning med tallet, oppdater forsøk og vis hint.
*Elementer: MVC, funksjoner, parametre, variabler, loops, if/else, return, this.*

**Oppgave 6. Enkle statistikker**
Lag en app hvor brukeren kan skrive inn tall i en liste. Appen skal kunne beregne og vise summen, gjennomsnitt, minste og største tall i listen.
- Modell: lagre tallene i et array.
- View: vis inputfelt for tall, knapp for å legge til tall, og vis resultatene.
- Controller: legg til tall, beregninger, statistikk og oppdater view.
*Elementer: MVC, arrays, loops, funksjoner, parametre, return, if/else, variabler.*

**Oppgave 7. Enkel kontaktbok**
Lag en kontaktbok der brukeren kan legge til personer med navn og telefonnummer, søke etter navn, og slette kontakter.
- Modell: lagre kontakter som objekter med navn og telefon.
- View: vis liste over kontakter, inputfelt for ny kontakt og søkefelt.
- Controller: håndtere søk, legge til og slette kontakter.
*Elementer: MVC, objekter, arrays, loops, funksjoner, parametre, if/else, return, this..*

**Oppgave 8. Timer / nedtelling**
Lag en nedtellingstimer hvor brukeren skriver inn antall sekunder. Timeren skal telle ned i sanntid og vise en melding når tiden er ute.
- Modell: lagre total tid og gjenværende tid.
- View: vis inputfelt, knapp for å starte timer, og sanntidstælling.
- Controller: oppdater timeren hvert sekund, og vis melding når tiden er ute.
*Elementer: MVC, funksjoner, this, parametre, variabler, loops, if/else, return.*

**Oppgave 9. Butikk-varevurdering**
Lag en app der brukeren kan legge til produkter med navn, pris og vurdering (1–5 stjerner). Appen skal kunne sortere produkter etter pris eller vurdering.
- Modell: lagre produkter som objekter med navn, pris og vurdering.
- View: vis listen med produkter, og sorteringsvalg.
- Controller: legg til produkter og sorter listen basert på brukerens valg.
*Elementer: MVC, objekter, arrays, loops, funksjoner, parametre, if/else, return, this, variabler.*

**Oppgave 10. Notat-app med kategorier**
Lag en notat-app hvor brukeren kan skrive notater, legge dem i kategorier, og filtrere notater etter kategori.
- Modell: lagre notater som objekter med tekst og kategori.
- View: vis inputfelt, liste over notater og filtervalg for kategori.
- Controller: legg til notater, filtrer og oppdater view basert på kategori.
*Elementer: MVC, arrays, objekter, loops, funksjoner, parametre, if/else, return, this.*

MVC - oppgavestart-tisps

# Step-by-Step start på MVC oppgave
- Lag en div med id="app"
- Lag 3 js-filer (modell, view, controller) 
- Lag script-tag og koble opp de 3 ja-filene
- I modellen lager du en variabel du kaller for app og lagrer veien til div'en. (const app = document.getelementbyid("app"))
- I view lager du en updateView() funksjon, og bruker app.innerhtml - og legg til en <h1> tagg med tittelen til oppgaven, eller bare skriv "hei". 
- Kjør uptadeView() OVER hvor du lagde funksjonen. 
