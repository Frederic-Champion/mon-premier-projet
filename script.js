function sePresenter(prenom, age, metier) {
    console.log(`je m'appelle ${prenom}, j'ai ${age} ans et je suis ${metier}.`)
}
sePresenter("Frédéric", 35, "Opticien");

function evaluerNiveau(heures) {
    if (heures < 50) {
        console.log("Débutant")
    }else if (heures <= 200) {
        console.log("Intermediaire")
    }else {
        console.log("Avancé")
    }
}
const projet = {
    nom : "Mon premier projet",
    technos : ["HTML", "CSS", "Python", "Rien"],
    description : "Ceci est mon premier site internet, et Claude est mon mentor !",
    termine : false,
}
console.log(`${projet.nom}`)
console.log(`${projet.technos}`)
console.log(`${projet.description}`)
console.log(`${projet.termine}`)

const titre = document.getElementById("titre-principal");
console.log(titre);
titre.textContent = "Frédéric - Dev FullStack";
titre.style.fontSize = "38px";

const aPropos = document.querySelector("section p");
aPropos.textContent = "Actuellement Opticien, je me passionne pour le code et j'aimerai en faire mon métier !"

const bouton = document.getElementById("mon-bouton");
bouton.addEventListener("click", function(){
    titre.textContent = "ça fonctionne !";
    bouton.textContent = "Cliqué !";
    bouton.style.color = "red";
});

const competenceObjet =  [
    { nom : "HTML", categorie : "web"},
    { nom : "CSS", categorie : "web"},
    { nom : "Javascript", categorie : "Backend"},
    { nom : "VS Studio", categorie : "outil"},
    { nom : "Python", categorie : "Backend"},
    { nom : "Git", categorie : "outil"},
]
const comp = document.getElementById("liste-competences");
for (let i = 0; i < competenceObjet.length; i++) {
    const liste = document.createElement("li");
    liste.textContent = `${competenceObjet[i].nom} : ${competenceObjet[i].categorie}`;
    comp.appendChild(liste)
}
const boutonWeb = document.getElementById("bouton-web");
const boutonBackend = document.getElementById("bouton-backend");
const boutonOutils = document.getElementById("bouton-outils");

boutonWeb.addEventListener("click", function() {
    
})
