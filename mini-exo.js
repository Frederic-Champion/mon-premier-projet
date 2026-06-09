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