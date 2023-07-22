const target = document.getElementById("target");
let array = ["développeur", "photographe", "créatif"];
let wordIndex = 0;
let letterIndex = 0;
// les variables wordIndex et letterIndex nosu permettent de démarrer à la première lettre du premier mot de notre tableau

const createLetter = () => {
  const letter = document.createElement("span");
  // on va injecter chaque lettre dans des span
  target.appendChild(letter);
  letter.textContent = array[wordIndex][letterIndex];
  // Ligne ci-dessus : le texte de letter contient l'index d'une lettre [letterIndex] appartenant à un mot [wordIndex]
  setTimeout(() => {
    letter.remove();
  }, 2800);
  // Ce setTImeout permet de retirer au bout de 2800ms la fonction dans laquelle il le setTimeout se trouve (donc il va enlever lettre par lettre)
};

const loop = () => {
  setTimeout(() => {
    if (wordIndex >= array.length) {
      wordIndex = 0;
      letterIndex = 0;
      loop();
    } else if (letterIndex < array[wordIndex].length) {
      createLetter();
      letterIndex++;
      loop();
    } else {
      wordIndex++;
      letterIndex = 0;
      setTimeout(() => {
        loop();
      }, 2800);
    }
  }, 60);
};
loop();

// - NOTE 1 : La première condition de la fonction ci-dessus permet de dire qu'une fois tous les mots du tableau parcourus, on recommence la boucle. Donc on remet le WordIndex et le letterIndex à 0 et on envoie notre fonction loop().
// - NOTE 2 : le setTimeout va nous permettre de décaler un événement, ici de 60ms. On n'utilise pas le setIntervall qui lui, aurait recréer toute la fonction récursive (donc à l'infini) toutes les 50ms. Ce que l'on souhaite,
// - NOTE 3 : on va faire une fonction récursive (nommée loop()), qui contient deux exécutions (createLetter() pour afficher la lettre, et letterIndex++ pour passer à la lettre suivante).
//        On remarque que cette fonction récursive permet, tant que l'index de la Lettre est inférieure à la longueur totale du mot, de s'appeler de nouveau elle-même.
// - NOTE 5 : Avec le else, on dit qu'en sortant de la condition (donc lorsque l'index de lettre a atteint la taille du mot), alors on passe au mot suivant avec wordIndex++, on remet à 0 l'index de la lettre pour reprendre au début du nouveau mot, puis on appelle la fonction loop() pour faire le même tour que précédemment mais sur le 2ème mot, et ainsi de suite sur chaque mot.
// - NOTE 6 : le setTimeout ci-dessus permet d'attendre 2800ms avant de passer au mot suivant. On note qu'on a aussi mis un setTImeout de 2800ms pour la suppression de l'affichage. par conséquent, un mot s'affiche, se supprime, puis le suivant apparaît.
