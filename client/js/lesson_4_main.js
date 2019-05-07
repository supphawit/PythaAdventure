var item_inventory = []
var x = 0
var y = 0
var tmpX = 0

var conver_1 = ["บทนี้จะสอนเรื่องฟังก์ชัน (Function)",
  "ฟังก์ชัน (Function) คือส่วนของโค้ดหรือ\nโปรแกรมที่ทำงานเพื่อวัตถุประสงค์บางอย่าง",
  "ในภาษา Python คุณสามารถสร้างฟังก์ชัน\nของคุณเองเพื่อให้ทำงานที่ต้องการ",
  "ในการเขียนโปรแกรมเรามักจะแยกโค้ด\nที่มีการทำงานเหมือนๆ กันเป็นฟังก์ชันเอาไว้ ",
  "และเรียกใช้ฟังก์ชันนั้นซ้ำๆ \nซึ่งเป็นแนวคิดของการใช้ซ้ำโค้ด ",
  "นี่เป็นรูปแบบของการประกาศ\nฟังก์ชันในภาษา Python",
  "def hello()\n    return (\"hello\")",
  "ค่าที่ได้จากการ return \nสามารถนำไปใช้ได้หลากหลาย",
  "แทนค่าให้กับตัวแปรได้ เช่น\nx = hello()",
  "แสดงผลผ่านคำสั่ง print เช่น\nprint (hello())",
  "ลองสร้างฟังก์ชัน\nและ return ออกมาผ่านคำสั่ง print "
]
var conver_2 = ["การเขียนฟังก์ชันสามารถส่งค่า arguments \nให้กับฟังก์ชันได้",
  "นี่คือตัวอย่าง",
  "def helloSomeone(x)\n    return (\"Hello \" + x)",
  "ผลลัพธ์ที่ได้ก็คือฟังก์ชัน\nจะได้คำว่า Hello ตามด้วยค่าที่ส่งไป",
  "จงเขียนฟังก์ชันที่มีการรับ argument \nมาอย่างน้อย 2 ตัว และ return ค่านั้นออกมา",
]

var conver_3 = ["ง่ายๆแค่นี้เอง",
  "ถ้าอยากจะผ่านไปล่ะก็",
"ทำตามที่ข้าบอก",
  "ให้สร้างฟังก์ชันและ return ค่าออกมาเป็น string \nเป็นคำว่า \"I want to go\"",

]

var conver_10 = ["ถูกต้อง !!",
  "แต่ข้าลืมสอนเรื่อง List ไปเลย",
  "กลับไปที่พ่อค้าคนเมื่อกี้ก่อน",
  "",
]



