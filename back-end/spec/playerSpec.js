/**
 * Created by Juan Delgadillo
 */
var Player = require('./player.js');
describe('Player',function(){
    it('should save the name of the user and return it',function(){
        var playerTest=new Player();
        playerTest.setName('juan1');
        expect('juan').toEqual(playerTest.getName())
    });
});