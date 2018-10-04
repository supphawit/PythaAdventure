var canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

var c = canvas.getContext('2d')

var playerPic = new Image();
var dialog = new Image()
var wizardPic = new Image()

playerPic.onload = function () {
  c.drawImage(playerPic, 50, 520, 200, 200);
};
playerPic.src = 'client/images/character.png';

wizardPic.onload = function () {
  c.drawImage(wizardPic, 600, 520, 200, 200);
};
wizardPic.src = 'client/images/wizard.png';

var ui = new Image()
ui.onload = function () {
  c.drawImage(ui, 100, 150, 1200, 200);
  var txt = "สมศรี"
  c.font = '30px sans-serif'
  c.fillText("What is your name?", 150, 200);

}
ui.src = 'client/images/ui-textbox.png'

// function Circle(x, y, dx, dy, radius) {
//   this.x = x;
//   this.y = y;
//   this.dx = dx;
//   this.dy = dy
//   this.radius = radius

//   this.draw = function () {
//     c.lineWidth = 5
//     c.beginPath()
//     c.arc(this.x, this.y, 40, Math.PI * 2, false)
//     c.strokeStyle = "Red"
//     c.fill()
//     c.stroke()
//   }

//   this.update = function () {
//     if (this.x + this.radius + 5 > innerWidth || this.x - this.radius - 5 < 0) {
//       this.dx = -this.dx
//     }
//     if (this.y + this.radius + 5 > innerHeight || this.y - this.radius - 5 < 0) {
//       this.dy = -this.dy
//     }
//     this.x += this.dx
//     this.y += this.dy
//     this.draw()
//   }
// }

// var circleArray = []

// for (var i = 0; i < 100; i++) {
//   var radius = 30
//   var x = Math.random() * (innerWidth + radius * 2) + radius
//   var y = Math.random() * (innerHeight + radius * 2) + radius
//   var dx = (Math.random() - 0.5) *8
//   var dy = (Math.random() - 0.5) *8
//   circleArray.push(new Circle(x, y, dx, dy, radius))

// }

// function animate() {
//   requestAnimationFrame(animate)

//   c.clearRect(0, 0, innerWidth, innerHeight)

//   for (var i = 0; i < circleArray.length; i++) {
//     circleArray[i].update()
//   }

// }

// animate()