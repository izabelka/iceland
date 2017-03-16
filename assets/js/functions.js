---
---

$(document).scroll(function() {
    var cutoff = $(window).scrollTop();

    $('.location').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){
		document.getElementById("point").setAttribute("cx", $(this).attr('position-x'))
		document.getElementById("point").setAttribute("cy", $(this).attr('position-y'))
        return false;
        }
    });
});

$(function() {
    $("img.lazy").lazyload({
    	effect : "fadeIn"
	});
});
// 
// $(document).ready(function () {
//     slider();
// });
//
// $(window).scroll(function () {
//     slider();
// });

// function slider() {
//     if (document.body.scrollTop > 600)
//         $('#map').stop().animate({"margin-left": '0'});
//     else
//         $('#map').stop().animate({"margin-left": '-200'});
// }
