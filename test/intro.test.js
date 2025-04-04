const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
const expect = chai.expect;
chai.use(sinonChai);

const { intro } = require('../code'); // Ajustez le chemin selon votre structure

describe('Tests de logique sur les inputs', () => {

    function isValidOccupation(occupation) {
        return ['mpiasa', 'mpianatra', 'tsinotsinona'].includes(occupation);
    }

    beforeEach(() => {
        sinon.stub(console, 'log');
    });

    afterEach(() => {
        sinon.restore();
    });

    it('Si âge < 10, affiche message zaza avec mpianatra', () => {
        intro('Rabe', 'mpiasa', 8);
        expect(console.log.calledWith('Rabe, Mbola zaza ianao 🧒 , mpianatra.')).to.be.true;
    });

    it('Si âge >= 60 et occupation mpianatra, change en tsinotsinona', () => {
        intro('Rabe', 'mpianatra', 65);
        expect(console.log.calledWith('Rabe, Efa antitra ianao 👴👵 , tsinotsinona.')).to.be.true;
    });

    it('Les occupations doivent être "mpiasa", "mpianatra" ou "tsinotsinona"', () => {
        const valid = ['mpiasa', 'mpianatra', 'tsinotsinona'];
        valid.forEach(occupation => {
            expect(isValidOccupation(occupation)).to.be.true;
        });

        expect(isValidOccupation('mpivarotra')).to.be.false;
    });

    it('L’âge doit être un nombre', () => {
        intro('Rabe', 'mpiasa', 'tratra');
        expect(console.log.calledWith('Tsy mety ny taona nampidirinao')).to.be.true;
    });

    it('Appel de intro() fonctionne avec des données valides', () => {
        intro('Rabe', 'mpiasa', 30);
        expect(console.log.calledWith('Rabe, Olondehibe ianao 🧑‍💼, mpiasa.')).to.be.true;
    });
});