# 📓 Journal de progression — Phase 2

**État arrêté à la Session 65 · 31 juillet 2026**

> ⚖️ **Temporalité** : le §7 des instructions porte la carte de niveau par domaine, **daté S65**. Ce journal ne la redouble pas — il la **corrige au fil des séances**. En cas de divergence, **la source la plus récente fait foi** : une entrée de session postérieure prime sur le §7, sans qu'il soit nécessaire de réécrire les instructions.

> **Documents de référence** — `Archive-progression-Phase2.md` (S36→S59) · `Archive-progression-Phase1.md` (S1→S35) · `dettes-apprentissage-socle.md` (registre HTML/CSS/Tailwind/JS, daté S65) · `audit-croise.md` (cap métier) · `revision.md` (mesures fin Phase 1) · PDF « Projets réalisés ».
> Les archives sont consultables directement : pour tout détail sur une séance ou une notion antérieure à la S60, aller les lire plutôt que reconstruire de mémoire.

---

## 🧭 Où on en est — Phase 2

**Séquence Phase 2** : React ✅ → TypeScript des props ✅ → **React Router (prochain cap)** → Next.js → PostgreSQL / Prisma / Supabase → authentification → livrable SaaS optique déployé.

**Ce qui vient d'être fermé** : le cap **TS des props**, ouvert en S44, fermé en S64 après 7 séances. Parcours complet : valeurs simples → optionnelles + défaut → tableau typé → interface imbriquée → prop fonction. Passe en **mode entretien**.

**Domaines verrouillés 🔒 (mode entretien, ne pas réenseigner)** : `useEffect` (tous cas, S55) · socle fetch async/await (3 passages page blanche) · TS des props (S64).

---

## 🔥 Dettes chaudes React / TypeScript

_Hors périmètre du registre socle, qui ne couvre que HTML/CSS/Tailwind/JS._

- **🟡 Fonction de mise à jour dans le parent — priorité n°1.** `setListe(liste.map(o => o.id === id ? { ...o, champ: x } : o))`. Trois points distincts : le setter va **dans** la fonction (contrat `void`, pas de `return`) · le `.map()` doit rendre **des références** dans les deux branches · un objet littéral ne contient que des paires `clé: valeur`. Bloquée S64, ressortie seule 20 min plus tard, **reportée en S65** (absorbée par une déviation). À recroiser en page blanche courte.
- **🟡 Choix des arguments d'un handler** : une fonction ne demande que ce qu'elle ne peut pas trouver seule. Ancré par une erreur S64.
- **🟡 Piège des deux `=>`** : dans une `interface` il **décrit** ; dans du code il **fabrique** une fonction.
- **🟡 Nommage** : `XProps` = convention React uniquement ; une fonction ordinaire nomme son interface d'après la **donnée** (`Client`, `Commande`).
- **🔴 Réflexe `key`** : s'écrit dans la foulée du `.map()`, avant le contenu. Oubliée S64.
- **Non joué, à rejouer** : test d'erreur B (donnée invalide au point de raccordement `montures={CATALOGUE}` — le rouge se pose là, pas sur le tableau) · `Promise.all` emballé dans un composant complet · audit « exercice type » (todo list — principe à expliquer, demandé S53).

---

## 🔄 Rotation de révision éclair active

Tirage pondéré **vers la Phase 1**, jamais sur le sujet du jour. Détail et historique dans `dettes-apprentissage-socle.md`.

**En rotation** : `fetch` POST / `FormData` / `Content-Type` 🔴 · `reduce` accumulateur objet 🔴 · `sort()` 🟡 · `switch` 🟡 · `Object.values` / `for...in` 🟡 · `slice(0, n)` en **contexte neutre** (`sort()` + `slice(0, 3)` = top N) · `position: fixed` + contexte parent 🟡 · `IntersectionObserver` 🔵.

**Sortis de rotation** : `slice`/`splice` · `rem`/`px` · échelle Tailwind · `map`/`find`/`some` · closures / valeur-référence / scope · `fn` vs `fn()` (ancré, mais classique à surveiller).

