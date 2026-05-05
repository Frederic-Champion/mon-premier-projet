
const btnReset = document.querySelector("#reset");
const pokemonName = document.querySelector("#pokemonName");
const btnAjouter = document.querySelector("#btn");
const cartes = document.querySelector(".cartes");
const compteur = document.querySelector("#compteur");

let nombre = 0
btnAjouter.addEventListener("click", () => {
    const carte = document.createElement("div");
    const boutonLiberer = document.createElement("button");
    carte.textContent = pokemonName.value ;
    boutonLiberer.textContent = "Libéré"
    boutonLiberer.addEventListener("click", () => {
        cartes.removeChild(carte);
        nombre -= 1 ;
        compteur.textContent = nombre ;
    });
    carte.appendChild(boutonLiberer);
    cartes.appendChild(carte);
    nombre += 1 ;
    compteur.textContent = nombre ;
    pokemonName.value = "";
});
