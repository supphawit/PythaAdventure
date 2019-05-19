var conver_1 = ["ช่วยด้วยยยยยยยยยยยยยยยยย",
  "ปลาหมึกพวกนี้จะทำร้ายชั้นนนน",
]

var conver_2 = ["จะช่วยเดี๋ยวนี้แหละสาวน้อย !!",
  "ใช้เวทมนต์ไฟละกัน",
  "เจ้าพวกนี้น่าจะตายนะ",
]


var conver_3 = ["หน๊านิ๊ !!",
  "ทำไมเจ้าพวกนี้ไม่ยอมตายล่ะ ",
  "เวทมนต์ไฟใช้ไม่ได้ผลเหรอนี่\n",
]

var conver_4 = ["ฮ่า ฮ่า ฮ่า !!",
  "ใช้คำสั่งแค่นั้น ฆ่าเราไม่ได้หรอก ",
  "ถ้าไม่มีคำสั่ง if ก็ทำอะไรเราไม่ได้หรอก ",
]

var conver_5 = ["ถ้าอย่างนั้นต้องปรับเปลี่ยนการใช้เวทมนต์",
  "วิธีใช้เวทมนต์เหมือนเดิม\nแต่เพิ่มคำสั่ง if เข้าไปสินะ ",
  "เพิ่มคำสั่ง if เข้าไปในโค้ด ",
]

var conver_6 = ["ได้ผล ฮ่า ฮ่า",
  "พวกที่เหลือ ไม่รอดแน่",
  "โจมตีด้วยเวทมนต์ไฟ !! ",
]

var conver_7 = ["ยิงอีกครั้งหนึ่ง",
  "เหลือตัวสุดท้ายแล้ว",
]

var conver_8 = ["เป็นยังไงบ้างครับ",
  "บาดเจ็บตรงไหนหรือเปล่า",
  "ทำไมถึงมาอยู่ในป่าคนเดียว?"
]

var conver_9 = ["ไม่ได้รับบาดเจ็บมากหรอก",
  "ที่มาอยู่ป่าคนเดียวแบบนี้\nเพราะออกมาตามหาน้องสาว",
  "เธอถูกจับตัวไปโดยจอมมาร\nรู้มาว่าเขาอยู่ในป่าแห่งนี้แหละ",
  "แต่ดูเหมือนจะเกินมือชั้นซะแล้วสิ\nเจ้าไปช่วยน้องสาวของชั้นได้มั้ย?"
]

var conver_10 = ["ได้ ไม่มีปัญหา\nข้าเองก็มีฝีมืออยู่เหมือนกัน",
  "เจ้าก็กลับไปที่หมู่บ้านซะนะ",
  "ในป่านี้มันอันตรายน่ะ",
]

var conver_11 = ["ขอบคุณเจ้ามากจริงๆ \nช่างเป็นคนดีและกล้าหาญจริงๆ",
  "ยังไงฝากน้องสาวชั้นด้วยนะ",
  "ข้าจะไปรอเจ้าที่หมู่บ้านนะ",
]

var conver_12 = ["ต้องกำจัดจอมมาร\n",
  "และพาตัวน้องสาวของเธอคนนั้นกลับมา",
  "คงต้องรีบแล้วสินะ",
]

