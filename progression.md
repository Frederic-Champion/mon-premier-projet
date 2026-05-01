# 📋 Progression de Frédéric Champion — Formation Dev Fullstack + IA

## 🗺️ Roadmap définie — 3 phases sur 9 mois

### Phase 1 (Mois 1-3) — Socle Web (~180h)
HTML, CSS, Tailwind, JavaScript ES6+, FastAPI, Git/GitHub

### Phase 2 (Mois 4-6) — Fullstack React (~210h)
React, Next.js 14+, PostgreSQL, Prisma, Supabase, NextAuth.js

### Phase 3 (Mois 7-9) — IA & Portfolio (~195h)
OpenAI API, Anthropic API, TypeScript (base), 3 projets déployés

### Après 9 mois (Mois 10+)
React Native, TypeScript avancé, Tests, Docker, RAG/LangChain, GraphQL

---

## 💡 Qualités observées chez Frédéric
- **Curieux et analytique** : pose toujours des questions de compréhension avant d'avancer
- **Bonne intuition** : fait le lien Python → CSS/JS spontanément
- **Honnête sur ses lacunes** : n'hésite pas à dire quand il ne comprend pas
- **Expérimentation** : teste des choses par lui-même sans qu'on lui demande (ex: hover avec font-size)
- **Rigueur** : veut comprendre chaque symbole (`:root`, `@media`, `--variable`, `.classe`)

---

## 📌 Méthode de travail avec Claude
- Claude joue le rôle de **mentor / pair programmer**
- Frédéric envoie des screenshots pour montrer son écran
- Claude explique chaque concept **avant ou après** le code, pas juste le code
- Les exercices en autonomie sont privilégiés pour ancrer la mémorisation
- Format : cours + explication + exercice seul + correction

---

## 🛠️ Environnement installé et configuré
- **OS** : Windows 11 (utilisateur : fred_)
- **Python** : 3.14 ✅
- **Node.js** : 24.15.0 ✅
- **Git** : 2.54.0 ✅
- **VS Code** : installé et configuré ✅
- **Extensions VS Code installées** :
  - Python (Microsoft)
  - Prettier (formatage auto)
  - GitLens (visualisation Git)
  - Tailwind CSS IntelliSense
  - Live Server (Ritwick Dey) ✅

---

## 📁 Projet actuel : `mon-premier-projet`
- **Repo GitHub** : public, créé et configuré ✅
- **Fichiers** :
  - `index.html` — page de présentation personnelle
  - `style.css` — styles complets
  - `script.js` — début JavaScript
  - `README.md` — mis à jour
  - `progression.md` — ce fichier

---

## ✅ Concepts maîtrisés

### Git & GitHub (à approfondir)
- `git clone` — récupérer un repo
- `git add .` — préparer les fichiers
- `git commit -m "message"` — sauvegarder une version
- `git push` — envoyer sur GitHub
- Configuration identité (`user.name`, `user.email`)
- Comprend la différence Git (local) vs GitHub (distant)

### HTML (à approfondir)
- Structure de base : `<!DOCTYPE>`, `<html>`, `<head>`, `<body>`
- Balises sémantiques : `<header>`, `<nav>`, `<section>`, `<footer>`
- Balises de contenu : `<h1>`-`<h2>`, `<p>`, `<ul>`, `<li>`, `<div>`, `<a>`
- Attributs : `href`, `class`, `src`
- Liaison CSS (`<link rel="stylesheet">`) et JS (`<script src="">`)
- Sélecteurs descendants : `nav a`

### CSS (à approfondir)
- Propriétés de base : `color`, `background-color`, `font-size`, `font-family`
- Box model : `margin` vs `padding` (différence bien comprise)
- `border` et ses variantes : `border-top`, `border-bottom`, `solid`, `dashed`, `dotted`
- `max-width`, `text-align`, `line-height`
- Classes CSS avec `.` — bien compris
- Sélecteurs : balise, classe (`.`), descendant (`nav a`)
- **Flexbox** : `display: flex`, `gap`, `flex: 1`, `flex-direction`, `align-items`
- **Pseudo-classes** : `:hover`, `:root` — différence avec sélecteurs normaux comprise
- **Transitions** : `transition: color 0.3s` — logique état départ/arrivée comprise
- **Transform** : `translateY(-5px)` — effet de survol sur les cartes
- **Variables CSS** : `:root { --couleur: #e94560 }` et `var(--couleur)` — analogie Python bien faite
- **Media queries** : `@media (max-width: 600px)` — responsive mobile
- `display: block` vs `display: flex` vs `display: inline` — compris
- Conventions de nommage : kebab-case en CSS vs snake_case Python vs camelCase JS

### Outils (à approfondir)
- **Live Server** : comprend l'intérêt du rechargement automatique
- **Console Chrome (DevTools)** : sait l'ouvrir avec F12, naviguer entre les onglets
- **`console.log()`** : équivalent de `print()` en Python — compris

### JavaScript (début)
- `console.log()` — afficher dans la console
- Variables avec `let` — analogie avec Python faite
- Liaison du fichier JS au HTML avec `<script src="script.js">`

