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

## Session 39 — Séance outils VS Code (partie 1/2) : réglages &

navigation

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

## Session 42 — Consolidation Tier 1 (rest destructuring) + remontée vers React (liste .map + key)

**Durée** : ~2h30–3h
**Thème** : suite du plan de la S41 — 1 exo `?.`/`??` de mise en jambes, exercices combinés Tier 1, puis remontée progressive vers React (rendre une liste avec `.map()`).

**Révision éclair (shallow/deep)** : `const copie = [...stock]; copie[0].prix = 999` → `stock[0].prix` vaut **999**. Mécanisme restitué juste avec ses mots (le spread copie le classeur + les étiquettes, pas les tiroirs → objets partagés). ✅ **Le point dur de la S41 a tenu la nuit — ancré.** Complément donné : `copie[0] = {...}` (remplacer la pochette) préserve l'original, vs `copie[0].prix = ...` (entrer dans le tiroir) le mute.

**Ce qui a été fait** :

_Tier 1 JS (consolidation) :_

- **Exo `resumeCommande`** (`?.`/`??` sur 3 niveaux imbriqués, 4 commandes dont une sans client) : réussi **du premier coup**, sans aide. Ligne express `cmd?.client?.livraison?.express ? "express" : "standard"` juste (raisonnement fin : le ternaire gère `undefined` comme falsy → "standard"). `?.`/`??` = 🟢 **solide**.
- **Définition shallow/deep posée** : shallow = superficiel (1 niveau, ce que fait le spread) ; deep = profond (tous les niveaux). `structuredClone()` = deep copy native, mais **rare en React** (on spread au niveau exact à modifier, pas de deep copy systématique).
- **Exo `panierFinal`** (`map` + `?.`/`??` + calcul de prix remisé) : réussi, calcul juste. Question de Fred → introduction d'un **concept neuf** :
- **🆕 REST en déstructuration** : `const { remise, ...reste } = m` → isole `remise` (utilisable) ET ramasse tout le reste sans elle. Façon propre de "retirer une clé" sans muter (jamais `delete`). **Tableau des 2 visages du `...`** : ramasse à gauche du `=` (déstructuration) / étale dans un `{ }` (construction). Vu **une seule fois** → à répéter. _(Pas encore dans la fiche PDF.)_

_React (remontée) :_

