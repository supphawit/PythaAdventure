var conver_1 = ["คราวนี้เป็นไดโนเสาร์เหรอเนี่ย ",
  "ท่าทางดูแข็งแกร่งจริงๆ",
  "ลองโจมตีดู จะใช้เวทมนต์อะไรดี\nเวทมนต์ไฟหรือเวทมนต์น้ำแข็ง"
]

var conver_2 = ["ไม่ได้ผล !! ",
  "พลังไม่พอเหรอนี่\n",

]
var conver_3 = ["เวทของเจ้าแรงใช้ได้ !! ",
  "แต่นั่นก็ไม่เพียงพอจะล้มข้าได้หรอก\nระดับข้าต้องเสริมพลังด้วยคำสั่ง for",
  "ร่วมกับการผสมเวทมนต์ด้วย list \nและวนลูป for ผสมเวทมนต์ทั้งสองออกมา",
]

var conver_4 = ["สำเร็จ !!\nเวทมนต์ใหม่ใช้ได้ผล",
  "วิธีใช้ซับซ้อนแต่ก็รุนแรง\n",
  "ครั้งหน้าถ้าจะใช้ก็ใช้คำสั่งประมาณนี้สินะ",
  ""
]


function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt
  deleteErrorButton()
  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && (responseTxt.includes("FIRE") || responseTxt.includes("ICE"))) {

      if (responseTxt.trim() == "FIRE") {
        // alert("FIRE")
        closeDialog()
        position_dialog_x = 150
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
          fontSize: '15px',
        })
        attackState = 10
      } else if (responseTxt.trim() == "ICE") {
        closeDialog()
        // alert("ice")
        position_dialog_x = 150
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ICE !!", {
          fontSize: '15px',
        })
        attackState = 20
      }
      check_conver = 1
      current_conver = 0

    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]") && originalCode.includes("return") && responseTxt.includes("FIRE") && responseTxt.includes("ICE")) {
      closeDialog()
      // alert("mix")
      position_dialog_x = 150
      position_dialog_y = 100
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE and ICE  !!", {
        fontSize: '15px',
      })
      check_conver = 3
      current_conver = 0
      attackState = 30


    } else {
      closeDialog()

      position_dialog_x = 150
      position_dialog_y = 100
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ใช้สกิลผิดพลาดซะได้\nลองใหม่อีกที !!", {
        fontSize: '15px',
      })
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    }

  } else {

    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    if (tmpResponse.includes("indent")) {
      messageErr = "ผิดพลาด!!\nบล็อคหรือระยะห่างของคำสั่งถูกต้องหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', indent, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (tmpResponse.includes("Missing parentheses") || tmpResponse.includes("unexpected EOF while parsing")) {
      messageErr = "ผิดพลาด!!\nลืมใส่วงเล็บในตรงไหนหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', parentheses, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (tmpResponse.includes("EOL while scanning string literal")) {
      messageErr = "ผิดพลาด!!\nสัญลักษณ์ \" (double quote) หายไปหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', EOL, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else {
      self.showErrModal = game.add.button(690, 165, 'information', otherError, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
      messageErr = "ผิดพลาด!!\nความผิดพลาดนี้อยู่นอกเหนือความคาดหมาย\nกด View Code Error เพื่อดู?"
    }

    self.textErrorInBox = game.add.text(280, 80, messageErr, {
      fontSize: '20px',
    })
    self.textViewMore = game.add.text(725, 180, "View Code Error", {
      fontSize: '10px',
    })
    self.more = game.add.button(750, 160, 'more', viewMore, this)

  }
}

function actionOnClick() {

  console.log("actionOnClick current_conver:", current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 150
    position_dialog_y = 100
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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
      $(document).ready(function () {
        $("#story6-hint-1").modal()
      })
      press_back = 1
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 150
    position_dialog_y = 100
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

    position_dialog_x = 650
    position_dialog_y = 50
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
    if (current_conver == 3) {
      press_back = 2
      $(document).ready(function () {
        $("#story6-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story6-hint-2'>คำใบ้ 2</span></a>")

      })
    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()
    position_dialog_x = 150
    position_dialog_y = 100
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
      playerState = 40
    }

  }


}

