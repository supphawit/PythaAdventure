var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 10
var playerState = 0
var wizardState = 0
var tmpResponse

var conver_1 = ["สวัสดี เจ้าอยู่ในโลกของ Python",
  "โลกของภาษาคอมพิวเตอร์",
  "ที่ทุกๆอย่างคือการใช้คำสั่งในภาษาไพทอน",
  "เอาล่ะ ข้าจะสอนการแสดงผลทางหน้าจอ ",
  "โดยใช้คำสั่ง print",
  "หากข้าต้องการแสดงผลเป็นคำว่า HELLO",
  "ข้าก็จะเขียนแบบนี้ print(\"HELLO\")",
  "ทีนี้ข้าต้องการจะรู้ชื่อของเจ้า",
  "ลองใช้คำสั่ง print แสดงผลชื่อของเจ้ามา",
]

var conver_2 = ["เอาล่ะไปบทเรียนถัดไป",
  "ให้สร้างตัวแปรเป็น Integer ",
  "อย่างข้าต้องการให้ a เท่ากับ 2",
  "ข้าก็เขียน a = 2",
  "แล้วใช้คำสั่ง print ออกมา",
  "เอ้า ไหนลองดูซิ",
]


var conver_3 = ["เอาล่ะ พอจะเข้าใจบ้างใช่มั้ย",
  "นี่เป็นเพียงเบื้องต้น ",
  "ตามข้ามาสิ ",
  "ยังมีอะไรอีกเยอะ",
  "ให้เจ้าเรียนรู้เกี่ยวกับ Python",
]

var pause = 0
function music() {
  if (pause == 0) {
    music.pause()
    pause = 1
  } else if (pause == 1) {
    music.resume()
    pause = 0
  }
}


function showInventory() {

  if (typeof self.inventory !== "undefined") {
    self.inventory.destroy()
    self.xSign.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory');
  self.inventory.scale.setTo(0.6, 0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8, 0.8)

}

function closeInventory() {
  self.inventory.destroy()
  self.xSign.destroy()
}

function resultCompile(responseTxt) {
  tmpResponse = responseTxt

  if (responseTxt.length < 50) {
    if (check_conver == 0) {
      self.textInBox.destroy()
      self.button.destroy()
      self.dialogBox.destroy()
      self.dialogBox = game.add.image(100, 200, 'dialogBoxLeft')
      self.textInBox = game.add.text(130, 220, "ผมชื่อว่า " + responseTxt.trim(), {
        fontSize: '15px',
      })
      self.button = game.add.button(440, 230, 'button', actionOnClick, this)
    } else if (check_conver == 1) {
      console.log(responseTxt)
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()
      self.dialogBox = game.add.image(100, 200, 'dialogBoxLeft')
      self.textInBox = game.add.text(130, 220, "ตอนนี้ผมอายุ " + responseTxt.trim() + " ปี", {
        fontSize: '15px',
      })
      self.button = game.add.button(440, 230, 'button', actionOnClick, this)
    }

    if (check_conver == 0) {
      check_conver = 1
    } else if (check_conver = 1) {
      check_conver = 2
    }
    current_conver = 0
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

function viewMore() {
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

    self.dialogBox = game.add.image(100, 200, 'dialogBoxRight')
    self.button = game.add.button(440, 230, 'button', actionOnClick, this)
    self.textInBox = game.add.text(130, 220, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    console.log(current_conver)
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(100, 200, 'dialogBoxRight')
    self.button = game.add.button(440, 230, 'button', actionOnClick, this)
    self.textInBox = game.add.text(130, 220, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(100, 200, 'dialogBoxRight')
    self.button = game.add.button(440, 230, 'button', actionOnClick, this)
    self.textInBox = game.add.text(130, 220, conver_3[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 5) {
      playerState = 1
    }
  } else {
    current_conver--
  }
}

var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_1.png');
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.audio('music', 'client/images/audio/Celestial.mp3')
  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(0.72, 0.8)

    this.menu = game.add.image(800, 10, 'menu');
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)

    this.player = game.add.sprite(-50, 320, 'playerWalkRight')
    this.player.smoothed = false

    this.wizard = game.add.sprite(320, 320, 'wizardLeft')
    this.wizard.animations.add('left', [0, 1, 2, 3], 5, true)

    this.player.animations.add('right', [0, 1, 2, 3], 5, true)

    this.player.frame = 0
    // this.player.body.velocity.x = 80
    this.player.animations.play('right')
    this.wizard.animations.play('left')

    music = game.add.audio('music');

    music.play();
  },

  update: function () {
    if (this.player.x < 150) {
      this.player.x += speedCharacter
    } else if (this.player.x == 150) {
      this.player.destroy()
      this.player = game.add.sprite(150, 320, 'playerStandRight')
      this.player.animations.add('right', [0, 1, 2, 3], 5, true)
      this.player.frame = 0
      this.player.animations.play('right')

      this.dialogBox = game.add.image(100, 200, 'dialogBoxRight')

      // this.textInBox
      this.textInBox = game.add.text(130, 220, conver_1[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      this.button = game.add.button(440, 230, 'button', actionOnClick, this)
      this.player.x += speedCharacter
    } else if (playerState == 1) {
      this.dialogBox.destroy()
      this.textInBox.destroy()
      this.button.destroy()
      this.player.destroy()

      this.player = game.add.sprite(this.player.x, 320, 'playerWalkRight')
      this.player.animations.add('right', [0, 1, 2, 3], 5, true)
      this.player.frame = 0
      this.player.animations.play('right')

      playerState = 2

    } else if (playerState == 2) {
      this.player.x += speedCharacter

      if (this.player.x >= 820) {
        playerState = 3
      }

      if (this.wizard.x == 820) {
        wizardState = 1
        this.wizard.x += 1
      } else if (this.wizard.x == 821) {
        this.wizard.y += speedCharacter
      } else {
        this.wizard.x += speedCharacter
      }
    } else if (playerState == 3) {
      playerState = 4
      this.player.destroy()

      this.player = game.add.sprite(this.player.x, 320, 'playerWalkingDown')
      this.player.animations.add('right', [0, 1, 2, 3], 5, true)
      this.player.frame = 0
      this.player.animations.play('right')
    } else if (playerState == 4) {
      this.player.y += speedCharacter
      this.wizard.y += speedCharacter
    }

    if (wizardState == 1) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, 320, 'wizardRight')
      this.wizard.animations.add('right', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('right')
      wizardState = 2
    }


    if (this.player.y == 850) {
      // updateLesson()
      // window.location.href = "/lesson_2"

      $(document).ready(function () {

        var userSession = $.ajax({
          url: '/getUser',
          type: "GET",
          async: false,
        }).responseText
        var userJson = JSON.parse(userSession);


        var updateUser = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 1 ,'print' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 1 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        console.log("pass")
        window.location.href = "/lesson_2"
      })

    }
  },
};


game.state.add('main', mainState);
game.state.start('main');