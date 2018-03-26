var drawing;

function main()
{
	// Setup
	setup();

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
	if( event.keyCode == 32 )
	{
		console.log("Clear Drawing");
		drawing.graphics.clear();
	}
}

function update( event )
{
	var x = getRandomInt(-1,1);
	var y = getRandomInt(-1,1);
		
	drawing.drawX += x;
	drawing.drawY += y;
	drawing.graphics.beginFill("#FF0000");
	//drawing.graphics.moveTo(drawing.drawX,drawing.drawY);
	drawing.graphics.drawCircle(drawing.drawX,drawing.drawY,3);
	drawing.graphics.endFill();
	
	//	console.log("update");
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}