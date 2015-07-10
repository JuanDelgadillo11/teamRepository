var Player = function(name, account) {
	this.name = name;
	this.account = account;
};

Player.prototype.getName() {
	return this.name;
};
 
Player.prototype.getAccount() {
	return this.account;
};

Player.prototype.setName(newName) {
	this.name = newName;
};

Player.prototype.setAccount(newAccount) {
	this.account = newAccount;	
};