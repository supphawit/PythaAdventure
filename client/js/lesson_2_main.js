var conver_1 = ["ตอนนี้ถึงอีกหนึ่งบทเรียน",
  "บทเรียนนี้จะสอนเจ้าเรื่องคำสั่งเงื่อนไข",
  "เพื่อให้สามารถทำงานที่ซับซ้อน\nและมีประสิทธิภาพมากขึ้น",
  "ยกตัวอย่างการเขียนเงื่อนไขเช่น \n",
  "if (x > 30):\n    print(\"more than 30\")",
  "นั่นคือหากค่าของ x มากกว่า 30 \nก็ให้แสดงผลว่า more than 30",
  "หากไม่เข้าเงื่อนไข ก็จะไม่มีการแสดงผลออกมา",
  "ให้เจ้าเขียนเงื่อนไขบางอย่างขึ้นมา\nและแสดงผลออกมา เว้นแต่เจ้าใช้คำสั่ง else",
  "หากต้องการไปทางซ้ายแสดงว่า left\nหากต้องการไปทางขวาแสดงว่า right",
  "จงเลือกเส้นทางที่เจ้าจะไป\nซ้ายหรือขวา?",
]

var conver_2 = ["ทางนั้นอันตรายเกินกว่าเจ้าจะเข้าได้",
  "ลองเลือกอีกทางดูมั้ย?",
]


var conver_3 = ["ฮ่าๆ เจ้าพอจะเข้าใจแล้วใช่มั้ยล่ะ",
  "นี่เป็นหนึ่งในคำสั่งเพียงเล็กน้อย ",
  "ข้าจะสอนเจ้าไปทีละนิด ",
  "บทเรียนต่อๆไป จะยากขึ้น",
  "ข้าจะพาไปดูบทเรียนถัดไป",
]

function resultCompile(responseTxt, originalCode) {
  deleteErrorButton()
  tmpResponse = responseTxt

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {
    txt = responseTxt.trim()

    if ( originalCode.includes("if") || originalCode.includes("elif") || originalCode.includes("else") ) {

      if (press_back = 1) {

        if (txt == "left") {
          playerState = "goLeft"

          self.player.destroy()
          self.player = game.add.sprite(self.player.x, self.player.y, 'playerStandLeft')
          self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
          self.player.animations.play('walk')
          current_conver = 0
          check_conver = 1
        }

        if (txt == "right") {
          playerState = "goRight"

          self.player.destroy()
          self.player = game.add.sprite(self.player.x, self.player.y, 'playerStandRight')
          self.player.animations.add('walk', [0, 1, 2, 3], 5, true)
          self.player.animations.play('walk')

          state_compile = 1
          check_conver = 2
        }

        if (txt == "fail") {
          playerState = "fail"
        }
      }
    } else {
      alert("ใช้คำสั่งให้ตรงกับบทเรียน!!\nบทเรียนนี้ควรมี if, elif, else ในโค้ดด้วย")
    }

  } else {

    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
      fontSize: '15px',
    })

    self.textViewMore = game.add.text(745, 140, "Suggest", {
      fontSize: '10px',
    })
    self.more = game.add.button(750, 120, 'more', viewMore, this)
    self.errorButton = game.add.button(750, 160, 'xSign', deleteErrorButton, this)

  }
}

function actionOnClick() {
  deleteErrorButton()
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 350
    position_dialog_y = 100
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    current_conver++

    if (current_conver >= 10) {
      press_back = 1
      $(document).ready(function () {
        $("#lesson2-hint-1").modal()
      })
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 350
    position_dialog_y = 100
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    current_conver++

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 450
    position_dialog_y = 100
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    current_conver++
    if (current_conver == 4) {
      playerState = 10
    }
  }

}



function backward() {
  if (current_conver > 1) {
    deleteErrorButton()
    current_conver--
    closeDialog()

    position_dialog_x = 350
    position_dialog_y = 100
    if (check_conver == 0) {
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    } else if (check_conver == 1) {
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    } else if (check_conver == 2) {
      position_dialog_x = 450
      position_dialog_y = 100
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    }
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


var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_2.png')
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.image('information', 'client/images/information.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

    game.load.spritesheet('flower', 'client/images/flower.png', 100, 100)
  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(0.86, 0.94)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    this.music.play()


    this.player = game.add.sprite(490, -300, 'playerWalkingDown')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(490, -100, 'wizardLeft')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.player.frame = 0
    // this.player.body.velocity.x = 80
    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

    this.flower1 = game.add.sprite(980, 170, 'flower')
    this.flower1.scale.setTo(0.8, 0.8)
    this.flower1.animations.add('play', [0, 1], 2, true)
    this.flower1.animations.play('play')

    this.flower2 = game.add.sprite(800, 430, 'flower')
    this.flower2.scale.setTo(0.8, 0.8)
    this.flower2.animations.add('play', [0, 1], 2, true)
    this.flower2.animations.play('play')

    this.flower3 = game.add.sprite(200, 370, 'flower')
    this.flower3.scale.setTo(0.8, 0.8)
    this.flower3.animations.add('play', [0, 1], 2, true)
    this.flower3.animations.play('play')

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


        position_dialog_x = 350
        position_dialog_y = 100
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
          fontSize: '15px',
        })
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

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

      playerState = "updateFail"
      closeDialog()
      position_dialog_x = 380
      position_dialog_y = 120
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "เลือกเอาซักทางซ้ายหรือขวา !!", {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, 0, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++
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


        position_dialog_x = 350
        position_dialog_y = 100
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
          fontSize: '15px',
        })
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
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
        closeDialog()

        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')

        stopState = 3
        wizardState = 1
      }
      if (this.wizard.x <= 750 && stopState == 3) {
        this.wizard.x += speedCharacter
        // console.log(this.wizard.x)
      } else if (this.wizard.x >= 750 && stopState != 4) {
        stopState = 4
        current_conver = 0
        check_conver = 2

        closeDialog()
        position_dialog_x = 450
        position_dialog_y = 100
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
          fontSize: '15px',
        })
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        current_conver++
      }
    }

    if (playerState == 10) {
      closeDialog()
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
        var userJson = JSON.parse(userSession)

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
}


game.state.add('main', mainState)
game.state.start('main')