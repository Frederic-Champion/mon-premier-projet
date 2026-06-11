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


# 🗺️ Révision — feuille de route fin de Phase 1
*Auto-éval du 08/06/2026 (134/142 notions, moyenne 5.8/10).*
*Règle : toute notion < 6/10 à réviser jusqu'à maîtrise.*

## ✅ Bloc A — Fondations JS conceptuelles (fait le 08/06, 14h-17h30)
- [x] Valeur vs référence — 2 → 7/10
- [x] Scope des variables — 5 → 7/10
- [x] Scope dans les callbacks / closures — 3 → 6/10
- [ ] spread `...` — découvert, à rendre instinctif (React)

## ✅ Bloc B — L'objet event (fait le 08/06, 22h-23h40)
- [x] event.target — 3 → 7/10
- [x] event.key / event.type — 3 → 7/10
- [x] element.contains() — 2 → 6/10
- [x] window.scrollY — 7/10 (stable)
- [ ] classList.add(classe) plutôt que .style en dur — à appliquer

## 🎯 Bloc C — Méthodes de tableau (fait le 09/06 et 10/06, 3h15)
- [x] reduce() accumulateur objet — 5/10 (le plus fragile) → 7/10
- [x] slice() et splice() — 1 → 7/10
- [x] .push() — 4 → 7/10
- [x] Object.values() — 4 → 7/10
- [x] for...in — 3  → 7/10

## Bloc D — Outils JS du quotidien
- [ ] console.log() en mode debug F12 — 0/10
- [ ] setTimeout — 2/10
- [ ] toLocaleString() / toFixed() — 3/10

## Bloc E — Détails fetch / Observer
- [ ] ?fields= dans l'URL — 1/10
- [ ] threshold / isIntersecting — 2/10

## Bloc F — CSS rouillé à rafraîchir (court)
- [ ] Variables CSS --nom / var() (1) + :root (5)
- [ ] Media queries brut (2) + mobile first (5) + reset en media query (4)
- [ ] height 100vh / min-height (2)
- [ ] margin auto (5)
- [ ] box-shadow rgba (5)
- [ ] meta viewport (2)
- [ ] div vs section vs article (4)
- [ ] spécificité CSS (à ancrer)
- [ ] animation burger → croix (4)

## Bloc G — CSS à pratiquer une fois (niche)
- [ ] glassmorphism / backdrop-blur (2)
- [ ] -webkit-line-clamp (0)
- [ ] Grid CSS brut (3) — optionnel

## Bloc H — Setup à consolider
- [ ] scaffolding projet from scratch (2) — avant Phase 2
- [ ] npm commandes de base

## ⏳ Plus tard — niveau pro
- [ ] response.ok / throw (1)




## 🔧 À réparer plus tard
- World Explorer : API RestCountries v3.1 **dépréciée** (réponse "deprecated", migrer vers v5)
  → mini-projet de révision : lire la doc de migration v5, adapter les noms de champs dans le fetch
  → bon exercice : fetch + lecture de doc + debug sur un cas réel