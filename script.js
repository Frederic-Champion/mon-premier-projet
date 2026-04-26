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