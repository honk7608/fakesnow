let capture, tracker
let w = 640
let h = 480

let c
let img
let img2
let img3
let img4
let img5
let img6
let img7
let img8
let img9
let img10
let img11
let images
let mask

let s


function setup() {
  // img = loadImage('assets/redshroom.png'); // Load the image
  img2 = loadImage('assets/ak.jpg');
  img3 = loadImage('assets/an.jpg');
  img4 = loadImage('assets/bok.jpg');
  img5 = loadImage('assets/bul.png');
  img6 = loadImage('assets/chun.jpg');
  img7 = loadImage('assets/cot.jpg');
  img8 = loadImage('assets/ha.png');
  img9 = loadImage('assets/ho.jpg');
  img10 = loadImage('assets/joong.jpg');
  img11 = loadImage('assets/pe.jpg');
  images = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11]; 
  mask=random(images);
  createCanvas(w, 360)
  
  // setup the webcam capture
  capture = createCapture(VIDEO)
  capture.hide()
  capture.size(w,280)
  // setup the face tracker
  tracker = new clm.tracker()
  tracker.init()
  tracker.start(capture.elt)
    drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'green';

 
}

function draw() {
  
  s=second()
  
   c = [
  color(103, 194, 147),
  color(246, 147, 131),
  color(39, 144, 201),
  color(133, 131, 186),
  color(241, 97, 64),
  color(s*2)
  ]
  // use the lines below to mirror the image if that's what you prefer
  // scale(-1, 1)
  // translate(-w, 0);
  image(capture, 0, -120, w, h)

  // get the face positions from the tracker
  let positions = tracker.getCurrentPosition()  

  image(mask, positions[19][0]-55, positions[19][1]-75, positions[11][0]-positions[3][0]+100, positions[11][0]-positions[3][0]+100);
}