function showInventory() {

  $(document).ready(function () {
    var data = $.ajax({
      url: '/getItem',
      type: "GET",
      async: false,
    }).responseJSON

    item_inventory.push([data[0].item_name, data[0].amount])
    console.log(item_inventory[0][0])
    self.item_apple = game.add.image(405, 300, 'item_' + item_inventory[0][0])
    self.item_apple.scale.setTo(0.1, 0.1)
    self.text_apple = game.add.text(440, 320, item_inventory[0][1], {
      fontSize: '15px',
    })

  })

  if (typeof self.inventory !== "undefined") {
    self.inventory.destroy()
    self.xSign.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory')
  self.inventory.scale.setTo(0.6, 0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8, 0.8)
}

function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt
  // console.log(check_conver)
  if (responseTxt.length < 50) {

    if (responseTxt.trim() == "None") {
      alert("return ค่าบางอย่างด้วยนะ")

    } else if (responseTxt.trim() == "I want to go" && check_conver == 2) {
      checkState = 10
      check_conver = 10
      stopState = 1
      playerState = 3
      wizardState = 3
      current_conver = 0

      var x = 0

      console.log("jakfsdjkflsdlk")
      closeDialog()
      self.dialogBox = game.add.image(300, 100, 'dialogBoxLeft')
      self.textInBox = game.add.text(330, 120, responseTxt.trim(), {
        fontSize: '15px',
      })
      self.button = game.add.button(660, 130, 'button', actionOnClick, this)
      self.back = game.add.button(300 + 340, 100 + 30, 'back', backward, this)
      return (3)

    } else if ((originalCode.includes("def") || originalCode.includes("print"))) {

      if (tmpX == 1 && check_conver == 0) {
        checkState = 1
        current_conver = 0
        check_conver = 1

        closeDialog()
        self.dialogBox = game.add.image(300, 100, 'dialogBoxLeft')
        self.textInBox = game.add.text(330, 120, "ฟังก์ชันมีการ return \nและแสดงผลคำว่า " + responseTxt, {
          fontSize: '15px',
        })
        self.button = game.add.button(660, 130, 'button', actionOnClick, this)
        self.back = game.add.button(300 + 340, 100 + 30, 'back', backward, this)
        return (1)
      } else if (tmpX == 2 && check_conver == 1) {

        if (originalCode.includes(",")) {
          checkState = 2
          check_conver = 2
          current_conver = 0

          closeDialog()
          self.dialogBox = game.add.image(300, 100, 'dialogBoxLeft')
          self.textInBox = game.add.text(330, 120, "ฟังก์ชันรับ arguments มาและ return \nพร้อมแสดงผลว่า " + responseTxt, {
            fontSize: '15px',
          })
          self.button = game.add.button(660, 130, 'button', actionOnClick, this)
          self.back = game.add.button(300 + 340, 100 + 30, 'back', backward, this)
          return (2)
        } else {
          closeDialog()
          position_dialog_x = 400
          position_dialog_y = 100
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "เจ้าไม่ได้ทำฟังก์ชันที่รับ arguments !!", {
            fontSize: '15px',
          })
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        }

      } else {
        closeDialog()

        position_dialog_x = 400
        position_dialog_y = 100
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
          fontSize: '15px',
        })
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      }




    } else {
      alert("ใช้คำสั่งให้ตรงกับบทเรียน!!\nบทเรียนนี้ควรมี function ในโค้ดด้วย")
    }

  } else {

    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    if (originalCode.includes("indent")) {
      messageErr = "ผิดพลาด!!\nบล็อคหรือระยะห่างของคำสั่งถูกต้องหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', indent, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (originalCode.includes("Missing parentheses") || originalCode.includes("unexpected EOF while parsing")) {
      messageErr = "ผิดพลาด!!\nลืมใส่วงเล็บในตรงไหนหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', parentheses, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (originalCode.includes("EOL while scanning string literal")) {
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

    if (current_conver == 2) {
      tmpX = 1
      $(document).ready(function () {
        $("#lesson4-hint-1").modal()
      })

    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    if (checkState == 1) {
      closeDialog()

      position_dialog_x = 400
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
    }
    if (current_conver == 5) {
      tmpX = 2
      $(document).ready(function () {
        $("#lesson4-hint-2").modal()
        $('#hint2').html("<a href='#' id='hint2'><span class='badge badge-info' data-toggle='modal' data-target='#lesson4-hint-2'>คำใบ้ 2</span></a>")
      })
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    if (checkState == 2) {
      closeDialog()

      position_dialog_x = 400
      position_dialog_y = 100
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
    }
    if (current_conver == 4) {
      $(document).ready(function () {
        $("#lesson4-hint-3").modal()
        $('#hint3').html("<a href='#' id='hint3'><span class='badge badge-info' data-toggle='modal' data-target='#lesson4-hint-3'>คำใบ้ 3</span></a>")
      })
    }


  } else if (conver_10[current_conver] != undefined && check_conver == 10) {
    console.log("10",current_conver)
    if (checkState == 10) {

      if (current_conver == 0 && stopState != 2) {
        x = 1
      }
      closeDialog()

      position_dialog_x = 400
      position_dialog_y = 100
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1 , {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++
      console.log("10",current_conver)
      if (current_conver == 4) {
        stopState = 3

      }

    }
  }

}


function backward() {
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    position_dialog_x = 400
    position_dialog_y = 100
    switch (check_conver) {
      case 0:
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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

      case 10:
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver - 1], {
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
    game.load.image('background', 'client/images/map_lesson_4.png')
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
    this.music.play()


    this.player = game.add.sprite(200, -100, 'playerWalkingDown')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.wizard = game.add.sprite(200, 0, 'wizardRight')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

  },

  update: function () {
    if (playerState == 0) {
      this.player.y += speedCharacter
      if (this.player.y == 220) {
        playerState = 1
      }
    }

    if (wizardState == 0) {
      this.wizard.y += speedCharacter
      if (this.wizard.y == 220) {
        wizardState = 1
      }
    }

    if (wizardState == 1) {
      this.wizard.x += speedCharacter
      if (this.wizard.x == 350) {
        wizardState = 2
        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')
      }
    }
    if (playerState == 1) {
      this.player.x += speedCharacter
      if (this.player.x == 250) {
        playerState = 2
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRight')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
      }
    }

    if (playerState == 2 && wizardState == 2) {

      position_dialog_x = 400
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

      playerState = 3

    }

    if (stopState == 1 && playerState == 3 && wizardState == 3 && x == 1) {

      closeDialog()
      current_conver --

      position_dialog_x = 400
      position_dialog_y = 100
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver ++
      stopState = 2
    }

    if (stopState == 3 && playerState == 3 && wizardState == 3) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
      this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('walk')

      closeDialog()
      playerState = 4
      wizardState = 4
    }

    if (playerState == 4 && wizardState == 5) {
      this.player.x -= speedCharacter
      console.log(this.player.x)

      if (this.player.x == 200) {
        playerState = 5
      }
    }

    if (wizardState == 4) {
      this.wizard.x -= speedCharacter

      if (this.wizard.x == 200) {
        wizardState = 5
      }
    }

    if (wizardState == 5) {
      this.wizard.y -= speedCharacter
      // console.log(this.wizard.y)
    }

    if (playerState == 5) {
      if (this.wizard.y == 50) {
        playerState = 6
      }
    }

    if (playerState == 6) {
      this.player.y -= speedCharacter
    }

    if (this.player.y == -600) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 4 ,'function' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 4  AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })

        console.log("pass")
        window.location.href = "/lesson_5"

      })

    }


  },
}


game.state.add('main', mainState)
game.state.start('main')