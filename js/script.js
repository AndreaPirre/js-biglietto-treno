// chiedere all'utente il numero di km che vuole percorrere

    var km = prompt("Inserisci il numero di km che vuoi percorrere:");

// chiedere all'utente la sua età

    var eta = prompt("Inserisci la tua età:");

// calcolare il prezzo totale del viaggio sapendo che costa 0.21 euro al km

    var costoBase = km * 0.21;

// sconto del 20% per i passeggeri minorenni

    var costoMinorenni = costoBase - (costoBase * 20 / 100);

// sconto del 40% per i passeggeri over 65

    var costoOver = costoBase - (costoBase * 40 / 100);

// calcolare il costo del biglietto in base all'età

    var costoBiglietto;

    if (eta <= 17){

        var costoBiglietto = costoBase - (costoBase * 20 / 100);

    }else if (eta >= 66){

        var costoBiglietto = costoOver = costoBase - (costoBase * 40 / 100);

    }else {

        var costoBiglietto = costoBase;

    }

// scrivere all'utente l'importo totale del biglietto

    document.getElementById('costo').innerHTML = "Questo è il costo del biglietto per il tuo tragitto: " + costoBiglietto + " euro";
