const divPaises = document.querySelector('.paises');
const input = document.querySelector('input');
let nomePaises;

fetch('https://restcountries.com/v3.1/all').then(function (resposta) {
    const promiseBody = resposta.json();

    promiseBody.then(function (paises) {
        paises.forEach((pais) => {
            const divPais = document.createElement('div');
            divPais.classList.add('pais');

            const nomePais = document.createElement('h2');
            nomePais.textContent = pais.name.common;

            const regiaoPais = document.createElement('span');
            regiaoPais.textContent = pais.region;

            const capitalPais = document.createElement('span');
            capitalPais.textContent = pais.capital;

            const populacaoPais = document.createElement('p');
            populacaoPais.textContent = pais.population;

            const bandeiraPais = document.createElement('img');
            bandeiraPais.src = pais.flags.png;

            divPais.append(nomePais, regiaoPais, capitalPais, populacaoPais, bandeiraPais);

            input.addEventListener('keydown', function(event) {
                if (event.key !== "Enter") {
                    return;
                } else if (input.value.trim() === "") {
                    divPais.classList.remove("escondido");
                } else if (input.value !== nomePais.textContent) {
                    divPais.classList.add("escondido");
                } else if (input.value === nomePais.textContent) {
                    divPais.classList.remove("escondido");
                }
            });

            divPaises.append(divPais);
        });
    });
});