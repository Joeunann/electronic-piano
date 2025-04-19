let x;
let y;
let w;
let h;
const KEY_W = 55;
const KEY_H = 220;

let whiteKeyNames =[];

whiteKeyNames[0] = "C";
whiteKeyNames[1] = "D";
whiteKeyNames[2] = "E";
whiteKeyNames[3] = "F";
whiteKeyNames[4] = "G";
whiteKeyNames[5] = "A";
whiteKeyNames[6] = "B";
whiteKeyNames[7] = "C";

let blackKeyNames = [];

blackKeyNames[0] = "C#"
blackKeyNames[1] = "D#"
blackKeyNames[2] = "F#"
blackKeyNames[3] = "G#"
blackKeyNames[4] = "A#"


function setup() {
	createCanvas(800, 400);
	
	//piano white keys
	
	x = 100;
	
	for (let i = 0; i < 7; i++){
		stroke("lightgray")
		strokeWeight(3)
		line(x, 0, x, 800);
		x += 100;
	}	
	 
		keyNameDisplay();

}

function blackKeysDisplay(){
	
	//piano first two black keys
	
	x = 75;
	
	for (let i = 0; i < 2; i++){
		fill("black");
		rect(x, 0, KEY_W, KEY_H);
		x += 100;
	}
	
	//rest of black keys
	
		for (let i = 0; i < 3; i++){
		rect(x + 100, 0, KEY_W, KEY_H);
		x += 100;
	}
}

function whiteKeysDisplay(){
	
	for (let i = 0; i < 8; i++){
		draw();
		hitTest();
		x += 100;
		y += 100;
	}
}

	function draw(){
		
		x = 0;
		y = 0;
		w = 100;
		h = 800;
		
   if (hitTest(mouseX, mouseY, x, y, w, h)) {
       fill("#E5E7E9"); 
   } else {
       fill("white");
	 }

	rect(x, y, w, h); 
		
		blackKeysDisplay();
		keyNameDisplay();
}

	
function hitTest(px, py, x, y, w, h) {
	
 	return ((px >= x) && (px <= x + w) && (py >= y) && (py <= y + h));
}


function keyNameDisplay(){

//white key names
	
	x = 40;
	
	for (let i = 0; i <8; i++){
		noStroke();
		fill("black");
		textFont('Verdana', 25);
		text(whiteKeyNames[i], x, 350);
		x += 100;
	}
	
//black key names
	
	x = 85;
	
	for (let i = 0; i < 2; i++){
		fill("white");
		text(blackKeyNames[i], x, 200);
		x += 100;
	}
	
	for (let i = 2; i < 5; i++){
		text(blackKeyNames[i], x + 100, 200);
		x += 100;
	}
}