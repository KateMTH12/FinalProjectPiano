function House(){
	this.display = function(){
		strokeWeight(1);
		fill(161,196,255);
		rect(width/2,height/2,width,height);
	}
	this.stairs = function(){
		this.x = 20;
		this.y = height-75;
		this.h = 150;
		for(var i = 0;i<9;i++){
			fill(94,58,26);
			rect(this.x,this.y,40,this.h);
			this.x+= 40;
			this.y += 7.5;
			this.h-=15;
		}
	}
}