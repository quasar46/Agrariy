$('[data-fancybox="video-gallery"]').fancybox({
    loop: true,
    arrows: false,
    infobar: true,
    toolbar: false,
    transitionEffect: "slide",
    afterLoad: function (instance, current) {
        let caption = current.opts.caption
        current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;"><img src="img/icons/close-fancy.svg"></img></a>');
        current.$content.append('<div class="fancybox-caption fancybox-caption--separate"><div class="fancybox-caption__body">' + caption + '</div></div>');
    }
})