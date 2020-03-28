$(function (){
    let introH = $("#intro").innerHeight();
    let header = $("#header")
    let scrollOffset = $(window).scrollTop();

    checkScroll(scrollOffset);

/* Fixed Header */
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset){

        if( scrollOffset >= introH) {
            header.addClass("header--fixed");
        } else {
            header.removeClass("header--fixed");
        }
      }

/* Smooth Scroll */
    $("[data-scroll]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('scroll'),
            blockIdOffset = $(blockId).offset().top;

        $this.addClass("header--active");

        $("html, body").animate({
            scrollTop: blockIdOffset
        }, 500);

    });

/* Menu nav toggle */
    $("#nav__toggle").on("click", function(event){
        event.preventDefault();
        $(this).toggleClass("nav__toggle--active");
        $("nav").toggleClass("nav__toggle--active");
    });

/* Collapse */
    $("[data-collapse]").on("click", function(event) {
        event.preventDefault();

        let $this = $(this),
            blockId = $this.data('collapse');

        $this.toggleClass("active");
        $(blockId).slideToggle();
    });


/* Slider */
    $("[data-slider]").slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });











});
