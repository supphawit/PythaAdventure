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
var wear_check = 0
var change_wear = 0

var conver_1 = ["นั่นมันมอนสเตอร์นี่ !!",
  "เจ้าสามารถกำจัดมันได้",
  "ด้วยการเขียน function",
  "และ return ค่าเป็น \"Attack\"",
]

var conver_2 = ["เจ้าสามารถกำจัดมันไปได้ !!",
  "ด้วยพลังของเจ้า สามารถเอาชนะจอมมารได้",
  "ข้าหมดความจำเป็นสำหรับเจ้าแล้ว",
  "ไปต่อสู้กับจอมมารเถอะ",
]

var conver_3 = ["ถูกต้อง !!",
  "ไปกันต่อเถอะ",
]

function showInventory() {

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
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8, 0.8)
}

function closeInventory() {

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

function resultCompile(responseTxt) {
  // console.log((responseTxt))
  // console.log(("I want to go".length))
  if (responseTxt.length < 50) {
    // checkState = 1
    self.textInBox.destroy()
    self.button.destroy()
    self.dialogBox.destroy()

    if (responseTxt.trim() == "Attack") {
      playerState = 3
      wizardState = 3
      console.log(playerState)
    }
  } else {

    // self.dialogBox.destroy()
    // self.button.destroy()
    self.errorTextDialog = game.add.image(250, 50, 'errorText')
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

    self.dialogBox = game.add.image(400, 50, 'dialogBoxLeft')
    self.textInBox = game.add.text(430, 70, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.button = game.add.button(740, 80, 'button', actionOnClick, this)
    current_conver++
    if (current_conver == 4) {
      check_conver = 1
      current_conver = 0
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {

    if (checkState == 2) {

      self.textInBox.destroy()
      self.dialogBox.destroy()
      self.button.destroy()

      self.dialogBox = game.add.image(400, 50, 'dialogBoxLeft')
      self.textInBox = game.add.text(430, 70, conver_2[current_conver], {
        fontSize: '15px',
      })
      self.button = game.add.button(740, 80, 'button', actionOnClick, this)
      current_conver++

      if (current_conver == 4) {
        check_conver = 2
        checkState = 3
        current_conver = 0
      }
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(400, 50, 'dialogBoxLeft')
    self.textInBox = game.add.text(430, 70, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.button = game.add.button(740, 80, 'button', actionOnClick, this)
    current_conver++

    if (current_conver == 2) {
      stopState = 3
      check_conver = 3
      current_conver = 0
    }


  } else {
    current_conver--
  }
}


var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_00.png')
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerWalkLeft', 'client/images/player-walk-left.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('playerWalkingDown', 'client/images/player-walk-down.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('dealer', 'client/images/dealer.png', 128, 128)
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
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
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
    this.backpack = game.add.button(1000, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)

    this.player = game.add.sprite(-100, 150, 'playerStandRight')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.wizard = game.add.sprite(-200, 150, 'wizardRight')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.monster1 = game.add.sprite(850, 300, 'monster1')
    this.monster1.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.monster1.scale.setTo(0.5, 0.5)

    this.player.animations.play('walk')
    this.wizard.animations.play('walk')
    this.monster1.animations.play('walk')

  },

  update: function () {
    if (playerState == 0) {
      this.player.x += speedCharacter
      if (this.player.x == 250) {
        playerState = 1
      }
    }

    if (wizardState == 0) {
      this.wizard.x += speedCharacter
      if (this.wizard.x == 350) {
        wizardState = 1
      }
    }

    if (wizardState == 1 && playerState == 1) {
      this.dialogBox = game.add.image(400, 50, 'dialogBoxLeft')
      this.textInBox = game.add.text(430, 70, conver_1[current_conver], {
        fontSize: '15px',
      })
      this.button = game.add.button(740, 80, 'button', actionOnClick, this)
      playerState = 2
    }

    if (wizardState == 3 && playerState == 3 && checkState == 0) {
      this.attack = game.add.sprite(350, 220, 'fire')
      this.attack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.attack.animations.play('play')
      checkState = 1
      stopState = 1
      console.log("SJDFK:SJ")
    }

    if (checkState == 1) {
      this.attack.x += 5

      if (this.attack.x == 850) {
        checkState = 2
        this.attack.destroy()
        this.monster1.destroy()
        this.bomb = game.add.sprite(850, 300, 'bomb')
        this.bomb.animations.add('play', [0, 1, 2, 3], 5, true)
        this.bomb.animations.play('play')
      }

    }

    if (stopState == 1) {
      this.attack.y += 1

      if (this.attack.y == 300) {
        stopState = 2
      }
    }

    if (checkState == 2) {
      this.dialogBox = game.add.image(400, 50, 'dialogBoxLeft')
      this.textInBox = game.add.text(430, 70, conver_2[current_conver], {
        fontSize: '15px',
      })
      this.button = game.add.button(740, 80, 'button', actionOnClick, this)
      playerState = 2

    }

    if (wear_check == 1 && change_wear == 0) {
      this.player.destroy()
      this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRightWearing')
      this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.player.animations.play('walk')
      change_wear = 1
    }



    // if (this.player.x == 1000) {

    //   $(document).ready(function () {

    //     var userSession = $.ajax({
    //       url: '/getUser',
    //       type: "GET",
    //       async: false,
    //     }).responseText
    //     var userJson = JSON.parse(userSession)

    //     var updateUser = $.ajax({
    //       type: "POST",
    //       url: '/updateByQuery',
    //       data: {
    //         query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) VALUES ('" + userJson.email + "', 5 ,'123' )",
    //       }
    //     })

    //     console.log("pass")
    //     window.location.href = "/lesson_5"

    //   })

    // }


  },
}


game.state.add('main', mainState)
game.state.start('main')