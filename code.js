const prompt = require('prompt-sync')();

console.log("Tongasoa 👋🎉");

const nom = prompt('Iza no fiantso anao? 🧾 ');
const occupation = prompt('Inona ny andraikitrao(mpiasa/mpianatra/tsinotsinona)💼 ? ');
const age = +prompt('Firy taona 📅 ? ');

function intro(nom, occupation, age) {
    // Validation de l'âge
    if (isNaN(age)) {
        console.log("Tsy mety ny taona nampidirinao");
        return;
    }

    // Validation et correction de l'occupation selon l'âge
    if (age < 10) {
        console.log(`${nom}, Mbola zaza ianao 🧒 , mpianatra.`);
    } else if (age >= 10 && age < 18) {
        console.log(`${nom}, Tanora ianao 🧑‍🎓, ${occupation}.`);
    } else if (age >= 18 && age < 60) {
        console.log(`${nom}, Olondehibe ianao 🧑‍💼, ${occupation}.`);
    } else if (age >= 60) {
        if (occupation === "mpianatra") {
            console.log(`${nom}, Efa antitra ianao 👴👵 , tsinotsinona.`);
        } else {
            console.log(`${nom}, Efa antitra ianao 👴👵 , ${occupation}.`);
        }
    } else {
        console.log(`${nom}, Manoro hevitra anao aho haka aina 😴, ${occupation}`);
    }
}

if (require.main === module) {
    intro(nom, occupation, age);
}

module.exports = { intro };