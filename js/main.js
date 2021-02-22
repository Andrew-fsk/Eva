$(document).ready(function () {
    var typed = new Typed('.banner-typed', {
        strings: ["КРАСИВО", "СЛАДКО", "ГОРЯЧО", "НЕЖНО"],
        typeSpeed: 120,
        loop: true,
        loopCount: Infinity,
        backDelay: 700,
    });
})

function modalToggle() {
    $('.modal').toggleClass('hide');
    $('.back-layer').toggleClass('hide');
    $('body').toggleClass('no-scroll');
}