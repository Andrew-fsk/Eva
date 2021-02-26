$(document).ready(function ($) {
    var typed = new Typed('.banner-typed', {
        strings: ["КРАСИВО", "СЛАДКО", "ГОРЯЧО", "НЕЖНО"],
        typeSpeed: 120,
        loop: true,
        loopCount: Infinity,
        backDelay: 700,
    });
    setTimeout(function () {
        $('#map').append('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.73817915302!2d30.336452416096893!3d59.93648658187544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46963109bdd56447%3A0xcf4c2d7a774f9943!2sItal&#39;yanskaya%20Ulitsa%2C%2012%D0%90%2C%20Sankt-Peterburg%2C%20Russia%2C%20191023!5e0!3m2!1sen!2sua!4v1614290745416!5m2!1sen!2sua"\n' +
            '                        width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>')
    }, 400)

    if (isMobile.any()) {
        $('body').append('<script type="text/javascript" src="./js/select2.min.js"></script>');
        let select = $('.mob-select-tab');
        select.select2({
            minimumResultsForSearch: -1,
        })

        select.on('select2:select', function (e) {
            var id = e.params.data.id;
            $("[href='#" + id + "']").click();
        });
    }

    let touchmoved;

    $(document).on('click touchend', '.master-item', function (e) {
        if (touchmoved !== true) {
            if(!$(e.target).hasClass('tel-more')){
                modalGirlToggle();
                return false;
            }
        }
    }).on('touchmove', '.master-item', function () {
        touchmoved = true;
    }).on('touchstart', '.master-item', function () {
        touchmoved = false;
    });

    $('.slider').slick({
        swipeToSlide: true,
        arrows: true,
        dots: false,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        touchMove: true,
        asNavFor: '.slider-nav',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    });

    $('.reviews-slider').slick({
        swipeToSlide: true,
        arrows: true,
        dots: true,
        slidesToShow: 1,
        infinite: false,
        slidesToScroll: 1,
        touchMove: true,
        adaptiveHeight: true,
        fade: true,
    });

    $('.slider-nav').slick({
        swipeToSlide: true,
        arrows: true,
        dots: false,
        slidesToShow: 8,
        infinite: false,
        slidesToScroll: 1,
        touchMove: true,
        asNavFor: '.slider',
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 6,
                }
            },
        ]
    });

    $('.square').each(function () {
        $(this).css('height', $(this).innerWidth());
    })

    const sections = document.querySelectorAll("section[id]");

    window.addEventListener("scroll", navHighlighter);

    function navHighlighter() {

        let scrollY = window.pageYOffset;

        sections.forEach(current => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 130;
            sectionId = current.getAttribute("id");

            if (
                scrollY > sectionTop &&
                scrollY <= sectionTop + sectionHeight
            ){
                document.querySelector("nav a[href*=" + sectionId + "]").classList.add("active");
            } else {
                document.querySelector("nav a[href*=" + sectionId + "]").classList.remove("active");
            }
        });
    }

    let menuItems = $('nav').find("a");

    menuItems.click(function(e){
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top-$('header').innerHeight();
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 850);
        e.preventDefault();
    });

})


$(window).resize(function () {
    $('.square').each(function () {
        $(this).css('height', $('.slider .slide').innerWidth());
    })
})

function modalToggle() {
    $('.modal').toggleClass('hide');
    $('.back-layer').toggleClass('hide');
    $('body').toggleClass('no-scroll');
}

function modalGirlToggle() {
    $('.girl-modal').toggleClass('hide');
    $('.back-layer-girl').toggleClass('hide');
    $('body').toggleClass('no-scroll');
}

$(function () {
    var tabContainers = $('.tabs > div');
    tabContainers.hide().filter(':first').show();
    $('.tabs .tab-list a').click(function () {
        tabContainers.hide();
        tabContainers.filter(this.hash).show();
        $('.tabs .tab-list>li').removeClass('active');
        $(this).parent('li').addClass('active');
        return false;
    }).filter(':first').click();
});


/* Проверка mobile усройств*/

isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};