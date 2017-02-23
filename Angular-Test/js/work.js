Person = function(name, beruf, alter){
	this.name = name;
	this.beruf = beruf;
	this.alter = alter;
}
Person.prototype.strBeruf = function(){
	return this.name + " arbeitet als " + this.beruf;
}

function addZahlen(a,b){
	return a + b;
}
function zwoelf(){
	return 12;
}
zahlen = [3,5,7];
function durchschnitt(liste){
	var len = liste.length;
	var temp = 0;
	for(var i = 0; i < len ; i++){
		temp = temp + liste[i];
	}
	temp = temp / len;
	return temp;
}