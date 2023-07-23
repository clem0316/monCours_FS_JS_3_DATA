const { progress } = require("mocha/lib/reporters");

const form = document.querySelector("form");

const inputs = document.querySelectorAll(
  "input[type='text'], input[type='password']"
  // Voici une manière de choisir non pas par classe mais par type d'input
);

const progressBar = document.getElementById("progress-bar");
let pseudo, email, password, confirmPass;

const errorDisplay = (tag, message, valid) => {
  // [tag, message, valid] nous permet de pouvoir adapter nos messages d'erreur en fonction des input
  const container = document.querySelector("." + tag + "-container");
  // on peut ainsi récupérer le nom de la classe de l'input clické
  const span = document.querySelector("." + tag + "-container > span");
  // idem pour récupérer le span de la classe concernée

  if (!valid) {
    container.classList.add("error");
    span.textContent = message;
    // Si notre texte n'est PAS valide (le '!' signifie 'inverse' donc 'PAS valid'), alors on applique au container concerné, la classe "error" qui se trouve dans le CSS. On y ajoutera aussi le message d'erreur approprié.
  } else {
    container.classList.remove("error");
    span.textContent = message;
    // Si texte valid, alors on enlève la classe "error" qui aurait éventuellement été appliquée auparavant.
  }
};
// Toute la logique d'erreur va donc se trouver dans la fonction errorDisplay ci-dessus

const pseudoChecker = (value) => {
  if (value.length > 0 && (value.length < 3 || value.length > 20)) {
    errorDisplay("pseudo", "Le pseudo doit faire entre 3 et 20 caractères");
    pseudo = null;
    // on met en condition value.length>0 pour ne pas que le message d'erreur s'affiche avant même que le user ait tapé un 1er caractère
    // si condition vérifiée, on joue errorDisplay en y mettant les bons paramètres [tag, message, true ou false]. En fait, on ne mettra pas le booléen que dans le cas où c'est TRUE, ce qui arrivera dans le ELSE. Par conséquent, cela induit que dans les autres cas, ça sera FALSE
    // pseudo = null nous permet d'empêcher que la valeur, donc erronée, écrite dans la champ pseudo du formulaire puisse être envoyé
  } else if (!value.match(/^[a-zA-Z0-9_.-]*$/)) {
    errorDisplay(
      "pseudo",
      "Le pseudo ne doit pas contenir de caractères spéciaux"
    );
    pseudo = null;
    // Rappel : le '!' signifie "inverse". Donc notre condition est : 'si un caractère ne match avec aucun caractère décrit dans la regex suivante'.
  } else {
    errorDisplay("pseudo", "", true);
    pseudo = value;
    // Comme vu plus haut, ça n'est qu'ici que l'on met TRUE, ce qui impliquera que dans les cas précédents, le paramètre 'valid' était sur FALSE
    // Le 2ème paramètre est un texte vide. Donc si tout va bien, ce vide permettra de remplacer un éventuel message d'erreur qui aurait été écrit auparavant
    // si tout va bien, alors pseudo=value. Value étant le paramètre de notre fonction, et donc le texte entré par le user dans le cjhamp concerné
  }
};

