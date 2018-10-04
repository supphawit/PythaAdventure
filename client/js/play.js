var game = new SVGPathSegArcRel.Game(480, 360, Phaser.canvas, null,'gameDiv')

var mainState ={
  preload: function(){

  },
  create:function(){

  },
  update:function(){

  }
}

game.state.add('mainState', mainState)
game.state.start('mainState')