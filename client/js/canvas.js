var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var ctx = canvas.getContext('2d')

var backgroundImg = new Image()
backgroundImg.src = 'client/images/map.png'

var textBox = new Image()
textBox.src = 'client/images/text-box-right.png'

var playerImg = new Image()
playerImg.src = 'client/images/player-walk-right.png'

var wizardImg = new Image()
wizardImg.src = 'client/images/npc-wizard.png'


playerImg.onload = function () {
  // init(step_intro(100))
  step_intro(50)
}
var pause = false

// function loop() {
//   if (pause) {
//     // window.cancelAnimationFrame(step_intro)
//     return
//   } else {
//     window.requestAnimationFrame(step_intro)
//   }
// }

function drawFrame(img, frameX, frameY, canvasX, canvasY, width, height) {
  ctx.drawImage(img, frameX * 128, frameY * 128, 128, 128, canvasX, canvasY, width, height)
}

const cycleLoop = [0, 1, 2, 3]
let currentIndex = 0
let currentText = 0
let frameCount = 0
let currentPlayerPosition = -30
let walk = 0
const walk_point_1 = 150

function step_intro(number) {
  console.log(number)
  if (number > 20) {
    setTimeout(function () {

      frameCount++
      // if (frameCount < 15) {
      //   window.requestAnimationFrame(step_intro)
      //   return
      // }
      frameCount = 0
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(backgroundImg, 0, 0)

      if (currentPlayerPosition < walk_point_1) {
        drawFrame(playerImg, cycleLoop[currentIndex], 0, currentPlayerPosition, 420, 128,128)
        currentPlayerPosition += 15
      } else {
        drawFrame(playerImg, cycleLoop[currentIndex], 0, 150, 420, 128,128)
        ctx.drawImage(textBox, 200, 200, 800, 100)
        ctx.font = '25px sans-serif'
        ctx.fillText(conversation_npc[currentText], 240, 240)
        document.getElementById("nextConver").innerHTML =
          "<button id='nextTxt' type='button' class='btn btn-primary' value='Next' onClick='nextText()' style='position: absolute;z-index: 99; left: 680; top: 180'><i class='fa fa-chevron-circle-right'></i></button>"
      }

      drawFrame(wizardImg, cycleLoop[currentIndex], 0, 500, 420, 128,128)
      currentIndex++
      // console.log(currentIndex)

      if (currentIndex >= cycleLoop.length - 1) {
        currentIndex = 0
      }
      number--
      // console.log(number)
      window.requestAnimationFrame(step_intro(number))
      console.log(number)
    }, 200);
  }else{
    
    playerImg.src = 'client/images/player-standing-right.png'
    drawFrame(playerImg, cycleLoop[currentIndex], 0, currentPlayerPosition, 420, 128,128)

    currentIndex++
    if (currentIndex >= cycleLoop.length - 1) {
      currentIndex = 0
    }
  }
}

// function init(action) {
//   window.requestAnimationFrame(action)
// }

function nextText() {
  window.cancelAnimationFrame(step_intro(0))
  if (conversation_npc.length - 1 > currentText) {
    currentText += 1
  }
}

var conversation_npc = ["สวัสดี เจ้าอยู่ในโลกของ Pythonโลกของภาษาคอมพิวเตอร์",
  "ที่ทุกๆอย่างคือการใช้คำสั่งในภาษาไพทอน",
  "เอาล่ะ ข้าจะสอนการแสดงผลทางหน้าจอโดยใช้คำสั่ง print ",
  "หากข้าต้องการแสดงผลเป็นคำว่า HELLO WORLD",
  "ข้าก็จะเขียนแบบนี้ print(\"HELLO WORLD\")",
  "ทีนี้ข้าต้องการจะรู้ชื่อของเจ้า",
  "ลองใช้คำสั่ง print แสดงผลชื่อของเจ้ามา",
]

// loop()
//   var i = 0
//   var ui = new Image()
//   ui.onload = function () {
//     ctx.drawImage(ui, 100, 150, 1200, 200)
//     ctx.font = '30px sans-serif'
//     ctx.fillText(conversation_npc[i], 150, 200)
//   }
//   ui.src = 'client/images/ui-textbox.png'