---

## ⚠️ Points de vigilance actifs

- **Dosage — récurrence §9.** L'empilement de plusieurs nouveautés dans un même message reste l'erreur la plus fréquente (dernier cas : S65 sur `sort()` puis `Map`, arrêt net et justifié de Frédéric). Redécouper avant de recombiner ; séparer « comprendre le concept » de « driller la syntaxe ».
- **Fatigue de fond.** Rythme intense + reconversion + vie de famille. Vérifier l'énergie **avant** de charger, caler le lourd sur les créneaux frais (week-end, midi). Frédéric signale lui-même ses blocages et sa fatigue — le prendre au mot.
- **Il se sous-note systématiquement.** Recalibrer vers le haut quand la mesure dépasse l'auto-évaluation. **Symétrie** : ne pas surévaluer non plus — un exercice réussi au prix d'un effort long est **fragile**, le signal est l'effort, pas le résultat.
- **Mes erreurs récurrentes** : déduire l'état d'un item d'une ligne de todo au lieu de demander (S63, S65) · produire des hypothèses de diagnostic sans avoir le code sous les yeux (S61) · livrer un acronyme ou une commande sans la déplier (S60).

**Règles de travail** : toutes remontées dans les instructions du projet en S65 (§9 bis — règle des trois échecs, communication, qualifier la source, pas de diagnostic sans source, demander avant de reconduire, organisation des fichiers). Ne pas les chercher ailleurs.

---

## ➡️ Prochaine étape

1. Recroiser la **fonction de mise à jour dans le parent** — page blanche courte.
2. Reprise du fil Phase 2 : **React Router**.
3. En attente de créneau : **séance 2 du plan de remboursement** — projet CSS Grid (catalogue optique en Grid pur, Flexbox interdit) qui solde `@keyframes` et Tailwind Grid au passage. C'est désormais la dette n°1 du socle.

Vérifier l'énergie en ouverture.

---

---

# Sessions

## Session 60 — TS des props : cours de fond + première pratique réelle

**Durée** : ~1h30-2h (après-midi).
**Thème** : dette la plus ancienne de la pile enfin passée de « cours reçu » à « code écrit ».

**Révision éclair (`Object.values` / `for...in`)** : rôle de `Object.values` juste **mais retrouvé via MDN**, pas de mémoire → dette d'entretien confirmée. `for...in` « tourne sur les clés » ✅, syntaxe complète non produite. **Connexion faite** : `stock[marque]` = exactement le déblocage du `reduce` objet (`acc[clé]`) — deux notes de la même dette.

**Setup (autonomie)** : `App.jsx` → `App.tsx`, `main.jsx` recâblé, système commenter/décommenter préservé (question posée avant d'agir). Piège projet-existant traversé : `ts(7016)` quand un `.tsx` importe un `.jsx` → `"allowJs": true` dans `tsconfig.app.json`, source qualifiée (typescriptlang.org).

**Blocage instructif** : signature de la marche 2 (`props: CProps`) collée au corps de la marche 3 (`{marque}`) → `ts(2304)`. Point ancré : **une interface décrit une forme, elle ne crée aucune variable**. Corrigé seul.

**🌟 Initiative non demandée** : plutôt que faire remonter les props jusqu'à `App` (ce qui aurait cassé le système d'exercices), a créé un composant intermédiaire hébergeant la démo. **C'est la hiérarchie des vraies applis** (App orchestrateur → page assemble → composant affiche), trouvée seul sur un problème pratique.

