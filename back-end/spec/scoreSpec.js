/**
 * Created by Juan Delgadillo
 * Course: RESTAPI
 * Description: scoreSpec
 */

var Score = require('./score.js');

describe('Score',function(){
    //executed before each IT
    beforeEach(function(){
        score=new Score();
    });

    //executed After each IT
    afterEach(function(){
        score= null;
    });
    //Test 1
    it('should return the amount or points at the beginning of the gameand return 0',function(){

        var actualResult=score.getAmountOfPoints();
        var expectedResult=0;
        expect(actualResult).toEqual(expectedResult);
    });
    //Test 2
    it('should return the amount or points at when user found a pair of cards ',function(){
        var actualResult=score.getAmountOfPoints()+1;
        var expectedResult=1;
        expect(actualResult).toBe(expectedResult);
    });
    //Test 3
    it('should validate if teh game ends and user won',function(){
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        score.setAmountOfPoints();
        console.log('This is the amount of points:'score.getAmountOfPoints());
        var actualResult=true;
        var expectedResult=score.validateIfGameFinished(10);
        expect(actualResult).toBe(expectedResult);
    });
});
