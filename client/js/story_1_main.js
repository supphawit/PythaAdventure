var wear_check = 0
var change_wear = 0

var conver_1 = ["เรียนรู้พื้นฐานไปจนหมดละนะ\nต่อจากนี้ต้องเดินทางด้วยตัวเอง",
  "เจ้าจะพบกับมอนสเตอร์มาขัดขวางการเดินทาง\nใช้ความรู้ Python ผ่านมันไปให้ได้",
  "จากบทเรียนที่แล้ว ได้รับอุปกรณ์มาแล้ว",
  "ดูได้จากกระเป๋าของเจ้า",
  "วิธีสวมใส่คือ ใช้คำสั่ง print()\n ",
  "จะ print ค่าอะไรออกมาก็ได้",
]

var conver_2 = ["ตอนนี้เจ้ามีอาวุธแล้วเป็นคฑาเวทมนต์",
  "ยิ่งเจ้ามีประสบการณ์ต่อสู้เยอะ\nจะยิ่งมีความสามารถเพิ่มขึ้น",
  "หมดหน้าที่ของข้าแล้ว\nหลังจากนี้เจ้าจะต้องไปตัวคนเดียวแล้ว",
  "หากกำจัดมอนสเตอร์ได้เจ้าจะแข็งแกร่งขึ้น\nจำเอาไว้",
]


var conver_3 = ["มอนสเตอร์ !!",
  "พอดีเลย ข้าจะให้เจ้าจัดการมอนสเตอร์ตัวนั้น ",
  "ยืนบื้ออะไรล่ะ!! ไปจัดการซะสิ",
  "ตอนนี้เจ้ามีอยู่แค่ความสามารถเดียว ",
  "นั่นคือเวทมนต์ลูกไฟ\nดูที่เมนูสิ จะเห็นสกิลที่เจ้ามี",
  "สามารถใช้ได้ด้วยการเขียนฟังก์ชัน\nreturn เป็นคำว่า FIRE",
  "และแสดงผลด้วยคำสั่ง print()",
]

var conver_4 = ["ทำได้ดีมาก !!",
  "ข้าไปก่อนล่ะ ต้องกลับไปดูแลหมู่บ้าน ",
  "หลังจากนี้ดูแลตัวเองด้วยล่ะ ",
]

var conver_5 = ["จากนี้ต้องเดินทางคนเดียวแล้ว !!",
  "ใช้ความรู้ Python ฝ่าฝันอุปสรรคไปให้ได้ ",
  "ไปต่อกันเลย ",
]

function showInventoryStory1() {


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

    if (wear_check == 0) {
      item_inventory.forEach(element => {
        console.log(element)
        switch (element[0]) {
          case 'apple':
            self.item_apple = game.add.image(405, 300, 'item_apple')
            self.item_apple.scale.setTo(0.1, 0.1)
            self.text_apple = game.add.text(440, 320, element[1], {
              fontSize: '15px',
            })
            break

          case 'armor':
            self.item_armor = game.add.image(530, 250, 'armor')
            self.item_armor.scale.setTo(0.5, 0.5)
            break

          case 'boots':
            self.item_boots = game.add.image(445, 280, 'boots')
            self.item_boots.scale.setTo(0.5, 0.5)
            break

          case 'helmet':
            self.item_helmet = game.add.image(465, 293, 'helmet')
            self.item_helmet.scale.setTo(0.35, 0.35)
            break

          case 'weapon':
            self.item_weapon = game.add.image(355, 310, 'weapon')
            self.item_weapon.scale.setTo(0.5, 0.5)
            break
        }
      });

    } else {

      item_inventory.forEach(element => {
        console.log(element)
        switch (element[0]) {
          case 'apple':
            self.item_apple = game.add.image(405, 300, 'item_apple')
            self.item_apple.scale.setTo(0.1, 0.1)
            self.text_apple = game.add.text(440, 320, element[1], {
              fontSize: '15px',
            })
            break

          case 'armor':
            self.item_armor = game.add.image(507, 58, 'armor')
            self.item_armor.scale.setTo(0.5, 0.5)
            break

          case 'boots':
            self.item_boots = game.add.image(507, 130, 'boots')
            self.item_boots.scale.setTo(0.5, 0.5)
            break

          case 'helmet':
            self.item_helmet = game.add.image(392, 105, 'helmet')
            self.item_helmet.scale.setTo(0.35, 0.35)
            break

          case 'weapon':
            self.item_weapon = game.add.image(374, 162, 'weapon')
            self.item_weapon.scale.setTo(0.5, 0.5)
            break
        }
      });

    }
  })

  item_inventory = []
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


