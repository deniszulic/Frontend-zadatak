let slides = $(".container-top").children();
let slides_bottom = $(".container-bottomlist").children();
for (let i of [...Array(slides.length).keys()]) {
  slides[i].style.display = "none";
  slides_bottom[i].style.display = "none";
}
for (let i of [...Array(5).keys()]) {
  slides[i].style.display = "block";
}
for (let i of [...Array(4).keys()]) {
  slides_bottom[i].style.display = "block";
}
$("#container-first-button").click(() => {
  $("#container-first-button").attr("disabled", true);
  $("#container-second-button").attr("disabled", true);
  let width_top=$(".container-top").children().eq(4).width();
  $(".container-top").children().eq(4).animate({width:-width_top}, 'slow',() => {
    $(".container-top").find(":last-child").remove().prependTo(".container-top");
    $(".container-top").find(":first-child").attr("style", "display:block");
    $(".container-top").children().eq(5).attr("style", "display:none")
    $("#container-first-button").attr("disabled", false);
    $("#container-second-button").attr("disabled", false);
  })

  let width_bottom=$(".container-bottomlist").children().eq(3).width();
  $(".container-bottomlist").children().eq(3).animate({width:-width_bottom}, 'slow', () => {
    $(".container-bottomlist").find(":last-child").remove().prependTo(".container-bottomlist");
    $(".container-bottomlist").find(":first-child").attr("style", "display:block");
    $(".container-bottomlist").children().eq(4).attr("style", "display:none")
  })
});
$("#container-second-button").click(() => {
  $("#container-first-button").attr("disabled", true);
  $("#container-second-button").attr("disabled", true);
  $(".container-top").find(":first-child").animate({width:0}, 'slow',() => {
    $(".container-top").find(":first-child").remove().appendTo(".container-top");
    $(".container-top").find(":last-child").attr("style", "display:none");
    $(".container-top").children().eq(4).attr("style", "display:block")
    $("#container-first-button").attr("disabled", false);
    $("#container-second-button").attr("disabled", false);
  })

  $(".container-bottomlist").find(":first-child").animate({width:0}, 'slow',() => {
    $(".container-bottomlist").find(":first-child").remove().appendTo(".container-bottomlist");
    $(".container-bottomlist").find(":last-child").attr("style", "display:none");
    $(".container-bottomlist").children().eq(3).attr("style", "display:block")
  })
});
