const searchBtn = document.querySelector("#searchBtn") ;
const random = document.querySelector("#random") ;
const parametre = document.querySelector("#parametre") ;
const search = document.querySelector("#search") ;
const cartes = document.querySelector("#cartes") ;

async function recherchePays(p) {
    try {
        const reponse = await fetch("https://cdn.jsdelivr.net/gh/mledoze/countries@master/countries.json");
        const data = await reponse.json();
        const resultat = data.filter(function(unPays) {
            return unPays.translations.fra.common.toLowerCase().includes(p.toLowerCase())
        })
        cartes.innerHTML = ""
        for (let unPays of resultat) {
            afficherPays(unPays)
        }
    } catch(erreur) {
        console.log('il y a un problème', erreur)
    }
}

//<p>Population : ${(unPays.population).toLocaleString("fr-FR")} habitants</p>
function afficherPays(unPays) {
    const carte = document.createElement("div") ;
    carte.className = "carte" ;
    carte.innerHTML = `
        <h3>${unPays.translations.fra.common}</h3>
        <p><span class="label">Capital :</span> ${unPays.capital[0]}</p>
        
        <p><span class="label">Région :</span> ${unPays.region}</p>
        <p><span class="label">Langue :</span> ${Object.values(unPays.languages)}</p>
        <p><span class="label">Monnaie :</span> ${Object.values(unPays.currencies)[0].name}</p>
        <img src="https://cdn.jsdelivr.net/gh/mledoze/countries@master/data/${unPays.cca3.toLowerCase()}.svg" alt="drapeau de ${unPays.name.common}">
    `;
    cartes.appendChild(carte); 
}

searchBtn.addEventListener("click", function() {
    cartes.innerHTML= "" ;
    recherchePays(search.value)
    search.value = "" ;
})
search.addEventListener("keydown", function(touche) {
    if (touche.key === "Enter") {
        cartes.innerHTML= "" ;
        recherchePays(search.value)
        search.value = "" ;
    }
});

async function filtrerParRegion() {
    try {
        const reponse = await fetch("https://cdn.jsdelivr.net/gh/mledoze/countries@master/countries.json");
        const data = await reponse.json();
        const resultat = data.filter((unPays) =>  unPays.region === parametre.value);
        cartes.innerHTML = "";
        for (let unPays of resultat) {
            afficherPays(unPays)
        }
    }catch(erreur){
        console.log('il y a un problème', erreur) ;
    } 
}

parametre.addEventListener("change", function (unPays) {
    filtrerParRegion()
})

async function paysAleatoire() {
    try {
        const reponse = await fetch("https://cdn.jsdelivr.net/gh/mledoze/countries@master/countries.json");
        const data = await reponse.json();
        search.value = "" ;
        const alea = Math.floor((Math.random()) * data.length) ;
        const paysAleatoire = data[alea] ;
        search.value = paysAleatoire.translations.fra.common ;
    }catch(erreur){
        console.log('il y a un problème', erreur) ;
    }
}

random.addEventListener("click", function () {
    paysAleatoire()
})