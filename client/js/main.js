var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameTest');

var conver = ["welcome 1st", "welcome 2nd", "33333", "44444", "55555"]
var current_conver = 0

function actionOnClick() {
  console.log(conver[current_conver])
  if (conver[current_conver] != undefined) {
    this.testText.destroy()
    this.testText = game.add.text(130, 220, conver[current_conver], {
      fontSize: '15px',
    })
    // fill: '#ed3465',
    current_conver++
  }
}
function runCode (){
  
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

    this.textBox = game.add.image(100, 200, 'textBox')

    // this.testText
    this.testText = game.add.text(130, 220, conver[current_conver], {
      fontSize: '15px',
      // fill: '#ed3465',
    })
    current_conver++
    this.button = game.add.button(440, 230, 'button', actionOnClick, this)

    console.log(this.player.position.x)
  },

  update: function () {
    if (this.player.x < 150){
      this.player.x += 2
    }else if(this.player.x == 150){
      this.player.destroy()
      this.player.x += 2
    }else{
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