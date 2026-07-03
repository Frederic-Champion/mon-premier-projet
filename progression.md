# 📓 Journal de progression — Phase 2

> Détail des sessions 1 à 35 archivé dans `progression-P1.md`. Niveaux détaillés dans `revision.md`.

---

## 🏁 Acquis fin de Phase 1 — synthèse

**Repères** : 35 sessions · ~150h · ~3 mois · auto-éval **5,8 → 7,2 / 10** (15 domaines, aucun en recul).

### Ce que je sais faire

- **HTML/CSS** : pages sémantiques responsives, Flexbox, position (relative/absolute/fixed/sticky), variables CSS, media queries mobile first, spécificité, transitions/transform, glassmorphism.
- **Tailwind v4** : projet from scratch (architecture src/dist), `@theme`/`@layer`/`@apply`, tokens sémantiques, **dark mode pro** (pattern shadcn/ui, pilotage par classe + localStorage), responsive.
- **JavaScript** : DOM (point fort), événements (objet event, target/key/contains), HOF (filter/map/reduce/find/some), méthodes de tableau, valeur vs référence, scope, closures, **fetch GET & POST** (FormData, headers, try/catch/finally), **localStorage**, IntersectionObserver, setTimeout.
- **Outils** : Git/GitHub (commit, push, premier merge multi-machines), npm, Prettier + plugin Tailwind configurés, DevTools, debug au console.log, raccourcis VS Code.

### Projets livrés

