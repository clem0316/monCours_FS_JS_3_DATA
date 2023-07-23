// LE DESTRUCTURING

const h3js = document.getElementById("javascript");
console.log(h3js.dataset);

// NOTE 1 : le dataset nous permet de mettre des informations (de la data) dans les balises.
// NOTE 2 : la notation dans le HTML est toujours "data-" suivi de ce que l'on veut. Par exemple dans la balise h3, je vais mettre <h3 data-lang="js"></h3>  Cela me permet d'ajouter une information de langage, en l'occurence "js". Après 'data-' je peux mettre n'importe quel mot
// NOTE 3 : désormais si je console.log(h3js.dataset), j'obtiens toutes les data créées sous forme d'un objet. Cela retourne DOMStringMap {lang:"js"}
// NOTE 4 : dans une balise, je peux mettre autant de data que je souhaite, tant qu'elles commencent toujours par la notation data-

console.log(h3js.dataset.lang);
// Puisque je suis désoprmais dans un objet, si je pointe une propriété, ici .lang, alors le retour ne m'indiquera que la valeur de cette propriété, donc "js"

const h3 = document.querySelectorAll("h3");
h3.forEach((language) => console.log(language.dataset.lang));
// Autre exemple, ici je prends toutes mes balises h3, et j'en récupère l'information de langage de chacune
