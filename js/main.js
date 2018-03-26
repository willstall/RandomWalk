var drawing;

function main()
{
	// Setup
	setup();

	// Console
	terminal = new Terminal();
	stage.addChild( terminal );
	
	// Keyboard
	document.onkeydown = keyPressed;
	
	// Drawing
	drawing = new createjs.Shape();
	drawing.on("tick", update);
	drawing.drawX = drawing.drawY = 0;
	
	// Add
	container.addChild( drawing );	
}

function keyPressed( event )
{
	//Keycodes found at http://keycode.info
	if( event.keyCode == 13 )	// enter
	{
		console.log("Clear Drawing");
		drawing.graphics.clear();
	}
}

function update( event )
{
	var step = 10;
	var x = getRandomInt(-1,1) * step;
	var y = getRandomInt(-1,1) * step;
	var c = getRandomInt(100,255);
	
	var cString = "rgba("+c+","+c+","+0.0+",1.0)";
	//var fadeArea = 500;
	//drawing.graphics.beginFill("rgba(255,255,255,0.01)");
	//drawing.graphics.drawRect(fadeArea*-0.5,fadeArea*-0.5,fadeArea,fadeArea);	

	//drawing.graphics.beginFill(cString);
	drawing.graphics.setStrokeStyle(1);
	drawing.graphics.beginStroke(cString);
	drawing.graphics.moveTo(drawing.drawX,drawing.drawY);
	drawing.drawX += x;
	drawing.drawY += y;
	drawing.graphics.lineTo(drawing.drawX,drawing.drawY);	
	//drawing.graphics.drawCircle(drawing.drawX,drawing.drawY,3);
	drawing.graphics.endFill();
	
	//	console.log("update");
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}