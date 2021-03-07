/* MACHINE A ECRIRE */

(function() {

    let i = -1;
    let message = "\nweb & web mobile";
    let interval = setInterval(extraire, 120);

    function extraire() {
        if (++i < message.length) {
            if (message[i] == '\n') {
                document.getElementById("auto_text").innerHTML += '<br/>';
            } else {
                document.getElementById("auto_text").innerHTML += message[i];
            }
        } else {
            clearTimeout(interval);
        }
    }
})();


/* EFFET SCROOL */

(function() {

    for (let ligne = 1; ligne < 9; ligne++) {
        let fig = document.querySelectorAll(".liste-" + ligne)[0];
        let posTxt = fig.offsetTop;
        let positionCurseurActuel = 650;

        function effet() {
            var posCurseur = this.pageYOffset;
            if (posTxt - posCurseur < positionCurseurActuel) {
                fig.style.left = 0;
                fig.style.opacity = 1;
            } else {
                fig.style.left = "160%";
                fig.style.opacity = 0;
            }
        }


        window.addEventListener("scroll", effet);
    }
})();