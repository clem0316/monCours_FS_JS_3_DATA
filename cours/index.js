// MENU DE CE DOCUMENT
// 1 - Tableaux
// 2 - Structures de Contrôle (Condition, ternaire, boucles)
// 3 - Méthodes :
//    -> Strings
//    -> Numbers
//    -> Tableaux
//    -> Objets
// 4 - Dates
//    -> Date classique
//    -> Timestamp
//    -> IsoString
// 5 - Destructuring
// 6 - Regex

// ---------

// Les autres projets de ce cours :
// 1 - Sous dossier "text-anim" >> apprendre à faire apparaître et disparaître du texte, lettre par lettre
// 2 - Sous-dossier "password-maker" >> apprendre à faire un générateur de code
// 3 - Sous dossier "form-checker" >> faire un formulaire à soumettre comprenant pseudo email mdp et vérifier avec des regex (entre autres) que les textes sont valides
//

// ------------------------------------------------------

// --------------------------------------------
// LES TABLEAUX
// --------------------------------------------

//

// Les tableaux : on peut pointer le caractère d'une chiane de caractère en enchainant les crochets. Ex : const villes = ["Bordeaux", "Paris"]. Console.log(villes[0][2]) indiquera le "r" de Bordeaux)

let monObjet = {
  pseudo: "clément",
  age: 40,
  technos: ["Javasciprt", "HTML", "CSS"],
  admin: false,
};
monObjet.adresse = "mon adresse";
// Si je rajoute la ligne ci-dessus, cela ajoutera la propriété "adresse" à l'objet "monObjet"
monObjet.age = "42";
// Avec la ligne ci-dessus, la valeur "42" va venir écraser la valeur "40" de la propriété "age" de "monObjet"

// NOTE : pour stocker plusieurs objets, on va créer un tableau d'objets.
let Data = [
  {
    pseudo: "Clément",
    age: 40,
    technos: ["Javasciprt", "HTML", "CSS"],
    admin: false,
  },
  {
    pseudo: "Rico",
    age: 47,
    technos: ["PHP", "Javascript", "React", "SASS"],
    admin: false,
  },
  {
    pseudo: "Clara",
    age: 28,
    technos: ["Python", "HTML", "Tailwind"],
    admin: true,
  },
  {
    pseudo: "Jacques",
    age: 70,
    technos: ["Python", "HTML", "Tailwind", "Javascript"],
    admin: true,
  },
];

//

// --------------------------------------------
// LES STRUCTURES DE CONTROLE
// --------------------------------------------

//

// LA CONDITION

if (Data[0].age > Data[2].age) {
  console.log(Data[0].pseudo + " est plus âgé que " + Data[2].pseudo + ".");
}
// Si on a une seule valeur derrière la condition, alors on peut se passer des accolades et faire comme ci-dessous
if (Data[0].age > Data[2].age)
  console.log(Data[0].pseudo + " est plus âgé que " + Data[2].pseudo + ".");

// ECRITURE EN TERNAIRE
Data[0].age > Data[2].age
  ? console.log(Data[0].pseudo + " est plus âgé que " + Data[2].pseudo + ".")
  : console.log(Data[0].pseudo + " est plus jeune que " + Data[2].pseudo + ".");
// En ternaire :
// - je mets la condition en 1er (sans parenthèse) suivi d'un "?"
// - je mets ensuite la résolution si vrai suivi de ":"
// - je mets la condition si faux
// Pour résumer   valeur-à-tester ? si vrai : si faux

//

// WHILE
let w = 0;

while (w < 10) {
  w++;
  //   console.log("La valeur de w est " + w);
}

//

// DO WHILE
let d = 0;

do {
  d++;
  //   console.log(d);
} while (d < 5);
// On met la condition d'arrêt à la fin

//

// FOR
for (const element of Data) {
  document.body.innerHTML += `<li>${element.pseudo} - ${element.age} ans</li>`;
}
// - NOTE 1 : Ici "element" est un paramètre mais pour aller chercher un objet parmi le tableau d'objets "Data". On aurait pu lui mettre n'importe quel nom.
// - NOTE 2 : On met le "+=" pour ajouter les éléments au HTML, et non pour écraser ce qui existe déjà (qu'on aurait fait avec un simple "=")

for (i = 0; i < Data.length; i++) {
  document.body.innerHTML += `<li>${Data[i].pseudo} ; ${Data[i].age}`;
}
// Cette formule est différente mais produit la même chose que la formule juste avant.

