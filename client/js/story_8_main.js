var count = 0
var hp = 4
var chancePlayer = 5
// stopState = 80
// skill = 100

var conver_1 = ["ปราสาทของจอมมาร\nน้องสาวของเธอคนนั้นต้องอยู่ในนั้นแน่ๆ ",
  "คงต้องบุกเข้าไปชิงตัวกลับมาสินะ",
  ""
]

var conver_2 = ["มอนสเตอร์ขอนไม้เน่า !! ",
  "มาขวาทางงั้นเหรอ?\n",
  "กำจัดด้วยเวทมนซะ",
]
var conver_3 = ["มอนสเตอร์ปลาหมึกม่วง",
  "ครั้งก่อนต้องเขียนคำสั่งที่ซับซ้อน\nแต่ตอนนี้พลังเวทมนต์ได้เพิ่มขึ้นแล้ว",
  "สามารถใช้เวทมนต์จัดการได้เลย",
]

var conver_4 = ["มอนสเตอร์มังกร",
  "เจ้าตัวนี้ต้องกำจัดด้วยเวทมนต์แบบผสมเท่านั้น",
  "ใช้เวทมนต์นั้นซะ",
]

var conver_5 = ["ทำไมถึงได้ตื้อนักนะ",
  "จะต้องการอะไรกับแค่เด็กสาวคนเดียว",
  "ใช่คนนี้มั้ยสาวที่แกต้องการ",
  ""
]

var conver_6 = ["ช่วยด้วยค่าาาาาาาาาาา",
  "หนูโดนลักพาตัวมา พาหนูกลับบ้านที",
  ""
]

var conver_7 = ["อยากจะลองของใช่มั้ย",
  "มีอะไรก็ใส่เข้ามา ข้าพร้อมแล้ว ",
  ""
]

var conver_8 = ["โจมตีด้วยเวทมนต์ซักอย่าง !!",
  "โจมตีด้วยเวทมนต์ซักอย่าง !!"
]

var conver_9 = ["ขอบคุณที่ช่วยหนูนะ ",
  "ถ้าไม่ได้พี่ช่วยไว้หนูแย่แน่ๆเลย",
  ""
]

var conver_10 = ["รีบกลับหมู่บ้านกันเถอะ ",
  "พี่สาวของหนูรออยู่",
  "เค้าเป็นห่วงหนูมากๆนะ",
  ""
]

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {


    if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]") && responseTxt.includes("FIRE") && responseTxt.includes("ICE")) {

      closeDialog()
      position_dialog_x = 500
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE and ICE  !!", {
        fontSize: '15px',
      })

      attackState = 30

    } else if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && (responseTxt.includes("FIRE") || responseTxt.includes("ICE"))) {

      if (responseTxt.trim() == "FIRE") {
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
          fontSize: '15px',
        })
        attackState = 10
      } else if (responseTxt.trim() == "ICE") {
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ICE !!", {
          fontSize: '15px',
        })
        attackState = 20
      }

    } else if (press_back == 3) {
      if (originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]") && responseTxt.includes("FIRE") && responseTxt.includes("ICE")) {

        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE and ICE  !!", {
          fontSize: '15px',
        })

        if (chancePlayer > getRandomInt(10)) {
          skill = 10
        } else {
          skill = 100
        }

      } else if (originalCode.includes("def") && originalCode.includes("return") && (responseTxt.includes("FIRE") || responseTxt.includes("ICE"))) {

        if (responseTxt.trim() == "FIRE") {
          closeDialog()
          position_dialog_x = 500
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
            fontSize: '15px',
          })
          if (chancePlayer > getRandomInt(10)) {
            skill = 20
          } else {
            skill = 200
          }

        } else if (responseTxt.trim() == "ICE") {
          closeDialog()
          position_dialog_x = 500
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ICE !!", {
            fontSize: '15px',
          })
          if (chancePlayer > getRandomInt(10)) {
            skill = 30
          } else {
            skill = 300
          }
        }

      }



    } else if (press_back == 0) {
      closeDialog()

      position_dialog_x = 500
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ยังไม่พร้อมโจมตี !!", {
        fontSize: '15px',
      })
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && originalCode.includes("for") && originalCode.includes("[") && originalCode.includes("]") && responseTxt.includes("FIRE") && responseTxt.includes("ICE")) {

      closeDialog()
      // alert("mix")
      position_dialog_x = 500
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE and ICE  !!", {
        fontSize: '15px',
      })

      attackState = 30
    } else {
      closeDialog()

      position_dialog_x = 500
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ใช้สกิลผิดพลาดซะได้\nลองใหม่อีกที !!", {
        fontSize: '15px',
      })
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    }

  } else {

    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    if (tmpResponse.includes("indent")) {
      messageErr = "ผิดพลาด!!\nบล็อคหรือระยะห่างของคำสั่งถูกต้องหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', indent, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (tmpResponse.includes("Missing parentheses") || tmpResponse.includes("unexpected EOF while parsing")) {
      messageErr = "ผิดพลาด!!\nลืมใส่วงเล็บในตรงไหนหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', parentheses, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else if (tmpResponse.includes("EOL while scanning string literal")) {
      messageErr = "ผิดพลาด!!\nสัญลักษณ์ \" (double quote) หายไปหรือเปล่า?"
      self.showErrModal = game.add.button(690, 165, 'information', EOL, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
    } else {
      self.showErrModal = game.add.button(690, 165, 'information', otherError, this)
      self.showErrModal.scale.setTo(0.7, 0.7)
      messageErr = "ผิดพลาด!!\nความผิดพลาดนี้อยู่นอกเหนือความคาดหมาย\nกด View Code Error เพื่อดู?"
    }

    self.textErrorInBox = game.add.text(280, 80, messageErr, {
      fontSize: '20px',
    })
    self.textViewMore = game.add.text(725, 180, "View Code Error", {
      fontSize: '10px',
    })
    self.more = game.add.button(750, 160, 'more', viewMore, this)

  }
}

