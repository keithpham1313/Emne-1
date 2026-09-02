


function itemFeed(item){
    switch (item){
        case 'kvikklunsj':
            larsStats.sult += 15;
            visMelding("🍫 Kvikklunsj. Turens viktigste næringskilde.");
            break;
        case 'vann':
            larsStats.tørst += 10;
            visMelding("💧 Lars drikker vann. Villmarka er reddet.");
            break;
        case 'hygiene':
            larsStats.hygiene += 10;
            // visMelding("🧻 Lars vasker seg. Nå er han ren.");
            visMelding("🧻 En våtserviett senere, og Lars føler seg nesten sivilisert.");
            break;    
        case 'komfort':
            larsStats.komfort += 10;
            // visMelding("🔥 Lars er varm og koser seg med bål.");
            visMelding("🔥 Lars har sluttet å kjenne tærne. På tide med ved.");
            break;
        case 'humør':
            larsStats.humør += 10;
            visMelding("🐕 Lars blir glad av å leke med voffsen.");
            break;
    }
}


function testStartTimer(){
    mainInterval = setInterval(testTimer, 1500)
}

function testTimer(){
    larsStats.sult -= 2;
    larsStats.tørst -= 5;
    larsStats.hygiene -= 4;
    larsStats.komfort -= 3;
    larsStats.humør -= 6;
    if (checkIfStatsIsEmpty()){
        clearInterval(mainInterval)
        //document.getElementById("lars").style.opacity = 0.0;
        alert("Nå har Lars fått nok. Han pakker sakene sine og drar hjem.")
    } else if (larsStats.sult === maxNum * 0.2){
        visMelding ("Lars vurderer å spise kartet. Skaff kvikklunsj! FORT!")
    } else if (larsStats.tørst === maxNum * 0.2){
        visMelding ("Lars er tørrere enn humoren hans. Skaff vann!")
    } else if (larsStats.hygiene === maxNum * 0.2){
        visMelding ("Lars har begynt å skremme bort ville dyr med lukten! Stakkars hund! Hvor er våtserviettene?!")
    } else if (larsStats.komfort === maxNum * 0.2){
        visMelding ("Lars har begynt å klemme sekken for varme.")
    } else if (larsStats.humør === maxNum * 0.2){
        visMelding ("Lars har ikke smilt siden torsdag. Det er fredag.")
    }
    updateView();
}

function checkIfStatsIsEmpty(){
    if (larsStats.sult <= minNum){
        return true;
    }
    if (larsStats.tørst <= minNum){
        return true;
    }
    if (larsStats.hygiene <= minNum){
        return true;
    }
    if (larsStats.komfort <= minNum){
        return true;
    }
    if (larsStats.humør <= minNum){
        return true;
    }
    return false;
}

 
