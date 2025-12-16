$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 10000,
    dots: true,
    slideToShow: 5,
    slideToScroll: 1,
    pauseOnHover: false,
    cssEase: 'ease'
});

$(function() {
   $(".box").on("hover mouseenter",function() {
       $(".open-list").slideDown();
   }),


   $(".open-list").on("hover mouseleave",function() {
       $(".open-list").slideUp();
   });


   $(".718-image").on("hover mouseenter",function(){
        $(".open-list-first").css("display","block");
        $(".open-list-second").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
   });
   $(".open-list-first").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
   });


   $(".911-image").on("hover mouseenter",function(){
        $(".open-list-second").css("display","block");
        $(".open-list-first").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
   });
   $(".open-list-second").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
   });


   $(".taycan-image").on("hover mouseenter",function(){
        $(".open-list-third").css("display","block");
        $(".open-list-first").css("display","none");
        $(".open-list-second").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
   });
   $(".open-list-third").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
   });


    $(".panamera-image").on("hover mouseenter",function(){
        $(".open-list-fours").css("display","block");
        $(".open-list-first").css("display","none");
        $(".open-list-second").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
    });
    $(".open-list-fours").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
    });


    $(".macan-image").on("hover mouseenter",function(){
        $(".open-list-fifth").css("display","block");
        $(".open-list-first").css("display","none");
        $(".open-list-second").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-sixth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
    });
    $(".open-list-fifth").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
    });


    $(".cayenne-image").on("hover mouseenter",function(){
        $(".open-list-sixth").css("display","block");
        $(".open-list-first").css("display","none");
        $(".open-list-second").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".addition-list").css("display","none");
        $(".filter").css("display","block");
        $(".others-list").css("display","none")
    });
    $(".open-list-sixth").on("hover mouseleave",function(){
        $(".open-list").delay("1000").slideUp("fast");
        $(".filter").delay("1000").slideUp("fast");
    });
});

$(function() {
    $(".open-addition").on("hover mouseenter",function(){
        $(".addition-list").slideDown();
        $(".others-list").css("display","none")
        $(".filter").css("display","block");
        $(".open-list").css("display", "none");
        $(".open-list-second").css("display","none");
        $(".open-list-first").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
    });

    $(".addition-list").on("mouseleave",function() {
        $(".addition-list").slideUp();
        $(".filter").css("display","none");
    });
});

$(function() {
    $(".open-others").on("hover mouseenter",function() {
        $(".others-list").slideDown();
        $(".addition-list").css("display","none");
        $(".open-list").css("display", "none");
        $(".open-list-second").css("display","none");
        $(".open-list-first").css("display","none");
        $(".open-list-third").css("display","none");
        $(".open-list-fours").css("display","none");
        $(".open-list-fifth").css("display","none");
        $(".open-list-sixth").css("display","none");
    });

    $(".open-others").on("hover mouseleave",function(){
    });

    $(".others-list").on("hover mouseleave",function(){
        $(".others-list").slideUp();
        $(".filter").css("display","none");
    });
});

$(function() {
    $(".share").on("hover mouseenter",function() {
        $(".fade-menu").css("display","block");
        $(".black-box").css("background-color","#CD242D");
        $(".black-box").css("transition","0.3s all");
    });
    
    $(".out-box").on("hover mouseleave",function() {
        $(".fade-menu").css("display","none");
        $(".black-box").css("background-color","#313639");
    });

    $(".fade-menu").on("hover mouseleave",function() {
        $(".fade-menu").css("display","none");
    });

    $(".black-box").on("hover mouseenter",function() {
        $(".fade-menu").css("display","block");
    });
});


$(function() {
    $(".btn-country").click(function() {
        $(".country-list").toggle();
    });

    $(".btn-area").click(function() {
        $(".area-list").toggle();
    });
});