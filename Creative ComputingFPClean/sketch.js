var serial;
var portName = 'COM5';
var inData = 0;

var font;
var C;
var CS;
var D;
var DS;
var E;
var F;
var FS;
var G;
var GS;
var A;
var Bb;
var B;
var C1;

var num = 0;
var n = 0;
var i = 0;
var piano = false;
var osc;
var switcher = false;
var notes = [42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55];

var c;
var cs;
var d;
var eb;
var e;
var f;
var fs;
var g;
var gs;
var a;
var bb;
var b;
var c5;

var letter = " ";
var x;
var y;
var colors;
var alph = 100;

var raindrops = [];
var blocks = [];

function preload() {
  font = loadFont('KalamBold.ttf')
  c = loadSound('C.wav');
  cs = loadSound('Cs.wav');
  d = loadSound('D.wav');
  eb = loadSound('Eb.wav');
  e = loadSound('E.wav');
  f = loadSound('F.wav');
  fs = loadSound('Fs.wav');
  g = loadSound('G.wav');
  gs = loadSound('Gs.wav');
  a = loadSound('A.wav');
  bb = loadSound('Bb.wav');
  b = loadSound('B.wav');
  c5 = loadSound('C5.wav');
}

function setup() {

  serial = new p5.SerialPort(); // make a new instance of the serialport library
  serial.on('list', printList); // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen); // callback for the port opening
  serial.on('data', serialEvent); // callback for when new data arrives
  serial.on('error', serialError); // callback for errors
  serial.on('close', portClose); // callback for the port closing
  var options = {
    baudrate: 9600
  };

  serial.list(); // list the serial ports
  serial.open(portName); // open a serial port

  ellipseMode(CENTER);

  osc = new p5.Oscillator('Triangle');

  createCanvas(windowWidth, windowHeight);
  noCursor();

  C = color(232, 12, 36, alph);
  CS = color(255, 75, 0, alph);
  D = color(232, 146, 12, alph);
  DS = color(232, 179, 85, alph);
  E = color(255, 226, 89, alph);
  F = color(4, 135, 12, alph);
  FS = color(13, 83, 60, alph);
  G = color(39, 69, 255, alph);
  GS = color(79, 74, 255, alph);
  A = color(131, 100, 255, alph);
  Bb = color(170, 53, 255, alph);
  B = color(255, 67, 177, alph);
  C1 = color(255, 0, 255, alph);
  colors = C;
}

function serialEvent() {
  inData = serial.readStringUntil('\r\n');
  if (inData.length > 0) {
    inData = split(inData, ',');
  }
}

function draw() {
  textFont(font);
  strokeWeight(3);
  background(255);
  fill(colors);
  textSize(num);
  text(letter, x, y);
  n += .002;
  num = noise(n) * width / 5;
  alph = 30;
  if (inData[0] > 0) {
    colors = C;
    letter = "C";
    x = random((width / 8));
    y = random((height / 3), height);
    i = 0;
    if (switcher === true) {
      c.play();
    }
  }
  if (inData[1] > 0) {
    colors = D;
    letter = "D";
    x = random((width / 8), 2 * (width / 7));
    y = random(height / 3);
    i = 2;
    if (switcher === true) {
      d.play();
    }
  }
  if (inData[2] > 0) {
    colors = E;
    letter = "E";
    x = random(2 * (width / 8), 3 * (width / 7));
    y = random((height / 3), height);
    i = 4;
    if (switcher === true) {
      e.play();
    }
  }
  if (inData[3] > 0) {
    colors = F;
    letter = "F";
    x = random(3 * (width / 8), 4 * (width / 7));
    y = random((height / 3), height);
    i = 5;
    if (switcher === true) {
      f.play();
    }
  }
  if (inData[4] > 0) {
    colors = G;
    letter = "G";
    x = random(4 * (width / 8), 5 * (width / 7));
    y = random((height / 3), height);
    i = 7;
    if (switcher === true) {
      g.play();
    }
  }
  if (inData[5] > 0) {
    colors = A;
    letter = "A";
    x = random(5 * (width / 8), 6 * (width / 7));
    y = random((height / 3), height);
    i = 9;
    if (switcher === true) {
      a.play();
    }
  }
  if (inData[6] > 0) {
    colors = B;
    letter = "B";
    x = random(6 * (width / 8), 7 * (width / 8));
    y = random((height / 3), height);
    i = 11;
    if (switcher === true) {
      b.play();
    }
  }
  if (inData[7] > 0) {
    colors = C1;
    letter = "C5";
    x = random(7 * (width / 8), width);
    y = random((height / 3), height);
    i = 12;
    if (switcher === true) {
      c5.play();
    }
  }
  noStroke();
  for (var k = 0; k < raindrops.length; k++) {
    raindrops[k].drop();
    raindrops[k].update();
    raindrops[k].display();
  }
  for (var j = 0; j < blocks.length; j++) {
    blocks[j].update();
    blocks[j].display();
  }
  print(inData);
}