//

// SWITCH
document.body.addEventListener("click", (e) => {
  console.log(e.target);
  // Le e.target nous permet de voir dans la console sur quel élément on clique (sa balise). Il faut bien sûr avoir ajouté le paramètre (e) à la fonction. Si je veux obtenir son id, il me suffira de mettre e.target.id
  switch (e.target.id) {
    case "javascript":
      document.body.style.background = "yellow";
      break;
    case "php":
      document.body.style.background = "purple";
      break;
    case "python":
      document.body.style.background = "blue";
      break;
    default:
      null;
  }
});
// Méthode du switch :
// 1 - Dans la parenthèse du switch, on indique la valeur à analyser
// 2 - Ensuite, pour chaque cas, on écrit "case" suivi de la valeur analysée puis on ajoute ":"
// 3 - on écrit la fonction à exécuter selon le cas cité
// 4 - On met un "break" après chaque cas pour éviter qu'il déborde sur un autre cas
// 5 - à la fin des différents cas, on choisit une valeur par défaut. Préférable de toujours avoir en fin un default

//

// ------------------------------------------------
// LES METHODES
// ------------------------------------------------

//

// 1 - Méthodes sur les STRINGS

//

let string2 = "Javascript est un langage orienté objet";

console.log(typeof string2);
// Connaître le type de l'élément

console.log(eval("1") + 2);
// eval permet d'additionner et non de concatainer. Du coup la string "1" devient un number, et le résultat sera 3.

console.log(isNaN(string2));
// Demander si ce n'est pas un chiffre (is not a number?). Attention, il répondra TRUE si ce n'est PAS un chiffre. Et FALSE si c'est un chiffre

console.log(string2[string2.length - 1]);
// Aller chercher le dernier caractère de la string. Ici, cela retourne "t"

console.log(string2.indexOf("b"));
console.log(string2.indexOf("x"));
console.log(string2.indexOf("langage"));
// Permet de dire à quel index se trouve le caractère. Pour "b", la method répondra "35" alors que pour "x", qui n'existe pas dans ma string, la method répondra "-1"
// Si je mets un mot entier, cela donnera l'index du 1er caractère du mot. Ici "18"

let newString = string2.slice(2);
console.log(newString);
// Permet de couper l'élément en 2 en son milieu
let newString2 = string2.slice(5, 17);
console.log(newString2);
// Permet de ne garder la string que du caractère à l'index 5 inclu jusqu'à l'index 17 inclu.

console.log(string2.split("i"));
// Permet de couper la stirng à chaque "i" et place chaque tronçon ainsi créé dans un tableau

console.log(string2.replace("Javascript", "PHP"));
// Permet de remplacer toutes les string "Javascript" par la string "PHP"

//

// ---------------------------------

// 2 - Méthodes pour les NUMBERS

//

let number = 42.1934;
let numberString = "42.23 est un nombre";

console.log(number.toFixed(1));
// Permet d'arrondir à 1 chiffre après la virgule

console.log(parseInt(numberString));
// Dans ce cas là, le parseInt va prendre en compte le 1er entier qu'il trouve (donc ne prend pas compte des chiffres après la virgule). Ici, cela va retourner 42
console.log(parseFloat(numberString));
// Comme précédemment, mais prend en compte les chiffres après la virgule. Retourne 42.23

// Math

console.log(Math.PI);
// Retourne la valeur de PI
console.log(Math.round(4.5));
// Va arrondir la valeur. Retourne 5 ici
console.log(Math.floor(4.9));
// Va arrondir à la valeur inférieure. Retourne 4
console.log(Math.ceil(4.1));
// Va arrondir à la valeur supérieure. Retourne 5
console.log(Math.pow(2, 7));
// Pour des puissances. ici 2 puissance 7, donc va retourner 128
console.log(Math.sqrt(16));
// Pour obtenir la racine carrée de 16. Retourne donc 4
console.log(Math.random());
// Va donner un chiffre aléatoire entre 0 et 1
console.log(Math.random() * 50);
// Va donenr un chiffre aléatoire entre 0 et 1
console.log(Math.floor(Math.random() * 50));
// Va donner un entier aléatoire entre 0 et 50 (plutôt 49 car il arrondira toujours le flottant à l'entier inférieur)

//

// ---------------------------------

// 3 - Méthodes pour les ARRAYS

//

