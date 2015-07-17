/**
 * Created by Juan Delgadillo
 */
var Player=function()
{
    this.name;

};
Player.prototype.getName=function()
{
    return this.name;
};

Player.prototype.setName=function(playerName)
{
    this.name=playerName;
};
module.exports=Player;