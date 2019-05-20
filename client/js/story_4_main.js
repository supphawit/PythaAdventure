var countFire

var conver_1 = ["นั่นมันตัวอะไร",
  "ตัวใหญ่มาก สงสัยจะเป็นมอนสเตอร์ระดับสูง",
  "อย่ารอช้า โจมตีด้วยเวทมนต์ไฟ !!"
]

var conver_2 = ["หึๆ เวทมนต์นั่นทำอะไรข้าไม่ได้หรอก",
  "เวทมนต์ที่เจ้าใช้ มันคืออาหารโปรดข้าเลย",
  "เพราะตัวข้าเย็นเกินไปจึงต้องกินไฟ\nเพื่อลดอุณหภูมิในร่างกาย",
  "ข้าจะยอมผ่านไปและตบรางวัลให้ด้วย\nหากเจ้าสามารถทำให้ข้าอิ่มได้",
  "เงื่อนไขคือโค้ดของเจ้าต้องมีตัวแปร list\nข้าคิดว่าข้ากินซัก 5 อันก็น่าจะอิ่มนะ",
  "และใช้การวนลูป for แสดงผลมันออกมา\nออกมาเป็นเวทมนต์ไฟของเจ้า !!",
]


var conver_3 = ["อาาาาาห์ ~~~~~\nเจ้าทำให้ข้าพอใจอย่างมาก ข้าจะให้รางวัลแก่เจ้า",
  "ข้าจะให้เวทมนต์น้ำแข็งแก่เจ้า\nและเพิ่มพลังให้เวทมนต์ไฟของเจ้าด้วย ",
  "หื้ม ข้าอิ่มแล้ว ข้าคิดว่าข้าไปดีกว่า\n",
  "รักษาตัวดีๆล่ะ ฮ่า ฮ่า ฮ่า",
  ""
]

var conver_4 = ["ได้สกิลมาเพิ่มทำให้เราแข็งแกร่งขึ้น",
  "รับรองว่าจัดการกับจอมมารได้แน่ๆ ",
  " ",
]


