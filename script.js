
/* Meilleur film */
let image = document.getElementById("image_meilleur_film");
let titre = document.getElementById("titre_meilleur_film");
let resume = document.getElementById("résumé_meilleur_film");
let mod = document.getElementById("meilleur_film_modal");

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => image.src = data["results"][0]["image_url"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => titre.textContent = data["results"][0]["title"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => resume.textContent = data["results"][0]["description"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => mod.textContent = "Titre : " + data["results"][0]["title"] + " ; Genre : " + data["results"][0]["genres"]
        + " ; Date de sortie : " + data["results"][0]["date_published"] + " ; Rated : " + data["results"][0]["rated"]
        + " ; Score IMDB : " + data["results"][0]["imdb_score"] + " ; Réalisateur : " + data["results"][0]["directors"]
        + " ; Acteurs : " + data["results"][0]["actors"] + " ; Durée : " + data["results"][0]["duration"] + " ; Pays : " + data["results"][0]["countries"]
        + " ; Résultat Box-Office : " + data["results"][0]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][0]["description"]);


/* Catégorie les meilleurs films carousel 1 */
for (let i = 1; i < 8; i++) {

    let localisation_image = document.getElementById("image_meilleur_film_" + i.toString());
    let localisation_titre = document.getElementById("titre_meilleur_film_" + i.toString());
    let localisation_modal = document.getElementById("meilleur_film_modal_" + i.toString());

    if (i < 5) {
        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
            .then(response => response.json())
            .then(data => localisation_image.src = data["results"][i]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
                .then(response => response.json())
                .then(data => localisation_titre.textContent = data["results"][i]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
            .then(response => response.json())
            .then(data => localisation_modal.textContent = "Titre : " + data["results"][i]["title"] + " ; Genre : " + data["results"][i]["genres"]
            + " ; Date de sortie : " + data["results"][i]["date_published"] + " ; Rated : " + data["results"][i]["rated"]
            + " ; Score IMDB : " + data["results"][i]["imdb_score"] + " ; Réalisateur : " + data["results"][i]["directors"]
            + " ; Acteurs : " + data["results"][i]["actors"] + " ; Durée : " + data["results"][i]["duration"] + " ; Pays : " + data["results"][i]["countries"]
            + " ; Résultat Box-Office : " + data["results"][i]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][i]["description"]);

    } else {
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes")
            .then(response => response.json())
            .then(data => localisation_image.src = data["results"][(i - 5)]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes")
            .then(response => response.json())
            .then(data => localisation_titre.textContent = data["results"][(i - 5)]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes")
            .then(response => response.json())
            .then(data => localisation_modal.textContent = "Titre : " + data["results"][(i - 5)]["title"] + " ; Genre : " + data["results"][(i - 5)]["genres"]
            + " ; Date de sortie : " + data["results"][(i - 5)]["date_published"] + " ; Rated : " + data["results"][(i - 5)]["rated"]
            + " ; Score IMDB : " + data["results"][(i - 5)]["imdb_score"] + " ; Réalisateur : " + data["results"][(i - 5)]["directors"]
            + " ; Acteurs : " + data["results"][(i - 5)]["actors"] + " ; Durée : " + data["results"][(i - 5)]["duration"] + " ; Pays : " + data["results"][(i - 5)]["countries"]
            + " ; Résultat Box-Office : " + data["results"][(i - 5)]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][(i - 5)]["description"]);

    }
}


/* Catégorie 1  Biographie carousel 2 */
for (let j = 0; j < 8; j++) {

    let localisation_image1 = document.getElementById("image_categorie1_" + j.toString());
    let localisation_titre1 = document.getElementById("titre_categorie1_" + j.toString());
    let localisation_modal1 = document.getElementById("categorie1_modal_" + j.toString());

    if (j < 5) {
        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=biography")
            .then(response => response.json())
            .then(data => localisation_image1.src = data["results"][j]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=biography")
                .then(response => response.json())
                .then(data => localisation_titre1.textContent = data["results"][j]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=biography")
            .then(response => response.json())
            .then(data => localisation_modal1.textContent = "Titre : " + data["results"][j]["title"] + " ; Genre : " + data["results"][j]["genres"]
            + " ; Date de sortie : " + data["results"][j]["date_published"] + " ; Rated : " + data["results"][j]["rated"]
            + " ; Score IMDB : " + data["results"][j]["imdb_score"] + " ; Réalisateur : " + data["results"][j]["directors"]
            + " ; Acteurs : " + data["results"][j]["actors"] + " ; Durée : " + data["results"][j]["duration"] + " ; Pays : " + data["results"][j]["countries"]
            + " ; Résultat Box-Office : " + data["results"][j]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][j]["description"]);

    } else {
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=biography")
            .then(response => response.json())
            .then(data => localisation_image1.src = data["results"][(j - 5)]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=biography")
            .then(response => response.json())
            .then(data => localisation_titre1.textContent = data["results"][(j - 5)]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=biography")
            .then(response => response.json())
            .then(data => localisation_modal1.textContent = "Titre : " + data["results"][(j - 5)]["title"] + " ; Genre : " + data["results"][(j - 5)]["genres"]
            + " ; Date de sortie : " + data["results"][(j - 5)]["date_published"] + " ; Rated : " + data["results"][(j - 5)]["rated"]
            + " ; Score IMDB : " + data["results"][(j - 5)]["imdb_score"] + " ; Réalisateur : " + data["results"][(j - 5)]["directors"]
            + " ; Acteurs : " + data["results"][(j - 5)]["actors"] + " ; Durée : " + data["results"][(j - 5)]["duration"] + " ; Pays : " + data["results"][(j - 5)]["countries"]
            + " ; Résultat Box-Office : " + data["results"][(j - 5)]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][(j - 5)]["description"]);
    }
}

/* Catégorie 2  Aventure carousel 3 */
for (let k = 0; k < 8; k++) {

    let localisation_image2 = document.getElementById("image_categorie2_" + k.toString());
    let localisation_titre2 = document.getElementById("titre_categorie2_" + k.toString());
    let localisation_modal2 = document.getElementById("categorie2_modal_" + k.toString());

    if (k < 5) {
        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
            .then(response => response.json())
            .then(data => localisation_image2.src = data["results"][k]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
                .then(response => response.json())
                .then(data => localisation_titre2.textContent = data["results"][k]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
            .then(response => response.json())
            .then(data => localisation_modal2.textContent = "Titre : " + data["results"][k]["title"] + " ; Genre : " + data["results"][k]["genres"]
            + " ; Date de sortie : " + data["results"][k]["date_published"] + " ; Rated : " + data["results"][k]["rated"]
            + " ; Score IMDB : " + data["results"][k]["imdb_score"] + " ; Réalisateur : " + data["results"][k]["directors"]
            + " ; Acteurs : " + data["results"][k]["actors"] + " ; Durée : " + data["results"][k]["duration"] + " ; Pays : " + data["results"][k]["countries"]
            + " ; Résultat Box-Office : " + data["results"][k]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][k]["description"]);

    } else {
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
            .then(response => response.json())
            .then(data => localisation_image2.src = data["results"][(k - 5)]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
            .then(response => response.json())
            .then(data => localisation_titre2.textContent = data["results"][(k - 5)]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Adventure")
            .then(response => response.json())
            .then(data => localisation_modal2.textContent = "Titre : " + data["results"][(k - 5)]["title"] + " ; Genre : " + data["results"][(k - 5)]["genres"]
            + " ; Date de sortie : " + data["results"][(k - 5)]["date_published"] + " ; Rated : " + data["results"][(k - 5)]["rated"]
            + " ; Score IMDB : " + data["results"][(k - 5)]["imdb_score"] + " ; Réalisateur : " + data["results"][(k - 5)]["directors"]
            + " ; Acteurs : " + data["results"][(k - 5)]["actors"] + " ; Durée : " + data["results"][(k - 5)]["duration"] + " ; Pays : " + data["results"][(k - 5)]["countries"]
            + " ; Résultat Box-Office : " + data["results"][(k - 5)]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][(k - 5)]["description"]);
    }
}

/* Catégorie 3  Animation carousel 4 */
for (let l = 0; l < 8; l++) {

    let localisation_image3 = document.getElementById("image_categorie3_" + l.toString());
    let localisation_titre3 = document.getElementById("titre_categorie3_" + l.toString());
    let localisation_modal3 = document.getElementById("categorie3_modal_" + l.toString());

    if (l < 5) {
        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Animation")
            .then(response => response.json())
            .then(data => localisation_image3.src = data["results"][l]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Animation")
                .then(response => response.json())
                .then(data => localisation_titre3.textContent = data["results"][l]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=Animation")
            .then(response => response.json())
            .then(data => localisation_modal3.textContent = "Titre : " + data["results"][l]["title"] + " ; Genre : " + data["results"][l]["genres"]
            + " ; Date de sortie : " + data["results"][l]["date_published"] + " ; Rated : " + data["results"][l]["rated"]
            + " ; Score IMDB : " + data["results"][l]["imdb_score"] + " ; Réalisateur : " + data["results"][l]["directors"]
            + " ; Acteurs : " + data["results"][l]["actors"] + " ; Durée : " + data["results"][l]["duration"] + " ; Pays : " + data["results"][l]["countries"]
            + " ; Résultat Box-Office : " + data["results"][l]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][l]["description"]);

    } else {
        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Animation")
            .then(response => response.json())
            .then(data => localisation_image3.src = data["results"][(l - 5)]["image_url"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Animation")
            .then(response => response.json())
            .then(data => localisation_titre3.textContent = data["results"][(l - 5)]["title"]);

        fetch("http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score&sort_by=-votes&genre=Animation")
            .then(response => response.json())
            .then(data => localisation_modal3.textContent = "Titre : " + data["results"][(l - 5)]["title"] + " ; Genre : " + data["results"][(l - 5)]["genres"]
            + " ; Date de sortie : " + data["results"][(l - 5)]["date_published"] + " ; Rated : " + data["results"][(l - 5)]["rated"]
            + " ; Score IMDB : " + data["results"][(l - 5)]["imdb_score"] + " ; Réalisateur : " + data["results"][(l - 5)]["directors"]
            + " ; Acteurs : " + data["results"][(l - 5)]["actors"] + " ; Durée : " + data["results"][(l - 5)]["duration"] + " ; Pays : " + data["results"][(l - 5)]["countries"]
            + " ; Résultat Box-Office : " + data["results"][(l - 5)]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][(l - 5)]["description"]);
    }
}