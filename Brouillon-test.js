const cartes = document.querySelector("#cartes");
const btnOptique = document.querySelector("#optique");
btnOptique.addEventListener("click", () => {
    cartes.innerHTML = "";
    afficherCarte(optique)
})

function afficherCarte(choix) {
    const montureFiltrees = montures.filter(mont => mont.categorie === choix); 
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