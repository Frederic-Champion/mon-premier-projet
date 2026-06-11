const ventes = [
    { vendeur: "Alice", montant: 120 },
    { vendeur: "Bob",   montant: 80  },
    { vendeur: "Alice", montant: 200 },
    { vendeur: "Bob",   montant: 50  },
    { vendeur: "Alice", montant: 90  },
];

const ventesTotal = ventes.reduce((acc, v) => {
    acc[v.vendeur] = (acc[v.vendeur] || { nombre: 0, total: 0 });
    acc[v.vendeur].nombre = acc[v.vendeur].nombre + 1;       // +1 vente
    acc[v.vendeur].total  = acc[v.vendeur].total + v.montant; // + le montant
    return acc;
}, {})

console.log(ventesTotal)


const ventes = [
  { vendeur: "Alice", produit: "monture", montant: 120 },
  { vendeur: "Bob",   produit: "verre",   montant: 80  },
  { vendeur: "Alice", produit: "monture", montant: 200 },
  { vendeur: "Alice", produit: "verre",   montant: 90  },
  { vendeur: "Bob",   produit: "etui",    montant: 15  },
  { vendeur: "Alice", produit: "monture", montant: 150 },
];

const apercu = ventes.slice(0.4)

ventes.push({ vendeur: "Bob", produit: "monture", montant: 175 })

const compte = ventes.reduce((acc, v)=> {
  acc[v.vendeur] = acc[v.vendeur] || {nombre: 0, montant:0};
  acc[v.vendeur].nombre += 1;
  acc[v.vendeur].montant += v.montant
  return acc
},{})
console.log(compte)

//(a)
const caTotal = Object.values(compte).reduce((acc, v) => acc + v.montant,0)
console.log(caTotal)

for (const v in compte) {
  console.log(`${v} a fait ${compte[v].nombre} ventes pour ${compte[v].montant} €`)
}