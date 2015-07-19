/**
 * Created by Juan Delgadillo
 * Course: RESTAPI
 * Description: scoreSpec
 */

var Game = require('./game.js');
var Player = require('./player.js');
var Score = require('./score.js');

describe('Game',function(){
    //executed before each IT
    beforeEach(function(){
        game=new Game();
    });

    //executed After each IT
    afterEach(function(){
        game= null;
    });
    //Test 1
    it('should create a board to play in easy mode',function(){
        var actualResult=game.createBoard(1);
        var expectedResult=game.arr;
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 2
    it('should create a board to play in medium mode',function(){
        var actualResult=game.createBoard(2);
        var expectedResult=game.arr;
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 3
    it('should create a board to play in advanced mode',function(){
        var actualResult=game.createBoard(2);
        var expectedResult=game.arr;
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 4
    it('should try to create a board introducing a wrong value by example a character',function(){
        var actualResult=game.createBoard('inserting a wrong value');
        var expectedResult='You did not entered a correct value';
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 5
    it('should create a board to play in advanced mode',function(){
        var actualResult=game.showMenu();
        var expectedResult='************************\n Welcome to Guess game \n ***********************';
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 6 controlAttempts
    it('should create a board to play in advanced mode',function(){
        var actualResult=game.controlAttempts();
        var expectedResult=0;
        expect(actualResult).toEqual(expectedResult);
    });
});