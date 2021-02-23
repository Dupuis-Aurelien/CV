/* MACHINE A ECRIRE */

function extraire() {
    if (++i < message.length) { // On incremente i et on compare a la taille du message.
        // Si i ne depasse pas le nombre de caracteres dans le message
        // Note : le premier caractere de la chaine commence a l'index 0
        if (message[i] == '\n') {
            // Si saut de ligne on remplace par l'equivalent HTML : "<br/>".
            document.getElementById("auto_text").innerHTML += '<br/>';
        } else {
            // Sinon on ajoute simplement le caractere a l'emplacement courant.
            document.getElementById("auto_text").innerHTML += message[i];
        }
    } else {
        // Sinon on arrete le timer car le texte a fini de s'afficher.
        clearTimeout(interval);
    }
}

var i = -1; // On incremente i en debut de fonction, il vaudra donc 0 a la premiere execution.
var message = "Développeur \nweb & web mobile \n2021"; // Message a afficher, on utilise le caractere \n pour le retour a la ligne.
var interval = setInterval(extraire, 120); // On declanche le timer et on le garde dans une variable pour l'arreter plus tard.

/* EFFET SCROOL */

(function() {
    var fig = document.querySelectorAll(".liste-1")[0];
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 650) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 640) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 630) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 620) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 610) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 600) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 590) {
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
    var posTxt = fig.offsetTop;

    function effet() {
        var posCurseur = this.pageYOffset;
        if (posTxt - posCurseur < 580) {
            fig.style.left = 0;
            fig.style.opacity = 1;
        } else {
            fig.style.left = "160%";
            fig.style.opacity = 0;
        }
    }
    window.addEventListener("scroll", effet);
})();


var isImgVisible = function(lazyImage) {
    return lazyImage.getBoundingClientRect().top <= window.innerHeight &&
        lazyImage.getBoundingClientRect().bottom >= 0 &&
        getComputedStyle(lazyImage).display !== "none"
}