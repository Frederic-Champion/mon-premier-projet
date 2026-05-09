const searchBtn = document.querySelector("#searchBtn") ;
const random = document.querySelector("#random") ;
const parametre = document.querySelector("#parametre") ;
const search = document.querySelector("#search") ;
const cartes = document.querySelector("#cartes") ;

async function recherchePays(p) {
    try {
        const reponse = await fetch(`https://restcountries.com/v3.1/name/${p}`);
        const data = await reponse.json();
        const carte = document.createElement("span") ;
        carte.textContent = data[0].name.common ;
        cartes.appendChild(carte);        
    }catch(erreur){
        console.log('il y a un problème', erreur) ;
    }
}

function afficherPays() {
    //fonction à créer la prochaine fois pour l'intégrer dans recherchePays(p)
}

searchBtn.addEventListener("click", function() {
    recherchePays(search.value)
})