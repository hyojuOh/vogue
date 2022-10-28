$(".burger").click(
    function(){
        $(this).toggleClass("on");
        $(".popup_nav").toggleClass("on");
    }
);


// 빨간띠 큰거
$(".mCon1").hover(
    function(){
        $(".box1").stop().fadeToggle();
    }
);
$(".mCon2").hover(
    function(){
        $(".box2").stop().fadeToggle();
    }
);
$(".mCon3").hover(
    function(){
        $(".box3").stop().fadeToggle();
    }
);

// 빨간티 작은거
$(".imgBox1 li:eq(0)").hover(
    function(){
        $(".i-box1").stop().fadeToggle();
    }
);
$(".imgBox1 li:eq(1)").hover(
    function(){
        $(".i-box2").stop().fadeToggle();
    }
);
$(".imgBox1 li:eq(2)").hover(
    function(){
        $(".i-box3").stop().fadeToggle();
    }
);
// 2번째
$(".imgBox2 li:eq(0)").hover(
    function(){
        $(".i-box4").stop().fadeToggle();
    }
);
$(".imgBox2 li:eq(1)").hover(
    function(){
        $(".i-box5").stop().fadeToggle();
    }
);
$(".imgBox2 li:eq(2)").hover(
    function(){
        $(".i-box6").stop().fadeToggle();
    }
);
// 마지막
$(".imgBox3 li:eq(0)").hover(
    function(){
        $(".i-box7").stop().fadeToggle();
    }
);
$(".imgBox3 li:eq(1)").hover(
    function(){
        $(".i-box8").stop().fadeToggle();
    }
);
$(".imgBox3 li:eq(2)").hover(
    function(){
        $(".i-box9").stop().fadeToggle();
    }
);
$(".imgBox3 li:eq(3)").hover(
    function(){
        $(".i-box10").stop().fadeToggle();
    }
);
$(".imgBox3 li:eq(4)").hover(
    function(){
        $(".i-box11").stop().fadeToggle();
    }
);
$(".imgBox3 li:eq(5)").hover(
    function(){
        $(".i-box12").stop().fadeToggle();
    }
);