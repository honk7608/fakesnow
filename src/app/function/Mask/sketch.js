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
let img12
let m
let images
let mask

let s


function setup() {
  // img = loadImage('assets/redshroom.png'); // Load the image
  img2 = loadImage('/function/Mask/assets/ak1.png');
  img3 = loadImage('/function/Mask/assets/an.png');
  img4 = loadImage('/function/Mask/assets/bok.png');
  img5 = loadImage('/function/Mask/assets/bul.png');
  img6 = loadImage('/function/Mask/assets/chun.png');
  img7 = loadImage('/function/Mask/assets/cot.png');
  img8 = loadImage('/function/Mask/assets/ha.png');
  img9 = loadImage('/function/Mask/assets/ho.png');
  img10 = loadImage('/function/Mask/assets/joong.png');
  img11 = loadImage('/function/Mask/assets/pe.png');
  img12 = loadImage('/function/Mask/assets/ak2.png');
  images = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]; 
  //mask=random(images);
  mask = img2;
  createCanvas(w, 360)
  m = img12;
  // setup the webcam capture
  capture = createCapture(VIDEO)
  capture.hide()
  capture.size(w,280)
  // setup the face tracker
  tracker = new clm.tracker()
  tracker.init()
  tracker.start(capture.elt)
    //drawingContext.shadowBlur = 100;
  //drawingContext.shadowColor = 'green';

 
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

  if(positions.length > 0) {
    image(mask, positions[15][0]-10, positions[15][1]-110, positions[11][0]-positions[3][0]+20, positions[11][0]-positions[3][0]+20);
    image(m, positions[19][0]-100, positions[19][1]-110, positions[11][0]-positions[3][0]+20, positions[11][0]-positions[3][0]+20);

  }
}