const emailChecker = (value) => {
  if (!value.match(/^[\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
    // la regex check si l'email rentré est au format email normal. Avec le '!' on dit donc 'si l'email n'est PAS dans le bon format'
    errorDisplay("email", "L'email n'est pas valide");
    email = null;
  } else {
    errorDisplay("email", "", true);
    email = value;
  }
};

const passwordChecker = (value) => {
  progressBar.classList = "";
  // Cette ligne permet d'annuler toutes les classes qui auraient pu être appliquées sur la progress bar. Par exemple : si je tape un mot de passe sécurisé, la bar est verte, mais si fnalement j'enlève toutes mes lettres, il faut que la progressBar disparaisse. À noter qu'avec la valeur comme paramètre, chaque fois que je touche au formulaire, la fonction recommence.

  if (
    !value.match(
      /^(?=.*?[A-Z])(?=(.*[a-z]){1,})(?=(.*[\d]){1,})(?=(.*[\W]){1,})(?!.*\s).{8,}$/
    )
  ) {
    errorDisplay(
      "password",
      "Minimum de 8 caractères, une majuscule, un chiffre et un caractère spécial"
      // Evidemment la regex + haut vérifie si différent de la condition du message ci-dessus
    );
    progressBar.classList.add("progeessRed");
    password = null;
    // ici on applique à la progressBar la classe CSS "progressRed"
  } else if (value.length < 12) {
    progressBar.classList.add("progressBlue");
    errorDisplay("password", "", true);
    password = value;
  } else {
    progressBar.classList.add("progressGreen");
    errorDisplay("password", "", true);
    password = value;
  }
  if (confirmPass) confirmChecker(confirmPass);
  // Cette dernière condition : si mon confirmChecker a checké mon mdp et que les 2 correspondent, mais qu'entre temps je modifie le mdp de passwordChecker, alors il faut que je puisse rejouer confirmChecker afin de re-checker que mes 2 mdp correspondent toujours
  // condition : Si il y a une valeur dans confirm pass (donc que le mdp a été confirmé avec TRUE)
  // alors : je check la correspondance des mdp en rentrant la valeur validée en paramètre de confirmChecker
};

const confirmChecker = (value) => {
  if (value !== password) {
    errorDisplay("confirm", "Les mots de passe ne correspondent pas");
    confirmPass = false;
    // Ici un booléen nous suffit
  } else {
    errorDisplay("confirm", "", true);
    confirmPass = true;
    // Attention ! Une fois le mdp confirmé, si je modifie le mdp du champ précédent, il va rester en true, alors que les 2 mdp ne correponderont plus. Pour cela on va ajouter une condition en toute fin de la fonction passwordChecker()
  }
};

inputs.forEach((input) => {
  input.addEventListener("input", (e) => {
    switch (e.target.id) {
      case "pseudo":
        pseudoChecker(e.target.value);
        break;
      case "email":
        emailChecker(e.target.value);
        break;
      case "password":
        passwordChecker(e.target.value);
        break;
      case "confirm":
        confirmChecker(e.target.value);
        break;
      default:
        null;
    }
  });
});
// - Note 1 : ici on a créé 4 eventListener (1 sur chaque input)
// - Note 2 : on crée un switch pour jouer une fonction selon l'input qui est clické (via l'id de l'input récupéré grâce au e.target.id).
//   En gros, lorsque je vais écrire du texte dans un champ de formulaire, cela va déclencher les fonctions de vérification du champ dans lequel j'écris (pseudoChecker(), emailChecker(), etc....)
// Note 3 : on oublie jamais de mettre un cas par défaut, par exemple ici qui renvoie "null", chaque fois que l'on crée un switch
// Note 4 : e.target.value permet de récupérer ce qui est écrit dans le input

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (pseudo && email && password && confirmPass) {
    const data = {
      pseudo: pseudo,
      email: email,
      password: password,
    };
    alert("Inscription validée");

    pseudo = null;
    email = null;
    password = null;
    confirmPass = null;

    inputs.forEach((input) => (input.value = ""));
    progressBar.classList = "";
  } else {
    alert("Veuillez remplir correctement le formulaire");
  }
});
// - NOTE 1 : On a déclaré tout en haut la variable form en allant chercher la balise "form" avec un querySelector
// - NOTE 2 : Avec "submit" la fonction va se déclencher au click sur un input de type "submit"
// - NOTE 3 : Si je clique sur la validation du formulaire pour le soumettre, il apparaîtra un dixième de seconde dans la console (si je mets un console.log), car juste après avoir soumis, la page du formulaire s'actualise. Pour éviter ce comportement par défaut, on va utiliser la method preventDefaut()
// - NOTE 4 : la condition signifie 'si nos 4 éléments sont true', autrement dit s'ils ont une valeur (valeur inscrite dans les fonctions précédentes, lorsqu'il n'y avait pas d'erreur, et qu'on écrivait pseudo=value, email=value, password=value, confirmPass=true)
// - NOTE 5 : on lui dit enduite sous quelle forme d'objet et avec quelles clé:valeur on souhaite soumettre le formulaire
// - NOTE 6 : ici on a écrit const data = {pseudo: pseudo, email: email, password: password} mais en fait, lorsque ça se répète, on pouvait très bien envoyer l'objet ainsi : const data = {pseudo, email, password} et le résultat aurait été le même
// - NOTE 7 : on repasse nos valeurs à null pour pouvoir vider le formulaire une fois envoyé (à cause du comportement que l'on a retiré de rafraichissement automatique)
// - NOTE 8 : avec un forEach on vide tous les input
// - NOTE 9 : et enfin, on efface la progressBar
