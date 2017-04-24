function RLGL(){
	this.display = function(){
		fill(10);
		strokeWeight(1);
		rect((width/2)-150,60,40,120);
		rect((width/2)+150,60,40,120);
		fill(255,0,0);
		ellipse((width/2)-150,30,30,30)
		ellipse((width/2)+150,30,30,30)
		fill(255,229,79);
		ellipse((width/2)-150,60,30,30)
		ellipse((width/2)+150,60,30,30)
		fill(0,255,30);
		ellipse((width/2)-150,90,30,30)
		ellipse((width/2)+150,90,30,30)
	}
}