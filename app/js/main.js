$(function() {
    // $('.greetings__popular').on('click', function(){
    //     $('.greetings__popular').addClass('active');
    //     $('.greetings__all').removeClass('active');
    // })
    $(".products-slider__inner").slick({
        dots: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/content/arrow-prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/content/arrow-next.png"></img></button>'
    });

    $(".rate-star").rateYo({
        rating: 4,
        starWidth: "16px",
        normalFill: "#ffc822",
        ratedFill: "#ffc822",
        spacing: "2px",
        fullStar: true,
        starSvg: '<svg xmlns = "http://www.w3.org/2000/svg" width = "24" height = "24" viewBox = "0 0 24 24"><path d = "M12 6.76l1.379 4.246h4.465l-3.612 2.625 1.379 4.246-3.611-2.625-3.612 2.625 1.379-4.246-3.612-2.625h4.465l1.38-4.246zm0-6.472l-2.833 8.718h-9.167l7.416 5.389-2.833 8.718 7.417-5.388 7.416 5.388-2.833-8.718 7.417-5.389h-9.167l-2.833-8.718z"></path></svg >',
        readOnly: false
    });

    $(".feeds-slider__inner").slick({
        dots: false,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="images/content/arrow-prev.png"></img></button>',
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="images/content/arrow-next.png"></img></button>'
    });


    var mixer = mixitup('.realese__content');
});