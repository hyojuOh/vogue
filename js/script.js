$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".popup_nav").toggleClass("on");
    }
);

// 네비 로고나오게
$(window).scroll(
    function(){
        if($(window).scrollTop() > 50) {
            $(".n_logo").addClass("active");
        }else{
            $(".n_logo").removeClass("active");
        }
    }
);