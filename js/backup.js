

    } else if($(".open-list").mouseout().css("display")===("block")) {
        $(".open-list").delay(2000).slideUp();
        $(".open-list").slideUp(".open-list-first");
        $(".filter").delay(2000).fade();

    } else if($(".top-contents").mouseout().css("display")===("block")) {
        $(".open-list").delay(2000).slideUp();
        $(".open-list").slideUp(".open-list-first");
        $(".filter").delay(2000).fade();


＄('.911').mouseover(function() {
    if($(".open-list-second").css("display")==="none") {
        $(".open-list-second").slideDown("3000");
    } else if($(".open-list-second").css("display")==="block"){
        $(".open-list-second").slideUp("3000");
    }
});

＄('.taycan').mouseover(function() {
    if($(".open-list-third").css("display")==="none") {
        $(".open-list-third").slideDown("3000");
    } else if($(".open-list-third").css("display")==="block"){
        $(".open-list-third").slideUp("3000");
    }
});

＄('.panamera').mouseover(function() {
    if($(".open-list-fours").css("display")==="none") {
        $(".open-list-fours").slideDown("3000");
    } else if($(".open-list-fours").css("display")==="block"){
        $(".open-list-fours").slideUp("3000");
    }
});

＄('.macan').mouseover(function() {
    if($(".open-list-fifth").css("display")==="none") {
        $(".open-list-fifth").slideDown("3000");
    } else if($(".open-list-fifth").css("display")==="block"){
        $(".open-list-fifth").slideUp("3000");
    }
});

＄('.cayenne').mouseover(function() {
    if($(".open-list-sixth").css("display")==="none") {
        $(".open-list-sixth").slideDown("3000");
    } else if($(".open-list-sixth").css("display")==="block"){
        $(".open-list-sixth").slideUp("3000");
    }
});


$(function() {
    $(".718-image").hover(function() {
        if ($(".open-list").css("display")===("none")) {
            $(".open-list").slideDown();
            $(".open-list-first").show();
            $(".filter").show();
        }
    });

    $(document).on({

        "mouseleave": function() {
            $(".open-list").slideUp();
            $(".open-list-first").delay("5000").slideUp();
            $(".filter").hide();
        }

    }, ".open-list", ".top-contents");
});

$(function() {
    $(".911-image").hover(function() {
        if ($(".open-list").css("display")===("none")) {
            $(".open-list").slideDown();
            $(".open-list-second").show();
            $(".filter").show();
        }
    });

    $(document).on({

        "mouseleave": function() {
            $(".open-list").slideUp();
            $(".open-list-second").delay("5000").slideUp();
            $(".filter").hide();
        }

    }, ".open-list", ".top-contents");
});


$(".911-image").hover(function() {
    $(".open-list").slideDown();
    $(".open-list-second").slideDown();

    $(document).on({
        "mouseleave": function(){
            $(".open-list").slideUp("fast");
            $(".open-list-second").slideUp();
        }
    },".open-list",".open-list-second",".top-container")
});

$(".taycan-image").hover(function() {
    $(".open-list").slideDown();
    $(".open-list-third").slideDown();

    $(document).on({
        "mouseleave": function(){
            $(".open-list").slideUp("fast");
            $(".open-list-third").slideUp();
        }
    },".open-list",".open-list-third",".top-container")
});

$(".panamera-image").hover(function() {
    $(".open-list").slideDown();
    $(".open-list-fours").slideDown();

    $(document).on({
        "mouseleave": function(){
            $(".open-list").slideUp("fast");
            $(".open-list-fours").slideUp();
        }
    },".open-list",".open-list-fours",".top-container")
});

$(".macan-image").hover(function() {
    $(".open-list").slideDown();
    $(".open-list-fifth").slideDown();

    $(document).on({
        "mouseleave": function(){
            $(".open-list").slideUp("fast");
            $(".open-list-fifth").slideUp();
        }
    },".open-list",".open-list-fifth",".top-container")
});

$(".cayenne-image").hover(function() {
    $(".open-list").slideDown();
    $(".open-list-sixth").slideDown();

    $(document).on({
        "mouseleave": function(){
            $(".open-list").slideUp("fast");
            $(".open-list-sixth").slideUp();
        }
    },".open-list",".open-list-sixth",".top-container")
});

