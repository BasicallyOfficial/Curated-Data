let sound, amplitude;
let size;
let grunt = [];
let soundRand = 0;
let slider;

function preload(){
  //playing sound
  soundFormats('wav')
   for (i = 0; i <= 14; i++) {
  grunt[i] = loadSound('./Assets/' + [i] + '.wav');
  }
}
function setup() {
    let cnv = createCanvas(windowWidth*.5, (windowWidth*.5)*.95);
    cnv.parent('myCanvas');
 cnv.mouseClicked(togglePlay);
   amplitude = new p5.Amplitude();
  slider = createSlider(0, 2, 1, .01);
      slider.parent('slider-holder');
 slider.position(width*.2, height*.3);
 slider.style('width', '200px');
  slider.addClass('mySlider');
}

function draw() {
   background(187, 201, 191);
   //audio mapping
  let level = amplitude.getLevel();
  size = map(level, 0, 1, 0, 200);
  console.log(size);
  Face();
  let val = slider.value();
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
  if (grunt[soundRand].isPlaying() ){
    grunt[soundRand].pause();
  } else {
    soundRand = int(random(grunt.length));
    grunt[soundRand].play();
    grunt[soundRand].setVolume(slider.value());
		amplitude = new p5.Amplitude();
		amplitude.setInput(sound);
  }
}
