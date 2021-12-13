let image = document.getElementById("image_meilleur_film");
let titre = document.getElementById("titre_meilleur_film");
let resume = document.getElementById("résumé_meilleur_film");

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => image.src = data["results"][0]["image_url"], data => titre = data["results"][0]["title"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => titre.textContent = data["results"][0]["title"]);

fetch("http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&sort_by=-votes")
        .then(response => response.json())
        .then(data => resume.textContent = data["results"][0]["description"]);


