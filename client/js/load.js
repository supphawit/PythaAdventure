function nextText() {
  if (conversation_npc.length - 1 > currentText) {
    currentText += 1
  }
}

$(document).ready(function () {

  $("#navBar").load("client/navbar.html");

  $('#hint-popover').popover({
    container: 'body',
    title: "คำใบ้",
    content: 'ตัวอย่าง: print(\"Somsri\")<br>ผลลัพธ์: Somsri',
    placement: 'top',
    html: true,
  })

  // $("#nextTxt").click(async (e) => {
  //   e.preventDefault()
  //   i++
  //   var ui = new Image()
  //   ui.onload = function () {
  //     ctx.drawImage(ui, 100, 150, 1200, 200);
  //     ctx.font = '30px sans-serif'
  //     if ( conversation_npc[i] != undefined){
  //       ctx.fillText(conversation_npc[i], 150, 200);
  //     }else{
  //       ctx.fillText(conversation_npc[conversation_npc.length-1], 150, 200);
  //     }
  //   }
  //   ui.src = 'client/images/ui-textbox.png'
  // })

  var editor = ace.edit("editor");
  editor.setTheme("ace/theme/monokai");
  editor.getSession().setMode("ace/mode/python");
  editor.setOptions({
    fontSize: "100%",
    displayIndentGuides: true,
  })

  // $("#aaa").click(async (e) => {
  //   e.preventDefault();
  //   ctx.drawImage(stop)
  //   // }
  // })

  $("#compile").click(async (e) => {
    // No redirect
    e.preventDefault();

    var code = editor.getValue();
    console.log(code)

    if (code != '') {
      console.log(code)

      var write = $.ajax({
        type: "POST",
        url: '/write-post',
        data: {
          python: code,
          namefile: 'printname'
        }

      })

      // console.log("from post" + write)

      var output_result = $.ajax({
        url: '/run?file=printname',
        type: "GET",
        async: false,
      }).responseText;
      console.log(output_result)

      if (output_result.length < 50) {
        var res_text = new Image()
        res_text.src = 'client/images/text-box-right.png'

        res_text.onload = function () {
          init(step_res)
          // window.cancelAnimationFrame(step_intro)
        }

        function step_res() {
          frameCount++
          if (frameCount < 15) {
            window.requestAnimationFrame(step_res)
            return
          }
          frameCount = 0
          ctx.clearRect(0, 0, canvas.width, canvas.height)
          ctx.drawImage(backgroundImg, 0, 0)

          if (currentPlayerPosition < walk_point_1) {
            drawFrame(playerImg, cycleLoop[currentIndex], 0, 150, 420, 128)
            // currentPlayerPosition += 55
          } else {
            drawFrame(playerImg, cycleLoop[currentIndex], 0, 150, 420, 128)
            ctx.drawImage(textBox, 200, 200, 800, 100)
            ctx.font = '25px sans-serif'
            ctx.fillText("ชื่อว่า " + output_result + " ครับ", 240, 240)
          }

          drawFrame(wizardImg, cycleLoop[currentIndex], 0, 500, 420, 128)
          currentIndex++

          if (currentIndex >= cycleLoop.length - 1) {
            currentIndex = 0
          }
          window.requestAnimationFrame(step_res)
        }
      } else {

        ctx.drawImage(textBox, 200, 200, 800, 100)
        ctx.font = '25px sans-serif'
        ctx.fillText(conversation_npc[currentText], 240, 240)
        alert(output_result)
      }
    }


  })
})