- **Pattern liste `.map()` → composants** : `{tableau.map((x) => <Composant key={x.id} .../>)}`. Présenté comme le prolongement direct du `.map()` de Fred (renvoie du JSX au lieu d'un objet/texte ; parallèle explicite avec `resumeClient` + `forEach`).
- **`key`** : étiquette unique obligatoire sur tout élément généré par `.map()`. Toujours un vrai `id` ; jamais l'index si la liste bouge. Oubli = warning jaune (pas un crash).
- **`() ` vs `{ }` après `=>`** clarifié : `{ }` = bloc → `return` explicite obligatoire ; `( )` ou rien = une seule expression → return implicite. Piège `=> { <JSX/> }` sans return = renvoie `undefined`.
- **Règle élément racine unique** re-expliquée : `.map()` produit plusieurs frères → besoin d'un parent (`<div>` ou fragment `<>`). Le `<div>` n'est pas dû au `.map()` mais à la règle "un seul racine par return".

**Point pédagogique majeur (blocage traversé)** :

- Exercice `CarteClient` lâché **entier à reconstruire de mémoire** après un seul exemple → **blocage fort** ("pourquoi deux fonctions ??", "je comprends rien"). **Même erreur de dosage que useState en S41** : concept de fond (composant réutilisable) pas encore solide + syntaxe pas rodée = mur.
- Débloqué en **deux temps** : (1) explication du POURQUOI deux fonctions via analogie **moule (`CarteClient`) + chaîne de production (`App`)** et parallèle `resumeClient` + `forEach` → le concept de fond a cliqué ; (2) passage en **mode guidé** (squelette + un seul trou à combler). Fred a demandé explicitement la correction → donnée directement (règle respectée).
- **Puis remontée nette** : exercice similaire `CarteMonture` refait **en autonomie**, quasi complet du premier coup (manquait juste `key`). A consulté une **vidéo Grafikart** en complément → encouragé (croiser les sources = réflexe de dev sain, pas de la triche).

**Niveau estimé après session** :

- **`?.`/`??`** (même imbriqué) : 🟢 solide.
- **Copie shallow/deep** : 🟢 ancré (a tenu la nuit, restitué seul).
- **Rest destructuring** : 🟡 neuf, vu 1×, à répéter.
- **Pattern liste `.map()` + composant + `key`** : 🟡→🟢 **acquis** (réussi en autonomie après déblocage). C'est le pattern le plus courant de React.
- **Concept "composant réutilisable" (moule + chaîne)** : point de fond débloqué — c'était LE blocage, pas la syntaxe.
- **`useState`** : reste 🟡 **fragile** (1 seul exo guidé en S41). **Priorité n°1 des prochaines sessions.**

**Leçon de dosage confirmée (2e fois)** : ne PAS lâcher un composant React entier à reconstruire de mémoire au 1er/2e contact. Mode **guidé** (squelette + trou) obligatoire tant que la syntaxe React n'est pas posée. Bien séparer "comprendre le concept de fond" de "driller la syntaxe".

**Audit de fin de session (état vs fiche)** : aucun trou de contenu non couvert. Restent : `useState`/`onClick` (fragile, priorité), rest destructuring (à répéter), **JSON** (seul coin Tier 1 jamais pratiqué — à faire en contexte localStorage/API, non bloquant), **TS** (à rebrancher via le typage des props quand useState solide). Modules `import`/`export` = ancrés en contexte réel (pas de séance dédiée).

**➡️ Prochaine session (dimanche, session longue, frais)** : **priorité `useState` + `onClick`** — le vrai chaînon fragile de React — en **mode guidé** (squelette + trous, pas de reconstruction totale de mémoire). Puis combiner **liste `.map()` + state** (afficher une liste ET la modifier : ajouter/retirer une monture via `setState`). TS des props dès que useState est solide.

## Session 43 — Consolidation useState + onClick (compteur, bascule) + state = tableau

**Durée** : dimanche, ~3h (session frais)
**Thème** : priorité n°1 du plan — solidifier `useState` + `onClick` en mode guidé, puis introduire le state-tableau (ajout sans mutation) jusqu'au tableau d'objets.

**Révision éclair S43 (rest destructuring)** : mécanisme restitué juste (isoler une propriété pour l'utiliser + ramasser le reste sans elle, sans muter). **Erreur de vocabulaire corrigée** : Frédéric a dit « spread » pour décrire du **rest**. Recadrage via les 2 visages du `...` — **rest** = ramasse à GAUCHE du `=` (déstructuration) ; **spread** = étale à DROITE (dans un `{ }` / `[ ]`). Concept 🟡, à recroiser (vu 1× en S42).

**Ce qui a été fait** :

_useState + onClick (2 exercices) :_

- **Exo 1 — `CompteurEssayage`** (incrément) : la logique du trou juste **du premier coup** → `onClick={() => setEssais(essais + 1)}`. Mais crash app = **2 bugs d'écosystème** (pas React) : (1) `import { useState } from "react"` laissé en commentaire par doute de syntaxe ; (2) `export default` manquant. Grosse clarification : **import nommé** (`{ useState }`, accolades, nom exact) vs **export default** (sans accolades, nom libre, 1 seul par fichier). Rôle d'`export default` : rendre le composant dispo pour `index.js` (le fichier cadre qui l'affiche).
- **Question archi de Frédéric** : « plusieurs composants par fichier ? » → un fichier peut contenir **plusieurs composants** mais **un seul `export default`** (+ autant d'exports nommés qu'on veut). Convention pro = **1 fichier = 1 composant = 1 export default**, rassemblés par `import`.
- **Exo 2 — `StatutMonture`** (bascule booléenne, en autonomie) : 3 corrections en chaîne, toutes JS pur :
  - `setChange(change = false)` → le `=` **assigne**, ne bascule pas → fige `false`.
  - `let` inutile → rappel **règle d'or du state** (S41) : on change TOUJOURS via `setX(...)`, jamais `x = ...` (sinon React n'est pas prévenu, pas de re-render). Retour à `const`.
  - Solution : `setChange(!change)`. **Point clé verbalisé** : l'inversion `!` est du **JS pur**, il n'existe pas d'« outil magique React » pour ça. Règle générale → **React gère le QUAND redessiner, JS pur gère le COMMENT calculer** la nouvelle valeur (`+1`, `!`, spread…).

_State = tableau :_

- **⚠️ Erreur de dosage de ma part (3e fois)** : exercice « liste » lâché avec le `.map()` déjà écrit, MAIS sans jamais enseigner « comment ajouter à un tableau-state ». Frédéric bloqué **à juste titre** (« je ne sais pas comment faire des tableaux avec React »). → Cours ajouté après coup.
- **Cours state-tableau** : `useState([])`. Interdit de `push` (mute l'original → React ne voit pas de nouvelle référence → pas de re-render). Ajout via **tableau neuf** : `setMontures([...montures, nouvel])` — réinvestit le **spread** (S37/41/42).
- Exo réussi : `setMontures([...montures, "monture"])`. **Question pertinente** : « pourquoi un string, quel intérêt ? » → limite volontaire de l'exo (le `.map()` affiche par **position** `i`, contenu indifférent).
- **Version réaliste** : tableau d'**objets** `{ marque, prix }`, affichés via `m.marque` / `m.prix` dans le `.map()`. Code **propre et complet du premier coup**. A bien identifié seul que le vrai usage viendra d'un **formulaire** ou d'une **API**.

**Niveau estimé après session** :

- **Rest destructuring** : 🟡 mécanisme OK, **vocabulaire spread/rest à fixer**.
- **`useState` + `onClick`** : 🟡→🟢 **consolidé** (2 patterns : incrément + bascule). Les blocages n'ont JAMAIS porté sur le mécanisme React — uniquement sur l'écosystème JS autour (import/export, `=` vs `!`, `let` vs `const`). C'est le vrai acquis du jour.
- **Import nommé vs `export default`** : 🟢 clarifié solidement.
- **State = tableau (+ tableau d'objets)** : 🟡→🟢 acquis (ajout sans mutation via spread). **Neuf → à recroiser.**
- À verbaliser prochaine fois : `onClick={maFonction}` (référence) vs `onClick={() => setX(...)}` (fléchée inline) — les 2 formes utilisées aujourd'hui sans que la distinction soit posée.

**Leçon de dosage confirmée (3e fois)** : ne pas donner un exercice sur un mécanisme **non encore enseigné**, même si le reste du squelette est fourni. « Ajouter à un tableau-state » aurait dû être un mini-cours AVANT l'exo liste. Bien séparer « enseigner le mécanisme » de « driller la syntaxe ».

**Restes non traités** : JSON.stringify/parse (toujours jamais pratiqué en exo — à faire en contexte localStorage/API, non bloquant) · révision éclair **Git** promise aujourd'hui mais non jouée → à passer en ouverture de S44.

**➡️ Prochaine session (demain, ~3h)** :

1. Révision éclair **Git**.
2. **`useState` sur un input** (pattern formulaire) — transforme « monture fixe » en **vraie donnée saisie** (le chaînon qui rend le state-tableau utile).
3. Combiner : **formulaire + liste** (ajouter une monture saisie) puis **retirer** un élément (`filter` + `setX`).
4. **TS des props** dès que useState est bien solide (bientôt).

## Session 44 — Controlled inputs + formulaire + liste + suppression (mini-projet complet)

**Durée** : ~3h
**Thème** : le pattern formulaire React de bout en bout — input contrôlé, ajout à une liste, suppression par `filter`. Mini-projet `GestionMontures` reconstruit page blanche.

**Révision éclair S44 (Git — `.gitignore`)** : pourquoi `node_modules/` et `dist/output.css` sont exclus. Point commun **régénérable → non versionné** restitué juste (node_modules = `npm install`, output.css = généré par le watch). Nuance recalée : le critère est « reconstructible depuis la source », PAS la taille. Modèle « on versionne la recette (package.json, input.css), on ignore la sortie » ✅ solide.

**Ce qui a été fait** :

_Controlled input (le pattern formulaire) :_

- **`value={x}` + `onChange={(e) => setX(e.target.value)}`** = les deux fils de la boucle. Le state est la SEULE source de vérité ; l'input n'est qu'un miroir. Inversion vs HTML pur (où l'input possède son texte).
- Piège vs Phase 1 relevé : en React `onChange` se déclenche à CHAQUE frappe (comme l'`input` JS pur), pas à la perte de focus.
- Exo `SaisiePrix` (2 trous) réussi du premier coup.

_Formulaire + liste + suppression :_

- Ajout : `setMontures([...montures, { id: crypto.randomUUID(), marque, prix }])` + vidage des champs via `setX("")` (le controlled input vide le champ à l'écran tout seul).
- Suppression : `setMontures(montures.filter((m) => m.id !== id))` — nouveau tableau sans la ciblée, jamais de mutation. **`crypto.randomUUID()`** appelé UNE fois à la création (id stable) → passage de `key={i}` à `key={m.id}` (obligatoire dès que la liste bouge).
- Distinction verbalisée (enfin) : `onClick={ajouter}` (référence, aucun argument) vs `onClick={() => supprimer(m.id)}` (flèche inline, on passe un argument).

**Point pédagogique (reconstruction page blanche)** :

- Le format à trou avait posé chaque pièce isolément, mais l'assemblage complet n'était pas encore automatique → reconstruction totale demandée. 1er jet en consultant les anciens exos (sain sur une 1re reconstruction), avec 3 bugs de charge de syntaxe : `setMontures({...})` (objet au lieu de tableau), `value={}` oubliés, `supprimer` incomplet. **Tous corrigés** → version finale propre.
- Bugs typiques du jour = **charge de syntaxe et scope**, jamais incompréhension du pattern (ex. `key={id}` puis `!== key` = même question « quelle variable existe dans ce scope ? »).

**3 questions de fond traitées en fin de session** (les câblages qui rendent React instinctif) :

1. référence `{fn}` vs flèche `{() => fn(arg)}` — on DONNE une fonction, pas son résultat ; la flèche = fonction jetable qui transporte l'argument (ancrage forme longue).
2. voyage de l'id — il DESCEND par l'argument dans le tiroir-paramètre (rien ne « remonte ») ; lien scope.
3. `value={}` — controlled input ; React ré-impose le state à chaque rendu (d'où le besoin d'`onChange`) ; le `setX("")` qui vide le champ prouve le chaînage.

**Méthode confirmée** : ancrage **forme longue → DRY** très efficace sur la flèche inline — à réutiliser pour toute syntaxe compressée.

**Niveau estimé après session** :

- **Controlled input (`value` + `onChange`)** : 🟡→🟢 acquis, pattern posé.
- **Formulaire + ajout + suppression `filter`** : 🟢 mini-projet complet reconstruit de mémoire (avec appui sur anciens exos = normal en 1re reconstruction).
- **`filter` + id stable (`crypto.randomUUID`)** : 🟡 neuf (introduit ce jour), à recroiser.
- **Référence vs flèche inline** : 🟢 verbalisé et compris (câblage était le dernier flou).
- **`useState` général** : 🟢 consolidé (plus le chaînon fragile de la S42).
- Frédéric se sous-note (a corrigé seul la majorité des bugs) — recalibrage vers le haut.

**Instructions projet** : rafraîchies à la S44 (par Frédéric dans l'interface). RAS d'obsolète côté React ; la mention « react.new » deviendra caduque après le passage Vite local.

**Restes non traités** : JSON.stringify/parse (toujours jamais pratiqué en exo — à faire en contexte localStorage/API) · rest destructuring (vocabulaire rest/spread à recroiser) · TS des props (dès maintenant, useState solide).

**➡️ Prochaine session (nouvelle conversation)** : **Passage react.new → projet Vite LOCAL** — `npm create vite`, porter `GestionMontures`, le **découper en fichiers** (`GestionMontures.jsx` séparé → la convention « 1 fichier = 1 composant » enfin réelle), `git init` + 1er commit. Jalon React (архi multi-fichiers) ET outillage réunis. Réactive `Ctrl+P` et le rituel deux machines.

## Session 45 — Exercice "Thinking in React" (tableau filtrable groupé) + Set + table sémantique

**Durée** : 2 sessions cumulées (~2h + ~2h30 = 4h30). Exercice Grafikart / doc React ("Thinking in React").
**Thème** : reconstruire de A à Z le tableau de produits filtrable — recherche, case à cocher, style conditionnel, tableau sémantique `<table>`, regroupement par catégorie (double boucle), génération des catégories via `Set`. Puis rejeu complet en autonomie sur données neuves.

**Révision éclair S45 (Flexbox align/justify)** : en `flex-direction: row`, `justify-content` = axe horizontal, `align-items` = axe vertical. Restitué juste, avec le _pourquoi_ (justify suit l'axe principal → tout s'inverse en `column`). ✅ solide.

### Ce qui a été fait

_Exercice 1 — construction guidée (base PRODUCTS Grafikart : Apple, Dragonfruit…) :_

- **Affichage liste** (`.map()` + JSX) : posé seul. `key={p.name}` (champ unique/stable, choisi seul — pas d'`id` dans les données).
- **Recherche par nom** : controlled input (`value` + `onChange`), + prise de conscience du **state vs donnée dérivée** — la liste filtrée n'est PAS un state, elle se recalcule à chaque rendu depuis `search` + les données. Filtre : `p.name.toLowerCase().includes(search.toLowerCase())` (les DEUX côtés en minuscules).
- **Case à cocher** : le pattern neuf. Une checkbox se lit sur **`.checked`** (booléen), pas `.value` (qui vaut la chaîne `"on"`). Paire symétrique : `checked={check}` ↔ `onChange={(e) => setCheck(e.target.checked)}`. Filtre à 2 conditions refactoré proprement : `matchNom` / `matchStock = check ? m.stocked : true` / `return matchNom && matchStock`.
  - **Piège traversé** : première version renvoyait `p` (l'objet, truthy) dans la branche else du ternaire → cassait la recherche. Un callback `filter` renvoie **toujours un booléen**. + précédence : `&&` s'exécute avant `? :` → ternaire à placer sur le stock seul, pas sur le filtre entier.
- **Style conditionnel (rouge sur rupture)** : `style={p.stocked ? undefined : { color: "red" }}` — posé sur le `<tr>` (la ligne), pas les `<td>`. Bug traversé : `PRODUCTS.stocked` (le tableau n'a pas cette prop → undefined → rouge partout) ; corrigé en testant `p.stocked` DANS le `.map()`, là où chaque produit existe individuellement.
- **Table sémantique** (question spontanée de Frédéric : "`<tr>` existe, pourquoi pas appris ?") → point pro important : `<table>` = données tabulaires (ligne + colonne ont un sens), PAS du layout (anti-pattern années 2000 ; layout = Flexbox/Grid). Ici vrai tableau → `<table>` plus propre que `<div>`. Balises neuves : `<thead>`/`<tbody>`/`<tr>`/`<th>`/`<td>`. Accessibilité (lecteur d'écran annonce lignes/colonnes) = le "pourquoi". `htmlFor` (pas `for`) et `colSpan` (camelCase) notés.
- **Regroupement par catégorie (double boucle — LE point neuf)** : `.map()` dans `.map()`. Boucle extérieure sur les catégories → un `<tbody>` + ligne-titre `<th colSpan="2">` (rappel `grid-column 1/-1` S36). Boucle intérieure = `.filter(m => m.categorie === cat).map(...)` → les `<tr>`. On filtre **listFiltrer** (déjà filtré), jamais les données brutes. `key={cat}` sur le `<tbody>`.
  - Blocage réel sur l'imbrication présentée d'un bloc → débloqué en **décomposant** : d'abord la boucle extérieure seule (2 titres nus), PUIS réintégrer le `.map()` produit à l'intérieur. Un niveau à la fois.
- **DRY — catégories générées via `Set`** : remplacé `const cat = ["Fruits","Vegetables"]` (en dur) par `[...new Set(PRODUCTS.map(p => p.categorie))]`. Démontré en direct : Frédéric a ajouté un produit "outils" dans les données → apparu tout seul avec sa catégorie (preuve du DRY). Chaîne : tableau avec doublons → `Set` (déduplique) → spread → tableau propre. `Set` ≠ tableau (pas de `.map()`/`.filter()`, d'où le spread obligatoire).

_Exercice 2 — rejeu complet EN AUTONOMIE (données neuves : MONTURES, champs `modele`/`prix`/`enStock`/`categorie`) :_

- App complète reconstruite de mémoire, du premier jet, avec noms de champs différents (impossible de copier machinalement → force la compréhension). Recherche + case + table + rouge + regroupement + `Set` : **tout juste et bien placé**. 2-3 vérifications sur l'exo précédent (sain, encouragé).

### Notions neuves ancrées (fil rouge classes natives)

- **`Set`** : collection à valeurs uniques (doublons refusés). Méthodes propres `.add`/`.has`/`.delete`/`.size`. Usages : dédupliquer (`[...new Set(tab)]`), test d'appartenance rapide (`.has`), suivre des sélections, compter les distinctes. N'a PAS d'index ni `.map`/`.filter`.
- **Vocabulaire classes/instances** : `Set`, `FormData`, `IntersectionObserver` = des **classes** (moules natifs) ; `new` fabrique une **instance** (objet). PascalCase = type qu'on instancie (comme les composants React). Rappel `FormData` (ramasse les champs à `name` d'un form → body du POST). Lien vers Tier 2 "lire une classe" (conception réelle → Phase 3 Python).

### Niveau estimé après session

- **Pattern tableau filtrable + groupé (filter → filter+map dans map)** : 🟢 **acquis** (2 exécutions, 2e en quasi-autonomie sur données neuves). LA bascule compris → instinctif observée en direct sur la double boucle (mur hier, posée seul aujourd'hui).
- **Controlled input texte + checkbox (`value`/`.value` vs `checked`/`.checked`)** : 🟢 solide.
- **Filtre multi-conditions (`filter` + `&&` + ternaire bien placé)** : 🟢, avec compréhension fine (callback = booléen ; précédence `&&` vs `?:`).
- **Table HTML sémantique (`table`/`thead`/`tbody`/`tr`/`th`/`td`, `colSpan`, `htmlFor`)** : 🟡→🟢 neuf mais posé 2×, distinction data vs layout comprise.
- **`Set` + génération dérivée (DRY)** : 🟡 neuf, compris + appliqué seul en exo 2. À recroiser.
- **State vs donnée dérivée** : 🟢 principe clé re-verbalisé (ne pas stocker ce qui se recalcule).
- Frédéric se sous-note (a mené l'exo 2 quasi seul en se disant "pas à l'aise") — **recalibrage vers le haut**.

### Restes / à surveiller

- **Code mort** repéré dans l'exo 2 (`const dupli = [...MONTURES]` jamais utilisé) → réflexe ESLint "variable non utilisée" (S40). Non corrigé (clôture) : à nettoyer au prochain passage. Rappel : `.map()` ne mute pas la source → pas besoin de copier avant de dériver.
- **Placement des hooks** : convention pro = `useState`/`useEffect` tout en haut du composant, avant les calculs dérivés (règles des hooks). Cosmétique, à ancrer.
- Détail front : respecter la casse des en-têtes demandés (`Modèle`/`Prix` vs `modele`/`prix`).
- **JSON.stringify/parse** : toujours jamais pratiqué en exo (seul coin Tier 1). Proposé cette session, reporté → à glisser en contexte localStorage/API.
- **Rest destructuring** : vocabulaire rest/spread à recroiser (dette S43).
- **TS des props** : à brancher (useState solide depuis un moment).

### ➡️ Prochaine session (nouvelle conversation)

Deux gros jalons en attente, à faire **frais** (pas en fin de session chargée) :

1. **`useEffect` + vraie API (fetch)** — remplacer les données en dur par une source serveur. Anticipé par Frédéric ; mérite une **séance dédiée de ~2h**, à tête reposée. Candidat n°1.
2. **Passage react.new → projet Vite LOCAL** — `npm create vite`, porter le projet, découper en fichiers (`.jsx` séparés → convention 1 fichier = 1 composant enfin réelle), `git init` + 1er commit. Réactive `Ctrl+P` + rituel deux machines.

## Session 46 — Travail solo : doc React "Apprendre" + tuto Tic-Tac-Toe

**Durée** : 2 sessions solo (~2h + ~1h30 = 3h30), sans Claude. Puis questions débriefées avec Claude.
**Thème** : initiative d'autonomie — lecture de la section "Apprendre" de react.dev, puis reproduction du tuto officiel Tic-Tac-Toe. Débrief des zones d'ombre ensuite.

**Révision éclair (rest/spread — dette S43, enfin réglée)** : `const { remise, ...reste } = m` → **rest**, à gauche du `=`, isole `remise` et **ramasse** le reste dans un nouvel objet (tri, pas clone). `[...montures, nouvelle]` → **spread**, à droite, copie + ajoute. Vocabulaire fixé cette fois. ✅ **Dette rest/spread close.**

### Ce qui a été travaillé en solo

- Lecture doc officielle react.dev (section Apprendre).
- Tuto Tic-Tac-Toe reproduit (composants `Square` / `Board` / `Game` + `calculateWinner`), jusqu'à la version finale avec historique cliquable.

### Zones d'ombre débriefées avec Claude (et éclaircies)

**1. `const [a, b, c] = lines[i]`** : déstructuration de tableau **par position**. `lines` = tableau de tableaux (les 8 lignes gagnantes) ; `lines[i]` = un triplet `[0,1,2]` ; la ligne extrait ses 3 valeurs dans `a`/`b`/`c`. Version longue = `lines[i][0]`, `[1]`, `[2]`. Bon outil car la **position porte le sens**. → 🟢 compris.

**2. `slice()` vs `[...tab]` pour copier** : **font la même chose** (copie de surface). `slice()` = idiome historique du tuto ; `[...tab]` = plus moderne et cohérent avec le reste de mon code → **à préférer**. Pas un "meilleur techniquement", juste une habitude d'écriture. → 🟢 compris.

**3. Immutabilité à deux niveaux (LE point du tuto)** : on ne mute jamais le state, on copie + modifie + passe au setter (React compare les références). Deux niveaux imbriqués :

- plateau : `const nextSquares = squares.slice(); nextSquares[i] = "X"` (copie les 9 cases, modifie la copie)
- historique : `setHistory([...history, nextSquares])` (copie l'historique + ajoute le plateau) = mon pattern `[...tab, nouvel]` habituel, avec des tableaux comme éléments. → 🟢 compris.

**4. Lifting state up (le vrai cœur du Tic-Tac-Toe)** — 🟢 **bien capté** :

- Le state a "déménagé" de `Board` vers `Game` (parent commun) quand l'historique est devenu nécessaire. `Board` ne possède plus rien : il **reçoit** `squares` en **prop** (`squares={currentSquares}`), il ne le déclare pas.
- Flux : **données descendent** (parent → props → enfant) ; **événements remontent** (enfant appelle `onPlay(...)`, une prop-fonction → `handlePlay` s'exécute dans `Game`, seul détenteur de `setHistory`).
- Formule ancrée : **"l'enfant signale, le parent détient et décide."** Le state se modifie uniquement là où il est déclaré.
- **Lien fait seul avec le scope (Phase 1)** : `Board` ne peut pas appeler `setHistory` car elle est enfermée dans le scope de `Game` — l'intérieur ne voit pas l'intérieur d'un autre. Belle connexion transversale.

### Partiellement compris — à retravailler ENSEMBLE (version finale du tuto)

La version finale (historique cliquable) a été survolée mais **pas entièrement digérée** — trop de nouveautés d'un coup. À reprendre en mode guidé, à tête reposée :

- **`currentMove` comme curseur** : nouveau state (un index) ; `currentSquares = history[currentMove]` (plus "toujours le dernier", mais "celui pointé"). Permet le voyage dans le temps.
- **Donnée dérivée `xIsNext = currentMove % 2 === 0`** : `xIsNext` retiré du state exprès → recalculé depuis le n° de coup (rappel direct S45 "ne pas stocker ce qui se recalcule" ; évite la déssynchro de 2 states). Le **modulo `%`** (reste de division : pair/impair) est neuf → à consolider.
- **`slice` avec arguments** : `history.slice(0, currentMove + 1)` = garder le début jusqu'au coup courant, **jeter les coups "futurs"** quand on rejoue après un retour arrière (nouvelle branche). Différent du `slice()` de copie (sans argument).
- **2e argument de `.map()`** : `history.map((squares, move) => ...)` → `move` = **l'index**. Neuf. + cas légitime de `key={index}` (historique jamais réordonné). + bouton `onClick={() => jumpTo(move)}` = flèche inline qui transporte l'argument (pattern S44).

### Niveau estimé après session

- **Déstructuration tableau / immutabilité 2 niveaux / slice-copie** : 🟢 solides.
- **Lifting state up (props descendent, events remontent, state chez le parent commun)** : 🟢 **acquis** — c'est le grand enseignement du tuto, et il est passé. Connexion au scope faite seul.
- **Autonomie / lecture de doc** : gros point positif — a lu react.dev et reproduit un tuto complet seul, en revenant avec des questions ciblées et pertinentes. Exactement le réflexe visé.
- **Version finale (currentMove, modulo, slice à arguments, 2e arg de map)** : 🟡 **partiellement compris, à reprendre ensemble** — pas un échec, juste trop d'un coup en fin de session.

### Restes / dettes (inchangés + nouveaux)

- **JSON.stringify/parse** : toujours jamais pratiqué en exo (seul coin Tier 1). À glisser en contexte localStorage/API.
- **TS des props** : à brancher (useState solide depuis longtemps) — de plus en plus prioritaire.
- **Code mort / placement hooks** (repérés S45) : réflexes propreté à ancrer.
- **`useEffect` + vraie API (fetch)** : toujours en attente, séance dédiée ~2h à tête reposée.
- **Passage react.new → Vite local** : toujours en attente (découpage fichiers, `git init`, réactive Ctrl+P + rituel 2 machines).

### ➡️ Prochaine session

Au choix selon l'énergie (les deux à faire frais) :

1. **Reprendre la version finale du Tic-Tac-Toe ensemble** — `currentMove` + donnée dérivée + `slice` à arguments + 2e arg de `.map()`, en mode guidé. Court, consolide du déjà-vu.
2. **`useEffect` + fetch API** — le gros morceau anticipé, séance ~2h.
3. **Setup Vite local** — jalon outillage.

## Session 47 — Setup Vite local + Git (séance outillage, écourtée)

**Durée** : ~2h30 (dont une large part absorbée par un détour OneDrive non planifié)
**Thème** : passage react.new → projet Vite LOCAL, structure de fichiers, premier commit Git. Portage React entamé, non terminé.

**Révision éclair S47 (Grid — placement)** : parent `grid-template-columns: repeat(3, 1fr)` / Tailwind `grid grid-cols-3` ✅ ; enfant pleine largeur `grid-column: 1 / -1` / `col-span-full` — frontière parent (définit la grille) vs enfant (occupe des colonnes, mot-clé `span`) recalée. Grid remonté 3→5/10.

**Ce qui a été fait** :

- **Scaffolding Vite** : `npm create vite@latest` → `projet-vite-local`, template React + JavaScript + ESLint. Projet créé dans `Repo GitHub` (à côté de `mon-premier-projet`).
- **Dev server + HMR compris** : `npm run dev` lance un serveur local (`localhost:5173`) qui compile le JSX à la volée = équivalent React du `--watch` Tailwind (doit rester allumé). HMR = mise à jour instantanée au save sans recharger la page (testé, fonctionne).
- **Structure de fichiers décortiquée** : chaîne de démarrage `index.html` (`<div id="root">` + `<script main.jsx>`) → `main.jsx` (point d'entrée, `createRoot(...).render(<App/>)` — le "fichier caché" enfin vu) → `App.jsx` (composant principal). `StrictMode` repéré (double-exécution en dev — à retenir pour useEffect). `public/` (servi brut) vs `src/` (compilé). `.gitignore` déjà fourni par Vite.
- **Scaffolding compris comme concept** : `npm create vite` génère un projet React préconfiguré ; Tailwind serait un ajout séparé (v4 + plugin Vite) — reporté à une séance dédiée.
- **Git** : `git init` → `git add .` → premier commit "Setup projet Vite React local". Vérifié : `node_modules` bien ignoré (révision éclair S44 en action). Repo distant GitHub créé (`Frederic-Champion/projet-vite-local`, vide). **Push NON terminé** (à finir demain).

**Ce qui a accroché / bloqué** :

- **Détour OneDrive** : tentative de désinstallation en cours de séance, abandonnée (clé USB de backup HS → pas de filet → report). A consommé énergie et temps. **Leçon : les manips système lourdes = créneau dédié, jamais en marge d'une séance de code.** OneDrive laissé en l'état (« pas de synchronisation », ne gêne pas le dev).
- **Portage `GestionMontures` en page blanche** : blocage sur l'**assemblage** (pas les concepts isolés, tous maîtrisés). Erreurs de câblage : fonction `ajouter` écrite hors de `App` (scope), `.map()` d'affichage confondu avec la logique d'ajout, `onClick={setMontures(...)}` (appel immédiat au lieu de flèche). Fin de séance trop chargée → arrêt décidé. **Non terminé, à refaire frais.**

**Niveau estimé après session** :

- **Setup Vite (scaffolding, dev server, HMR, structure)** : 🟢 compris — le vrai objectif du jour, atteint.
- **Git init + commit local** : 🟢 fait proprement.
- **git remote + push** : 🔴 entamé, non terminé — à reprendre demain (2 commandes).
- **Portage React** : reporté.

**⚠️ Point de vigilance** : séance déséquilibrée par un hors-sujet système. Recentrer la prochaine sur UN objectif clair, frais.

**➡️ Prochaine session (demain, sur le FIXE)** :

1. **Rituel deux machines** : récupérer le repo. Comme le push n'est pas fini, soit on termine d'abord le push depuis le portable, soit on gère au démarrage. (Ordre à voir ensemble en ouverture.)
2. **Finir le `git push`** (2 commandes : `git remote add origin` + `git push -u origin master`).
3. **Reprendre `GestionMontures` à froid**, en **mode guidé** (squelette + trous, PAS page blanche — l'assemblage n'est pas encore instinctif). Puis découpage en fichiers (`GestionMontures.jsx` séparé). Réactiver `Ctrl+P`.

## Session 48 — Résolution conflit Git + finalisation setup Vite (à froid)

**Durée** : ~1h30
**Thème** : reprise à tête reposée de la séance déraillée d'hier — résolution du conflit Git en suspens, puis finalisation propre du jalon Vite (découpage en fichiers, import/export multi-fichiers, organisation des exercices).

**Révision éclair** : aucune (session de reprise/déblocage, enchaînée directement sur la résolution du conflit).

**Ce qui a été fait** :

_Git — résolution de conflit (LA dette « conflits » enfin soldée) :_

- **Compris le mécanisme** : divergence = deux branches (locale fixe + `origin/main` GitHub) parties du même point et ayant avancé en parallèle (1 commit local / 3 distants). `git pull` = `fetch` + `merge` ; le conflit survient quand la même zone d'un fichier est modifiée des deux côtés.
- **Résolution guidée dans `progression.md`** : `git pull` (re-déclenche le conflit volontairement) → outil visuel VS Code → **Accept Both Changes** sur les 2 zones (le fichier s'accumule, on garde tout : sessions 45, 46, 47) → réordonnancement chronologique manuel → vérif `Ctrl+F` sur `<<<<<<<` = 0 marqueur.
- **Conclusion de la fusion** : `git add progression.md` (marque comme résolu) → `git commit` (commit de merge qui réunit les deux historiques) → `git push`. Fixe ↔ GitHub synchronisés.
- **`git merge --abort`** utilisé comme filet de sécurité (revient à l'état stable, rien perdu) — bien compris comme « bouton annuler ».

_Rituel deux machines (en pratique réelle) :_

- **`git clone`** de `projet-vite-local` sur le fixe (projet créé sur le portable hier, absent du fixe). Distinction `pull` (mettre à jour un repo existant) vs `clone` (télécharger un repo entier absent) posée.
- **`npm install`** post-clone : reconstruit `node_modules` depuis `package.json` (le régénérable qu'on ne transporte pas — révision éclair S44 en action).

_React — finalisation du portage + découpage (le jalon outillage) :_

- **`GestionMontures` reconstruit** (en autonomie, après un départ page blanche hier qui avait échoué) : cette fois l'assemblage est passé. Fonctions bien DANS `App` (scope corrigé vs hier), `ajouter`/`supprimer`/controlled inputs/`filter`/`randomUUID` tous justes. Distinction `onClick={ajouter}` (référence) vs `onClick={() => supprimer(m.id)}` (flèche inline) : acquise.
- **Point pro ancré — composant vs variable** : `{liste}` dans le JSX n'affiche rien (on injecte la fonction, pas son résultat) ; un composant s'appelle en balise `<Liste />`. + anti-pattern « composant défini dans un composant » signalé → version clean = `.map()` inline dans le `<ul>`, adoptée.
- **Découpage multi-fichiers** : composant sorti dans `src/components-exercices/GestionMontures.jsx` (+ `export default`), importé dans `App.jsx` (`import ... from "./components-exercices/GestionMontures"` — chemin écrit seul). **`import`/`export` entre SES fichiers, enfin en contexte réel** (react.new ne le permettait pas).
- **`App.jsx` = composant racine / chef d'orchestre** : réduit à `return <GestionMontures />`, système commenter/décommenter préparé pour les futurs exos. Compris qu'App **assemble** les composants (ne les contient pas) — reproduit le système « plusieurs exercices » de `mon-premier-projet`, version React propre.

_CSS en React (déduit en partie seul) :_

- `index.css` (importé dans `main.jsx`) = styles **globaux** (toute l'app) ; `App.css` = convention « styles du composant » MAIS **plus importé** depuis le nettoyage → code mort à vider.
- **Point clé compris** : le CSS React est **global par défaut** (le fichier d'import ne scope PAS au composant — un `h1 {}` s'applique partout). Solutions pro mentionnées (CSS Modules, Tailwind) pour plus tard. Frédéric a repéré seul que `GestionMontures` hérite du style de `index.css`.

**Niveau estimé après session** :

- **Résolution de conflit Git (merge, Accept Both, commit de merge, push)** : 🟡→🟢 **dette soldée**, fait en autonomie guidée. À recroiser 1× pour instinctivité.
- **`git clone` + rituel deux machines** : 🟢 fait en pratique réelle.
- **`GestionMontures` (assemblage complet)** : 🟢 reconstruit seul, l'assemblage est passé (mur d'hier franchi).
- **Découpage fichiers + `import`/`export` multi-fichiers** : 🟢 acquis en contexte réel.
- **App = composant racine / assembleur** : 🟢 compris.
- **CSS global par défaut en React** : 🟢 compris (partiellement déduit seul).
- Recalibrage vers le haut : Frédéric a mené presque tout en autonomie ce matin, y compris la sortie d'un état Git emmêlé — nette montée en confiance vs la veille.

**⚠️ Leçon transversale (hier + aujourd'hui)** : les manips système lourdes (OneDrive) ne se font JAMAIS en marge d'une séance de code. Séance dédiée, avec backup vérifié. Confirmé douloureusement hier.

**Restes / dettes** :

- **Nettoyer `App.css`** (code mort de la démo Vite) — micro-tâche cosmétique.
- **Réactiver `Ctrl+P`** (saut de fichier) — pertinent maintenant qu'il y a plusieurs fichiers, à ancrer.
- **JSON.stringify/parse** : toujours jamais pratiqué en exo.
- **TS des props** : à brancher (useState solide depuis longtemps) — prioritaire.
- **Tailwind avec React** (v4 + plugin Vite) : à installer, séance dédiée bientôt.
- **Tic-Tac-Toe version finale** (currentMove, modulo, slice à arguments, 2e arg de map) : à reprendre en mode guidé.

**➡️ Prochaine session (nouvelle conversation)** — au choix selon l'énergie, tous à faire frais :

1. **`useEffect` + vraie API (fetch)** — le gros morceau anticipé, séance dédiée ~2h à tête reposée. Candidat n°1.
2. **Installer Tailwind dans le projet Vite** (v4, `@tailwindcss/vite`) — jalon outillage, permettrait de styliser `GestionMontures`.
3. **Tic-Tac-Toe version finale** en mode guidé — plus léger, consolide du déjà-vu.

## Session 49 — useEffect + fetch API (première rencontre)

**Durée** : ~2h (matin, frais) — session écourtée volontairement (pause repas), reprise ~1h prévue plus tard.
**Thème** : premier gros morceau data — `useEffect`, cycle de vie d'un fetch pro en React, gestion d'erreur, lecture de console.

**Révision éclair S49 (map/find/some)** : `map` → tableau neuf de même longueur (jamais l'original) ; `find` → 1er élément qui matche **ou `undefined`** (d'où le `?.` derrière) ; `some` → **booléen** (« au moins un ? »). Les trois justes, **`some` — l'ex-point fragile S37 — ressorti nickel**. ✅ Compléments donnés : « tableau neuf » pour map, filet `undefined` pour find.

**Ce qui a été fait** :

_useEffect — le pourquoi avant la syntaxe :_

- **Effet de bord** posé comme catégorie : tout ce qui sort du rendu pur pour parler au monde extérieur (fetch, localStorage, setTimeout, listeners). Le fetch = _un cas_, pas la catégorie (bonne question de Fred : « useEffect sert à autre chose que le fetch ? » → oui).
- **La boucle infinie du fetch naïf** disséquée : fetch dans le corps → `setX(data)` → re-render → ré-exécution du corps → re-fetch → 💥. Le `set` ne rappelle pas le fetch _directement_ : il déclenche le re-render, qui relance tout. Point clé bien capté.
- **Tableau de dépendances** = le QUAND. 3 formes : rien (chaque rendu) / `[]` (une fois au montage) / `[x]` (au montage + quand x change). `[]` casse la boucle. Analogie **listener** validée (le tableau = ce que l'effet « écoute »).
- **Pattern async** : `async function charger()` déclarée DANS le `useEffect` puis appelée (pas `useEffect(async …)`).

_fetch pro — gestion d'erreur (briques neuves, enseignées avant l'exo après que Fred m'a arrêté à juste titre) :_

- **`res.ok`** : propriété booléenne de la réponse (`true` sur 200–299). `fetch` ne considère PAS un 404/500 comme une erreur → à toi de le détecter. `.ok` n'existe que sur une réponse fetch.
- **`throw new Error("msg")`** : lever une erreur volontairement → interrompt le `try`, saute au `catch`. Unifie 404 (throw) et panne réseau (native) dans un seul `catch`. Le fetch est déjà fini au moment du throw (ne « stoppe » pas le fetch, stoppe la suite du try).
- **`finally`** : s'exécute toujours (succès OU échec) → nettoyage commun (`setChargement(false)`), DRY.
- **`e.message`** : `e` est un objet erreur (`message`, `name`, `stack`). On range `e.message` (le texte affichable), pas `e` (React n'affiche pas un objet). Nuance donnée : objet erreur un peu spécial (console = stack trace, `message`/`name` non énumérables).
- **Rendu conditionnel** (early return) : `if (chargement) return …` / `if (erreur) return …` / sinon la liste. Premier `return` atteint gagne.

_Exercice guidé (ListePays, API pays) :_

- 1ère passe (3 trous : `setPays(data)`, `[]`, `key={p.name.common}`) : **3/3 du premier coup**, y compris le champ imbriqué choisi seul.
- 2e passe (try/catch/finally, 3 trous) : `if (!res.ok) throw` et `finally` justes seul ; `setErreur(e)` corrigé en `setErreur(e.message)`.

_Débogage en conditions réelles (le vrai apprentissage du jour) :_

- **API `restcountries.com/v3.1` morte/instable** (migration vers modèle authentifié). **Ironie** : c'est l'API que Fred avait DÉJÀ abandonnée en World Explorer (S17→30). Leçon pro : une API tierce peut mourir/changer, on ne la contrôle pas.
- **Lecture de console fine** : « Failed to fetch » (erreur native de fetch, requête non aboutie → `catch`) ≠ le message du `throw` (ne se déclenche que si le serveur RÉPOND mal). L'écran affichait « Failed to fetch », pas la soupe → **preuve en direct des 2 chemins d'échec distincts**.
- **`StrictMode` double-fetch VU EN VRAI** : erreurs CORS ×2 dans la console = `useEffect` exécuté 2× au montage en dev. Phénomène annoncé, observé.
- **Erreur de compilation Vite** repérée (`[vite] Failed to reload … 500`) : tant que le nouveau code ne compile pas, le navigateur garde l'ANCIEN (d'où restcountries encore visible malgré le changement d'URL). Résolu par Fred **seul** : `Ctrl+C` + `npm run dev`.
- **Fix data** : passage à `mledoze/countries` (JSON statique GitHub, `raw.githubusercontent.com`) — pas de CORS/auth, structure `name.common` identique → code inchangé sauf l'URL.

**Niveau estimé après session** :

- **`useEffect` (pourquoi, `[]`, pattern async)** : 🟡 compris solidement, pas encore instinctif (gros concept, vu 1×).
- **fetch pro (`res.ok` / `throw` / `finally` / `e.message` / rendu conditionnel)** : 🟡 neuf, à recroiser (jamais vu proprement avant — enseigné ce jour après arrêt légitime de Fred).
- **Lecture de console (réseau vs compilation, StrictMode ×2)** : 🟢 gros progrès, distinctions comprises en situation réelle.
- **Débogage autonome** : a redémarré Vite seul, n'a pas paniqué. Recalibrage vers le haut (comme d'hab, se sous-note).

**⚠️ Rappel dosage (respecté cette fois après signalement)** : Fred m'a arrêté à juste titre quand j'ai utilisé `res.ok`/`throw`/`finally` sans les avoir enseignés. Briques posées AVANT l'exo → bon déroulé ensuite. Le réflexe « tu me mets un truc jamais vu » est un atout, pas un frein.

**Restes / dettes** :

- **Version `.then`** du fetch : demandée explicitement par Fred (« que je sache bien l'utiliser, je vais la recroiser ») → séance/point dédié à prévoir.
- **`console.log(e)`** : pas encore observé en vrai (l'objet erreur entier) → à voir à la reprise.
- **JSON.stringify/parse** : toujours jamais pratiqué en exo.
- **TS des props** : à brancher (useState solide depuis longtemps) — prioritaire.
- **Rest destructuring** : dette close en S46, RAS.
- **Tic-Tac-Toe version finale** (currentMove, modulo, slice à arguments, 2e arg de map) : toujours en attente.

**➡️ Reprise (~1h plus tard dans la journée)** : au choix —

1. **Consolider useEffect** : 2e petit exo fetch guidé à froid (recommandé pour 1h, ancre pendant que c'est chaud).
2. **Ajouter un filtre** `[search]` en dépendance → voir le re-fetch au changement (réinvestit le controlled input).

### Session 49 (complément après-midi) — Consolidation useEffect + fetch + branchement ESLint

**Durée** : ~1h30 après-midi (total journée S49 = ~3h30, en 2 blocs frais matin + après-midi).
**Thème** : consolider `useEffect` + fetch par exercices (guidé → page blanche), diagnostiquer les points fragiles, brancher l'extension ESLint.
**Révision éclair** : aucune formelle (reprise même-jour, échauffement = récupération à froid des pièces de `useEffect` directement en ouverture).

**Échauffement (cold recall)** : `useEffect` = fonction + tableau de dépendances → **juste**. A questionné à raison ma formulation « 3 states » : ils ne font PAS partie de `useEffect` (function + deps, point), ce sont les 3 issues du fetch (data/chargement/erreur) montées par-dessus. Détail `async function … () { } charger()` re-précisé.

**Ce qui a été fait** :

_Exo 1 — `ListeClients` (guidé, 7 trous, données neuves jsonplaceholder /users) :_

- TROU 1/2/4/5 (`throw`/`setClients`/`finally`/`[]`) justes du premier coup.
- Corrections : `setErreur(error)` → variable inexistante, `error` n'est pas `e` ; puis `e` → **`e.message`** (rappel matin : on range le texte, pas l'objet). Repère ancré : `res.ok` = propriété d'une **réponse** / `e.message` = propriété d'une **erreur**.
- Early returns : première fois qu'il les écrit lui-même (donnés pré-remplis le matin) → structure OK, mais message générique `<p>erreur !</p>` → recadré : réinjecter `{erreur}` (tout le pipeline throw→catch→setErreur sert à AFFICHER le vrai message).
- `key` : contraste pédagogique posé — ce matin pas d'`id` → `name.common` ; ici vrai `id` → **`key={c.id}`** (unique + stable par nature). Choisi juste.

_Exo 2 — `ListeArticles` (PAGE BLANCHE, de mémoire, sans filet) :_

- **Restitué seul** : 3 states + valeurs de départ, `try`/`if(!ok)`/`throw`/`catch`/`finally`, **`setErreur(e.message)` du premier coup** (corrigé 3× le matin → juste seul l'aprem = ancrage réel), pattern `async function recuperation()`, `[]`, `export default`, `setChargement(false)`.
- **SEULE vraie zone conceptuelle** : placement des early returns → mis DANS le `useEffect` (erreur logique). Recadré : les early returns vivent dans le CORPS du composant (points de sortie alternatifs qui retournent du JSX), entre le `useEffect` et le `return` final. Un `return` dans `useEffect` ≠ rendu (= future fonction de nettoyage, à voir). Ordre : `chargement` avant `erreur`.
- Étourderies (pas des trous) : `useStates` au lieu de `useEffect` dans l'import ; `await` oublié sur `reponse.json()` (présent ailleurs le jour même) ; `key={d.id}` sur données sans id → retour `d.name.common`.

_Point outillage — ESLint enfin branché (dette S40 soldée) :_

- Fred pensait ESLint actif → PROBLEMS vide malgré l'import cassé. Diagnostic : le **moteur** ESLint est là (Vite l'installe : `eslint` + `eslint.config.js` + script `lint`), mais l'**extension VS Code** (`dbaeumer.vscode-eslint`) n'était jamais installée → pas de lint en direct.
- Preuve empirique : `npm run lint` sort bien `'useStates' is defined but never used` (no-unused-vars) + `'useEffect' is not defined` (no-undef) → **le moteur marche**, il n'était pas branché en live.
- **Extension installée + testée** (rouge en live vérifié). Modèle mental posé : extension = pont qui réveille le moteur en continu / lit `eslint.config.js` (règles versionnées = équipe alignée) / ne remplace pas `npm run lint` (filet CI) ni la compréhension (attrape le fond : no-undef, unused, `==` vs `===` — PAS la logique : `await` oublié, early return mal placé = JS valide).
- Rappel S40 confirmé en situation : Prettier = forme (ce qui corrigeait en live) / ESLint = fond.

**Niveau estimé après session** :

- **`useEffect` + fetch (structure d'ensemble)** : 🟡→🟢 — squelette monté de mémoire page blanche, ne manque que le poli. Le concept lourd du matin a TENU l'après-midi.
- **Gestion d'erreur (`res.ok`/`throw`/`e.message`)** : 🟢 — restituée seule, vrai gain de la journée.
- **Placement des early returns (dans le corps, pas dans useEffect)** : 🟡 — LE point conceptuel révélé par la page blanche, corrigé, à recroiser 1× pour l'instinct.
- **Distinction moteur ESLint vs extension VS Code** : 🟢 comprise en situation réelle.
- Recalibrage vers le haut : page blanche sur un concept vu le jour même = solide, pas « pas mal ». Se sous-note comme d'habitude.

**Restes / dettes** :

- **`useEffect` SANS fetch** : demande explicite de Fred pour la suite — autres usages (listeners, setTimeout, sync localStorage, effet sur changement de state), difficulté croissante pour « repousser la compréhension ». Excellente initiative, à construire.
- **Version `.then`** du fetch : toujours en attente (demande S49 matin).
- **`console.log(e)`** : toujours pas observé en vrai (l'objet erreur entier).
- **Fonction de nettoyage du `useEffect`** (le `return` dans l'effet) : évoquée, à enseigner — tombera naturellement avec les listeners/setTimeout demandés.
- **JSON.stringify/parse** : toujours jamais pratiqué en exo.
- **TS des props** : à brancher (useState solide depuis longtemps) — prioritaire.
- **Tic-Tac-Toe version finale** (currentMove, modulo, slice à arguments, 2e arg de map) : toujours en attente.

**➡️ Prochaine session (demain, 2-3h selon motivation)** : **approfondissement `useEffect`** — exercices React + `useEffect`, dont `useEffect` **sans fetch** (autres usages, complexité croissante, demande de Fred). Bon terrain pour introduire la **fonction de nettoyage** (cleanup) en contexte listener/setTimeout.

## Session 50 — useEffect : la fonction de nettoyage (cleanup) + setInterval + updater fonctionnel

**Durée** : ~2h (matin, frais).
**Thème** : la moitié manquante de `useEffect` — la fonction de nettoyage. Révélée d'abord sur un listener (facile), puis poussée sur un `setInterval` (dur, a fait remonter le piège de closure + l'updater fonctionnel).

**Révision éclair S50 (valeur vs référence)** : `const copie = original; copie.prix = 200` → `original.prix` vaut **200** (la référence est copiée, pas le contenu → même tiroir partagé). Mécanisme **juste**. Lien React complété par moi : muter = même référence → React ne voit rien → pas de re-render ; le spread crée une nouvelle référence → re-render. (Ce lien ressert LITTÉRALEMENT dans le piège de closure du jour.)

**Ce qui a été fait** :

_Concept neuf — la fonction de nettoyage (cleanup) :_

- **Le pourquoi** : certains effets « laissent une trace active » (`setInterval` qui tique, `addEventListener` qui écoute) — ≠ effets one-shot (`document.title`). Un composant peut se démonter ou l'effet se relancer → la trace reste → accumulation (2 écouteurs, puis 3…) → bugs fantômes + fuite mémoire.
- **Le comment** : la fonction de l'effet peut **retourner une fonction** = le nettoyage. React l'exécute avant chaque relance ET au démontage. Symétrie « je démarre → je retourne la façon d'arrêter ».
- **StrictMode enfin expliqué proprement** (évoqué 3× avant) : composant-emballage dans `main.jsx`, en DEV seulement, monte→démonte→remonte exprès et double les effets pour **débusquer les nettoyages manquants**. C'est lui qui doublait le fetch en S49. Détecteur, pas bug.
- **`handleKey` clarifié** : pas un mot-clé, une **convention** — `handleXxx` = « la fonction qui gère l'événement Xxx » (handleClick, handleSubmit…). Nommée (pas fléchée inline) pour que `removeEventListener` puisse la cibler (la référence compte — écho révision éclair).

_Exo 1 — `DerniereTouche` (guidé, 1 trou = le nettoyage) :_

- `window.addEventListener("keydown", handleKey)` + `return () => window.removeEventListener("keydown", handleKey)`. **Nettoyage juste du premier coup.** Première fonction de nettoyage écrite. Vérifié en console : pas d'accumulation malgré StrictMode → preuve que le cleanup marche.

_Exo 2 — `Minuteur`/`Chronometre` (idée de Fred, mode « consignes en français, zéro syntaxe donnée » à sa demande) :_

- `setInterval`/`clearInterval` montrés d'abord **en JS pur** (à sa demande) : `const id = setInterval(...)` → `clearInterval(id)`, l'id = le « ticket » pour arrêter CE minuteur. Ponts posés avec `setTimeout` (S14) et avec la structure add/remove du matin.
- Grosse difficulté, 3 accrocs traversés : (1) `() => previous` passait la fonction sans l'appeler (réf vs appel, S44) ; (2) **piège de closure** — `setSeconde(seconde - 1)` grave `10` (variable capturée figée), bloqué à 9 → **updater fonctionnel** `setSeconde((actuelle) => actuelle - 1)` (React fournit la valeur fraîche) ; (3) nettoyage mal placé (`if ... return clearInterval` dans le corps ≠ `return () => clearInterval(id)`).
- Piège de closure « RIEN compris » au 1er passage → ré-expliqué SANS jargon (histoire du « 10 gravé dans le marbre » + les 2 `return` distincts JSX/nettoyage). **Correction demandée explicitement → donnée** (règle respectée). Compteur descend 1/s proprement ensuite.
- **Question spontanée de Fred** : « pourquoi une flèche DANS le setter ? » → clarifié : forme A `setX(valeur)` vs forme B `setX((prev) => ...)` = passer une **fonction** que React appelle avec la valeur à jour, **exactement comme** `.map((m) => ...)` / `.filter((m) => ...)` (quelqu'un d'autre appelle ta flèche). Belle connexion.
- **Arrêt à 0** (correction donnée) : le test `if (actuelle <= 1) { clearInterval(id); return 0; }` va DANS le callback du setInterval (là où la valeur bouge), pas dans le corps de l'effet (qui ne tourne qu'une fois). Son instinct (tester ===0 + clear) était juste, seul le placement était en cause — même leçon que le nettoyage.

**Niveau estimé après session** :

- **Fonction de nettoyage (cleanup) — cas listener** : 🟡→🟢 (DerniereTouche réussi seul du premier coup).
- **Fonction de nettoyage — cas setInterval + le combo complet** : 🟡 neuf, dur, correction donnée → à recroiser absolument.
- **`setInterval`/`clearInterval`** : 🟡 neuf (id à ranger, paire symétrique).
- **Updater fonctionnel `setX((prev) => ...)`** : 🟡 neuf, gros morceau, arraché — à re-pratiquer (c'est LE point à consolider).
- **Piège de closure dans un effet `[]`** : 🟡 compris après ré-explication imagée, fragile → à recroiser (relié à la révision éclair du jour).
- **StrictMode / `handleKey`** : 🟢 clarifiés.
- Recalibrage : a poussé un enchaînement très dense (cleanup + closure + updater) en une session — normal que la correction ait été demandée, ce n'est pas un recul.

**⚠️ Dosage** : `Minuteur` combinait TROIS nouveautés d'un coup (setInterval + updater fonctionnel + cleanup). Dense mais assumé (concept relié). Pour la reconsolidation : les redécouper (un exo cleanup pur, un exo updater fonctionnel pur) avant de recombiner.

**Restes / dettes** :

- **`Minuteur` défi n°2** : rebrancher `document.title` au bon endroit (2e `useEffect` avec dépendance `[seconde]`) — non fait, à reprendre.
- **Compte à rebours avec input** (idée de Fred) : la montée de difficulté suivante.
- **Approche alternative du chrono via dépendance `[seconde]`** : à montrer (compare avec la version `[]` + updater).
- **Updater fonctionnel + closure** : à reconsolider par exos dédiés séparés.
- Version `.then` du fetch · `console.log(e)` jamais observé · JSON.stringify/parse jamais pratiqué · **TS des props (prioritaire)** · Tic-Tac-Toe version finale.

**🗑️ Obsolète à signaler dans les instructions** : les mentions **« react.new / CodeSandbox »** (§5, §7, §8) sont caduques depuis le passage en **Vite local** (S47-48). L'environnement React actuel = projet Vite local `projet-vite-local`, multi-fichiers, Git.

**➡️ Prochaine session** : reconsolider le combo `useEffect` avancé — d'abord updater fonctionnel + cleanup en exos **séparés** (dédensifier), puis finir le `Minuteur` (document.title + arrêt à 0 en autonomie) et attaquer le **compte à rebours avec input**. Continuer la série `useEffect` en difficulté croissante (demande de Fred).

## Session 51 — Diagnostic React (page blanche) + point sur le doute / cap de la reconversion

**Durée** : ~matinée (portable). Session mixte : exercices diagnostic + longue discussion de fond (fatigue, doutes, cap).

**Ce qui a été fait (code) :**

- 2 exercices page blanche diagnostic (cas cleanup + updater) :
  - **`TempsExamen`** (setInterval montant) : tout juste **sauf** `duree` sans `()` (référence vs appel).
  - **`CompteurClics`** (listener window) : updater `(x)=>x+1` ✅ + structure cleanup ✅ posés seul ; bugs = dépendance `[clic]` au lieu de `[]`, fonction anonyme (non ciblable par remove), `const id = addEventListener` (addEventListener ne renvoie pas d'id, ≠ setInterval).
- **Diagnostic clair** : l'updater fonctionnel ET le principe du cleanup sont **acquis** (posés seul, 2×). Points fragiles RÉELS = (1) tableau de dépendances `[state]` vs `[]` (2× de suite), (2) mécanisme d'arrêt d'un listener (fonction nommée + même event, ≠ id du setInterval), (3) référence vs appel `fn` vs `fn()` (récurrent : S44, S47, S50, S51). → **c'est ça qu'on drille, pas l'updater/cleanup.**

**Ce qui a été dit (fond) :**

- Frédéric traverse un creux : fatigue accumulée (sessions matin/aprem/soir en continu), peur de ne pas être recrutable, peur d'être "incapable de coder seul", peur que j'oublie/néglige des notions JS indispensables, lassitude du métier d'opticien, entourage peu à l'écoute sur la reconversion.
- Recadrage porté sur preuves (son propre code du matin) : ce qui casse = du **React neuf** (cycle de vie, dépendances, API listeners), ce qui tient = le **JS** (updater = closures, révision éclair valeur/référence juste). Donc la peur "mon JS est insuffisant" ne colle pas aux faits. _Compris ≠ instinctif_ : il comprend, ce n'est pas encore réflexe (~10 séances React vs 35 Phase 1 — normal).
- Débuguer avec aide = le métier, pas un échec (seniors incl.). Son atout marché = 14 ans d'expertise optique (différenciateur réel).
- Fatigue : signalé que le doute est amplifié par l'épuisement ; récupérer ponctuellement ≠ ralentir la progression. Rythme choisi assumé (contrainte salaire, pas de démission possible) — respecté.
- Orienté (doucement) vers du soutien humain hors-Claude : proches, communautés de reconvertis (le poids émotionnel ne se porte pas seul).

**➡️ Décidé pour la suite : AUDIT JS CROISÉ** (à faire à tête reposée, cerveau frais).

- Principe : croiser le parcours JS de Frédéric avec une **référence externe neutre** (sommaire javascript.info / roadmap.sh JS), coché point par point (vu / pas vu / flou) → cartographie honnête, indépendante de ma mémoire. Même logique que le quiz Phase 1 (mesurer > ressentir).
- But : éteindre la peur "il me manque des fondamentaux JS sans le savoir" en rendant la liste complète visible et contrôlable par Frédéric.
- Déjà repérés à trier dans l'audit : **`.then`** (déjà demandé, = équivalent async/await, courte séance), **`this`** (peu utilisé en React fonctionnel, à savoir lire, non urgent), + dettes déjà loggées (JSON.stringify/parse jamais drillé, POO/classes à lire, TS des props).
- Rappel : JS et React se tissent ensemble — pas besoin de "finir React" avant de combler du JS, aucune porte ne se ferme, zéro pression calendaire.

**Restes / dettes (inchangés)** : finir `Minuteur` (document.title + arrêt à 0) · compte à rebours avec input · reconsolider dépendances `[]` + arrêt listener · version `.then` · JSON.stringify/parse · TS des props (prioritaire) · Tic-Tac-Toe version finale.

**⚠️ Note importante pour la prochaine session** : Frédéric est fatigué et traverse un doute de fond. Ouvrir en douceur, vérifier l'énergie AVANT de charger. L'audit JS est un bon candidat "cerveau frais" et répond directement à son inquiétude — mais ne pas l'enchaîner sur une journée déjà lourde.

## Session 52 — Clôture trio fragile S51 + fin du Minuteur (2 useEffect)

**Durée** : ~1h (session courte, énergie correcte malgré fatigue accumulée signalée).
**Thème** : réduction de la pile de dettes — solder le trio fragile diagnostiqué en S51 par exercices de lecture/reconstruction, puis finir le `Minuteur` (arrêt à 0 + `document.title`). Objectif assumé : dettes réduites avant de repartir sur du neuf.

**Révision éclair S52 (CSS — `margin: auto`)** : deux conditions du centrage block (`display: block` + largeur définie) restituées justes. Correction sur le flex : `margin: auto` n'est PAS inopérant en flex — il devient plus puissant (absorbe l'espace libre sur les DEUX axes ; `margin: auto` centre H+V, `margin-left: auto` pousse à droite). Point 🟡 `margin auto` entretenu, confusion « ne marche plus en flex » recadrée.

**Ce qui a été fait** :

_Trio fragile S51 — les 3 points soldés :_

- **Point 1 — `fn` vs `fn()` (référence vs appel)** : exercice de LECTURE/diagnostic (4 lignes A→D). A/B diagnostiqués seul et juste. Piège de C repéré par moi (incohérence `addEventListener("resize", handleResize())` avec `()` vs `remove` sans `()`) → corrigé sans hésiter après signalement, reconstruit seul (add + remove même référence nommée). Repère ancré : **« la parenthèse décide du moment »** — pas de `()` = appelle plus tard / avec `()` = exécute maintenant / flèche = transporter un argument sans exécuter.
- **Point 2 — dépendances `[]` vs `[state]`** : a trouvé `[]` pour le setInterval AVEC le bon raisonnement (sinon empilement d'intervalles à chaque changement de `seconde`). Grosse question spontanée sur l'updater fonctionnel (« comment React sait que `s` = 10 ? ») → clarifié en profondeur : **la vraie valeur du state vit DANS React, pas dans la variable `seconde` (photo périmée). Forme A `setX(valeur)` = je calcule avec ma photo (risque closure) ; forme B `setX((s) => ...)` = je tends une recette, React la remplit avec SA valeur à jour.** Connexion refaite avec `.map((m) => ...)` (quelqu'un d'autre appelle ta flèche et la remplit).
- **Point 3 — arrêt d'un listener** : soldé en situation (reconstruction de C + réinvesti dans le Minuteur).

_Fin du `Minuteur` (dette d'exercice S50) :_

- **Arrêt à 0** : placement travaillé. Instinct initial « dans le corps du useEffect » → recadré : le corps en `[]` ne tourne qu'une fois (teste `10 <= 0` = faux, mort). Le test d'arrêt va **dans le callback de l'updater**, là où vit la valeur fraîche. Même leçon de placement que le nettoyage (« le code va là où vit la donnée »). Reconstruit seul en 3 essais → version finale propre (`if (x > 1) return x - 1; else { clearInterval(id); return 0; }`).
- **Distinction des DEUX arrêts (point clé enfin explicité)** : `clearInterval(id)` dans le `if` = **arrêt métier** (« j'ai fini », ma logique) ; `return () => clearInterval(id)` = **arrêt de sécurité au démontage** (« je m'en vais », React l'appelle). Les deux coexistent TOUJOURS — le nettoyage couvre le cas où le composant disparaît AVANT d'atteindre 0 (l'arrêt métier n'a pas eu lieu). Image : ceinture de sécurité vs frein.
- **2e `useEffect` pour `document.title`** (son PREMIER useEffect avec dépendance `[state]`) : a compris seul pourquoi deux effets séparés (rythmes/dépendances différents : `[]` pour l'intervalle « une fois » vs `[seconde]` pour le titre « à chaque changement ») + règle « un effet = une responsabilité ». Question fine traitée : le titre se met à jour au rythme du tic mais dépend du **changement de state**, pas de l'intervalle (le `[seconde]` est le seul fil de synchro ; l'intervalle n'est que la cause indirecte).
- **Critère du nettoyage affiné** : pas « ça se répète ou pas » (le titre se répète aussi) mais **« est-ce que ça laisse une TRACE ACTIVE qui s'accumule ? »**. setInterval/listener = trace active → nettoyage ; `document.title =` = écrase une valeur, rien d'allumé derrière → pas de nettoyage. Répondu juste seul.

_Définition posée proprement_ : **effet de bord = action qui modifie/lit quelque chose HORS du rendu React** (onglet, serveur, disque, minuteries, écouteurs). Le composant pur = données (props+state) → JSX ; l'effet « de bord » = le à-côté qui touche l'extérieur → rangé dans `useEffect`.

**Niveau estimé après session** :

- **`fn` vs `fn()`** : 🟢 — le point récurrent (S44→S51) enfin ancré via lecture/diagnostic (« la parenthèse décide du moment »).
- **Dépendances `[]` vs `[state]`** : 🟢 — vu sous les DEUX angles (intervalle en `[]` + titre en `[seconde]`). Le pourquoi de l'updater fonctionnel compris en profondeur (plus « chapeau magique »).
- **Updater fonctionnel `setX((prev) => ...)`** : 🟡→🟢 — le mécanisme « React remplit l'argument » est passé, connexion `.map` faite.
- **Fonction de nettoyage (cleanup)** : 🟡→🟢 — critère « trace active » clair, distinction arrêt métier / arrêt de sécurité explicitée. Le point flou de S50 est levé.
- **Minuteur complet (2 useEffect)** : 🟢 — dette d'exercice soldée, exemple canonique réutilisable.
- **Arrêt à 0 dans le callback de l'updater** : 🟢 (reconstruit seul).
- Recalibrage vers le haut : « je m'y suis repris à 3 fois » sur un combo arrêt métier + placement + nettoyage (3 points fragiles/neufs) = ancrage normal, PAS une galère. Se sous-note comme d'habitude.

**Restes / dettes (mises à jour)** :

- **Compte à rebours avec input** : candidat n°1 pour demain — réinvestit TOUT ce qui a été soldé aujourd'hui en autonomie sur un cas neuf.
- **`useEffect` sans fetch** (demande S49) : partiellement entamé (`document.title` = premier cas), à continuer en difficulté croissante.
- **Audit JS croisé** (décidé S51) : à garder pour un jour « cerveau frais / plus posé ».
- Version `.then` du fetch · `console.log(e)` jamais observé · JSON.stringify/parse jamais pratiqué · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session (demain, dans CETTE conversation)** : **finir les dettes React** — priorité au **compte à rebours avec input** (montée de difficulté, en autonomie, consolide à chaud tout le combo useEffect+setInterval+updater+cleanup). Ouvrir en douceur, vérifier l'énergie avant de charger (fatigue de fond signalée).

## Session 53 — Dettes React : compte à rebours avec input + persistance localStorage/JSON

**Durée** : ~2h30 (matin/journée, énergie « opérationnel » signalée en ouverture).
**Thème** : réduction de la pile de dettes (objectif assumé « statut à jour »). Deux gros exercices useEffect : compte à rebours piloté par un input, puis persistance localStorage — qui solde au passage la vieille dette JSON.stringify/parse.

**Révision éclair S53 (React — la prop `key`)** : intuition juste (id stable pour reconnaître un élément quand la liste bouge, pas l'index). Complété : la key est l'**étiquette d'identité** qui permet à React de **comparer** ancienne/nouvelle liste et ne mettre à jour que le nécessaire ; l'index décrit une **position**, pas une identité → casse quand on supprime au milieu (React associe mal, l'état interne reste collé à la mauvaise ligne). Exception index tolérée : liste jamais réordonnée/filtrée. 🟢. _(Note : rééquilibrer les prochaines révisions éclair vers la Phase 1 — CSS, JS pur, fetch, closures — à la demande de Frédéric.)_

**Ce qui a été fait** :

_Exo 1 — Compte à rebours avec input (`Minuteur2`) :_

- **Architecture posée seul** : 3 states — `valeur` (input texte), `chrono` (nombre, décompte), `on` (booléen de contrôle). La séparation input / décompte trouvée sans aide.
- **Bug n°1 (nettoyage mal placé)** : `clearInterval(id)` écrit directement sous le `setInterval` (exécuté immédiatement → intervalle tué à la naissance) → corrigé en `return () => clearInterval(id)`.
- **Bug n°2 (démarrage non maîtrisé)** : `useEffect` en `[]` → l'intervalle tournait depuis le montage sur `chrono` vide (`"" - 1 = -1`…), le clic ne faisait que réinjecter une valeur. **Erreur de ma part** : j'ai affirmé « ça ne démarre pas » sans vérifier — ça marchait, mais **par coïncidence** (architecture fragile). Reconnu et corrigé.
- **Deux corrections pro** trouvées/comprises : (1) `Number(valeur)` — `e.target.value` renvoie TOUJOURS du texte, conversion explicite obligatoire ; (2) state booléen `on` + `useEffect` en `[on]` + garde-fou `if (!on) return` → le décompte démarre **au clic** (volontaire), plus au montage.
- **Garde-fou sur la saisie** (idée de Frédéric, meilleure que mon `setOn(true)` nu) : `const duree = Number(valeur); if (duree > 0) { setChrono(duree); setOn(true); }` — validation avant lancement.
- **🆕 PIÈGE MAJEUR ANCRÉ — le state n'est pas à jour dans la même fonction** : Frédéric pensait qu'après `setChrono(...)`, la ligne suivante verrait le nouveau `chrono`. Clarifié en profondeur : `setX(...)` ne modifie PAS la variable immédiatement, il **programme un re-render** ; la variable de state est une **photo figée du rendu courant** (`const`), ne change qu'au **rendu suivant**. Donc dans une fonction, on travaille avec une **variable locale** (`duree`), jamais avec le state qu'on vient de « changer ». = même famille que le piège de closure S50, autre visage. **Point clé React, à recroiser.**
- Reconstruction complète de mémoire réussie (arrêt à 0 qui coupe l'intervalle + remet `on` à false + `return 0`). Re-clic après fin → repart (trajet `duree>0 → setOn(true) → [on] → useEffect` vérifié seul).

_Exo 2 — Persistance localStorage + JSON (`Catalogue`) :_

- **Base React** (input contrôlé + ajout immuable spread + `crypto.randomUUID()` + `.map()`/key) reconstruite de mémoire, propre. Bug : `key="m.id"` (guillemets → chaîne littérale identique partout) → corrigé `key={m.id}` (rappel JSX : `="texte"` vs `={expression}`).
- **`useEffect` de sauvegarde `[stock]`** + `JSON.stringify(stock)` : dépendance et stringify trouvés seul. Compris que `[stock]` se déclenche **au montage ET à chaque changement** (sauvegarde `"[]"` au départ).
- **Pourquoi stringify obligatoire** : `localStorage` ne stocke que du texte, et sans stringify il convertit un tableau d'objets **mal et en silence** → `"[object Object],[object Object]"` (données détruites). Pas un refus, une corruption silencieuse (rappel S37).
- **`useEffect` de chargement `[]`** : d'abord inversion `JSON.parse("montures")` (parse sur la CLÉ) → recadré : ordre `getItem(clé)` d'abord → puis `JSON.parse` sur le **texte récupéré**. Symétrie stringify (aller : objet→texte) / parse (retour : texte→objet) ancrée. Test anti-`null` `if (liste)` ajouté (getItem → null au 1er lancement → `JSON.parse(null)` → `setStock(null)` → crash `.map()`).
- **🆕 Lazy initializer `useState(() => ...)`** : ESLint a signalé « setState synchronously within an effect → cascading renders » (piège 2 anticipé : chargement `[]` → setStock → re-render → sauvegarde `[stock]`). Bénin mais Frédéric a voulu le pattern propre (posture « pas de travail bâclé »). Remplacé le 2e useEffect par `useState(() => { const liste = getItem(...); return liste ? JSON.parse(liste) : []; })` → chargement devient **valeur initiale** (calculée UNE fois au montage), plus d'effet, plus d'avertissement. Distinction `useState(valeur)` (recalculé chaque rendu) vs `useState(() => valeur)` (fonction exécutée qu'au montage) expliquée en détail + reliée au motif récurrent « passer une recette, React l'exécute au bon moment » (updater, map).

**Niveau estimé après session** :

- **Compte à rebours (3 states, garde-fou, `[on]`, arrêt à 0)** : 🟢 reconstruit de mémoire, montage inédit assemblé seul.
- **State pas à jour dans la même fonction** : 🟡 neuf, compris en profondeur après objection légitime — à recroiser (point React fondamental).
- **localStorage + JSON persistance** : 🟢 pattern complet (sauvegarde `[stock]` + chargement lazy init + symétrie stringify/parse).
- **JSON.stringify/parse** : 🟡→🟢 **DETTE SOLDÉE** — enfin drillée en contexte réel (traînait depuis S37).
- **Lazy initializer `useState(() => ...)`** : 🟡 neuf, compris (bonus), à recroiser.
- **`useEffect` + dépendance `[state]`** : 🟢 consolidé (vu `[stock]`, `[on]`, `[seconde]` sur 2 jours).
- Recalibrage vers le haut : tout reconstruit de mémoire, accrocs = étourderies de syntaxe (key en guillemets, inversion parse/clé), jamais d'incompréhension. Se sous-note (« pas sûr de moi » sur du code juste). « Compris ≠ instinctif » reformulé : l'écart avec la Phase 1 = nombre de répétitions (~12 séances React vs 35 P1), pas le niveau de compréhension.

**Restes / dettes (mises à jour)** :

- **`useEffect` + refetch sur `[search]`** (données filtrées) : candidat n°1 prochaine session — j'y glisserai la **version `.then`** à côté de l'async/await (amorce dette `.then`).
- **`setTimeout` + cleanup** : variante rapide restante.
- **Audit JS croisé** (décidé S51) : cerveau frais.
- **🆕 Audit « exercice type » (todo list, etc.)** : ajouté aux décisions de fond à la demande de Frédéric — principe à expliquer le moment venu.
- Version `.then` · `console.log(e)` jamais observé · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session (demain, probablement)** : **finir React** — `useEffect` + refetch `[search]` (+ bonus version `.then`), puis éventuellement `setTimeout`. Ensuite, cap probable sur les **dettes anciennes**. Ouvrir en vérifiant l'énergie.

## Session 54 — Refetch [search] (client vs serveur) + lecture de `.then` (dette S49 close) + page blanche + débounce

**Durée** : ~2h (énergie bonne), + prolongation sur initiative de Fred (page blanche + débounce).
**Thème** : `useEffect` + refetch sur `[search]`, filtrage client vs serveur, lecture de `.then` (dette S49), puis reconstruction page blanche du socle fetch et auto-résolution du débounce.

**Révision éclair S54 (JS pur — `reduce` accumulateur objet)** : SORTIE ROUILLÉE. Tentative cassée (params inversés `(v, acc)`, valeur initiale `{}` oubliée, `return acc = v+1`). Ré-ancré via forme longue (`for` + `compteur[m] = (compteur[m] || 0) + 1`) puis replié dans `reduce(cb, {})`. Non retouché depuis la révision Phase 1 → 🔴 **poche à ré-entretenir**, à recroiser en révision éclair. Illustre pile la peur de fond de Fred (« oublier ce qu'on ne réactive pas ») → réponse = répétition espacée.

**Ce qui a été fait** :

_Refetch sur `[search]` — les deux mondes :_

- **Concept clé** : filtrage CLIENT (fetch une fois `[]`, `data` = TOUT, `.filter` en mémoire — cf S45) vs filtrage SERVEUR (fetch à chaque `[search]`, `data` = SEULEMENT les résultats du terme, serveur trie). Le refetch n'existe QUE côté serveur, quand `data` est volontairement partiel. Critère : petit jeu → client / données énormes (BDD) → serveur. Lien Phase 2 : future app optique + PostgreSQL = monde serveur.
- Question spontanée de Fred (« les données ne sont pas toutes dans data ? ») = pile la bonne intuition → porte d'entrée du concept.
- Exo 1 (refetch nu, 3 trous) : `[search]` + controlled input ✅. Trou URL : `?` posé après le `/`, oubli de la ressource `users` → recadré (ressource PUIS `?`).

_Gestion d'erreur (reconstruction) :_

- Exo 2 (7 trous) : 6/7 justes. Seul manqué = `setErreur(e)` → **`e.message`** (poche connue). MAIS : Fred a signalé avoir cherché longtemps le trou → calibré FRAGILE, pas acquis (voir point de fond).

_`.then` — LECTURE (dette S49 close) :_

- Pourquoi : fetch rend une Promise. `await` (attend sur place, haut→bas) vs `.then` (chaîne de maillons), même logique. 2 attentes = 2 `.then`, chaque argument rempli par le maillon précédent (motif `.map`/updater : « qqn appelle ta flèche et la remplit »). `.catch` unique en fin = remplace `try/catch`.
- **Positionnement** : async/await = standard, ce que Fred ÉCRIT ; `.then` = ce qu'il doit savoir LIRE (code ancien/docs/collègues). Objectif du jour = LIRE, pas adopter. Exception future : `Promise.all`.
- Exo de lecture (3 Q) réussi : origine de l'argument ✅, coupure réseau → `.catch` ✅, `( )` vs `{ }` ✅ (relié seul à async/await).

_Page blanche `RechercheVilles` (sur initiative de Fred, prolongation) :_

- **Socle useEffect + fetch + gestion d'erreur reconstruit FROM SCRATCH, entièrement juste.** 4 états + valeurs de départ, URL correcte (ressource avant `?` — correction du matin tenue), try/catch/finally, `!r.ok`/throw, **`setErreur(e.message)` du premier coup** (raté le matin en trou, réussi l'aprem page blanche = vrai gain), early returns dans le CORPS (pas dans le useEffect, correction S49). Vétilles cosmétiques : import `use` inutilisé (unused ESLint), `key={m.nom}` → préférer `m.id`, séparateur d'affichage.
- **Bonus non demandé** : a écrit une version `.then` de son propre chef (au-delà de la consigne « lecture seule ») — chaîne `.then((r)=>r.json()).then((d)=>setData(d))` correcte ; seule erreur `.catch(setErreur(e.message))` → **`.catch((e) => setErreur(e.message))`** = piège `fn` vs `fn()` (« la parenthèse décide du moment », S52/S47), appelé au lieu de passé. Même correction sur `.finally`.

_Débounce (auto-résolu, page blanche) :_

- Après simple mention du mot « débounce » + indice « même useEffect, réinvestit le cleanup », Fred a **écrit le pattern complet SEUL, juste du premier coup** : `const id = setTimeout(() => { ...fetch... }, 300)` + `return () => clearTimeout(id)`, `[search]`. Transfert du raisonnement setInterval→setTimeout (S50) opéré seul. Mécanisme compris (cleanup annule le timer précédent avant relance → 1 seul fetch quand la frappe s'arrête, plus la rafale). **Excellent — auto-résolution d'un concept pro découvert dans la minute.**

**Point de fond (échange important)** :

- Fred a **recadré à juste titre** ma sur-évaluation : « reconstruire un trou en galérant ≠ acquis, ≠ from scratch ». VRAI. **Calibrage acté : quand Fred peine longtemps sur un trou = FRAGILE (compris pas instinctif), le signal est l'EFFORT pas le résultat.** Symétrie : lui se sous-note, moi je surévaluais → on se recale tous les deux.
- **Inquiétude de fond** : « 3 mois, énormément appris, peur d'oublier la moitié ». Légitime/lucide. Réponse : oubli normal de ce qu'on ne réactive pas → répétition espacée (révision éclair Phase 1 rééquilibrée, S53) + audit JS croisé (S51). Pas « travailler plus ». NB : la fin de séance (page blanche + débounce auto-résolu) contredit factuellement le doute « incapable de coder seul » — à lui rappeler au besoin.

**Niveau estimé après session** :

- **Socle useEffect + fetch + gestion d'erreur** : 🟡→🟢 — page blanche réussie. Prudence maintenue (« à voir dans le temps », dixit Fred) → confirmer par recroisement.
- **`setErreur(e.message)`** : 🟡→🟢 — raté en trou le matin, réussi page blanche l'aprem. À confirmer 1×.
- **Refetch `[search]` / client vs serveur** : 🟡 neuf, compris, à recroiser.
- **Débounce (setTimeout + cleanup sur `[search]`)** : 🟡→🟢 pour le pattern (auto-résolu, mécanisme compris). Neuf → recroiser 1× pour l'instinct.
- **Lire `.then`** : 🟢 lecture ; **écrire `.then`** : 🟡 tenté seul, chaîne juste, piège `fn()` sur `.catch`/`.finally` → à confirmer.
- **`fn` vs `fn()` (parenthèse = moment)** : recroisé (ressorti dans le `.catch`), 🟢 mais éternel classique à surveiller.
- **`reduce` objet** : 🔴 poche réactivée, à ré-entretenir.

**Restes / dettes (mises à jour)** :

- **Débounce** : ✅ introduit et auto-résolu ce jour (retiré des dettes). À recroiser 1× pour confirmer.
- **`Promise.all`** (fetchs parallèles) : seul cas où `.then` reste pertinent, noté.
- **Audit JS croisé** (S51) : prioritaire — répond à la peur « oublier la moitié ». Candidat séance cerveau frais.
- **`reduce` objet** + méthodes de tableau : à faire tourner en révision éclair (poches Phase 1).
- `console.log(e)` jamais observé · **TS des props (prioritaire)** · Tic-Tac-Toe version finale · `this` + POO/classes (lire, non urgent).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis le passage Vite local (S47-48).

**➡️ Prochaine session** : au choix — (1) **audit JS croisé** (séance cerveau frais, répond à la peur de fond, de plus en plus prioritaire) ; (2) **TS des props** (dette ancienne prioritaire) ; (3) consolider `.then` en écriture + confirmer débounce/socle fetch par recroisement. Ouvrir en vérifiant l'énergie.

## Session 55 — Dimanche : clôture useEffect (mini-exam) + famille fetch/Promise (.then écriture, objet vs tableau, throw, console.log(e))

**Durée** : ~3h (dimanche, frais, énergie pleine signalée en ouverture). Séance dense et productive : verrouillage useEffect + grosse réduction de la pile de dettes React chaudes.

**Révision éclair S55 (CSS — flexbox centrage + espacement)** : `justify-content: center` (horizontal) sorti seul ; `align-items: center` (vertical) NON ressorti (moitié de la réponse manquante) → recadré via le mémo « justify suit l'axe principal » (déduction, pas par-cœur). Écart entre cartes : a proposé `padding` → recadré vers **`gap: 20px`** (padding = intérieur + bords parasites ; gap = uniquement entre éléments, flex/grid only). Poche paire justify/align + gap/padding : entretenue puis **DÉCOCHÉE à la demande de Fred** (se sent à l'aise, croisé souvent). 🟢

**Ce qui a été fait** :

_Choix stratégique d'ouverture (par Fred)_ : finir `useEffect` (clôturer un domaine ouvert) AVANT d'ouvrir TS des props (notion neuve) ou l'audit JS (risque de rallonger la liste). Priorité « réduire les dettes chaudes » — excellent réflexe, trouvé seul.

_Clôture `useEffect` sans fetch :_

- **`useEffect` + localStorage sync** (`ThemeBoutique`, page blanche) : pattern `[dark]` + `setItem`. **Point de fond neuf ancré — cohérence de type d'un state** : `getItem` renvoie une CHAÎNE, jamais un booléen → un state doit garder UN SEUL type. Solution : lazy init `=== "sombre"` (→ booléen) + reconversion booléen→texte à la sauvegarde. Bug corrigé : `setItem(theme)` un seul arg → `setItem("theme", theme)`. + cohérence casse écrit/relu (bug silencieux si majuscule d'un côté, minuscule de l'autre).
- **`useEffect` + addEventListener resize** (`LargeurFenetre`, à trous) : listener + cleanup en contexte neuf. Bug instructif : `setLargeur(useState(...))` → **on n'appelle JAMAIS un hook dans un handler** ; `window.innerWidth` seul suffit (c'est déjà un nombre). Repère : `useState` CRÉE (une fois, en haut) / `setX` MODIFIE (partout). Question `[]` vs `[state]` : réponse juste (le listener écoute en continu, on le pose une fois).

_🎓 MINI-EXAM useEffect (idée de Fred : « exercice certifiant, mini-exam ») :_

- `TableauDeBordBoutique`, page 100% blanche, niveau costaud (3 states + 2 useEffect + dépendance + cleanup + localStorage + cohérence de type). **UN SEUL vrai bug** = cleanup avec `addEventListener` au lieu de `removeEventListener` (étourderie de copie, la référence nommée `handleResize` était juste des 2 côtés — le point dur maîtrisé). + point pro : déclarer `handleResize` DANS le useEffect (responsabilité unique) → adopté.
- **Fred a lui-même relativisé** : « exam plus simple que prévu car indices dans les consignes → je n'avais qu'à recâbler ». Calibrage juste et honnête : assemblage réussi de mémoire AVEC garde-fous ≠ from scratch total sans filet. Statut acté : **useEffect = reconstructible, passe en MODE ENTRETIEN** (révision espacée), pas « fini pour toujours ». Domaine VERROUILLÉ. 🔒

_Famille fetch/Promise (multi-clôture, protocole proposé par Fred : page blanche async/await PUIS `.then` en dessous, sans indices) :_

- **`CarteClient` async/await, 3e passage page blanche sans indices** : structure ENTIÈREMENT juste (states, try/catch/finally, !ok/throw, err.message, early returns, `[]`). 🟢 **CONFIRMÉ SOLIDE — la mémoire répond seule** (l'objectif que Fred cherchait à mesurer). Seul « bug » = **objet vs tableau** : avait mis `useState([])` + `.map()` pour UN client (endpoint singulier → objet) → recadré : liste N éléments = `useState([])` + `.map` / objet unique = `useState(null)` + accès direct `data.champ` + early return `if (!data)`. La valeur de départ découle de la FORME de la donnée.
- **`.then` en écriture (2e contact)** : chaîne juste. **Piège `fn()` d'hier CORRIGÉ** (`.catch((err) => ...)` avec la flèche, plus `.catch(setErreur(...))`). Erreurs traversées : `;` entre les maillons (casse la chaîne — une chaîne = UNE expression continue, un seul `;` final) ; tentative `throw` dans un ternaire → **règle de fond ancrée : `throw` est une INSTRUCTION (agit, ne vaut rien), interdite dans un ternaire (qui attend une EXPRESSION) → toujours dans un `if` + bloc `{ }`**. `if (!r.ok) throw ...` dans un `.then` saute au `.catch` (= le try/catch transplanté).
- **`console.log(e)` observé + compris (dette fermée)** : objet erreur ENTIER (type + message + stack trace = chemin/lignes du plantage) = outil du DÉVELOPPEUR pour enquêter ; `err.message` (texte nu) = ce qu'on montre à l'UTILISATEUR (dans setErreur). Repère : objet entier → console/debug, `.message` → écran. Nuance : `message`/`name` non énumérables (pas dans `{...err}`/JSON).

**Niveau estimé après session** :

- **useEffect (tous cas : dépendance, cleanup, localStorage, listener)** : 🟢 reconstructible (mini-exam page blanche réussi) → MODE ENTRETIEN.
- **async/await fetch from scratch** : 🟢 confirmé solide (3e passage sans indices, mémoire autonome).
- **`.then` en écriture** : 🟡→🟢 chaîne maîtrisée (piège fn() corrigé, `;` et throw/if ancrés). Emballage en composant complet = connu (V1 le prouve).
- **cohérence de type d'un state** : 🟡 neuf, compris — à recroiser.
- **objet vs tableau (valeur de départ selon la donnée)** : 🟡 neuf, ancré par le bug — à recroiser.
- **`throw` = instruction, jamais dans un ternaire** : 🟡 neuf, ancré — à recroiser.
- **console.log(e) objet vs .message** : 🟢 compris.
- Recalibrage : Fred relativise justement ses réussites (exam « facile », « pas relu ») — reste que async/await sort seul en 3e passage = solide mesuré.

**Restes / dettes (mises à jour)** :

- ✅ SOLDÉ aujourd'hui : useEffect sans fetch (bouclé), `.then` écriture (consolidé), `console.log(e)` (fermé), débounce (déjà confirmé S54).
- **`Promise.all`** (fetchs parallèles) : NON fait — prévu en bonus mais manque de temps. Notion NEUVE, à enseigner (pas de page blanche). Candidat ouverture prochaine séance.
- **TS des props** : 🔴 PRIORITAIRE — notion neuve complète, mérite un DÉBUT de séance frais dédié (Fred veut clôturer avant d'ouvrir → c'est le prochain gros cap).
- **Tic-Tac-Toe version finale** (`currentMove`, modulo, slice à arguments, 2e arg de `.map()`) : à reprendre — Fred a signalé que « voyager dans le temps » l'avait largué (concept mal compris, pas juste syntaxe). Mérite du calme.
- **Audit JS croisé** (S51) : répond à la peur de fond « oublier la moitié ». Séance cerveau frais.
- Poches à ré-entretenir : **`reduce` objet** 🔴 (rouillé S54) · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (les 3 neufs du jour).
- Tier 2 non urgent : `this` · POO/classes JS (lire).
- Micro-tâches : Tailwind dans Vite · nettoyer `App.css` · réactiver `Ctrl+P`.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis Vite local (S47-48).

**➡️ Prochaine session** : au choix — (1) **`Promise.all`** en ouverture (neuf, court) puis enchaîner ; (2) **TS des props** (gros cap prioritaire, début de séance frais) ; (3) **Tic-Tac-Toe version finale** (reprise au calme d'un concept mal digéré). Ouvrir en vérifiant l'énergie.

## Session 56 — Dettes React : reduce objet (ré-entretien) + Promise.all + Tic-Tac-Toe version finale

**Durée** : ~2h. Objectif tenu : clôturer des notions anciennes AVANT d'ouvrir du neuf (TS des props volontairement repoussé — règle "on ferme avant d'ouvrir", décision de Fred).
**Thème** : réduction de dettes — poche `reduce` objet rouillée, puis `Promise.all` (neuf, enseigné), puis reprise au calme du "voyage dans le temps" du Tic-Tac-Toe (concept mal digéré depuis S46).

**Révision éclair S56 (reduce accumulateur objet — poche 🔴 S54)** : sortie à froid encore cassée (`.map` au lieu de `reduce`, concaténation de texte au lieu de comptage). MAIS 2 réflexes revenus seuls : le `{}` en 2e arg et le `return acc`. Cours complet redonné en forme longue (`for` + `compteur[m.marque] = (compteur[m.marque] || 0) + 1`) puis replié en `reduce`. **Vrai déblocage = les crochets** : Fred butait sur `[m.marque]` → clarifié la confusion empilée `[index]` sur TABLEAU (position) vs `["clé"]` sur OBJET (nom de propriété calculé dynamiquement, = `objet.clé` mais avec une clé variable). Distinction actée nette. 🟡 poche réactivée, à recroiser 1×.

**Ce qui a été fait** :

_Promise.all (neuf, enseigné — pas de page blanche) :_

- Le pourquoi : 3 fetchs séquentiels = somme des attentes (~600ms) ; en parallèle = le plus lent (~200ms). `await` attend sur place → le séquentiel fait la queue à 3 guichets pour rien.
- Syntaxe : `const [a, b] = await Promise.all([fetch(...), fetch(...)])`. Bien séparé les 2 `[]` : à DROITE dans `Promise.all([...])` = tableau de promesses (argument unique) ; à GAUCHE = déstructuration par position. Résultats rendus dans l'ordre des promesses (garanti).
- Pattern à 2 niveaux : 1er `Promise.all` pour les réponses, 2e pour les `.json()`.
- Gestion d'erreur (question spontanée de Fred) : même try/catch/finally + `!res.ok`/throw que d'hab, mais tester le `.ok` de CHAQUE réponse. Point clé : `Promise.all` = "tout ou rien" (une seule échoue → saut au catch, aucun résultat). `fetch` ne voit pas un 404 comme une erreur → le `!ok`/throw reste à notre charge.
- Exo guidé (1 trou) : structure juste. Doute levé : on ne nomme PAS dans le tableau de droite (`client = resClient.json()` ❌), le nommage se fait à gauche par position. Fred a flaggé lui-même le doute = bon instinct.
- Questions de fond traitées : pourquoi `[]` dans les `()` (→ parenthèses = appel de fonction / crochets = l'argument est un tableau, contenant naturel d'un nombre variable d'éléments) ; `allSettled` vs `all` (→ dépendance : interdépendants = `all` tout-ou-rien / indépendants = `allSettled` attend tout le monde). `allSettled` juste de nom, non drillé.

_Tic-Tac-Toe version finale (reprise concept, au calme) :_

- Rappel acquis S46 : lifting state up déjà compris (state dans Game, Board reçoit le plateau en prop). Ce qui avait largué = la couche historique cliquable.
- **Changement de mentalité** : on ne stocke plus "le plateau courant" mais `history` = TOUS les plateaux (tableau de tableaux). `useState([Array(9).fill(null)])`. Ajout immuable à chaque coup (`[...history, nouveau]`, pattern S43 avec des plateaux comme éléments).
- **`currentMove` = curseur/marque-page** (un simple index, PAS un plateau). Image livre (history) + marque-page (currentMove) → passée nette. `currentSquares = history[currentMove]`.
- **`xIsNext = currentMove % 2 === 0`** = donnée dérivée, PAS un state (rappel S45/S46 "ne pas stocker ce qui se recalcule"). `%` (modulo) = reste de division, `n % 2` vaut 0 (pair) ou 1 (impair) = test pair/impair standard. Avantage : se recorrige seul au voyage dans le temps (une seule source de vérité = currentMove).
- **`slice(0, currentMove + 1)`** = LE morceau dur. `slice(début, fin)` avec fin EXCLUE → le `+1` compense pour inclure le plateau courant. Rôle : jeter le "futur périmé" quand on rejoue après un retour arrière (nouvelle branche). Bien distingué du `slice()` sans arg (copie, S46). Pourquoi slice et pas mutation : `history` est un state → slice fabrique un tableau neuf (jamais muter, rappel shallow S41). A demandé plusieurs passes + chiffres concrets ; erreur intermédiaire ("P2 remplacé" avec currentMove=1) recadrée → a fini par acter juste : currentMove pointe le plateau GARDÉ (inclus), tout ce qui suit est jeté.
- **`jumpTo(move)` = `setCurrentMove(move)`** : voyager = juste déplacer le marque-page ; tout le reste (plateau affiché + tour) en découle.
- **2e argument de `.map()`** : `history.map((squares, move) => ...)` → `move` = l'index. Ici on IGNORE l'élément (`squares`) et on se sert de l'index (position = n° de coup). Fred a trouvé le pourquoi seul. `onClick={() => jumpTo(move)}` (flèche inline transporte l'argument, S44). `key={move}` = cas légitime d'index en key (historique jamais réordonné, exception S53).

**Niveau estimé après session** :

- **`reduce` objet** : 🟡 poche réactivée (crochets dynamiques = le déblocage). À recroiser en révision éclair.
- **Crochets `[index]` tableau vs `["clé"]` objet** : 🟢 distinction reposée nette.
- **`Promise.all`** : 🟡 neuf, pattern compris (parallèle, tout-ou-rien, nommage à gauche). À recroiser, + emballage en composant complet un autre jour.
- **`allSettled`** : connu de nom seulement.
- **Tic-Tac-Toe / voyage dans le temps (`currentMove`, `%`, `slice` à args, 2e arg map)** : 🟡 concept enfin digéré (largué en S46). À recroiser — le `slice(0, move+1)` a demandé plusieurs passes, le recroiser en priorité.
- Recalibrage vers le haut : a tenu 2 notions denses en 2h avec des questions de fond (les 2 `[]`, allSettled, borne exclue du slice) — se sous-note en fin de parcours (a trouvé le 2e arg de map seul mais dit "je ne sais pas").

**🎹 Raccourci de la semaine** : `F12` (Aller à la définition) + `Alt+←` (revenir). Pertinent avec le multi-fichiers. `Ctrl+P` = acquis (retiré). App.css = nettoyé (retiré).

**Restes / dettes (mises à jour)** :

- ✅ Soldé/traité aujourd'hui : `Promise.all` (introduit), Tic-Tac-Toe version finale (concept repris), `reduce` objet (réactivé).
- **TS des props** : 🔴 PRIORITAIRE — le prochain gros cap, notion neuve, début de séance frais dédié. Rebranche TypeScript (pas touché depuis S38).
- **Audit JS croisé** (S51) : répond à la peur "oublier la moitié". Séance cerveau frais.
- **Audit "exercice type"** (todo list…) : principe à expliquer (S53).
- Poches à ré-entretenir : **`reduce` objet** (recroiser) · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (neufs S55).
- `Promise.all` à recroiser (composant complet) · `slice` à args à recroiser en priorité.
- Tier 2 non urgent : `this` · POO/classes JS (lire).**❌ Pas abordé** : `sort()` avec comparateur
- Micro-tâches : Tailwind dans Vite.

**🗑️ Obsolète à signaler dans les instructions** : mentions **« react.new / CodeSandbox »** (§5, §7, §8) — caduques depuis Vite local (S47-48).

**➡️ Prochaine session** : cap sur **TS des props** (gros morceau prioritaire, notion neuve, cerveau frais) OU **audit JS croisé** (répond à la peur de fond). Ouvrir en vérifiant l'énergie. Recroiser `slice(0, move+1)` et `reduce` objet en révision éclair quand l'occasion se présente.

## Session Mise à jour des instructions / fichiers (pas d'apprentissage, seulement de la gestion de projet)

**mise à jour des instructions** : Avec l'aide de Claude. Intemporelle sauf §7.
**création de fichier** : PDF roadmap, revision.md, ArchivePhase1.md et Liste des projets consultable au besoin.

## Session 57 — Audit croisé + registre des dettes du socle

**Durée** : ~1h. Séance de cartographie, pas de code.
**Thème** : croiser le parcours réel avec des référentiels externes pour rendre la liste des manques finie et contrôlable.
**Révision éclair** : fondue dans l'audit (auto-codage de 22 notions JS = récupération à froid).

**Ce qui a été fait** :

- 3 référentiels externes récupérés : javascript.info (Part 1), roadmap.sh JavaScript, roadmap.sh Full-Stack.
- **Recadrage de Frédéric (juste)** : l'audit croisé, c'est à Claude de faire le rapprochement parcours ↔ référentiels, pas à lui de s'auto-coder ligne par ligne.
- 2 livrables : `audit-croise.md` (profil complet) + `dettes-apprentissage-socle.md` (HTML/CSS/Tailwind/JS).

**Ce que l'audit a révélé** :

- Trous invisibles dans mon suivi : `switch`, `break`/`continue`, **hoisting** (symptôme connu, mécanisme jamais nommé), coercion.
- **Notion neuve structurante — dette de type A (trou) vs type B (entretien)** : une notion apprise puis non réactivée redevient une dette invisible, le journal la garde marquée « acquise ».
- **Dettes silencieuses révélées** : `fetch` POST + `FormData` (dernière activation S35, ~1 mois) · `IntersectionObserver` (S30) · `Object.values` / `for...in` / `toLocaleString` (blocs C-D).
- **7 marqueurs « il sait »** : 6 manquent (tests, branches Git/PR, TS réel, a11y, sécurité, architecture/README) ; le 7e — expliquer ses choix — est déjà acquis et rare.

**Top 3 dettes prioritaires** : (1) `reduce` objet — seule cassée 2× à froid ; (2) CSS Grid placement — la plus ancienne, 2 réactivations sans ancrage ; (3) `fetch` POST/`FormData`.

**Vérification faite** : aucune dette du socle n'est un prérequis React (contrôlé ligne à ligne). Le Tier 1 fermé en S38 + 15 séances React le confirment.

**Plan acté** : ~8h en 5 séances (micro-notions · projet CSS Grid · modèle mental JS · audit a11y · event loop), **à intercaler dans la Phase 2, jamais en bloc**. `this` + classes → avant Phase 3. Récursion → créneau algo. Dates + regex → tissés dans le SaaS.

**📌 Gros trous du socle — séance dédiée à caler (en attente, sans urgence)**

Trous de type A identifiés en S57, non intégrables en cours de séance : chacun demande un créneau à part.

- **CSS Grid — placement** (~1 séance, idéalement un projet catalogue optique en Grid pur qui absorbe aussi `@keyframes`, `::before` et `rem`) — la dette la plus ancienne du socle (08/06), 2 réactivations sans ancrage.
- **`@keyframes` / animations CSS** (~1 séance, ou fondu dans le projet Grid ci-dessus).
- **Accessibilité** (~1h30, méthode audit : Lighthouse + navigation clavier sur le portfolio existant, pas un cours).
- **Modèle mental JS : coercion + hoisting** (~1h30, méthode prédiction → exécution → explication de l'écart).
- **Event loop** (~1h, à faire après la séance coercion/hoisting).
- **Dates** (`Date`, formatage, calculs) (~1 séance) — remontera de toute façon avec le SaaS optique (ordonnances, commandes, garanties).
- **Regex — bases** (~1 séance) — arrivera avec la validation de formulaires.
- **`this` + classes JS** (~2 séances) — ⏳ à caler **avant la Phase 3 Python**, pas avant. Aucun impact sur React fonctionnel.
  \_Total ~8h hors `this`/classes.

**➡️ Prochaine session** : **TS des props** (cap inchangé). Alternative : salve micro-notions (~1h, solde 10 lignes du registre).

## Session 58 — Séance outillage : installation de TypeScript dans Vite (+ cours TS des props, non pratiqué)

**Durée** : ~3h30. Séance qui a dérapé sur l'outillage : partie pour TS des props, terminée en installation TypeScript. Objectif initial NON atteint.
**Thème** : cours théorique TS des props, puis installation de TypeScript dans `projet-vite-local` — qui a viré en apprentissage de la recherche de doc officielle.

**Révision éclair S58 (`slice(0, currentMove + 1)` — Tic-Tac-Toe, 🔴 S56)** : **NON RECONSTRUIT**. Fred a signalé honnêtement ne pas avoir assez d'éléments. Ce qui tenait : `slice(départ, fin exclue)` ✅, structure de `history` ✅, l'existence d'un `length - 1` ✅. Ce qui était faux : « `currentMove` = index + 1 » → **non, `currentMove` EST l'index** ; le `+1` appartient uniquement au `slice` (compense la borne exclue). Deux notions fusionnées en une. Le `length - 1` appartient à `setCurrentMove(nextHistory.length - 1)` (ligne suivante) — bon morceau, mauvais endroit. → reste 🔴, remis en rotation, à recroiser à froid dans quelques séances.

**Ce qui a été fait** :

_Cours TS des props (théorie seule, AUCUN exercice) :_

- Le pourquoi : 3 bugs invisibles en JS pur (faute de frappe sur un nom de prop → `undefined` silencieux ; mauvais type `prix="129"` → concaténation au lieu d'addition ; prop oubliée → crash runtime). TS les remonte à l'écriture. Bénéfice bonus = autocomplétion des props.
- Syntaxe en 3 marches (méthode forme longue → DRY) : (1) `function C(props: { marque: string; prix: number })` = simple annotation de paramètre, rien de neuf vs S36 ; (2) type sorti en `interface CMonture Props` (convention `XProps`, PascalCase) ; (3) version finale `function C({ marque, prix }: CProps)`.
- **Piège central signalé** : l'annotation se pose APRÈS l'accolade fermante, sur le paramètre entier. `{ marque: string }` ❌ = renommage de déstructuration (S37), pas du typage. Boussole = la position du `:`.
- À savoir lire, pas écrire : `type Props = {}` et `React.FC<Props>` (obsolète).
- ⚠️ **Statut : cours reçu, ZÉRO exercice → ne compte pas comme acquis.**

_Installation TypeScript dans `projet-vite-local` (le vrai contenu de la séance) :_

- `npm install -D typescript @types/react @types/react-dom` → 2 paquets ajoutés seulement (les `@types` étaient déjà posés par Vite même en template JS). `-D` justifié : outils d'atelier, absents du bundle envoyé au navigateur.
- **Ce qu'installent réellement les `@types/`** : aucun code exécutable, uniquement des fichiers `.d.ts` = descriptions lisibles par la machine. Séparés du paquet React parce que React est écrit en JS ; une lib écrite en TS livre ses types directement.
- **Les 3 `tsconfig` (découverte de la séance)** : `tsconfig.json` = aiguilleur quasi vide / `tsconfig.app.json` = le code de `src/` (tourne dans le NAVIGATEUR, a `document`/`window`) / `tsconfig.node.json` = les fichiers de config (tourne dans NODE). Deux mondes d'exécution ≠ un seul jeu de règles. Seul `tsconfig.app.json` compte au quotidien.
- **Point Vite ancré** : Vite transpile les `.ts` mais ne VÉRIFIE PAS les types (page Features → TypeScript). Le rouge vient de VS Code, pas du serveur. D'où `tsc --noEmit` en complément, et d'où l'installation du paquet `typescript` (pour disposer de `tsc`).
- Test de validation : `const prix: number = "129"` → `ts(2322) Type 'string' is not assignable to type 'number'` ✅ TS opérationnel.

_🎯 LE VRAI APPRENTISSAGE — trouver et qualifier la doc officielle :_

- **Erreur de ma part, à l'origine du dérapage** : j'ai livré un `tsconfig.json` complet **reconstruit de mémoire**, présenté comme une procédure établie, sans dire que ça ne venait d'aucune source. Fred a demandé 3× d'où ça sortait ; j'ai répondu par de nouvelles procédures au lieu de dire « de ma mémoire ». Il a cherché la source d'un texte qui n'en avait pas. **Bonus : ma version était périmée (1 fichier au lieu de 3) — c'est SA démarche qui m'a corrigé.**
- **Répartition des docs comprise** : typescriptlang.org = le langage, option par option (dictionnaire, à consulter APRÈS) · react.dev = les paquets + 2 options obligatoires (`dom` dans `lib`, `jsx` défini) · vite.dev = ce que Vite fait/ne fait pas de tes `.ts`. **Aucune ne donne le `tsconfig` complet** — trou réel de l'écosystème, pas un échec de recherche.
- **🆕 RÈGLE DE MÉTIER ANCRÉE : quand une doc renvoie vers son starter, le CODE du starter EST la documentation.** Source officielle du `tsconfig` = `github.com/vitejs/vite` → `packages/create-vite/template-react-ts/`. Lisible en ligne, versionné, à jour. Aller lire le code source officiel n'est pas un contournement.
- Piège traversé : `awesome-vite` (liste communautaire de templates tiers) ≠ le dépôt `vitejs/vite`. Repère = l'URL + on navigue dans l'arborescence, pas dans un README. `Ctrl+F` inopérant sur GitHub (chargement dynamique) → utiliser la recherche du dépôt (touche `t`).
- Confirmé : `npm create vite@latest` propose la variante TS **au démarrage seulement** ; aucune commande n'ajoute TS à un projet Vite existant → reconstitution manuelle obligatoire.

**Ce qui a accroché** :

- Séance vécue comme pénible et confuse (agacement légitime exprimé). **Cause = moi**, pas la difficulté : 3 méthodes contradictoires livrées en 3 messages sans jamais dire laquelle suivre, sur fond d'une info inventée présentée comme sourcée.
- **Exigence reformulée par Fred, à respecter strictement** : « je veux savoir, pas recopier — être capable d'appliquer seul au besoin ». Corollaire opérationnel : **toujours annoncer la nature de ce que je livre** (source vérifiée vs reconstruction de mémoire).

**Niveau estimé après session** :

- **Installation TypeScript dans un projet Vite existant** : 🟢 faite et validée par test.
- **Rôle des 3 `tsconfig` / `@types` / Vite ne vérifie pas les types** : 🟢 compris.
- **Méthode « remonter à la doc officielle + qualifier la source »** : 🟢 acquis en conditions réelles et douloureuses — la vraie compétence de la journée, transférable à tout outil.
- **TS des props** : 🔴 **INCHANGÉ** — cours théorique reçu, aucun exercice, aucune ligne écrite. Reste le cap n°1.
- **`slice(0, move + 1)`** : 🔴 non reconstruit à froid, remis en rotation.
- Recalibrage : a tenu 3h30 sur une séance frustrante sans lâcher, et a fini par trouver la source officielle par lui-même. La ténacité vaut la notion.

**Restes / dettes (mises à jour)** :

- 📌 **Commiter + pusher** l'installation TS (rituel deux machines — le fixe devra faire `git pull` + `npm install`).
- **TS des props** : 🔴 PRIORITAIRE, en tête de pile depuis la S44 (~15 sessions). Cours fait, exercice à faire.
- **Tailwind dans Vite** : programmé pour la prochaine séance (dette S48). ⚠️ Architecture `src/input.css` + `dist/output.css` de la Phase 1 **NON transposable** (c'était le mode CLI `--watch`) — l'intégration Vite passe par un plugin.
- Poches à ré-entretenir : `slice(0, move+1)` 🔴 · `reduce` objet 🟡 · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (S55).
- `Promise.all` en composant complet · Audit « exercice type » (S53) · Tier 2 non urgent : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.

**🎹 Raccourci de la semaine** : `F12` (Go to Definition) + `Alt+←` (Go Back) — inchangé, non entraîné cette séance.

**➡️ Prochaine session** : (1) **Tailwind dans Vite** en ouverture, en autonomie sur la doc officielle Tailwind — time-box 45 min, appeler à l'aide si ça déborde (piège de version probable) ; (2) **TS des props POUR DE VRAI** sur le reste de la séance : exercice guidé, squelette + un seul trou, univers optique. Ne pas enchaîner une 3e séance d'outillage d'affilée.

## Session 59 — Tailwind dans Vite (dette S48 soldée) + Prettier/plugin Tailwind

**Durée** : ~1h45 (pause midi, portable, énergie bonne). Séance courte et efficace, volontairement close après la dette outillage.
**Thème** : installer Tailwind v4 dans `projet-vite-local` en autonomie sur la doc officielle, puis rebrancher Prettier + `prettier-plugin-tailwindcss`. Suite directe de la S58 : rejouer à 24h la compétence « remonter à la doc officielle », sur un cas où la doc est bonne.

**Révision éclair S59 (fetch POST + FormData — dette silencieuse repérée à l'audit S57, dernière activation S35, ~2 mois)** :

- **Structure POST** 🟡 : `method: "POST"` et `body: data` sortis seuls ✅. **`headers` non retrouvé** (Fred a signalé « un truc à saisir dont je ne me souviens pas » = honnête, bien calibré).
- **`FormData`** 🟢 : rôle juste, et **l'attribut `name` sur l'`<input>` cité spontanément** (le détail sans lequel rien n'est ramassé). Précisé : `new FormData(e.target)` ramasse tout le formulaire d'un coup ; `new FormData()` crée un objet vide à remplir par `.append()`.
- **Rôle de JSON** 🔴 **cadrage rétréci** : « JSON c'est pour un localStorage ». → recadré (rappel S37) : **localStorage ET le réseau ne transportent que du texte**. JSON = format d'échange universel, même rôle des deux côtés. Fred utilise déjà JSON en réseau à chaque fetch GET (`response.json()`) sans l'avoir rangé sous cette étiquette.
- **Point pro ancré — le `Content-Type` selon le body** : avec `FormData` → **ne PAS l'écrire** (le navigateur pose l'en-tête + un séparateur technique indevinable ; l'écrire à la main casse la requête) ; avec JSON → `"application/json"` **obligatoire** (personne ne le fera à ta place).
- → La dette silencieuse de l'audit est **confirmée par la mesure**. Reste en rotation.

**Ce qui a été fait** :

_Installation Tailwind v4 dans Vite (dette S48) :_

- Doc officielle trouvée seul (tailwindcss.com → Getting started → Installation → Using Vite, v4.3). **Contraste assumé avec la S58** : 5 étapes numérotées, commandes fournies, rien à reconstituer. Enseignement de fond : **la qualité de la doc varie énormément d'un outil à l'autre** — savoir le repérer en 2 min fait gagner des heures.
- `npm install tailwindcss @tailwindcss/vite` → 2 paquets : le moteur + la pièce de raccordement à Vite (même logique que TS hier).
- **⚠️ Divergence n°1 (projet neuf vs existant) — `vite.config.js`** : la doc montre `plugins: [tailwindcss()]`. Copier tel quel **écrase** `react()` et casse la compilation du JSX. Le bon geste = **ajouter un élément au tableau**, pas le réécrire → `plugins: [react(), tailwindcss()]`. Fait juste du premier coup (import par défaut + tableau complété + parenthèses).
- **Rappel S52 réinvesti en contexte neuf** : pourquoi `react()` et non `react` → ce sont des **fonctions-usines** qui RETOURNENT l'objet plugin ; ici on veut le résultat maintenant. « La parenthèse décide du moment », appliqué à un fichier de config.
- **⚠️ Divergence n°2 — quel fichier CSS ?** Question posée avant d'agir, **répondue juste avec le bon raisonnement** (`index.css` = importé dans `main.jsx`, chargé en premier et inconditionnellement / `App.css` = plus importé du tout depuis S48 → l'y mettre n'aurait eu AUCUN effet). Précisé : les 2 fichiers ne diffèrent QUE par l'endroit où ils sont importés (le CSS reste global — S48).
- **Preflight** expliqué : Tailwind injecte un reset (marges, titres, listes, boutons remis à zéro) pour une base identique partout. Conséquence : les `<h1>` « perdent » leur style → ce n'est PAS le CSS qui casse, c'est le défaut navigateur qui est effacé.
- **Nettoyage `index.css`** : suppression du bloc de démonstration du scaffolding. Argument : code mort + **on a Git**, pas besoin de commenter « au cas où » (garder du code mort commenté = réflexe sanctionné en revue).
- **Chargement du CSS avec un bundler (question spontanée « pas de `<link>` à saisir ? »)** : non — Phase 1 = `<link>` dans le HTML (mode CLI) / aujourd'hui = `import "./index.css"` dans `main.jsx`, présent depuis le scaffolding. **Le CSS fait partie du graphe de modules** : Vite suit la chaîne `index.html` → `main.jsx` → `index.css` et l'injecte. On importe une feuille de style comme un composant.
- Test de validation : `text-3xl font-bold text-blue-500` → grand, gras, bleu ✅ **Installation validée.**

_🎯 Grosse discussion de fond — `@theme` / `@apply` / CSS classique (initiée par Fred, très bonne série de questions) :_

- **Distinction centrale posée** : `:root { --x }` = variable CSS **native**, Tailwind l'ignore, aucune classe générée / **`@theme { --color-x }` = on PARLE à Tailwind**, il **fabrique les classes** (`bg-x`, `text-x`, `hover:bg-x`, `md:text-x`…). Le préfixe `@` = instruction adressée à Tailwind, qui disparaît à la compilation.
- **Réponse à « on peut tout faire en CSS classique ? »** : **oui pour `@apply`** (pur confort, tout le portfolio pouvait s'écrire à la main) / **NON pour `@theme`** (sans lui, `bg-accent` n'existe pas — il aurait fallu écrire `background: var(--color-accent)` en CSS). La vraie différence : CSS classique = **tu écris** chaque règle et chaque variante ; `@theme` = **tu déclares une valeur**, Tailwind génère toutes les combinaisons.
- Confirmé : une classe `.badge` en CSS classique + `className="badge"` fonctionne parfaitement et cohabite (`className="badge text-3xl"`). Le coût = 2 systèmes en parallèle, 2 endroits où chercher.
- **Point React majeur** : en React, `@apply` est souvent inutile — le **composant** (`<Badge>`) est un meilleur outil que la classe CSS (embarque style + structure, accepte des props, pas de fichier CSS parallèle). Le `.comp` du portfolio existait parce que c'était du HTML. `@apply` reste utile pour `@layer base` / typographie / markup non contrôlé.
- **Échelle Tailwind ressortie rouillée** 🟡 : `py-4` pris pour 4px → c'est **1rem = 16px** (1 unité = 0.25rem). Dette d'entretien classique (type B), pas un trou. Aussi recadrés : `bg-crimson` n'existe pas (couleur CSS ≠ token Tailwind → `bg-red-600` ou `bg-[crimson]`) et `rounded-[999px]` → `rounded-full` (chercher le standard avant la valeur arbitraire).

_Prettier + plugin Tailwind sur ce projet :_

- `npm install -D prettier prettier-plugin-tailwindcss` — rappel S40 : **`node_modules` est local à chaque projet**, Prettier installé ailleurs n'existe pas ici (l'extension VS Code, elle, est globale).
- `.prettierrc` recréé à la racine **en reprenant celui de `portfolio-fred` sur GitHub** (source fiable, écrite pour v4) — méthode S58 réappliquée : on va chercher la source, on ne se fie pas à la mémoire. Adaptation obligatoire : `tailwindStylesheet` pointé sur **`./src/index.css`** (et non `./src/input.css` = architecture CLI Phase 1, non transposable).
- Test : classes en désordre → réordonnées au save ✅
- **🆕 Lecture d'un rapport `npm audit`** (message `1 high severity vulnerability`) : format décodé (paquet + versions touchées, sévérité, nature, lien advisory, chemin). Cas rencontré = `postcss`, une **dépendance de dépendance** (jamais installée directement, utilisée sous le capot par Vite/Tailwind) → d'où l'intérêt du `package-lock.json` qui fige tout l'arbre. Décision raisonnée : devDependency + projet local non déployé = pas d'urgence. **⚠️ Piège pro signalé : `npm audit fix --force` peut installer des versions majeures et CASSER le projet — jamais par réflexe, on lit d'abord.**

**Ce qui a accroché / à mon crédit** :

- **Imprécision de ma part, corrigée par Fred** : j'ai affirmé que les variables de `index.css` n'étaient « utilisées par aucun composant » — faux. Elles étaient consommées **dans le même fichier** (`color: var(--text)` sur `:root`), d'où le fond visible sur les exercices. Fred l'a repéré en confrontant à ce qu'il voyait à l'écran. Bon réflexe : **vérifier l'affirmation contre le réel**.
- Série de questions de fond de très bon niveau (pourquoi 2 fichiers CSS, `@theme` vs CSS natif, `.badge` en classique, pas de `<link>` ?) — chacune tapait sur un vrai point d'architecture.

**Niveau estimé après session** :

- **Installer Tailwind v4 dans un projet Vite existant** : 🟢 fait et validé, avec les 2 divergences projet-neuf/projet-existant identifiées et traitées.
- **Distinction `@theme` (génère des classes) vs variable CSS native (n'en génère aucune)** : 🟢 point de fond enfin explicite — c'était flou depuis la Phase 1.
- **Chargement du CSS par le bundler (import ≠ `<link>`)** : 🟢 compris.
- **Preflight / reset Tailwind** : 🟢 compris.
- **Prettier + plugin Tailwind par projet** : 🟢 rebranché en autonomie depuis la source.
- **Lecture d'un `npm audit`** : 🟡 neuf, format compris.
- **Échelle Tailwind (1 unité = 0.25rem)** : 🟡 rouillée, à recroiser.
- **fetch POST / `Content-Type` / rôle de JSON en réseau** : 🟡🔴 dette silencieuse confirmée, en rotation.
- Recalibrage : a mené l'installation quasi seul (doc trouvée seul, `vite.config` juste du premier coup, bon fichier CSS choisi avec le bon raisonnement) — mon rôle s'est limité à signaler les 2 pièges projet-existant.

**Restes / dettes (mises à jour)** :

- ✅ **Dette « Tailwind dans Vite » SOLDÉE** (traînait depuis S48) — à retirer du registre.
- 📌 **Commiter + pusher** la séance (Tailwind + Prettier + `.prettierrc`). Rituel deux machines sur le fixe : `git pull` → `npm install` → `npm run dev`.
- **TS des props** : 🔴 **PRIORITÉ ABSOLUE, cap de demain**. Cours reçu S58, **toujours zéro exercice**. En tête de pile depuis la S44 (~16 sessions). Ne plus repousser.
- ⚠️ **Deux séances d'outillage d'affilée (S58 + S59) — la troisième est interdite.**
- Poches à ré-entretenir : `slice(0, move+1)` 🔴 · `reduce` objet 🟡 · échelle Tailwind 🟡 (neuf) · fetch POST/JSON réseau 🟡 · méthodes de tableau (rotation) · cohérence de type / objet-vs-tableau / throw-if (S55).
- `Promise.all` en composant complet · Audit « exercice type » (S53) · Tier 2 non urgent : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.
- 💡 Opportunité notée : les exercices React ont perdu leur mise en forme (héritée de l'ancien `index.css`) → **terrain tout prêt pour du restylage Tailwind**, et éventuellement pour absorber la dette CSS Grid.

**🎹 Raccourci de la semaine** : `F12` (Go to Definition) + `Alt+←` (Go Back) — toujours pas entraîné (2 séances d'outillage, peu de navigation entre fichiers). À relancer demain, le multi-fichiers TS s'y prêtera.

**➡️ Prochaine session** : **TS DES PROPS, sans détour**. Cours déjà reçu (S58) → on attaque directement par l'**exercice guidé** (squelette + un seul trou, univers optique), puis montée : props optionnelles, valeurs par défaut. Aucun outillage. Ouvrir en vérifiant l'énergie.

## Session 60 — TS des props : cours de fond + première pratique réelle (dette S44 enfin entamée)

**Durée** : ~1h30-2h (après-midi). Séance courte mais dense : la dette la plus ancienne de la pile est enfin passée du statut « cours reçu » à « code écrit ».
**Thème** : typer les props d'un composant React. Cours détaillé redemandé par Fred (celui de la S58 avait été noyé dans une séance d'outillage confuse), puis mise en pratique réelle dans `projet-vite-local`.

**Révision éclair S60 (`Object.values` / `for...in` — dette silencieuse S57, dernière activation bloc C le 09/06)** :

- `Object.values(obj)` → rôle juste (récupère les valeurs dans un nouveau tableau), **mais retrouvé via MDN**, pas de mémoire. Dette d'entretien **confirmée par la mesure**, reste en rotation.
- `for...in` → « tourne sur les clés » ✅ juste. Syntaxe complète non produite → complétée : `for (const marque in stock) { ... stock[marque] ... }`.
- **🔗 Connexion majeure faite** : les crochets `stock[marque]` = **exactement** le déblocage du `reduce` objet de la S56 (`acc[clé]`). Accéder à une propriété dont le nom est dans une **variable**. Deux notes de la même dette, même mécanisme.
- Mentionné pour lecture seule : `for (const [k, v] of Object.entries(obj))` (version moderne).

**Ce qui a été fait** :

_Setup / logistique (fait proprement, en autonomie) :_

- `App.jsx` → **`App.tsx`**, `main.jsx` recâblé, système commenter/décommenter **intact** (question posée avant d'agir — bon réflexe).
- Premier fichier `.tsx` créé (`BrouilleTSX.tsx`). Repère posé : **JSX + TS = extension `.tsx`**, jamais `.ts`.
- **⚠️ Piège projet-existant traversé — `ts(7016)`** : un `.tsx` qui importe un `.jsx` déclenche `Could not find a declaration file ... implicitly has an 'any' type`. Mécanisme compris : par défaut TS n'accepte pas les fichiers JS dans un projet TS.
- **✅ `"allowJs": true` ajouté dans `tsconfig.app.json`** (le fichier de `src/`, S58). Source qualifiée : `typescriptlang.org/tsconfig/allowJs.html` — option **conçue** pour la migration progressive JS→TS. Nuance ancrée : `allowJs` **accepte** les `.jsx` sans les **vérifier** (la vérification = `checkJs`, séparée, désactivée par défaut) → les 12 anciens exercices ne hurlent pas.
- Hygiène : quand on commente un `return`, **commenter aussi l'import** (sinon `ts(6133)` + bruit dans PROBLEMS).

_🎓 COURS DÉTAILLÉ — TS des props (le vrai, celui de la S58 n'était pas passé) :_

- **🆕 LE POINT DE FOND, jamais explicité avant : React ne passe qu'UN SEUL argument à un composant — un objet.** `<Carte marque="X" prix={149} />` → React exécute `Carte({ marque: "X", prix: 149 })`. Conséquences déduites : l'ordre des attributs JSX n'a aucune importance (objet, pas tableau) ; un composant n'a qu'un paramètre ; **typer les props = typer un objet** → donc une `interface`. C'est la clé qui manquait, tout le reste en découle.
- **Les 4 marches (méthode forme longue → DRY)** : 0. `function C(props)` + `props.marque` — JS pur, 15 séances de pratique
  1. `function C(props: { marque: string; prix: number })` — simple annotation de paramètre (rien de neuf vs S36)
  2. `interface CProps {...}` + `function C(props: CProps)` — le type sorti et nommé. **Le corps reste en `props.marque`**
  3. `function C({ marque, prix }: CProps)` — déstructuration + annotation
- **🧭 La boussole du `:`** : à l'**intérieur** d'une déstructuration, `:` = **renommage** JS (`{ marque: string }` ❌ = « appelle-la `string` », TS n'y voit rien) ; **après l'accolade fermante**, `:` = **annotation** TS sur le paramètre entier. Partout ailleurs, `:` = « est de type ».
- **Ce que TS ne fait PAS** : disparaît à la compilation (S36) · Vite transpile sans vérifier (S58) · **ne valide pas les données d'API** (il te croit sur parole → c'est le rôle de Zod, fin de Phase 2).

_Exercice 1 — guidé (1 trou), puis débordement positif :_

- **Bug traversé, très instructif** : signature de la **marche 2** (`props: CProps`) + corps de la **marche 3** (`{marque}`) → `ts(2304) Cannot find name 'marque'` ×2 + `props declared but never read`. Point clé ancré : **l'interface décrit une forme, elle ne crée aucune variable.** Corrigé seul en marche 3.
- **`ts(2739)` observé en direct** (`Type '{}' is missing the following properties: marque, prix`) sur un `<Brouillon2 />` sans props → **le « pourquoi » du cours vécu, pas récité** : la prop oubliée attrapée à l'écriture au lieu d'un `undefined` silencieux au runtime.
- **🌟 Initiative non demandée — invention d'un composant-page** : plutôt que faire remonter les props jusqu'à `App` (ce qui aurait cassé le système commenter/décommenter — chaque exercice aurait exigé ses props dans `App`), Fred a créé un composant intermédiaire `Brouillon2` qui héberge la démo et fournit les données à `CarteMonture`. **C'est la hiérarchie des vraies applis** (App orchestrateur → Page assemble → Composant affiche), trouvée seul sur un problème pratique. Résultat : 0 erreur, 0 warning.

_Points d'outillage et de vocabulaire clarifiés (questions de Fred) :_

- **`tsc --noEmit` décodé** : `tsc` = le vrai compilateur TS (celui installé S58) ; `--noEmit` = « vérifie tout, n'écris aucun fichier » (Vite produit déjà les fichiers, on ne veut que la moitié qu'il ne fait pas). **CI** = serveur qui rejoue les vérifications à chaque push et refuse le code si ça casse. Rangé dans la grille existante : Prettier = la forme (save / `--check`) · ESLint = le fond (extension / `npm run lint`, S49) · **TS = les types (rouge VS Code / `tsc --noEmit`)**. Script `"typecheck": "tsc --noEmit"` à ajouter dans `package.json`.
- **🆕 Vocabulaire : signature vs corps** — signature = la ligne de déclaration (nom, paramètres, types, retour) = le **contrat** ; corps = tout entre les `{ }` = le **travail**. Repère : l'accolade ouvrante de fin de ligne marque la frontière. **Enjeu réel : tout le neuf de TS vit dans la signature, le corps n'a pas changé d'un caractère depuis le JS pur.** + **paramètre** (le nom, dans la signature) vs **argument** (la valeur, à l'appel).

_Micro-drill de fin (3 signatures, hors React, `.ts` pur) :_

- `resumeClient` / `calculerRAC` / `afficherMonture` : **mécanisme `({ ... }: XProps)` juste 3 fois sur 3.**
- Corrections : **PascalCase pour les interfaces** (`resumeClientProps` → `ResumeClientProps` — règle S36 : types/composants en PascalCase, variables/fonctions en camelCase) ; nuance de nommage donnée — le suffixe `Props` est une convention **React**, une fonction ordinaire nomme son interface d'après la **donnée** (`Client`, comme en S38) car c'est réutilisable.
- 3 leviers d'assimilation posés (à sa demande — « je comprends mais je n'assimile pas ») : (1) la signature = **deux morceaux collés** qui ne se parlent pas, écrits sur 2 lignes ; (2) **test du cache-main** — masquer tout ce qui suit le `:` laisse du JS de la S37 ; (3) **sortir de React** — la syntaxe est identique sur `calculerDevis({ nom, mut }: Client)`, aucun composant nécessaire.

**Niveau estimé après session** :

- **Installation TS opérationnelle sur projet existant (`allowJs`, `.tsx`, `ts(7016)`)** : 🟢 — dette de logistique soldée.
- **Concept « props = UN objet passé à une fonction »** : 🟢 — c'était le chaînon manquant, il est passé.
- **TS des props, marche 3 (`{ a, b }: XProps`)** : 🟡 **compris, en cours d'ancrage** — écrit 1× en composant + 3× en drill, mais **le même jour que le cours**. ⚠️ **Ne pas surévaluer** : la vraie mesure est la récupération à froid demain. Fred l'a dit lui-même (« il faut pratiquer encore et encore »), calibrage juste.
- **Boussole du `:` (renommage vs annotation)** : 🟡 comprise, à recroiser.
- **`tsc --noEmit` / notion de filet CI** : 🟢 compris.
- **Vocabulaire signature / corps / paramètre / argument** : 🟢 posé.
- **PascalCase sur les types** : 🔴 à recroiser (erreur sur les 3 interfaces du drill).
- Recalibrage vers le haut : a corrigé ses 3 erreurs seul, a inventé le pattern composant-page sans qu'on le lui demande, et a posé 3 questions de fond de bon niveau (logistique du système d'exercices, `tsc --noEmit`, assimilation de la signature). Séance courte mais pleine.

**⚠️ Point de méthode (à mon crédit)** : « le filet CI c'est `tsc --noEmit` » — 3 notions empilées en 4 mots, non décodées. Fred a demandé. Rappel : ne pas balancer d'acronyme ou de commande sans le déplier, même en aparté.

**📌 Logistique documents** : le registre des dettes présent dans les fichiers du projet est un **PDF scanné (images)** — illisible pour moi. Fred l'a collé en texte cette séance. **À reconvertir en `.md` ou en PDF texte** pour être exploitable automatiquement à chaque ouverture.

**Restes / dettes (mises à jour)** :

- ✅ **Soldé** : installation TS fonctionnelle + `allowJs` · vocabulaire signature/corps · `tsc --noEmit` compris · dette « TS des props » **entamée pour de vrai** (n'est plus 🔴 « zéro ligne écrite »).
- 📌 **Commiter + pusher** S58 + S59 + S60 (TS, Tailwind, `.prettierrc`, `allowJs`, `App.tsx`). Rituel deux machines sur le fixe : `git pull` → `npm install` → `npm run dev`.
- 📌 Ajouter le script `"typecheck": "tsc --noEmit"` dans `package.json` (non fait).
- **⏭️ NON FAIT, reporté demain** : exercice page blanche `CarteVerre` (interface + marche 3 + composant-page + 2 tests d'erreur volontaires) · **props optionnelles `?` + valeur par défaut** (mécanisme neuf, cours court à donner AVANT tout exercice) · props tableau typé (`Monture[]`) · prop fonction (`onSupprimer: (id: string) => void`, neuf).
- Poches à ré-entretenir : `Object.values` / `for...in` 🟡 (mesurées ce jour) · `reduce` objet 🔴 · `slice(0, move+1)` 🔴 · échelle Tailwind 🟡 · fetch POST/`Content-Type` 🟡 · PascalCase sur les types 🔴 (neuf).
- `Promise.all` en composant complet · Audit « exercice type » (S53) · Tier 2 non urgent : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.
- 💡 Opportunité toujours ouverte : les exercices React n'ont plus de mise en forme → terrain prêt pour du restylage Tailwind, et pour absorber la dette CSS Grid.

**🗑️ Obsolète à signaler dans les instructions (§7)** :

- Tailwind : « ❌ Pas abordé : **Tailwind avec React/Vite** (micro-tâche restante) » → **soldé S59**.
- TypeScript : « TS des props 🔴 prochain gros cap, **pas pratiqué depuis l'intro** » → à requalifier en 🟡 (installé, cours donné, 1er composant écrit, drill fait).
- §5 : le `.prettierrc` de `projet-vite-local` pointe sur **`./src/index.css`** (et non `./src/input.css`, qui était l'architecture CLI de la Phase 1, non transposable).

**🎹 Raccourci de la semaine** : `F12` (Go to Definition) + `Alt+←` (Go Back) — **toujours pas entraîné**, 3 séances de suite. À forcer demain : le multi-fichiers `.tsx` avec interfaces s'y prête parfaitement (curseur sur un nom de type → `F12`).

**➡️ Prochaine session (week-end, session longue)** : **TS des props, pratique intensive.**

1. Ouverture : re-drill des 3 signatures **à froid** (mesure d'ancrage réelle) + révision éclair pondérée Phase 1.
2. Exercice page blanche `CarteVerre` (reporté ce jour).
3. Cours court **props optionnelles `?` + valeur par défaut**, puis exercice.
4. Montée : **props tableau typé** (`Monture[]`) + interface imbriquée + `.map()`.
5. Si l'énergie tient : **typer une prop fonction** (cours avant, pas de page blanche dessus).

- Dettes glissables sans forcer dans les exos : **`toLocaleString`** (prix en euros 🟠) et **paramètres par défaut** (🟠, tombe seul avec les props optionnelles). `sort()` **interdit** en exercice — jamais enseigné.
- Ouvrir en vérifiant l'énergie.

## Session 61 — TS des props : pratique intensive (page blanche) + props optionnelles

**Durée** : ~3h (samedi, session longue). Séance de pratique réelle : le cours de la S60 mis à l'épreuve du code écrit soi-même.
**Thème** : reconstruction page blanche du typage de props, puis introduction des props optionnelles et des valeurs par défaut. Deux dettes du socle réactivées en cours de route.

**Révision éclair S61 (`reduce` accumulateur objet — dette 🔴 n°1 du registre, cassée S54 et S56)** :

- Sortie à froid **encore incomplète**, mais **net progrès mesuré** : bon outil (`reduce`), ordre `(acc, v)` juste, `{}` en 2ᵉ argument présent, et surtout **crochets dynamiques `acc[...]` sortis seuls** (c'était LE déblocage identifié en S56).
- 3 bugs restants : `acc[marque]` au lieu de `acc[v.marque]` (nom non déclaré) · `return acc[...] = ...` (une assignation vaut la valeur assignée, pas l'objet → le carnet n'est pas rendu, **même bug qu'en S54**) · filet `|| 0` placé APRÈS l'addition au lieu d'avant (`undefined + 1` = `NaN`).
- **🆕 Règle acquise** : dans un `reduce`, `return acc;` est **toujours** seul sur sa ligne, le travail se fait au-dessus. Repère à 3 mots : **filet, calcul, rendu**.
- Réécrit juste après le cours, correct.

**⚠️ RÈGLE DE MÉTHODE POSÉE PAR FRÉDÉRIC (à appliquer strictement)** :

> « Les énigmes/questions pour faire réfléchir : très bien, j'approuve à 100 %, c'est mieux pour l'apprentissage dans la majorité des cas. **Mais quand je bugge 3 fois sur la même chose, stop les énigmes → cours détaillé.** Sinon ça m'énerve. »
> Appliqué immédiatement (cours complet `reduce`), puis re-appliqué en S62. Bonne règle, elle rejoint le calibrage « l'effort est le signal ».

**Ce qui a été fait** :

_Bloc 1 — drill de signatures TS (mesure à froid, 24h après le cours) :_

- 3 signatures neuves (`livrerCommande`, `CarteMutuelle`, `calculerRemise`) : **mécanisme `({ ... }: XProps)` juste 3/3**, sans hésitation.
- **PascalCase corrigé sur les 3 interfaces** (erreur systématique la veille) → dette S60 soldée à froid.
- Distinction composant (PascalCase) / fonction (camelCase) : passée.
- 2 corrections : `payee: number` au lieu de `boolean` (erreur de lecture du contrat → **une interface fausse est pire qu'aucune interface**, elle donne une fausse sécurité) · suffixe `Props` mis sur des fonctions ordinaires → **règle posée : `XProps` = convention React uniquement ; une fonction ordinaire nomme son interface d'après la DONNÉE** (`Commande`, `Remise`) car c'est réutilisable.

_Bloc 2 — `CarteVerre` (page blanche, 1er jet) :_

- Interface + marche 3 + composant-page : écrits de mémoire, corrects.
- `toLocaleString("fr-FR")` **sorti de mémoire** (dette 🟠 du registre, dernière activation 10/06) → réactivée.
- Complété : **le 2ᵉ argument (objet d'options)** `{ style: "currency", currency: "EUR" }` → `259,00 €` avec symbole et décimales gérés automatiquement. Ne jamais écrire le `€` à la main (la position dépend de la locale).
- **🆕 Patron reconnu — l'objet d'options** : `fetch(url, {...})`, `new IntersectionObserver(cb, {...})`, `toLocaleString(locale, {...})` = **une convention JS**, pas 3 syntaxes. 1er argument = quoi, objet = comment.
- `ts(2739)` observé (props manquantes) — la famille « présence ».

_🆕 Cours — `<div>` / `<section>` / `<article>` :_

- Notion **jamais pratiquée** (vue une fois au bloc F le 12/06, notée 7/10, jamais écrite depuis). Cas d'école de dette type B.
- **Le test** : si je détache ce bloc et le colle ailleurs, garde-t-il son sens ? oui → `<article>` (carte produit, commentaire, fiche client). Partie thématique d'un tout, avec titre → `<section>`. Rien à déclarer, juste de la mise en page → `<div>`.
- Le HTML décrit du **sens**, pas de l'apparence : les 3 balises ont le même rendu. Publics concernés : lecteurs d'écran, moteurs de recherche, dev suivant.
- Par défaut `<div>` ; on « monte » quand le sens est là. Un `<article>` doit contenir un titre.

_🆕 Cours — props optionnelles + valeurs par défaut :_

- `champ?: type` dans l'interface → prop facultative. Contrepartie : le type devient `T | undefined`, TS refuse l'usage direct (`ts(18048)`), narrowing obligatoire.
- **3 façons de gérer** : rendu conditionnel `{x && <p/>}` · `{x ?? "défaut"}` · **valeur par défaut dans la déstructuration** `({ traitement = "aucun" })` → bouche le trou une fois à l'entrée, plus de `| undefined` dans le corps.
- **Carte des symboles** : `?` (interface) = peut être absent · `=` (déstructuration) = valeur si absent · `??` (corps) = filet ponctuel. `?` et `=` vont ensemble.
- Le défaut ne se déclenche que sur `undefined` (jamais sur `0`, `""`, `false`).
- 🎁 **Dette soldée** : « paramètres par défaut `f(x = 0)` » (🟠) — même mécanisme sur un paramètre simple.
- **Critère défaut vs conditionnel** : si l'absence doit _afficher autre chose_ → défaut. Si l'absence doit _faire disparaître_ → rendu conditionnel. (D'où : `traitement` a un défaut, `promo` non — « pas de promo » n'est pas une valeur, c'est rien à afficher.)

_Bloc 3 — `CarteMonture` v2 : LE gros blocage de la séance (~45 min)_

- Erreur : `Type 'Element' is not assignable to type 'number'. ts(2322)`
- Cause : `let prixVente = prix;` (TS infère `number`, définitivement) puis `prixVente = (<>...</>)` dans un `if` → on met du JSX dans une variable typée nombre.
- **🆕 Point de fond — une variable = un rôle = un type.** `prixVente` faisait deux métiers : une valeur (à calculer/formater) et un affichage (à rendre). D'où l'impossibilité d'appeler `.toLocaleString()` dessus. Même règle que la cohérence de type d'un state (S55), hors state.
- **Point majeur observé** : erreur rouge ET l'app tourne. **Vite transpile, ne vérifie pas** — démonstration en direct que TS n'a aucun pouvoir à l'exécution.
- 2ᵉ bug : `<p>{prixVente}</p>;` dans un `else`, sans `return` ni affectation → objet JSX fabriqué puis jeté. **Écrire du JSX ne l'affiche pas.**
- Règle structurelle donnée : **le `if` est une instruction (agit, ne vaut rien) → interdit dans du JSX ; le ternaire est une expression (vaut quelque chose) → autorisé.**
- Correction complète livrée à sa demande explicite : plus de variable intermédiaire, calcul inline dans le ternaire, `formatEuro` sortie en fonction utilitaire hors du composant.

**Niveau estimé après session** :

- **Signature TS `({ a, b }: XProps)`** : 🟢 — 3/3 à froid + reconstruite en page blanche. Le geste est acquis.
- **PascalCase sur les types** : 🟢 (corrigé seul à froid).
- **Nommage `XProps` vs nom de donnée** : 🟡 neuf.
- **Props optionnelles `?` + défaut `=`** : 🟡 cours reçu + 1 application guidée.
- **Critère défaut / rendu conditionnel** : 🟡 compris.
- **`<article>` / `<section>` / `<div>`** : 🟡 enfin pratiqué.
- **`toLocaleString` + objet d'options** : 🟡 réactivé (dette du registre).
- **Une variable = un type** : 🟡 ancré par un vrai blocage de 45 min (le meilleur ancrage).
- **`reduce` objet** : 🟡 progrès net (crochets acquis), assemblage encore fragile → reste en rotation.

**⚠️ Erreur de ma part** : diagnostic livré en 3 hypothèses sur `prixVente` **sans avoir le code sous les yeux** — les 3 étaient fausses. Règle S58 : quand je n'ai pas la source, le dire au lieu de produire des pistes plausibles.

---

## Session 62 — Reconstruction page blanche + rendu conditionnel (`&&` vs ternaire)

**Durée** : ~2h (dimanche). Bilan d'ouverture posé par Frédéric : « il faut encore de la pratique » — séance 100 % reconstruction, aucun concept neuf avant la fin.

**Révision éclair S62 (`slice(0, currentMove + 1)` — 2ᵉ échec à froid)** :

- Réponse : `setHistory(...history, currentMove + 1)`. Les **pièces** sont là (setter, spread, `+1`), l'**assemblage** non : pas de `slice`, pas de crochets `[ ]`, spread dans un appel de fonction au lieu d'un tableau, et le nouveau plateau absent.
- Règle des 2 échecs appliquée → cours complet donné.
- **🆕 Distinction posée (jamais faite avant)** : `[...tab, x]` = spread dans un **tableau** (construit un tableau) ≠ `f(...tab)` = spread dans un **appel** (étale en arguments séparés).
- Le `+1` : **il appartient au `slice`, pas à `currentMove`** — il compense uniquement la borne de fin exclue. `currentMove` EST l'index. Formule générale : **pour inclure l'index `n`, écrire `slice(0, n + 1)`**.

**🗑️ DÉCISION DE FRÉDÉRIC — Tic-Tac-Toe retiré définitivement** : exercice jugé sans intérêt, à ne plus jamais proposer. Retiré de la rotation et du suivi. `slice(0, n)` reste une notion à entretenir mais **dans un contexte neutre** (pagination, « les N derniers », troncature), jamais via ce tuto.

**Ce qui a été fait** :

_Bloc 2 — `CarteMonture` v2 reconstruite page blanche (24h après la correction reçue) :_

- **Sortis seuls** : `?` dans l'interface (pas dans la déstructuration) · `traitement = "aucun"` dans la signature · `formatEuro` hors du composant, paramètre annoté · **ternaire dans le JSX** (le point qui avait cassé la veille) · fragment `<>` pour grouper la branche promo · `<article>` · calcul de remise juste.
- **0 problems**, affichage correct. Seul doute signalé : la syntaxe de `toLocaleString`.
- Réponse donnée : **personne ne l'écrit de mémoire** — c'est précisément le rôle d'une fonction utilitaire. **Une fonction utilitaire = un endroit où ranger ce qu'on refuse de mémoriser.**
- Confirmé : `{formatEuro(prix)}` directement dans le JSX est correct — les accolades acceptent toute **expression**, et un appel de fonction en est une. Piège associé : `{formatEuro}` (sans parenthèses) injecte la fonction elle-même.

_Refactor — fonction utilitaire externalisée :_

- Créé `src/utils/format.ts` avec `export function formatEuro`. **Extension `.ts` et non `.tsx`** : aucun JSX dedans.
- **Export nommé** (pas `default`) : un fichier utilitaire contient souvent plusieurs fonctions.
- **🆕 Règle pro donnée — dossiers en minuscules, en anglais** (`utils/`, pas `Utilitaires/`) : Windows ignore la casse, **Linux non**, et Vercel construit sous Linux → un import à la mauvaise casse marche en local et casse au déploiement (`Cannot find module`). Enjeu réel pour le livrable Phase 2.

_Bloc 3 — `FicheDevis` (page blanche, contexte neuf) — LE cœur de la séance :_

- Interface + marche 3 + `import { formatEuro }` : posés seuls.
- **Blocage principal, bien diagnostiqué par Frédéric lui-même** : « mutuelle vaut soit une string soit "aucune", donc le système du ternaire ne fonctionne pas ». Exact — **une prop qui a une valeur par défaut ne peut plus jamais être testée pour son absence** (le défaut bouche le trou avant le test). Défaut et rendu conditionnel sont **exclusifs**.
- Bug visible : `RAC : NaN €` (montant × `undefined`, coercion).
- **🆕 Règle centrale ancrée — le narrowing ne protège que la variable testée.** Tester `mutuelle` ne dit rien à TS sur `tauxRmb` → `ts(18048) 'tauxRmb' is possibly 'undefined'`. TS a raison : rien dans l'interface ne lie les deux props, `<FicheDevis mutuelle="X" />` sans taux est autorisé par le contrat. **On teste la variable qu'on utilise.**
- Contournement trouvé seul (`mutuelle !== "aucune"`) puis abandonné après démonstration du cas « Paul » (mutuelle sans taux → `NaN` de retour) + fragilité du texte-sentinelle.
- Structure finale : **une ligne = une condition = sa propre donnée**. Prix TTC (aucune condition) · Mutuelle (`mutuelle !== "aucune"`) · taux + RAC (`tauxRmb &&`).

_🆕 Cours — `&&` vs ternaire en JSX (demande explicite de Frédéric) :_

- Les accolades JSX attendent **une valeur** → pas de `if`. Deux outils seulement.
- **Ternaire = 2 branches obligatoires.** Quand il n'y a rien à afficher en branche 2 : **`null`** (façon officielle de dire « ne rends rien »).
- **`cond && <p/>` est strictement l'écriture compressée de `cond ? <p/> : null`.**
- **Point qui a fait tilt — `&&` ne renvoie pas un booléen, il renvoie une des deux opérandes** : gauche falsy → renvoie la gauche et s'arrête ; sinon → renvoie la droite. C'est l'**évaluation court-circuit**. Le « et » logique est le _résultat_, pas le _mécanisme_. Frédéric croyait `&&` = booléen pur (« je croyais que && voulait dire et ») → clarifié, et ça a débloqué la compréhension du pattern JSX.
- Même logique pour `||` → d'où son usage en valeur par défaut (`(acc[x] || 0) + 1`).
- React n'affiche rien pour `false`, `null`, `undefined` — **mais affiche `0` et `""`**. Piège réel : `{tauxRmb && ...}` avec un taux à 0 % afficherait un `0` parasite. Parade : `{tauxRmb !== undefined && ...}`.
- Choix : afficher A **ou** B → ternaire · afficher A **ou rien** → `&&`.
- Refactor final appliqué : `urgent` gardé en `&&` (rien à afficher sinon), blocs mutuelle et taux séparés, Prix TTC sorti de toute condition.

**Niveau estimé après session** :

- **TS des props (interface + marche 3 + optionnelles + défaut)** : 🟢 — **deux reconstructions page blanche réussies en contextes différents**, la seconde sans aucune référence. Le cap prioritaire ouvert depuis la S44 est franchi.
- **Rendu conditionnel `&&` / ternaire / `null`** : 🟡→🟢 — mécanisme du court-circuit compris en profondeur, appliqué et refactoré seul.
- **Narrowing : tester la variable qu'on utilise** : 🟡 neuf, ancré par un vrai bug.
- **Défaut et rendu conditionnel sont exclusifs** : 🟢 — diagnostiqué seul.
- **Fonction utilitaire externalisée (`utils/format.ts`, export nommé, `.ts` vs `.tsx`)** : 🟢.
- **`slice(0, n + 1)`** : 🔴 → **retiré de la rotation sous cette forme** (voir décision Tic-Tac-Toe). À recroiser dans un contexte neutre.
- Recalibrage : deux reconstructions page blanche en 2h, un diagnostic de bug posé seul avant moi (le conflit défaut/ternaire), et une règle de méthode formulée clairement. Se sous-note toujours.

**📌 RÈGLE DE COMMUNICATION POSÉE PAR FRÉDÉRIC (importante, à appliquer strictement)** :

> « Je ne souhaite pas discuter en abrégé, je veux du détail, de la précision et des explications complètes. **MAIS pas de blabla à côté.** L'essentiel, mais complet et détaillé. »
> Ce qu'il faut **garder** : le cours complet, le pourquoi, la forme longue avant la version compressée, les exemples concrets numérotés.
> Ce qu'il faut **couper** : les renvois systématiques aux sessions passées (« comme en S41, exercice 5 »), les félicitations détaillées et tableaux de progression, les récapitulatifs de ce qu'il vient de bien faire, l'empilement de remarques secondaires après la réponse principale.
> **Le problème n'est pas la longueur, c'est le ratio.** Une réponse = un sujet. Les renvois aux sessions passées uniquement quand le lien change la compréhension du problème.

**Restes / dettes (mises à jour)** :

- ✅ **Dette « TS des props » SOLDÉE** — ouverte en S44, cours S58/S60, pratiquée S60→S62, deux page blanche réussies. Passe en mode entretien.
- ✅ Soldé aussi : paramètres par défaut (🟠) · `<article>`/`<section>`/`<div>` pratiqué · `toLocaleString` réactivé (🟠) · script `typecheck` (à vérifier s'il a été ajouté).
- 🗑️ **Retiré définitivement** : Tic-Tac-Toe (décision Frédéric).
- 📌 **Commiter + pusher** S61 + S62.
- ⏭️ **Non fait, reporté** : **props tableau typé (`Monture[]`)** + interface imbriquée + `.map()` typé — c'était le bloc 4 des deux séances, jamais atteint. **C'est le prochain cap.** Puis : typer une **prop fonction** (`onSupprimer: (id: string) => void`, neuf, cours avant exercice).
- Poches à ré-entretenir : `reduce` objet 🟡 (progrès net, assemblage à confirmer) · `slice(0, n)` en contexte neutre · échelle Tailwind 🟡 · fetch POST/`Content-Type` 🟡 · `Object.values`/`for...in` 🟡 · nommage `XProps` vs donnée 🟡.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · **coercion/hoisting** (croisée 2× ce week-end via `NaN`) · event loop · dates · regex.
- Tier 2 non urgent : `this` · POO/classes.

**🎹 Raccourci de la semaine** : `F12` / `Alt+←` — **toujours pas entraîné, 5 séances**. À forcer : maintenant qu'il y a un `import` depuis `utils/format`, `F12` fait changer de fichier, c'est le cas d'usage idéal.

**➡️ Prochaine session** : **props tableau typé** — `montures: Monture[]` en prop, interface imbriquée, `.map()` typé. C'est le passage des données écrites à la main dans le JSX à une vraie liste. Puis prop fonction si l'énergie tient. Ouvrir en vérifiant l'énergie.

## Session 63 — Props tableau typé : `Monture[]`, interface imbriquée, `.map()` typé

**Durée** : ~2h (énergie bonne). Cap tenu : le bloc 4 reporté 3 fois est traité.
**Logistique** : commit/push S61-S62 faits sur les deux machines. ✅

**🎹 Raccourci** : `F12`/`Alt+←` était marqué « non entraîné » à tort — pratiqué quotidiennement, je ne l'avais jamais demandé. → **Toujours demander avant de reconduire.** Nouveau : **`Ctrl+.` (Quick Fix)**, sur AZERTY = `Ctrl+Shift+;`. Testé en séance.

**Révision éclair S63 (`IntersectionObserver` — dette S57, dernière activation S30, ~7 semaines)** :

- Les 3 étapes restituées justes de mémoire (callback, `new IntersectionObserver()`, `.observe()`), avec `isIntersecting` et `target`.
- **Erreur unique** : le callback reçoit un **tableau d'entrées**, pas l'élément. Une entrée décrit l'élément, elle ne le remplace pas → `entries.forEach(...)` obligatoire même avec un seul élément observé.
- Complément : 2ᵉ argument = objet d'options (`{ threshold: 0.5 }`).
- → 🟡, moins lourde que prévu. Reste en rotation.

**Ce qui a été fait** :

- **Cours props tableau** : `[]` derrière un type = « des » ; une interface est un type comme un autre. **Deux interfaces, deux rôles** : `Monture` = la donnée (réutilisable partout) / `ListeMonturesProps` = le contrat d'un composant (jamais réutilisé).
- **Exo 1 (guidé, 1 trou)** : `montures: Monture[]` juste.
- **Test d'erreur A** : `ts(2551)` sur `m.marqu` — le typage du tableau remonte jusque dans le `.map()`. **Piège du Quick Fix ancré** : les 3 propositions font disparaître le rouge, mais deux modifient le **contrat** au lieu de réparer l'**usage** (« Add index signature » désactive la vérification). → lire avant de valider.
- **Test B non joué** (donnée invalide) : à rejouer. Le rouge se pose au **point de raccordement** (`montures={CATALOGUE}`), pas sur le tableau.
- **Exo 2 — `ListeClients` (page blanche, interface imbriquée)** : ✅ les deux interfaces de données sorties seules, dont `mutuelle?: Mutuelle`. ❌ Trois blocages (détaillés ci-dessous).
- **Fin de séance** : `{" "}` (JSX supprime les espaces en début/fin de ligne) et narrowing via `&&` confirmé en situation (accès sans `?.`, aucun rouge).

**Les 3 points cassés en page blanche (= le programme de demain)** :

1. **Nommage de l'interface de props** : `interface Clients[]` écrit 2×. `[]` est un opérateur de type, jamais un caractère de nom → uniquement à **droite** d'un `:`. Règle : nom du composant + `Props` ; **type au singulier, variable au pluriel** (`clients: Client[]`).
2. **`CLIENTS.map` au lieu de `clients.map`** — persisté après signalement. Bug invisible à l'écran mais le composant est soudé à une seule liste. **Tout entre par les props.**
3. **`&&` + fragment** : `&&` n'a qu'une opérande à droite → emballer les 4 morceaux dans `<>...</>`. Correction donnée en entier.

**Question de fond traitée** : `function` / `interface` / `class` — c'est le **mot-clé** qui décide, la casse indique seulement la famille. Une interface ne reçoit rien, n'existe pas à l'exécution. Le nombre de props se compte aux **clés**, pas aux éléments (200 montures = 1 prop).

**Organisation actée** : un fichier = un exercice (composant + page de démo). La règle pro « 1 fichier = 1 composant » s'appliquera au SaaS.

**Niveau estimé après session** :

- **Interface imbriquée (`mutuelle?: Mutuelle`)** : 🟢 sortie seule.
- **Type tableau dans une interface de props** : 🟡 — juste en guidé, cassé 2× en page blanche. ⚠️ Ne pas surévaluer.
- **Lire depuis la prop, pas la constante globale** : 🔴 à recroiser en priorité.
- **`&&` + fragment** : 🟡 neuf sous cette forme · **narrowing via `&&`** : 🟢 · **`{" "}`** : 🟡 · **piège Quick Fix** : 🟢.
- Calibrage de Frédéric en clôture (« il faudra 1-2 pages blanches de plus ») : juste, c'est le plan.

**⚠️ Erreurs de ma part** : question de vérification posée sur une interface sans le composant sous les yeux (confusion légitime) · raccourci reconduit 5 séances sans vérification.

**Restes / dettes** :

- ⏭️ Reporté : **prop fonction** (`onSupprimer: (id: string) => void`, neuf, cours avant exo) · test B à rejouer · script `"typecheck"` toujours non vérifié.
- 📌 Commiter + pusher S63.
- Poches : `IntersectionObserver` 🟡 (mesurée ce jour) · `reduce` objet 🟡 · `Object.values`/`for...in` 🟡 · échelle Tailwind 🟡 · fetch POST 🟡 · nommage `XProps` 🟡 · `slice(0, n)` en contexte neutre.
- `Promise.all` en composant complet · audit « exercice type » · Tier 2 : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.

**🗑️ Instructions (§7)** : TypeScript → ajouter props tableau typé + interface imbriquée (🟡). React → `.map()` typé et `&&` + fragment croisés.

**➡️ Prochaine session** : **1 à 2 pages blanches sur les props tableau typé**, contextes neufs, ciblées sur les 3 points cassés. Puis cours **prop fonction** si l'ancrage est là. Vérifier l'énergie en ouverture.

## Session 64 — Prop fonction typée (`(id: string) => void`) + consolidation prop tableau

**Durée** : ~2h30 (énergie bonne). Cap **TS des props fermé** : valeurs simples → optionnelles → tableau → imbriquée → fonction.
**Logistique** : S63 commitée ✅. 🎹 `Ctrl+.` (Quick Fix) : entraîné depuis hier, on continue.

**Révision éclair S64 (`position: fixed` + contexte parent — dette S57, dernière activation S29, ~2 mois, notée 65 %)** :

- **Symptôme retenu** ✅ (un `transform` sur le parent fait scroller l'élément), **mécanisme inversé** ❌ : « fixed se positionne par rapport à son parent » → **non, par rapport au viewport**. C'est `absolute` qui vise l'ancêtre positionné.
- Ce que fait le `transform` : il crée un nouveau bloc conteneur qui **capture** les descendants `fixed` → l'élément se comporte comme un `absolute` et défile. Déclencheurs : `transform`, `filter`, `perspective`, **`backdrop-filter`**, `will-change`, `contain`.
- ⚠️ Alerte : `backdrop-filter` = glassmorphism → navbar en verre dépoli + élément fixed dedans = le bug. Parade : sortir l'élément fixe du parent transformé (enfant direct de `<body>` / racine de l'app).
- → 🟡, reste en rotation.

**Ce qui a été fait** :

_Exo 1 — `ListeCommandes` (page blanche, reprise des 3 points cassés en S63)_ :

- ✅ **Les trois points sont corrigés** : nommage `ListeCommandesProps` + singulier/pluriel, `.map()` branché sur la prop et non la constante, `&&` + fragment assemblés seuls. Interface imbriquée sortie seule.
- Seul défaut : `key` oubliée sur le `<li>` (étourderie, présente la veille). **Réflexe à installer : la `key` s'écrit dans la foulée du `.map()`, avant le contenu.**
- Nommage : `Urgent` (adjectif) → `Urgence`. Une interface décrit une chose, elle porte un nom, pas une qualité.

_Cours — prop fonction_ :

- Mécanisme déjà connu (S46, `onPlay` du Tic-Tac-Toe : « l'enfant signale, le parent détient et décide »). Le neuf = **le décrire dans une interface**.
- Syntaxe : `onSupprimer: (id: string) => void` = « prend une chaîne, ne renvoie rien ». Le nom du paramètre ne fait **pas** partie du contrat (seuls le nombre d'arguments et leurs types) — il documente.
- `void` = la fonction agit, ne calcule pas. Cas de la quasi-totalité des handlers. Sinon `=> number`, `=> boolean`.
- **⚠️ Piège central — deux `=>` sans rapport** : dans une `interface`, il **décrit** (sépare ce qu'elle prend de ce qu'elle rend, rien ne s'exécute) ; dans du code, il **fabrique** une fonction. Boussole : suis-je entre les accolades d'une `interface` ? Même famille que la boussole du `:`.
- Branchement JSX : `onClick={() => onSupprimer(m.id)}` — flèche inline obligatoire pour transporter l'argument (S44).

_Exo 2 — `ListePrestations` (guidé, 2 trous)_ : signature et branchement justes du premier coup.

_🎓 Question de fond posée par Frédéric — pourquoi la fonction vit dans le composant-page_ :

- **Elle ne peut pas en sortir** : elle utilise `lignes` et `setLignes`, créés par `useState` **dans** le composant. Scope Phase 1 : l'intérieur voit l'extérieur, jamais l'inverse. (Même lien qu'il avait fait seul en S46 sur `setHistory`.) `formatEuro` a pu sortir dans `utils/` justement parce qu'elle ne touche à aucun state.
- **L'intérêt** : l'enfant ignore qu'un state existe et ce que fait `onRetirer` → le même composant sert dans un devis (retire), un back-office (archive en base), une démo (ne fait rien). Le parent décide **quoi faire**, l'enfant **comment afficher**. C'est ce qui rend un composant déplaçable et réutilisable — le typage écrit le contrat de ce signal.

_Exo 3 — `ListeStock` (page blanche, prop fonction à DEUX arguments)_ :

- ✅ Sortis seuls : interface de la prop fonction `(id: string, x: number) => void`, branchement des deux boutons avec `-1` / `+1`, structure du ternaire, principe de la copie non mutante.
- 🔴 **Blocage n°1 — la fonction du parent faisait le mauvais métier** : `return liste.map(...)` puis `setListe(quantite)` posé dans le corps. Recadrage : le contrat dit `void` → **le setter va DANS la fonction, le `return` disparaît**. (Le `setListe(...)` dans le corps = boucle infinie à chaque rendu.)
- 🔴 **Blocage n°2 — les branches du `.map()`** : `o.stock + x` (un nombre) et `null` en branche faux. Un `.map()` sur des références doit rendre **des références** — même longueur, même forme. Branche vraie = copie + surcharge, branche fausse = l'objet tel quel.
- 🔴 **Blocage n°3 — syntaxe de la surcharge** : `{...o, (o["stock"] + x)}` → un objet littéral ne contient **que des paires `clé: valeur`**. Correct : `{ ...o, stock: o.stock + x }`. Crochets rappelés : réservés à une clé **dans une variable**, pas à une clé fixe.

_Micro-drill signatures (3, hors composant)_ : **3/3 justes**, y compris `onCalculerRAC: (montant: number, taux: number) => number` (celui qui changeait de forme).

_Exo 4 — `ListeSav` (page blanche, fin de séance)_ :

- ✅ **La fonction du parent est ressortie seule** (setter dedans, `.map()` + spread) — le morceau bloqué 20 min plus tôt.
- ❌ **Argument superflu** : `(id, traite)` alors que la fonction lit `!l.traite` dans l'objet. **Règle : une fonction ne demande que ce qu'elle ne peut pas trouver seule.** (Différent de l'exo 3, où `x` portait l'info « quel bouton ».) + ordre inversé à l'appel.
- ❌ **Condition inversée** : `{s.traite && <button>}` → aucun bouton au départ. `{!s.traite && ...}`.
- ❌ Affichage manquant → **ternaire** ici, pas `&&` : deux branches à afficher (`✓ traité` OU le bouton). Critère S62 respecté.
- Nommage : `interface sav` → `Sav` (PascalCase) · `function retirer` → `marquerTraite` (reste de copie) · `exportListe` → PascalCase pour un composant (seul endroit où la casse a un effet technique).

**Niveau estimé après session** :

- **Prop tableau typé + interface imbriquée** : 🟡→🟢 — les 3 points cassés en S63 corrigés en page blanche, contexte neuf.
- **Signature de prop fonction** : 🟢 — 3/3 au drill, sortie seule sur 2 exercices dont un à deux arguments.
- **Piège des deux `=>`** : 🟡 compris, à recroiser.
- **Fonction de mise à jour dans le parent (setter dedans, `.map()` + spread)** : 🟡 — bloquée en exo 3, ressortie seule en exo 4. Ce n'est pas du TS mais du React de la S41, revenu fragile. **À recroiser en priorité.**
- **Choix des arguments d'un handler** : 🟡 neuf, ancré par l'erreur de l'exo 4.
- **`key` dans le `.map()`** : 🔴 oubliée 1× — réflexe à réinstaller.
- **`position: fixed`** : 🟡 (voir révision éclair).
- Recalibrage : sur l'exo 3, le mécanisme du jour (prop fonction) est sorti seul ; les déblocages portaient sur du React ancien et de la syntaxe d'objet.

**📊 Bilan dettes depuis le registre S57 (demandé par Frédéric)** :

- **Type A soldées : 2** — Tailwind dans Vite (S59) · paramètres par défaut (S61).
- **Les 6 séances dédiées du plan : aucune faite** (CSS Grid, `@keyframes`, a11y, coercion/hoisting, event loop, `this`/classes). Normal : 7 séances absorbées par le cap TS des props.
- **La partie « en continu » fonctionne** : 6 dettes type B mesurées en révision éclair depuis S57 (fetch POST, `Object.values`/`for...in`, `reduce` objet, `slice(0,n)`, `IntersectionObserver`, `position: fixed`). C'est le mécanisme que le registre désignait comme prioritaire.
- **Recommandation** : le cap TS étant fermé, la **salve micro-notions** (~1h, solde ~10 lignes : `switch`, `sort()`, `Map`, `rem`/`px`, `::before`, `break`/`continue`, `use strict`) est le meilleur rapport temps/dette. Candidate pour une prochaine séance.

**Restes / dettes** :

- ✅ **Cap « TS des props » entièrement fermé** (ouvert S44). Passe en mode entretien.
- 📌 Commiter + pusher S64. · Script `"typecheck": "tsc --noEmit"` toujours non vérifié. · Test B (donnée invalide au point de raccordement) toujours à rejouer.
- Poches : `.map()` + spread de mise à jour 🟡 (neuf du jour) · `position: fixed` 🟡 · `IntersectionObserver` 🟡 · `reduce` objet 🟡 · `Object.values`/`for...in` 🟡 · échelle Tailwind 🟡 · fetch POST 🟡 · `slice(0, n)` en contexte neutre.
- `Promise.all` en composant complet · audit « exercice type » · Tier 2 : `this` · POO/classes.
- Gros trous du socle (S57) : CSS Grid + `@keyframes` · a11y · coercion/hoisting · event loop · dates · regex.

**🗑️ Instructions (§7)** : TypeScript → props tableau, interface imbriquée et **prop fonction** croisés (🟢 signature, 🟡 assemblage). React → lifting state up recroisé

## Session 65 — Salve micro-notions (séance 1 du plan S57 soldée)

**Durée** : ~2h30, énergie bonne. Première séance de remboursement du socle depuis S57, rendue possible par la clôture de TS des props en S64.

**Révision éclair S65 (`slice`/`splice`)** : 3/3 juste de mémoire. Complété : `splice` renvoie les éléments **retirés**, pas le tableau modifié. → 🟢, sort de la rotation.

**⚠️ Erreur de ma part — logistique** : j'ai redemandé commit/push et script `typecheck` alors que les deux étaient faits. Cause : les lignes « 📌 Commiter + pusher » sont écrites _avant_ l'action et rien ne les corrige ensuite ; je les relis comme un constat. Même schéma que `F12` reconduit 5 séances. **Correctif : demander avant de reconduire un item, jamais le déduire d'une ligne de todo.** Les deux items sortent de la liste.

**⚠️ Erreur de dosage (récurrence §9)** : sur `sort()` puis sur `Map`, plusieurs nouveautés empilées en un message + exercice combinant du neuf. Frédéric a stoppé net sur `Map` (« je ne comprends rien, j'ai arrêté de lire ») — arrêt justifié. Reprise à zéro sur les 4 structures de données, qui a été le vrai contenu utile de la séance.

**Les 8 notions de la salve — statuts** :

- **`sort()`** 🟡 — comparateur, signe, mutation, `localeCompare`, sur objets. 3 passes pour y arriver (blocage : `sort(a.prix, b.prix)` sans la flèche). **À pratiquer pour mémoriser.**
- **`switch`** 🟡 — piège du `break` (fall-through) compris. **À repratiquer.**
- **`break`/`continue`** 🟢.
- **Structures de données** (déviation demandée) : `Set` 🟢 rafraîchi · `Object.keys/values/entries` 🟢 rafraîchi · **`Map` 🟢 en lecture seule uniquement** — intérêt réel quasi nul pour lui, dit franchement (state React finit en JSON). Rapprochement `set`/`get` ↔ `localStorage` fait spontanément par Frédéric, exact.
- **`rem`/`px`** 🟢 — **poche « échelle Tailwind » S59 fermée** (1 unité = 0.25rem = 4px, `py-4` = 16px).
- **`::before`/`::after`** 🟢 — déblocage : `content: ""` sert à fabriquer une **boîte**, pas à afficher du texte.
- **`use strict`** 🟢 — dette soldée par le fait que les modules ES sont déjà stricts.
- **`data-*`** — **ni acquis ni dette**, sorti du registre à sa demande. Revu si le contexte le ramène.

**Reclassement** : `switch` et `break`/`continue` étaient notés type A (jamais vu) → en réalité déjà croisés (article, Python). Le registre ne voit que ce qu'on fait ensemble.

**Niveau / recalibrage** : a stoppé au bon moment plutôt que de subir, et ses questions ont produit le meilleur contenu du jour (à quoi sert un tri · d'où sortent `set`/`get` · pourquoi `content: ""`).

**Restes / dettes** :

- ✅ **Séance 1 du plan S57 soldée** — 8 lignes retirées du registre.
- 🆕 **`slice(0, n)` a enfin un contexte neutre** : `sort()` + `slice(0, 3)` = « top N ». Remplace définitivement le Tic-Tac-Toe.
- 🔄 Rotation révision éclair : `sort()` 🟡 · `switch` 🟡 · `reduce` objet 🟡 · `Object.values`/`for...in` 🟡 · `IntersectionObserver` 🟡 · `position: fixed` 🟡 · fetch POST 🟡.
- ✅ Sortis de la rotation : `slice`/`splice` · `rem`/`px` · échelle Tailwind.
- ⏭️ **Reporté** : recroiser la **fonction de mise à jour dans le parent** (`setListe(liste.map(o => o.id === id ? {...o, champ} : o))`) — poche prioritaire S64, absorbée par la déviation du jour.
- Plan S57 restant : projet CSS Grid (~3h) · coercion/hoisting · a11y · event loop · dates · regex · `this`/classes (avant Phase 3).
- `Promise.all` en composant complet · audit « exercice type ».

**🎹 Raccourci** : `Ctrl+.` — encore une séance et c'est acquis.

**🗑️ Instructions (§7)** : JS → retirer `sort()` de « pas abordé » (🟡), ajouter `switch`, `break`/`continue`, `Map` (lecture), `data-*` (croisé). CSS → retirer `rem`/`px` et `::before`/`::after` de « pas abordé ». Tailwind → échelle 🟢.

**➡️ Prochaine session** : recroiser la fonction de mise à jour dans le parent (page blanche courte), puis reprise du fil Phase 2 — **React Router**. Vérifier l'énergie.