// BASES
let array3 = ["Javascript", "PHP", "Python", "TypeScript"];
let array4 = ["Ruby", "Solidity"];

let newArray = array3.concat(array4);
console.log(newArray);
// Concat permet de mettre un tableau dans un autre

let newArray2 = [...array3, ...array4];
console.log(newArray2);
// Comme le concat, mais davantage utilisé, le spread operator (...) fusionne les 2 tableaux

console.log(array3.join("-"));
// Permet de concatainer tous les éléments du tableau en les séparant ici par un tiret

console.log(array3.slice(1));
// Le slice permet de découper un élément du tableau.
console.log(array3.slice(2, 3));
// Avec 2 valeurs, cela dit : j'enlève les 2 premiers termes puis je garde le 3ème

array3.forEach((languages) => console.log(languages));
// Ici je dis "pour chaque élément du tableau, que j'appelle 'languages', affiche moi dans la console chaque élément sur lequel la boucle passe". On obtient donc un console.log par élément du tableau

//

// EVERY ET SOME
console.log(array3.every((language) => language == "PHP"));
// Ici je dis "Est-ce que TOUS les éléments du tableaux ont bien le terme "PHP" contenu dedans ?" Cela va donc renvoyer FALSE.
console.log(array3.every((language) => language == "p"));
// Ici cela renverra FALSE. Il y a bien un "p" dans chaque élément, mais certains sont en minuscule, d'autres en majuscule. Si je récris tous mes p en majuscule dans le tableau, alors j'aurai la valeur TRUE.
console.log(array3.some((language) => language == "PHP"));
// Ici je demande si parmi mon tableau, il existe au moins un élément contenant "PHP". Ici c'est le cas, donc retourne TRUE

//

// SHIFT ET POP
let shift = array3.shift();
console.log(array3);
// Permet d'enlever le premier élément du tableau
let pop = array3.pop();
console.log(array3);
// Enlève le dernier élément du tableau

//

// SPLICE
array3 = ["Javascript", "PHP", "Python", "TypeScript"];
const restArray = array3.splice(0, 1, "C++");
console.log(restArray);
console.log(array3);
// Ici je dis "à l'index 0, j'enlève un élément, que je remplace par 'C++' "
// IMPORTANT :
// - Si je console.log(restArray), j'afficherai l'élément enlevé, soit "Javascript"
// - Si je console.log(array3), j'afficherai le nouveau tableau, à savoir " 'C++', 'PHP', 'Python', 'TypeScript' "
const mixArray = array3.splice(0, 2, ...array4);
console.log(array3);
// Ici je dis "à partir de l'index 0, j'enlève 2 éléments, que je remplace par le tableau array4"

//

let arrayNumber = [4, 74, 28, 12, 1];
console.log(arrayNumber.reduce((x, y) => x + y));
// Ici je dis que chaque élément est additionné au suivant. En gros, il additionne tous les éléments du tableau. Cela retourne 119

arrayNumber.push("Coucou");
console.log(arrayNumber);
// Le push ajoute un élément au tableau, quelque soit son type

//

// FILTER, SORT, MAP

console.log(arrayNumber.filter((number) => number > 10));
// ici je dis "Pour chaque élément du tableau, que je vais appeler par exemple 'number', garde moi tous les éléments supérieurs à 10". Retourne [74, 28, 12]

console.log(arrayNumber.sort());
// Si je ne précise rien, cela range dans un ordre par rapport au premier caractère de chaque élément. Retourne [1, 12, 28, 4, 74, "Coucou"]
console.log(arrayNumber.sort((a, b) => b - a));
// Encore une fois, on donne 'a' et 'b' comme paramètres, mais on pourrait les appeler comme on veut. Ici on dit de classer du plus grand au plus petit, car on dit de ranger dans l'ordre paramètre 2 avant paramètre 1, et en JS, cela signifie "du + grand au + petit".
// Note : contrairement à la méthode précédente, cela va bien trier les éléments complets (et non seulement le premier caractère de chaque élément)
console.log(arrayNumber.sort((a, b) => a - b));
// Ici range dans l'ordre croissant. Du + petit au + grand les chiffres, et dans l'ordre alphabétique pour les chaines de caractère. De base, les chaines de caractères viennent après les chiffres.

//IMPORTANT : on peut mélanger les méthodes. Par exemple :
console.log(arrayNumber.filter((number) => number > 10).sort((a, b) => b - a));
// Ici, je demande donc de garder les éléments du tableau supérieurs à 10 et de les ranger dans l'ordre décroissant

