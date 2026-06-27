
const btnReset = document.querySelector("#reset");
const pokemonName = document.querySelector("#pokemonName");
const btnAjouter = document.querySelector("#btn");
const cartes = document.querySelector(".cartes");
const compteur = document.querySelector("#compteur");
const pasOk = document.querySelector("#pasOk");

const messageStop = () => {
    const NoNoNo = document.createElement("p");
    NoNoNo.textContent = "Vous ne pouvez pas ajouter ce POKEMON !";
    pasOk.appendChild(NoNoNo);
    setTimeout(() => {pasOk.removeChild(NoNoNo)}, 2000)
    };

const ajouterPokemon = () => {
    if (pokemonName.value === "") { return };
    const toutesLesCartes = cartes.querySelectorAll("span");
    for (let laCarte of toutesLesCartes) {
        if (pokemonName.value === laCarte.textContent) {
            messageStop();
            return
        };
    };
    const carte = document.createElement("div");
    const nom = document.createElement("span");
    const boutonLiberer = document.createElement("button");
    carte.className = "carte";
    boutonLiberer.className = "boutonLiberer";
    nom.textContent = pokemonName.value ;
    boutonLiberer.textContent = "Libéré"
    boutonLiberer.addEventListener("click", () => {
        nombre -= 1 ;
        cartes.removeChild(carte);
        compteur.textContent = nombre ;
    });
    carte.appendChild(nom);
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

