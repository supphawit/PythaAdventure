var wear_check = 0
var change_wear = 0

var conver_1 = ["นั่นมันมอนสเตอร์ขอนไม้เน่า\nต้องใช้เวทมนต์ไฟจัดการมัน",
  "ดีที่จำจากพ่อมดเคยสอนไว้ได้",
]

var conver_2 = ["สำเร็จ กำจัดไปได้ 1 ตัวแล้ว",
  "ยังเหลืออีก 3 ตัว\nทำยังไงจะกำจัดได้ทีเดียวเยอะๆ",
  "ถ้าเราใช้ loop ในการกำจัดล่ะ?",
  "งั้นใช้คำสั่ง for วนลูปเท่ากับจำนวนมอสเตอร์\nและใช้คำสั่ง print แสดงค่าในฟังก์ชันออกมา",
  "ก็สามารถกำจัดศัตรูไปได้"

]


var conver_3 = ["สำเร็จ !!",
  "สามารถกำจัดมอนสเตอร์ได้หมดแล้ว ",
  "รีบไปต่อดีกว่า\n",
  "มีลางสังหรณ์ ไม่ดีจากทางข้างหน้า",
  ""
]

var conver_4 = ["ทำได้ดีมาก !!",
  "ข้าไปก่อนล่ะ ต้องกลับไปดูแลหมู่บ้าน ",
  "หลังจากนี้ดูแลตัวเองด้วยล่ะ ",
]

var conver_5 = ["จากนี้ต้องเดินทางคนเดียวแล้ว !!",
  "ใช้ความรู้ Python ฝ่าฝันอุปสรรคไปให้ได้ ",
  "ไปต่อกันเลย ",
]


function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 0 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE")) {
      closeDialog()

      position_dialog_x = 300
      position_dialog_y = 300
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "โจมตีด้วย FIRE !!", {
        fontSize: '15px',
      })
      attackState = 1
      check_conver = 1
      current_conver = 0
      return (1)

    } else if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && responseTxt.includes("FIRE")) {
      var countTxt = responseTxt.split(/\r\n|\r|\n/).length
      if (countTxt == 3) {
        closeDialog()

        check_conver = 2
        current_conver = 0
        attackState = 5
      } else {
        closeDialog()

        position_dialog_x = 300
        position_dialog_y = 300
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "บ้าจริง !! \nใช้เวทมนต์ไม่ครบเท่าจำนวนมอนสเตอร์เลย ", {
          fontSize: '15px',
        })
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      }
    } else {
      closeDialog()

      position_dialog_x = 300
      position_dialog_y = 300
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ใช้สกิลผิดซะได้\nลองใหม่อีกที !!", {
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

  console.log(current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 300
    position_dialog_y = 300
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
    if (current_conver >= 2) {
      // press_back = 1
      $(document).ready(function () {
        $("#story2-hint-1").modal()
      })
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 300
    position_dialog_y = 300
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
    if (current_conver >= 5) {
      press_back = 1
      $(document).ready(function () {
        $("#story2-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story2-hint-2'>คำใบ้ 2</span></a>")

      })
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 140
    position_dialog_y = 300
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
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

  }

}

function backward() {
  console.log(current_conver)
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
      fontSize: '15px',
    })

    switch (check_conver) {
      case 0:
        position_dialog_x = 300
        position_dialog_y = 300
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
        closeDialog()
        position_dialog_x = 140
        position_dialog_y = 300
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
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
    game.load.image('background', 'client/images/map_story_2.png')
    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
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
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

    game.load.spritesheet('monster', 'client/images/monster-4.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(0.834, 0.834)

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

    this.player = game.add.sprite(-150, 50, 'playerStandRightWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.monster1 = game.add.sprite(500, 400, 'monster')
    this.monster1.scale.setTo(1.5, 1.5)
    this.monster1.animations.add('play', [0, 1, 2], 5, true)
    this.monster1.animations.play('play')
  },

  update: function () {

    if (this.player.x >= 1600) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 7 ,'timber' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 7 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/story_3"
      })

    }
  },
}


game.state.add('main', mainState)
game.state.start('main')