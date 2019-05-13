var countFire

var conver_1 = ["ข้าพบน้องสาวของเจ้าแล้วนะ\n",
  "ไปหาพี่สาวของเจ้าสิ",
  "",
]

var conver_2 = ["พี่จ๋าาาา",
  "คิดถึงพี่มากๆเลย",
]


var conver_3 = ["ไม่เจ็บตรงไหนใช่มั้ย ",
  "เป็นห่วงมากๆนะ ",
  "ขอบคุณเจ้ามากๆนะ ที่ช่วยน้องสาวของข้า",
  "ข้าขอตัวก่อนนะ\nจะพาน้องสาวกลับไปหาแม่ก่อน",
  "แม่เป็นห่วงมากๆ",
  ""
]

var conver_4 = ["ได้เรียนรู้ภาษา Python มามากเลยสินะ\nเหลือขั้นตอนสุดท้ายแล้ว",
  "คือการทำแบบทดสอบหลังการเล่น ",
  "ไปทำกันเลย",
  ""
]


function actionOnClick() {

  console.log("actionOnClick current_conver:", current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 500
    position_dialog_y = 220
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++

    if (current_conver >= 3) {
      playerState = 10
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 470
    position_dialog_y = 220
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver >= 2) {
      check_conver = 2
      current_conver = 0
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 340
    position_dialog_y = 220
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 6) {
      playerState = 20
      stopState = 10
      closeDialog()
      check_conver = 3
      current_conver = 0
    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()

    position_dialog_x = 200
    position_dialog_y = 220
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      playerState = 30
    }

  }


}

function backward() {
  console.log(current_conver)
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    switch (check_conver) {
      case 0:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 220
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 470
        position_dialog_y = 220
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 260
        position_dialog_y = 220
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 200
        position_dialog_y = 220
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver - 1], {
          fontSize: '15px',
        })
        break


    }

    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
      fontSize: '15px',
    })

  }
}



var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_1.png')
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.image('information', 'client/images/information.png')
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('playerStandLeftWearing', 'client/images/player-standing-left-wearing.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('lilgirl-right', 'client/images/lilgirl-right.png', 128, 128)
    game.load.spritesheet('lilgirl-left', 'client/images/lilgirl.png', 128, 128)
    game.load.spritesheet('girlLeft', 'client/images/girl-standing-left.png', 128, 128)
    game.load.spritesheet('girlRight', 'client/images/girl-standing-right.png', 128, 128)

    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.image('ice_sym', 'client/images/ice_sym.png')
    game.load.image('ice_fire_sym', 'client/images/ice_fire_sym.png')

  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(0.72, 0.8)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    // this.music.play()

    this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    this.fire_sym.scale.setTo(0.9, 0.9)

    this.ice_sym = game.add.button(865, 29, 'ice_sym', iceFunc, this)
    this.ice_sym.scale.setTo(0.9, 0.9)

    this.ice_fire_sym = game.add.button(905, 29, 'ice_fire_sym', ice_fireFunc, this)
    this.ice_fire_sym.scale.setTo(0.9, 0.9)

    this.girl = game.add.sprite(300, 330, 'girlLeft')
    this.girl.animations.add('right', [0, 1, 2, 3], 5, true)
    this.girl.animations.play('right')

    this.player = game.add.sprite(810, 700, 'playerStandLeftWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.littlegirl = game.add.sprite(820, 820, 'lilgirl-left')
    this.littlegirl.animations.add('play', [0, 1, 2, 3], 5, true)
    this.littlegirl.animations.play('play')

    this.wizard = game.add.sprite(150, 320, 'wizardRight')
    this.wizard.animations.add('right', [0, 1, 2, 3], 5, true)
    this.wizard.animations.play('right')

  },

  update: function () {

    if (playerState == 0) {
      this.player.y -= speedCharacter
      this.littlegirl.y -= speedCharacter
      if (this.player.y <= 330) {
        playerState = 1
      }

    } else if (playerState == 1) {
      position_dialog_x = 500
      position_dialog_y = 220
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++

      playerState = 2
    } else if (playerState == 2) {
      this.girl.destroy()

      this.girl = game.add.sprite(300, 330, 'girlRight')
      this.girl.animations.add('right', [0, 1, 2, 3], 5, true)
      this.girl.animations.play('right')
      playerState = 3
    }

    if (playerState == 10) {
      closeDialog()
      playerState = 11
      check_conver = 1
      current_conver = 0
    } else if (playerState == 11) {
      this.littlegirl.y -= speedCharacter
      if (this.littlegirl.y <= 330) {
        playerState = 12
      }
    } else if (playerState == 12) {
      this.littlegirl.x -= speedCharacter
      if (this.littlegirl.x <= 420) {
        playerState = 13
      }
    } else if (playerState == 13) {
      position_dialog_x = 470
      position_dialog_y = 220
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

      playerState = 14
    }

    if (stopState == 10) {
      this.littlegirl.x += speedCharacter
      if (this.littlegirl.x >= 775) {
        stopState = 11
      }
    } else if (stopState == 11) {
      this.littlegirl.y -= speedCharacter
      if (this.littlegirl.y <= 180) {
        stopState = 12
      }
    } else if (stopState == 12) {
      this.littlegirl.x += speedCharacter
      if (this.littlegirl.x >= 950) {
        stopState = 13
      }
    } else if (stopState == 13) {
      this.littlegirl.destroy()
      stopState = 14
    }

    if (playerState == 20) {
      this.girl.x += speedCharacter
      if (this.girl.x >= 775) {
        playerState = 21
      }
    } else if (playerState == 21) {
      this.girl.y -= speedCharacter
      if (this.girl.y <= 180) {
        playerState = 22
      }
    } else if (playerState == 22) {
      this.girl.x += speedCharacter
      if (this.girl.x >= 950) {
        playerState = 23
      }
    } else if (playerState == 23) {
      this.girl.destroy()
      playerState = 24
    }

    if (stopState == 14) {
      this.player.x -= speedCharacter
      if (this.player.x <= 300) {
        stopState = 15
      }
    } else if (stopState == 15) {
      position_dialog_x = 200
      position_dialog_y = 220
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++
      stopState = 16
    }


    if (playerState == 30) {
      // console.log(this.player.x)
      playerState = 31
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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 9 ,'newskill' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 9 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/post_test"
      })
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')