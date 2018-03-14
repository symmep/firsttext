$(function () {
    // 切换语言
    var $dropDownM = $(".dropDown-menu");
    $(".dropDown").on("click",function () {
        $dropDownM.stop().slideToggle();
        return false;
    });
    var $navDown = $(".nav-down");
    $("#nav-button").on("click",function () {
        $navDown.slideToggle();
    });

    // 轮播图
    var swiperImg = new Swiper ( '.images .swiper-container', {
        direction: 'horizontal',
        autoplay : 2000,
        loop: true,
        noSwiping : true,
        pagination: '.images .swiper-pagination',
        nextButton: '.images .swiper-button-next',
        prevButton: '.images .swiper-button-prev',
    });
    $(".images").hover(
        function () {
            swiperImg.stopAutoplay();
        },
        function () {
            swiperImg.startAutoplay();
        }
    );
    var swiper1 = new Swiper ( '.saleHouse .swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.saleHouse .swiper-pagination'
    });
    var swiper2 = new Swiper ( '.guesthouse .swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.guesthouse .swiper-pagination'
    });
    var swiper3 = new Swiper ( '.activity-m .swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: '.activity-m .swiper-pagination'
    });
    var swiper4 = new Swiper ( '.information-m .swiper-container', {
        direction: 'horizontal',
        slidesPerView : 2,
        loop: true,
        pagination: '.information-m .swiper-pagination'
    });
    // 视频
    var $play = $(".video-play");
    $play.on("click",function () {
        $("#popularize-video")[0].play();
        $(".video-play").hide();
        $(".video-bg").hide();
    });
    var $pause = $("#popularize-video");
    $pause.on("click",function () {
        $("#popularize-video")[0].pause();
        $(".video-play").show();
        $(".video-bg").show();
    });
    var goTop = document.getElementById('goTop');
    goTop.onclick = function () {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var timer = setInterval(function () {
            window.scrollTo( 0,scrollTop-= 200);
            if (scrollTop <= 0){
                clearInterval(timer)
            }
        },30);
    };
});