function backward() {
  console.log(current_conver)
  if (current_conver > 1) {
    current_conver--
    closeDialog()
    deleteErrorButton()
    
    switch (check_conver) {
      case 0:
        closeDialog()
        position_dialog_x = 150
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 150
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 650
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 150
        position_dialog_y = 100
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
    game.load.image('background', 'client/images/map_story_6.png')
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
    game.load.spritesheet('monster', 'client/images/monster-6.png', 128, 128)
    game.load.spritesheet('bluefire', 'client/images/blue_fire.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.image('ice_sym', 'client/images/ice_sym.png')
    game.load.image('ice_fire_sym', 'client/images/ice_fire_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('ice', 'client/images/ice.png', 128, 128)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
    game.load.spritesheet('bigfire', 'client/images/bigfire.png', 100, 100)
    game.load.spritesheet('ice_fire', 'client/images/fire_ice.png', 128, 128)
    game.load.spritesheet('mixbomb', 'client/images/mix_bomb.png', 128, 126)
  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(1.045, 0.84)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    this.music.play()

    this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    this.fire_sym.scale.setTo(0.9, 0.9)

    this.ice_sym = game.add.button(865, 29, 'ice_sym', iceFunc, this)
    this.ice_sym.scale.setTo(0.9, 0.9)

    this.player = game.add.sprite(-150, 200, 'playerStandRightWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.monster1 = game.add.sprite(1200, 160, 'monster')
    this.monster1.scale.setTo(1.4, 1.4)
    this.monster1.animations.add('play', [0, 1, 2, 3], 5, true)
    this.monster1.animations.play('play')


  },

  update: function () {

    if (playerState == 0) {
      this.player.x += speedCharacter
      if (this.player.x >= 100) {
        playerState = 1
      }
    }

    if (stopState == 0) {
      this.monster1.x -= 10
      if (this.monster1.x <= 600) {
        stopState = 1
      }
    } else if (stopState == 1) {
      position_dialog_x = 150
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
      stopState = 2
    }


    if (attackState == 10) {
      this.fireAttack = game.add.sprite(this.player.x + 100, this.player.y + 30, 'bigfire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 12
    } else if (attackState == 12) {
      this.fireAttack.x += 4
      this.fireAttack.y -= 0.3
      press_back = 99
      if (this.fireAttack.x >= this.monster1.x) {
        attackState = 13
      }
    } else if (attackState == 13) {
      this.fireAttack.destroy()

      closeDialog()
      position_dialog_x = 150
      position_dialog_y = 100
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
        fontSize: '15px',
      })
      current_conver++

      attackState = 14
    }


    if (attackState == 20) {
      this.iceAttack = game.add.sprite(this.player.x + 60, this.player.y, 'ice')
      this.iceAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.iceAttack.animations.play('play')

      attackState = 21
    } else if (attackState == 21) {
      this.iceAttack.x += 4
      this.iceAttack.y -= 0.3
      press_back = 99
      if (this.iceAttack.x >= this.monster1.x) {
        attackState = 22
      }
    } else if (attackState == 22) {
      this.iceAttack.destroy()

      attackState = 23
    } else if (attackState == 23) {


      closeDialog()
      position_dialog_x = 150
      position_dialog_y = 100
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      attackState = 24
    }



    if (attackState == 30) {
      this.ice_fireAttack = game.add.sprite(this.player.x + 60, this.player.y, 'ice_fire')
      this.ice_fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.ice_fireAttack.animations.play('play')

      attackState = 31
    } else if (attackState == 31) {
      this.ice_fireAttack.x += 4
      this.ice_fireAttack.y -= 0.3
      press_back = 99
      if (this.ice_fireAttack.x >= (this.monster1.x - 50)) {
        attackState = 32
      }
    } else if (attackState == 32) {
      this.ice_fireAttack.destroy()

      attackState = 33
    } else if (attackState == 33) {

      if (typeof this.bomb !== "undefined") {
        this.bomb.destroy()
      }
      this.bomb = game.add.sprite(this.monster1.x - 40, this.monster1.y - 90, 'mixbomb')
      this.bomb.scale.setTo(3, 3)
      this.bomb.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 8, false)
      this.bomb.animations.play('play')

      sleep(1500).then(() => {
        this.bomb.destroy()
        this.monster1.destroy()
      })
      closeDialog()

      attackState = 34
    } else if (attackState == 34) {
      this.ice_fire_sym = game.add.button(905, 29, 'ice_fire_sym', ice_fireFunc, this)
      this.ice_fire_sym.scale.setTo(0.9, 0.9)

      position_dialog_x = 150
      position_dialog_y = 100
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      attackState = 35
    }

    if (playerState == 40) {
      closeDialog()

      playerState = 41
    } else if (playerState == 41) {
      this.player.x += speedCharacter
    }
    if (this.player.x == 1600) {
      playerState = 50
      this.player.x += 10
    }
    if (playerState == 50) {
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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 11 ,'ice fire' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 11 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/story_7"
      })
      playerState = 51
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')