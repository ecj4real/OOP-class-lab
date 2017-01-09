	
module.exports = {
	Animal: function(name){
		this.name = name;
		this.color = "Black";
		this.numOfLegs = 4;
		this.numOfEyes = 2;

		this.getInfo = function(){
			return "Name: " + this.name  + ", Color: " + this.color;
		}

		this.move = function(){
			return "Of course, I can move";
		}

		this.eat = function(){
			return "I can eat anything!!!"
		}


	}

}