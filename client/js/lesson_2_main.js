
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
  "บทเรียนต่อๆไป จะยากขึ้น",
  "รอช้าอะไร เดินต่อไป",
  "ข้าจะพาไปดูบทเรียนถัดไป",
]

var pause = 0
function music() {
  if (pause == 0) {
    self.music.pause()
    pause = 1
    self.sound.destroy()
    self.sound = game.add.button(1000, 28, 'mute', music, this)
    self.sound.scale.setTo(0.9, 0.9)
  } else if (pause == 1) {
    self.music.resume()
    pause = 0
    self.sound.destroy()
    self.sound = game.add.button(1000, 28, 'speaker', music, this)
    self.sound.scale.setTo(0.9, 0.9)
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

function closeDialog() {
  self.textInBox.destroy()
  self.dialogBox.destroy()
  self.button.destroy()
  self.back.destroy()
  self.current_text.destroy()
}

function closeInventory() {
  self.inventory.destroy()
  self.xSign.destroy()
}

function resultCompile(responseTxt) {
  tmpResponse = responseTxt

  if (responseTxt.length < 50) {
    txt = responseTxt.trim()

    if (check_conver == 1 && current_conver == 0) {
      if (txt == "left") {
        playerState = "goLeft"

        self.player.destroy()
        self.player = game.add.sprite(self.player.x, self.player.y, 'playerStandLeft')
        self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        self.player.animations.play('walk')
      }

      if (txt == "right") {
        playerState = "goRight"

        self.player.destroy()
        self.player = game.add.sprite(self.player.x, self.player.y, 'playerStandRight')
        self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        self.player.animations.play('walk')
         
        state_compile = 1
      }

      if (txt == "fail") {
        playerState = "fail"
      }
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

function viewMore() {
  self.textErrorInBox.destroy()
  self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
    fontSize: '15px',
  })
}

function actionOnClick() {

  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    self.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
    self.button = game.add.button(350 + 360, 130, 'button', actionOnClick, this)
    self.back = game.add.button(350 + 340, 130, 'back', backward, this)
    self.textInBox = game.add.text(380, 120, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text((350 + 380), (100 + 10), current_conver + 1, {
      fontSize: '15px',
    })
    current_conver++

    if (current_conver >= 12) {
      check_conver = 1
      current_conver = 0
    }
    console.log(check_conver)
    console.log(current_conver)
  } else if (conver_2[current_conver] != undefined && check_conver == 1 && state_compile == 1) {
    closeDialog()

    self.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
    self.button = game.add.button(690, 130, 'button', actionOnClick, this)
    self.textInBox = game.add.text(380, 120, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    self.dialogBox = game.add.image(450, 100, 'dialogBoxRight')
    self.button = game.add.button(790, 130, 'button', actionOnClick, this)
    self.textInBox = game.add.text(480, 120, conver_3[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 5) {
      playerState = 10
    }
  } 
  
}


function backward() {
  if (current_conver >= 0) {
    current_conver--
    closeDialog()

    position_dialog_x = 350
    position_dialog_y = 100
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
      fontSize: '15px',
    })

    switch (check_conver) {
      case 0:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break
    }

  }
}

var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_2.png');
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
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(0.86, 0.94)

    this.menu = game.add.image(800, 10, 'menu');
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music');
    // this.music.play();


    this.player = game.add.sprite(490, -300, 'playerWalkingDown')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(490, -100, 'wizardLeft')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.player.frame = 0
    // this.player.body.velocity.x = 80
    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

  },

  update: function () {
    if (playerState == 0) {
      if (this.player.y < 240) {
        this.player.y += speedCharacter
        // console.log(this.player.y)
      } else if (this.player.y == 240) {
        this.player.y += 1
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandLeft')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')

        this.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
        this.textInBox = game.add.text(380, 120, conver_1[current_conver], {
          fontSize: '15px',
        })
        this.current_text = game.add.text((350 + 380), (100 + 10), current_conver + 1, {
          fontSize: '15px',
        })
        this.button = game.add.button(350 + 360, 130, 'button', actionOnClick, this)
        this.back = game.add.button(350 + 340, 130, 'back', actionOnClick, this)
        current_conver++
      }
    }

    if (wizardState == 0) {

      if (this.wizard.y != 230) {
        this.wizard.y += speedCharacter
      } else if (this.wizard.y >= 230 && this.wizard.x > 350) {
        this.wizard.x -= speedCharacter
      } else if (this.wizard.x == 350) {
        this.wizard.x += 1
        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')

      }
    }

    if (playerState == "fail") {
      this.textInBox.destroy()
      this.textInBox = game.add.text(380, 120, "เลือกเอาซักทางซ้ายหรือขวา !!", {
        fontSize: '15px',
      })
      playerState = "updateFail"
    }

    if (playerState == "goLeft") {
      // console.log(this.player.x)

      if (this.player.x > 100) {
        stopState = 1
        this.player.x -= speedCharacter
        console.log(stopState + "test")
      } else if (this.player.x == 100 && stopState == 1) {
        current_conver = 0
        check_conver = 1
        // this.player.x -= 1

        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')

        this.player.destroy()

        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRight')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')

        closeDialog()

        this.dialogBox = game.add.image(350, 100, 'dialogBoxLeft')
        this.button = game.add.button(350 + 360, 130, 'button', actionOnClick, this)
        this.back = game.add.button(350 + 340, 130, 'back', actionOnClick, this)        
        this.textInBox = game.add.text(380, 120, conver_2[current_conver], {
          fontSize: '15px',
        })
        current_conver++
        stopState = 0
      }
    }

    if (playerState == "goRight") {

      if (this.player.x < 900) {
        this.player.x += speedCharacter
        stopState = 1
      } else if (this.player.x == 900 && stopState == 1) {
        this.player.destroy()

        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandLeft')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')

        this.wizard.x -= 1

        stopState = 2
      } else if (this.player.x == 900 && stopState == 2) {
        this.textInBox.destroy()
        this.dialogBox.destroy()
        this.button.destroy()

        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')

        stopState = 3
        wizardState = 1
      }
      if (this.wizard.x <= 750 && stopState == 3) {
        this.wizard.x += speedCharacter
        console.log(this.wizard.x)
      } else if (this.wizard.x >= 750 && stopState != 4) {
        stopState = 4
        current_conver = 0
        check_conver = 2

        this.dialogBox = game.add.image(450, 100, 'dialogBoxRight')
        this.button = game.add.button(790, 130, 'button', actionOnClick, this)
        this.textInBox = game.add.text(480, 120, conver_3[current_conver], {
          fontSize: '15px',
        })
        current_conver++
      }
    }

    if (playerState == 10) {
      this.textInBox.destroy()
      this.dialogBox.destroy()
      this.button.destroy()
      this.player.destroy()

      this.player = game.add.sprite(this.player.x, this.player.y, 'playerWalkRight')
      this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.player.animations.play('walk')
      playerState = 11
    } else if (playerState == 11 && this.wizard.x < 1100) {
      this.wizard.x += speedCharacter
      this.player.x += speedCharacter
    }
    if (this.player.x == 1100) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 2 ,'if else' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 2  AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })

        console.log("pass")
        window.location.href = "/lesson_3"

      })

    }

  },
};


game.state.add('main', mainState);
game.state.start('main');