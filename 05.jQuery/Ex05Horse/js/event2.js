let move = 0;

$(".btn.left").on("click", function (event) {
  if (move < 1200) {
    move += 50;
    $("#horse").css("right", move + "px");
  }
});

$(".btn.right").on("click", function (event) {
  if (move > 0) {
    move -= 50;
    $("#horse").css("right", move + "px");
  }
});

$("body").on("keydown", function (event) {
  console.log(event.keyCode);
  if (event.keyCode == 37) {
    if (move < 1200) {
      move += 50;
      $("#horse").css("right", move + "px");
    }
  } else if (event.keyCode == 39) {
    if (move > 0) {
      move -= 50;
      $("#horse").css("right", move + "px");
    }
  } else if (event.keyCode == 32) {
    $("#horse")
      .stop(true)
      .animate({ bottom: "400px" }, 500)
      .animate({ bottom: "200px" }, 500);
  }
});
