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
let mask5
let mask6
let mask7
let mask8
let mask9
let mask10

let setSelectedOption = 0
let currentSelectedOption = 0

function setup() {
  testmask = loadImage('/assets/testPoint.png');
  mask1R = loadImage('/assets/ak1.png');
  mask1L = loadImage('/assets/ak2.png');
  mask2 = loadImage('/assets/an.png');
  mask3 = loadImage('/assets/bok.png');
  mask4 = loadImage('/assets/bul.png');
  mask5 = loadImage('/assets/chun.png');
  mask6 = loadImage('/assets/cot.png');
  mask7 = loadImage('/assets/ha.png');
  mask8 = loadImage('/assets/ho.png');
  mask9 = loadImage('/assets/joong.png');
  mask10 = loadImage('/assets/pe.png');

  //canvasElements setting
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
      R_cx = positions[15][0]
      L_cx = positions[19][0]
      R_cy = positions[7][1] - (positions[7][1]-positions[21][1])*2
      L_cy = positions[7][1] - (positions[7][1]-positions[17][1])*2
      dx = (positions[11][0]-positions[3][0])/2
      dy = positions[7][1]-positions[33][1]
      image(mask1R, R_cx, R_cy, dx, dy);
      image(mask1L, L_cx-dx, L_cy, dx, dy);
    } else if (setSelectedOption == 2) { //an
      dx = (positions[32][0]-positions[27][0])*3
      dy = (positions[41][1]-positions[33][1])*2.5
      x0 = (positions[0][0]+positions[14][0]-dx)/2
      y0 = (positions[33][1]+positions[41][1]-dy+10)/2
      image(mask2, x0, y0, dx, dy)
    } else if (setSelectedOption == 3) { //bok
      dx = (positions[13][0]-positions[1][0])*1.5
      dy = (positions[7][1]-positions[33][1])*2.75
      x0 = (positions[62][0]-dx/2)
      y0 = (positions[62][1]-dy/2+20)
      image(mask3, x0, y0, dx, dy)
    } else if (setSelectedOption == 4) { //bul
      dx = (positions[13][0]-positions[1][0])*2
      dy = (positions[7][1]-positions[62][1])*3.5
      x0 = (positions[62][0]-dx/2)
      y0 = (positions[62][1]-dy/2-100)
      image(mask4, x0, y0, dx, dy)
    } else if (setSelectedOption == 5) { //chun
      dx = (positions[1][0]-positions[13][0])
      dy = (positions[33][1]-positions[62][1])*2
      x0 = (positions[16][0]+positions[20][0])/2-dx/2
      y0 = positions[33][1]-(positions[7][1]-positions[33][1])*0.5
      image(mask5, x0, y0, dx, dy)
    } else if (setSelectedOption == 6) { //cot
      dx = (positions[1][0]-positions[13][0])
      dy = (positions[33][1]-positions[62][1])*2
      x0 = (positions[16][0]+positions[20][0])/2-dx/2
      y0 = (positions[37][1]+positions[47][1])/2-dy/2
      image(mask6, x0, y0, dx, dy)
    } else if (setSelectedOption == 7) { //ha
      dx = (positions[13][0]-positions[1][0])*1.5
      dy = (positions[7][1]-positions[33][1])*2.5
      x0 = (positions[62][0]-dx/2)
      y0 = (positions[62][1]-dy/2)
      image(mask7, x0, y0, dx, dy)
    } else if (setSelectedOption == 8) { //ho
      dx = (positions[13][0]-positions[1][0])*2
      dy = (positions[7][1]-positions[33][1])*3
      x0 = (positions[62][0]-dx/2)
      y0 = (positions[62][1]-dy/2-20)
      image(mask8, x0, y0, dx, dy)
    } else if (setSelectedOption == 9) { //joong
      dx = (positions[13][0]-positions[1][0])*2.5
      dy = (positions[7][1]-positions[33][1])*2.5
      x0 = (positions[62][0]-dx/2)
      y0 = (positions[33][1]-dy/2)
      image(mask9, x0, y0, dx, dy)
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