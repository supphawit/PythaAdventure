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
var checkState = 0
var item_inventory = []
var monsterState = 0
var skill = 0


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
    // console.log(item_inventory[0][0])
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

function fireFunc() {
  self.fireDialog = game.add.image(805, 75, 'errorText')
  self.fireDialog.scale.setTo(2.5, 2.5)
  self.deleteFireButton = game.add.button(1050, 80, 'xSign', deleteFire, this)
  self.deleteFireButton.scale.setTo(0.75, 0.75)
  self.fire_symDialog = game.add.image(820, 90, 'fire_sym')
  self.textFire = game.add.text(860, 87, "สามารถโจมตีด้วยลูกไฟ\nได้ผลดีกับมอนสเตอร์ไม้", {
    fontSize: '15px',
  })

}

function deleteFire() {
  self.fireDialog.destroy()
  self.deleteFireButton.destroy()
  self.fire_symDialog.destroy()
  self.textFire.destroy()
}

function iceFunc() {
  self.iceDialog = game.add.image(805, 75, 'errorText')
  self.iceDialog.scale.setTo(2.5, 2.5)
  self.deleteIceButton = game.add.button(1050, 80, 'xSign', deleteFire, this)
  self.deleteIceButton.scale.setTo(0.75, 0.75)
  self.ice_symDialog = game.add.image(820, 90, 'fire_sym')
  self.textIce = game.add.text(860, 87, "สามารถโจมตีด้วยน้ำแข็ง\nได้ผลดีกับมอนสเตอร์หุ่นยนต์", {
    fontSize: '15px',
  })

}

function deleteIce() {
  self.iceDialog.destroy()
  self.deleteIceButton.destroy()
  self.ice_symDialog.destroy()
  self.textIce.destroy()
}

function indent() {
  $(document).ready(function () {
    $("#indent").modal()
  })
}

function parentheses() {
  $(document).ready(function () {
    $("#parent").modal()
  })
}

function EOL() {
  $(document).ready(function () {
    $("#EOL").modal()
  })
}

function otherError() {
  console.log("read error message")
}