arrayNumber.map((number) => console.log(number));
// Ici il passe en revue chaque élément, et va donc les afficher un à un. Comme si on faisait un console.log par élément.
document.body.innerHTML = arrayNumber
  .map((number) => `<li> ${number}</li>`)
  .join("");
// Cela permet d'afficher chaque élément indépendemment dans notre HTML. Et avec join, on dit de ne rien mettre entre les éléments (sinon par défaut cela mettait les virgules du tableau)

//

// ---------------------------------

// 4 - Méthodes pour les OBJETS

//

document.body.innerHTML = Data.filter((user) =>
  user.technos.includes("Javascript")
)
  .sort((a, b) => b.age - a.age)
  .map(
    (user) => `<div class=user-card>
<h2>${user.pseudo}</h2>
<p>Age : ${user.age}</p>
<p>Status : ${user.admin ? "Modérateur" : "Membre"}</p></div>`
  )
  .join("");
// Ici, je dis "pour chaque élément de mon tableau d'objet Data (élement que je choisis de nommer 'user'), je veux créer une div contenant diverses balises pour récupérer des éléments de chaque user". Le tout à afficher dans le body de mon document html
// On y a encore ajouté le join pour opter pour aucun sparateur entre les résultats.
// On y a attribué une class "user-card"
// Sur le status, on fait une fonction ternaire qui dit "Si user.admin==true, alors écris 'Modérateur' mais si user.admin==false, alros écris 'Membre' "
// Avec le sort, on a choisi de trier l'ordre d'apparition de nos utilisateurs du plus vieux au plus jeune (en pointant la valeur de l'âge dans leur objet).
// On a ajouté un filtre au début (toujours avant le map, car c'est le map qui affiche, donc autant trier avant). Ce filtre garde uniquement les membres qui connaissent "Javascript"

//

// ------------------------------------------------
// LES DATES
// ------------------------------------------------

//

// 1 - Dates classiques

let laDate = new Date();

// 2 - Timestamp

let timestamp = Date.parse(laDate);
console.log(timestamp);
// Parse est une méthodequi appartient à l'objet DATE et qui permet de transformer la date en timestamp. Le timestamp est le nombre de secondes écoulées depuis le 1er janvier 1970/
// Le nombre affiché est en millisecondes. Souvent les 3 derniers chiffres (les millisecodnes) restent à 0, mais possibilité d'avoir leur vraie valeur

const dateParser = (parametre) => {
  let newDate = new Date(parametre).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "numeric",
    // minute: "numeric",
  });
  return newDate;
};
console.log(dateParser(laDate));
console.log(dateParser(timestamp));
// Cette method per met de choisir la manière dont va s'afficher la date
// Entre parenthèse on commence par la langue puis c'est le pays pour le fuseau horaire, et enfin la manière dont on veut afficher la date
// Ici on lui a dit d'écrire l'année et le jour en chiffres, mais le mois en lettres
// À noter que l'on peut ajouter heures et minutes (il faut les écrire au singulier)
// On peut enfin noter que nos deux console.log renverront le même résultat

// 3 - IsoString

let iso = laDate.toISOString();
console.log(iso);
// Juste savoir que cette dernière manière d'écrire existe, et qu'on peut la rencontrer des fois, notamment en récupérant des infos d'une API par exmeple.

//

// --------------------------------------------
// LE DESTRUCTURING
// --------------------------------------------

//

// Exemple 1

let moreData = {
  destVar: ["Element 1", "Element 2"],
};

const { destVar } = moreData;
// Dédormais, quand j'appelerai moreData, cela équivaudra à moreData.destVar
// A quoi ça sert ? Simplement à ne pas avoir à rappeler à chaque fois moreData.destVar dès que l'on veut travailler dans l'objet destVar contenu dans le tableau moreData. On n'aura plus besoin de préciser le tableau ; écrire notre objet suffira.

console.log(moreData.destVar[0]);
console.log(destVar[0]);
// Maintenant, ces deux console.log font exactement la même chose. Le but est donc de gagner en lisibilité en raccourciçant.

//

// Exemple 2

let array5 = [70, 80, 90];
let [x, y, z] = array5;
console.log(x);
// Ici est un autre exemple de destructuring. On a choisi de créer un tableau [x, y, z] qui prendra les valeurs du tableau array5. Désormais, les valeurs sont devenues des variables x, y et z. Donc si je console.log(x), cela retourne 70