**Niveaux** : concept « props = UN objet » 🟢 (c'était le chaînon manquant) · marche 3 🟡 **écrite le même jour que le cours, ne pas surévaluer** · boussole du `:` 🟡 · vocabulaire signature/corps 🟢 · PascalCase sur les types 🔴 (erreur sur les 3 interfaces du drill).

**⚠️ Erreur de ma part** : « le filet CI c'est `tsc --noEmit` » — 3 notions empilées en 4 mots, non décodées. Ne pas balancer d'acronyme sans le déplier.

**📌 Logistique** : le registre des dettes était un **PDF scanné (images)**, illisible pour moi → reconverti en `.md` depuis.

---

## Session 61 — TS des props : pratique intensive + props optionnelles

**Durée** : ~3h (samedi, session longue).

**Révision éclair (`reduce` objet — 3ᵉ passage)** : **net progrès mesuré**. Bon outil, ordre `(acc, v)` juste, `{}` en 2ᵉ argument, et surtout **crochets dynamiques `acc[...]` sortis seuls** — c'était LE déblocage identifié en S56. 3 bugs restants : `acc[marque]` au lieu de `acc[v.marque]` · `return acc[...] = ...` (une assignation vaut la valeur assignée, pas l'objet — **même bug qu'en S54**) · filet `|| 0` placé après l'addition. **Repère acquis** : `return acc;` toujours seul sur sa ligne — « filet, calcul, rendu ».

**⚠️ RÈGLE POSÉE PAR FRÉDÉRIC (depuis remontée au §9 bis)** : « Les énigmes, j'approuve à 100 %. Mais quand je bugge 3 fois sur la même chose, stop les énigmes → cours détaillé. Sinon ça m'énerve. »

**Drill de signatures (mesure à froid, 24h après le cours)** : mécanisme `({ ... }: XProps)` **juste 3/3**, sans hésitation. **PascalCase corrigé seul** → dette S60 soldée à froid. 2 corrections : un type faux dans une interface → **une interface fausse est pire qu'aucune interface** (fausse sécurité) · suffixe `Props` mis sur des fonctions ordinaires.

**`CarteVerre` (page blanche)** : interface + marche 3 + composant-page écrits de mémoire, corrects. `toLocaleString("fr-FR")` **sorti de mémoire** (dette du registre réactivée) ; complété par le 2ᵉ argument (objet d'options) et rangé sous le **patron de l'objet d'options**.

**Notions neuves** : `<article>`/`<section>`/`<div>` (jamais pratiqué depuis juin) · props optionnelles `?` + valeur par défaut `=` + critère défaut vs rendu conditionnel.

**🔴 LE gros blocage (~45 min)** : `Type 'Element' is not assignable to type 'number'`. Cause — une variable qui faisait **deux métiers** : porter une valeur à calculer et porter un affichage. **Point de fond : une variable = un rôle = un type.** Observé au passage : erreur rouge ET l'app tourne → **Vite transpile, ne vérifie pas**. 2ᵉ bug : du JSX fabriqué dans un `else` sans `return` ni affectation — **écrire du JSX ne l'affiche pas**. Correction complète livrée sur demande explicite.

**Niveaux** : signature TS 🟢 (3/3 à froid + page blanche) · PascalCase 🟢 · props optionnelles + défaut 🟡 · `<article>`/`<section>` 🟡 · `toLocaleString` 🟡 · « une variable = un type » 🟡 (ancré par un vrai blocage) · `reduce` objet 🟡.

**⚠️ Erreur de ma part** : diagnostic livré en 3 hypothèses **sans avoir le code sous les yeux** — les 3 fausses.

---

## Session 62 — Reconstruction page blanche + rendu conditionnel

**Durée** : ~2h (dimanche). Bilan d'ouverture posé par Frédéric : « il faut encore de la pratique » — séance 100 % reconstruction.

**Révision éclair (`slice(0, currentMove + 1)` — 2ᵉ échec à froid)** : les pièces sont là (setter, spread, `+1`), l'assemblage non. **Règle des échecs appliquée → cours complet donné.** Deux points posés : `[...tab, x]` = spread dans un **tableau** ≠ `f(...tab)` = spread dans un **appel** · le `+1` appartient au `slice` (borne exclue), **pas** à l'index.

**🗑️ DÉCISION DE FRÉDÉRIC — Tic-Tac-Toe retiré définitivement.** Exercice jugé sans intérêt, à ne plus jamais proposer. `slice(0, n)` reste à entretenir mais **en contexte neutre** (pagination, top N, troncature).

**`CarteMonture` v2 (page blanche, 24h après la correction)** : tout sorti seul, y compris le ternaire dans le JSX qui avait cassé la veille. **0 problems.** Seul doute : la syntaxe de `toLocaleString` → réponse donnée : **personne ne l'écrit de mémoire, c'est le rôle d'une fonction utilitaire. Une fonction utilitaire = un endroit où ranger ce qu'on refuse de mémoriser.**

**Refactor** : `src/utils/format.ts` créé (export nommé, `.ts` car aucun JSX). Règle pro donnée : **dossiers en minuscules et en anglais** — Linux respecte la casse, Vercel construit sous Linux.

**`FicheDevis` (page blanche, contexte neuf) — le cœur de la séance** :

- **Blocage diagnostiqué par Frédéric lui-même avant moi** : « une prop qui a une valeur par défaut ne peut plus être testée pour son absence ». Exact — **défaut et rendu conditionnel sont exclusifs**.
- **Règle centrale ancrée par un `NaN` réel** : **le narrowing ne protège que la variable testée.** Tester `mutuelle` ne dit rien à TS sur `tauxRmb` — rien dans l'interface ne lie les deux props. **On teste la variable qu'on utilise.**
- Contournement par texte-sentinelle trouvé seul puis abandonné après démonstration de sa fragilité. Structure finale : **une ligne = une condition = sa propre donnée**.

**Cours `&&` vs ternaire (demandé)** : **le point qui a fait tilt — `&&` ne renvoie pas un booléen, il renvoie une des deux opérandes** (évaluation court-circuit). Frédéric croyait `&&` = booléen pur ; la clarification a débloqué la compréhension du pattern JSX entier.

**Niveaux** : TS des props 🟢 — **deux reconstructions page blanche en contextes différents, la seconde sans aucune référence** · rendu conditionnel 🟢 · narrowing 🟡 · défaut/conditionnel exclusifs 🟢 (diagnostiqué seul) · fonction utilitaire externalisée 🟢.

**📌 RÈGLE DE COMMUNICATION POSÉE PAR FRÉDÉRIC (depuis remontée au §9 bis)** : détail, précision, explications complètes — **mais pas de blabla à côté**. Le problème n'est pas la longueur, c'est le ratio. Une réponse = un sujet.

---

## Session 63 — Props tableau typé : `Monture[]`, interface imbriquée, `.map()` typé

**Durée** : ~2h. Cap tenu : le bloc reporté 3 fois est traité.

**🎹 Raccourci** : `F12`/`Alt+←` était marqué « non entraîné » à tort — pratiqué quotidiennement, je ne l'avais jamais demandé. → **Toujours demander avant de reconduire.** Nouveau : `Ctrl+.` (Quick Fix), AZERTY = `Ctrl+Shift+;`.

**Révision éclair (`IntersectionObserver`)** : 3 étapes restituées justes de mémoire. **Erreur unique** — le callback reçoit un **tableau d'entrées**, pas l'élément → `entries.forEach(...)` obligatoire même avec un seul élément observé. Dette moins lourde que prévu.

**Cours** : `[]` derrière un type = « des ». **Deux interfaces, deux rôles** : `Monture` = la donnée (réutilisable partout) / `ListeMonturesProps` = le contrat d'un composant (jamais réutilisé).

**Piège du Quick Fix ancré** : sur `ts(2551)`, les 3 propositions font disparaître le rouge, mais deux modifient le **contrat** au lieu de réparer l'**usage** (« Add index signature » désactive la vérification). → lire avant de valider.

**`ListeClients` (page blanche)** : les deux interfaces de données sorties seules, dont `mutuelle?: Mutuelle`. **Trois points cassés** :

1. **Nommage de l'interface de props** : `interface Clients[]` écrit 2×. `[]` est un opérateur de type, uniquement à **droite** d'un `:`. Règle : nom du composant + `Props` ; **type au singulier, variable au pluriel**.
2. **`CLIENTS.map` au lieu de `clients.map`** — persisté après signalement. Bug invisible à l'écran mais le composant est soudé à une seule liste. **Tout entre par les props.**
3. **`&&` + fragment** : `&&` n'a qu'une opérande à droite → emballer les morceaux dans `<>...</>`. Correction donnée en entier.

**Organisation actée** : un fichier = un exercice (composant + page de démo). « 1 fichier = 1 composant » réservé au SaaS.

**Niveaux** : interface imbriquée 🟢 (sortie seule) · type tableau dans une interface de props 🟡 — **juste en guidé, cassé 2× en page blanche, ne pas surévaluer** · lire depuis la prop et non la constante globale 🔴 · `&&` + fragment 🟡 · narrowing via `&&` 🟢 · `{" "}` 🟡.

**⚠️ Erreurs de ma part** : question de vérification posée sur une interface sans le composant sous les yeux · raccourci reconduit 5 séances sans vérification.

---

## Session 64 — Prop fonction typée + consolidation prop tableau

**Durée** : ~2h30. **Cap TS des props fermé.**

**Révision éclair (`position: fixed` + contexte parent)** : **symptôme retenu ✅, mécanisme inversé ❌** — « fixed se positionne par rapport au parent » → non, par rapport au **viewport** ; c'est `absolute` qui vise l'ancêtre positionné. Un `transform` (ou `filter`, `backdrop-filter`, `will-change`, `contain`) crée un bloc conteneur qui **capture** les descendants `fixed`. ⚠️ Glassmorphism + élément fixe = le bug.

**`ListeCommandes` (page blanche)** : **les trois points cassés en S63 sont corrigés** — nommage + singulier/pluriel, `.map()` branché sur la prop, `&&` + fragment assemblés seuls. Seul défaut : **`key` oubliée** (présente la veille) → réflexe à réinstaller.

**Cours prop fonction** : mécanisme déjà connu (lifting state up, « l'enfant signale, le parent détient et décide »), le neuf = **le décrire dans une interface**. `onSupprimer: (id: string) => void`. Le nom du paramètre ne fait **pas** partie du contrat. **Piège central — deux `=>` sans rapport** : dans une `interface` il **décrit** ; dans du code il **fabrique**.

**🎓 Question de fond posée par Frédéric — pourquoi la fonction vit dans le composant-page** : elle **ne peut pas en sortir** (elle utilise `lignes`/`setLignes`, créés par `useState` dans ce composant — scope Phase 1). `formatEuro` a pu sortir dans `utils/` justement parce qu'elle ne touche à aucun state. **L'intérêt** : l'enfant ignore qu'un state existe → le même composant sert dans un devis, un back-office, une démo. Le parent décide **quoi faire**, l'enfant **comment afficher**.

**`ListeStock` (page blanche, prop fonction à DEUX arguments)** — sortis seuls : l'interface de la prop fonction, le branchement des deux boutons, la structure du ternaire, le principe de la copie non mutante. **Trois blocages** :

1. **La fonction du parent faisait le mauvais métier** : `return liste.map(...)` puis `setListe(...)` posé dans le corps. Le contrat dit `void` → **le setter va DANS la fonction, le `return` disparaît**. (Un setter dans le corps = boucle infinie.)
2. **Les branches du `.map()`** : un nombre en branche vraie, `null` en branche fausse. Un `.map()` sur des références doit rendre **des références** dans les deux branches.
3. **Syntaxe de la surcharge** : un objet littéral ne contient **que des paires `clé: valeur`**. Crochets réservés à une clé **dans une variable**.

**Micro-drill signatures** : **3/3 justes**, y compris celui qui changeait de forme (`=> number`).

**`ListeSav` (page blanche, fin de séance)** : **la fonction du parent est ressortie seule** — le morceau bloqué 20 min plus tôt. Erreurs : argument superflu → **une fonction ne demande que ce qu'elle ne peut pas trouver seule** · condition inversée · `&&` là où il fallait un ternaire (deux branches à afficher).

**Niveaux** : prop tableau + interface imbriquée 🟡→🟢 (3 points corrigés en contexte neuf) · signature de prop fonction 🟢 (3/3 + 2 exercices) · piège des deux `=>` 🟡 · **fonction de mise à jour dans le parent 🟡 — ce n'est pas du TS mais du React de la S41, revenu fragile, à recroiser en priorité** · choix des arguments d'un handler 🟡 · `key` 🔴.

**Recalibrage** : sur `ListeStock`, le mécanisme **du jour** est sorti seul ; les blocages portaient sur du React ancien et de la syntaxe d'objet.

---

## Session 65 — Salve micro-notions (séance 1 du plan S57 soldée)

**Durée** : ~2h30, énergie bonne. Première séance de remboursement du socle depuis S57, rendue possible par la clôture de TS des props.

**Révision éclair (`slice`/`splice`)** : 3/3 juste de mémoire. Complété : `splice` renvoie les éléments **retirés**. → 🟢, **sort de la rotation**.

**⚠️ Erreur de ma part — logistique** : j'ai redemandé commit/push et script `typecheck` alors que les deux étaient faits. Cause : les lignes « 📌 Commiter + pusher » sont écrites _avant_ l'action et rien ne les corrige ensuite ; je les relis comme un constat. Même schéma que `F12` reconduit 5 séances. **Correctif : demander avant de reconduire un item, jamais le déduire d'une ligne de todo.**

**⚠️ Erreur de dosage (récurrence §9)** : sur `sort()` puis sur `Map`, plusieurs nouveautés empilées en un message + exercice combinant du neuf. Frédéric a **stoppé net** (« je ne comprends rien, j'ai arrêté de lire ») — arrêt justifié. Reprise à zéro sur les 4 structures de données, qui a été le vrai contenu utile de la séance.

**Statuts des 8 notions** :

- `sort()` 🟡 — 3 passes (blocage : `sort(a.prix, b.prix)` sans la flèche). **À pratiquer pour mémoriser.**
- `switch` 🟡 — piège du `break` compris. **À repratiquer.**
- `break`/`continue` 🟢 · `rem`/`px` 🟢 (**ferme la poche « échelle Tailwind » de S59**) · `use strict` 🟢 (les modules ESM sont déjà stricts).
- `::before`/`::after` 🟢 — déblocage : `content: ""` fabrique une **boîte**, pas du texte.
- Structures de données : `Set` et `Object.keys/values/entries` rafraîchis 🟢 · **`Map` 🟢 en lecture seule uniquement** — intérêt réel quasi nul, dit franchement (le state React finit en JSON). Rapprochement `set`/`get` ↔ `localStorage` fait spontanément, exact.
- `data-*` — **ni acquis ni dette**, sorti du registre à sa demande.

**Reclassement** : `switch` et `break`/`continue` étaient notés type A (jamais vu) → en réalité déjà croisés (article, Python). **Le registre ne voit que ce qu'on fait ensemble.**

**Recalibrage** : a stoppé au bon moment plutôt que de subir, et ses questions ont produit le meilleur contenu du jour (à quoi sert un tri · d'où sortent `set`/`get` · pourquoi `content: ""`).

**⏭️ Reporté** : recroiser la **fonction de mise à jour dans le parent** — poche prioritaire S64, absorbée par la déviation du jour.

**🎹 Raccourci** : `Ctrl+.` — encore une séance et c'est acquis.

---

## Session 66 — [gestion de projet]

**Thème** : restructuration documentaire, pas d'apprentissage.
**Fait** : §7 des instructions remis à jour et daté S65 (règle de préséance posée : la source la plus récente fait foi) · §9 bis créé dans les instructions (6 règles opérationnelles S58→S65 remontées du journal) · `dettes-apprentissage-socle.md` actualisé et daté S65 (54 → 45 dettes, 9 soldées) · S36→S59 archivées dans `Archive-progression-Phase2.md` · `progression.md` restructuré (en-tête d'état + 6 dernières séances).

---

<!-- Les nouvelles entrées de session commencent ici -->
