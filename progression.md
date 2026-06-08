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

## Session 21 — Effets scroll navbar
Durée : ~2h
Thème : JS pur — scroll events, DOM, débogage
Ce qui a été fait : hide/show navbar au scroll (window.scrollY, 
comparaison scrollInitial), section:not(#hero), z-50, fusion DRY 
des listeners, glassmorphism (backdrop-blur, bg-black/25), 
classList.toggle expliqué.
Ce qui a accroché : scope let dans callback, classList.add() vs =, 
window vs élément pour le scroll.
Niveau estimé : JS DOM 75% / DevTools 70%
Prochaine session : Navbar burger — HTML + CSS mobile + toggle JS.

## Session 22 — Navbar burger + Responsive mobile
Durée : ~2h
Thème : Burger menu JS + passe responsive complète
Ce qui a été fait : burger HTML (3 traits CSS), md:hidden,
classList.toggle, menu fixed sous header, passe responsive
toutes sections, flex-col md:flex-row, tailles fixes corrigées,
logique mobile first ancrée.
Ce qui a accroché : tailles fixes qui cassent le layout mobile
— réflexe à développer.
Niveau estimé : Responsive 75% / JS DOM 75%
Prochaine session : Retouches responsive + Dark mode toggle JS.

Session 23 — Dark mode (en cours)
Durée : ~1h
Thème : UX mobile + fermeture menu
Ce qui a été fait : npm run dev configuré, fermeture menu nav links,
fermeture clic extérieur (contains()), bug burger corrigé (double &&)
Ce qui a accroché : ! (NOT), event.target, pourquoi exclure le burger
Niveau estimé : JS DOM 75-80%
Prochaine session : Dark mode toggle (approche élégante en 1 ligne JS)

## Session révision 23Bis — (déroulement sur plusieurs jours en parralèle)
**Thème : Tableaux, Objets, filter(), reduce(), Arrow functions**
Ce qui a été vu
- Algo basique : sommeTableau, trouverMax, compterMot
- Tableaux : index, length, push(), slice()
- Objets : notation pointée vs crochets, for...in, propriétés dynamiques
- Tableaux d'objets : accès tableau[0].propriété
- filter() : syntaxe complète + version condensée + combinaison &&
- reduce() : accumulateur nombre, string, objet
- Arrow functions : fonction anonyme comprise, 4 formes de syntaxe
- Ternaire : condition ? siVrai : siFaux
- Opérateurs logiques : && / || / !
Niveaux
- Tableaux : 🟡 70%
- Objets : 🟡 70%
- Tableaux d'objets : 🟡 70%
- filter() : 🟡 75%
- Arrow functions : 🟡 75%
- reduce() nombre : 🟡 60%
- reduce() objet : 🔴 45%
- Ternaire : 🔴 50%
À approfondir
- reduce() avec accumulateur objet — peu instinctif
- Arrow functions — comprises, pas encore réflexe
- Ternaire — à pratiquer régulièrement
- for...in — vu, pas encore pratiqué
- splice() — pas abordé
Exercice de synthèse
Gestion de stock opticien : 4 fonctions (filter, reduce, &&, ternaire)
Toutes réussies avec indices progressifs.

 ## Notions à réviser — JS intermédiaire
Contexte : ces notions ont été vues en pratique mais ne sont pas encore instinctives. Objectif de la session : révision express → cours ciblé sur ce qui accroche → exercices autonomes.
Notions à couvrir dans l'ordre :
1- ! (opérateur NOT) — inverser un booléen, usage dans les conditions
2- :not() — sélecteur CSS, usage dans querySelectorAll
3- IntersectionObserver — les 3 pièces (callback, options, observer.observe), threshold, isIntersecting
4- entry vs event — deux objets créés automatiquement par le navigateur, différence de contexte
5- .target — entry.target vs event.target, ce que ça désigne dans chaque cas
6- event.key, event.type — autres propriétés utiles de l'objet event
7- element.contains() — vérifier si un élément en contient un autre, usage typique : détecter un clic en dehors d'un menu
Niveau actuel estimé : 🔴 Vu en pratique, pas encore instinctif — nécessite répétition et exercices autonomes.
Méthode souhaitée : révision express sans les notes → cours ciblé uniquement sur ce qui accroche → exercices dans l'univers optique → correction avec indices progressifs.

Session 23 — Burger croix + Cartes projets
Durée : ~6h (midi + après-midi)
Thème : JS DOM, CSS position, UX portfolio
Ce qui a été fait : npm run dev, fermeture menu burger (contains(), clic extérieur), 
burger→croix animée (CSS pur, nth-child, rotate), overlay hover cartes (absolute/relative/opacity), 
lien WorldExplorer, icônes Devicons techno.
Ce qu'il faut revisé pour intégrer : position absolute/relative, group-hover Tailwind, contains().
Niveau estimé : JS DOM 80% / CSS position 65%
Prochaine session : Formspree + améliorations visuelles globales (hover, profondeur, Contact)

Session Vacances — Révision JS pur (mobile)
Durée : sessions courtes sur téléphone (OnlineGDB)
Thème : Consolidation arrow functions, filter(), reduce(), ternaire
Ce qui a été fait :
Exercices sur tableaux d'objets (montures, clients, verres) — arrow functions, filter() simple, filter() avec &&, reduce() nombre, reduce() objet, ternaire comme sélecteur de clé dynamique.
Ce qui a accroché :
- reduce() objet : return acc oublié, confusion acc[m.categorie] vs notation point
- Notation crochets : acc[m.type] quand la clé est dans une variable — compris après explication
- Ternaire dans reduce : m.mutuelle ? "avecMut" : "sansMut" — bien assimilé après correction
Ce qui est solide :
- Squelette reduce objet maîtrisé de façon autonome sur le 3ème exercice
- Réflexe m.propriété (vs tableau.propriété) en place
- Ternaire comme sélecteur de clé compris
Niveaux estimés :
- reduce() nombre : 🟡 75%
- reduce() objet : 🟡 65% (était 45%)
- Arrow functions : 🟡 75%
- Ternaire : 🟡 70%

## Session 24 — Reprise post-vacances
**Durée** : ~3h
**Thème** : Mini-projet synthèse — Catalogue de montures
**Ce qui a été fait** : Catalogue complet from scratch —
affichage dynamique (createElement, appendChild, template literals),
ternaire stock/couleur, filter() avec ternaire "toutes",
reduce() valeur du stock (2770€), 3 boutons filtre avec addEventListener,
fonction DRY afficherCarte(choix). Tailwind dark theme.
**Ce qui a accroché** : filter() (stocker résultat + boucler = 2 étapes),
reduce() (double return), ternaire dans affectation (double =)
**Niveau estimé** :
- JS DOM : 75%
- filter() : 🟡 70%
- reduce() nombre : 🟡 70%
- Ternaire : 🟡 70%
- Arrow functions : 🟡 70%
- Tailwind : 🟡 70%
**À repratiquer** : fetch, includes(), filter/reduce en autonomie
**Prochaine session** : À définir — fetch + includes, ou finitions portfolio, ou session JS prévue (IntersectionObserver, !, :not(), .target)

## Session 25 — Observer + fetch/includes (sur 2 jours)
**Durée** : ~4h (midi + soir + soir)
**Thème** : Révision IntersectionObserver, :not(), fetch + includes

**Ce qui a été fait** :
- Cours complet event vs entry (callback, .target, le navigateur remplit le paramètre)
- Observer : démo 4 sections console, exercice animation scroll (classList.add/remove "visible")
- :not() — sélecteur CSS d'exclusion, validé premier coup
- fetch + includes : exercice recherche users (hier), exercice recherche pays Europe (aujourd'hui)
- Concepts ancrés : paramètre = juste un nom, new = créer un objet,
  addEventListener vs new IntersectionObserver, className vs classList,
  style.background en JS, let vs const, "input" vs "keydown", toLocaleString(),
  fonction réutilisable avec paramètre (afficher(liste))

**Ce qui a accroché** :
- Observer : le mécanisme callback/fiches/boucle — compris après démo visuelle
- fetch : structurer les 3 blocs (fetch, afficher, listener) séparément
- Fonction avec paramètre réutilisable (afficher(data) vs afficher(filtre))
- Bug * { display: flex } sur style — compris

**Niveau estimé** :
- IntersectionObserver : 🟡 55%
- fetch + async/await : 🟡 55%
- filter + includes : 🟡 65%
- :not() : ✅ 80%
- event vs entry : 🟡 60%

**À repratiquer** : fetch et Observer — encore 2-3 exercices chacun
**Prochaine session** : Nouvel exercice fetch ou Observer, ou les deux combinés

## Session 26 — fetch + Observer combinés (midi + soir)
**Durée** : ~3h
**Thème** : Exercice complet fetch + filter + includes + Observer + CSS avancé

**Ce qui a été fait** :
- Exercice recherche pays Europe (fetch + filter + includes + toLowerCase)
- Exercice complet 100 posts : fetch, affichage grid 5 colonnes, recherche,
  line-clamp CSS (tronquer/déplier au clic), Observer animation scroll
- Concepts ancrés : let vs const (réassignation), fonction réutilisable avec
  paramètre (afficher(liste)), "input" vs "keydown", toLocaleString() (pas maitrisé),
  -webkit-line-clamp (4 propriétés : pas du tout maitrisé), .deplie .body-texte (sélecteur descendant),
  spécificité CSS, position absolute/relative pour flotter sans pousser,
  z-index, opacity 0→1, transition, classList.add vs classList = 
- Observer intégré sur des cartes créées dynamiquement par fetch
- slice() expliqué (pas maîtrisé) 

**Ce qui a accroché** :
- Observer : noms de variables mélangés (fiche/carte), placement du vigile
  (dans vs hors de la boucle), classList = vs classList.add
- fetch : structurer les 3 blocs séparés (encore besoin d'un modèle)
- position absolute/relative : compris mais pas instinctif

**Niveau estimé** :
- fetch + async/await : 🟡 60%
- IntersectionObserver : 🟡 55%
- filter + includes : 🟡 70%
- CSS position : 🔴 50%
- -webkit-line-clamp : 🟡 45%

**À faire** : exercices dédiés position CSS/Tailwind
**Prochaine session** : Encore un exercice fetch + Observer, ou nouvelle notion

## Session 27 — fetch + Observer + méthodes de tableau + position CSS
**Durée** : ~3h15 (dimanche aprèm, suite midi)
**Thème** : Consolidation JS (fetch/Observer/arrays) + intro position CSS

**Ce qui a été fait** :
- Exercice fetch + Observer (clients jsonplaceholder) : 3 blocs séparés en autonomie
- .target expliqué (entry = rapport, pas l'élément)
- Recherche temps réel : filter + includes + toLowerCase + stockage data (scope OK)
- Arrow functions : aller-retour version longue ↔ courte maîtrisé
- "for caché" dans filter/map/reduce : déclic
- map / find / some / forEach : cours + exo console (4 lignes)
- className vs classList = vs classList.add : reclarifié
- const vs let dans for...of : nouvelle variable par tour
- position relative/absolute : cours + exo badge dans carte + micro-test réussi

**Ce qui a accroché (résolu)** :
- Pourquoi .target / pourquoi const dans for...of / la syntaxe arrow .filter(element => element ...)

**Niveau estimé** :
- fetch + async/await : 🟡 70% (était 60%)
- IntersectionObserver : 🟡 70% (était 55%)
- filter + includes : 🟡 80%
- arrow functions : 🟡 75%
- map / find / some : 🟡 60-65% (nouveaux, à repratiquer)
- forEach : 🟡 65%
- position relative/absolute : 🟡 65% (était 🔴 50%)

**À repratiquer** : map/find/some en autonomie, position CSS (1-2 exos),
fixed/sticky (pas encore retravaillés), reduce()

**Prochaine session** : pratique position CSS OU combo fetch+Observer+map en autonomie totale

## Session 28 — Synthèse fetch + Observer + arrays + try/catch
**Durée** : ~2h (soir)
**Thème** : Exercice catalogue complet en autonomie + cours try/catch

**Ce qui a été fait** :
- Catalogue produits (dummyjson) from scratch : fetch, try/catch,
  Observer, badge stock (double ternaire classe+texte), recherche live,
  prix moyen (map → reduce → toFixed)
- Cours complet try/catch : mécanisme du saut, objet erreur,
  catch(e) vs catch, throw + reponse.ok (notions)
- Piège API objet vs tableau (data.products)
- Async compris : calcul dépendant des données → APRÈS le fetch, dans le flux
- Refacto fonction séparée (responsabilité unique / DRY) — compris
- Convention nommage : entry/entries réservé à l'Observer, pas ailleurs
- VS Code : Ctrl+D (multi-curseur), F2 (renommage intelligent)

**Niveau estimé** :
- fetch + async/await : 🟡 75-80%
- try/catch : 🟡 70% (cours complet)
- IntersectionObserver : 🟢 75%
- filter + includes : 🟢 80%
- map : 🟡 70% / reduce : 🟡 70% (consolidé)
- ternaire : 🟡 75%
- position relative/absolute : 🟡 65%

**À repratiquer** : reduce en isolation, position CSS, find/some,
reponse.ok / throw (niveau pro), refacto en petites fonctions

**Note** : arrêt des analogies Python (niveau dépassé)
**Prochaine session** : roadmap + finitions portfolio (dark mode, back-to-top,
responsive, Formspree, déploiement Vercel)

## Auto-évaluation — 08 juin 2026 (post session 28)
**Notions évaluées** : 134/142  ·  **Moyenne globale** : 5.8/10

### Git / GitHub — moyenne 5.4/10 (5/6)
- git init / clone : 2/10
- add / commit / push : 8/10
- Configuration identité (user.name / user.email) : 3/10
- .gitignore (node_modules/, output.css) : 8/10
- Créer + pousser un repo GitHub : 6/10

### HTML — moyenne 6.2/10 (9/9)
- Structure de base (DOCTYPE, html, head, body) : 8/10
- Balises sémantiques (header, nav, section, article, footer) : 7/10
- Balises de contenu (h1-h6, p, ul/li, div, span, a, img, button) : 7/10
- Formulaires (form, input, textarea, label/for, button submit) : 7/10
- Attributs (href, class, id, src, alt, for, placeholder) : 6/10
- meta viewport : 2/10
- div vs section vs article : 4/10
- span vs div : 6/10
- alt systématique sur les images : 9/10

### CSS — Boîte & affichage — moyenne 6.0/10 (5/5)
- Box model (margin / padding / border) : 7/10
- box-sizing: border-box : 9/10
- display block / inline / flex : 7/10
- height: 100vh / min-height : 2/10
- margin: auto pour centrer (nécessite une largeur) : 5/10

### CSS — Flexbox & Grid — moyenne 5.0/10 (6/6)
- Flexbox : display:flex, flex-direction, flex-wrap, gap : 7/10
- justify-content / align-items / align-self / align-content : 6/10
- flex: 1 (égaliser des colonnes) : 8/10
- Grid : display:grid, repeat(), fr : 3/10
- grid-column span, grid-column 1/-1, grid-row span : 3/10
- grid-column vs grid-template-columns : 3/10

### CSS — Positionnement & effets — moyenne 5.0/10 (10/10)
- position: relative / absolute (flotter sans pousser) : 7/10
- position: fixed / sticky : 7/10
- z-index : 7/10
- opacity 0→1 + transition : 6/10
- transform: translateY : 6/10
- box-shadow (rgba) : 5/10
- transitions : 6/10
- glassmorphism (backdrop-blur) : 2/10
- -webkit-line-clamp (tronquer du texte) : 0/10
- animation burger → croix (nth-child, rotate) : 4/10

### CSS — Sélecteurs, variables, responsive — moyenne 5.6/10 (9/10)
- Sélecteurs : balise, .classe, #id, * : 10/10
- Sélecteur descendant (.parent .enfant) : 8/10
- :hover, :focus, :root : 5/10
- :not() : 6/10
- Variables CSS (--nom, var()) : 1/10
- Media queries (@media, min/max-width) : 2/10
- Mobile first + breakpoints (480 / 768px) : 5/10
- Reset de propriétés dans les media queries : 4/10
- id vs class (quand utiliser quoi) : 9/10

### Tailwind CSS — moyenne 6.4/10 (12/14)
- Installation npm (CDN vs npm) : 4/10
- Commande --watch / script npm run dev : 8/10
- package.json, node_modules, .gitignore : 6/10
- Architecture src/ (input.css) ↔ dist/ (output.css) : 6/10
- Créer un projet from scratch (mkdir, npm init, install, git init) : 2/10
- Classes de base (bg-, text-, p-, m-, rounded-, shadow-, font-, gap-) : 8/10
- Layout (flex, flex-col, items-center, justify-center, w-full, max-w-, flex-1, min-h-screen) : 8/10
- Responsive mobile first (sm:, md:, lg:) : 8/10
- @layer components + @apply : 6/10
- group-hover : 7/10
- md:hidden : 7/10
- Tailwind Grid (grid-cols-, col-span-) : 7/10

### JavaScript — Bases & syntaxe — moyenne 6.2/10 (15/15)
- let / const / var (et pourquoi éviter var) : 8/10
- Types (string, number, boolean, undefined, null) : 7/10
- Template literals (`${}`) : 9/10
- Fonctions classiques (paramètres, return) : 7/10
- Conditions if / else if / else : 7/10
- Boucle for classique : 7/10
- for...of : 6/10
- for...in : 3/10
- Ternaire (cond ? a : b) : 7/10
- Opérateurs && / || : 7/10
- ! (NOT — inverser un booléen) : 7/10
- Scope des variables : 5/10
- Scope dans les callbacks (valeur au clic vs référence) : 3/10
- Valeur vs référence : 2/10
- const vs let dans for...of (nouvelle liaison par tour) : 8/10

### JavaScript — Tableaux & objets — moyenne 4.8/10 (8/9)
- Tableaux : création, index, .length : 6/10
- .push() : 4/10
- .slice() : 1/10
- .splice() : 1/10
- includes() : 6/10
- Objets : accès avec . (notation pointée) : 8/10
- Objets : notation crochets (acc[clé], clé dynamique) : 6/10
- Tableau d'objets (tableau[0].propriété) : 6/10

### JavaScript — Méthodes de tableau (HOF) — moyenne 6.0/10 (10/10)
- Arrow functions (4 formes, courte ↔ longue) : 7/10
- filter() (avec / sans arrow) : 6/10
- filter() avec && : 6/10
- map() : 6/10
- reduce() — accumulateur nombre : 7/10
- reduce() — accumulateur objet : 5/10
- find() : 6/10
- some() : 6/10
- forEach() (+ index) : 3/10
- Le « for caché » dans filter/map/reduce : 8/10

### JavaScript — DOM — moyenne 8.6/10 (11/11)
- getElementById : 9/10
- querySelector / querySelectorAll (sur n'importe quel élément) : 9/10
- textContent : 9/10
- innerHTML : 9/10
- innerHTML vs textContent : 9/10
- Vider un conteneur (innerHTML = "") : 9/10
- .style en JS : 7/10
- createElement / appendChild / removeChild : 9/10
- .value (lire / réinitialiser un input) : 9/10
- className vs classList = vs classList.add/remove : 9/10
- classList.toggle : 7/10

### JavaScript — Événements — moyenne 5.0/10 (6/6)
- addEventListener + callbacks : 8/10
- "input" vs "keydown" : 9/10
- event.key / event.type : 3/10
- event.target : 3/10
- element.contains() (détecter un clic extérieur) : 2/10
- scroll (window.scrollY) : 5/10

### JavaScript — Fetch & Async — moyenne 5.7/10 (10/10)
- fetch() : 7/10
- async / await : 7/10
- response.json() : 7/10
- try / catch : 7/10
- Objet erreur (catch(e)) : 7/10
- response.ok / throw : 1/10
- Structure d'URL d'API, ?fields= : 1/10
- API : objet vs tableau (ex data.products) : 6/10
- Ordre du flux async (calcul APRÈS le fetch) : 7/10
- Structurer les 3 blocs (fetch / afficher / listener) : 7/10

### JavaScript — APIs natives & avancé — moyenne 5.2/10 (12/12)
- new (instancier un objet) : 5/10
- IntersectionObserver — les 3 pièces (callback / options / observe) : 7/10
- threshold, isIntersecting : 2/10
- entry vs event (.target) : 6/10
- Placement de observe() (après création du DOM) : 7/10
- setTimeout : 2/10
- Math.round() / Math.random() : 6/10
- Object.values() : 4/10
- toLowerCase() : 7/10
- toLocaleString() / toFixed() : 3/10
- DRY — fonction réutilisable avec paramètre : 8/10
- Refacto en petites fonctions (responsabilité unique) : 5/10

### Outils & environnement — moyenne 2.8/10 (6/6)
- Live Server : 8/10
- DevTools Chrome (console, inspector, F12) : 6/10
- console.log() : 0/10
- Raccourcis VS Code (Ctrl+D multi-curseur, F2 renommage) : 3/10
- Terminal PowerShell (ExecutionPolicy) : 0/10
- npm (commandes de base) : 0/10

### ⚠ Non évaluées (8)
- Local vs distant (remote)
- Spécificité CSS
- Dark mode (dark: + toggle de la classe sur <html>)
- tailwind.config.js (customisation)
- Propriétés dynamiques
- sommeTableau
- trouverMax
- compterMot

# 🗺️ Feuille de route — révisions fin de Phase 1
*Établie le 08 juin 2026, à partir de l'auto-évaluation (134/142 notions, moyenne 5.8/10).*
*Règle : toute notion < 6/10 est à réviser jusqu'à maîtrise. Ordre = du plus fondamental (socle React) au nettoyage.*

## Bloc A — Fondations JS conceptuelles 🎯 (priorité absolue, exercice)
- [ ] Valeur vs référence (2/10) — le socle
- [ ] Scope des variables (5/10)
- [ ] Scope dans les callbacks (3/10)

## Bloc B — L'objet event (exercice, enchaîne sur A)
- [ ] event.target (3/10)
- [ ] event.key / event.type (3/10)
- [ ] element.contains() (2/10)
- [ ] scroll / window.scrollY (5/10)

## Bloc C — Méthodes de tableau (exercice)
- [ ] reduce() accumulateur objet (5/10) — le plus fragile
- [ ] slice() et splice() (1/10)
- [ ] .push() (4/10)
- [ ] Object.values() (4/10)
- [ ] for...in (3/10)

## Bloc D — Outils JS du quotidien (exercice + débogage)
- [ ] console.log() en mode debug avec F12 (0/10)
- [ ] setTimeout (2/10)
- [ ] toLocaleString() / toFixed() (3/10)

## Bloc E — Détails fetch / Observer
- [ ] ?fields= dans l'URL (1/10)
- [ ] threshold / isIntersecting (2/10)

## Bloc F — CSS rouillé à rafraîchir (court : explication + petit test)
- [ ] Variables CSS --nom / var() (1/10) + :root (5/10)
- [ ] Media queries brut (2/10) + mobile first brut (5/10) + reset en media query (4/10)
- [ ] height: 100vh / min-height (2/10)
- [ ] margin: auto (5/10)
- [ ] box-shadow rgba (5/10)
- [ ] meta viewport (2/10)
- [ ] div vs section vs article (4/10)
- [ ] Spécificité CSS (à ancrer en pratique)
- [ ] animation burger → croix (4/10)

## Bloc G — CSS à pratiquer une fois (geste réel mais niche)
- [ ] glassmorphism / backdrop-blur (2/10)
- [ ] -webkit-line-clamp (0/10)
- [ ] Grid CSS brut (3/10) — optionnel, entretien CSS pur

## Bloc H — Setup, à consolider doucement
- [ ] Créer un projet from scratch / scaffolding (2/10) — à sécuriser avant Phase 2
- [ ] npm commandes de base — à fiabiliser sans urgence

## ✋ Laissé de côté volontairement
- forEach + index (choix assumé : for...of préféré)
- git init/clone + config identité (commandes one-shot, repos en place)
- PowerShell ExecutionPolicy (fait une fois)
- Raccourcis VS Code (confort)

## ⏳ Plus tard — niveau pro (Phase 2/3)
- response.ok / throw (1/10)

---
**Travail incompressible : A → B → C → D.** Blocs E à H = rafraîchissement court ou vocabulaire.
**En cours : Bloc A** (démarré le 08/06/2026).

## Session — Bloc A : fondations JS (valeur/référence + scope + closures)
**Durée** : ~ 08/06/2026 — 14h00-17h30 (~3h30)
**Thème** : valeur vs référence, scope, piège var/let dans les callbacks
**Ce qui a été fait** : prédiction+test sur objets/tableaux partagés (référence) vs
nombres (valeur) ; intro spread `...` pour cloner ; scope sens unique (intérieur voit
extérieur, pas l'inverse), chaîne de scope, "lire la structure pas l'ordre d'exécution" ;
piège var/let dans setTimeout → un tiroir partagé (var) vs un tiroir par tour (let),
mot "closure" introduit.
**Ce qui a accroché** : verbaliser la différence var/let (compris en images, pas encore
en mots) ; le "4" qui existe avec var mais pas avec let.
**Niveau estimé** :
- valeur vs référence : 2 → 7/10
- scope : 5 → 7/10
- piège callbacks (closures) : 3 → 6/10
- spread `...` : découvert, à pratiquer (React)
**À repratiquer** : spread en pratique, repérer un bug de scope seul
**Prochaine session** : Bloc B — l'objet event (event.target, .key/.type, contains, scrollY)

## Session — Bloc B : l'objet event
**Date** : 08/06/2026 — 22h00 (~... )
**Thème** : lire et utiliser l'objet event (target, key, type, contains, scrollY)
**Ce qui a été fait** : event = "rapport d'incident" rempli par le navigateur ;
e.target = élément précis cliqué (auto-désigné, pas besoin d'id/if) → lu puis
manipulé directement (style.backgroundColor, textContent) ; e.type / e.key ;
keydown + comparaison e.key === "Enter" ; contains() (sens grand.contains(petit),
usages généraux, un élément se contient lui-même) ; révision scrollY (OK de mémoire).
**Ce qui a accroché (résolu)** : inversion A.contains(B) ; doublon de log (if seul
→ if/else) ; .style = "..." (écrase tout) vs .style.propriété (camelCase) ;
quand ternaire vs if/else (valeur vs action).
**Bonus spontanés** : for...of + let sur NodeList (DRY + réflexe bloc A) ; ternaire
sorti d'instinct.
**Niveau estimé** :
- event.target : 3 → 7/10
- event.key / event.type : 3 → 7/10
- element.contains() : 2 → 6/10
- window.scrollY : 7/10 (stable)
**À repratiquer** : classList.add(classe) plutôt que .style en dur (vu, à appliquer) ;
contains() dans un vrai "clic dehors"
**Prochaine session** : Bloc C — méthodes de tableau (reduce objet, slice/splice, push, Object.values, for...in)