function actionOnClick() {

  // console.log("actionOnClick current_conver:", current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()
    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++

    if (current_conver >= 3) {
      closeDialog()
      stopState = 1
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()
    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver >= 3) {
      $(document).ready(function () {
        $("#story8-hint-1").modal()
      })
      press_back = 1
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      $(document).ready(function () {
        $("#story8-hint-1").modal()
        press_back = 1
      })
    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()
    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      $(document).ready(function () {
        $("#story8-hint-1").modal()
        press_back = 2
      })
    }

  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    closeDialog()
    position_dialog_x = 205
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      stopState = 60
    }

  } else if (conver_6[current_conver] != undefined && check_conver == 5) {
    closeDialog()
    position_dialog_x = 120
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      stopState = 70
    }

  } else if (conver_7[current_conver] != undefined && check_conver == 6) {
    closeDialog()
    position_dialog_x = 60
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      stopState = 80
    }

  } else if (conver_8[current_conver] != undefined && check_conver == 7) {
    closeDialog()
    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 1) {
      press_back = 3
    }

  } else if (conver_9[current_conver] != undefined && check_conver == 8) {
    closeDialog()
    position_dialog_x = 120
    position_dialog_y = 150
    this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_9[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      stopState = 100
      closeDialog()
    }

  } else if (conver_10[current_conver] != undefined && check_conver == 9) {
    closeDialog()
    position_dialog_x = 500
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      closeDialog()
      stopState = 200
    }

  }


}

function backward() {
  console.log(current_conver)
  if (current_conver > 1) {
    current_conver--
    closeDialog()

    switch (check_conver) {
      case 0:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 4:
        closeDialog()
        position_dialog_x = 205
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 5:
        closeDialog()
        position_dialog_x = 120
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 6:
        closeDialog()
        position_dialog_x = 60
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 7:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 8:
        closeDialog()
        position_dialog_x = 120
        position_dialog_y = 150
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_9[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 9:
        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver - 1], {
          fontSize: '15px',
        })
        break
    }

    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
      fontSize: '15px',
    })
  }
}



