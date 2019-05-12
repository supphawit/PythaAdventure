var count = 0

var conver_1 = ["นั่นมันทางเข้าปราสาทของจอมมารนิ่ ",
  "น้องสาวคนนั้นอยู่ที่นั่นสินะ",
  "ไปช่วยเดี๋ยวนี้หล่ะ"
]

var conver_2 = ["ฮั่นแน่ !! ",
  "มาที่นี่มีธุระอะไร?\n",

]
var conver_3 = ["เด็กผู้หญิงที่แกเอาไป คืนมาเดี๋ยวนี้ !! ",
  "แกไม่มีสิทธิกักขังใครไว้ทั้งนั้น",
]

var conver_4 = ["แกเป็นพี่ชายหรือยังไง",
  "ไม่คืนหรอก \nอยากได้ก็เอาชนะข้าให้ได้ซะก่อนสิ",
  "ก็มาดิครับ",
  ""
]

var conver_5 = ["ไม่ยอมอ่อนข้อให้แบบนี้",
  "ก็มีแต่ต้องใช้กำลังเท่านั้นแหละ",
  "ใช้เวทมนต์ซักอย่างใส่จอมมารซะ !!",
]

var conver_6 = ["หึ้ย จอมมารช่างร้ายกาจ",
  "ใช้เวทมนต์โจมตีซ้ำอีก"
]

var conver_7 = ["ร้ายกาจเหมือนกันหนิ่",
  "พลังเวทมนต์ของข้าตอนนี้มีไม่มาก",
  "กลับไปตั้งหลักดีกว่า",
  ""
]

var conver_8 = ["เห้ย อย่าหนีสิ",
  "ขี้โกงนี่หว่า หนีไปตั้งหลักดื้อเลย",
  "รีบตามไปเร็ว",
  ""
]

function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]") && responseTxt.includes("FIRE") && responseTxt.includes("ICE")) {


      closeDialog()
      // alert("mix")
      position_dialog_x = 350
      position_dialog_y = 250
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE and ICE  !!", {
        fontSize: '15px',
      })

      attackState = 30

    } else if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && (responseTxt.includes("FIRE") || responseTxt.includes("ICE"))) {

      if (responseTxt.trim() == "FIRE") {
        // alert("FIRE")
        closeDialog()
        position_dialog_x = 350
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
          fontSize: '15px',
        })
        attackState = 10
      } else if (responseTxt.trim() == "ICE") {
        closeDialog()
        // alert("ice")
        position_dialog_x = 350
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ICE !!", {
          fontSize: '15px',
        })
        attackState = 20
      }

    } else if (press_back == 0) {
      closeDialog()

      position_dialog_x = 250
      position_dialog_y = 250
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ยังไม่พร้อมโจมตี !!", {
        fontSize: '15px',
      })
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    } else {
      closeDialog()

      position_dialog_x = 350
      position_dialog_y = 250
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
    position_dialog_x = 250
    position_dialog_y = 250
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
      closeDialog()
      stopState = 1
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 550
    position_dialog_y = 250
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

    position_dialog_x = 250
    position_dialog_y = 250
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
    if (current_conver == 2) {
      check_conver = 3
      current_conver = 0

    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()
    position_dialog_x = 550
    position_dialog_y = 250
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
      stopState = 10
    }

  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    closeDialog()
    position_dialog_x = 350
    position_dialog_y = 250
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      press_back = 1
      $(document).ready(function () {
        $("#story7-hint-1").modal()
        // $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story7-hint-2'>คำใบ้ 2</span></a>")

      })
    }

  } else if (conver_6[current_conver] != undefined && check_conver == 5) {
    closeDialog()
    position_dialog_x = 350
    position_dialog_y = 250
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 2) {

    }

  } else if (conver_7[current_conver] != undefined && check_conver == 6) {
    closeDialog()
    position_dialog_x = 550
    position_dialog_y = 250
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      count = 5
    }

  } else if (conver_8[current_conver] != undefined && check_conver == 7) {
    closeDialog()
    position_dialog_x = 350
    position_dialog_y = 250
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      playerState = 50
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
        position_dialog_x = 250
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 550
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 550
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 4:
        closeDialog()
        position_dialog_x = 350
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 5:
        closeDialog()
        position_dialog_x = 350
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 6:
        closeDialog()
        position_dialog_x = 550
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 7:
        closeDialog()
        position_dialog_x = 350
        position_dialog_y = 250
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver - 1], {
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
    game.load.image('background', 'client/images/map_story_7.png')
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
    game.load.spritesheet('villian-left', 'client/images/villian-left.png', 128, 128)
    game.load.spritesheet('villian-right', 'client/images/villian-right.png', 128, 128)
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

    game.load.spritesheet('defend', 'client/images/defend.png', 192, 192)
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
    // this.music.play()

    this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    this.fire_sym.scale.setTo(0.9, 0.9)

    this.ice_sym = game.add.button(865, 29, 'ice_sym', iceFunc, this)
    this.ice_sym.scale.setTo(0.9, 0.9)

    this.ice_fire_sym = game.add.button(905, 29, 'ice_fire_sym', ice_fireFunc, this)
    this.ice_fire_sym.scale.setTo(0.9, 0.9)

    this.player = game.add.sprite(-150, 350, 'playerStandRightWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.villian = game.add.sprite(830, -150, 'villian-left')
    this.villian.animations.add('play', [0, 1, 2, 3], 5, true)
    this.villian.animations.play('play')



  },

  update: function () {

    if (playerState == 0) {
      this.player.x += speedCharacter
      if (this.player.x >= 200) {
        playerState = 1
      }
    } else if (playerState == 1) {
      position_dialog_x = 250
      position_dialog_y = 250
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

    if (this.player.y <= -200) {
      // console.log(this.player.x)
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
            // แก้แล้ว
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 13 ,'final_boss' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 13 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/congrat"
      })
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')