const chai = require('chai');
const sinon = require('sinon');
const expect = chai.expect;
const proxyquire = require('proxyquire').noCallThru();

describe('Tests de logique sur les resultats de calcul', () => {
    let promptStub;
    let neuroWealthAndavanandro;

    beforeEach(() => {
        promptStub = sinon.stub();
        neuroWealthAndavanandro = proxyquire('../body', {
            'prompt-sync': () => promptStub
        }).neuroWealthAndavanandro;
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should return 0 for all values when money is small and expenses are large', () => {
        promptStub.onCall(0).returns('500'); 
        promptStub.onCall(1).returns('3');   
        promptStub.onCall(2).returns('4');   
        promptStub.onCall(3).returns('1');  

        const result = neuroWealthAndavanandro('Test');
        
        expect(result.neuroWealthMin).to.equal(0, 'neuroWealthMin should be 0 when expenses exceed money');
        expect(result.neuroWealthAvg).to.equal(0, 'neuroWealthAvg should be 0 when expenses exceed money');
        expect(result.neuroWealthMax).to.equal(0, 'neuroWealthMax should be 0 when expenses exceed money');
    });

    it('should return positive values when money is large and expenses are small', () => {
        promptStub.onCall(0).returns('10000'); 
        promptStub.onCall(1).returns('1');    
        promptStub.onCall(2).returns('1');    
        promptStub.onCall(3).returns('1');    

        const result = neuroWealthAndavanandro('Test');
        
        console.log('Result for positive test:', result);
        
        expect(result.neuroWealthMin).to.be.above(0, 'neuroWealthMin should be positive');
        expect(result.neuroWealthAvg).to.be.above(0, 'neuroWealthAvg should be positive');
        expect(result.neuroWealthMax).to.be.above(0, 'neuroWealthMax should be positive');
    });
});