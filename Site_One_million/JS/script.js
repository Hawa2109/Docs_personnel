// alert("Coucou, je teste mon script JS");
// Pour le hover des card
let card = document.querySelector(".carte");
card.document.addEventListener("mouseover", function () {
  card.addEventListener("mouseenter", function () {
    card.classList.add("hovered");
  });
  card.addEventListener("mouseleave", function () {
    card.classList.remove("hovered");
  });
});

// **********************************
  // Validation du formulaire
// **************************************

// On récupére notre formulaire
let formulaire = document.querySelector("form");

// On récupére notre champ prenom
let inputPrenom = document.getElementById("prenom");

// On récupére notre champ nom 
let inputNom = document.querySelector("#nom");

// on récupére notre champ email 
let inputEmail = document.querySelector("#email");

// on ajout l'écouteur d'événement
formulaire.addEventListener("submit", function(event){
event.preventDefault();
//un trim() pour éviter les espaces
let valeurP = inputPrenom.value.trim();
let valeurN = inputNom.value.trim();
let valeurE = inputEmail.value.trim();

// Pour la taille de la valeur  du champ pseudo
let taillePrenom = valeurP.length;

// On créer un regex pour notre champ email
let regexMail = /^[a-z0-9.%+-]+@[a-z0-9.-]+\.[a-z]{2,4}a$/;

// ***************************** PRENOM ***********************
if (taillePrenom < 2 || taillePrenom > 10) {
  // inputPrenom.classList.add("valid");
  document.querySelector("#prenomError").classList.add("error");
  document.querySelector("#prenomError").classList.remove("d-none");
} else {
  // inputPrenom.classList.add("invalid");
  document.querySelector("#prenomError").classList.add("d-none");
}




})

