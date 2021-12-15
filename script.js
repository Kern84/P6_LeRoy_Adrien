
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
        .then(data => mod.textContent = "Titre : " + data["results"][0]["title"] + " ; Genre : " + data["results"][0]["genres"] + " ; Date de sortie : " + data["results"][0]["date_published"] + " ; Rated : " + data["results"][0]["rated"] + " ; Score IMDB : " + data["results"][0]["imdb_score"] + " ; Réalisateur : " + data["results"][0]["directors"] + " ; Acteurs : " + data["results"][0]["actors"] + " ; Durée : " + data["results"][0]["duration"] + " ; Pays : " + data["results"][0]["countries"] + " ; Résultat Box-Office : " + data["results"][0]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][0]["description"]);


/* Catégorie les meilleurs films */


let image1 = document.getElementById("image_meilleur_film_1");
let titre1 = document.getElementById("titre_meilleur_film_1");
let mod1 = document.getElementById("meilleur_film_modal_1");

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => image1.src = data["results"][1]["image_url"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => titre1.textContent = data["results"][1]["title"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => mod1.textContent = "Titre : " + data["results"][1]["title"] + " ; Genre : " + data["results"][1]["genres"] + " ; Date de sortie : " + data["results"][1]["date_published"] + " ; Rated : " + data["results"][1]["rated"] + " ; Score IMDB : " + data["results"][1]["imdb_score"] + " ; Réalisateur : " + data["results"][1]["directors"] + " ; Acteurs : " + data["results"][1]["actors"] + " ; Durée : " + data["results"][1]["duration"] + " ; Pays : " + data["results"][1]["countries"] + " ; Résultat Box-Office : " + data["results"][1]["worldwide_gross_income"] + " ; Résumé du film : " + data["results"][1]["description"]);


/* Catégorie */
fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes&genre=biography")