World Explorer (fetch + migration d'API + refonte) · catalogues fetch/Observer · gestionnaire & catalogue de montures · app météo · Pokédex · back-to-top production · **portfolio vitrine complet** (dark mode sémantique, formulaire Formspree + RGPD + fetch POST, scroll reveal) — _en pause propre._

### 3 poches à entretenir (non bloquantes)

- `map` / `find` / `some` — sous-utilisées (React les fera remonter).
- Placement Grid (`col-span`, `grid-column 1/-1`) — resté à 3/10, micro-exo quand un projet l'exige.
- Famille `align-*` / `justify-*` — mémo : _justify suit la direction de l'axe principal_.

### Trous comblés pendant la révision (blocs A→H)

valeur/référence · scope · closures · reduce objet · slice/splice · Object.values · for...in · l'objet event · console.log debug · setTimeout · variables CSS · media queries · glassmorphism · scaffolding npm.

### ➡️ Prochaine étape

**Intro TypeScript** (types, interfaces, typage de fonctions/tableaux) sur TypeScript Playground, sans outillage local. Puis React (Phase 2).

---

## Sessions Phase 2

<!-- Les nouvelles ents de session commencent ici -->

## Session 36 — [date]

**Durée** :
**Thème** :
**Ce qui a été fait** :
**Ce qui a accroché** :
**Niveau estimé après session** :
**Prochaine session** :

# 🎯 Manques fondamentaux Phase 1 — à combler (audit S35)

> Notions dans le périmètre Phase 1, non encore vues, **nécessaires pour être un vrai junior recrutable** (pas juste passer l'entretien). Classées par priorité et moment d'intégration. À cocher au fur et à mesure.

---

## 🔴 Tier 1 — prérequis directs de React (à voir AVANT de démarrer React)

_Idéalement en 1-2 sessions, juste après l'intro TypeScript. À ancrer en pratique, pas à vide._

- [ ] **Déstructuration** — `const { marque, prix } = monture` / `const [a, b] = tableau`. Le manque le plus structurant : props et `useState` en dépendent entièrement.
- [ ] **Spread / rest `...`** — découvert mais pas ancré. Quotidien en React pour copier un state sans le muter.
- [ ] **Optional chaining `?.` + nullish `??`** — `user?.adresse?.ville`, `valeur ?? 0`. Le standard pro pour gérer `undefined` (remplace les filets `|| 0`).
- [ ] **Modules ES `import` / `export`** — la suite logique des fichiers `.js` séparés. Aucun projet React sans ça.
- [ ] **`JSON.parse` / `JSON.stringify`** — extension directe de localStorage : indispensable dès qu'on stocke un objet (panier, préférences).

## 🔴 Tier 1 — Git (séance courte dédiée, quand tu veux)

- [ ] **Branches + workflow Pull Request** — `git branch` / `checkout` / merge de feature branch / conflit simple. **Non négociable** : aucune équipe ne laisse pousser direct sur `main`. Réflexe attendu d'un junior dès le 1er jour.

---

## 🟡 Tier 2 — importants, à tisser DANS les projets (pas de séance dédiée)

- [ ] **CSS Grid** — déjà identifié (resté à 3/10). Outil de layout fondamental en 2026, pas optionnel.
- [ ] **`@keyframes`** (animations) + **pseudo-éléments `::before` / `::after`** — très courants, jamais abordés.
- [ ] **DevTools — onglet Network** (inspecter les requêtes fetch : statut, réponse réelle) + **breakpoints** du debugger (au-delà du console.log).
- [ ] **`rem` vs `px`** — modèle de taille lié à l'accessibilité (Tailwind tourne en `rem` sous le capot).
- [ ] **`sort()`** avec comparateur + **`Promise.all`** (plusieurs fetch en parallèle).
- [ ] **Bases d'accessibilité** (navigation clavier, rôles ARIA simples) + **modèle client-serveur / codes HTTP** consolidé (les morceaux sont là, manque la vue d'ensemble).
- [ ] **POO / Classes JS** (`class`, `constructor`, `this`, `new`, `extends`) — _lire avant d'écrire_ : savoir comprendre une classe (on en croise dans les librairies) avant d'en concevoir. Peu utilisée en React (style fonctionnel), redevient pertinente côté backend Python (Phase 3).

---

## ⚪ Ignorés sans culpabiliser (pour l'instant)

Tables HTML · gestion des dates · event delegation · SEO. Réels mais non bloquants pour un junior front — s'apprennent au besoin.

---

## 🗺️ Ordre recommandé

1. **Intro TypeScript** (déjà prévu) — Playground, bases.
2. **Tier 1 JS** (déstructuration, spread, `?.`/`??`, modules, JSON) — 1-2 sessions, juste avant React. On les retrouve immédiatement en pratique → ancrage optimal.
3. **React** (Phase 2) — le Tier 2 se glisse au fil des projets.
   3b. **Lire une classe JS** — courte session pendant la Phase 2, quand on en croise dans du code/des libs. Conception POO réelle → Phase 3 (Python).
4. **Branches Git** — séance courte dédiée, à caler librement (avant le premier vrai projet collaboratif).

_Principe : pas une checklist à cocher en bloc avant React (piège perfectionniste). On comble le Tier 1 parce qu'on en a besoin tout de suite ; le reste se tisse dans la pratique, comme la révision éclair entretient l'acquis._

## Session 36 — Intro TypeScript (Playground)

**Durée** : ~2h
**Thème** : fondamentaux TS sur le Playground (sans outillage local) — pourquoi TS, puis les 4 briques de base
**Révision éclair S36 (CSS Grid)** : carte pleine largeur → `grid-column: 1 / -1` (Tailwind `col-span-full`) + parent `repeat(3, 1fr)`. Logique d'un bout à l'autre OK, ordre `repeat()` et syntaxe `/` à raffermir — reste 🟡 (ex-3/10, réactivé).
**Ce qui a été fait** :

- POURQUOI TS : typage dynamique JS (erreurs au runtime) vs typage TS (erreurs à l'écriture/compilation). Sur-ensemble de JS, compilé vers JS, "disparaît à la compilation" (vu dans le panneau droit du Playground). Bénéfice bonus = autocomplétion.
- ANNOTER une variable : `: string` / `: number` / `: boolean`. Inférence (TS devine le type depuis la valeur → on n'annote pas les variables initialisées).
- TYPER une fonction : paramètres annotés (obligatoire, pas d'inférence possible) + type de retour (inféré mais écrit par discipline = contrat explicite). `any` = TS abandonne la vérif.
- TABLEAUX typés : `number[]`, `string[]`, `boolean[]` (= "des number"). Tableaux parallèles (booléens-drapeaux alignés sur une autre liste).
- INTERFACES : décrire la forme d'un objet, réutilisable (DRY). `interface Nom { champ: type; }`, PascalCase, séparateur `;`, PAS de `=` (déclaration ≠ assignation). Vérifie type ET présence des champs. Ordre des champs libre (objet = clés nommées, pas positions). = LE point clé pour les props React.

**Nuances pro abordées (via questions de Frédéric)** :

- `|` (union de TYPES, après le `:`) vs `||` (opérateur de VALEURS, au runtime)
- objet (rôles nommés, ordre libre) vs tableau (positions, ordre capital)
- PascalCase (types, composants) vs camelCase (variables, fonctions)
- ajout : tableau = `push` / objet = assignation `objet.clé = valeur`

**Niveau estimé** :

- Concept TS (pourquoi, compilation, inférence) : 🟢 compris solidement
- Syntaxe de base (variables, fonctions, tableaux, interfaces) : 🟡 compris, pas encore instinctif (s'ancrera en React) — normal et attendu

**Prochaine session** : à décider — soit 2e session TS (consolidation : types optionnels `?`, type alias, union en pratique), soit Tier 1 JS (déstructuration, spread, modules, JSON) juste avant React.

## Session 37 — TS propriétés optionnelles + (à suivre) Tier 1 JS

**Révision éclair S37 (map/find/some)** : `map` (transforme → nouveau tableau) et `find` (1er qui matche → l'élément ou undefined) solides ; `some` était la zone fragile → corrigé : renvoie un BOOLÉEN (oui/non "y en a-t-il au moins un ?"), pas un élément.
**Durée** : dimanche, session longue (3h)
**TS — consolidation** :

- Propriété optionnelle `?` : `champ?: type` rend un champ facultatif (objet valide avec ou sans).
- Champ optionnel absent = `undefined` (pas 0, pas "").
- TS interdit d'utiliser un optionnel comme une valeur sûre (`.length`, calcul...) → erreur "possibly undefined".
- `console.log(x)` ne déclenche PAS le rouge (accepte undefined) ; `x.length` OUI (suppose que x existe).
- Gérer avec `if (valeur)` → narrowing : TS rétrécit `T | undefined` à `T` dans le if.
- Lien transversal : même réflexe "peut être absent → je vérifie" pour props optionnelles React ET retour de find().
  **Niveau TS estimé** : 🟡 compris (variables, fonctions, tableaux, interfaces, optionnels), pas encore instinctif — s'ancrera en React. Intro TS considérée comme SUFFISANTE pour aborder React.
  **Tier 1 JS — Déstructuration** (session 37, suite) :
- Objet : `const { nom, age } = client` → extrait par NOM de clé (ordre libre). Variable = nom de la clé.
- Tableau : `const [a, b] = tab` → extrait par POSITION (nom libre, ordre capital).
- Extraction partielle OK (on peut n'extraire qu'un champ).
- Renommage : `const { marque: marqueMonture } = obj` (le `:` = "renomme en", à NE PAS confondre avec annotation TS).
- Valeur par défaut : `const { promo = 0 } = obj` (se déclenche sur undefined UNIQUEMENT, pas sur tout falsy — un 0 présent est gardé).
- Méthode d'ancrage : Frédéric traduit chaque forme vers sa version longue (accès pointé + if) → très efficace.
  **Niveau** : 🟡 compris, à pratiquer (s'ancrera en React via props).
  **Tier 1 JS — Spread `...`** (session 37, suite) :
- Problème résolu : copier un objet/tableau SANS lien de référence (rappel valeur vs référence : `=` ne copie pas, partage le tiroir).
- Objet : `{ ...obj }` = copie indépendante ; `{ ...obj, champ: x }` = copie + surcharge (le champ après GAGNE, ordre compte).
- Tableau : `[ ...tab ]` = copie ; `[ ...tab, elem ]` = copie + ajout. (Remplace slice() pour copier, plus lisible.)
- Lien React : on ne mute JAMAIS un state, on crée une copie modifiée au spread (React compare les références → mutation invisible sinon). `setState({ ...state, champ: x })`.
- Réflexe à renforcer : toujours log l'original APRÈS pour prouver qu'il est intact.
  **Niveau** : 🟡 compris, les 2 usages (copie / copie+surcharge) appliqués juste sur objet ET tableau.
  **Tier 1 JS — `?.` / `??` + modules + JSON** (session 37, suite et fin) :
- OPTIONAL CHAINING `?.` : accède à une propriété imbriquée SANS planter si un maillon est absent. `client?.mutuelle?.nom` → undefined au lieu de crash si mutuelle absente. Version compacte du `if (x)` de protection. Sur objets/tableaux/appels, pas sur valeurs simples.
- NULLISH `??` : "valeur de gauche, SINON celle de droite si gauche est null/undefined". Marche sur n'importe quelle valeur.
- `??` vs `||` (point clé) : `||` bascule à droite sur TOUT falsy (0, "", false, null, undefined) ; `??` UNIQUEMENT sur null/undefined → un 0 ou "" légitime est gardé par `??`, écrasé par `||`. Reformulé par Fred : "|| = prends le 1, ou le 2 si le 1 ne marche pas" (pas "ou au hasard").
- Combo pro : `objet?.champ?.sous ?? défaut` → descend en sécurité + filet si absent. Standard 2026 pour données d'API/state.
- `??` ne va PAS dans un if → il REMPLACE souvent un if de valeur par défaut (= version compacte du `=== undefined`).
- MODULES `import`/`export` : découper le code en fichiers à responsabilité unique. `export function/const` rend dispo ; `import { x } from "./fichier.js"` récupère (accolades = noms exacts exportés, esprit proche déstructuration). Ossature de tout projet React (`import { useState } from "react"`). Théorique pour l'instant (Playground gère mal le multi-fichiers) → pratique en React.
- JSON : localStorage et le réseau ne transportent QUE du texte, jamais des objets vivants.
  - `JSON.stringify(obj)` → objet en texte (pour STOCKER/ENVOYER). Sans lui, objet posé brut dans localStorage = détruit en "[object Object]".
  - `JSON.parse(texte)` → texte en objet (pour RELIRE/RECEVOIR).
  - Analogie meuble en kit : stringify = démonter à plat, parse = remonter.
  - Lien fetch : `response.json()` = méthode fetch qui ATTEND le texte du réseau (asynchrone, d'où `await`) PUIS le parse. Différent de `JSON.parse` (générique, texte déjà en main, pas d'await).
    **Niveau Tier 1 global** : 🟡 compris (logique pure, pas de par-cœur), PAS encore instinctif. Erreurs de la session = uniquement étourderies de recopie, jamais de compréhension.

⚠️ JALON OBLIGATOIRE avant React : gros exercice de synthèse univers optique combinant TOUT (interface + `?` optionnel + déstructuration + spread + `?.`/`??` + JSON.stringify/parse) dans un seul code cohérent. 1 voire 2 exercices. À faire FRAIS en ouverture de prochaine session, pas en fin de session fatiguée.

## Session 38 — Jalon de synthèse Tier 1 + clôture pré-React

**Durée** : ~1h30 (à ajuster)
**Thème** : exercice de synthèse univers optique combinant TOUT le Tier 1 JS + interfaces TS, en un seul code cohérent (jalon obligatoire avant React).

**Révision éclair S38 (align/justify)** : en flex `row`, `justify-content` = axe principal (horizontal), `align-items` = axe secondaire (vertical). Mémo « justify suit l'axe principal » restitué avec le _pourquoi_. ✅ solide.

**Ce qui a été fait** :

- Exo « devis Optique Champion » construit de mémoire, sans squelette : interface `Mutuelle` + `Client` (avec `mut?: Mutuelle` → interface imbriquée), 2 clients (un avec mutuelle, un sans), fonction `calculerDevis` (déstructuration, `client.mut?.tauxRmb ?? 0`, remboursement + RAC, `return { ...client, RAC, remboursement }`), récap via fonction `recap(devis)` dédiée (DRY), preuve original intact, cycle JSON stringify/parse.
- Concepts re-nommés/clarifiés en passant : typer le paramètre pour laisser TS débusquer le bug (`mut: string` → `Mutuelle`), une interface peut servir de type (formes imbriquées), object shorthand `{ RAC }` = `{ RAC: RAC }`, un objet `return` est anonyme → c'est l'appelant qui le nomme, `?.` uniquement là où un maillon peut manquer.

**Ce qui a accroché** (vocabulaire/câblage, pas conceptuel) :

- Le **mot** « déstructuration » ne raccrochait pas au mécanisme (qu'il maîtrise) — réglé.
- Tentative de reconstruire un nom de variable depuis du texte (`devis${client}`) → recadré : on passe l'objet en **paramètre**, on ne fabrique pas de nom.

**Niveau estimé après session** :

- Tier 1 JS (déstructuration, spread, `?.`/`??`, JSON) : 🟡→🟢 **appliqué ensemble avec succès**, logique solide, syntaxe qui s'affinera en React.
- Intro TS (interfaces, optionnels, typage) : 🟡 suffisant pour React, s'ancrera en contexte.
- **Pré-requis React : COMPLETS.** ✅

**Prochaine session** : démarrage **React** (Phase 2) — composants, props, useState.

## Session 39 — Séance outils VS Code (partie 1/2) : réglages & navigation

**Durée** : ~2h (mardi soir, 21h35–23h37, fixe)
**Thème** : audit du poste + maîtrise des réglages, de la Command Palette et des raccourcis. Préparation outillage avant React.
**Révision éclair S39 (closures var/let + setTimeout)** : `for var` → `3 3 3` (i partagé, vaut la valeur qui casse la boucle) ; `for let` → `0 1 2` (un i par tour). Mécanisme nickel, juste recalé : c'est 3 (sortie de boucle), pas 2 (dernier tour). ✅

**Ce qui a été fait** :

- **Carte mentale de VS Code** : les 5 zones (Activity bar = sélecteur de mode / Sidebar = contenu du mode / Éditeur / Panel [Terminal·Problems·Output·Debug Console] / Status bar = tableau de bord cliquable). Ancrée par test.
- **Hiérarchie des réglages** : User (machine, global) < Workspace (`.vscode/settings.json`, versionné git) — le plus précis gagne. Compris solidement.
- **Bug formatOnSave résolu** : Prettier formatait via `Maj+Alt+F` mais pas au save sur le fixe. Cause = `editor.formatOnSave` est un réglage **machine** (pas dans `.prettierrc` qui, lui, est versionné). Réglé au niveau User. Distinction `.prettierrc` (règles, versionné) vs `settings.json` (comportement éditeur, machine) = acquise.
- **Réglages de confort** : bracket pair colorization (déjà actif par défaut), `trimTrailingWhitespace` ✅, `linkedEditing` ✅. autoSave **volontairement non activé** (garder la main, cohérent avec Git).
- **Hover apprivoisé** : `Editor: Hover Delay` passé de 300 à 750ms (le surgissement involontaire le gênait). Bon réflexe "frottement → mot-clé → ajustement".
- **Settings Sync activé** (compte GitHub Frederic-Champion) : réglages/extensions/raccourcis synchronisés via le cloud entre fixe et portable. Les 2 machines n'ont PAS besoin d'être allumées en même temps (le cloud fait l'intermédiaire en différé). Note pro : jamais sur une machine qui n'est pas à soi.
- **Command Palette** : `Ctrl+Maj+P`. Modèle mental clé = **une seule barre, plusieurs préfixes** : `>` commandes · (rien) fichiers · `@` symboles du fichier · `#` symboles du projet · `:` ligne. Commandes utiles vues : Format Document, Change Language Mode, Git:, Reload Window. Vrai trésor = la navigation (`Ctrl+P` saut de fichier, `Ctrl+G` saut de ligne, `Ctrl+T` symbole projet).
- **Raccourcis clavier** : sélection multiple (`Ctrl+D` par contenu vs `Maj+Alt+→` sélection croissante par structure vs `Ctrl+Maj+L` toutes occurrences) · déplacer/dupliquer lignes (`Alt+↑↓`, `Maj+Alt+↓`) · `F2` renommage par portée (≠ Ctrl+D bête). Grammaire : Ctrl=code/fichier, +Maj=plus grand/sélection, +Alt=manipulation physique de ligne. Filet de sécurité = la palette affiche les raccourcis. Feuille complète = `Ctrl+K Ctrl+S`.

**Méthode adoptée** :

- 🎹 **Système "raccourci de la semaine"** : Claude glisse un raccourci à entraîner en début de session (après la révision éclair) et relance Fred en cours de session quand l'occasion se présente. Un seul à la fois, sur plusieurs sessions.
- Principe directeur retenu : **on ne configure pas par anticipation, on configure quand un frottement réel apparaît** (le frottement donne le mot-clé à chercher). Appliqué 3× ce soir en autonomie (save, hover, colorisation déjà active).

**🎹 Raccourci en cours d'entraînement** : `Ctrl+P` (saut de fichier) — sur 3 sessions, interdiction d'ouvrir un fichier à la souris. À relancer à chaque début de session.

**Niveau estimé après session** :

- Réglages VS Code / hiérarchie User-Workspace : 🟢 compris solidement
- Command Palette + préfixes : 🟢 compris, à pratiquer
- Raccourcis clavier : 🟡 connus, à ancrer un par un (normal)

**Prochaine session** : Séance outils **partie 2/2** — le **debugger** (breakpoints, inspection en direct, step-by-step ; sortir du tout-console.log) + **terminal PowerShell / npm en profondeur** + **point théorique ESLint** (sans installation). Reste aussi en réserve : Git via la barre d'activité (→ séance branches dédiée).

## Session 40 — Séance outils VS Code (partie 2/2) : debugger + npm + terminal + ESLint

**Durée** : ~2h (session coupée midi/soir, portable puis fixe)
**Thème** : fin de l'audit outillage avant Phase 2 — debugger, npm en profondeur, terminal, théorie ESLint.
**Révision éclair** : valeur vs référence (`const copie = client` partage le tiroir → muter copie mute client ; vraie copie = `{ ...client }`). Principe acquis. ✅

**Ce qui a été fait** :

**1. Debugger (DevTools Chrome)** — sur le projet Pokédex (Live Server + F12 → Sources) :

- Concept : mettre en pause à une ligne (breakpoint = clic dans la marge), inspecter les variables EN DIRECT (panneau Scope/Local), avancer pas à pas. Remplace l'archéologie du console.log.
- Breakpoint posé ligne 20 (le `if` de détection de doublon), déclenché en ajoutant 2× "Pikachu".
- Inspection : survol d'une variable → bulle avec sa valeur, sans un seul log. Vu `<value unavailable>` sur les variables pas encore rencontrées.
- **Step over (⤵) vs Step into (⤓)** : over = exécute la ligne, traite un appel de fonction comme une boîte noire (résultat visible, pas le détail) ; into = ouvre la boîte, descend dans la fonction. Distinction repérée par Fred lui-même.
- Note archi : DevTools (F12) = debug dans le navigateur ; VS Code a son propre debugger intégré pour le code sans navigateur (Node/Next API Routes, Phase 2). Même concept partout.

**2. npm en profondeur** :

- **npm = Node Package Manager**, installé AVEC Node (pas une extension VS Code, pas dans VS Code). Programme système, utilisable depuis n'importe quel terminal. Vérifié : `npm --version` → 11.12.1.
- **Node fait tourner du JS hors navigateur** ; tout l'outillage web moderne (Tailwind, Prettier, ESLint, React) est écrit en JS et tourne sur Node — même les outils qui produisent du CSS.
- **Flux d'un `npm install X`** : va chercher le package sur le **registre npm** (magasin en ligne) → le dépose dans **node_modules/** (entrepôt local, lourd, ignoré par git car régénérable).
- **package.json vs package-lock.json** : json = liste de courses (version approximative, ex. `^4.3.0` = "4.x") ; lock = ticket de caisse (version EXACTE figée + sous-dépendances). Les DEUX se versionnent. Le lock garantit que toute machine installe rigoureusement la même chose (anti "ça marche chez moi").
- **Pourquoi `npm install` après `git pull`** : node_modules n'est pas dans git → `npm install` le reconstruit à partir du lock. Rituel 2 machines justifié : `git pull` (code + fiches) → `npm install` (reconstruit node_modules) → `npm run dev`. Réflexe systématique même si souvent rien ne change.
- **dependencies vs devDependencies** : deps = pièces du produit (React, Tailwind) ; devDeps = outils d'atelier inutiles en prod (Prettier, ESLint). Analogie optique : verre/monture partent chez le client, tour de meulage reste à l'atelier. **npm ne devine pas le rôle** → `-D` obligatoire pour ranger en devDep (défaut = deps).
- **scripts** : raccourcis de commandes, section `"scripts"`, lancés par `npm run <nom>` (sauf start/test/build sans `run`). Ex. `npm run dev` = le watch Tailwind.
- **npx** = Node Package eXecute : exécute un outil (une fois) au lieu de l'installer. Ex. `npx create-next-app` en Phase 2.

**3. Terminal / PowerShell** :

- Concept central : le terminal est TOUJOURS posé dans un dossier ; toute commande agit depuis là. Lire le chemin avant le `>`. 90% des erreurs débutant = mauvais dossier.
- 4 commandes : `pwd` (où suis-je), `ls` (quoi ici), `cd dossier` (entrer), `cd ..` (remonter). Tab = autocomplétion.
- Lien transversal : `.` = ici / `..` = au-dessus, la même logique que dans les imports (`./fichier.js`) et les chemins Tailwind (`./src/input.css`).

**4. ESLint (théorie seule, pas d'install — acté)** :

- **Prettier = la FORME** (indentation, guillemets — c'est _joli_) ; **ESLint = le FOND** (variable inutilisée, `=` vs `===`, code inatteignable, usage avant déclaration — c'est _juste_). Complémentaires, jamais concurrents, toujours les 2 en équipe.
- Non négociable en entreprise : impose une norme de qualité commune, garde-fou automatique avant review/prod.
- **Report volontaire justifié** : pendant l'apprentissage, écrire la syntaxe soi-même et buter sur ses erreurs = l'ancrage. Même logique que Copilot désactivé. Bon moment = démarrage React (Next l'installe par défaut).

**Niveau estimé après session** :

- Debugger : 🟢 concept compris et pratiqué (breakpoint, inspection, step over/into). À réutiliser pour en faire un réflexe.
- npm / npx / package.json / dependencies : 🟢 fonctionnement compris, sait LIRE un package.json. Syntaxe fine à ancrer en Phase 2 par l'usage.
- Terminal navigation : 🟢 les 4 commandes de base acquises.
- ESLint : 🟢 rôle et raison d'être compris (théorie).

**🎹 Raccourci en cours d'entraînement** : `Ctrl+P` (saut de fichier) — session 2/3. À relancer au prochain début de session.

**Dettes notées** :

- Repo sur le portable dans **OneDrive** (`C:\Users\fred_\OneDrive\Bureau\Repo GitHub\...`) → OneDrive + Git peuvent se marcher dessus (sync de node_modules). À traiter : déplacer le repo hors OneDrive. Non urgent.
- **Git via barre d'activité (Source Control)** + quelles options Git dans la palette → séance branches Git dédiée (avant 1er vrai projet React).

**➡️ Prochaine session : DÉMARRAGE PHASE 2 — REACT** (composants, props, useState). Enfin le vif du sujet. 🚀

## Session 41 — Démarrage React (composants → useState) + consolidation Tier 1

**Durée** : 2 sessions cumulées (~2h hier soir React + ~2h aujourd'hui débug/consolidation)
**Thème** : premiers pas React (composant, JSX, props, export, useState) puis, après surcharge, retour consolidation Tier 1 JS par exercices.

**Révision éclair (aujourd'hui)** : `?.` + `??` sur objet client (mutuelle absente) + cas où `||` diffère de `??` (valeur légitime `0` écrasée par `||`, gardée par `??`). ✅ solide, règle reformulée juste.

### PARTIE 1 — React (hier soir, ~2h, sans résumé car couché fatigué)

**Concepts vus** :

- **Composant** = fonction qui retourne du JSX. PascalCase obligatoire (distingue d'une balise HTML). On n'appelle JAMAIS un composant (`Carte(data)` ❌), on l'utilise en balise `<Carte />` → React l'appelle et fabrique l'objet props.
- **JSX** = syntaxe HTML-like dans le JS, compilée en JS pur (comme TS qui disparaît). `class`→`className`, un seul élément racine, `{ }` pour injecter du JS. `return (` ouvre sur la ligne du return (évite le `;` auto-inséré).
- **React vs JSX** clarifié (grosse source de confusion) : React = la librairie (moteur), JSX = la syntaxe d'écriture. Deux choses distinctes, associées mais séparables. React installé dans node_modules (vu dans DEPENDENCIES de CodeSandbox).
- **Props** = données passées comme attributs `<Carte marque="X" prix={129} />`, reçues déstructurées `function Carte({ marque, prix })`. Texte = `"..."`, reste = `{...}`.
- **export default** : rend le composant App dispo pour le fichier caché (index.js) qui l'importe et le rend. Distinction export default (sans accolades) vs export nommé (`import { useState }`, avec accolades).
- **useState** : `const [val, setVal] = useState(départ)`. Donnée surveillée par React. `val` = valeur affichée, `setVal` = "télécommande" qui change la valeur ET prévient React → re-render. Règle d'or : jamais `val = ...`, toujours `setVal(...)`.
- **onClick** = version JSX de addEventListener. `onClick={() => setVal(...)}`, la flèche = "à exécuter au clic".

**Environnement** : react.new (CodeSandbox) pour les exercices React. Projet Vite local délibérément différé (ne pas mélanger apprendre le concept / driller l'outillage).

**Frictions React relevées** (câblage, pas conceptuel — normal au 1er contact) :

- Appel du composant comme fonction JS (`CarteMonture(client1)` + `console.log`) au lieu de balise JSX. Recadré : React appelle, React fabrique props.
- Virgule entre attributs JSX (réflexe objet JS) → attributs séparés par espaces, jamais virgule.
- Nom de prop réservé `ref` utilisé → à éviter (usage spécial React).
- Preview CodeSandbox pas ouverte → "rien ne s'affiche" pris pour un bug (2×). Bouton "Open preview".

### PARTIE 2 — Mur useState puis consolidation (aujourd'hui)

**Point important** : surcharge cognitive nette en fin de session React (useState présenté d'un bloc en fin de session chargée = trop). Ce matin, blocage total ("je comprends rien") → NON pas une régression, mais 2 mystères d'architecture non levés qui empêchaient tout ancrage :

1. "Où est React ? on l'exporte où ?" → clarifié : React EXPORTE useState (dans node_modules), Frédéric l'IMPORTE. Ce n'est pas son fichier qui fait vivre React, c'est React qui fournit les outils. `./` = mon fichier / nom nu = package.
2. "`const [add, setAdd] = useState(12)`, j'écris quoi ?" → clarifié via analogie post-it (variable normale, personne ne regarde) vs panneau électronique relié à l'écran + télécommande (state). Débloqué.
   → Une fois les 2 mystères levés + traduction React↔JS pur du bouton côte à côte : compréhension rétablie. A écrit son useState complet et JUSTE de mémoire. Puis VU le compteur s'incrémenter dans la preview sans toucher au DOM.

**Leçon pédagogique** : useState est un gros morceau, ne PAS le présenter en fin de session fatiguée ni d'un bloc. Réintroduire par petits pas, guidé (exercice à trou), jamais lâché seul dans le vide au 2e contact.

**Consolidation Tier 1 (5 exercices, univers optique)** — décision de Frédéric : stopper l'apprentissage neuf, pratiquer jusqu'à acquis. React mis en pause explicitement ("ne me parle pas de React tant que le Tier 1 n'est pas solide").

- **Exo 1** (`resumeClient`, déstructuration + `?.` + `??`) : réussi. Correction : `?.` inutile après un `if` qui a déjà vérifié (narrowing) — `?.` va LÀ où ça peut manquer, pas partout.
- **Exo 2** (spread copie + surcharge) : réussi en 15s. Spread en voie d'automatisation.
- **Exo 3** (`map` + spread + ternaire, MAJ d'un objet dans un tableau) : **gros point d'apprentissage**. Bug initial `x.prix = 170` dans le map (mutation + affectation qui renvoie la valeur). A soulevé la vraie question shallow/deep.
- **⚠️ CONCEPT CLÉ ANCRÉ — copie de surface (shallow)** : le spread copie UN SEUL niveau. `[...stock]` copie le tableau (classeur) mais PAS les objets dedans (tiroirs partagés). Muter `x.prix` touche donc l'original. Solution : spreader AU BON NIVEAU = `{ ...m, prix: X }` (nouveau tiroir). Analogie classeur/pochettes/tiroirs efficace. Frédéric légitimement frustré ("à quoi sert le spread alors ?") → démontré par table que le spread protège bien tableau (push, remplacement de case) mais pas l'intérieur des objets. **Manque pédagogique reconnu de ma part : cette nuance aurait dû être posée dès l'intro spread (S37).**
- **Exo 4** (soldes conditionnelles, `>` + double surcharge + calcul) : réussi (juste faute de frappe `<`/`>` corrigée seul). Double surcharge `{ ...x, prix: x.prix - 20, promo: true }` nickel. Point rigueur : `>` strict vs `>=` (piège de borne / off-by-one).
- **Exo 5** (`?.`/`??` sur données imbriquées, 3 niveaux) : réussi. Ligne `traitement` = `c?.ordonnance?.verre?.traitement ?? "aucun"` EXEMPLAIRE (niveau pro). Correction : ternaire hybride qui teste `ordonnance` mais accède `verre.indice` sans protéger `verre` = faille cachée. Règle : soit `?.` partout jusqu'au bout + `??`, soit un test qui couvre TOUS les niveaux touchés — ne pas mélanger.

**Niveau estimé après session** :

- **Pilier `map` + spread + ternaire** : 🟢 **acquis** (4 exos, structure sort sans hésitation).
- **Copie shallow vs deep / spread multi-niveaux** : 🟡→🟢 compris en profondeur après friction (le meilleur ancrage).
- **`?.` / `??`** : 🟢 solide, y compris imbriqué. Reste à surveiller : cohérence test-vs-accès (ne pas tester un niveau et accéder plus bas).
- **React (composant, JSX, props, export, useState)** : 🟡 concept compris, PAS instinctif. Syntaxe React à re-driller en douceur. **Volontairement mis en pause** au profit du Tier 1.

**Fiche de révision** créée en PDF imprimable (TS + Tier 1 JS + React bases) — à garder à côté du clavier.

**➡️ Prochaine session (demain)** : SUITE consolidation par exercices, jusqu'à ce que ça rentre. Ordre convenu : 1 exo `?.`/`??` de plus → puis enchaîner en remontant progressivement jusqu'à React (déjà vu). Rester sur react.new pour la partie React. Ne pas introduire de concept neuf tant que le Tier 1 + les bases React ne sont pas plus instinctifs.
