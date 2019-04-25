var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 10
var playerState = 0
var wizardState = 0
var stopState = 0
var tmpResponse
var checkState = 0
var item_inventory = []
var x = 0
var y = 0


var conver_1 = ["บทนี้จะสอนเรื่องฟังก์ชัน (Function)",
  "ฟังก์ชัน (Function) คือส่วนของโค้ดหรือ\nโปรแกรมที่ทำงานเพื่อวัตถุประสงค์บางอย่าง",
  "ในภาษา Python คุณสามารถสร้างฟังก์ชัน\nของคุณเองเพื่อให้ทำงานที่ต้องการ",
  "ในการเขียนโปรแกรมเรามักจะแยกโค้ด\nที่มีการทำงานเหมือนๆ กันเป็นฟังก์ชันเอาไว้ ",
  "และเรียกใช้ฟังก์ชันนั้นซ้ำๆ \nซึ่งเป็นแนวคิดของการใช้ซ้ำโค้ด ",
  "นี่เป็นรูปแบบของการประกาศ\nฟังก์ชันในภาษา Python",
  "def function_name(args...)\n    # statements",
  "ลองสร้างฟังก์ชันแล้ว\nreturn string ออกมาสิ "
]
var conver_2 = ["การเขียนฟังก์ชันสามารถส่งค่า argument \nให้กับฟังก์ชันได้",
  "นี่คือตัวอย่าง",
  "def example(x)\n    return (\"Hello \" + x)",
  "ผลลัพธ์ที่ได้ก็คือฟังก์ชัน\nจะได้คำว่า Hello ตามด้วยค่าที่ส่งไป",
  "จงเขียนฟังก์ชันที่มีการรับส่งค่า argument ",
  "และดูผลลัพธ์ที่ได้"
]

var conver_3 = ["ง่ายๆแค่นี้เอง",
  "ถ้าอยากจะผ่านไปล่ะก็",
  "ให้เจ้า return ค่าออกมาเป็น string ",
  "เป็นคำว่า \"I want to go\"",
]

var conver_10 = ["ถูกต้อง !!",
  "แต่ข้าลืมสอนเรื่อง List ไปเลย",
  "กลับไปที่พ่อค้าคนเมื่อกี้ก่อน",
]

var pause = 0
function music() {
  if (pause == 0) {
    self.music.pause()
    pause = 1
    self.sound.destroy()
    self.sound = game.add.button(1000, 28, 'mute', music, this)
    self.sound.scale.setTo(0.9, 0.9)
  } else if (pause == 1) {
    self.music.resume()
    pause = 0
    self.sound.destroy()
    self.sound = game.add.button(1000, 28, 'speaker', music, this)
    self.sound.scale.setTo(0.9, 0.9)
  }
}

function showInventory() {

  $(document).ready(function () {
    var data = $.ajax({
      url: '/getItem',
      type: "GET",
      async: false,
    }).responseJSON

    item_inventory.push([data[0].item_name, data[0].amount])
    console.log(item_inventory[0][0])
    self.item_apple = game.add.image(405, 300, 'item_' + item_inventory[0][0]);
    self.item_apple.scale.setTo(0.1, 0.1)
    self.text_apple = game.add.text(440, 320, item_inventory[0][1], {
      fontSize: '15px',
    })

  })

  if (typeof self.inventory !== "undefined") {
    self.inventory.destroy()
    self.xSign.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory');
  self.inventory.scale.setTo(0.6, 0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8, 0.8)
}

function closeInventory() {
  if (typeof self.item_apple !== "undefined") {
    self.item_apple.destroy()
    self.text_apple.destroy()
  }

  self.inventory.destroy()
  self.xSign.destroy()
}


function resultCompile(responseTxt) {

  if (responseTxt.length < 50) {
    if (check_conver == 1) {
      checkState = 1
    }
    if (check_conver == 2) {
      checkState = 2
    }
    self.textInBox.destroy()
    self.button.destroy()
    self.dialogBox.destroy()

    self.dialogBox = game.add.image(300, 100, 'dialogBoxLeft')
    self.textInBox = game.add.text(330, 120, responseTxt, {
      fontSize: '15px',
    })
    self.button = game.add.button(640, 130, 'button', actionOnClick, this)

    if (responseTxt.trim() == "I want to go") {

      checkState = 10
      stopState = 1
      playerState = 3
      wizardState = 3
      return (2)
    } else {
      return (1)
    }
  } else {
    // self.dialogBox.destroy()
    // self.button.destroy()
    self.errorTextDialog = game.add.image(250, 50, 'errorText');
    self.errorTextDialog.scale.setTo(5, 5)

    self.textErrorInBox = game.add.text(280, 80, "มีข้อผิดพลาดในโค้ดของคุณ\nตรวจสอบและทำการแก้ไข\nและคอมไพล์ใหม่อีกครั้ง", {
      fontSize: '30px',
    })

    self.errorButton = game.add.button(750, 140, 'errorButton', deleteErrorButton, this)
    self.more = game.add.button(700, 140, 'more', viewMore, this)

  }
}

function deleteErrorButton() {
  self.errorButton.destroy()
  self.errorTextDialog.destroy()
  self.textErrorInBox.destroy()
  self.more.destroy()

  actionOnClick()
}

function viewMore() {
  self.textErrorInBox.destroy()
  self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
    fontSize: '15px',
  })
}


