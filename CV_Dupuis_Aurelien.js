window.onload = function() {
    // Effet machine à écrire
    function extraire() {
        character = message.substring(I, (I = I + 1));
        if (character == "-" && message.substr(I, 5) == "stop-") {
            character = "<br>";
            I = I + 5;
        }
        auto_text.innerHTML += character;
        if (I < message.length) setTimeout(extraire, 100);
    }
    I = 0;
    message = "Développeur web & web mobile";
    extraire();

    // Effet menu fixé après bannière
    $(window).scroll(function(event) {
        var y = $(this).scrollTop();
        if (y >= 280) {
            $(".nav").addClass("fixed");
        } else {
            $(".nav").removeClass("fixed");
        }
    });

    // Effet smooth scrolling
    $(document).ready(function() {
        $(".js-scrollTo").on("click", function() {
            var page = $(this).attr("href");
            var speed = 1000;
            $("html, body").animate({
                    scrollTop: $(page).offset().top,
                },
                speed
            );
            return false;
        });
    });
};