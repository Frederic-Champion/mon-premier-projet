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

/*----  ----*/

# 🗺️ RÉVISION — Bilan de fin de Phase 1
*Auto-éval initiale : 08/06/2026 (134/142 notions, moyenne 5.8/10).*
*Révisions menées du 08 au 12/06/2026 — règle appliquée : toute notion < 6/10 révisée jusqu'à maîtrise.*

---

## 📊 ÉTAT GLOBAL : les 8 blocs de révision sont TERMINÉS ✅
Point de départ : moyenne 5.8/10, plusieurs trous conceptuels (reduce, valeur/référence, scope).
À ce jour : tous les blocs A→H bouclés. Le travail incompressible (A→D) est fait et validé.
👉 Au prochain gros point : **refaire le quiz d'auto-évaluation** pour mesurer la nouvelle moyenne.

---

## ✅ BLOC A — Fondations JS conceptuelles (08/06, 14h-17h30)
- [x] Valeur vs référence — 2 → **7/10**
- [x] Scope des variables — 5 → **7/10**
- [x] Scope dans les callbacks / closures (var vs let) — 3 → **6/10**
> Clé : `=` simple copie l'étiquette (référence) ; objet/tableau = même tiroir.
> Scope = sens unique (intérieur voit extérieur). var = 1 tiroir réécrit / let = 1 tiroir par tour.

## ✅ BLOC B — L'objet event (08/06, 22h-23h40)
- [x] event.target — 3 → **7/10**
- [x] event.key / event.type — 3 → **7/10**
- [x] element.contains() — 2 → **6/10**
- [x] window.scrollY — 5 → **7/10**
> event = "rapport d'incident" rempli par le navigateur. target = élément cliqué (auto-désigné).
> contains : grand.contains(petit). !menu.contains(e.target) = clic en dehors.

## ✅ BLOC C — Méthodes de tableau (09-10/06, ~3h)
- [x] reduce() accumulateur objet — 5 → **7/10**
- [x] slice() et splice() — 1 → **7/10**
- [x] .push() — 4 → **7/10**
- [x] Object.values() — 4 → **7/10**
- [x] for...in — 3 → **7/10**
> Déclic reduce : le `=` CRÉE ou REMPLACE une case d'objet. Carnet transmis par `return acc`.
> Filets : || 0 (somme), || [] (liste), || {…} (objet). Le comptage se FABRIQUE avec +1.
> slice = copie (fin exclue), splice = modifie en place. for...of (tableau) / for...in (objet).
> Mini-examen 5 questions réussi en autonomie ✅

## ✅ BLOC D — Outils JS du quotidien (10-12/06)
- [x] console.log() en mode debug F12 — 0 → **7/10**
- [x] setTimeout — 2 → **7/10**
- [x] toLocaleString() / toFixed() — 3 → **7/10**
> Debug : étiqueter (console.log("label:", val)), enquêter DANS la boucle, lire l'écart.
> undefined = propriété inexistante / NaN = calcul avec non-nombre. Log de debug = temporaire.
> setTimeout(fonction, délai) — NON-BLOQUANT (A→C→B), porte d'entrée de l'asynchrone.
> toFixed renvoie une CHAÎNE (afficher only). toLocaleString("fr-FR", {style, currency}).

## ✅ BLOC E — Détails fetch / Observer (12/06)
- [x] ?fields= dans l'URL — 1 → **7/10**
- [x] threshold / isIntersecting — 2 → **7/10**
> ?fields= filtre les champs renvoyés. Mécanisme universel des URLs (? params, = valeur, & enchaîne).
> threshold = seuil 0→1 (je règle) / isIntersecting = booléen renvoyé. threshold accepte un tableau.

## ✅ BLOC F — CSS rouillé à rafraîchir (12/06)
- [x] Variables CSS --nom / var() (1→**7**) + :root (5→**7**)
- [x] Media queries (2→**7**) + mobile first (5→**7**) + reset en media query (4→**7**)
- [x] height 100vh / min-height — 2 → **7/10**
- [x] margin: auto — 5 → **7/10**
- [x] box-shadow rgba — 5 → **7/10**
- [x] meta viewport — 2 → **7/10**
- [x] div vs section vs article — 4 → **7/10**
- [x] Spécificité CSS — confirmée **7/10**
- [x] animation burger → croix — 4 → **6/10**
> `--` pour déclarer / var() pour utiliser. max-width = petits écrans (≤) / min-width = grands (≥).
> margin auto : block + largeur (sinon rien) ; parent flex = centre 2 axes.
> box-shadow : x, y, flou, [étalement], couleur rgba. Spécificité : #id > .classe > balise.
> div (neutre) / section (thématique avec titre) / article (autonome, réutilisable ailleurs).

