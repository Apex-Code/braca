$("li").click(function(){
    if ($(this).css("color") === "rgb(128, 128, 128)") {
        $(this).removeClass("finishedItem");
    } else {
        $(this).addClass("finishedItem");
    }
});

