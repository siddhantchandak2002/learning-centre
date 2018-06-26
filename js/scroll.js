$(".our-h1").click(function() {
    $('html, body').animate({
        scrollTop: $("#our").offset().top
    }, 2000);
});

$(".self-h1").click(function() {
    $('html, body').animate({
        scrollTop: $("#self").offset().top
    }, 2000);
});
