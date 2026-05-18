Format suggéré pour chaque entrée dans progression.md :
## Session ... —  date
**Durée** : ~ h
**Thème** : ...
**Ce qui a été fait** : ...
**Ce qui a accroché** : ...
**Niveau estimé après session** : ...
**Prochaine session** : ...


Session 6 — Découverte JavaScript
Vu et compris : variables (let/const), types 
(string/number/boolean), fonctions, template literals, 
aperçu du scope. Pas encore maîtrisé — nécessite 
beaucoup de pratique.

Session 6 (suite) — JavaScript bases
Découvert et pratiqué : conditions, boucles for, 
let/const/var, tableaux, objets. Pas encore maîtrisé 
— nécessite répétition. Prochaine étape : le DOM.

Session 7 — Introduction au DOM
Compris : cibler des éléments HTML avec getElementById 
et querySelector, modifier textContent et style depuis 
JS. Pas encore maîtrisé — nécessite beaucoup de 
pratique. Prochaine étape : les événements (réagir 
aux clics).

Session 7 (suite) — Événements et exercice de synthèse
Pratiqué : addEventListener, callbacks, génération de 
HTML depuis JS, filtrage dynamique avec fonction 
réutilisable (principe DRY). Exercice de synthèse 
complet réalisé autonomement avec indices.

## Sessions 8-11 — Consolidation HTML & CSS complète

### Formulaires HTML (Session 8)
Découvert et maîtrisé : structure form, label/for/id, 
input (text, email), textarea, button type submit, 
placeholder. CSS : box-sizing border-box, sélecteur *, 
pseudo-classe :focus, box-shadow rgba, héritage via body, 
principe DRY en CSS. Premier formulaire complet réalisé 
en autonomie.

### Mini page profil + formulaire (Session 9)
Réalisé from scratch : carte de profil avec image, 
badges span, bio, formulaire intégré. Compris : 
div vs section, span vs div, alt sur images, 
flex:1 pour égaliser les colonnes, margin auto 
pour centrer.

### Exercice reproduction Dashboard (Sessions 9-10)
Reproduction complète d'un dashboard : nav flex, 
3 cartes statistiques, liste de projets avec 
div gauche/droite imbriquées. Compris : id vs class 
(erreur trouvée seul avec DevTools), flex-direction 
column, list-style none, debugging DevTools.
Score : 75% de maîtrise globale.

### CSS Grid + Responsive (Session 11)
Appris et pratiqué : display grid, repeat(), fr, 
grid-column span, grid-column 1/-1, grid-row span,
media queries (768px/480px), meta viewport, reset 
des propriétés grid dans les media queries.
Points clés retenus : grid-column vs 
grid-template-columns, id vs class, réinitialiser 
span sur mobile.

Session 12 — Révision complète JavaScript
Blocs 1 à 5 revus et pratiqués :
variables/types/fonctions, conditions/boucles,
objets/tableaux, DOM, événements.
Principe DRY appliqué. Niveau global JS : ~70%.
Prochaine étape : mini-projet synthèse
"Gestionnaire de montures" — HTML + CSS + JS complet.

Session 12(suite) — Consolidation DOM & Événements
Exercice "Liste de courses" réalisé en autonomie guidée.
Pratiqué : querySelector, createElement, appendChild,
removeChild, .value (lecture et effacement input),
événements imbriqués, scope des variables dans les
callbacks. Compris : différence valeur / référence
(valeurArticle vs article.value). Erreurs corrigées
seul avec indices. DOM : 55% / Événements : 50%.

Session 13 — Mini-projet Gestionnaire de montures
Projet complet réalisé : tableau JS, affichage dynamique,
ajout/suppression, compteur, fonction creerSpan avec return.
Compris mais non maitrisé : forEach + index, splice, return, arrow functions.
CSS : flexbox, align-self, height 100vh, sélecteurs ciblés.
Points faibles confirmés : CSS positionnement pas instinctif,
DOM à consolider. Plan : exercices CSS + DOM ciblés avant
prochain mini-projet de validation.
Niveau JS global : 55% / CSS global : 60%