function actionOnClick() {

  if (conver_1[current_conver] != undefined && check_conver == 0) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
    self.textInBox = game.add.text(430, 120, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.button = game.add.button(740, 130, 'button', actionOnClick, this)
    current_conver++
    if (current_conver == 8) {
      check_conver = 1
      current_conver = 0
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    if (checkState == 1) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
      self.textInBox = game.add.text(430, 120, conver_2[current_conver], {
        fontSize: '15px',
      })
      self.button = game.add.button(740, 130, 'button', actionOnClick, this)
      current_conver++
    }
    if (current_conver == 6) {
      check_conver = 2
      current_conver = 0
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    if (checkState == 2 ) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
      self.textInBox = game.add.text(430, 120, conver_3[current_conver], {
        fontSize: '15px',
      })
      self.button = game.add.button(740, 130, 'button', actionOnClick, this)
      current_conver++

      if (current_conver == 4) {
        check_conver = 10
        current_conver = 0
      }
    }

  } else if (conver_10[current_conver] != undefined && check_conver == 10) {
    if (checkState == 10 ) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
      self.textInBox = game.add.text(430, 120, conver_10[current_conver], {
        fontSize: '15px',
      })
      self.button = game.add.button(740, 130, 'button', actionOnClick, this)
      console.log("b4",current_conver)
      current_conver++
      console.log("after",current_conver)

      if (current_conver == 3) {
        console.log("stop",current_conver)
        // stopState = 3

      }
    }
  } else {
    console.log("else")
    stopState = 3
    current_conver--
  }
}


var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_4.png');
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
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.audio('music', 'client/images/audio/Celestial.mp3')

  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu');
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(1000, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music');
    this.music.play();


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

      this.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
      this.textInBox = game.add.text(430, 120, conver_1[current_conver], {
        fontSize: '15px',
      })
      this.button = game.add.button(740, 130, 'button', actionOnClick, this)
      playerState = 3

    }

    if (stopState == 1 && playerState == 3 && wizardState == 3) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(400, 100, 'dialogBoxLeft')
      self.textInBox = game.add.text(430, 120, conver_10[current_conver], {
        fontSize: '15px',
      })
      self.button = game.add.button(740, 130, 'button', actionOnClick, this)

      stopState = 2
    }

    if (stopState == 3 && playerState == 3 && wizardState == 3) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
      this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('walk')

      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      playerState = 4
      wizardState = 4
    }

    if (playerState == 4 && wizardState == 5) {
      this.player.x -= speedCharacter
      console.log(this.player.x)

      if (this.player.x == 200 ){
        playerState = 5
      }
    }

    if (wizardState == 4) {
      this.wizard.x -= speedCharacter

      if (this.wizard.x == 200){
        wizardState = 5
      }
    }

    if (wizardState == 5) {
      this.wizard.y -= speedCharacter
      console.log(this.wizard.y)
    }

    if (playerState == 5){
      if (this.wizard.y == 50){
        playerState = 6
      }
    }

    if (playerState == 6){
      this.player.y -= speedCharacter
    }

    if (this.player.y == -600) {

      $(document).ready(function () {

        var userSession = $.ajax({
          url: '/getUser',
          type: "GET",
          async: false,
        }).responseText
        var userJson = JSON.parse(userSession);

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
};


game.state.add('main', mainState);
game.state.start('main');