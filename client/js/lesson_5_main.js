var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 10
var playerState = 0
var wizardState = 0
var stopState = 0
var tmpResponse
var c_compiler = 0
var ex_compiler
var item_inventory = []

var conver_1 = ["ในบทนี้ เจ้าจะได้เรียนรู้\nเกี่ยวกับโครงสร้างข้อมูลแบบ List",
  "ข้าจะบอกการสร้างและใช้งาน List ในเบื้องต้น",
  "การใช้งานเมธอดและฟังก์ชัน\nเพื่อจัดการข้อมูลภายใน List ",
  "และการใช้งานคำสั่ง For loop กับ List",
  "ยกตัวอย่างเช่น numbers = [1, 7, 5]",
  "หรือ names = ['Tjung', 'Prayud', 'James']",
  "จะรวมกันก็ได้เป็น \nmixed = [1, 3, \"Mountain\", \"Python\"]",
  "สามารถใช้เมธอด append() \nเพื่อเพิ่มข้อมูลใหม่เข้าไปใน List",
  "และลองใช้ฟังก์ชัน len() \nนับจำนวนสมาชิกใน List ออกมาดู",
]

var conver_2 = ["คราวนี้ใช้เมธอด append() \nเพิ่มสมาชิกให้กับ List ",
  "ข้าจะยกตัวอย่างให้ดู \nex.append(10)",
  "สมาชิกใน List ก็จะเพิ่มขึ้น",
  "ลองใช้ฟังก์ชัน len() \nตรวจสอบจำนวนสมาชิกใน List ดูสิ",
]

var conver_3 = ["การเข้าถึงข้อมูลภายใน List",
  "List นั้นใช้ Index สำหรับการเข้าถึงข้อมูล",
  "โดย Index ของ List จะเป็นจำนวนเต็ม\nที่เริ่มจาก 0 และเพิ่มขึ้นทีละ 1 ไปเรื่อยๆ",
  "อ่านค่าได้โดย print (ex[0])",
  "ก็จะได้ค่าภายใน List ลำดับแรกออกมา",
  "ลองเอาค่าลำดับที่ 2 ออกมาให้ดูหน่อยซิ"
]

var conver_4 = ["การอ่านค่าใน List ด้วยคำสัง For loop",
  "มักจะใช้คำสั่งวนซ้ำกับ List \nเพราะทำให้การทำงานรวดเร็วและง่ายขึ้น ",
  "เช่น การใช้คำสั่งวนซ้ำวนอ่านค่าใน List \nที่มีข้อมูลเป็นจำนวนมาก เป็นต้น ",
  "ต่อไปมาดูตัวอย่างการใช้คำสั่ง For loop \nกับ List ในภาษา Python",
  "numbers = [10, 20, 30, 40, 50]",
  "for n in numbers:\n    print(n)",
  "ผลลัพธ์คือ 10 20 30 40 50 ",
  "ให้เพิ่มจำนวนสมาชิกให้ถึง 8 \nจำนวนด้วยเมธอด append ",
  "และใช้คำสั่ง for loop แสดงค่าออกมา"
]

var conver_5 = ["ให้ซื้อชุดเกราะกับพ่อค้า",
  "โดยสร้าง List เก็บ string \nเป็นชนิดของอุปกรณ์แต่ละชิ้น",
  "ซึ่งอุปกรณ์มีดังนี้\n\"helmet\" \"armor\" \"weapon\" \"boots\"",
  "ให้แสดงค่าออกมาด้วยคำสั่ง for loop",
]

var conver_6 = ["ตอนนี้อุปกรณ์เจ้าพร้อมแล้ว",
  "ข้าจะไปส่งเจ้าที่ป่าให้ออกเดินทาง",
  "ไปปราบจอมมาร",
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
  self.inventory.destroy()
  self.xSign.destroy()
}