Session 14 — Consolidation CSS + DOM + Exercice Pokédex complet
CSS : justify-content/align-items/align-self/margin auto ancrés.
flex-direction column + flex-wrap wrap appliqués. grid-column 1/-1 revu.
querySelector utilisable sur n'importe quel élément HTML (pas que document).
for...of + return préféré à forEach pour sortie anticipée — réflexe DRY.
setTimeout compris conceptuellement, syntaxe à pratiquer.
Projet Pokédex complet : ajout/suppression/reset/compteur/détection doublon
avec message temporaire (setTimeout). Exercice le plus complet réalisé
en autonomie à ce jour.
À consolider : setTimeout, CSS Grid.
Niveau JS global : 70% / CSS global : 70%

Session 15 — Fetch API
Compris et pratiqué : fetch(), async/await, response.json(),
try/catch, URL d'API (structure et types). Cycle complet :
requête → JSON → affichage DOM déclenché par l'utilisateur.
Niveau Fetch : 50% — syntaxe comprise, manque de pratique autonome.

Session 16 — Fetch API pratique
App météo complète réalisée en autonomie : fetch avec clé API,
async/await, try/catch, innerHTML, Math.round().
Compris : innerHTML vs textContent, vider un conteneur avec
innerHTML = "". Niveau Fetch : 70%.
Prochaine étape : mini-projet Fetch complet.

Session 17 — Projet World Explorer (Fetch API complet)
App complète réalisée : recherche en français (translations.fra),
filtre par région (filter + change), pays aléatoire (Math.random).
Appris : Object.values(), includes(), toLowerCase(), ?fields= API,
keydown + touche.key, filter() avec et sans arrow function.
Niveau Fetch : 70%. Prochain : Tailwind CSS.

Session 18 — Tailwind CSS Introduction & Composants
Installation Tailwind v4 via npm, PowerShell ExecutionPolicy,
compréhension CDN vs npm, package.json, node_modules,
.gitignore (node_modules/ et output.css exclus).
Commande --watch comprise et maîtrisée.
@layer components et @apply vus mais non maîtrisés (copié/collé).
Classes maîtrisées : bg-, text-, p-, m-, rounded-, shadow-,
flex, flex-col, flex-wrap, items-center, max-w-, w-full,
font-bold, italic, gap-, @apply.
Deux composants réalisés en autonomie : carte profil et
carte compétences avec badges colorés.
Réflexe DRY appliqué spontanément avec @apply.
Niveau Tailwind : 45%.
Prochaine étape : exercice @apply from scratch + responsive Tailwind.

Session 19 — Tailwind CSS approfondissement
@apply + @layer components maîtrisés from scratch.
Responsive mobile first ancré — breakpoints md: instinctifs.
Architecture pro src/dist/ appliquée sur nouveau projet.
flex-1 + min-h-screen flex flex-col compris et appliqués.
Création projet from scratch maîtrisée (mkdir, npm init, install, git init).
Mini-projet vitrine complet réalisé en autonomie.
Niveau Tailwind : 65%.
Prochain grand projet : vraie page vitrine portfolio (session dédiée).

Session 20 — Vitrine Portfolio
Structure HTML/CSS complète réalisée en autonomie guidée.
Sections : Navbar, Hero, À Propos (photo ronde), Compétences
(Devicons), Projets (cartes colorées), Contact (formulaire),
Footer. Intersection Observer compris mais pas maîtrisé —
callbacks et APIs natives JS à retravailler en session dédiée.
Repo GitHub portfolio-fred créé et pushé.
Niveau Tailwind : 70%. Niveau JS global : 65%.
Prochain : session JS pure (callbacks, APIs natives) +
navbar burger + mode jour/nuit.