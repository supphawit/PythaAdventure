var finish_buy
var item_inventory = []

var conver_1 = ["คนนี้คือพ่อค้า",
  "เจ้าสามารถซื้อของจากเขาได้",
  "จะให้จ้าซื้อแอปเปิ้ลจากเขา",
  "มันลูกละ 10g เจ้ามีแค่ 50g \nดังนั้นซื้อได้แค่ 5 ลูก",
  "โดยใช้คำสั่ง for ในการวนลูปเอาค่าออกมา",
  "ยกตัวอย่าง",
  "for i in range(1,3):\n    print(i)",
  "จะได้การวนลูป 3 รอบ \nโดยมี i แทนเลขของจำนวนรอบ",
  "จงเขียนการวนลูปให้วนไม่เกิน 5 รอบ"
]

var conver_2 = ["เจ้าอยากจะซื้อแอปเปิ้ลงั้นเหรอ?",
  "ต้องการกี่ลูกล่ะ?",
]

var conver_3 = ["สามารถดูในกระเป๋า เพื่อดูของที่เก็บมาได้นะ",
  "พอจะเข้าใจเรื่องการวนลูปบ้างแล้วสินะ",
  "ไปกันต่อเถอะ",
  "สู้"
]

function resultCompile(responseTxt, n, originalCode, realCode) {
  finish_buy = n

  tmpResponse = responseTxt
  if (responseTxt == 0) return

  if (responseTxt <= 5 && responseTxt >= 0) {

    if (originalCode.includes("for") || originalCode.includes("print")) {

      current_conver = 0
      check_conver = 2
      setTimeout(function () {
        closeDialog()
        self.dialogBox = game.add.image(150, 50, 'dialogBoxRight')
        self.button = game.add.button(500, 80, 'button', actionOnClick, self)
        self.textInBox = game.add.text(240, 70, n, {
          fontSize: '30px',
        })
        self.item_apple = game.add.image(180, 70, 'item_apple')

        self.item_apple.scale.setTo(0.1, 0.1)
        moveToPlayer()
        resultCompile(--responseTxt, n + 1, originalCode, realCode)

      }, 1300)

    } else{
      alert("ใช้คำสั่งให้ตรงกับบทเรียน!!\nบทเรียนนี้ควรมี for ในโค้ดด้วย")
    }

  } else if (responseTxt > 5 && responseTxt < 50) {
    alert("มีเงินไม่พอ!!")

  } else {

    
    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    if (realCode.includes("indent")) {
      messageErr = "ผิดพลาด!!\nบล็อคหรือระยะห่างของคำสั่งถูกต้องหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', indent, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (realCode.includes("Missing parentheses") || realCode.includes("unexpected EOF while parsing")) {
      messageErr = "ผิดพลาด!!\nลืมใส่วงเล็บในตรงไหนหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', parentheses, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (realCode.includes("EOL while scanning string literal")) {
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

function moveToPlayer() {
  stopState = 10
}

function actionOnClick() {

  // console.log("check",check_conver)
  // console.log("curr",current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {

    closeDialog()

    position_dialog_x = 600
    position_dialog_y = 150
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

    if (current_conver == 9) {
      check_conver = 1
      current_conver = 0
      $(document).ready(function () {
        $("#lesson3-hint-1").modal()
      })
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {

    closeDialog()

    position_dialog_x = 150
    position_dialog_y = 50
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    current_conver++
    if (current_conver >= 2) {
      // check_conver = 2

    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {


    if (finish_buy >= 1) {

      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++
      if (current_conver >= 4) {

        wizardState = 2
        playerState = 2
        closeDialog()
      }
    }

  }
}


function backward() {
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    position_dialog_x = 600
    position_dialog_y = 150
    switch (check_conver) {
      case 0:
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        position_dialog_x = 150
        position_dialog_y = 50
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
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
    game.load.image('background', 'client/images/map_lesson_3.png')
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerWalkLeft', 'client/images/player-walk-left.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('dealer', 'client/images/dealer.png', 128, 128)
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.image('information', 'client/images/information.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    // this.music.play()


    this.dealer = game.add.sprite(490, 150, 'dealer')
    this.dealer.animations.add('walk', [0, 1], 5, true)

    this.player = game.add.sprite(-100, 230, 'playerWalkRight')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(0, 230, 'wizardRight')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.dealer.animations.play('walk')
    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

  },

  update: function () {
    if (playerState == 0) {
      if (this.player.x < 400) {
        this.player.x += speedCharacter
      } else if (playerState == 0 && this.player.x == 400) {
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRight')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
        playerState = 1
      }
    }

    if (wizardState == 0) {
      if (this.wizard.x < 500) {
        this.wizard.x += speedCharacter
      } else if (wizardState == 0 && this.wizard.x == 500) {
        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')
        wizardState = 1
      }
    }

    if (wizardState == 1 && playerState == 1 && stopState == 0) {
      stopState = 1

      position_dialog_x = 600
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

    }
    if (stopState == 10) {
      if (this.item_apple.y != 300) {
        this.item_apple.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_apple.x != 450) {
        this.item_apple.x += 5
      }

      if (this.item_apple.y == 214 && this.item_apple.x == 450) {
        this.item_apple.destroy()
      }

      if (wizardState == 2) {
        this.wizard.x += speedCharacter
      }

      if (playerState == 2) {
        this.player.x += speedCharacter
      }

      if (this.wizard.x == 740) {
        wizardState = 3
        this.wizard.y += speedCharacter

      }

      if (this.player.x == 740 && playerState != 3) {
        playerState = 3
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerWalkingDown')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
      }

      if (playerState == 3) {
        this.player.y += speedCharacter
        console.log(this.player.y)
      }


      if (this.player.y == 650) {

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
              query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 3 ,'loop' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 3  AND email_user = '" + userJson.email + "') LIMIT 1",
            }
          })

          console.log("pass")
          window.location.href = "/lesson_4"

        })

      }


    }
  },
}


game.state.add('main', mainState)
game.state.start('main')