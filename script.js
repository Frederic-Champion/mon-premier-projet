console.log("Bonjour depuis JavaScript !")
let prenom = "Frédéric";
let age = 35;
const metier = "Opticien";
let enReconversion = true;
let anneesExperience = 15;

console.log(prenom);
console.log(age);
console.log(metier);
console.log(enReconversion);
console.log(anneesExperience);

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
evaluerNiveau(11);

for (let i = 0; i <= 10; i++) {
    if (i % 2 == 1) {
        console.log(i)
    }
}

const competences = ["HTML", "CSS", "Python", "Rien"];
for (let j = 0; j < competences.length; j++) {
    console.log(`${j + 1} - ${competences[j]}`)
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