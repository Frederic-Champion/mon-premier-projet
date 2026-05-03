const montures = [
    { marque: "Ray-Ban", reference: "Wayfarer", prix: 180 },
    { marque: "Persol", reference: "PO3019", prix: 220 },
    { marque: "Oakley", reference: "Holbrook", prix: 150 }
];

const listeMontures = document.querySelector("#liste-montures");
const compteur = document.querySelector("#compteur");
const marque = document.querySelector("#marque")
const reference = document.querySelector("#reference")
const prix = document.querySelector("#prix")
const addButton = document.querySelector("#add-button");

const creerSpan = (texte) => {
    const span = document.createElement("span") ;
    span.textContent = texte ;
    return span ;
};

const afficherMonture = () => {
    listeMontures.textContent = "" ;
    montures.forEach((monture, index) => {
        const liste = document.createElement("li");
        const boutonSup = document.createElement("button");
        boutonSup.textContent = "supprimer" ;
        boutonSup.addEventListener("click", () => {
            montures.splice(index, 1);
            afficherMonture();
        });
        liste.appendChild(creerSpan(monture.marque));
        liste.appendChild(creerSpan(monture.reference));
        liste.appendChild(creerSpan(`${monture.prix} €`));
        liste.appendChild(boutonSup) ;
        listeMontures.appendChild(liste) ;
    });
    compteur.textContent = montures.length
}    

addButton.addEventListener("click", () => {
    montures.push({marque: marque.value, reference: reference.value, prix: prix.value}) ;
    afficherMonture() ;
    marque.value = "" ;
    reference.value = "" ;
    prix.value = "" ;
});

afficherMonture()