function resultCompile(responseTxt, n) {

  if (responseTxt.length < 50) {

    if (c_compiler == 4) {
      var count = 0
      var res = responseTxt.split("\n")
      res = res.filter(function (str) {
        return /\S/.test(str);
      });
      console.log("res", res)
      var all = ['helmet', 'armor', 'weapon', 'boots']
      for (var i = 0; i <= 3; i++) {
        console.log("i", res[i])
        for (var j = 0; j <= 3; j++) {
          console.log("j", all[j])
          if (res[i].trim() == all[j].trim()) {
            count += 1
          }
        }
      }

      if (count != 4) {
        self.textInBox.destroy()
        self.dialogBox.destroy()
        self.button.destroy()

        self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        self.button = game.add.button(930, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(630, 170, "อุปรกณ์ยังไม่ครบ !!", {
          fontSize: '15px',
        })
        console.log(count)
      } else {
        stopState = 1
        c_compiler = 5
      }
    }
    if (c_compiler == 3) {
      var res = responseTxt.split("\n")
      res = res.filter(function (str) {
        return /\S/.test(str);
      });

      if (res.length != 8) {
        self.textInBox.destroy()
        self.dialogBox.destroy()
        self.button.destroy()

        self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        self.button = game.add.button(930, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(630, 170, "สมาชิกไม่ครบ 8 จำนวน!!", {
          fontSize: '15px',
        })
      } else {
        self.textInBox.destroy()
        self.button.destroy()
        self.dialogBox.destroy()

        self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
        self.button = game.add.button(410, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(110, 170, res, {
          fontSize: '15px',
        })
        c_compiler = 4

      }
    }

    if (c_compiler == 2) {
      if (responseTxt == 3) {
        self.textInBox.destroy()
        self.button.destroy()
        self.dialogBox.destroy()
        self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
        self.button = game.add.button(410, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(110, 170, "ค่าลำดับที่ 2 คือ " + responseTxt, {
          fontSize: '15px',
        })
        c_compiler = 3
      } else {
        self.textInBox.destroy()
        self.dialogBox.destroy()
        self.button.destroy()

        self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        self.button = game.add.button(930, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(630, 170, "ยังไม่ใช่ค่าลำดับที่ 2 นะ", {
          fontSize: '15px',
        })
      }
    }

    if (c_compiler == 1) {
      if (responseTxt == ex_compiler) {
        self.textInBox.destroy()
        self.dialogBox.destroy()
        self.button.destroy()

        self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        self.button = game.add.button(930, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(630, 170, "เจ้ายังไม่ได้เพิ่มสมาชิก\nโดยใช้เมธอด append เลย", {
          fontSize: '15px',
        })
      } else {
        self.textInBox.destroy()
        self.button.destroy()
        self.dialogBox.destroy()
        self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
        self.button = game.add.button(410, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(110, 170, "จำนวนใน List เพิ่มเป็น " + responseTxt.trim() + " แล้ว", {
          fontSize: '15px',
        })
        c_compiler = 2
      }
    }
    if (c_compiler == 0) {
      self.textInBox.destroy()
      self.button.destroy()
      self.dialogBox.destroy()
      self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
      self.button = game.add.button(410, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(110, 170, "จำนวนสมาชิกใน List คือ " + responseTxt, {
        fontSize: '15px',
      })
      c_compiler = 1
      ex_compiler = responseTxt
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

    self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
    self.button = game.add.button(930, 180, 'button', actionOnClick, this)
    self.textInBox = game.add.text(630, 170, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 9) {
      check_conver = 1
      current_conver = 0
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    if (c_compiler == 1) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_2[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      if (current_conver == 4) {
        check_conver = 2
        current_conver = 0
      }
    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    if (c_compiler == 2) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_3[current_conver], {
        fontSize: '15px',
      })
      current_conver++

      if (current_conver == 6) {
        check_conver = 3
        current_conver = 0
      }
    }
  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    if (c_compiler == 3) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_4[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      if (current_conver == 9) {
        check_conver = 4
        current_conver = 0
      }
    }
  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    if (c_compiler == 4) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_5[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      if (current_conver == 4) {
        check_conver = 5
        current_conver = 0
      }
    }
  } else if (conver_6[current_conver] != undefined && check_conver == 5) {
    if (c_compiler == 5) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_6[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      if (current_conver == 3) {
        check_conver = 6
        current_conver = 0
        playerState = 3
        wizardState = 3
        self.textInBox.destroy()
        self.dialogBox.destroy()
        self.button.destroy()
      }
    }
  } else {
    current_conver--
  }
}


var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_3.png');
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
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
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
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music');
    this.music.play();


    this.dealer = game.add.sprite(490, 150, 'dealer')
    this.dealer.animations.add('walk', [0, 1], 5, true)

    this.player = game.add.sprite(750, 700, 'playerWalkLeft')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(750, 600, 'wizardLeft')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.dealer.animations.play('walk')
    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

  },

  update: function () {

    if (playerState == 0) {
      if (this.player.y > 230) {
        this.player.y -= speedCharacter
      } else {
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandLeft')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
        playerState = 1
      }
    }

    if (wizardState == 0) {
      if (this.wizard.y > 230) {
        this.wizard.y -= speedCharacter
      } else {
        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')
        wizardState = 1
      }
    }

    if (playerState == 1) {
      if (this.player.x > 400) {
        this.player.x -= speedCharacter
      } else {
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRight')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
        playerState = 2
      }
    }

    if (wizardState == 1) {
      if (this.wizard.x > 550) {
        this.wizard.x -= speedCharacter
      } else {
        this.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        this.textInBox = game.add.text(630, 170, conver_1[current_conver], {
          fontSize: '15px',
        })
        this.button = game.add.button(930, 180, 'button', actionOnClick, this)
        wizardState = 2
      }
    }

    if (stopState == 1) {
      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(150, 50, 'dialogBoxRight')
      self.button = game.add.button(500, 80, 'button', actionOnClick, this)

      stopState = 2
      console.log(this.player.x)
    }

    if (stopState == 2) {
      this.item_helmet = game.add.image(180, 70, 'helmet');
      this.item_helmet.scale.setTo(0.5, 0.5)
      stopState = 3
    }

    if (stopState == 3) {
      if (this.item_helmet.y != 300) {
        this.item_helmet.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_helmet.x != 400) {
        this.item_helmet.x += 5
      }

      if (this.item_helmet.y == 214 && this.item_helmet.x == 400) {
        this.item_helmet.destroy()
        stopState = 4
      }
    }

    if (stopState == 4) {
      this.item_armor = game.add.image(180, 70, 'armor');
      this.item_armor.scale.setTo(0.5, 0.5)
      stopState = 5
    }
    if (stopState == 5) {
      if (this.item_armor.y != 300) {
        this.item_armor.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_armor.x != 400) {
        this.item_armor.x += 5
      }

      if (this.item_armor.y == 214 && this.item_armor.x == 400) {
        this.item_armor.destroy()
        stopState = 6
      }
    }

    if (stopState == 6) {
      this.item_weapon = game.add.image(180, 70, 'weapon');
      this.item_weapon.scale.setTo(0.5, 0.5)
      stopState = 7
    }
    if (stopState == 7) {
      if (this.item_weapon.y != 300) {
        this.item_weapon.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_weapon.x != 400) {
        this.item_weapon.x += 5
      }

      if (this.item_weapon.y == 214 && this.item_weapon.x == 400) {
        this.item_weapon.destroy()
        stopState = 8
      }
    }

    if (stopState == 8) {
      this.item_boots = game.add.image(180, 70, 'boots');
      this.item_boots.scale.setTo(0.5, 0.5)
      stopState = 9
    }
    if (stopState == 9) {
      if (this.item_boots.y != 300) {
        this.item_boots.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_boots.x != 400) {
        this.item_boots.x += 5
      }

      if (this.item_boots.y == 214 && this.item_boots.x == 400) {
        this.item_boots.destroy()
        stopState = 10
        self.dialogBox.destroy()
        self.button.destroy()
      }
    }

    if (stopState == 10) {
      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_6[current_conver], {
        fontSize: '15px',
      })
      stopState = 11
    }

    if (playerState == 3 && wizardState == 3) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
      this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('walk')
      wizardState = 4
    }

    if (wizardState == 4) {
      this.wizard.x += speedCharacter
      this.player.x += speedCharacter

    }
    if (this.player.x == 1200) {

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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 5 ,'list' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 5  AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })

        var updateInventory_armor = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'armor' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name FROM inventory WHERE item_name = 'armor' ) LIMIT 1",
          }
        })

        var updateInventory_helmet = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'helmet' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name FROM inventory WHERE item_name = 'helmet' ) LIMIT 1",
          }
        })

        var updateInventory_weapon = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'weapon' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name FROM inventory WHERE item_name = 'weapon' ) LIMIT 1",
          }
        })

        var updateInventory_boots = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'boots' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name FROM inventory WHERE item_name = 'boots' ) LIMIT 1",
          }
        })

        console.log("pass")
        window.location.href = "/story_1"
      })
    }

  },
};


game.state.add('main', mainState);
game.state.start('main');