let capture, tracker
let canvasWidth = 640
let canvasHeight = 480

let images
let s
let testmask
let mask1L
let mask1R
let mask2
let mask3
let mask4

let setSelectedOption = 0
let currentSelectedOption = 0

function setup() {
  testmask = loadImage('/assets/testPoint.png');
  mask1R = loadImage('/assets/ak1.png');
  mask1L = loadImage('/assets/ak2.png');
  mask2 = loadImage('/assets/an.png');
  mask3 = loadImage('/assets/bok.png');
  mask4 = loadImage('/assets/bul.png');
  let img6 = loadImage('/assets/chun.png');
  let img7 = loadImage('/assets/cot.png');
  let img8 = loadImage('/assets/ha.png');
  let img9 = loadImage('/assets/ho.png');
  let img10 = loadImage('/assets/joong.png');
  let img11 = loadImage('/assets/pe.png');

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

  selectedElement = document.querySelector('input[type="radio"]:checked')
  
  if(selectedElement) {currentSelectedOption = Number(selectedElement.value)}
  else{currentSelectedOption = 0}

  if(currentSelectedOption != setSelectedOption) {setSelectedOption = currentSelectedOption}

  if(positions.length > 0) { //ak
    if(setSelectedOption == 1) {
      image(mask1R, positions[15][0]-30, positions[15][1]-100, positions[11][0]-positions[3][0], positions[7][1]-positions[33][1]);
      image(mask1L, positions[19][0]-90, positions[19][1]-100, positions[11][0]-positions[3][0], positions[7][1]-positions[33][1]);
    } else if (setSelectedOption == 2) { //an
      dx = (positions[32][0]-positions[27][0])*3
      dy = (positions[41][1]-positions[33][1])*2.5
      image(mask2, (positions[0][0]+positions[14][0]-dx)/2, (positions[33][1]+positions[41][1]-dy+10)/2, dx, dy)
    } else if (setSelectedOption == 3) { //bok
      dx = (positions[13][0]-positions[1][0])*1.5
      dy = (positions[7][1]-positions[33][1])*1.5
      image(mask3, (positions[62][0]-dx/2), (positions[62][1]-dy/2+20), dx, dy)
    } else if (setSelectedOption == 4) { //bul
      dx = (positions[13][0]-positions[1][0])*2
      dy = (positions[7][1]-positions[62][1])*3.5
      image(mask4, (positions[62][0]-dx/2), (positions[62][1]-dy/2-100), dx, dy)
    } 
    else {
      i = 0
      while (i<=70) {
        image(testmask, positions[i][0], positions[i][1], 5, 5)
        i += 1
      }
    }
    
  }
}