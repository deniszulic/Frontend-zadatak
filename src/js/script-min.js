let slides=$(".container-top").children(),slides_bottom=$(".container-bottomlist").children();for(let t of[...Array(slides.length).keys()])slides[t].style.display="none",slides_bottom[t].style.display="none";for(let t of[...Array(5).keys()])slides[t].style.display="block";for(let t of[...Array(4).keys()])slides_bottom[t].style.display="block";$("#container-first-button").click(()=>{$("#container-first-button").attr("disabled",!0),$("#container-second-button").attr("disabled",!0);let t=$(".container-top").children().eq(4).width();$(".container-top").children().eq(4).animate({width:-t},"slow",()=>{$(".container-top").find(":last-child").remove().prependTo(".container-top"),$(".container-top").find(":first-child").attr("style","display:block"),$(".container-top").children().eq(5).attr("style","display:none"),$("#container-first-button").attr("disabled",!1),$("#container-second-button").attr("disabled",!1)});let i=$(".container-bottomlist").children().eq(3).width();$(".container-bottomlist").children().eq(3).animate({width:-i},"slow",()=>{$(".container-bottomlist").find(":last-child").remove().prependTo(".container-bottomlist"),$(".container-bottomlist").find(":first-child").attr("style","display:block"),$(".container-bottomlist").children().eq(4).attr("style","display:none")})}),$("#container-second-button").click(()=>{$("#container-first-button").attr("disabled",!0),$("#container-second-button").attr("disabled",!0),$(".container-top").find(":first-child").animate({width:0},"slow",()=>{$(".container-top").find(":first-child").remove().appendTo(".container-top"),$(".container-top").find(":last-child").attr("style","display:none"),$(".container-top").children().eq(4).attr("style","display:block"),$("#container-first-button").attr("disabled",!1),$("#container-second-button").attr("disabled",!1)}),$(".container-bottomlist").find(":first-child").animate({width:0},"slow",()=>{$(".container-bottomlist").find(":first-child").remove().appendTo(".container-bottomlist"),$(".container-bottomlist").find(":last-child").attr("style","display:none"),$(".container-bottomlist").children().eq(3).attr("style","display:block")})});