var wear_check = 0
var change_wear = 0

var conver_1 = ["เรียนรู้พื้นฐานไปจนหมดละนะ\nต่อจากนี้ต้องเดินทางด้วยตัวเอง",
  "เจ้าจะพบกับมอนสเตอร์มาขัดขวางการเดินทาง\nใช้ความรู้ Python ผ่านมันไปให้ได้",
  "จากบทเรียนที่แล้ว ได้รับชุดเพราะมาแล้ว",
  "ลองสวมใส่ดูสิ คลิกที่กระเป๋าเพื่อเปิดดู ",
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

function showInventoryStory() {

  $(document).ready(function () {
    var data = $.ajax({
      url: '/getItem',
      type: "GET",
      async: false,
    }).responseJSON

    // console.log(data)

    item_inventory.push([data[0].item_name, data[0].amount])
    item_inventory.push([data[1].item_name, data[1].amount])
    item_inventory.push([data[2].item_name, data[2].amount])
    item_inventory.push([data[3].item_name, data[3].amount])
    item_inventory.push([data[4].item_name, data[4].amount])
    // console.log(item_inventory)
    self.item_apple = game.add.image(405, 300, 'item_' + item_inventory[0][0])
    self.item_apple.scale.setTo(0.1, 0.1)
    self.text_apple = game.add.text(440, 320, item_inventory[0][1], {
      fontSize: '15px',
    })

    if (wear_check == 0) {
      self.item_armor = game.add.button(530, 250, item_inventory[1][0], wear, this)
      self.item_armor.scale.setTo(0.5, 0.5)
      self.item_helmet = game.add.button(465, 293, item_inventory[2][0], wear, this)
      self.item_helmet.scale.setTo(0.35, 0.35)
      self.item_weapon = game.add.button(355, 310, item_inventory[3][0], wear, this)
      self.item_weapon.scale.setTo(0.5, 0.5)
      self.item_boots = game.add.button(445, 280, item_inventory[4][0], wear, this)
      self.item_boots.scale.setTo(0.5, 0.5)
    } else {
      wear()
    }
  })

  if (typeof self.inventory !== "undefined") {
    self.inventory.destroy()
    self.xSign.destroy()
  }
  if (typeof self.item_apple !== "undefined") {
    self.item_apple.destroy()
    self.text_apple.destroy()
  }
  if (typeof self.item_armor !== "undefined") {
    self.item_armor.destroy()
  }
  if (typeof self.item_helmet !== "undefined") {
    self.item_helmet.destroy()
  }
  if (typeof self.item_weapon !== "undefined") {
    self.item_weapon.destroy()
  }
  if (typeof self.item_boots !== "undefined") {
    self.item_boots.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory')
  self.inventory.scale.setTo(0.6, 0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventoryStory, this)
  self.xSign.scale.setTo(0.8, 0.8)
}

function closeInventoryStory() {

  if (typeof self.item_apple !== "undefined") {
    self.item_apple.destroy()
    self.text_apple.destroy()
  }
  if (typeof self.item_armor !== "undefined") {
    self.item_armor.destroy()
  }
  if (typeof self.item_helmet !== "undefined") {
    self.item_helmet.destroy()
  }
  if (typeof self.item_weapon !== "undefined") {
    self.item_weapon.destroy()
  }
  if (typeof self.item_boots !== "undefined") {
    self.item_boots.destroy()
  }
  self.inventory.destroy()
  self.xSign.destroy()
}


function wear() {
  wear_check = 1
  // console.log("workd")
  self.item_armor.destroy()
  self.item_helmet.destroy()
  self.item_weapon.destroy()
  self.item_boots.destroy()

  self.item_armor = game.add.image(507, 58, item_inventory[1][0])
  self.item_armor.scale.setTo(0.5, 0.5)
  self.item_helmet = game.add.image(392, 105, item_inventory[2][0])
  self.item_helmet.scale.setTo(0.35, 0.35)
  self.item_weapon = game.add.image(374, 162, item_inventory[3][0])
  self.item_weapon.scale.setTo(0.5, 0.5)
  self.item_boots = game.add.image(507, 130, item_inventory[4][0])
  self.item_boots.scale.setTo(0.5, 0.5)

}

function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt
  console.log("original", originalCode)

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1) {
      closeDialog()

      current_conver = 0
      check_conver = 1
      position_dialog_x = 100
      position_dialog_y = 200
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "เราชื่อว่า " + responseTxt.trim(), {
        fontSize: '15px',
      })
      state_compile = 1
      return (1)
    } else if (press_back == 2) {
      closeDialog()

      current_conver = 0
      check_conver = 2
      position_dialog_x = 100
      position_dialog_y = 200
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ตอนนี้ผมอายุ " + responseTxt.trim() + " ปี", {
        fontSize: '15px',
      })
      state_compile = 2
      return (2)
    } else {
      closeDialog()

      position_dialog_x = 100
      position_dialog_y = 200
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, responseTxt.trim(), {
        fontSize: '15px',
      })
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

  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 400
    position_dialog_y = 50
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
    if (current_conver >= 9) {
      press_back = 1
      $(document).ready(function () {
        $("#story1-hint-1").modal()
      })
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1 && state_compile == 1) {
    closeDialog()

    position_dialog_x = 100
    position_dialog_y = 200
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
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
        $("#lesson1-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#lesson1-hint-2'>คำใบ้ 2</span></a>")
      })
    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2 && state_compile == 2) {
    closeDialog()

    position_dialog_x = 100
    position_dialog_y = 200
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
      playerState = 1
    }
  }
}

function backward() {
  console.log(current_conver)
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    position_dialog_x = 400
    position_dialog_y = 50
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


var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_story_1.png')
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerWalkLeft', 'client/images/player-walk-left.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('monster1', 'client/images/monster-1.png', 128, 128)
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
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')
  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    // this.music.play()

    this.player = game.add.sprite(-100, 150, 'playerStandRight')
    this.player.smoothed = false

    this.wizard = game.add.sprite(-10 , 150, 'wizardLeft')
    this.wizard.animations.add('left', [0, 1, 2, 3], 5, true)

    this.player.animations.add('right', [0, 1, 2, 3], 5, true)

    this.player.animations.play('right')
    this.wizard.animations.play('left')


  },

  update: function () {

    if (this.player.x < 250 && playerState == 0) {
      this.player.x += speedCharacter
    }

    if (this.wizard.x < 350 && wizardState == 0) {
      this.wizard.x += speedCharacter
    }else if (wizardState < 1){
      wizardState = 1
      playerState = 1
    }

    if (wizardState == 1 && playerState == 1){
      position_dialog_x = 400
      position_dialog_y = 50
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

      wizardState = 2
      playerState = 2
 
    }


    if (this.player.y == 8500) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 1 ,'print' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 1 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        console.log("pass")
        window.location.href = "/lesson_2"
      })

    }
  },
}


game.state.add('main', mainState)
game.state.start('main')