function resultCompile(responseTxt, originalCode, output) {
  tmpResponse = responseTxt
  deleteErrorButton()
  console.log(output)
  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE")) {

      closeDialog()
      position_dialog_x = 250
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
        fontSize: '15px',
      })

      attackState = 1
      check_conver = 1
      current_conver = 0

    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]")) {
      closeDialog()

      if (output >= 5) {
        check_conver = 2
        current_conver = 0

        press_back = 3
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE พร้อมเสริมพลังด้วย list และ for !!", {
          fontSize: '15px',
        })
        attackState = 20
      } else {
        attackState = 10
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE พร้อมเสริมพลังด้วย list และ for !!", {
          fontSize: '15px',
        })

      }



    } else {
      closeDialog()

      position_dialog_x = 250
      position_dialog_y = 150
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
  deleteErrorButton()
  console.log("actionOnClick current_conver:", current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 250
    position_dialog_y = 150
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
        $("#story4-hint-1").modal()
      })
      press_back = 1
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 650
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
    if (current_conver >= 6) {
      press_back = 2
      $(document).ready(function () {
        $("#story4-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story4-hint-2'>คำใบ้ 2</span></a>")

      })
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 650
    position_dialog_y = 100
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
    if (current_conver == 5) {
      playerState = 20
    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()

    position_dialog_x = 250
    position_dialog_y = 150
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
    if (current_conver == 3) {
      playerState = 30
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
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 650
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 650
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
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
    game.load.image('background', 'client/images/map_story_4.png')
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
    game.load.spritesheet('monster', 'client/images/monster-4.png', 128, 128)
    game.load.spritesheet('bluefire', 'client/images/blue_fire.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.image('ice_sym', 'client/images/ice_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
    game.load.spritesheet('bigfire', 'client/images/bigfire.png', 100, 100)
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

    this.player = game.add.sprite(-150, 250, 'playerStandRightWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.monster1 = game.add.sprite(600, 200, 'monster')
    this.monster1.scale.setTo(1.4, 1.4)
    this.monster1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7], 4, true)
    this.monster1.animations.play('play')

  },

  update: function () {

    if (playerState == 0) {
      this.player.x += speedCharacter
      if (this.player.x >= 200) {
        playerState = 1
      }
    } else if (playerState == 1) {
      position_dialog_x = 250
      position_dialog_y = 150
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

      playerState = 2
    }


    if (attackState == 1) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 2
    } else if (attackState == 2) {
      this.fireAttack.x += 5
      this.fireAttack.y -= 0.5
      press_back = 99
      if (this.fireAttack.x >= this.monster1.x) {
        attackState = 3
      }
    } else if (attackState == 3) {
      this.fireAttack.destroy()

      attackState = 4

    }

    if (attackState == 10) {
      this.fireAttack1 = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack1.animations.play('play')
      this.fireAttack2 = game.add.sprite(this.player.x + 110, this.player.y + 50, 'fire')
      this.fireAttack2.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack2.animations.play('play')
      this.fireAttack3 = game.add.sprite(this.player.x + 110, this.player.y + 70, 'fire')
      this.fireAttack3.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack3.animations.play('play')
      this.fireAttack4 = game.add.sprite(this.player.x + 110, this.player.y + 90, 'fire')
      this.fireAttack4.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack4.animations.play('play')
      attackState = 11
    } else if (attackState == 11) {
      this.fireAttack1.x += 5
      this.fireAttack1.y -= 0.5
      this.fireAttack2.x += 6
      this.fireAttack2.y -= 0.3
      this.fireAttack3.x += 4
      this.fireAttack3.y -= 0.8
      this.fireAttack4.x += 3
      this.fireAttack4.y -= 0.5
      press_back = 99
      if (this.fireAttack3.x >= this.monster1.x) {
        attackState = 12
      }
    } else if (attackState == 12) {
      this.fireAttack1.destroy()
      this.fireAttack2.destroy()
      this.fireAttack3.destroy()
      this.fireAttack4.destroy()
      attackState = 13

    } else if (attackState == 13) {
      closeDialog()
      position_dialog_x = 650
      position_dialog_y = 100
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "อะไรกันลูปได้น้อยกว่า 5 รอบ?\nให้มากกว่านี้หน่อยสิ", {
        fontSize: '15px',
      })
      attackState = 14
    }

    if (attackState == 20) {
      this.fireAttack1 = game.add.sprite(this.player.x + 110, this.player.y + 30, 'bigfire')
      this.fireAttack1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7], 5, false)
      this.fireAttack1.animations.play('play')

      attackState = 21
    } else if (attackState == 21) {
      this.fireAttack1.x += 3
      this.fireAttack1.y -= 0.5

      if (this.fireAttack1.x >= this.monster1.x) {
        attackState = 22
      }
    } else if (attackState == 22) {
      this.fireAttack1.destroy()

      closeDialog()

      position_dialog_x = 650
      position_dialog_y = 100
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
      attackState = 23

    }

    if (playerState == 20) {
      this.ice_sym = game.add.button(865, 29, 'ice_sym', iceFunc, this)
      this.ice_sym.scale.setTo(0.9, 0.9)
      this.effect = game.add.sprite(480, 50, 'bluefire')
      this.effect.scale.setTo(3, 3)
      this.effect.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 8, false)
      this.effect.animations.play('play')
      check_conver = 3
      current_conver = 0
      sleep(1000).then(() => {
        this.monster1.destroy()
      })
      playerState = 21
    } else if (playerState == 21) {

      closeDialog()
      position_dialog_x = 250
      position_dialog_y = 150
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
      playerState = 22
    }

    if (playerState == 30) {
      closeDialog()
      playerState = 31
    } else if (playerState == 31) {
      this.player.x += speedCharacter
    }

    if (this.player.x == 1600) {
      playerState = 40
      this.player.x += 10
    }
    if (playerState == 40) {
      console.log(this.player.x)
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
        window.location.href = "/story_5"
      })
      playerState = 41
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')