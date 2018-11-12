var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameTest');

// var conver = ["welcome 1st", "welcome 2nd", "33333", "44444", "55555"]
var conver = ["สวัสดี เจ้าอยู่ในโลกของ Pythonโลกของภาษาคอมพิวเตอร์",
  "ที่ทุกๆอย่างคือการใช้คำสั่งในภาษาไพทอน",
  "เอาล่ะ ข้าจะสอนการแสดงผลทางหน้าจอโดยใช้คำสั่ง print ",
  "หากข้าต้องการแสดงผลเป็นคำว่า HELLO WORLD",
  "ข้าก็จะเขียนแบบนี้ print(\"HELLO WORLD\")",
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

var current_conver = 0
var self
var check_conver = 0

function test(txt) {
  console.log("this is log:" + txt)
  self.testText.destroy()
  self.testText = game.add.text(130, 220, "ผมชื่อว่า " + txt, {
    fontSize: '15px',
  })
  check_conver = 1
  current_conver = 0
}

function actionOnClick() {
  console.log(conver[current_conver])
  if (conver[current_conver] != undefined && check_conver == 0) {
    this.testText.destroy()
    this.testText = game.add.text(130, 220, conver[current_conver], {
      fontSize: '15px',
    })
    current_conver++
  }else if(conver_2[current_conver] != undefined && check_conver == 1){
    this.testText.destroy()
    this.testText = game.add.text(130, 220, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
  }
}

function runCode() {

}

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map.png');
    game.load.spritesheet('playerWalkRight', 'client/images/player-walk-right.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.image('textBox', 'client/images/text-box-right.png')
    game.load.spritesheet('button', 'client/images/button.png')

  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(0.72, 0.8)

    this.player = game.add.sprite(-50, 320, 'playerWalkRight')
    this.player.smoothed = false

    this.wizard = game.add.sprite(320, 320, 'wizardLeft')
    this.wizard.animations.add('left', [0, 1, 2, 3], 5, true)

    this.player.animations.add('right', [0, 1, 2, 3], 5, true)

    this.player.frame = 0
    // this.player.body.velocity.x = 80
    this.player.animations.play('right')
    this.wizard.animations.play('left')



    // console.log(this.player.position.x)
  },

  update: function () {
    if (this.player.x < 150) {
      this.player.x += 2
    } else if (this.player.x == 150) {
      this.player.destroy()
      this.player = game.add.sprite(150, 320, 'playerStandRight')
      this.player.animations.add('right', [0, 1, 2, 3], 5, true)
      this.player.frame = 0
      this.player.animations.play('right')

      this.textBox = game.add.image(100, 200, 'textBox')

      // this.testText
      this.testText = game.add.text(130, 220, conver[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      this.button = game.add.button(440, 230, 'button', actionOnClick, this)
      this.player.x += 2
    } else {
      return
      // this.play.animations.play('right')
      this.player = game.add.sprite(150, 320, 'playerStandRight')
      this.player.smoothed = false

      this.player.animations.add('right', [0, 1, 2, 3], 5, true)

      this.player.frame = 0
      // this.player.body.velocity.x = 80  
      this.player.animations.play('right')
    }
    console.log(this.player.x)
  },
};

game.state.add('main', mainState);
game.state.start('main');