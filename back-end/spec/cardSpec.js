/**
 * Created by Juan Delgadillo
 */

var Card = require('./card.js');
describe('Card',function(){
    it('should save the name of the user and return it',function(){
        var playerTest=new Player();
        playerTest.setName('juan1');
        expect('juan').toEqual(playerTest.getName())
    });
});