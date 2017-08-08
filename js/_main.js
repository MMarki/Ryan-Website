$(document).ready(function(){ 
     $(window).scroll(function(){
         if ($(window).scrollTop() < 1000){
            $('#left').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
        }
    }).scroll();
});  