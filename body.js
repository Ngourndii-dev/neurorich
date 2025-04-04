const prompt = require('prompt-sync')();

function calculSnack(moneys) {
    return (moneys * 20) / 100;
}

function neuroWealthAndavanandro(name) {
    const moneys = Number(prompt('Ohatrinona ny volanao androany')) || 0;
    const travelExpenses = Number(prompt('Impiry ianao mandeha bus: ')) || 0;
    const nsnack = Number(prompt('Impiry mihinana ody vavony: ')) || 0;

    let neuroWealthMin = 0;
    let neuroWealthAvg = 0;
    let neuroWealthMax = 0;

    const snackCost = calculSnack(moneys) * nsnack;
    const halfSnackCost = calculSnack(moneys) * (nsnack / 2);
    const singleTripCost = travelExpenses * 600;
    const roundTripCost = travelExpenses * 2 * 600;

    if (travelExpenses === 1) {
        neuroWealthMin = moneys - (roundTripCost + snackCost);
        neuroWealthAvg = moneys - (singleTripCost + snackCost);
        neuroWealthMax = moneys - halfSnackCost;
    }else if(travelExpenses===0) {
        neuroWealthMin = moneys - (roundTripCost + snackCost);
        neuroWealthAvg = moneys - (singleTripCost + snackCost);
        neuroWealthMax = moneys - halfSnackCost;
    }
    else if (travelExpenses === 2) {
        neuroWealthMin = moneys - (roundTripCost + snackCost);
        neuroWealthAvg = moneys - (singleTripCost + halfSnackCost);
        neuroWealthMax = moneys - singleTripCost;
    } else {
        neuroWealthMin = moneys - (roundTripCost + snackCost);
        neuroWealthAvg = moneys - (roundTripCost + halfSnackCost);
        neuroWealthMax = moneys - roundTripCost;
    }

    neuroWealthMin = Math.max(0, neuroWealthMin);
    neuroWealthAvg = Math.max(0, neuroWealthAvg);
    neuroWealthMax = Math.max(0, neuroWealthMax);

    console.log(name + " androany ianao manana " + neuroWealthMin + " farafakeliny");
    console.log(name + " androany ianao manana " + neuroWealthAvg + " antonony");
    console.log(name + " androany ianao manana " + neuroWealthMax + " farafabetsany");

    const details = Number(prompt(
        '\nMisafidiana hijery am-potony :1_neuroWealthMin , 2_neuroWealthAvg ,3_neuroWealthMax: '
    ));

    console.log("");

    if (details === 1) {
        console.log("--- Fanazavana: neuroWealthMin ---");
        console.log("Saran-dalana: " + singleTripCost);
        console.log("ody vavony: " + snackCost);
        console.log("vola rehetra: " + moneys);
        console.log("eco: " + neuroWealthMin);
    } else if (details === 2) {
        console.log("--- Fanazavana: neuroWealthAvg ---");
        if (travelExpenses > 2) {
            console.log("Sarab-dalana: " + roundTripCost);
            console.log("ody vavony: " + halfSnackCost);
        } else if (travelExpenses === 2) {
            console.log("mandeha tongotra + Bus: " + singleTripCost);
            console.log("ody vavony: " + halfSnackCost);
        }else if(travelExpenses===0){
            console.log("mandeha tongotra ");
            console.log("ody vavony: " + halfSnackCost);
        } 
        else {
            console.log("mandeha bus: " + singleTripCost);
            console.log("ody vavony: " + snackCost);
        }
        console.log("vola rehetra: " + moneys);
        console.log("eco: " + neuroWealthAvg);
    } else if (details === 3) {
        console.log("--- Fanazavana: neuroWealthMax ---");
        if (travelExpenses === 2) {
            console.log("mandeha bus: " + singleTripCost);
            console.log("tsy misy gouter");
        } else if (travelExpenses > 2) {
            console.log("mandeha bus: " + roundTripCost);
            console.log("Tsy misy sakafo maivana (dia amin'ny bus)");
        }else if(travelExpenses===0){
            console.log("mandeha tongotra ");
            console.log("ody vavony: " + halfSnackCost);
        } 
         else {
            console.log("tss bus ,tss ody vavony");
        }
        console.log("vola rehetra: " + moneys);
        console.log("eco: " + neuroWealthMax);
    } else {
        console.log("Misafidiana 1, 2 or 3.");
    }

    return { neuroWealthMin, neuroWealthAvg, neuroWealthMax };
}
module.exports = { neuroWealthAndavanandro };