---

## ⚠️ Concepts moins maîtrisés / à consolider

### Syntaxe générale
- Encore en phase de "recopier sans comprendre" sur certains points
- La mémorisation de la syntaxe CSS demande plus de pratique répétée
- Confond parfois les propriétés : ex `transform` au lieu de `color` dans hover

### CSS
- Pas encore totalement autonome pour écrire du CSS from scratch
- `transition` : comprend la logique mais syntaxe pas encore instinctive
- `@media` et responsive : concept compris mais nécessite plus de pratique
- Différence `block` / `flex` / `inline` : compris en théorie, pas encore instinctif

### JavaScript
- À peine commencé — variables vues mais pas encore pratiquées
- Beaucoup à apprendre : fonctions, DOM, événements, fetch, etc.

### VS Code
- Fonctionnement général pas encore totalement naturel
- Comprend les bases mais pas encore à l'aise avec tous les raccourcis

---

## 📚 Ressources recommandées (pas encore utilisées)
- The Odin Project
- roadmap.sh
- Full Stack Open (Université Helsinki — gratuit)
- Anthropic Cookbook (pour la partie IA plus tard)

---

Mise à jour : ajout ~8h:
session 8 à 11 :
🔵 DÉCOUVERT — vu pour la première fois
Formulaires HTML

Structure <form>, <label>, <input>, <textarea>, <button>
Attributs for, id, placeholder, type
Différence type="submit" vs type="button"
<meta name="viewport"> — indispensable pour le responsive

CSS avancé

box-sizing: border-box et sélecteur universel *
Pseudo-classe :focus
box-shadow avec rgba
display: grid, grid-template-columns, repeat(), unité fr
grid-column: span, grid-column: 1 / -1
grid-row: span
Media queries @media (max-width: ...)

Concepts

<span> inline vs <div> bloc
<div> vs <section> vs balises sémantiques
Attribut alt sur les images
Les 3 façons d'écrire du CSS (externe, interne, inline)
<link rel="stylesheet" href=""> et chemins relatifs
Emojis avec Windows + .


🟡 VU ET COMPRIS — pas encore instinctif
HTML

Liaison label/for/id — compris, quelques hésitations
Différence id vs class — compris après debugging (70%)
Balises sémantiques header, nav, main, section — compris (65%)

CSS

Héritage CSS et principe DRY — compris, pas encore réflexe (60%)
margin vs padding vs gap — compris, encore quelques confusions (65%)
flex: 1 pour égaliser les colonnes — compris (70%)
margin: auto pour centrer — compris (75%)
Reset des propriétés Grid dans les media queries — compris après erreurs (60%)
grid-template-columns vs grid-column — confus au début, compris (65%)


🟢 MAÎTRISÉ — réflexe acquis
HTML

Structure de base complète — (90%)
Formulaire complet from scratch — (80%)
<span> pour les badges — (85%)

CSS

Flexbox (display: flex, gap, justify-content, align-items) — (80%)
box-shadow, border-radius — (85%)
box-sizing: border-box sur * — (85%)
display: grid + repeat(3, 1fr) — (80%)
Media queries basiques — (70%)
Debugging avec DevTools — (75%)

Outils

DevTools pour inspecter et débugger — (75%)
Live Server — (90%)

📈 Score global de maîtrise HTML/CSS
DomaineScoreStructure HTML85%Formulaires75%Flexbox80%CSS Grid70%Responsive65%Debugging75%Global HTML/CSS75%

---

Mise à jour Session 12 :
~ 5h :
✅ Ce qu'on a validé aujourd'hui
Bloc 1 — Variables, types, fonctions

let vs const — la vraie distinction (valeur fixe vs variable)
Template literals — backticks + ${} — analogie f-string Python ancrée
Syntaxe fonction JavaScript — function nom(param) {} — plus de réflexe Python def et :

Bloc 2 — Conditions & boucles

=== vs == — toujours utiliser le triple égal
if / else if / else — structure propre
Boucle for classique et for...of — les deux maîtrisés
Parcourir un tableau d'objets avec une condition — exercice réussi

Bloc 3 — Objets & tableaux

Différence objet {} vs tableau [] — confusion levée
Ajouter une propriété à un objet — objet.propriete = valeur
.push() — ajouter à un tableau
.length — longueur d'un tableau
Tableau d'objets — structure comprise

Bloc 4 — DOM

querySelector et getElementById — cibler des éléments HTML
textContent et style.color — modifier le contenu et le style
createElement + appendChild — créer des éléments dynamiquement
CSS vs JS — camelCase — background-color → backgroundColor
classList.add/remove/toggle — la méthode pro pour gérer les styles

Bloc 5 — Événements

addEventListener("click", function() {}) — syntaxe ancrée
Callback — concept compris et appliqué
Arrow function () => {} — vue
Objet event et event.target — vu
Principe DRY appliqué naturellement sur le projet stock


📊 Niveau estimé après cette session
NotionAvantAprèsVariables / types65%80%Fonctions55%75%Conditions / boucles60%78%Objets & tableaux50%70%DOM40%68%Événements35%65%