function resultCompile(responseTxt, originalCode) {
  tmpResponse = responseTxt
  deleteErrorButton()
  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (press_back == 1 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE")) {

      closeDialog()
      position_dialog_x = 250
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE !!", {
        fontSize: '15px',
      })

      attackState = 1
      check_conver = 2
      current_conver = 0
    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE") && originalCode.includes("if")) {
      closeDialog()
      check_conver = 5

      position_dialog_x = 250
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "FIRE พร้อมเสริมพลังด้วย if !!", {
        fontSize: '15px',
      })
      if (stopState == 0) {
        attackState = 20
        current_conver = 0
      } else if (stopState == 1) {
        attackState = 30
        stopState = 2
      } else if (stopState == 2) {
        attackState = 40
      }


    } else if (press_back == 2 && originalCode.includes("def") && originalCode.includes("return") && responseTxt.includes("FIRE")) {
      closeDialog()

      position_dialog_x = 250
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ต้องเสริมพลังด้วยคำสั่ง if\nลองใหม่อีกที !!", {
        fontSize: '15px',
      })
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    } else if (press_back == 3) {
      console.log("DONE")
    } else {
      closeDialog()

      position_dialog_x = 250
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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

  console.log("actionOnClick current_conver:", current_conver)
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 620
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
      fontSize: '15px',
    })
    current_conver++

    if (current_conver >= 2) {
      check_conver = 1
      current_conver = 0
    }

  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    closeDialog()

    position_dialog_x = 250
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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
      press_back = 1
      $(document).ready(function () {
        $("#story3-hint-1").modal()
      })
    }

  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    closeDialog()

    position_dialog_x = 250
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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
      check_conver = 3
      current_conver = 0
    }

  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    closeDialog()

    position_dialog_x = 180
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
      check_conver = 4
      current_conver = 0
    }

  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    closeDialog()

    position_dialog_x = 250
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
    if (current_conver == 3) {
      press_back = 2

      $(document).ready(function () {
        $("#story3-hint-2").modal()
        $('#hint2').html("<a href='#''><span id='hint2' class='badge badge-info' data-toggle='modal' data-target='#story3-hint-2'>คำใบ้ 2</span></a>")
      })
    }

  } else if (conver_6[current_conver] != undefined && check_conver == 5) {
    closeDialog()

    position_dialog_x = 250
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
      stopState = 1
    }

  } else if (conver_7[current_conver] != undefined && check_conver == 6) {
    closeDialog()

    position_dialog_x = 250
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 2) {
      // stopState = 1
    }

  } else if (conver_8[current_conver] != undefined && check_conver == 7) {
    closeDialog()

    position_dialog_x = 450
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      check_conver = 8
      current_conver = 0
    }

  } else if (conver_9[current_conver] != undefined && check_conver == 8) {
    closeDialog()

    position_dialog_x = 620
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_9[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 4) {
      check_conver = 9
      current_conver = 0
    }

  } else if (conver_10[current_conver] != undefined && check_conver == 9) {
    closeDialog()

    position_dialog_x = 450
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      check_conver = 10
      current_conver = 0
    }

  } else if (conver_11[current_conver] != undefined && check_conver == 10) {
    closeDialog()

    position_dialog_x = 620
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_11[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      playerState = 40
      check_conver = 11
      current_conver = 0
    }

  } else if (conver_12[current_conver] != undefined && check_conver == 11) {
    closeDialog()

    position_dialog_x = 450
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_12[current_conver], {
      fontSize: '15px',
    })
    current_conver++
    if (current_conver == 3) {
      playerState = 50
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
        position_dialog_x = 620
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 3:
        closeDialog()
        position_dialog_x = 180
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 4:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 5:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 6:
        closeDialog()
        position_dialog_x = 250
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 7:
        closeDialog()
        position_dialog_x = 450
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 8:
        closeDialog()
        position_dialog_x = 620
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_9[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 9:
        closeDialog()
        position_dialog_x = 450
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_10[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 10:
        closeDialog()
        position_dialog_x = 620
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_11[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 11:
        closeDialog()
        position_dialog_x = 450
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
          fontSize: '15px',
        })
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_12[current_conver - 1], {
          fontSize: '15px',
        })
        break


    }


  }
}



