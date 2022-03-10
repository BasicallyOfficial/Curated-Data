let sound, amplitude;
let size;

function preload(){
  sound = loadSound('Assets/2.wav');
}

function setup() {
    let cnv = createCanvas(500, 500);
 cnv.mouseClicked(togglePlay);
   amplitude = new p5.Amplitude();
}

function draw() {
   background(187, 201, 191);
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 200);
  console.log(size);
  Face();
}

function Face(){

  //iris
  push()
  drawYellowCircle(width*.25, height*.3,width*.11);
  drawYellowCircle(width*.75, height*.3,width*.11);
 pop()

  //pupil
  push()
  drawBlackCircle(width*.25, height*.3,width*.07,);
  drawBlackCircle(width*.75, height*.3,width*.07,);
  pop()

  //mouth
  push()
  fill(0)
   rect(width*.32, height*.52, width*.38, height*.02+(size*1.5), width*.2);
  pop()

}

function drawBlackCircle(circleX, circleY, circleDiameter){
  fill(0);
  circle(circleX, circleY, circleDiameter+(size/4));
}


function drawYellowCircle(circleX, circleY, circleDiameter){
  fill(180, 189, 51)
  circle(circleX, circleY, circleDiameter+(size/6))
}

function togglePlay() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}
