
$(document).ready(function(){
    // BOTÃO VER MAIS
    $(".more").click(function(){
        $(".show-more").css({
            "display":"block"
        });
        $(".more").css({
            "display":"none"
        });
        $(".show-more").show("slow");
        $(".hide").css({
            "display":"block"
        });
    });
    $(".hide").click(function(){
        $(".hide").css({
            "display":"none"
        });
        $(".show-more").css({
            "display":"none"
        });
        $(".more").css({
            "display":"block"
        });
    });
});