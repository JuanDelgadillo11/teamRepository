/**
 * Created by Juan Delgadillo
 */
//Object Score control the points of the player
var Score=function(){
    this.amountOfPoints=0;
};
Score.prototype.getAmountOfPoints=function(){
    return this.amountOfPoints;
};
Score.prototype.setAmountOfPoints=function(){
    this.amountOfPoints=this.amountOfPoints+1;
};

Score.prototype.validateIfGameFinished=function(row){
    var resultOfTheGame=false;

    if(this.amountOfPoints==row)
    {
        resultOfTheGame=true;
        return resultOfTheGame;
    }
    else{
        return resultOfTheGame;
    }
};
module.exports=Score;