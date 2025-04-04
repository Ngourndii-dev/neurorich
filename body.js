const prompt = require('prompt-sync')();

function calculSnack(moneys) {
    return (moneys * 10) / 100;
}

function neuroWealthAndavanandro(name) {
    const moneys = Number(prompt('What cost your money today: ')) || 0;
    const travelExpenses = Number(prompt('How much do you travel in bus: ')) || 0;
    const nsnack = Number(prompt('How much do you eat snack in journey: ')) || 0;

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
    } else if (travelExpenses === 2) {
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

    console.log(name + " today you have " + neuroWealthMin + " min");
    console.log(name + " today you have " + neuroWealthAvg + " avg");
    console.log(name + " today you have " + neuroWealthMax + " max");

    // ----- prompt detail une seule fois -----
    const details = Number(prompt(
        '\nChoose to view details:1_neuroWealthMin , 2_neuroWealthAvg ,3_neuroWealthMax: '
    ));

    console.log(""); // espace vide pour lisibilité

    if (details === 1) {
        console.log("--- Détail: neuroWealthMin ---");
        console.log("Travel expenses: " + singleTripCost);
        console.log("Snack cost: " + snackCost);
        console.log("Total money: " + moneys);
        console.log("Remaining: " + neuroWealthMin);
    } else if (details === 2) {
        console.log("--- Détail: neuroWealthAvg ---");
        if (travelExpenses > 2) {
            console.log("Travel expenses: " + roundTripCost);
            console.log("Snack cost: " + halfSnackCost);
        } else if (travelExpenses === 2) {
            console.log("Walking + Bus: " + singleTripCost);
            console.log("Snack cost: " + halfSnackCost);
        } else {
            console.log("Travel: " + singleTripCost);
            console.log("Snack cost: " + snackCost);
        }
        console.log("Total money: " + moneys);
        console.log("Remaining: " + neuroWealthAvg);
    } else if (details === 3) {
        console.log("--- Détail: neuroWealthMax ---");
        if (travelExpenses === 2) {
            console.log("Travel: " + singleTripCost);
            console.log("No snack");
        } else if (travelExpenses > 2) {
            console.log("Travel: " + roundTripCost);
            console.log("No snack (bus trip)");
        } else {
            console.log("No travel or snack cost");
        }
        console.log("Total money: " + moneys);
        console.log("Remaining: " + neuroWealthMax);
    } else {
        console.log("Invalid choice. Please enter 1, 2 or 3.");
    }

    return { neuroWealthMin, neuroWealthAvg, neuroWealthMax };
}

module.exports = { neuroWealthAndavanandro };

