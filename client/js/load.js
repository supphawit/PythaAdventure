$(document).ready(function () {

  $("#navBar").load("client/navbar.html");

  $('#hint-popover').popover({
    container: 'body',
    title: "คำใบ้",
    content: 'ตัวอย่าง: print(\"Somsri\")<br>ผลลัพธ์: Somsri',
    placement: 'top',
    html: true,
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

      var write = $.ajax({
        type: "POST",
        url: '/write-post',
        data: {
          python: code,
          namefile: 'printname'
        }

      })
    }

    // console.log("from post" + write)

    var output_result = $.ajax({
      url: '/run?file=printname',
      type: "GET",
      async: false,
    }).responseText;
    console.log(output_result)

    if (output_result.length < 50) {
      test(output_result)
    }
  })

})