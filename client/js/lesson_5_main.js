var c_compiler = 0
var ex_compiler


var conver_1 = ["ในบทนี้ เจ้าจะได้เรียนรู้\nเกี่ยวกับโครงสร้างข้อมูลแบบ List",
  "ข้าจะบอกการสร้างและใช้งาน List ในเบื้องต้น",
  "การใช้งานเมธอดและฟังก์ชัน\nเพื่อจัดการข้อมูลภายใน List ",
  "และการใช้งานคำสั่ง For loop กับ List",
  "ยกตัวอย่างเช่น numbers = [1, 7, 5]",
  "หรือ names = ['Tjung', 'Prayud', 'James']",
  "จะรวมกันก็ได้เป็น \nmixed = [1, 3, \"Mountain\", \"Python\"]",
  "สามารถใช้เมธอด append() \nเพื่อเพิ่มข้อมูลใหม่เข้าไปใน List",
  "และลองใช้ฟังก์ชัน len() \nนับจำนวนสมาชิกใน List ออกมาดู",
]

var conver_2 = ["คราวนี้ใช้เมธอด append() \nเพิ่มสมาชิกให้กับ List ",
  "ข้าจะยกตัวอย่างให้ดูเช่นมีตัวแปร ex = [8,3]\nใช้คำสั่ง ex.append(10)",
  "สมาชิกใน List ก็จะเพิ่มขึ้นเป็น [8,3,10]",
  "และแสดงผลโดยใช้ฟังก์ชัน len() \nตรวจสอบจำนวนสมาชิกใน List",
]

var conver_3 = ["การเข้าถึงข้อมูลภายใน List",
  "List นั้นใช้ Index สำหรับการเข้าถึงข้อมูล",
  "โดย Index ของ List จะเป็นจำนวนเต็ม\nที่เริ่มจาก 0 และเพิ่มขึ้นทีละ 1 ไปเรื่อยๆ",
  "ถ้าหาตัวแปรชื่อ ex \nจะอ่านค่าได้โดย print (ex[0])",
  "ก็จะได้ค่าภายใน List ลำดับที่ 1 ออกมา",
  "ข้าต้องการให้เจ้าแสดงผลลำดับที่ 2 ออกมา"
]

var conver_4 = ["การอ่านค่าใน List ด้วยคำสัง For loop",
  "มักจะใช้คำสั่งวนซ้ำกับ List \nเพราะทำให้การทำงานรวดเร็วและง่ายขึ้น ",
  "เช่น การใช้คำสั่งวนซ้ำวนอ่านค่าใน List \nที่มีข้อมูลเป็นจำนวนมาก เป็นต้น ",
  "ต่อไปมาดูตัวอย่างการใช้คำสั่ง For loop \nกับ List ในภาษา Python",
  "numbers = [10, 20, 30, 40, 50]",
  "for n in numbers:\n    print(n)",
  "ผลลัพธ์คือ 10 20 30 40 50 ",
  "ให้เพิ่มจำนวนสมาชิกให้ถึง 8 \nจำนวนด้วยเมธอด append ",
  "และใช้คำสั่ง for loop แสดงค่าออกมา"
]

var conver_5 = ["ให้ซื้อชุดเกราะกับพ่อค้า",
  "โดยสร้าง List เก็บ string \nเป็นชนิดของอุปกรณ์แต่ละชิ้น",
  "ซึ่งอุปกรณ์มีดังนี้\n[\"helmet\",\"armor\",\"weapon\",\"boots\"]",
  "และแสดงค่าออกมาด้วยคำสั่ง for loop \nคล้ายๆกับที่ข้าให้ทำก่อนหน้านี้แหละ",
]

var conver_6 = ["ตอนนี้อุปกรณ์เจ้าพร้อมแล้ว",
  "ข้าจะไปส่งเจ้าที่ป่าให้ออกเดินทาง",
  "ไปปราบจอมมาร",
]

