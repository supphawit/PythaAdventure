$(document).ready(function () {

  $("#navBar").load("client/navbar.html"); 

 $('#hint-popover').popover({
    container: 'body',
    title: "คำใบ้",
    content: 'ให้ทำการเขียนโปรแกรม Python ครั้งแรก และคำสุดคลาสสิคสำหรับการเรียนเขียนโปรแกรมก็คือ<br> คำสั่ง print("Hello World!") โดย Task แรกจะให้แนะนำตัว',
    placement: 'top',
    html: true,
})

$("#nextTxt").click(async (e) => {
  e.preventDefault()
  i++
  var ui = new Image()
  ui.onload = function () {
    ctx.drawImage(ui, 100, 150, 1200, 200);
    ctx.font = '30px sans-serif'
    if ( conversation_npc[i] != undefined){
      ctx.fillText(conversation_npc[i], 150, 200);
    }else{
      ctx.fillText(conversation_npc[conversation_npc.length-1], 150, 200);
    }
  }
  ui.src = 'client/images/ui-textbox.png'
})

var editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/python");
editor.setOptions({
  fontSize: "100%",
  displayIndentGuides: true,
})

$("#compile").click(async (e) => {
  // No redirect
  e.preventDefault();
  var code = editor.getValue();
  console.log(code)

  if (code != '') {
    console.log(code)

    // var numberCheck = $.ajax({
    //   url: '/write?python=' + code + '&namefile=printname',
    //   type: "GET"
    // });

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
    console.log("from get" + output_result)

    if (output_result.length < 50) {

      var ui = new Image()
      ui.onload = function () {
        ctx.drawImage(ui, 100, 150, 1200, 200);
        ctx.font = '30px sans-serif'
        ctx.fillText("เจ้าชื่อ" + output_result + " งั้นเหรอ?", 150, 200);

      }
      ui.src = 'client/images/ui-textbox.png'

      document.getElementById("nextEp").innerHTML =
        "<a href='/ep2'><input id='next' type='submit' class='btn btn-success' value='Next'> </a>"
    }else{
      var ui = new Image()
      ui.onload = function () {
        ctx.drawImage(ui, 100, 150, 1200, 200);
        ctx.font = '30px sans-serif'
        ctx.fillText("อ่ะแฮ่ม แน่ใจเหรอว่าที่พิมพ์มาถูกต้องแล้ว?", 150, 200);
      }
      ui.src = 'client/images/ui-textbox.png'
      alert(output_result)
    }
  }


})
})