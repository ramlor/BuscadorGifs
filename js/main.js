const apikey = "AIzaSyC5TNbyMCePPoUzN8tZNhtgQjthc1Ox2X8";
const termino = document.querySelector(".termino");
const buscador = document.querySelector(".buscador");
const resultados = document.querySelector(".resultados");


buscador.addEventListener("click", () => {
    resultados.innerHTML = "";
    const url = `https://tenor.googleapis.com/v2/search?q=${termino.value}&key=${apikey}&client_key=my_test_app&limit=9`
    const peticion = fetch(url);

    peticion
        .then((response) => {
            return response.json();
        })
        .then ((response) => {
            response.results.forEach(element => {
                const urlimg = element.media_formats.gif.url;
                const img = document.createElement ("img");
                img.src = urlimg 
                resultados.appendChild(img);
            });
        })
});

