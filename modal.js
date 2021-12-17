
/* Fenetre modale */

for (i = 0; i < (document.getElementsByClassName("modal").length); i++) {

    let modal = document.getElementsByClassName("modal")[i];
    let btn = document.getElementsByClassName("myBtn")[i];
    let span = document.getElementsByClassName("close")[i];

    btn.onclick = function() {
    modal.style.display = "block";
    }

    span.onclick = function() {
    modal.style.display = "none";
    }

    window.addEventListener("click", function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    })

}