var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_story_8.png')
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.image('information', 'client/images/information.png')
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

    game.load.spritesheet('playerStandRightWearing', 'client/images/player-standing-right-wearing.png', 128, 128)
    game.load.spritesheet('playerStandLeftWearing', 'client/images/player-standing-left-wearing.png', 128, 128)
    game.load.spritesheet('villian-left', 'client/images/villian-left.png', 128, 128)
    game.load.spritesheet('villian-right', 'client/images/villian-right.png', 128, 128)
    game.load.spritesheet('lilgirl', 'client/images/lilgirl-right.png', 128, 128)
    game.load.spritesheet('bluefire', 'client/images/blue_fire.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.image('ice_sym', 'client/images/ice_sym.png')
    game.load.image('ice_fire_sym', 'client/images/ice_fire_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('ice', 'client/images/ice.png', 128, 128)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
    game.load.spritesheet('bigfire', 'client/images/bigfire.png', 100, 100)
    game.load.spritesheet('ice_fire', 'client/images/fire_ice.png', 128, 128)
    game.load.spritesheet('mixbomb', 'client/images/mix_explosion.png', 128, 126)
    game.load.spritesheet('spawn', 'client/images/spawn.png', 128, 126)
    game.load.spritesheet('defend', 'client/images/defend.png', 192, 192)
    game.load.spritesheet('bluefire', 'client/images/blue_fire.png', 128, 128)

    game.load.spritesheet('monster1', 'client/images/monster-2.png', 128, 128)
    game.load.spritesheet('monster2', 'client/images/monster-3.png', 128, 128)
    game.load.spritesheet('monster3', 'client/images/monster-6-right.png', 128, 128)
    game.load.spritesheet('heart', 'client/images/heart.png', 128, 128)


  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(0.833, 0.835)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    // this.music.play()

    this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    this.fire_sym.scale.setTo(0.9, 0.9)

    this.ice_sym = game.add.button(865, 29, 'ice_sym', iceFunc, this)
    this.ice_sym.scale.setTo(0.9, 0.9)

    this.ice_fire_sym = game.add.button(905, 29, 'ice_fire_sym', ice_fireFunc, this)
    this.ice_fire_sym.scale.setTo(0.9, 0.9)

    this.player = game.add.sprite(800, 600, 'playerStandLeftWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')




  },

  update: function () {

    if (playerState == 0) {
      this.player.y -= speedCharacter
      if (this.player.y <= 250) {
        playerState = 1
      }
    } else if (playerState == 1) {
      position_dialog_x = 500
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      current_conver++
      playerState = 2
    }

    if (stopState == 1) {
      this.spawn = game.add.sprite(150, 200, 'spawn')
      this.spawn.scale.setTo(2, 2)
      this.spawn.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 15, false)
      this.spawn.animations.play('play')
      check_conver = 1
      current_conver = 0
      stopState = 2
    } else if (stopState == 2) {
      stopState = 3
      sleep(1500).then(() => {
        this.monster1 = game.add.sprite(230, 250, 'monster1')
        this.monster1.scale.setTo(0.8, 0.8)
        this.monster1.animations.add('play', [0, 1], 5, true)
        this.monster1.animations.play('play')

        position_dialog_x = 500
        position_dialog_y = 150
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
          fontSize: '15px',
        })
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      })

    }

    if (stopState == 20) {
      this.spawn = game.add.sprite(150, 200, 'spawn')
      this.spawn.scale.setTo(2, 2)
      this.spawn.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 15, false)
      this.spawn.animations.play('play')
      check_conver = 2
      current_conver = 0
      stopState = 21
    } else if (stopState == 21) {
      stopState = 22
      sleep(1500).then(() => {
        this.monster1 = game.add.sprite(230, 250, 'monster2')
        this.monster1.scale.setTo(0.6, 0.6)
        this.monster1.animations.add('play', [0, 1], 5, true)
        this.monster1.animations.play('play')

        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
          fontSize: '15px',
        })

      })

    }

    if (stopState == 30) {
      this.spawn = game.add.sprite(150, 200, 'spawn')
      this.spawn.scale.setTo(2, 2)
      this.spawn.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23], 15, false)
      this.spawn.animations.play('play')
      check_conver = 3
      current_conver = 0
      stopState = 31
    } else if (stopState == 31) {
      stopState = 32
      sleep(1500).then(() => {
        this.monster1 = game.add.sprite(230, 250, 'monster3')
        this.monster1.scale.setTo(1.4, 1.4)
        this.monster1.animations.add('play', [0, 1, 2, 3], 5, true)
        this.monster1.animations.play('play')

        closeDialog()
        position_dialog_x = 500
        position_dialog_y = 150
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
          fontSize: '15px',
        })

      })

    }


    if (stopState == 40) {
      this.villian = game.add.sprite(165, 100, 'villian-right')
      this.villian.animations.add('play', [0, 1, 2, 3], 5, true)
      this.villian.animations.play('play')
      stopState = 41
    } else if (stopState == 41) {
      this.villian.y += speedCharacter
      if (this.villian.y >= 250) {
        stopState = 42
        check_conver = 4
        current_conver = 0
      }
    } else if (stopState == 42) {
      // closeDialog()
      position_dialog_x = 205
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver], {
        fontSize: '15px',
      })

      stopState = 43

    }


    if (stopState == 60) {
      this.littlegirl = game.add.sprite(165, 100, 'lilgirl')
      this.littlegirl.animations.add('play', [0, 1, 2, 3], 5, true)
      this.littlegirl.animations.play('play')
      stopState = 61
    } else if (stopState == 61) {
      this.littlegirl.y += speedCharacter
      this.littlegirl.x -= speedCharacter / 2
      if (this.littlegirl.y >= 250) {
        stopState = 62
        check_conver = 5
        current_conver = 0
      }
    } else if (stopState == 62) {
      closeDialog()
      position_dialog_x = 120
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver], {
        fontSize: '15px',
      })

      stopState = 66
    }

    if (stopState == 70) {
      this.villian.x += speedCharacter
      if (this.villian.x >= 350) {
        stopState = 71
        check_conver = 6
        current_conver = 0
      }
    } else if (stopState == 71) {
      closeDialog()
      position_dialog_x = 60
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver], {
        fontSize: '15px',
      })
      stopState = 72
    }

    if (stopState == 80) {
      this.heart_bar = game.add.image(515, 80, 'menu')
      this.heart_bar.scale.setTo(2, 2)
      this.heart1 = game.add.sprite(550, 95, 'heart')
      this.heart1.scale.setTo(0.3, 0.3)
      this.heart2 = game.add.sprite(600, 95, 'heart')
      this.heart2.scale.setTo(0.3, 0.3)
      this.heart3 = game.add.sprite(650, 95, 'heart')
      this.heart3.scale.setTo(0.3, 0.3)
      this.heart4 = game.add.sprite(700, 95, 'heart')
      this.heart4.scale.setTo(0.3, 0.3)
      closeDialog()
      stopState = 81
      check_conver = 7
      current_conver = 0
    } else if (stopState == 81) {
      position_dialog_x = 500
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver], {
        fontSize: '15px',
      })
      press_back = 3
      stopState = 82
    }

    // FIRE ATTACK
    if (attackState == 10) {
      count += 1
      this.fireAttack = game.add.sprite(this.player.x - 80, this.player.y - 30, 'bigfire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 12
    } else if (attackState == 12) {
      this.fireAttack.x -= 5
      this.fireAttack.y += 0.3
      press_back = 99
      if (this.fireAttack.x <= this.monster1.x) {
        attackState = 13
      }
    } else if (attackState == 13) {

      this.fireAttack.destroy()

      this.bomb = game.add.sprite(this.monster1.x - 10, this.monster1.y, 'bomb')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3], 8, true)
      this.bomb.animations.play('play')

      sleep(1000).then(() => {
        closeDialog()
        this.bomb.destroy()
        this.monster1.destroy()
        if (count == 1) {
          stopState = 20
        } else if (count == 2) {
          stopState = 30
        } else if (count == 3) {
          stopState = 40
        }

      })
      attackState = 14

    }

    // ICE ATTACK
    if (attackState == 20) {
      count += 1
      this.iceAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice')
      this.iceAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.iceAttack.animations.play('play')

      attackState = 21
    } else if (attackState == 21) {
      this.iceAttack.x -= 5.5
      this.iceAttack.y -= 0.3
      press_back = 99
      if (this.iceAttack.x <= this.monster1.x) {
        attackState = 22
      }
    } else if (attackState == 22) {
      this.iceAttack.destroy()

      this.bomb = game.add.sprite(150, 120, 'bluefire')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 10, false)
      this.bomb.animations.play('play')

      sleep(1000).then(() => {
        closeDialog()
        this.bomb.destroy()
        this.monster1.destroy()
        if (count == 1) {
          stopState = 20
        } else if (count == 2) {
          stopState = 30
        } else if (count == 3) {
          stopState = 40
        }

      })

      attackState = 23
    }

    // MIX ATTACK
    if (attackState == 30) {
      count += 1
      this.ice_fireAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice_fire')
      this.ice_fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.ice_fireAttack.animations.play('play')

      attackState = 31
    } else if (attackState == 31) {
      this.ice_fireAttack.x -= 5.5
      this.ice_fireAttack.y -= 0.2
      press_back = 99
      if (this.ice_fireAttack.x <= this.monster1.x) {
        attackState = 32
      }
    } else if (attackState == 32) {
      this.ice_fireAttack.destroy()

      this.bomb = game.add.sprite(155, 150, 'mixbomb')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10, false)
      this.bomb.animations.play('play')

      sleep(1500).then(() => {
        closeDialog()
        this.bomb.destroy()
        this.monster1.destroy()
        if (count == 1) {
          stopState = 20
        } else if (count == 2) {
          stopState = 30
        } else if (count == 3) {
          stopState = 40
        }

      })

      attackState = 33
    }


    // VILLIAN MIX ATTACK
    if (skill == 10) {
      this.ice_fireAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice_fire')
      this.ice_fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.ice_fireAttack.animations.play('play')
      skill = 11
      press_back = 99
    } else if (skill == 11) {
      this.ice_fireAttack.x -= 5.5
      this.ice_fireAttack.y -= 0.2
      if (this.ice_fireAttack.x <= this.villian.x) {
        skill = 12
      }
    } else if (skill == 12) {
      this.ice_fireAttack.destroy()

      this.bomb = game.add.sprite(290, 150, 'mixbomb')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10, false)
      this.bomb.animations.play('play')

      sleep(1500).then(() => {
        closeDialog()
        this.bomb.destroy()
        if (hp == 4) {
          this.heart4.destroy()
          this.heart3.destroy()
        } else if (hp == 3) {
          this.heart3.destroy()
          this.heart2.destroy()
        } else if (hp == 2) {
          this.heart1.destroy()
          this.heart2.destroy()
        } else if (hp == 1) {
          this.heart1.destroy()
        }
        hp -= 2
      })

      press_back = 3

      skill = 13
    }

    // VILLIAN MIX ATTACK DEFEND
    if (skill == 100) {
      press_back = 99

      this.ice_fireAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice_fire')
      this.ice_fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.ice_fireAttack.animations.play('play')

      this.defend = game.add.sprite(this.villian.x, this.villian.y - 10, 'defend')
      this.defend.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 15, true)
      this.defend.animations.play('play')

      skill = 110
    } else if (skill == 110) {
      this.ice_fireAttack.x -= 2
      this.defend.x += 2
      // press_back = 99
      if (this.ice_fireAttack.x <= 550) {
        skill = 120
      }
    } else if (skill == 120) {
      this.ice_fireAttack.destroy()
      this.defend.destroy()
      press_back = 3

      sleep(1500).then(() => {
        // closeDialog()
        this.bomb.destroy()
      })

      skill = 130
    }


    // VILLIAN FIRE ATTACK
    if (skill == 20) {
      this.fireAttack = game.add.sprite(this.player.x, this.player.y, 'bigfire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      skill = 21
      press_back = 99

    } else if (skill == 21) {
      this.fireAttack.x -= 5.5
      // this.fireAttack.y -= 0.2
      if (this.fireAttack.x <= this.villian.x) {
        skill = 22
      }
    } else if (skill == 22) {
      this.fireAttack.destroy()

      this.bomb = game.add.sprite(350, 260, 'bomb')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3], 8, true)
      this.bomb.animations.play('play')
      press_back = 3

      sleep(1500).then(() => {
        closeDialog()
        this.bomb.destroy()
        if (hp == 4) {
          this.heart4.destroy()
        } else if (hp == 3) {
          this.heart3.destroy()
        } else if (hp == 2) {
          this.heart2.destroy()
        } else if (hp == 1) {
          this.heart1.destroy()
        }
        hp -= 1
      })


      skill = 23
    }

    // VILLIAN FIRE ATTACK DEFEND
    if (skill == 200) {
      this.fireAttack = game.add.sprite(this.player.x, this.player.y, 'bigfire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')

      this.defend = game.add.sprite(this.villian.x, this.villian.y - 10, 'defend')
      this.defend.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 15, true)
      this.defend.animations.play('play')
      press_back = 99

      skill = 210
    } else if (skill == 210) {
      this.fireAttack.x -= 2
      this.defend.x += 2
      // press_back = 99
      if (this.fireAttack.x <= 550) {
        skill = 220
      }
    } else if (skill == 220) {
      this.fireAttack.destroy()
      this.defend.destroy()
      press_back = 3

      sleep(1500).then(() => {
        this.bomb.destroy()
      })

      skill = 230
    }

    // VILLIAN ICE ATTACK
    if (skill == 30) {
      this.iceAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice')
      this.iceAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.iceAttack.animations.play('play')
      skill = 31
      press_back = 99

    } else if (skill == 31) {
      this.iceAttack.x -= 5.5
      this.iceAttack.y -= 0.2
      if (this.iceAttack.x <= this.villian.x) {
        skill = 32
      }
    } else if (skill == 32) {
      this.iceAttack.destroy()

      this.bomb = game.add.sprite(290, 120, 'bluefire')
      this.bomb.scale.setTo(2, 2)
      this.bomb.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 10, false)
      this.bomb.animations.play('play')
      press_back = 3

      sleep(1500).then(() => {
        closeDialog()
        this.bomb.destroy()
        if (hp == 4) {
          this.heart4.destroy()
        } else if (hp == 3) {
          this.heart3.destroy()
        } else if (hp == 2) {
          this.heart2.destroy()
        } else if (hp == 1) {
          this.heart1.destroy()
        }
        hp -= 1
      })


      skill = 33
    }

    // VILLIAN ICE ATTACK DEFEND
    if (skill == 300) {
      this.iceAttack = game.add.sprite(this.player.x - 60, this.player.y, 'ice')
      this.iceAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], 8, false)
      this.iceAttack.animations.play('play')

      this.defend = game.add.sprite(this.villian.x, this.villian.y - 10, 'defend')
      this.defend.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 15, true)
      this.defend.animations.play('play')
      press_back = 99

      skill = 310
    } else if (skill == 310) {
      this.iceAttack.x -= 2
      this.defend.x += 2
      // press_back = 99
      if (this.iceAttack.x <= 550) {
        skill = 320
      }
    } else if (skill == 320) {
      this.iceAttack.destroy()
      this.defend.destroy()
      press_back = 3

      sleep(1500).then(() => {
        this.bomb.destroy()
      })

      skill = 330
    }

    if (hp <= 0) {
      this.heart_bar.destroy()
      hp = 99
      press_back = 99
    }

    if (hp == 99) {
      this.bomb1 = game.add.sprite(290, 120, 'bluefire')
      this.bomb1.scale.setTo(2, 2)
      this.bomb1.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18], 10, false)
      this.bomb1.animations.play('play')
      this.bomb2 = game.add.sprite(350, 260, 'bomb')
      this.bomb2.scale.setTo(2, 2)
      this.bomb2.animations.add('play', [0, 1, 2, 3], 8, true)
      this.bomb2.animations.play('play')
      this.bomb3 = game.add.sprite(290, 150, 'mixbomb')
      this.bomb3.scale.setTo(2, 2)
      this.bomb3.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10, false)
      this.bomb3.animations.play('play')
      this.defend = game.add.sprite(330, 200, 'defend')
      this.defend.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27], 15, true)
      this.defend.animations.play('play')

      sleep(1500).then(() => {
        this.bomb1.destroy()
        this.bomb2.destroy()
        this.bomb3.destroy()
        this.defend.destroy()
        this.villian.destroy()

      })
      hp = 100
      check_conver = 8
      current_conver = 0
    }

    if (hp == 100) {
      closeDialog()
      position_dialog_x = 120
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_9[current_conver], {
        fontSize: '15px',
      })
      hp = 101

    }

    if (stopState == 100) {
      this.littlegirl.x += speedCharacter
      if (this.littlegirl.x >= 650) {
        stopState = 101
        current_conver = 0
        check_conver = 9
      }
    } else if (stopState == 101) {
      position_dialog_x = 500
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver], {
        fontSize: '15px',
      })
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      stopState = 102
    }

    if (stopState == 200) {
      closeDialog()
      stopState = 201

    } else if (stopState == 201) {
      this.player.y += speedCharacter
      this.littlegirl.x += speedCharacter
      if (this.littlegirl.x >= 800) {
        stopState = 202
      }


    } else if (stopState == 202) {
      this.littlegirl.y += speedCharacter
      this.player.y += speedCharacter
      if (this.littlegirl.y >= 1400) {
        stopState = 203
      }
    }

    if (stopState == 203) {
      // console.log(this.player.x)
      $(document).ready(function () {

        var userSession = $.ajax({
          url: '/getUser',
          type: "GET",
          async: false,
        }).responseText
        var userJson = JSON.parse(userSession)


        var updateUser = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            // แก้แล้ว
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 13 ,'final_boss' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 13 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/congrat"
      })
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')