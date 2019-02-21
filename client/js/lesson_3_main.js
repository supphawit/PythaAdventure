var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 10
var playerState = 0
var wizardState = 0
var stopState = 0
var tmpResponse

var conver_1 = ["คนนี้คือพ่อค้า",
  "เจ้าสามารถซื้อของจากเขาได้",
  "จะให้จ้าซื้อแอปเปิ้ลจากเขา",
  "มันลูกละ 10g เจ้ามีแค่ 50g \nดังนั้นซื้อได้แค่ 5 ลูก",
  "โดยใช้คำสั่ง for ในการวนลูปเอาค่าออกมา",
  "ยกตัวอย่าง",
  "for i in range(1,3):\n    print(i)",
  "ไหนลองดู"
]

var conver_2 = ["เจ้าอยากจะซื้อแอปเปิ้ลงั้นเหรอ?",
  "ต้องการกี่ลูกล่ะ?",
]

var conver_3 = ["?",
  "?",
]

function showInventory() {

  if(typeof self.inventory !== "undefined"){
    self.inventory.destroy()
    self.xSign.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory');
  self.inventory.scale.setTo(0.6,0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8,0.8)
}

function closeInventory(){
  self.inventory.destroy()
  self.xSign.destroy()
}


function resultCompile(responseTxt, n) {
  // console.log(responseTxt)
  // tmpResponse = responseTxt.split("\n").length
  if (responseTxt < 50) {

    if (responseTxt == 0) return;

    self.button.destroy()
    self.textInBox.destroy()
    // self.dialogBox = game.add.image(150, 50, 'dialogBoxRight')
    self.button = game.add.button(500, 80, 'button', actionOnClick, this)
    self.textInBox = game.add.text(240, 70, n, {
      fontSize: '30px',
    })

    setTimeout(function () {
      self.item_apple = game.add.image(180, 70, 'item_apple');

      self.item_apple.scale.setTo(0.1, 0.1)
      moveToPlayer()
      resultCompile(--responseTxt, n + 1);

    }, 1300);

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

function moveToPlayer() {
  stopState = 10
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
    if (current_conver == 6) {
      check_conver = 1
      current_conver = 0
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(150, 50, 'dialogBoxRight')
    self.button = game.add.button(500, 80, 'button', actionOnClick, this)
    self.textInBox = game.add.text(180, 70, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver >= 2) {
      check_conver = 2
      current_conver = 0
    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    self.textInBox.destroy()
    self.dialogBox.destroy()
    self.button.destroy()

    self.dialogBox = game.add.image(150, 50, 'dialogBoxRight')
    // self.button = game.add.button(790, 130, 'button', actionOnClick, this)
    // self.textInBox = game.add.text(480, 120, conver_3[current_conver], {
    //   fontSize: '15px',
    // })
    // current_conver++
    // if (current_conver == 5) {
    //   playerState = 10
    // }
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
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')   
    game.load.image('inventory', 'client/images/inventory.png')   
    game.load.image('xSign', 'client/images/xSign.png')   
  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu');
    this.menu.scale.setTo(2,2)
    this.backpack = game.add.button(1000, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)

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
      this.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      this.textInBox = game.add.text(630, 170, conver_1[current_conver], {
        fontSize: '15px',
      })
      this.button = game.add.button(930, 180, 'button', actionOnClick, this)
    }

    if (stopState == 10) {
      if (this.item_apple.y != 300) {
        this.item_apple.y += 2
        console.log( this.item_apple.y)
      }

      if (this.item_apple.x != 450) {
        this.item_apple.x += 5
      }

      if (this.item_apple.y == 214 && this.item_apple.x == 450) {
        this.item_apple.destroy()
      }

    }
  },
};


game.state.add('main', mainState);
game.state.start('main');