var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne')

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_story_3.png')
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
    game.load.spritesheet('girlLeft', 'client/images/girl-standing-left.png', 128, 128)
    game.load.spritesheet('girlRight', 'client/images/girl-standing-right.png', 128, 128)
    game.load.spritesheet('monster', 'client/images/monster-3.png', 128, 128)
    game.load.image('fire_sym', 'client/images/fire_sym.png')
    game.load.spritesheet('fire', 'client/images/fire.png', 64, 64)
    game.load.spritesheet('bomb', 'client/images/bomb.png', 64, 64)
  },

  create: function () {
    self = this

    game.physics.startSystem(Phaser.Physics.ARCADE)
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background')
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu')
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventoryStory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music')
    this.music.play()

    this.fire_sym = game.add.button(825, 29, 'fire_sym', fireFunc, this)
    this.fire_sym.scale.setTo(0.9, 0.9)

    this.player = game.add.sprite(-150, 250, 'playerStandRightWearing')
    this.player.animations.add('right', [0, 1, 2, 3], 5, true)
    this.player.animations.play('right')

    this.girl = game.add.sprite(580, 250, 'girlLeft')
    this.girl.animations.add('right', [0, 1, 2, 3], 5, true)
    this.girl.animations.play('right')

    this.monster1 = game.add.sprite(500, 250, 'monster')
    this.monster1.scale.setTo(0.6, 0.6)
    this.monster1.animations.add('play', [0, 1], 5, true)
    this.monster1.animations.play('play')

    this.monster2 = game.add.sprite(700, 300, 'monster')
    this.monster2.scale.setTo(0.6, 0.6)
    this.monster2.animations.add('play', [0, 1], 5, true)
    this.monster2.animations.play('play')

    this.monster3 = game.add.sprite(500, 350, 'monster')
    this.monster3.scale.setTo(0.6, 0.6)
    this.monster3.animations.add('play', [0, 1], 5, true)
    this.monster3.animations.play('play')
  },

  update: function () {

    if (playerState == 0) {
      this.player.x += speedCharacter
      if (this.player.x >= 200) {
        playerState = 1
      }
    }

    if (playerState == 1) {

      position_dialog_x = 620
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
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

    if (attackState == 1) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 2
    } else if (attackState == 2) {
      this.fireAttack.x += 5
      this.fireAttack.y -= 0.3
      press_back = 99
      if (this.fireAttack.x >= this.monster1.x) {
        attackState = 3
      }
    } else if (attackState == 3) {
      this.fireAttack.destroy()

      closeDialog()
      position_dialog_x = 250
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
        fontSize: '15px',
      })
      current_conver++

      attackState = 4
    }

    if (attackState == 20) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 21
    } else if (attackState == 21) {
      this.fireAttack.x += 4
      this.fireAttack.y -= 0.3
      press_back = 99
      if (this.fireAttack.x >= this.monster1.x) {
        attackState = 22
      }
    } else if (attackState == 22) {
      if (typeof this.bomb !== "undefined") {
        this.bomb.destroy()
      }
      this.bomb = game.add.sprite(this.monster1.x, this.monster1.y, 'bomb')
      this.bomb.animations.add('play', [0, 1, 2, 3], 5, true)
      this.bomb.animations.play('play')
      this.monster1.destroy()
      this.fireAttack.destroy()

      attackState = 23
      press_back = 2
      sleep(1000).then(() => {
        this.bomb.destroy()
      })

    }


    if (attackState == 30) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 31
    } else if (attackState == 31) {
      this.fireAttack.x += 4.56
      // this.fireAttack.y -= 0.3
      press_back = 99
      if (this.fireAttack.x >= this.monster2.x) {
        attackState = 32
      }
    } else if (attackState == 32) {
      if (typeof this.bomb !== "undefined") {
        this.bomb.destroy()
      }
      this.bomb = game.add.sprite(this.monster2.x, this.monster2.y, 'bomb')
      this.bomb.animations.add('play', [0, 1, 2, 3], 5, true)
      this.bomb.animations.play('play')
      this.monster2.destroy()
      this.fireAttack.destroy()

      attackState = 33
      press_back = 2
      check_conver = 6
      current_conver = 0
      sleep(1000).then(() => {
        this.bomb.destroy()
      })

    }

    if (attackState == 40) {
      this.fireAttack = game.add.sprite(this.player.x + 110, this.player.y + 30, 'fire')
      this.fireAttack.animations.add('play', [0, 1, 2, 3, 4, 5, 6, 7, 8], 5, true)
      this.fireAttack.animations.play('play')
      attackState = 41
    } else if (attackState == 41) {
      this.fireAttack.x += 2.7
      this.fireAttack.y += 1
      press_back = 99
      if (this.fireAttack.x >= this.monster3.x) {
        attackState = 42
      }
    } else if (attackState == 42) {
      if (typeof this.bomb !== "undefined") {
        this.bomb.destroy()
      }
      this.bomb = game.add.sprite(this.monster3.x + 20, this.monster3.y + 50, 'bomb')
      this.bomb.animations.add('play', [0, 1, 2, 3], 5, true)
      this.bomb.animations.play('play')
      this.monster3.destroy()
      this.fireAttack.destroy()

      attackState = 43
      press_back = 2
      playerState = 20
      check_conver = 7
      current_conver = 0
      sleep(1000).then(() => {
        this.bomb.destroy()
      })

    }

    if (playerState == 20) {
      this.player.x += speedCharacter
      if (this.player.x >= 400) {
        playerState = 21
        press_back = 3
        closeDialog()
        position_dialog_x = 450
        position_dialog_y = 150
        this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
          fontSize: '15px',
        })
        this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_8[current_conver], {
          fontSize: '15px',
        })
        current_conver++
      }
    }

    if (playerState == 40) {
      closeDialog()
      playerState = 41
    } else if (playerState == 41) {
      this.girl.x -= speedCharacter
      if (this.girl.x <= -150) {
        playerState = 42
      }
    } else if (playerState == 42) {
      position_dialog_x = 450
      position_dialog_y = 150
      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      this.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      this.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_12[current_conver], {
        fontSize: '15px',
      })
      current_conver++
      playerState = 43
    }

    if (playerState == 50) {
      closeDialog()
      playerState = 51
    } else if (playerState == 51) {
      this.player.x += speedCharacter
      console.log(this.player.x)
    }
    if (this.player.x == 1600) {
      playerState = 60
      this.player.x += 10
    }
    if (playerState == 60) {
      console.log(this.player.x)
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
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 8 ,'girl' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 8 AND email_user = '" + userJson.email + "') LIMIT 1",
          }
        })
        // console.log("pass")
        window.location.href = "/story_4"
      })
      playerState = 61
    }

  },
}


game.state.add('main', mainState)
game.state.start('main')