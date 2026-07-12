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
