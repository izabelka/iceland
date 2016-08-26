---
---

$(document).scroll(function() {
    var cutoff = $(window).scrollTop();
    
    $('.location').each(function(){
        if($(this).offset().top + $(this).height() > cutoff){
		document.getElementById("point").setAttribute("cx", $(this).attr('position-x'))
		document.getElementById("point").setAttribute("cy", $(this).attr('position-y'))
        return false; // stops the iteration after the first one on screen
        }
    });
});
