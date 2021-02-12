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

    /* Effet d'écriture fluide */

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

/* EFFET SCROOL */

(function() {
    var fig = document.querySelectorAll(".liste-1")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 670) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();

(function() {
    var fig = document.querySelectorAll(".liste-2")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 660) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();
(function() {
    var fig = document.querySelectorAll(".liste-3")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 650) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();

(function() {
    var fig = document.querySelectorAll(".liste-4")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 640) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();
(function() {
    var fig = document.querySelectorAll(".liste-5")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 630) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();

(function() {
    var fig = document.querySelectorAll(".liste-6")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 620) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();
(function() {
    var fig = document.querySelectorAll(".liste-7")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 610) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();

(function() {
    var fig = document.querySelectorAll(".liste-8")[0];
    var posImg = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posImg - posCurseur < 600) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();