function resultCompile(responseTxt, originalCode) {
  deleteErrorButton()
  tmpResponse = responseTxt
  if (typeof self.errorButton !== "undefined") {
    deleteErrorButton()
  }
  
  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1) {
      closeDialog()

      current_conver = 0
      check_conver = 1
      position_dialog_x = 300
      position_dialog_y = 50
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, responseTxt.trim() + " !!", {
        fontSize: '15px',
      })
      state_compile = 1
      wear_check = 1
      skill = 1
      return (1)

    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE")) {
      closeDialog()

      position_dialog_x = 530
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "โจมตีด้วย " + responseTxt.toUpperCase(), {
        fontSize: '15px',
      })
      playerState = 8
      return (2)
    } else if (press_back == 99) {
      console.log("Nothing")
    } else {
      closeDialog()

      position_dialog_x = 400
      position_dialog_y = 50
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ใช้สกิลผิดพลาด จำให้ได้ว่าเขียนฟังก์ชันยังไง\nลองดูใหม่", {
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
  deleteErrorButton()
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
    if (current_conver >= 6) {
      press_back = 1
      $(document).ready(function () {
        $("#story1-hint-1").modal()
      })
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1 && state_compile == 1) {
    closeDialog()

    position_dialog_x = 400
    position_dialog_y = 50
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
    if (current_conver >= 4) {
      stopState = 1
    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 400
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
      playerState = 6
    }

    if (current_conver == 7) {
      $(document).ready(function () {
        $("#story1-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story1-hint-2'>คำใบ้ 2</span></a>")
      })
    }
  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()

    position_dialog_x = 400
    position_dialog_y = 50
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
      wizardState = 5
      self.bomb.destroy()
      closeDialog()
    }

  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    closeDialog()

    position_dialog_x = 530
    position_dialog_y = 150
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
      playerState = 20
      closeDialog()
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
        position_dialog_x = 400
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        position_dialog_x = 400
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        position_dialog_x = 400
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 3:
        position_dialog_x = 400
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 4:
        position_dialog_x = 530
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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
    game.load.image('background', 'client/images/map_story_1.png')
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
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

    game.load.spritesheet('monster1', 'client/images/monster-1.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory1, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    this.music.play()

    this.player = game.add.sprite(-100, 150, 'playerStandRight')
    this.player.smoothed = false

    this.wizard = game.add.sprite(-10, 150, 'wizardLeft')
    this.wizard.animations.add('left', [0, 1, 2, 3], 5, true)

    this.player.animations.add('right', [0, 1, 2, 3], 5, true)

    this.player.animations.play('right')
    this.wizard.animations.play('left')
    // this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    // this.fire_sym.scale.setTo(0.9, 0.9)

  },

  update: function () {

    if (skill == 1) {
      this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
      this.fire_sym.scale.setTo(0.9, 0.9)
      skill = 2
    }

    if (wear_check == 1) {
      this.player.destroy()

      this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRightWearing')
      this.player.animations.add('right', [0, 1, 2, 3], 5, true)
      this.player.animations.play('right')
      wear_check = 2
    }

    if (stopState == 1) {

      this.monster1 = game.add.sprite(1200, 250, 'monster1')
      this.monster1.animations.add('right', [0, 1, 2, 3], 5, true)
      this.monster1.animations.play('right')
      stopState = 2
      monsterState = 1
    }

    if (this.player.x < 250 && playerState == 0) {
      this.player.x += speedCharacter
    }

    if (this.wizard.x < 350 && wizardState == 0) {
      this.wizard.x += speedCharacter
    } else if (wizardState < 1) {
      wizardState = 1
      playerState = 1
    }

    if (wizardState == 1 && playerState == 1) {

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

    if (monsterState == 1) {
      this.monster1.x -= 5
      if (this.monster1.x == 800) {
        monsterState = 2
        wizardState = 3
        playerState = 2
      }
    }

    if (wizardState == 3) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
      this.wizard.animations.add('right', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('right')

      closeDialog()
      current_conver = 0
      position_dialog_x = 400
      position_dialog_y = 50
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++

      wizardState = 4
      check_conver = 2
      press_back = 2
    }

    if (playerState == 6) {
      this.player.x += 2
      if (this.player.x > 380) {
        this.player.y += 2
        if (this.player.y > 250) {
          playerState = 7
        }
      }
    }

    if (playerState == 8) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      playerState = 9
    } else if (playerState == 9) {
      this.fireAttack.x += 5
      press_back = 99
      if (this.fireAttack.x >= this.monster1.x) {
        playerState = 10
      }
    } else if (playerState == 10) {
      if (typeof this.bomb !== "undefined") {
        this.bomb.destroy()
      }
      this.bomb = game.add.sprite(this.monster1.x + 20, this.monster1.y + 50, 'bomb')
      this.bomb.animations.add('play', [0, 1, 2, 3], 5, true)
      this.bomb.animations.play('play')
      this.monster1.destroy()
      this.fireAttack.destroy()
      press_back = 2
      playerState = 11
      check_conver = 3
      current_conver = 0
    }

    if (wizardState == 5) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
      this.wizard.animations.add('right', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('right')
      wizardState = 6
    } else if (wizardState == 6) {
      this.wizard.x -= speedCharacter
      if (this.wizard.x <= -250) {
        wizardState = 7
        check_conver = 4
        current_conver = 0
      }
    } else if (wizardState == 7) {
      position_dialog_x = 530
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++

      wizardState = 8
    }

    if (playerState == 20) {
      this.player.x += speedCharacter
      console.log(this.player.x)
    }


    if (this.player.x >= 1402) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 6 ,'firs kill' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 6 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        console.log("pass")
        window.location.href = "/story_2"
      })

    }
  },
}


game.state.add('main', mainState)
game.state.start('main')