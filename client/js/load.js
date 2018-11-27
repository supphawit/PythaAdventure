

$(document).ready(function () {

  $("#navBar").load("client/navbar.html");

  $('#hint-popover').popover({
    container: 'body',
    title: "คำใบ้",
    content: 'ตัวอย่าง: print(\"Somsri\")<br>ผลลัพธ์: Somsri',
    placement: 'top',
    html: true,
  })


})