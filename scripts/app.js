$(function() {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
 
        if (scroll >= 40) {
            $(".header-container, .help, .menu-right, .question-mark").addClass('smaller');
            $(".logo img").css({
                "padding-top":"15px",
                "height":"30px",
                "width":"151px"
            });
        } else {
            $(".header-container, .help, .menu-right, .question-mark").removeClass("smaller");
            $(".logo img").css({
                "padding-top":"25px",
                "height":"50px",
                "width":"252px"
            });
        }
    });
});
