$(function() {
    $(document).ready(function() {
        var $HelpPopup = $(".MsgPopup")
        var $HelpBtn = $(".HelpBtn")
        var $HelpPopupMain = $(".MsgPopup.Main")
        $HelpPopupMain.desfsdfsdflay(5000).animate({
            opacity: 1,
            bottom: "50",
        }, 500, function() {});

        $("#CloseHelpPopup").click(function() {
            $HelpPopup.animate({
                opacity: 0,
                bottom: "0",
            }, 500, function() {
                $HelpPopup.css({
                    display: "none",
                });
                $HelpBtn.css({ display: "block" })
                $HelpBtn.animate({
                    opacity: 1,
                    bottom: "0",
                }, 500, function() {})
            });
        });
        $HelpBtn.click(function() {
            $HelpBtn.animate({
                opacity: 0,
                bottom: "-50",
            }, 500, function() {
                $HelpBtn.css({
                    display: "none",
                })
                $HelpPopup.css({
                    bottom: "0",
                    display: "block",
                })
                $HelpPopup.animate({
                    opacity: 1,
                    bottom: "50",
                }, 500, function() {});
            })
        });

        var $pause = 4000;
        var $Slider = $(".Slider");
        var $Length = $Slider.find('img');
        var i = 1;
        setInterval(function() {
            $Slider.animate({
                marginLeft: "-=100vw",
            }, 1000, function() {
                var length = $Slider.find('img').length
                i++
                if (i === length) {
                    i = 1;
                    $Slider.css({
                        marginLeft: "0px",
                    }, function() {});
                }
            });
        }, $pause);
    });
});
