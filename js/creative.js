! function(a) {
    "use strict";
    a(document).on("click", "a.page-scroll", function(e) {
        var l = a(this);
        a("html, body").stop().animate({
            scrollTop: a(l.attr("href")).offset().top - 50
        }, 1250, "easeInOutExpo"), e.preventDefault()
    }), a("body").scrollspy({
        target: ".navbar-fixed-top",
        offset: 51
    }), a(".navbar-collapse ul li a").click(function() {
        a(".navbar-toggle:visible").click()
    }), window.sr = ScrollReveal(), sr.reveal(".sr-icons", {
        duration: 600,
        scale: .3,
        distance: "0px"
    }, 200), sr.reveal(".sr-button", {
        duration: 1e3,
        delay: 200
    }), sr.reveal(".sr-contact", {
        duration: 600,
        scale: .3,
        distance: "0px"
    })
}(jQuery);