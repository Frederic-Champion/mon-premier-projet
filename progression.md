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
