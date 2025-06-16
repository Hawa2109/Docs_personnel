// alert("Bonjour, monde!");
// -------------------------------------------------- EXERCICE 1 -------------------------------------------------- //
// j'affiche une image losque l'on clicke sur un bouton
// je récupére le conteneur d'affichage
let conteneurAffichage = document.querySelector(".conteneur-image");

// je récupère les boutons
let boutonVert = document.querySelector("#vert");
let boutonRose = document.querySelector("#rose");
let boutonJaune = document.querySelector("#jaune");
let boutonBleu = document.querySelector("#bleu");
let boutonMarron = document.querySelector("#marron");

// Vérifiez que les boutons existent avant d'ajouter des écouteurs d'événements
if (boutonVert) {
    boutonVert.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "./img/img-1.png"; // Chemin absolu
        image.className = "image";

        // je vide le conteneur d'affichage
        conteneurAffichage.innerHTML = "";
        // j'ajoute l'image au conteneur d'affichage
        conteneurAffichage.appendChild(image);
    });
}

if (boutonRose) {
    boutonRose.addEventListener("click", function () {
        let image = document.createElement("img");
        // je récupére le chemin de l'image
        image.src = "./img/img-2.png"; 
        image.className = "image";

        // je vide le conteneur d'affichage
        conteneurAffichage.innerHTML = "";
        // j'ajoute l'image au conteneur d'affichage
        conteneurAffichage.appendChild(image);
    });
}

if (boutonJaune) {
    boutonJaune.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "./img/img-3.png"; 
        image.className = "image";


        // je vide le conteneur d'affichage
        conteneurAffichage.innerHTML = "";
        // j'ajoute l'image au conteneur d'affichage
        conteneurAffichage.appendChild(image);
    });
}

if (boutonBleu) {
    boutonBleu.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "./img/img-4.png"; 
        image.className = "image";

        // je vide le conteneur d'affichage
        conteneurAffichage.innerHTML = "";
        // j'ajoute l'image au conteneur d'affichage
        conteneurAffichage.appendChild(image);
    });
}

if (boutonMarron) {
    boutonMarron.addEventListener("click", function () {
        let image = document.createElement("img");
        image.src = "./img/img-5.png"; 
        image.className = "image";

       
        // je vide le conteneur d'affichage
        conteneurAffichage.innerHTML = "";
        // j'ajoute l'image au conteneur d'affichage
        conteneurAffichage.appendChild(image);
    });
}

// ------------------------------ EXERCICE 2 ------------------------------ //

// Je récupére mon formulaire
let formulaire = document.querySelector("form");

// Je récupére les champs de mon formulaire
let inputNom = document.querySelector("#lastName");
// console.log(inputNom);

let inputPrenom = document.querySelector("#firstName");
// console.log(inputPrenom);

let inputEmail = document.querySelector("#email");
// console.log(inputEmail);

let inputMdp = document.querySelector("#password");
// console.log(inputMdp);


// Je récupére les messages d'erreur
let formError = document.querySelector("#formError");
let nomError = document.querySelector("#nomError");
// console.log(nomError);
let prenomError = document.querySelector("#prenomError");
let emailError = document.querySelector("#emailError");
let mdpError = document.querySelector("#mdpError");

// Je récupére les éléments de la liste pour afficher les données
let nomAffiche = document.querySelector("#nomAffiche");
// console.log(nomAffiche);
let prenomAffiche = document.querySelector("#prenomAffiche");
let emailAffiche = document.querySelector("#emailAffiche");

// J'ajoute un écouteur d'événement sur le formulaire
formulaire.addEventListener("submit", function (event) {
    // J'annule l'envoi du formulaire pour éviter le rechargement de la page
    event.preventDefault();

    // Je récupére les valeurs des champs avec un trim pour enlever les espaces
    let nomValue = inputNom.value.trim();
    let prenomValue = inputPrenom.value.trim();
    let emailValue = inputEmail.value.trim();
    let mdpValue = inputMdp.value.trim();

    // Vérification si tous les champs sont vides
    if (!nomValue && !prenomValue && !emailValue && !mdpValue) {
        // Affiche le message d'erreur global
        formError.classList.remove("d-none"); 
        formError.classList.add("error");

        // Masquer les messages d'erreur des champs individuels
        nomError.classList.add("d-none");
        prenomError.classList.add("d-none");
        emailError.classList.add("d-none");
        mdpError.classList.add("d-none");

         // Arrête l'exécution du reste du code
        return;
    } else {
        // Cache le message d'erreur global si les champs ne sont pas tous vides
        formError.classList.add("d-none"); 
    }

    // ------------------------------- NOM
    // je vérifie si le nom est valide (2 à 15 caractéres, pas de chiffres, pas de caractères spéciaux)
    if (nomValue.length < 2 || nomValue.length > 15 || !/^[a-zA-Z]+$/.test(nomValue)) {
        nomError.classList.add("error");
        nomError.classList.remove("d-none");
    } else {
        nomError.classList.remove("error");
        nomError.classList.add("d-none");
    }

    // ------------------------------- PRENOM
    // je vérifie si le prénom est valide (2 à 15 caractéres, pas de chiffres, pas de caractères spéciaux)
    if (prenomValue.length < 2 || prenomValue.length > 15 || !/^[a-zA-Z]+$/.test(prenomValue)) {
        prenomError.classList.add("error");
        prenomError.classList.remove("d-none");
    } else {
        prenomError.classList.remove("error");
        prenomError.classList.add("d-none");
    }

    // ------------------------------- EMAIL
    // Je vérifie si l'email est valide avec une regex
    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(emailValue)) {
        emailError.classList.add("error");
        emailError.classList.remove("d-none");
    } else {
        emailError.classList.remove("error");
        emailError.classList.add("d-none");
    }

    // ------------------------------- MOT DE PASSE
    // Je vérifie si le mot de passe contient au moins une lettre majuscule, une lettre minuscule et un chiffre  (min 8 max 20 caractéres)
    if (mdpValue.length < 8 || mdpValue.length > 20 || !/^[a-zA-Z0-9]+$/.test(mdpValue)) {
        mdpError.classList.add("error");
        mdpError.classList.remove("d-none");
    } else {
        mdpError.classList.remove("error");
        mdpError.classList.add("d-none");
    }

    // j'affiche les données si tout est bon
    if (
        nomError.classList.contains("d-none") && prenomError.classList.contains("d-none") && emailError.classList.contains("d-none") &&
mdpError.classList.contains("d-none")
    ) 
    // si je n'ai plus de message d'erreur alors j'affiche les données
    {
        nomAffiche.innerHTML = `Nom : ${nomValue}`;
        prenomAffiche.innerHTML = `Prénom : ${prenomValue}`;
        emailAffiche.innerHTML = `Email : ${emailValue}`;
        // Je vide les champs du formulaire
        inputNom.value = "";
        inputPrenom.value = "";
        inputEmail.value = "";
        inputMdp.value = "";
    }
});




