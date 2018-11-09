// var canvas = document.querySelector('canvas')

// canvas.width = window.innerWidth
// canvas.height = window.innerHeight

// var ctx = canvas.getContext('2d')

var backgroundImg = new Image()
backgroundImg.src = 'client/images/map.png'


function fetchImages() {
  var img = new Image()

  this.drawCharacter = function drawCharacter(imgSrc, frameX, canvasX, canvasY) {
    img.src = imgSrc
    ctx.drawImage(img, frameX * 128, 0, 128, 128, canvasX, canvasY, 128, 128)
  }

  this.drawAnywhere = function drawAnywhere(imgSrc, frameX, frameY, canvasX, canvasY, width, height) {
    ctx.drawImage(img, frameX * 128, frameY * 128, 128, 128, canvasX, canvasY, width, height)
  }
}

var playerImg = new fetchImages()
var wizardImg = new fetchImages()
var textBoxImg = new Image()
textBoxImg.src = 'client/images/text-box-right.png'

const speedWalk = 50
let spriteLoop = 0
let currentPosition_player = -50
let currentPosition_wizard = 800
let currentText = 0
let buttonAppend = 0
var xxx = 0

function intro_step() {

  setTimeout(function () {

    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(backgroundImg, 0, 0)

    if (currentPosition_player < 150) {
      playerImg.drawCharacter('client/images/player-walk-right.png', spriteLoop, currentPosition_player, 420)
      currentPosition_player += speedWalk
      wizardImg.drawCharacter('client/images/npc-wizard-right.png', spriteLoop, currentPosition_wizard, 420)
    } else {
      playerImg.drawCharacter('client/images/player-standing-right.png', spriteLoop, currentPosition_player, 420)
      wizardImg.drawCharacter('client/images/npc-wizard-left.png', spriteLoop, currentPosition_wizard, 420)
      if (currentPosition_wizard < 500) {
        wizardImg.drawCharacter('client/images/npc-wizard-left.png', spriteLoop, currentPosition_wizard, 420)
        // textBoxImg.drawCharacter('client/images/text-box-right.png',spriteLoop,currentPosition_wizard,420)
        ctx.drawImage(textBoxImg, 200, 200, 800, 100)
        ctx.font = '25px sans-serif'
        ctx.fillText(conversation_npc[currentText], 240, 240)
        if (buttonAppend == 0) {
          document.getElementById("nextConver").innerHTML =
            "<button id='nextTxt' type='button' class='btn btn-primary' value='Next' onClick='nextText()' style='position: absolute;z-index: 99; left: 680; top: 180'><i class='fa fa-chevron-circle-right'></i></button>"
          buttonAppend++
        }
      } else {
        currentPosition_wizard -= speedWalk
      }

    }

    spriteLoop++
    // count--

    if (spriteLoop == 4) {
      spriteLoop = 0
    }
    console.log(spriteLoop)
    // if (count == 0){
    //   return
    // }
    requestAnimationFrame(intro_step)
  }, 250)

}

// intro = requestAnimationFrame(intro_step)
// cancelAnimationFrame(intro)

// var backgroundImg = new Image()
// backgroundImg.src = 'client/images/map.png'

// var textBox = new Image()
// textBox.src = 'client/images/text-box-right.png'

var playerImg = new Image()
playerImg.src = 'client/images/player-walk-right.png'

// var wizardImg = new Image()
// wizardImg.src = 'client/images/npc-wizard.png'

function sprite(options) {
  var that = {}

  that.context = options.context
  that.width = options.width
  that.height = options.height
  that.image = options.image

  that.render = function () {

    that.context.drawImage(
       that.image,
       0,
       0,
       that.width,
       that.height,
       0,
       0,
       that.width,
       that.height);
};

  return that
}

var canvas_2 = document.getElementById('test')
canvas_2.width = 128
canvas_2.height = 128

var coin = sprite({
  context: canvas_2.getContext("2d"),
  width: 128,
  height: 128,
  image: playerImg
})

coin.render()


var conversation_npc = ["สวัสดี เจ้าอยู่ในโลกของ Pythonโลกของภาษาคอมพิวเตอร์",
  "ที่ทุกๆอย่างคือการใช้คำสั่งในภาษาไพทอน",
  "เอาล่ะ ข้าจะสอนการแสดงผลทางหน้าจอโดยใช้คำสั่ง print ",
  "หากข้าต้องการแสดงผลเป็นคำว่า HELLO WORLD",
  "ข้าก็จะเขียนแบบนี้ print(\"HELLO WORLD\")",
  "ทีนี้ข้าต้องการจะรู้ชื่อของเจ้า",
  "ลองใช้คำสั่ง print แสดงผลชื่อของเจ้ามา",
]