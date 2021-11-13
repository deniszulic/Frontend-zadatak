let slides = $(".toplist").children();
let slides_bottom = $(".bottomlist").children();
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
$("#button1").click(() => {
  $(".toplist").find(":first-child").hide('slow', () => {
    $(".toplist").find(":first-child").remove().appendTo(".toplist");
    $(".toplist").find(":last-child").attr("style", "display:none");
    $(".toplist").children().eq(4).attr("style", "display:block")
  })

  $(".bottomlist").find(":first-child").hide('slow', () => {
    $(".bottomlist").find(":first-child").remove().appendTo(".bottomlist");
    $(".bottomlist").find(":last-child").attr("style", "display:none");
    $(".bottomlist").children().eq(3).attr("style", "display:block")
  })
});
$("#button2").click(() => {
  $(".toplist").children().eq(4).hide('slow', () => {
    $(".toplist").find(":last-child").remove().prependTo(".toplist");
    $(".toplist").find(":first-child").attr("style", "display:block");
    $(".toplist").children().eq(5).attr("style", "display:none")
  })

  $(".bottomlist").children().eq(3).hide('slow', () => {
    $(".bottomlist").find(":last-child").remove().prependTo(".bottomlist");
    $(".bottomlist").find(":first-child").attr("style", "display:block");
    $(".bottomlist").children().eq(4).attr("style", "display:none")
  })
});
