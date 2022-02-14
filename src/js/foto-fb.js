// стилизация fancybox
$('[data-fancybox="foto-gallery"]').fancybox({
    loop: true,
    arrows: false,
    infobar: true,
    toolbar: false,
    transitionEffect: "slide",
    afterLoad: function (instance, current) {
        if (instance.group.length > 1 && current.$content) {
            current.$content.append('<a data-fancybox-next class="button-next arrow-fancy" href="javascript:;"><img src="img/icons/arrow-next-fancy.svg"></img></a><a data-fancybox-prev class="button-previous arrow-fancy" href="javascript:;"><img src="img/icons/arrow-prev-fancy.svg"></img></a>');
        }
        let currentSlide = instance.currIndex + 1
        let totalSlide = instance.group.length
        let caption = current.opts.caption
        current.$content.append('<a data-fancybox-close class="button-close" href="javascript:;"><img src="img/icons/close-fancy.svg"></img></a>');
        current.$content.append('<div class="fancybox-infobar"><span data-fancybox-index>' + currentSlide + '</span>&nbsp;/&nbsp;<span data-fancybox-count>' + totalSlide + '</span></div>');
        current.$content.append('<div class="fancybox-caption fancybox-caption--separate"><div class="fancybox-caption__body">' + caption + '</div></div>');
        current.$content.append('<button data-fancybox-zoom="" class="fancybox-button fancybox-button--zoom" title="Zoom" disabled=""><img src="img/icons/full.svg"></button>');
    }
})