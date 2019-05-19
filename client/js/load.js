var current_conver = 0
var self
var check_conver = 0
var speedCharacter = 5
var playerState = 0
var wizardState = 0
var stopState = 0
var attackState = 0
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

    console.log(data)
    data.forEach(element => {
      console.log(element['item_name'])
      switch (element['item_name']) {
        case 'apple':
          self.item_apple = game.add.image(405, 300, 'item_apple')
          self.item_apple.scale.setTo(0.1, 0.1)
          self.text_apple = game.add.text(440, 320, element['amount'], {
            fontSize: '15px',
          })
          break
      }
    })
    // item_inventory.push([data[0].item_name, data[0].amount])
    // // console.log(item_inventory[0][0])
    // self.item_apple = game.add.image(405, 300, 'item_' + item_inventory[0][0]);
    // self.item_apple.scale.setTo(0.1, 0.1)
    // self.text_apple = game.add.text(440, 320, item_inventory[0][1], {
    //   fontSize: '15px',
    // })

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
  self.item_apple.destroy()
  self.text_apple.destroy()
  self.inventory.destroy()
  self.xSign.destroy()
}

function showInventoryStory() {


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
  self.xSign = game.add.button(625, 65, 'xSign', closeInventoryStory, this)
  self.xSign.scale.setTo(0.8, 0.8)

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

    item_inventory.forEach(element => {
      // console.log(element)
      switch (element[0]) {
        case 'apple':
          self.item_apple = game.add.image(405, 300, 'item_apple')
          self.item_apple.scale.setTo(0.1, 0.1)
          self.text_apple = game.add.text(440, 320, element[1], {
            fontSize: '15px',
          })
          break

        case 'armor':
          self.item_armor = game.add.image(507, 58, 'armor')
          self.item_armor.scale.setTo(0.5, 0.5)
          break

        case 'boots':
          self.item_boots = game.add.image(507, 130, 'boots')
          self.item_boots.scale.setTo(0.5, 0.5)
          break

        case 'helmet':
          self.item_helmet = game.add.image(392, 105, 'helmet')
          self.item_helmet.scale.setTo(0.35, 0.35)
          break

        case 'weapon':
          self.item_weapon = game.add.image(374, 162, 'weapon')
          self.item_weapon.scale.setTo(0.5, 0.5)
          break
      }
    });


  })

  item_inventory = []
}


function closeInventoryStory() {

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



function closeDialog() {
  self.textInBox.destroy()
  self.dialogBox.destroy()
  self.button.destroy()
  self.back.destroy()
  self.current_text.destroy()
}

function deleteErrorButton() {

  if (typeof self.errorButton !== "undefined") {
    self.errorButton.destroy()
  }

  if (typeof self.errorTextDialog !== "undefined") {
    self.errorTextDialog.destroy()
  }

  if (typeof self.textErrorInBox !== "undefined") {
    self.textErrorInBox.destroy()
  }

  if (typeof self.textViewMore !== "undefined") {
    self.textViewMore.destroy()
  }

  if (typeof self.more !== "undefined") {
    self.more.destroy()
  }

  if (typeof self.showErrModal !== "undefined") {
    self.showErrModal.destroy()
  }
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
  if (typeof self.fireDialog !== "undefined") {
    self.fireDialog.destroy()
    self.deleteFireButton.destroy()
    self.fire_symDialog.destroy()
    self.textFire.destroy()
  }
  self.fireDialog = game.add.image(805, 75, 'errorText')
  self.fireDialog.scale.setTo(2.5, 2.5)
  self.deleteFireButton = game.add.button(1050, 80, 'xSign', deleteFire, this)
  self.deleteFireButton.scale.setTo(0.75, 0.75)
  self.fire_symDialog = game.add.image(820, 90, 'fire_sym')
  self.textFire = game.add.text(860, 95, "ใช้ได้โดยเขียนฟังก์ชันและ\nreturn คำว่า FIRE", {
    fontSize: '15px',
  })

}

function deleteFire() {
  self.fireDialog.destroy()
  self.deleteFireButton.destroy()
  self.fire_symDialog.destroy()
  self.textFire.destroy()
}

function delBomb() {
  this.bomb.destroy()
}

function iceFunc() {
  if (typeof self.iceDialog !== "undefined") {
    self.iceDialog.destroy()
    self.deleteIceButton.destroy()
    self.ice_symDialog.destroy()
    self.textIce.destroy()
  }
  self.iceDialog = game.add.image(805, 75, 'errorText')
  self.iceDialog.scale.setTo(2.5, 2.5)
  self.deleteIceButton = game.add.button(1050, 80, 'xSign', deleteIce, this)
  self.deleteIceButton.scale.setTo(0.75, 0.75)
  self.ice_symDialog = game.add.image(820, 90, 'ice_sym')
  self.textIce = game.add.text(860, 95, "ใช้ได้โดยเขียนฟังก์ชันและ\nreturn คำว่า ICE", {
    fontSize: '15px',
  })

}

function deleteIce() {
  self.iceDialog.destroy()
  self.deleteIceButton.destroy()
  self.ice_symDialog.destroy()
  self.textIce.destroy()
}

function ice_fireFunc() {
  if (typeof self.ice_fireDialog !== "undefined") {
    self.ice_fireDialog.destroy()
    self.deleteIceFireButton.destroy()
    self.ice_fire_symDialog.destroy()
    self.textIce_Fire.destroy()
  }
  self.ice_fireDialog = game.add.image(760, 75, 'errorText')
  self.ice_fireDialog.scale.setTo(3.2, 3.2)
  self.deleteIceFireButton = game.add.button(1075, 80, 'xSign', deleteIceFire, this)
  self.deleteIceFireButton.scale.setTo(0.75, 0.75)
  self.ice_fire_symDialog = game.add.image(775, 90, 'ice_fire_sym')
  self.textIce_Fire = game.add.text(815, 95, "ใช้โดยการเขียนฟังก์ชันไฟและน้ำแข็ง\nโดยมี list เก็บค่าและใช้ for \nแสดงค่าออกมาว่า ICE FIRE ", {
    fontSize: '15px',
  })

}

function deleteIceFire() {
  self.ice_fireDialog.destroy()
  self.deleteIceFireButton.destroy()
  self.ice_fire_symDialog.destroy()
  self.textIce_Fire.destroy()
}



function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
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