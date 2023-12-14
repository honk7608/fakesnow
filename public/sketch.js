let capture, tracker
let canvasWidth = 640
let canvasHeight = 480

let images
let s
let maskL
let maskR

let selectInput

function setup() {
  let img2 = loadImage('/assets/ak1.png');
  let img3 = loadImage('/assets/an.png');
  let img4 = loadImage('/assets/bok.png');
  let img5 = loadImage('/assets/bul.png');
  let img6 = loadImage('/assets/chun.png');
  let img7 = loadImage('/assets/cot.png');
  let img8 = loadImage('/assets/ha.png');
  let img9 = loadImage('/assets/ho.png');
  let img10 = loadImage('/assets/joong.png');
  let img11 = loadImage('/assets/pe.png');
  let img12 = loadImage('/assets/ak2.png');
  images = [img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12]; 
  maskR = img2;
  maskL = img12;

  //canvas ÀÌµ¿
  createCanvas(canvasWidth, 360)
  canvasElement = document.getElementsByTagName("canvas")[0]
  document.getElementsByTagName("main")[0].appendChild(canvasElement)
  
  // setup the webcam capture
  capture = createCapture(VIDEO)
  capture.hide()
  capture.size(canvasWidth, 280)

  // setup the face tracker
  tracker = new clm.tracker()
  tracker.init()
  tracker.start(capture.elt)
}

function draw() {
  
  s = second()

  // use the lines below to mirror the image if that's what you prefer
  // scale(-1, 1)
  // translate(-w, 0);
  image(capture, 0, -120, canvasWidth, canvasHeight)

  // get the face positions from the tracker
  let positions = tracker.getCurrentPosition()  

  if(positions.length > 0) {
    image(maskR, positions[15][0]-10, positions[15][1]-110, positions[11][0]-positions[3][0]+20, positions[11][0]-positions[3][0]+20);
    image(maskL, positions[19][0]-100, positions[19][1]-110, positions[11][0]-positions[3][0]+20, positions[11][0]-positions[3][0]+20);
  }
}
