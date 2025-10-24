## 🧠 Récapitulatif JavaScript - Variables, Conditions, Tableaux & Boucles

✅ 1. Variables
	•	Déclaration avec let et const  
	•	let → modifiable  
	•	const → non réassignable  
	•	Bonnes pratiques modernes : éviter var  
	•	Concaténation : + pour coller des chaînes ou valeurs  
	•	Template literals : `Texte avec ${variable}` (plus lisible et propre)  
	•	Types de données :  
    	•	string → texte  
	    •	number → nombre  
	    •	boolean → vrai/faux  
	    •	object, array, null, undefined  

⸻

✅ 2. Affichage
	•	console.log() pour afficher dans la console  
	•	Utiliser .toFixed(2) pour arrondir un nombre (très utile pour les prix 💸)

⸻

✅ 3. Réassignation
	•	Réutiliser une variable pour lui donner une nouvelle valeur :  
	  `age = age + 1;`  
	  `age += 1;`

⸻

✅ 4. Conditions
	•	Structure de base :
	```js
	if (condition) {
	  // si vrai
	} else {
	  // sinon
	}
	```

	•	Conditions multiples :
	```js
	if (...) {
	} else if (...) {
	} else {
	}
	```

⸻

✅ 5. Opérateurs de comparaison
	•	`>` : supérieur à  
	•	`<` : inférieur à  
	•	`>=` : supérieur ou égal  
	•	`<=` : inférieur ou égal  
	•	`===` : égal en valeur et en type  
	•	`!==` : différent en valeur et en type  

⸻

✅ 6. Opérateurs logiques
	•	`&&` : ET (toutes les conditions doivent être vraies)  
	•	`||` : OU (au moins une condition doit être vraie)  
	•	Parenthèses `()` pour structurer la priorité :
	```js
	if ((cond1 && cond2) || cond3)
	```

⸻

✅ 7. Tableaux
	•	Créer un tableau : `const fruits = ["pomme", "banane", "fraise"];`  
	•	Accéder à un élément : `fruits[1]`  
	•	Modifier un élément : `fruits[1] = "kiwi";`  
	•	Ajouter un élément : `fruits.push("ananas");`  
	•	Connaître la taille : `fruits.length`  
	•	Méthode `.includes("a")` pour tester la présence d’un caractère  

⸻

✅ 8. Boucles
	•	`for` classique :
	```js
	for (let i = 0; i < fruits.length; i++) {
	  console.log(fruits[i]);
	}
	```
	•	`for...of` (boucle moderne) :
	```js
	for (const fruit of fruits) {
	  console.log(fruit);
	}
	```
	•	Bonne pratique : préférer `for...of` sauf si besoin de l’index  
	•	Combiner boucle + condition (`if (fruit.includes("a")) { ... }`)

⸻

✅ 9. Exercices réalisés
	•	Affichage de profil (nom, prénom, âge, ville)  
	•	Incrémentation de l’âge  
	•	Test de majorité  
	•	Classification d’âge (mineur, jeune adulte, adulte)  
	•	Tarification cinéma selon tranche d’âge  
	•	Réduction avec carte (20 %)  
	•	Contrôle d’accès VIP avec `&&` et `||`  
	•	Manipulation de tableaux : modification, ajout, affichage  
	•	Parcours d’un tableau avec `for` et `for...of`  
	•	Filtrage de données dans un tableau (`.includes()` + `if`)

---
## 📋 Objectifs de la prochaine session

✅ Refaire quelques exercices de la veille **sans regarder les réponses**  
✅ Consolider la boucle `for` et `for...of` avec de nouvelles variantes (affichage, filtres, index)  
✅ Découvrir et pratiquer :
- [ ] La boucle `while`
- [ ] La boucle `do...while` (si besoin)
- [ ] La boucle `for...in` (spéciale objets)
- [ ] Les cas où choisir `for`, `while`, ou `for...of`

✅ S’exercer avec des petits algorithmes sur tableaux :
- [ ] Trouver l’élément le plus long / court
- [ ] Compter combien d’éléments respectent une condition
- [ ] Créer un nouveau tableau filtré (avec une boucle pour l’instant)

✅ Préparer l’arrivée des **fonctions** :
- [ ] Réfléchir à ce qui pourrait être "réutilisable"
- [ ] Comprendre l’idée d’un "bloc de code qu’on peut appeler plusieurs fois"