## ✅ BLOC G — CSS niche, à pratiquer une fois (12/06)
- [x] glassmorphism / backdrop-blur — 2 → **7/10**
- [x] -webkit-line-clamp — 0 → **6/10**
- [x] Grid CSS brut — 3 → **6/10**
> glassmorphism = bg rgba + backdrop-filter: blur() (floute DERRIÈRE, pas l'élément).
> line-clamp = tronquer à N lignes (syntaxe à chercher, ou line-clamp-3 en Tailwind).
> Grid : display:grid, grid-template-columns, fr, repeat(n,1fr), gap. grid-cols-3 = repeat(3,1fr).
> Colonnes inégales : col-span-X ou valeur arbitraire Tailwind [1fr_1fr_2fr].

## ✅ BLOC H — Setup / scaffolding (12/06)
- [x] Créer un projet from scratch — 2 → **7/10**
- [x] npm commandes de base — 0 → **6/10**
> Séquence : mkdir + cd → npm init -y → npm install tailwindcss @tailwindcss/cli
> → src/input.css (@import "tailwindcss") + dist/ → .gitignore (node_modules/ + dist/)
> → npm run dev (script package.json) → index.html (link vers dist/output.css) → git init.
> On ignore tout ce qui est RÉGÉNÉRABLE. Phase 2 : create-next-app automatisera tout ça.

---

## 🔁 À ENTRETENIR / RENDRE INSTINCTIF (vu, pas encore réflexe)
*Pas des trous — des choses comprises à faire mûrir par la répétition.*
- [ ] spread `...` (clone objet/tableau) — sera un réflexe quotidien en React
- [ ] classList.add("classe") plutôt que .style en dur dans le JS
- [ ] reduce() en échauffement de temps en temps (pour l'instinct)
- [ ] for...in (peu intuitif, à recroiser)
- [ ] placement Grid (col-span, grid-column 1/-1) — à rafraîchir quand un projet l'exige
- [ ] animation burger : réglage fin des translate (en pratique sur le portfolio)

## ✋ LAISSÉ DE CÔTÉ VOLONTAIREMENT (avec raison)
- forEach + index — choix assumé, for...of préféré
- git init/clone + config identité — commandes one-shot, repos déjà en place
- PowerShell ExecutionPolicy — fait une fois, réglé
- Raccourcis VS Code — confort, s'apprend au fil de l'usage

## ⏳ PLUS TARD — niveau pro / Phase 2-3
- [ ] response.ok / throw (1/10) — gestion d'erreur fetch niveau pro
- [ ] Git remote (git remote add + push vers GitHub) — À DÉTAILLER quand on connectera un vrai projet
- [ ] Dark mode Tailwind (dark: + toggle classe sur <html>) — pas encore fait
- [ ] tailwind.config.js (customisation) — pas encore abordé
- [ ] Algo : sommeTableau / trouverMax / compterMot — échauffement, non commencé

## 🔧 À RÉPARER PLUS TARD
- World Explorer : API RestCountries v3.1 **dépréciée** (réponse "deprecated", migrer vers v5)
  → mini-projet de révision : lire la doc de migration v5, adapter les noms de champs du fetch
  → bon exercice complet : fetch + lecture de doc + debug sur un cas réel

---

## 📋 AUTO-ÉVALUATION DE RÉFÉRENCE — 08/06/2026 (photo "avant", figée)
*Moyenne globale de départ : 5.8/10 — à comparer au prochain passage du quiz.*
*Points forts : DOM 8.6 · Tailwind 6.4 · HTML 6.2 / Points faibles : Outils 2.8 · Tableaux&objets 4.8.*
*(scores d'origine conservés ci-dessous comme base de comparaison — NE PAS modifier)*

- Git/GitHub 5.4 · HTML 6.2 · CSS boîte 6.0 · CSS flex/grid 5.0 · CSS position 5.0 ·
  CSS sélecteurs 5.6 · Tailwind 6.4 · JS bases 6.2 · JS tableaux/objets 4.8 · JS HOF 6.0 ·
  JS DOM 8.6 · JS événements 5.0 · JS fetch 5.7 · JS APIs natives 5.2 · Outils 2.8