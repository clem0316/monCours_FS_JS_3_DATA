const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "$^*ù!:;,&é\"'(-è_ç";
// On mis un backslash \ avant les double guillemets pour pouvoir les intégrer comme un symbol
const rangeValue = document.getElementById("password-length");
// Le rangeValue va chercher la valeur choisie par le slider. Donc le nombre de caractères maximum que je souhaite dans mon mot de passe
const passwordOutput = document.getElementById("password-output");
// Cette constante va chercher l'emplacement de password-output sur le HTML

const generatePassword = () => {
  let data = [];
  let password = "";

  if (lowercase.checked) data.push(...dataLowercase);
  if (uppercase.checked) data.push(...dataUppercase);
  if (dataNumbers.checked) data.push(...dataNumbers);
  if (dataSymbols.checked) data.push(...dataSymbols);
  // Ici on a donc pushé tous nos tableaux cochés dans un seul et même tableau : "data". Data contient alros tous les caractères possibles contenus dans les tableaux cochés. La boucle du mot de passe généré va donc se servir parmi les caractères de ce tableau.

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }
  // Ci-dessus une sécurité au cas où aucun label n'a été clické. Le return permet de stopper la fonction car inutile d'aller plus loin

  for (i = 0; i < rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    // Ne pas oublier le += pour que chaque caractère s'ajoute. Sinon la variable password ne gardera que la valeur du dernier caractère.
  }
  passwordOutput.value = password;
  // Ici on intègre donc le mot de passe sur l'lément HTML pointé avec la constante passwordOutput. On remarque que le mot de passe appraît au-dessus de notre slider.
  passwordOutput.select();
  // Cette commande permet de sélectionner le texte pointé. Ici cela sélecte (en surlignage comme avec la souris) le mot de passe affiché sur le HTML
  //   document.execCommand("copy");
  // Normalement cette dernière commande devait copier le texte automatiquement (comme un Pomme+C) mais cette commande est désormais obsolète.

  generateButton.textContent = "Copié!";
  // On indique ici au user que le mdp a été copié dans son presse-papier. Cela apparaît à la palce du bouton "Générer mot de passe"

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
  // Cette dernière fonction permet, après 2 secondes, de remettre l'affichage "Générer mot de passe". Cela permet d'effacer "copié!" qui aurait apparu après génération du mot de passe.
};

generateButton.addEventListener("click", generatePassword);
// Sur un event au click, on peut directement injecter une fonction créée auparavant. Ici generatePassword

// - NOTE 1 : À partir du moment ou je crée une checkbox ou un bouton, je n'ai pas besoin de le déclarer. En effet, JS reconnaît les boutons et les checkbox. Si je mets directement le nom du label relié  la checkbox, je n'ai pas beosin de préciser qu'il s'agit de l'id d'une checkbox.
// - NOTE 2 : si je tape lowercase.checked , j'interroge si la checkbox contenant l'id lowercase est cochée. Si oui, le retour sera TRUE.
// - NOTE 3 : pour chacune de nos conditions, on dit "si telle checkbox est cochée, alors ajoute au tableau data la valeur de la variable correspondante"
// - NOTE 4 : en ajoutant le spread operator ... devant la variable, on casse la chaine de caractère et on la transforme en un tableau contenant chaque caractère de la chaine.
// - NOTE 5 : le Math.floor(Math.random()) nous permet de choisir un nombre entier aléatoirement pour choisir un index parmi chaque variable, devenue un tableau de plusieurs caractères grâce au spread operator.
// - NOTE 5bis : On ajoute *data.length pour être sûr de ne tomber que sur des caractères qui existent. En effet, mon alphabet de 26 lettres : avec math.random j'ai un chiffre aléatoire entre 0 et 1. Avec  Math.floor, je ne prends que l'entier inférieur entre 0 et 1. Et avec *data.length, je multiplie par le nombre de caractères dans le tableau.
// - NOTE 6 : on fait ensuite une boucle for, qui va prendre en compte la valeur du slider pour savoir combien de tours doivent être faits (= combien de caractères à générer) en fonction du choix de longueur de mot de passe