function keyPressed() {
  if (keyCode === 65) {
    colors = C;
    letter = "C";
    x = random((width / 8));
    y = random((height / 3), height);
    i = 0;
    if (switcher === true) {
      c.play();
    }
  }
  if (keyCode === 87) {
    colors = CS;
    letter = "C#";
    x = random(width / 5);
    y = random((height / 3));
    i = 1;
    if (switcher === true) {
      cs.play();
    }
  }
  if (keyCode === 83) {
    colors = D;
    letter = "D";
    x = random((width / 8), 2 * (width / 7));
    y = random(height / 3);
    i = 2;
    if (switcher === true) {
      d.play();
    }
  }
  if (keyCode === 69) {
    colors = DS;
    letter = "Eb";
    x = random((width / 5), 2 * (width / 5));
    y = random((height / 3));
    i = 3;
    if (switcher === true) {
      eb.play();
    }
  }
  if (keyCode === 68) {
    colors = E;
    letter = "E";
    x = random(2 * (width / 8), 3 * (width / 7));
    y = random((height / 3), height);
    i = 4;
    if (switcher === true) {
      e.play();
    }
  }
  if (keyCode === 70) {
    colors = F;
    letter = "F";
    x = random(3 * (width / 8), 4 * (width / 7));
    y = random((height / 3), height);
    i = 5;
    if (switcher === true) {
      f.play();
    }
  }
  if (keyCode === 84) {
    colors = FS;
    letter = "F#";
    x = random(2 * (width / 5), 3 * (width / 5));
    y = random((height / 3));
    i = 6;
    if (switcher === true) {
      fs.play();
    }
  }
  if (keyCode === 71) {
    colors = G;
    letter = "G";
    x = random(4 * (width / 8), 5 * (width / 7));
    y = random((height / 3), height);
    i = 7;
    if (switcher === true) {
      g.play();
    }
  }
  if (keyCode === 89) {
    colors = GS;
    letter = "G#";
    x = random(3 * (width / 5), 4 * (width / 5));
    y = random((height / 3));
    i = 8;
    if (switcher === true) {
      gs.play();
    }
  }
  if (keyCode === 72) {
    colors = A;
    letter = "A";
    x = random(5 * (width / 8), 6 * (width / 7));
    y = random((height / 3), height);
    i = 9;
    if (switcher === true) {
      a.play();
    }
  }
  if (keyCode === 85) {
    colors = Bb;
    letter = "Bb";
    x = random(4 * (width / 5), width);
    y = random((height / 3));
    i = 10;
    if (switcher === true) {
      bb.play();
    }
  }
  if (keyCode === 74) {
    colors = B;
    letter = "B";
    x = random(6 * (width / 8), 7 * (width / 8));
    y = random((height / 3), height);
    i = 11;
    if (switcher === true) {
      b.play();
    }
  }
  if (keyCode === 75) {
    colors = C1;
    letter = "C5";
    x = random(7 * (width / 8), width);
    y = random((height / 3), height);
    i = 12;
    if (switcher === true) {
      c5.play();
    }
  }
  if (keyCode === ENTER || keyCode === RETURN) {
    if (switcher === false) {
      osc.amp(0, 0.5);
      switcher = true;

    } else {
      osc.amp(0.5, 0.05);
      switcher = false;
    }
  }
  if (key === ' ') {
    background(255);
  }
  raindrops.push(new Rain(i, width / 2, height, x, y));
  blocks.push(new Block(i));
  osc.start(0, notes[i]);
  var freq = midiToFreq(notes[i]);
  osc.freq(freq);
  piano = false;

}

function serialError(err) {
  console.log('Something went wrong with the serial port. ' + err);
}

function portClose() {
  console.log('The serial port closed.');
}

function printList(portList) {
  for (var i = 0; i < portList.length; i++) {
    console.log(i + " " + portList[i]);
  }
}


function serverConnected() {
  console.log('connected to server.');
}

function portOpen() {
  console.log('the serial port opened.')
}