function resultCompile(responseTxt, originalCode) {
  deleteErrorButton()
  tmpResponse = responseTxt

  if (!(responseTxt.includes("script")) && !(responseTxt.includes("File"))) {

    if (originalCode.includes("[") && originalCode.includes("]")) {
      if (checkState == 4) {

        if (c_compiler == 4 && originalCode.includes("for") && originalCode.includes("in")) {
          var count = 0
          console.log(responseTxt)
          var res = responseTxt.split("\n")
          res = res.filter(function (str) {
            return /\S/.test(str);
          });
          // console.log("res", res)
          var all = ['helmet', 'armor', 'weapon', 'boots']
          for (var i = 0; i <= 3; i++) {
            // console.log("i", res[i])
            for (var j = 0; j <= 3; j++) {
              // console.log("j", all[j])
              if (res[i].trim() == all[j].trim()) {
                count += 1
              }
            }
          }

          if (count != 4) {

            closeDialog()

            self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
            self.button = game.add.button(930, 180, 'button', actionOnClick, this)
            self.textInBox = game.add.text(630, 170, "อุปรกณ์ยังไม่ครบ !!", {
              fontSize: '15px',
            })
            console.log(count)
          } else {
            check_conver = 5
            current_conver = 0
            stopState = 1
            c_compiler = 5
          }
        }
      } else if (c_compiler == 4) {
        closeDialog()

        position_dialog_x = 600
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
          fontSize: '15px',
        })
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      }

      if (c_compiler == 3 && originalCode.includes("for") && originalCode.includes("append")) {
        if (c_compiler == 3) {
          var res = responseTxt.split("\n")
          res = res.filter(function (str) {
            return /\S/.test(str);
          });

          if (res.length > 8) {

            closeDialog()

            self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
            self.button = game.add.button(930, 180, 'button', actionOnClick, this)
            self.textInBox = game.add.text(630, 170, "สมาชิกเกิน 8 จำนวน!!", {
              fontSize: '15px',
            })
          } else if (res.length < 8) {
            closeDialog()

            self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
            self.button = game.add.button(930, 180, 'button', actionOnClick, this)
            self.textInBox = game.add.text(630, 170, "สมาชิกไม่ครบ 8 จำนวน!!", {
              fontSize: '15px',
            })
          } else if (res.length == 8) {

            closeDialog()

            self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
            self.button = game.add.button(410, 180, 'button', actionOnClick, this)
            self.textInBox = game.add.text(110, 170, "ค่าในอาร์เรย์คือ " + res[0].trim() + " " + res[1].trim() + " " + res[2].trim() + " " + res[3].trim() + " " + res[4].trim() + " " + res[5].trim() + " " + res[6].trim() + " " + res[7].trim(), {
              fontSize: '15px',
            })
            c_compiler = 4
            check_conver = 4
            current_conver = 0
          }
        } else if (checkState == 3) {
          closeDialog()

          position_dialog_x = 600
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
            fontSize: '15px',
          })
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        }

      }

      if (c_compiler == 2 && originalCode.includes("[1]")) {
        if (checkState == 2) {
          closeDialog()
          self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
          self.button = game.add.button(410, 180, 'button', actionOnClick, this)
          self.textInBox = game.add.text(110, 170, "ค่าลำดับที่ 2 คือ " + responseTxt, {
            fontSize: '15px',
          })
          c_compiler = 3
          check_conver = 3
          current_conver = 0
        } else {
          closeDialog()

          position_dialog_x = 600
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
            fontSize: '15px',
          })
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        }
      } else if (c_compiler == 2) {
        closeDialog()

        self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
        self.button = game.add.button(930, 180, 'button', actionOnClick, this)
        self.textInBox = game.add.text(630, 170, "ยังไม่ใช่ค่าลำดับที่ 2 นะ", {
          fontSize: '15px',
        })
      }


      if (c_compiler == 1 && originalCode.includes("append")) {
        if (checkState == 2) {
          check_conver = 2
          current_conver = 0

          closeDialog()
          self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
          self.button = game.add.button(410, 180, 'button', actionOnClick, this)
          self.textInBox = game.add.text(110, 170, "จำนวนใน List เพิ่มเป็น " + responseTxt.trim() + " แล้ว", {
            fontSize: '15px',
          })
          c_compiler = 2
        } else {
          closeDialog()

          position_dialog_x = 600
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
            fontSize: '15px',
          })
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        }
      } else if (c_compiler == 1) {
        position_dialog_x = 600
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ไม่ได้ใช้คำสั่ง append!! \nทำให้ถูกด้วย", {
          fontSize: '15px',
        })
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      }

      if (c_compiler == 0 && originalCode.includes("len")) {
        if (checkState == 1) {
          check_conver = 1
          current_conver = 0

          closeDialog()
          self.dialogBox = game.add.image(80, 150, 'dialogBoxRight')
          self.button = game.add.button(410, 180, 'button', actionOnClick, this)
          self.textInBox = game.add.text(110, 170, "จำนวนสมาชิกใน List คือ " + responseTxt, {
            fontSize: '15px',
          })
          c_compiler = 1
          ex_compiler = responseTxt
        } else {
          closeDialog()

          position_dialog_x = 600
          position_dialog_y = 150
          self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
          self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ฟังข้าพูดให้จบก่อนสิ!! \nรีบจังเลย", {
            fontSize: '15px',
          })
          self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
          self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
        }

      } else if (c_compiler == 0) {
        position_dialog_x = 600
        position_dialog_y = 150
        self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ไม่ได้ใช้คำสั่ง len()`!! \nทำให้ถูกด้วย", {
          fontSize: '15px',
        })
        self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
        self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      }
    } else {
      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, "ไม่ได้มีตัวแปร list!! \nทำให้ถูกด้วย", {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    }
  } else {

    if (typeof self.errorTextDialog !== "undefined") {
      deleteErrorButton()
    }

    self.errorTextDialog = game.add.image(250, 50, 'errorText')
    self.errorTextDialog.scale.setTo(5, 5)

    self.textErrorInBox = game.add.text(280, 80, tmpResponse, {
      fontSize: '15px',
    })

    self.textViewMore = game.add.text(745, 140, "Suggest", {
      fontSize: '10px',
    })
    self.more = game.add.button(750, 120, 'more', viewMore, this)
    self.errorButton = game.add.button(750, 160, 'xSign', deleteErrorButton, this)
  }
}

function actionOnClick() {
  deleteErrorButton()
  if (conver_1[current_conver] != undefined && check_conver == 0) {
    closeDialog()

    position_dialog_x = 600
    position_dialog_y = 150
    self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver], {
      fontSize: '15px',
    })
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
      fontSize: '15px',
    })
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

    current_conver++
    // 9
    if (current_conver == 9) {
      checkState = 1
      $(document).ready(function () {
        $("#lesson5-hint-1").modal()
      })
    }
  } else if (conver_2[current_conver] != undefined && check_conver == 1) {
    if (c_compiler == 1) {
      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      current_conver++
      //4
      if (current_conver == 4) {
        // console.log("SJDFJKSDFLK")
        checkState = 2
        $(document).ready(function () {
          $("#lesson5-hint-2").modal()
          $('#hint2').html("<a href='#' id='hint2'><span class='badge badge-info' data-toggle='modal' data-target='#lesson5-hint-2'>คำใบ้ 2</span></a>")
        })
      }
    }
  } else if (conver_3[current_conver] != undefined && check_conver == 2) {
    if (c_compiler == 2) {
      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      current_conver++
      //6
      if (current_conver == 6) {
        checkState = 2
        $(document).ready(function () {
          $("#lesson5-hint-3").modal()
          $('#hint3').html("<a href='#' id='hint3'><span class='badge badge-info' data-toggle='modal' data-target='#lesson5-hint-3'>คำใบ้ 3</span></a>")
        })

      }
    }
  } else if (conver_4[current_conver] != undefined && check_conver == 3) {
    if (c_compiler == 3) {
      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      current_conver++
      //9
      if (current_conver == 9) {

        checkState = 3
        $(document).ready(function () {
          $("#lesson5-hint-4").modal()
          $('#hint4').html("<a href='#' id='hint4'><span class='badge badge-info' data-toggle='modal' data-target='#lesson5-hint-4'>คำใบ้ 4</span></a>")
        })
      }
    }
  } else if (conver_5[current_conver] != undefined && check_conver == 4) {
    if (c_compiler == 4) {
      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      current_conver++
      //4
      if (current_conver == 4) {
        checkState = 4
        $(document).ready(function () {
          $("#lesson5-hint-5").modal()
          $('#hint5').html("<a href='#' id='hint5'><span class='badge badge-info' data-toggle='modal' data-target='#lesson5-hint-5'>คำใบ้ 5</span></a>")
        })
      }
    }
  } else if (conver_6[current_conver] != undefined && check_conver == 5) {
    if (c_compiler == 5) {
      closeDialog()

      position_dialog_x = 600
      position_dialog_y = 150
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
      self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver], {
        fontSize: '15px',
      })
      self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver + 1, {
        fontSize: '15px',
      })
      self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)

      current_conver++
      if (current_conver == 3) {
        check_conver = 6
        current_conver = 0
        playerState = 3
        wizardState = 3

        closeDialog()
      }
    }
  }
}


function backward() {
  if (current_conver > 1) {
    current_conver--
    deleteErrorButton()
    closeDialog()

    position_dialog_x = 600
    position_dialog_y = 150
    if (check_conver == 0) {
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    } else {
      self.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxLeft')
    }
    self.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
    self.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
    self.current_text = game.add.text(position_dialog_x + 380, position_dialog_y + 10, current_conver, {
      fontSize: '15px',
    })

    switch (check_conver) {
      case 0:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_1[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 1:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_2[current_conver - 1], {
          fontSize: '15px',
        })
        break

      case 2:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_3[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 3:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_4[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 4:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_5[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 5:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_6[current_conver - 1], {
          fontSize: '15px',
        })
        break
      case 6:
        self.textInBox = game.add.text(position_dialog_x + 30, position_dialog_y + 20, conver_7[current_conver - 1], {
          fontSize: '15px',
        })
        break
    }

  }
}

var game = new Phaser.Game(1100, 600, Phaser.AUTO, 'gameLessonOne');

var mainState = {
  preload: function () {
    game.load.image('background', 'client/images/map_lesson_3.png');
    game.load.spritesheet('playerWalkLeft', 'client/images/player-walk-left.png', 128, 128)
    game.load.spritesheet('playerStandLeft', 'client/images/player-standing-left.png', 128, 128)
    game.load.spritesheet('playerStandRight', 'client/images/player-standing-right.png', 128, 128)
    game.load.spritesheet('wizardLeft', 'client/images/npc-wizard-left.png', 128, 128)
    game.load.spritesheet('wizardRight', 'client/images/npc-wizard-right.png', 128, 128)
    game.load.spritesheet('dealer', 'client/images/dealer.png', 128, 128)
    game.load.spritesheet('item_apple', 'client/images/apple.png', 370, 359)
    game.load.image('dialogBoxRight', 'client/images/text-box-right.png')
    game.load.image('dialogBoxLeft', 'client/images/text-box-left.png')
    game.load.image('errorText', 'client/images/error.png')
    game.load.image('speaker', 'client/images/speaker.png')
    game.load.image('mute', 'client/images/mute.png')
    game.load.image('information', 'client/images/information.png')
    game.load.spritesheet('button', 'client/images/button.png')
    game.load.spritesheet('back', 'client/images/back.png')
    game.load.spritesheet('errorButton', 'client/images/error-button.png')
    game.load.spritesheet('more', 'client/images/more.png')
    game.load.image('backpack', 'client/images/backpack.png')
    game.load.image('menu', 'client/images/menu.png')
    game.load.image('inventory', 'client/images/inventory.png')
    game.load.image('xSign', 'client/images/xSign.png')
    game.load.image('helmet', 'client/images/helmet-font.png')
    game.load.image('boots', 'client/images/armor-bottom.png')
    game.load.image('armor', 'client/images/armor-top.png')
    game.load.image('weapon', 'client/images/weapon.png')
    game.load.audio('music', 'client/images/audio/Windless Slopes.mp3')

    game.load.spritesheet('flower', 'client/images/flower.png', 100, 100)

  },

  create: function () {
    self = this
    // var button
    game.physics.startSystem(Phaser.Physics.ARCADE);
    this.myWorld = game.add.group()

    this.bg = game.add.image(0, 0, 'background');
    this.bg.scale.setTo(1.25, 1.25)

    this.menu = game.add.image(800, 10, 'menu');
    this.menu.scale.setTo(2, 2)
    this.backpack = game.add.button(950, 25, 'backpack', showInventory, this)
    this.backpack.scale.setTo(0.7, 0.7)
    this.sound = game.add.button(1000, 28, 'speaker', music, this)
    this.sound.scale.setTo(0.9, 0.9)
    this.music = game.add.audio('music');
    this.music.play();


    this.dealer = game.add.sprite(490, 150, 'dealer')
    this.dealer.animations.add('walk', [0, 1], 5, true)

    this.player = game.add.sprite(750, 700, 'playerWalkLeft')
    this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
    this.player.smoothed = false

    this.wizard = game.add.sprite(750, 600, 'wizardLeft')
    this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)

    this.dealer.animations.play('walk')
    this.player.animations.play('walk')
    this.wizard.animations.play('walk')

    this.flower1 = game.add.sprite(100, 20, 'flower')
    this.flower1.scale.setTo(0.8, 0.8)
    this.flower1.animations.add('play', [0, 1], 2, true)
    this.flower1.animations.play('play')

  },

  update: function () {

    if (playerState == 0) {
      if (this.player.y > 230) {
        this.player.y -= speedCharacter
      } else {
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandLeft')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
        playerState = 1
      }
    }

    if (wizardState == 0) {
      if (this.wizard.y > 230) {
        this.wizard.y -= speedCharacter
      } else {
        this.wizard.destroy()
        this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardLeft')
        this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.wizard.animations.play('walk')
        wizardState = 1
      }
    }

    if (playerState == 1) {
      if (this.player.x > 400) {
        this.player.x -= speedCharacter
      } else {
        this.player.destroy()
        this.player = game.add.sprite(this.player.x, this.player.y, 'playerStandRight')
        this.player.animations.add('walk', [0, 1, 2, 3], 5, true)
        this.player.animations.play('walk')
        playerState = 2
      }
    }

    if (wizardState == 1) {
      if (this.wizard.x > 550) {
        this.wizard.x -= speedCharacter
      } else {

        position_dialog_x = 600
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

        wizardState = 2
      }
    }

    if (stopState == 1) {
      closeDialog()
      position_dialog_x = 150
      position_dialog_y = 50

      this.dialogBox = game.add.image(position_dialog_x, position_dialog_y, 'dialogBoxRight')
      this.button = game.add.button(position_dialog_x + 360, position_dialog_y + 30, 'button', actionOnClick, this)
      this.back = game.add.button(position_dialog_x + 340, position_dialog_y + 30, 'back', backward, this)
      stopState = 2
      // console.log(this.player.x)
    }

    if (stopState == 2) {
      this.item_helmet = game.add.image(180, 70, 'helmet');
      this.item_helmet.scale.setTo(0.5, 0.5)
      stopState = 3
    }

    if (stopState == 3) {
      if (this.item_helmet.y != 300) {
        this.item_helmet.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_helmet.x != 400) {
        this.item_helmet.x += 5
      }

      if (this.item_helmet.y == 214 && this.item_helmet.x == 400) {
        this.item_helmet.destroy()
        stopState = 4
      }
    }

    if (stopState == 4) {
      this.item_armor = game.add.image(180, 70, 'armor');
      this.item_armor.scale.setTo(0.5, 0.5)
      stopState = 5
    }
    if (stopState == 5) {
      if (this.item_armor.y != 300) {
        this.item_armor.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_armor.x != 400) {
        this.item_armor.x += 5
      }

      if (this.item_armor.y == 214 && this.item_armor.x == 400) {
        this.item_armor.destroy()
        stopState = 6
      }
    }

    if (stopState == 6) {
      this.item_weapon = game.add.image(180, 70, 'weapon');
      this.item_weapon.scale.setTo(0.5, 0.5)
      stopState = 7
    }
    if (stopState == 7) {
      if (this.item_weapon.y != 300) {
        this.item_weapon.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_weapon.x != 400) {
        this.item_weapon.x += 5
      }

      if (this.item_weapon.y == 214 && this.item_weapon.x == 400) {
        this.item_weapon.destroy()
        stopState = 8
      }
    }

    if (stopState == 8) {
      this.item_boots = game.add.image(180, 70, 'boots');
      this.item_boots.scale.setTo(0.5, 0.5)
      stopState = 9
    }
    if (stopState == 9) {
      if (this.item_boots.y != 300) {
        this.item_boots.y += 2
        // console.log(this.item_apple.y)
      }

      if (this.item_boots.x != 400) {
        this.item_boots.x += 5
      }

      if (this.item_boots.y == 214 && this.item_boots.x == 400) {
        this.item_boots.destroy()
        stopState = 10
        closeDialog()
      }
    }

    if (stopState == 10) {
      closeDialog()
      self.dialogBox = game.add.image(600, 150, 'dialogBoxLeft')
      self.button = game.add.button(930, 180, 'button', actionOnClick, this)
      self.textInBox = game.add.text(630, 170, conver_6[current_conver], {
        fontSize: '15px',
      })
      stopState = 11
    }

    if (playerState == 3 && wizardState == 3) {
      this.wizard.destroy()
      this.wizard = game.add.sprite(this.wizard.x, this.wizard.y, 'wizardRight')
      this.wizard.animations.add('walk', [0, 1, 2, 3], 5, true)
      this.wizard.animations.play('walk')
      wizardState = 4
    }

    if (wizardState == 4) {
      this.wizard.x += speedCharacter
      this.player.x += speedCharacter

    }
    if (this.player.x == 1200) {
      wizardState = 10
      this.player.x = 1210
    }
    if (wizardState == 10) {
      
      $(document).ready(function () {

        var userSession = $.ajax({
          url: '/getUser',
          type: "GET",
          async: false,
        }).responseText
        var userJson = JSON.parse(userSession);

        var updateUser = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO lesson ( email_user, lesson_level, lesson_detail) SELECT * FROM  (SELECT '" + userJson.email + "', 5 ,'list' ) AS tmp WHERE NOT EXISTS (SELECT lesson_level FROM lesson WHERE lesson_level = 5 ) LIMIT 1",
          }
        })

        var updateInventory_armor = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'armor' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name,email_user FROM inventory WHERE item_name = 'armor' AND email_user ='" + userJson.email + "' ) LIMIT 1",
          }
        })

        var updateInventory_helmet = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'helmet' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name,email_user FROM inventory WHERE item_name = 'helmet' AND email_user ='" + userJson.email + "') LIMIT 1",
          }
        })

        var updateInventory_weapon = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'weapon' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name,email_user FROM inventory WHERE item_name = 'weapon' AND email_user ='" + userJson.email + "') LIMIT 1",
          }
        })

        var updateInventory_boots = $.ajax({
          type: "POST",
          url: '/updateByQuery',
          data: {
            query: "INSERT INTO inventory ( email_user, item_name, amount) SELECT * FROM (SELECT '" + userJson.email + "', 'boots' , 1) AS tmp WHERE NOT EXISTS (SELECT item_name,email_user FROM inventory WHERE item_name = 'boots' AND email_user ='" + userJson.email + "') LIMIT 1",
          }
        })
        wizardState = 99
        console.log("pass")
        window.location.href = "/story_1"
      })
    }

  },
};


game.state.add('main', mainState);
game.state.start('main');