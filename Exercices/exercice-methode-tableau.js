const montures = [
  { nom: "Ray-Ban", prix: 150, stock: 3 },
  { nom: "Persol",  prix: 220, stock: 0 },
  { nom: "Oakley",  prix: 130, stock: 5 },
];

const clients = [
  { nom: "Dupont", age: 42, lunettes: true },
  { nom: "Martin", age: 17, lunettes: false },
  { nom: "Bernard", age: 65, lunettes: true },
  { nom: "Petit", age: 30, lunettes: false },
];

const nomClients = clients.map(x => x.nom);  // reçoit un tableau [clients] de 4 éléments -> retourne un autre tableau de 4 éléments
const search = clients.find(x => x.age < 18);  //retourne le premier qui remplit les conditions au format objet {}
const auMoinUn = clients.some(x => x.lunettes === true);  //retourne un true/false boléen si condition remplit.

clients.forEach(client => {
  console.log(`${client.nom} a ${client.age}.`)
})

//-----//

Object.keys(r);     // ["monture", "verre"]   → les NOMS (clés)
Object.values(r);   // [320, 80]              → les VALEURS
Object.entries(r);  // [["monture",320],["verre",80]] → les PAIRES [nom, valeur]