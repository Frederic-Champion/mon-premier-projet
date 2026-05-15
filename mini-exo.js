

// Exercice — Tableau d'objets :
//Tu travailles avec une liste de montures optiques. 
//Écris une fonction monturePasChere qui prend un tableau de montures et retourne un nouveau tableau contenant uniquement les montures dont le prix est inférieur à 200€.


let montures = [
    { marque: "Ray-Ban", prix: 150 },
    { marque: "Oakley", prix: 250 },
    { marque: "Persol", prix: 180 },
    { marque: "Gucci", prix: 320 },
    { marque: "Julbo", prix: 190 }
]

//monturePasChere(montures)
// → [
//     { marque: "Ray-Ban", prix: 150 },
//     { marque: "Persol", prix: 180 },
//     { marque: "Julbo", prix: 190 }
//   ]

function monturePasChere(montures) {
    let pasChere = [];
    for (let monture of montures) {
        if (monture.prix < 200) {
            pasChere.push(monture);
        }
    }
    return pasChere;
}
console.log(monturePasChere(montures));