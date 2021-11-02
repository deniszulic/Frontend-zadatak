"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slike1 = ["slike/slider-image-1.jpg", "slike/slider-image-2.jpg", "slike/slider-image-3.jpg", "slike/slider-image-4.jpg", "slike/slider-image-5.jpg", "slike/slider-image-6.jpg", "slike/slider-image-7.jpg", "slike/slider-image-8.jpg", "slike/slider-image-9.jpg"];
var index = 6;
var index1 = 5;

var list1 = _toConsumableArray(document.querySelector(".toplist").children);

var list2 = document.querySelector(".wrapper2");
var button = document.querySelector(".btn");

var first = function first() {
  if (index > 0 && index < 10) {
    $(".toplist").children().first().fadeOut();
    setTimeout(function () {
      $(".toplist").children().first().remove();
      $("<img src=slike/slider-image-".concat(index, ".jpg>")).appendTo(".toplist");
      index++;
    }, 500);
  } else {
    index = 1;
    $(".toplist").children().first().fadeOut();
    setTimeout(function () {
      $(".toplist").children().first().remove();
      $("<img src=slike/slider-image-".concat(index, ".jpg>")).appendTo(".toplist");
      index++;
    }, 500);
  }
};

var second = function second() {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().first().fadeOut();
    setTimeout(function () {
      $(".bottomlist").children().first().remove();
      $("<img src=slike/slider-image-".concat(index1, ".jpg>")).appendTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(function () {
      $(".bottomlist").children().first().remove();
      $("<img src=slike/slider-image-".concat(index1, ".jpg>")).appendTo(".bottomlist");
      index1--;
    }, 500);
  }
};

var third = function third() {
  if (index > 0 && index < 10) {
    $(".toplist").children().last().fadeOut();
    setTimeout(function () {
      $(".toplist").children().last().remove();
      $("<img src=slike/slider-image-".concat(index, ".jpg>")).prependTo(".toplist");
      index--;
    }, 500);
  } else {
    index = 9;
    $(".toplist").children().last().fadeOut();
    setTimeout(function () {
      $(".toplist").children().last().remove();
      $("<img src=slike/slider-image-".concat(index, ".jpg>")).prependTo(".toplist");
      index--;
    }, 500);
  }
};

var fourth = function fourth() {
  if (index1 > 0 && index1 < 10) {
    $(".bottomlist").children().last().fadeOut();
    setTimeout(function () {
      $(".bottomlist").children().last().remove();
      $("<img src=slike/slider-image-".concat(index1, ".jpg>")).prependTo(".bottomlist");
      index1--;
    }, 500);
  } else {
    index1 = 9;
    $(".bottomlist").children().first().fadeOut();
    setTimeout(function () {
      $(".bottomlist").children().first().remove();
      $("<img src=slike/slider-image-".concat(index1, ".jpg>")).prependTo(".bottomlist");
      index1--;
    }, 500);
  }
};

$(".btn").click(function () {
  first();
  second();
});
$(".btn1").click(function () {
  third();
  fourth();
});