var canvas = new fabric.Canvas('myCanvas');
// Crea la variable del canvas
 block_y=1;
 block_x=1;
 

block_image_width = 350;
block_image_height = 430;

var block_image_object= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	 block_image_object = Img;


	 block_image_object.scaleToWidth(block_image_width);
	 block_image_object.scaleToHeight(block_image_height);
	 block_image_object.set({
	 top:block_y,
	 left:block_x	 
	});
    canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // añade los códigos de las teclas
	{
		 block_x = 1;
		 new_image('sonic.webp');
		 console.log("r");
	}
	if(keyPressed == '71')
	{
		block_x = 100;
		new_image('mario bros.webp');
		console.log("g");
	}
	
	if(keyPressed == '89')
	{
		block_x =200;
		new_image('pacman.jpg');
		console.log("y");
	}
	if(keyPressed == '80')
	{
		block_x = 350;
		new_image('Steve.webp');
		console.log("p");
	}
	if(keyPressed == '66')
	{
		block_x = 500;
		new_image('cuphead y mugman.png');
		console.log("b");
	}
	
}