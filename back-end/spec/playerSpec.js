/**
 * Created by Juan Delgadillo
 * Course: RESTAPI
 * Description: PlayerSpec
 */

var Player = require('./player.js');

describe('Player',function(){
    //executed before each IT
    beforeEach(function(){
        playerTest=new Player();
    });

    //executed After each IT
    afterEach(function(){
        playerTest= null;
    });
    //Test 1
    it('should save the name of the user and return it',function(){
        playerTest.setName('UserTest1');
        expect('UserTest1').toEqual(playerTest.getName());
    });
    //Test 2

    it('should return the name of the user',function(){
        playerTest.setName('UserTest2');
        expect(playerTest.getName()).toEqual('UserTest2');
    });
});