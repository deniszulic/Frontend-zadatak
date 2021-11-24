"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var slides = $(".container-top").children();
var slides_bottom = $(".container-bottomlist").children();

for (var _i = 0, _arr = _toConsumableArray(Array(slides.length).keys()); _i < _arr.length; _i++) {
  var i = _arr[_i];
  slides[i].style.display = "none";
  slides_bottom[i].style.display = "none";
}

for (var _i2 = 0, _arr2 = _toConsumableArray(Array(5).keys()); _i2 < _arr2.length; _i2++) {
  var _i3 = _arr2[_i2];
  slides[_i3].style.display = "block";
}

for (var _i4 = 0, _arr3 = _toConsumableArray(Array(4).keys()); _i4 < _arr3.length; _i4++) {
  var _i5 = _arr3[_i4];
  slides_bottom[_i5].style.display = "block";
}

$("#container-first-button").click(function () {
  $("#container-first-button").attr("disabled", true);
  $("#container-second-button").attr("disabled", true);
  var width_top = $(".container-top").children().eq(4).width();
  $(".container-top").children().eq(4).animate({
    width: width_top - width_top
  }, 'slow', function () {
    $(".container-top").find(":last-child").remove().prependTo(".container-top");
    $(".container-top").find(":first-child").attr("style", "display:block");
    $(".container-top").children().eq(5).attr("style", "display:none");
    $("#container-first-button").attr("disabled", false);
    $("#container-second-button").attr("disabled", false);
  });
  var width_bottom = $(".container-bottomlist").children().eq(3).width();
  $(".container-bottomlist").children().eq(3).animate({
    width: width_bottom - width_bottom
  }, 'slow', function () {
    $(".container-bottomlist").find(":last-child").remove().prependTo(".container-bottomlist");
    $(".container-bottomlist").find(":first-child").attr("style", "display:block");
    $(".container-bottomlist").children().eq(4).attr("style", "display:none");
  });
});
$("#container-second-button").click(function () {
  $("#container-first-button").attr("disabled", true);
  $("#container-second-button").attr("disabled", true);
  $(".container-top").find(":first-child").animate({
    width: 0
  }, 'slow', function () {
    $(".container-top").find(":first-child").remove().appendTo(".container-top");
    $(".container-top").find(":last-child").attr("style", "display:none");
    $(".container-top").children().eq(4).attr("style", "display:block");
    $("#container-first-button").attr("disabled", false);
    $("#container-second-button").attr("disabled", false);
  });
  $(".container-bottomlist").find(":first-child").animate({
    width: 0
  }, 'slow', function () {
    $(".container-bottomlist").find(":first-child").remove().appendTo(".container-bottomlist");
    $(".container-bottomlist").find(":last-child").attr("style", "display:none");
    $(".container-bottomlist").children().eq(3).attr("style", "display:block");
  });
});