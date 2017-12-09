$("ul").on("click", "li", function(){
    $(this).toggleClass("finishedItem");
});

$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e){
    if(e.which === 13) {
        var listItem = $(this).val();
        $(this).val("");
        $(".currentList").append("<li><span>X </span>"+listItem+"</li>");
    }
});