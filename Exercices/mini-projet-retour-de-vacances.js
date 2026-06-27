const montures = [
  { marque: "Ray-Ban",  modele: "Wayfarer", prix: 150, stock: 4,  categorie: "solaire", mutuelle: false },
  { marque: "Persol",   modele: "649",      prix: 220, stock: 0,  categorie: "solaire", mutuelle: false },
  { marque: "Oakley",   modele: "Holbrook", prix: 130, stock: 7,  categorie: "solaire", mutuelle: false },
  { marque: "Essilor",  modele: "Varilux",  prix: 90,  stock: 12, categorie: "optique", mutuelle: true  },
  { marque: "Krys",     modele: "Classic",  prix: 60,  stock: 3,  categorie: "optique", mutuelle: true  },
  { marque: "Afflelou", modele: "Tonic",    prix: 75,  stock: 0,  categorie: "optique", mutuelle: true  },
];

const cartes = document.querySelector("#cartes");
function afficherCarte(choix) {
    cartes.innerHTML = "";
    const montureFiltrees = choix === "toutes" ? montures : montures.filter(mont => mont.categorie === choix);
    for (let mont of montureFiltrees) {
        const stock = mont.stock > 0 ? `En stock (${mont.stock})` : "Rupture" ;
        const stockColor = mont.stock > 0 ? 'text-green-700 bg-green-200' : 'text-red-700 bg-red-200'
        const carte = document.createElement("div");
        carte.className = "bg-[#30302e] p-4 rounded-xl border border-[#c2c0b6] flex flex-col gap-2";
        carte.innerHTML = `
            <div class="flex flex-col gap-y-0">
            <p>${mont.marque}</p>
            <p class="text-[#c2c0b6] text-sm">${mont.modele} - ${mont.categorie}</p>
            </div>
            <p class="text-lg">${mont.prix} €</p>
            <p class="py-1 px-2 rounded-xl border border-[#c2c0b6] w-36 ${stockColor}">${stock}</p>
        `;
        cartes.appendChild(carte);
    }
}

function statistique() {
  return montures.reduce((acc, mont) => {
    return acc + (mont.stock * mont.prix);
  }, 0);
}
const stats = document.querySelector("#stats");
const stat = document.createElement('div');
stat.textContent = `${statistique()}`;
stats.appendChild(stat);

const btnOptique = document.querySelector("#optique");
btnOptique.addEventListener("click", () => {
    afficherCarte("optique")
})
const btnSolaire = document.querySelector("#solaire");
btnSolaire.addEventListener("click", () => {
    afficherCarte("solaire")
})
const btnToutes = document.querySelector("#toutes");
btnToutes.addEventListener("click", () => {
    afficherCarte("toutes")
})
afficherCarte("toutes")