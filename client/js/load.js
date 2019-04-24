var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 10
var playerState = 0
var wizardState = 0
var stopState = 0
var tmpResponse
var position_dialog_x
var position_dialog_y
var state_compile
var press_back = 0
var messageErr

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

  if (typeof self.inventory !== "undefined") {
    self.inventory.destroy()
    self.xSign.destroy()
  }
  self.inventory = game.add.image(350, 50, 'inventory')
  self.inventory.scale.setTo(0.6, 0.6)
  self.xSign = game.add.button(625, 65, 'xSign', closeInventory, this)
  self.xSign.scale.setTo(0.8, 0.8)

}

function closeInventory() {
  self.inventory.destroy()
  self.xSign.destroy()
}

function closeDialog() {
  self.textInBox.destroy()
  self.dialogBox.destroy()
  self.button.destroy()
  self.back.destroy()
  self.current_text.destroy()
}

function deleteErrorButton() {
  self.errorButton.destroy()
  self.errorTextDialog.destroy()
  self.textErrorInBox.destroy()
  self.textViewMore.destroy()
  self.more.destroy()
  self.showErrModal.destroy()
}

function viewMore(errCode) {
  self.textErrorInBox.destroy()
  self.textViewMore.destroy()
  self.more.destroy()
  self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
    fontSize: '15px',
  })
  self.errorButton = game.add.button(750, 160, 'xSign', deleteErrorButton, this)
  self.showErrModal.destroy()
}


function indent() {
  $(document).ready(function () {
    $("#indent").modal()
  })
}

function parentheses() {
  $(document).ready(function () {
    $("#parentheses").modal()
  })
}

function EOL() {
  $(document).ready(function () {
    $("#EOL").modal()
  })
}
