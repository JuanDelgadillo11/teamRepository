/**
 * Created by Juan Delgadillo
 */

var readlineSync = require('readline-sync');
var Player = require('./player.js');
var Card = require('./card.js');
var Score = require('./score.js');

var Game = function()
{
    this.arr;
    this.credits=10;
    this.attempts=10;
    this.incremento=-1;
    this.row=0;
    this.col=0;
    player1= new Player();
    //player1.setName('juan');
    score=new Score();

}

Game.prototype.matrix= function( rows, cols){

    this.arr = [];
    this.row=rows;
    this.col=cols;
    if (rows % 2 == 0)
    {
        for(var i=0; i < rows; i++){

            // Creates an empty line
            this.arr.push([]);

            // Adds cols to the empty line:
            this.arr[i].push( new Array(cols));

            for(var j=0; j < cols; j++){

                //Adds a card in a position
                this.arr[i][j] = new Card(this.getCard());
            }
        }

        //console.log('enter a value to review');
        return this.arr;
    }
    else{
        console.log('Introduce pair numbers your row and column data should be the same ');
    }

};
//this creates the cards
Game.prototype.getCard=function getCard(){
    this.incremento=this.incremento+1;
    console.log(this.incremento);
    var card=['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N','O','O','Q','Q','R','R','S','S','T','T','U','U','V','V'];
    return card[this.incremento];

};

Game.prototype.getValue=function(posX,posY){
    //Shows the card value
    console.log(this.arr[posX][posY].value);
    return this.arr[posX][posY].value;

};
Game.prototype.play=function()
{
    var phrase=[];
    var pos1;
    var pos2;
    var pos3;
    var pos4;
    var intentos=2;

    phrase[0] = readlineSync.question('Enter first coordenate i.e. 0,1 :');
    console.log(phrase[0]);

    var posX=phrase[0].split(',');

    console.log(posX);
    console.log('pos1:'+ posX[0]);
    console.log('pos2:'+ posX[1]);

    pos1=posX[0];
    pos2=posX[1];

    var firstCard=this.arr[pos1][pos2];
    firstCard.isVisible=true;
    console.log(this.showMatrix());

    phrase[1] = readlineSync.question('Enter second coordenate i.e. 0,0 :');
    console.log(phrase[1]);

    var posY=phrase[1].split(',');
    console.log(posY);
    console.log('pos3:'+ posY[0]);
    console.log('pos4:'+ posY[1]);

    pos3=posY[0];
    pos4=posY[1];

    var secondCard=this.arr[pos3][pos4];
    secondCard.isVisible=true;
    console.log(this.showMatrix());

    if (firstCard.showValue()==secondCard.showValue()){
        console.log('Encontraste un par');

        console.log(this.showMatrix());
        score.setAmountOfPoints();
        var gameStatus=false;
        gameStatus=score.validateIfGameFinished(this.row);
        if(gameStatus==true){
            console.log('You Win!! Congratulations');
            this.goToMenu();
        }
    }
    else{
        firstCard.isVisible=false;
        secondCard.isVisible=false;
        console.log('Sigue intentando');
        console.log(this.showMatrix());
    }
    this.controlAttempts();
    if(this.getAttempts()==0)
    {
        console.log('The game is over!!!');
    }
    else{
        this.play();
    }

    // validar si la matriz ya esta completa

};

Game.prototype.goToMenu=function(){
    var option =window.prompt('For Play again enter y or to Exit the game enter n');
    if (option==y)
    {
        console.log('New game start now');// aqui tenemos que resetear todo y llamar al juego
    }
    else{
        console.log('Thanks to play ');
    }
};
Game.prototype.showMatrix=function(){

    var returnValue='';
    for(var i=0; i < this.row; i++)
    {

        for(var j=0; j < this.col; j++){
            returnValue+=this.arr[i][j].showValue() + ' ';
        }
        returnValue+= '\n';
    }
    return returnValue;
};

Game.prototype.controlAttempts=function(){
    if(this.attempts==0){
        console.log('You do not have more attempts the Game is over!!');
    }
    else
    {
        this.attempts=this.attempts-1;
        console.log('You have: '+this.attempts+' of '+this.credits+' number of attempts,'+ ' Player: '+player1.getName()+' and your score is:'+score.getAmountOfPoints());

        //Validation that all matrix is completed

    }

};
Game.prototype.getAttempts=function(){
    return this.attempts;
};

Game.prototype.showWelcomeMenu=function(){
    var menuText='************************\n Welcome to Guess game \n ***********************';
    return menuText;
};

Game.prototype.createBoard=function(levelToPlay){
    console.log(levelToPlay);
    switch (levelToPlay) {
        case '1':
            return this.matrix(2,2);
            break;
        case '2':
            console.log('value'+levelToPlay);
            return this.matrix(4,4);
            break;
        case '3':
            return this.matrix(8,8);
            break;
        default:
            var text = "You did not entered a correct value";
            return text;
    }

};

Game.prototype.showMenu=function(){
    var menu='************************\n Welcome to Guess game \n ***********************';
    return menu;
};

var test=new Game();
console.log(test.showWelcomeMenu());
var playerName = readlineSync.question('Enter your Player name and press Enter:');
player1.setName(playerName);
console.log('Hello:'+player1.getName());
var level = readlineSync.question('Select the level of the game:\n Easy(write 1)\n Medium(write 2)\n Advanced(write 3)\n >');
console.log(level);
test.createBoard(level);
//test.matrix(2,2);
test.play();
