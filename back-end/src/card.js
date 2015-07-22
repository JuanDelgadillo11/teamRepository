/**
 * Created by Juan Delgadillo
 */
var Card=function(letter)
{
    this.isVisible=false;
    this.value=letter;
    this.defaultValue='X';

};

Card.prototype.getIsVisible=function()
{
    return this.isVisible;
};

// Card.prototype.setIsVisible=function()
// {
// this.name=true;
// };
Card.prototype.showValue=function()
{
    return this.isVisible ? this.value : this.defaultValue;
};
module.exports=Card;