//

// Exemple 3

// console.log(iso);
const dateDestructuring = (param) => {
  let newDate = param.split("T")[0];
  // Ici on n'a gardé que l'essentiel de notre date au format iso. En enlevant le T et en ne gardant que le premier index, soit la première chaine de caractère.
  let [y, m, d] = newDate.split("-");
  // On découpe notre string obtenue en séparant là où des tirets sont présents. On a donc un tableau de 3 éléments comprenant une string pour l'année, une string pour le mois, et une strung pour le jour.
  // On attribue tout ça dans notre nouvelle variable qui met en paramètres y, m et d
  return [d, m, y].join("/");
  // Grâce à cette variable, je peux mettre dans l'ordre mon année, mois et jour. Et avec le join j'ajoute un élément séparateur.
};
console.log(dateDestructuring(iso));

//

// ------------------------------------------------
// LES DATASETS
// ------------------------------------------------

//

// Les datasets sont des données que je peux mettre dans des balises.
// =>>>>> Aller voir dans le sous-dossier dataset !

//

// ------------------------------------------------
// LES REGEX
// ------------------------------------------------

//

let mail = "from_scratch33@gmail.com";

console.log(mail.search(/from/));
console.log(mail.search(/jkfldsj/));
// La méthode search permet de chercher si une chaine de caractère existe dans la valeur de notre variable. Dans le 1er console.log, c'est le cas : cela retourne 0. Dans le 2eme console.log ce n'est pas le cas, cela retourne -1

console.log(mail.replace(/from/, "de"));
// Méthode pour rempalcer le 1er paramètre par le 2ème paramètre
// On remarque que notre recherche est entre slash (method regex) mais que pour le 2ème paramètre, à savoir ce qui remplace, ce sera entre guillemets

//

// Les match

console.log(mail.match(/SCratch/));
// ici on vérifie si ça match exactement. Comme S et C sont en majuscules, ça retourne "null". En effet, quand une Regex ne fonctionne pas, cela ne retourne pas "false" mais "null"
console.log(mail.match(/SCratch/i));
// En rajoutant "i", la recherche n''st plus Case Sensitive, donc peu importe majuscule ou minuscule.

console.log(mail.match(/[zug@a]/));
// Ici je demande, notamment grâce aux crochets, s'il existe ces caractères dans notre string. La réponse se fait pour le 1er caractère trouvé dans notre string. Utile par exemple si on veut vérifier qu'un @ existe dans le mail donné par un user. Dans notre exemple, le 1er caractère trouvé dans notre string est le "a". Donc son retour s'arrête là.
// Fonctionne aussi avec les chiffres

console.log(mail.match(/\d/));
// Cette méthode nous dit q'ils existe au moins un chiffre dans notre string
console.log(mail.match(/[a-z]/));
// Permet de nous dire q'il existe au moins une lerttre de l'alphabet dans notre string

console.log(mail.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i));
// Ici je donne la forme de mon mail :
// 1 - On va encadrer notre regex par 2 slash
// 2 - On va encadrer la chaîne de caractère à analyser par un chapeau et un dollar : ^ et $
// 3 - À la toute fin, après le slash de fermeture, on finit par 'i' pour dire que la regex ne doit pas être case sensitive et donc lire indifféremment ce qui est majuscule ou minuscule
// 4a - Pour le premier mot, cela doit faire [\w_-], c'est-à-dire être sous la forme d'un mot(chiffres ou lettres) avec éventuellement les caractères '_' ou '-'
// 4b - Je demande ensuite à concaténer un '@' suivi de [\w-] donc un mot(chiffres ou lettres) qui peut contenir éventuellement un '-'
// 4c - Il faut ensuite concaténer avec un point donc \. suivi d'un mot (par exemple fr ou com) qui doit faire entre 2 et 4 caractères, donc [a-z]{2,4}

let separator = 28835755461;

console.log(separator.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "."));
// Avec la method toString on remplace le nombre en string
// Ici on a mis la regex en paramètre 1, c'est à dire que l'on va placer un séparateur tous les 3 chiffres. EN 2ème paramètre, on dit que le séparateur souhaité est un point.
// On note que la regex s'applique en commençant par le dernier caractère, c'est à dire qu'il va mettre un point tous les 3 caractères en aprtant du dernier vers le premier de notre string. Dans notre cas, retourne : 28.835.755.461
