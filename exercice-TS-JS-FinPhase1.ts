interface Mutuelle {
  nom: string;
  tauxRmb: number;
}

interface Client {
  nom: string;
  prixMonture: number;
  mut?: Mutuelle;
}

const mgen: Mutuelle = {
  nom: "mgen",
  tauxRmb: 40,
};
const client1: Client = {
  nom: "Durand",
  prixMonture: 200,
  mut: mgen,
};
const client2: Client = {
  nom: "Petit",
  prixMonture: 150,
};
function calculerDevis(client: Client) {
  const { nom, prixMonture } = client;
  const taux = client.mut?.tauxRmb ?? 0;
  const remboursement = (prixMonture * taux) / 100;
  const RAC = prixMonture - remboursement;
  return { ...client, RAC, remboursement };
}

const devisDurand = calculerDevis(client1);
const devisPetit = calculerDevis(client2);

function recap(devis) {
  console.log(`${devis.nom} - remboursement ${devis.remboursement}€, reste à charge ${devis.RAC}`);
  console.log(devis);
}

recap(devisDurand);
recap(devisPetit);

const durandString = JSON.stringify(devisDurand);
console.log(durandString);
console.log(JSON.parse(durandString).RAC);
