(function($) {
    $.fn.imagePopup = function(options) {

        let settings = $.extend({
            overlay: "rgba(0, 0, 0, 0.5)",
            closeButton: {
                src: null,
                width: "3rem",
                height: "3rem"
            },
            imageBorder: "0.5rem solid #fff",
            borderRadius: "0.5rem",
            imageWidth: "40rem",
            imageHeight: "30rem",
            marginTop: "2rem",
            imageCaption: {
                exist: true,
                color: "#fff",
                fontSize: "2rem",
                marginTop: "1rem"
            },
            open: null,
            close: null
        }, options)

        //Iterate through each image gallery
        return this.each(() => {

            var $overlay, $closeButton, $image, $imageCaption;
            setOverlayProperties();
            setCloseButtonProperties();
            setImageProperties();

            $(this).find("a").on('click', function(event) {
                event.preventDefault();

                var imageSource = $(this).children().attr("src");
                $image.attr("src", imageSource)

                if (settings.imageCaption.exist) {
                    var caption = $(this).children().attr("alt");
                    $imageCaption.text(caption)
                }

                if ($.isFunction(settings.open)) {
                    settings.open.call(this);
                }

                setTimeout(() => {
                    $overlay.css({ opacity: 0.1 }).show().animate({ "opacity": 1 })
                }, 300)
            })

            $closeButton.on('click', () => {
                if ($.isFunction(settings.close)) {
                    settings.close.call(this);
                }
                setTimeout(() => {
                    $overlay.animate({ opacity: 0.1 }, () => {
                        $overlay.fadeOut("slow");
                    })
                }, 300)
            });

            function setImageProperties() {
                $image = $('<img>');
                $image.css({
                    "width": settings.imageWidth,
                    "height": settings.imageHeight,
                    "border": settings.imageBorder,
                    "margin-top": settings.marginTop,
                    "border-radius": settings.borderRadius
                });
                $overlay.append($image);

                if (settings.imageCaption.exist) {
                    $imageCaption = $("<p></p>");
                    $imageCaption.css({
                        "color": settings.imageCaption.color,
                        "font-size": settings.imageCaption.fontSize,
                        "margin-top": settings.imageCaption.marginTop
                    });

                    $overlay.append($imageCaption);

                } else {

                }
            }


            function setOverlayProperties() {
                $overlay = $('<div></div>');
                $overlay.css({
                    "background": settings.overlay,
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px",
                    "display": "none",
                    "text-align": "center",
                    "width": "100%",
                    "height": "80%",
                    "padding-top": "5%"
                });
                $("body").append($overlay);
            }

            function setCloseButtonProperties() {
                var prop = {
                    "color": "#fff",
                    "cursor": "pointer",
                    "font-size": "2rem",
                    "width": settings.closeButton.width,
                    "height": settings.closeButton.height,
                    "position": "absolute",
                    "top": "5px",
                    "right": "5px",
                    "border": "0px",
                    "z-index": "1"
                }

                if (settings.closeButton.src) {
                    $closeButton = $("<img>");
                    $closeButton.attr("src", settings.closeButton.src)
                } else {
                    $closeButton = $("<span>X</span>")
                }

                $closeButton.css(prop);
                $overlay.append($closeButton);

            }


        })
    }
}(jQuery));


mybutton = $("#myBtn");
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.css("display", "block");
    } else {
        mybutton.css("display", "none");
    }
}

function topFunction() {
    document.documentElement.scrollTop = 0;
}