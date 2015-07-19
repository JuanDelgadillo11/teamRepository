/**
 * Created by Juan Delgadillo
 * Course: RESTAPI
 * Description: CardSpec
 */
var Card = require('./card.js');
describe('Card',function(){

    //executed before each IT
    beforeEach(function(){
        card=new Card();
    });

    //executed After each IT
    afterEach(function(){
        card= null;
    });
    //Test 1
    it('should display the status of the card and return it',function(){

        expect(card.getIsVisible()).toEqual(false);
    });
    //Test 2
    it('should display the card value and return it',function(){

        expect(card.showValue()).toEqual('X');
    });
});