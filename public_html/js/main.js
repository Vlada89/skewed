$(document).ready(function () {


// Add header BG on scroll

    function checkHeader() {

        let scrollFromTop = $(window).scrollTop();
        let headerHeight = $('header').outerHeight();
        if (scrollFromTop > headerHeight) {
            $('header').addClass('has-bg py-lg-1').removeClass('py-lg-4');
        } else {
            $('header').removeClass('has-bg py-lg-1').addClass('py-lg-4');
        }
    }

    function animation() {
        var windowHight = $(window).height();
        var scroll = $(window).scrollTop();
        $('.animation').each(function () {
            var pozicija = $(this).offset().top;
            var animacija = $(this).attr('data-animation');
            var delay = $(this).attr('data-delay');
            if (pozicija < scroll + windowHight - 150) {
                $(this).css('animation-delay', delay);
                $(this).addClass(animacija);
            }
        });
    }
    $(window).scroll(function () {
        checkHeader();
        animation();

    });
    if ($('.pgwSlideshow').length > 0) {
        $('.pgwSlideshow').pgwSlideshow({
            maxHeight: 400
        });
    }

    if ($('.full-slider').length > 0) {


        $('.full-slider').owlCarousel({
            autoplay: true,
            loop: true,
            nav: false,
            margin: 20,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    margin: 0
                },
                500: {
                    items: 2
                },
                800: {
                    items: 3
                },
                1100: {
                    items: 4

                }
            }
        });
    }
    if ($('.num').length > 0) {
        $('.num').counterUp({
            time: 2000
        });
    }
    $(function () {
        $(".contact-form").validate({
            highlight: function (element) {
                $(element).addClass("is-invalid").removeClass("is-valid");
                $(element).closest('.form-group').addClass("is-invalid").removeClass("is-valid");
            },
            unhighlight: function (element) {
                $(element).removeClass('is-invalid').addClass('is-valid');
                $(element).closest('.form-group').addClass("is-valid").removeClass("is-invalid");
            },
            rules: {
                name: {
                    required: true
                },
                email: {
                    required: true,
                    email: true
                }

            },
            messages: {
                name: {
                    required: 'Name je obavezno polje'
                },
                email: {
                    required: 'Email je obavezno polje',
                    email: 'Unesite validan email'
                }

            },
            errorElement: 'p',
            errorPlacement: function (error, element) {
                error.appendTo($(element).closest('.form-group').find('.error-msg'));
            }

        });
    });




});
