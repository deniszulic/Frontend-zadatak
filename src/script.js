var slike1 = [
  "slike/slider-image-1.jpg",
  "slike/slider-image-2.jpg",
  "slike/slider-image-3.jpg",
  "slike/slider-image-4.jpg",
  "slike/slider-image-5.jpg",
  "slike/slider-image-6.jpg",
  "slike/slider-image-7.jpg",
  "slike/slider-image-8.jpg",
  "slike/slider-image-9.jpg",
];
var index = 6;
var index1 = 5;
var list1 = [...document.querySelector(".toplist").children];
var list2 = document.querySelector(".wrapper2");
var button = document.querySelector(".btn");

var first = () => {
  if (index > 0 && index < 10) {
    $(".toplist").children().first().fadeOut();
    setTimeout(() => {
      $(".toplist").children().first().remove();
      $(`<img src=slike/slider-image-${index}.jpg>`).appendTo(".toplist");
      index++;
    }, 500);
  } else {
    index = 1;
    $(".toplist").children().first().fadeOut();
    setTimeout(() => {
      $(".toplist").children().first().remove();
      $(`<img src=slike/slider-image-${index}.jpg>`).appendTo(".toplist");
      index++;
    }, 500);
  }
};
var second = () => {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=slike/slider-image-${index1}.jpg>`).appendTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=slike/slider-image-${index1}.jpg>`).appendTo(".bottomlist");
      index1--;
    }, 500);
  }
};
var third = () => {
  if (index > 0 && index < 10) {
    $(".toplist").children().last().fadeOut();
    setTimeout(() => {
      $(".toplist").children().last().remove();
      $(`<img src=slike/slider-image-${index}.jpg>`).prependTo(".toplist");
      index--;
    }, 500);
  } else {
    index = 9;
    $(".toplist").children().last().fadeOut();
    setTimeout(() => {
      $(".toplist").children().last().remove();
      $(`<img src=slike/slider-image-${index}.jpg>`).prependTo(".toplist");
      index--;
    }, 500);
  }
};
var fourth = () => {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().last().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().last().remove();
      $(`<img src=slike/slider-image-${index1}.jpg>`).prependTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(() => {
      $(".bottomlist").children().first().remove();
      $(`<img src=slike/slider-image-${index1}.jpg>`).prependTo(".bottomlist");
      index1--;
    }, 500);
  }
};

$(".btn").click(() => {
  first();
  second();
});
$(".btn1").click(() => {
  third();
  fourth();
});
