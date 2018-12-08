var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 5
var playerState = 0
var wizardState = 0
var stopState = 0
var tmpResponse

var conver_1 = ["ตอนนี้ถึงอีกหนึ่งบทเรียน",
  "บทเรียนนี้จะสอนเจ้าเรื่องคำสั่งเงื่อนไข",
  "เพื่อให้สามารถทำงานที่ซับซ้อน\nและมีประสิทธิภาพมากขึ้น",
  "ยกตัวอย่างเช่น \nให้แจ้งเตือนหากอากาศวันนี้ร้อนจนเกินไป",
  "ตัวอย่างการเขียนก็จะเป็นแบบนี้",
  "if (temperature > 30):\n    print(\"Very Hot\")",
  "นั่นคือหากอุณหภูิสูงเกิน 30 \nก็ให้แสดงผลว่า Very Hot",
  "เอาล่ะ มาลองใช้กัน",
  "จะมีโค้ดแนะนำให้เจ้าไว้ส่วนนึง",
  "ที่เจ้าต้องทำคือทำให้ผลลัพธ์\nออกมาถูกต้องเท่านั้นเอง",
  "จงเลือกเส้นทางที่เจ้าจะไป",
  "ซ้ายหรือขวา?"
]

var conver_2 = ["ทางนั้นอันตรายเกินกว่าเจ้าจะเข้าได้",
  "ลองเลือกอีกทางดูมั้ย?",
]


var conver_3 = ["ฮ่าๆ เจ้าพอจะเข้าใจแล้วใช่มั้ยล่ะ",
  "นี่เป็นหนึ่งในคำสั่งเพียงเล็กน้อย ",
  "ข้าจะสอนเจ้าไปทีละนิด ",
  "อย่าเพิ่งใจร้ายซะล่ะ",
  "รอช้าอะไร เดินต่อไป",
  "ข้าจะพาไปดูบทเรียนถัดไป",
]

function resultCompile(responseTxt) {
  tmpResponse = responseTxt

  if (responseTxt.length < 50) {
    txt = responseTxt.trim()

    if (txt == "left") {
      playerState = "goLeft"

      self.player.destroy()
      self.player = game.add.sprite(self.player.x, self.player.y, 'playerWalkLeft')
      self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
      self.player.animations.play('walk')
    }

    if (txt == "right") {
      playerState = "goRight"

      self.player.destroy()
      self.player = game.add.sprite(self.player.x, self.player.y, 'playerWalkRight')
      self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
      self.player.animations.play('walk')
    }

    if (txt == "fail") {
      playerState = "fail"
    }

  } else {

    self.dialogBox.destroy()
    self.button.destroy()
    self.errorTextDialog = game.add.image(250, 50, 'errorText');
    self.errorTextDialog.scale.setTo(5, 5)

    self.textErrorInBox = game.add.text(280, 80, "มีข้อผิดพลาดในโค้ดของคุณ\nตรวจสอบและทำการแก้ไข\nและคอมไพล์ใหม่อีกครั้ง", {
      fontSize: '30px',
    })

    self.errorButton = game.add.button(750, 140, 'errorButton', deleteErrorButton, this)
    self.more = game.add.button(700, 140, 'more', viewMore, this)
    
  }
}

function deleteErrorButton() {
  self.errorButton.destroy()
  self.errorTextDialog.destroy()
  self.textErrorInBox.destroy()
  self.more.destroy()

  actionOnClick()
  // self.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
  // self.button = game.add.button(690, 130, 'button', actionOnClick, this)
  // self.textInBox = game.add.text(380, 120, conver_1[current_conver], {
  //   fontSize: '15px',
  // })
}

function viewMore(){
  self.textErrorInBox.destroy()
  self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
    fontSize: '15px',
  })
}

function actionOnClick() {

  if (conver_1[current_conver] != undefined && check_conver == 0) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
    self.button = game.add.button(690, 130, 'button', actionOnClick, this)
    self.textInBox = game.add.text(380, 120, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    console.log(current_conver)
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
    self.button = game.add.button(690, 130, 'button', actionOnClick, this)
    self.textInBox = game.add.text(380, 120, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(450, 100, 'dialogBoxRight')
    self.button = game.add.button(790, 130, 'button', actionOnClick, this)
    self.textInBox = game.add.text(480, 120, conver_3[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 5) {
      playerState = 10
    }
  } else {
    current_conver--
  }
}

var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/coming.png');
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerWalkLeft', 'client/images/player-walk-left.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(1.15, 1.3)

    this.player = game.add.sprite(200, 350, 'playerWalkingDown')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(800, 350, 'wizardLeft')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

  },

  update: function () {
    
  },
};


game.state.add('main', mainState);
game.state.start('main');