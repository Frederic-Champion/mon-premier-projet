
const btnReset = document.querySelector("#reset");
const pokemonName = document.querySelector("#pokemonName");
const btnAjouter = document.querySelector("#btn");
const cartes = document.querySelector(".cartes");
const compteur = document.querySelector("#compteur");

const ajouterPokemon = () => {
    if (pokemonName.value === "") { return }
    const carte = document.createElement("div");
    const boutonLiberer = document.createElement("button");
    carte.textContent = pokemonName.value ;
    boutonLiberer.textContent = "Libéré"
    boutonLiberer.addEventListener("click", () => {
        nombre -= 1 ;
        cartes.removeChild(carte);
        compteur.textContent = nombre ;
    });
    carte.appendChild(boutonLiberer);
    cartes.appendChild(carte);
    nombre += 1 ;
    compteur.textContent = nombre ;
    pokemonName.value = "";
};
let nombre = 0
btnAjouter.addEventListener("click", () => {
    ajouterPokemon()
});
pokemonName.addEventListener("keydown", (truc) => {
    if (truc.key === "Enter") {ajouterPokemon()}
});
btnReset.addEventListener("click", () => {
    cartes.innerHTML = "";
    nombre = 0 ;
    compteur.textContent = nombre ;
});
