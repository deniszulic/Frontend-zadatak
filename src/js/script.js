var slike1 = [
  "assets/slider-image-1.jpg",
  "assets/slider-image-2.jpg",
  "assets/slider-image-3.jpg",
  "assets/slider-image-4.jpg",
  "assets/slider-image-5.jpg",
  "assets/slider-image-6.jpg",
  "assets/slider-image-7.jpg",
  "assets/slider-image-8.jpg",
  "assets/slider-image-9.jpg",
];
let indexaa=5, bottomindex=4;
/*var index = 6;
var index1 = 5;

var first = () => {
  if (index > 0 && index < 10 ) {
    $(".toplist").children().first().fadeOut();
    setTimeout(() => {
      $("#button1").prop('disabled',false);
      $(".toplist").children().first().remove();
      $(`<img src=assets/slider-image-${index}.jpg>`).appendTo(".toplist");
      index++;
    }, 500);
  } else {
    index = 1;
    $(".toplist").children().first().fadeOut();
    setTimeout(() => {
      $(".toplist").children().first().remove();
      $(`<img src=assets/slider-image-${index}.jpg>`).appendTo(".toplist");
      index++;
    }, 500);
  }
};
var second = () => {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=assets/slider-image-${index1}.jpg>`).appendTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=assets/slider-image-${index1}.jpg>`).appendTo(".bottomlist");
      index1--;
    }, 500);
  }
};
var third = () => {
  if (index > 0 && index < 10) {
    $(".toplist").children().last().fadeOut();
    setTimeout(() => {
      $(".toplist").children().last().remove();
      $(`<img src=assets/slider-image-${index}.jpg>`).prependTo(".toplist");
      index--;
    }, 500);
  } else {
    index = 9;
    $(".toplist").children().last().fadeOut();
    setTimeout(() => {
      $(".toplist").children().last().remove();
      $(`<img src=assets/slider-image-${index}.jpg>`).prependTo(".toplist");
      index--;
    }, 500);
  }
};
var fourth = () => {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().last().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().last().remove();
      $(`<img src=assets/slider-image-${index1}.jpg>`).prependTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=assets/slider-image-${index1}.jpg>`).prependTo(".bottomlist");
      index1--;
    }, 500);
  }
};*/
let slides=$(".toplist").children();
let slides_bottom=$(".bottomlist").children();
//for(let i=0;i<slides.length;i++){
  for(let i of [...Array(slides.length).keys()]){
  slides[i].style.display="none";
  slides_bottom[i].style.display="none";
}
//for(let i=0;i<5;i++){
  for(let i of [...Array(5).keys()]){
  slides[i].style.display="block";
}
//for(let i=0;i<4;i++){
for(let i of [...Array(4).keys()]){
  slides_bottom[i].style.display="block";
}
//console.log(slides[0])
/*
var index=1;
let a=(index)=>{
  let slides=$(".toplist").children();
  let slides_bottom=$(".bottomlist").children();
  console.log(slides);
  for(let i=0;i<slides.length;i++){
    slides[i].style.display="none";
    slides_bottom[i].style.display="none";
  }
  for(let i=index-1;i<index+4;i++){
    slides[i].style.display="block";
  }
}
a(index);*/
$("#button1").click(() => {
  //$("#button1").prop('disabled',true);

  /*
  first();
  second();*/

  //$(".toplist").children().first().remove();
  
  /*console.log(index)
  if(index>=5) index=0;
  a(index+1)
  index++;*/
  //$(".toplist").children().remove().appendTo(".toplist");
  //console.log(slides[0]);
  //slides[6].style.display="block";
  
  /*console.log(slides)
  console.log(slides[0])
  console.log(indexaa);*/
  /*$(".toplist").find(":first-child").css({
    "animation-duration":"0.01s",
    "animation-name": "fadeout",
    "-webkit-animation-name": "fadeout",
  "-webkit-animation-duration": "0.01s",
  })*/
  $(".toplist").find(":first-child").hide('slow',()=>{
    $(".toplist").find(":first-child").remove().appendTo(".toplist");
    $(".toplist").find(":last-child").attr("style", "display:none");
  /*if(indexaa>=9) indexaa=0;
  slides[indexaa].style.display="block";
  indexaa++;*/
  $(".toplist").children().eq(4).attr("style", "display:block")
  })

  $(".bottomlist").find(":first-child").hide('slow',()=>{
  $(".bottomlist").find(":first-child").remove().appendTo(".bottomlist");
  $(".bottomlist").find(":last-child").attr("style", "display:none");
  /*if(bottomindex>=9) bottomindex=0;
  slides_bottom[bottomindex].style.display="block";
  bottomindex++;*/
  $(".bottomlist").children().eq(3).attr("style", "display:block")
})});
$("#button2").click(() => {
  /*third();
  fourth();*/

//console.log(slides)
//console.log(displayed[4])

/*var displayed = slides.filter(function() {
  var element = $(this);

  if(element.css('display') == 'none') {
      return false;
  }

  return true;
});
for(let i=0;i<displayed.length;i++){
  console.log(displayed[i])
}*/
$(".toplist").children().eq(4).hide('slow',()=>{
  $(".toplist").find(":last-child").remove().prependTo(".toplist");
  $(".toplist").find(":first-child").attr("style", "display:block");
  /*if(indexaa<=0) indexaa=9;
  slides[indexaa-1].style.display="none";
  indexaa--;*/
  $(".toplist").children().eq(5).attr("style", "display:none")
})

$(".bottomlist").children().eq(3).hide('slow',()=>{
  $(".bottomlist").find(":last-child").remove().prependTo(".bottomlist");
  $(".bottomlist").find(":first-child").attr("style", "display:block");
  /*if(bottomindex<=0) bottomindex=9;
  slides_bottom[bottomindex-1].style.display="none";
  bottomindex--;*/
  $(".bottomlist").children().eq(4).attr("style", "display:none")
})
});
